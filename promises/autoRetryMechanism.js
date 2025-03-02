// Auto Retry when a network call fails
// fetchNews

// fetchWithAutoRetry(fetchNews,5)

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// Method 1
function fetchWithAutoRetry(fetcher, maxRetryCount) {
  return new Promise((resolve, reject) => {
    let numOfRetries = 0;
    const caller = () =>
      fetcher()
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          if (numOfRetries < maxRetryCount) {
            numOfRetries += 1;
            console.log(`Retrying... Attempt ${numOfRetries}`);

            // Optional: Adding a delay before retrying
            await wait(1000);
            
            caller();
          } else {
            reject(error);
          }
        });
    
    // numOfRetries = 1;
    caller();
  });
}

// Method 2
async function fetchWithAutoRetry(fetcher, maxRetryCount) {
  let numOfRetries = 0;

  while (numOfRetries <= maxRetryCount) {
    try {
      return await fetcher();
    } catch (error) {
      numOfRetries++;
      if (numOfRetries > maxRetryCount) {
        console.error("Max retries reached. Failing...");
        throw error;
      }

      console.warn(`Retrying... Attempt ${numOfRetries}`);
      await wait(2 ** numOfRetries * 500); // Exponential backoff (0.5s, 1s, 2s, 4s, ...)
    }
  }
}

const fetchAllanProfile = async () => {
  console.log("Fetching...");
  const response = await fetch("https://api.github.com/users/Allan2000-Git");
  const data = await response.json();
  console.log(data);
  return data;
};

fetchWithAutoRetry(fetchAllanProfile, 5);

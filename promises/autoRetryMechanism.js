// Auto Retry when a network call fails
// fetchNews

// fetchWithAutoRetry(fetchNews,5)

async function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// Method 1
function fetchWithAutoRetry(fetcher, maxRetryCount = 5, delay = 1000) {
  return new Promise((resolve, reject) => {
    let numOfRetries = 0;
    const caller = () =>
      fetcher()
        .then((data) => {
          resolve(data);
        })
        .catch(async (error) => {
          if (numOfRetries < maxRetryCount) {
            numOfRetries += 1;
            console.log(`Retrying... Attempt ${numOfRetries}`);

            // Optional: Adding a delay before retrying
            await wait(delay);
            
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
      await wait(delay);
      // await wait(2 ** numOfRetries * 500); // Exponential backoff (0.5s, 1s, 2s, 4s, ...)
    }
  }
}s

const fetchData = () => {
   return new Promise((resolve, reject) => {
     // Simulate a request that might fail
     const success = Math.random() > 0.5; // 50% chance of success
     console.log(success, "success")
     if (success) {
         resolve("Data fetched successfully!");
     } else {
     reject("Failed to fetch data");
     }
   });
};

fetchWithAutoRetry(fetchData, 3, 1000)
 .then((result) => console.log(result))
 .catch((error) => console.log(error));

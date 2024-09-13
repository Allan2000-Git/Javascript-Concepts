// Auto Retry when a network call fails
// fetchNews

// fetchWithAutoRetry(fetchNews,5)

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
            caller();
          } else {
            reject(error);
          }
        });
    
    numOfRetries = 1;
    caller();
  });
}

const fetchAllanProfile = async () => {
  console.log("Fetching...");
  const response = await fetch("https://api.github.com/users/Allan2000-Git");
  const data = await response.json();
  console.log(data);
  return data;
};

fetchWithAutoRetry(fetchAllanProfile, 5);

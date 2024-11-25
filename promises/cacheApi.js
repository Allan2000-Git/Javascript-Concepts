function cacheApiCall(time) {
    const cache = {};

    return async function(url, config) {
        const key = `${url}-${JSON.stringify(config)}`;
        const entry = cache[key];
        if(!entry || Date.now() > entry.expiryTime) {
            console.log("making new api call");
            try {
                const value = await makeApiCall(url, config)
                cache[key] = { value, expiryTime: Date.now() + time };
            } catch(e) {
                console.log(error);
            }
        }
        return cache[key].value;
    }
}
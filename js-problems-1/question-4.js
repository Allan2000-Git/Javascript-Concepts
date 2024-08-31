// create a local storage with a timer

const myLocalStorage = () => {
    let timer = null;

    return {
        setItem: function (key, value, delay) {
            if(timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                window.localStorage.setItem(key, value);
                console.log("Value has been set")

                setTimeout(() => {
                    window.localStorage.removeItem(key);
                    timer = null;
                }, delay)
            }, delay);
        },
        getItem: function (key) {
            if(timer) {
                return window.localStorage.getItem(key);
            }
            return null;
        }
    }
}

const storage = myLocalStorage();
storage.setItem("foo", "bar", 1000);
storage.getItem("foo");
function createSetTimeout() {
    let timerId = 0;
    let timerMap = {};

    function setTimeoutPolyfill(callback, delay, ...args) {
        let id = timerId++;
        timerMap[id] = callback;

        let now = Date.now();

        function triggerCallback() {
            if(!timerMap[id]) return;

            if(Date.now() > now + delay) {
                callback.apply(this, ...args);
            } else {
                requestIdleCallback(triggerCallback)
            }
        }

        requestIdleCallback(triggerCallback)

        return id;
    }

    function clearTimeoutPolyfill(id) {
        delete timerMap[id];
    }

    return {
        setTimeoutPolyfill,
        clearTimeoutPolyfill
    }
}

/**
 * requestIdleCallback
 * it queues the function to be called during the browser's idle period
 *
 * without requestIdleCallback, it will reach the maximum call stack size
*/
function createSetInterval() {
    let intervalId = 1;
    let intervalMap = {};

    function setIntervalPolyfill(callback, delay, ...args) {
        let id = intervalId++;

        function reTriggerCallback() {
            intervalMap[id] = setTimeout(function() {
                callback.apply(this, args);
                if(intervalMap[id]) {
                    reTriggerCallback();
                }
            }, delay);
        }

        reTriggerCallback();

        return id;
    }

    function clearIntervalPolyfill(id) {
        clearInterval(id)
        delete intervalMap[id];
    }

    return {
        setIntervalPolyfill,
        clearIntervalPolyfill
    }
}
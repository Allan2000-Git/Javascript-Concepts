function throttleByCount(callback, delay) {
    let isCalled = false;
    let timerId = null;

    return function(...args) {
        if(!isCalled) {
            isCalled = true;
            clearTimeout(timerId);
            callback.apply(this, args);
            timerId = setTimeout(() => {
                isCalled = false;
            }, delay);
        }
    }
}
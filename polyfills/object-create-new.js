function customNew(callback, ...args) {
    const newObj = {};

    Object.setPrototypeOf(newObj, customNew.prototype);
    Object.getPrototypeOf(newObj).constructor(callback);

    const result = callback.apply(newObj, args);

    return result || newObj;
}
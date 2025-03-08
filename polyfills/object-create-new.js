function customNew(callback, ...args) {
    // Step 1: Create an empty object
    const newObj = {};

    // Step 2: Set the prototype of newObj to the constructor's prototype
    Object.setPrototypeOf(newObj, callback.prototype);

    // Step 3: Call the constructor with newObj as 'this'
    const result = callback.apply(newObj, args);

    // Step 4: Return the new object unless constructor returns an object
    return result && typeof result === "object" ? result : newObj;
}

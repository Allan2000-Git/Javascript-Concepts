function customObjectCreate(obj) {
    const newObj = {};
    Object.setPrototypeOf(newObj, obj);
    return newObj;
}
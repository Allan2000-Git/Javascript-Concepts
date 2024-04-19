
function PromisePolyFill(executor){
    let onResolve;
    let onReject;
    let isFullfilled = false;
    let isRejected = false;
    let isCalled = false;
    let data;
    let error;

    function resolve(value){
        isFullfilled = true;
        data = value;

        if(typeof onResolve === 'function' && !isCalled){
            onResolve(value);
            isCalled = true;
        }
    }

    function reject(err){
        isRejected = true;
        error = err;

        if(typeof onReject === 'function' && !isCalled){
            onReject(err);
            isCalled = true;
        }
    }

    this.then = function (thenHandler) {
        onResolve = thenHandler;
        if(isFullfilled && !isCalled){
            onResolve(data);
            isCalled = true;
        }
        return this;
    }

    this.catch = function (catchHandler) {
        onReject = catchHandler;
        if(isRejected && !isCalled){
            onReject(error);
            isCalled = true;
        }
        return this;
    }

    try {
        executor(resolve, reject);
    } catch (error) {
        onReject(error);
    }
}

const promise = new PromisePolyFill((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise polyfill");
    }, 1000);
})

promise
.then((res) => console.log(res))
.catch((err) => console.log(err))
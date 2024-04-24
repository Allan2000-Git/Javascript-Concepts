// Execute async tasks in Parallel
function createAsyncTask() {
    const value = Math.floor(Math.random() * 10);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value < 5) {
                reject(`Error ${value}`);
            } else {
                resolve(value * 1000);
            }
        }, value * 1000);
    });
}

let tasks = [
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask()
];

const asyncParallel = (tasks, callback) => {
    const results = [];
    const errors = [];

    let taskCompleted = 0;
    tasks.forEach(task => {
        task
        .then((res) => results.push(res))
        .catch((err) => errors.push(err))
        .finally(() => {
            taskCompleted++;
            if(taskCompleted >= tasks.length){
                callback(errors, results);
            }
        })
    })
};

asyncParallel(tasks, (error, result) => {
    console.log("error", error);
    console.log("result", result);
})
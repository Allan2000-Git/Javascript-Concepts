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

const asyncSequence = async (tasks, callback) => {
    const results = [];
    const errors = [];

    let taskCompleted = 0;
    for (let task of tasks) {
        try {
            let res = await task;
            results.push(res);
        } catch (e) {
            errors.push(e);
        } finally {
            taskCompleted++;

            if (taskCompleted >= tasks.length) {
                callback(errors, results);
            }
        }
    }

};

asyncSequence(tasks, (error, result) => {
    console.log("error", error);
    console.log("result", result);
})
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task completed');
        resolve();//when we call this function, then the promise is consumed
    }, 1000);
});

myPromise.then((resolve, reject) => {
    console.log("Promise consumed");
})


////////////////////////////////////////////////////////////////
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2 completed');
        resolve();
    }, 1000);
}).then(()=>{
    console.log("Promise 2 consumed");
})


////////////////////////////////////////////////////////////////
//passing parameters to resolve()

const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 3 completed');
        resolve({username:"allan",email:"allan@gmail.com"});
    }, 1000);
})

newPromise.then((resolve, reject) => {
    console.log(resolve);
})

///////////////////////////////////////////////////////////////

const newPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error=false;
        if(error==false){
            console.log('Async task 4 completed');
            resolve({username:"allan",email:"allan@gmail.com"});
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

newPromise2.then((resolve, reject) => {
    console.log(resolve);
    return resolve.username;
}).then((resolve, reject) => {
    console.log(resolve);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Promise is FINALLY done");
})


//using async-await functionality

const newPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error=true;
        if(error==false){
            resolve({username:"JS",email:"js2023@gmail.com"});
        }else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumePromise3(){
    try{
        const result = await newPromise3;
        console.log(result);
    } catch(err){
        console.log(err);
    }
}

consumePromise3();
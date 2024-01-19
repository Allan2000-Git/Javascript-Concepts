let counter=0;
const getData = () => {
    console.log("Throttling...", counter++);
}

const throttle = (cb, limit) => {
    let flag=true; // to restrict the function from executing for delay of 'limit'
    return function(...args){
        let context=this;
        if(flag){
            cb.aply(context, args);
            flag=false;
            setTimeout(() => {
                flag=true;
            }, limit);
        }
    }
}

const betterFunction = throttle(getData, 300);
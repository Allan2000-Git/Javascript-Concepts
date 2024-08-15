let counter=0;
const getData = () => {
    console.log("Throttling...", counter++);
}

// solution-1
const throttle = (cb, limit) => {
    let flag=true; // to restrict the function from executing for delay of 'limit'
    return function(...args){
        let context=this;
        if(flag){
            cb.apply(context, args);
            flag=false;
            setTimeout(() => {
                flag=true;
            }, limit);
        }
    }
}

const betterFunction = throttle(getData, 300);

// solution - 2
function throttle(func, wait) {
  let timer = null;
  let lastArgs = null;
  
  return function(...args) {
    if(timer) {
      lastArgs = args;
    } else {
      func.apply(this, args);
      timer = setTimeout(()=>{
        if(lastArgs) {
          func.apply(this, lastArgs);
        }
      }, wait);
    }
  }
}

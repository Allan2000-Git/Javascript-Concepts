// 0 1 2 3 4 => let (block scoped)
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        // console.log(i);
    }, 2000);
}

// 5 5 5 5 5 => var (points to same memory location | gobal scoped)
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        // console.log(i);
    }, 2000);
}

for (var i = 0; i < 5; i++) {
    function print(val){
        setTimeout(() => {
            console.log(val);
        }, 2000);
    }
    // print(i)
}

//-----------------------------------

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// ----------------------------------

let arr = [0, 0, 0, 0, 0];
for (var i = 0; i < arr.length - 1; i++) {
  setTimeout(() => {
      ++arr[i];
      console.log(arr);
  }, 1000 * i);  
}

// ------------------------------------

let arr = [0, 0, 0, 0, 0];
for (let i = 0; i < arr.length - 1; i++) {
  setTimeout(() => {
      ++arr[i];
      console.log(arr);
  }, 1000 * i);  
}


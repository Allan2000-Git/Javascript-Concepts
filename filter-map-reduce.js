// const coding=["html","css","js","react","tailwind","typescript"]

// coding.forEach((item)=>{
//     console.log(item);
// })

// const func = coding.forEach((item)=>{
//                 //console.log(item);
//                 return item
//             })

// console.log(func);


//================================================================
//                   filter
//================================================================
const nums=[1,2,3,4,5,6,7,8,9,10]
// nums.filter((num)=> console.log(num%2==0))

// const ans = nums.filter((num)=> num>=5) // no return is required if scope {} is not used
// const ans = nums.filter((num)=>{
//     return  num>=5
// })   // return is required if scope is used
// console.log(ans);


//================================================================
//                   map
//================================================================
// const double = nums.map((num)=> num*2);
// console.log(double);


//================================================================
//                   chaining with filter + map
//================================================================
// const chaining1 = nums.map((num)=> num*2).filter((num)=>num%3==0);
// console.log(chaining1);

// const chaining2 = nums.filter((num)=> num%5 ==1).map((num)=> num+10)
// console.log(chaining2);/




//================================================================
//                   reduce
//================================================================
let initialValue=0;
const sum = nums.reduce((accumulator, currentNum)=> accumulator + currentNum, initialValue);
console.log(sum);
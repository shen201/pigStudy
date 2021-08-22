let arr = [1, 2, 3, 4, 5];
console.log(arr.some(function (value) {
    return value % 2 == 0;
}));
console.log(arr.every(function (value) {
    return value % 2 == 0;
}));

console.log(("you are small pig pig".indexOf("pig")));

let a = 0 && 1;
console.log(a);

// some every ES6
// some是否有一个 存在
// every是否全部都 

// let res = arr.some((item) => {
//     // if (item % 2 == 0) {
//     //     return true; // true代表满足条件
//     // } else {
//     //     return false;
//     // }
//     return item % 2 == 0;
// });
let res = arr.some((item) => item % 2 == 0);
// let res = arr.some((item) => !(item % 2));
console.log(res);
// some接受一个布尔函数作为参数
// 布尔函数，就是返回布尔值的函数
// some的返回值，也是一个布尔值

// function sum(a, b){
//     return a + b;
// };
// const sum = (a, b) => {
//     return a + b;
// };
const sum = (a, b) => a + b;


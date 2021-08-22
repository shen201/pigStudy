function double(arr){
    let res=[];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]*2);
    }
    return res;
}
let arr=[1,3,5,7,9];

function fn(){
    // 函数声明
}
let fn2 = function (){
    // 函数表达式，把一个匿名函数赋值给一个变量
}
let fn3 = function fnn(){
    // 函数表达式，把一个具名函数赋值给一个变量
}
let fn4 = () => {
    // 箭头函数
    // 这个是ES6的新特性
    // 首先它很简洁
    // 其次，它一定是匿名的
    // 另外还有this的问题，箭头函数的this指向外部
};

function double2(arr){
    let res = [];
    arr.forEach((item) => {
        res.push(item * 2);
    });
    return res;
}
console.log(double2(arr));
double(arr);
console.log(arr);
console.log(double(arr));

let str = "";
for (let i = 0; i <=10; i++) {
   for(let j = 1;j<=i;j++){
       str = str + "@"
   }
    str = str + "\n"
}
console.log(str);
let arr1 = [1,3,5];
let arr2 = [2,4,6];
arr1.push(...arr2);
arr1.push(2, 4, 6);
let arr4 = [...arr2];
let arr5 = [...arr1, ...arr2, ...arr3];
// [...arr2] = [2, 4, 6]
// ...[1, 2, 3] = 1, 2, 3
// console.log(arr1);

function fun(arr1,arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
        console.log(arr1);
    }
    return arr1;
}
console.log(fun(arr1,arr2));

let arr3=[2,3,4,5,6];
let num=5;
// if (arr3.includes(num)) {
//     console.log(true);  
// }
// else{
//     console.log(false);
// };
console.log(arr3.includes(num));


function isMatch(arr3,num){
    for (let i = 0; i < arr3.length;) {
        if (arr3[i] != num) {
            i++;
        }else{
            return true;
        }
    }
    return false;
}
console.log(isMatch(arr3,num));

function isMatch2(arr3, num){
    for (let i = 0; i < arr3.length; i++) {
        if(arr3[i] == num){
            return true;
        }
    }
    return false;
}
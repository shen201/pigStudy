let a =2;
let b = 4;
let arr = [1,3,5,7,9,11];

function s(arr,start,end) {
    let res = [];
    res = arr.slice(start,end);
    return res;
}

s(arr,a,b);
console.log(s(arr,a,b));

function s1(arr,start,end) {
    let res1 = [];
    for (let i = start; i <= end; i++) {
        res1.push(arr[i]);
        
    }
    return res1;
}
s1(arr,a,b);
console.log(s1(arr,a,b));

console.log(arr.slice(0, 2), arr.slice(2, 4), arr.slice(4));

let str = "123456";
console.log(str.slice(3, 5));
console.log(arr[0]);
console.log(str[0]);

console.log(arr.reverse());
console.log(str.split(''));
console.log(str.split('').reverse());
console.log(str.split('').reverse().join(''));

// 声明提升，有两种
var x; // 1. 变量声明
function fn(){}; // 2. 函数声明

var y = 3; // var y;声明   y = 3;赋值

// var z;
console.log(z);
var z = 5;
// z = 5;

fn2();
function fn2(){ // 定义：以这种形式定义的函数就叫函数声明
    console.log('fn2');
}
// fn3();
var fn3 = function(){
    console.log('fn3');
    return 1;
};
// let a = fn3();
// let a = 1;
// var fn3;
// fn3 = function(){
//     console.log('fn3');
// }

function fun() {
    console.log(fun1());
    // fun1();
    
}
fun(fun1());

function fun1() {
    console.log("kkk");
}

// 在JavaScript中，函数和数字、字符串等数据类型一样
// 可以作为值来传递
// 术语上，这叫做“函数是一等公民”
function run(fn){
    let res = fn();
    return res;
}
let runResult = run(fn3);
console.log(runResult);

let arr1 = [2,4,6];
let res11 = arr1.map(function(item, index){
    return index;
})
console.log(res11);
let newarr1 = arr1.map(function (item) {
    let rrr = item*3;
    return rrr;
    
});
console.log(newarr1);
// 用for循环的方法
// function fun3(){
//     let result=[];
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i]*3);
//     }
//     return result;
// }
// fun3(arr1);
// console.log(fun3(arr1));

// forEach
function fun4(){
    let res = [];
    let test = arr1.forEach(function(item, index){
        res.push(item * 3);
        return 1;
    });
    console.log(test);
    return res;
}
console.log(fun4());
function fun5(){
    let test = arr1.map(function(item, index){
        return 1;
        // return item * 3;
    });
    console.log(test);
}
console.log(fun5());


let str1 = "you are a small p'Ig,ugly Pig doesn't not love beautiful pig pig";
let str2 = str1.match(/pig/g);
console.log(str2);

let arr5 = [1, 2, 3, 4, 5];
let res5 = arr5.map(function(item){return item + 1});
console.log(res5);

function fn0(){
    let a = 1;
    let b = 5;
    let c = a + b;
    console.log(c);
    let d = c * c;
    return d;
}
let result0 = fn0();

// 两个斜杠，是注释的意思
/a/; // 两个斜杠中间写东西，那么这就是一个正则表达式
/[abc]{4,5}[p]{1,}/;

console.log(str1.match(/pig/));
console.log(str1.match(/[a-z]+[']?[a-z]*/ig));
// 跟在正则表达式后面的字母，叫做正则表达式的修饰符
// 他是用来表示正则匹配的模式
// g代表的是global，也就是全局匹配的意思
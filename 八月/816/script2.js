function fn1(){

}
let fn2 = function(a, b){
    return a + b;
}
let fn3 = (a, b) => {
    return a + b;
}
let fn4 = (a, b) => a + b;
// 箭头函数，如果在函数体（也就是花括号）中
// 直接return值
// 那么，花括号和return可以缩略不写
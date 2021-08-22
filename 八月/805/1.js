let date = new Date();
// console.dir(date.getTime()); // 1970.1.1起到目前的时间
// console.log(+date);
// console.log({});

let date1 = new Date('2021-8-5');
// console.log(date1);

// setTimeout('alert("you are a pig")',2000)
let timer = setInterval(() => {
    // console.log("you are a pig pig");
}, 2000);
// clearInterval(timer);
setTimeout(function(){
    // console.log('ifsdfdsf');
}, 1000);
setTimeout(() => {
    // 箭头函数
    
}, 1);

function fn(){
    // 声明了一个函数，名字叫做fn
    // 函数声明
    // console.log('fn');
}
let fn2 = function fn0 (num1, num2){
    // 把一个函数赋值给了变量fn2
    // 这个函数既可以是匿名的，也可以是具名的
    // 函数表达式
    // this
}
let fn3 = (num1, num2) => {
    // 把一个箭头函数赋值给了变量fn3
    // 箭头函数一定是匿名的
    // this
};

let sayFn = function(){
    console.log(this.name);
}
let person1 = {
    name: "xiaoming",
    // say: function(){
    //     // this
    //     // 就是指一个方法的拥有者
    //     // console.log(this == person1);
    //     console.log(this.name);
    //     // console.log('xiaoming');
    // }
};
person1.say = sayFn;
person1.say();
let person2 = {
    name: "xiaohong",
    // say: function(){
    //     console.log(this.name);
    // }
}
person2.say = sayFn;
person2.say();
// this是一个很复杂的问题，this这个关键字除了在函数内可以使用
// 在函数外也可以使用
// 但是，在不同的地方，this的值是不一样的
console.log(this);
// 比如说，在全局作用域下，this指向的是window
// 但是，在一个属于某个对象的函数中，this指向函数所属于的那个对象

let sayFn2 = () => {
    // 在箭头函数中
    // this指向的是，函数外面代码所在环境的this
    console.log(this);
    console.log(this.name);
}
person1.say2 = sayFn2;
person1.say2();


let str = "you are a pig pig";
index = str.indexOf("pig");
// console.log(index);

let a = typeof date;
let b = [];
// console.log(b instanceof Array);
// console.log(date instanceof Date);
// // instance 实例
// console.log(a)

// 在JavaScript中，函数是一等公民
// 在JavaScript中，函数可以作为一个值进行传递
// 并不是所有语言的函数，都是一等公民
// 比如在Java中，函数就只能是对象的方法
// 因此，对于Java而言，函数中的this，指向的只能是函数所属的那个对象
// 但是，在JavaScript中，由于函数是一等公民
// 函数可以作为一个值，传递到任意的地方，不一定是一个对象的方法
// 所以，在JavaScript中，this的值有很多种，很灵活
// new操作符

// 跟对象有关 形式：new Name，Name第一个字母要大写

// let date = new Date();
// console.dir(date);

// new是用来创建对象用的操作符
// 这个语法来自于Java
// 是从Java里面借鉴来的

// 用法：
// new的用法是
// 在new后面跟一个构造函数
// new Date(); => 日期对象{}
// new Date => new Date()

// 什么是构造函数呢？
// 首先，构造函数，它首先是一个函数
// 实际上，构造函数和普通函数没有什么两样
// 意思就是说，任何一个函数
// 其实都可以用new操作符去调用

function fn(){
    
}
let fo = new fn();
console.log(fo);
// console.log({});

// 实际上，构造函数不一定需要首字母大写
// 首字母大写是一种约定
// 用来区分普通函数和构造函数

let arr = [];
let arr1 = new Array();
console.log(arr, arr1);

function Constructor(name, age){
    // 在构造函数中
    // 使用this来指代new出来的那个对象
    // 专业的术语来讲
    // 创建出来的这个对象
    // 叫做这个构造函数的一个实例
    // 构造函数就像是一个模板
    // 你通过new去调用构造函数
    // 就相当于使用这个模板，创建了一个对象
    // 也就是说，this指向的是实例
    /* 
        let obj = {
            name: "hahaha",
            say: function(){
                console.log(this.name);
            }
        }
        obj.say();
    */
    this.name = name;
    this.age = age;
}
let instance = new Constructor('xiaoqiang', 20);
let instance1 = new Constructor('daqiang', 8);
// console.log(instance, instance1);
// instance.age = 5;
console.log(instance);
console.log(instance1);

let obj = {
    name: "xiaohong",
    age: 11
};
let obj1 = {
    name: "xiaohua",
    age: 13
}
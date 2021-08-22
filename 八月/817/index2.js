function Constructor(name, age){
    this.name = name;
    this.age = age;
    return '3';
}
let instance = new Constructor('xiaoming', 15);
console.log(instance);

// console.log(instance instanceof Constructor);
// console.log({} instanceof Constructor);

let a = '';
a = [];
// console.log(a instanceof Array);
// console.log({} instanceof Object);
// console.log(/[123]/ instanceof RegExp);
// 通过instanceof操作符
// 就可以判断一个对象，是否是某一个构造函数的实例

// 语言本身，就自带了一些构造函数
// 比如Array，就是用来创建数组的构造函数
// let arr = new Array();
// let arr1 = [];

// 构造函数中，普通函数一样，也可以有返回值
// 当我们return一个对象的时候
// 那么，new一个构造函数，创建出来的对象
// 就是return出来的那个对象

// 当构造函数return一个对象的时候
// 那么，构造函数new出来的实例
// 就是这个构造函数return出来的那个对象
// 前提是，return的是一个对象
// 如果，return的不是一个对象
// 那么，return就会被忽略
// 也就是说，构造函数new出来的实例
// 依然是this
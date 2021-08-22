// 原型与原型链
let arr = [1];
console.log(arr);
// 数组，是一种特别的对象
arr.push(5);
console.log(arr);
// push是arr的一个方法
// 也就是说，arr这个对象上面有一个属性push
// 这个push属性的值，是一个函数
// 但是当我们打印这个arr的时候
// 我们在arr上，不能直接看到push属性
// 这个push属性
// 是在arr的一个内部属性[[prototype]]上能找到
// 那这个[[prototype]]属性，指向的其实是另一个对象
// 这个对象，叫做arr的原型
// JavaScript在查找一个对象的属性的时候
// 它的规则是这样的
// 首先，在这个对象本身，去查找这个属性
// 如果查不到，就会去这个对象的原型(也就是[[prototype]]属性)上去查找
let arr2 = [];
arr2.push = function(){
    console.log('push1');
}
console.log(arr2);
console.log(arr2.push);
console.log(arr2.xiaoming);
// null
// 通过__proto__属性，我们可以访问到一个对象的原型
// 原型，本质上也是一个对象
// 所以，原型也有它自己的原型
// 这种多个原型连接成的链条，就叫做原型链
// 原型链的作用就是
// JavaScript引擎在查找一个对象的属性时
// 是会沿着原型链，向上查找的
// 原型链的尽头，就是null
// 当引擎查找属性，查到null的时候
// 就会告诉用户，要查找的属性不存在
console.log(arr2.__proto__.__proto__.__proto__);

// null 有一个含义，就是指空对象
let a;
console.log(a);
a = null;
console.log(a);

// null和undefined的区别
// 在大部分情况下，两者没有什么区别
console.log(null == undefined);
// 他们在语义上有一点细微的差别
// undefined指的是，一个变量
// 声明了，但还没赋值
// 隐含的意思就是，它还有可能是其他值
// 可能是字符串、数字等等
// null指的是，一个变量，赋值为空
// 意思就是说，明确的表达，这个变量就是一个空值
// 没有其他可能性
let b = null;
console.log(b);
b = 3;
console.log(b);
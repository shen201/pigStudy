function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log(this.name);
}
Person.prototype.eyeCount = 2;
let a = new Person('xiaoming', 3);
let b = new Person('xiaohong', 4);
console.log(a, b);
console.log(a.__proto__.sayName == b.__proto__.sayName);

// 构造函数，实例，原型
// Person，a、b，a.__proto__、b.__proto__
// 构造函数，有一个默认的属性，叫prototype
// 它指向的是实例的原型
console.log(Person.prototype == a.__proto__);
// a.__proto__.eyeCount = 3;
console.log(a, b);
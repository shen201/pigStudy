// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function(){
//     console.log(this.name);
// }

class Person {
    // 语法糖：没有创造新的东西
    // 只是对旧的东西做了一些包装
    // class就是对原型的一个语法糖
    // 让创建构造函数的语法变得更加规范，可读性更强
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayName(a){
        console.log(a);
        console.log(this.name);
    }
    run(){
        console.log('run');
    }
}
console.log(Person instanceof Function);
let a = new Person('xiaoming', 2);
a.sayName('jj haoda');
console.log(a);
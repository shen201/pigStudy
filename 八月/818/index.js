function Person(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender
    this.children = [{name: '1'}];
    this.home = {address: '111', area: '120'};
    this.sayName = function(){
        console.log(this.name);
    }
    this.run = function(){
        console.log('run');
    }
}
let res = new Person('zhuzhu',3,'male');
let res1 = new Person('zhuzhu',3,'male');
console.log(res);
console.log(res1);
console.log(res.sayName == res1.sayName);
console.log(res.__proto__ == res1.__proto__);
res.__proto__.sayName = function(){
    console.log('sayName');
}
console.log(res);
console.log(res1);
res1.sayName();
// res1.name = 'xiaozhuzhu'
// console.log(res);
// console.log(res1);
// console.log(res.__proto__);
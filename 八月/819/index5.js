let obj = {
    say: function(){
        console.log('say');
    }
}
obj.say();
let arr = [];
arr.push(1);
console.log(arr);

// a.k();
let str = '1,2,3';
console.log(str instanceof Object);
console.log(str.split(','));
// 
// let tempStr = new String(str);
// let res = tempStr.split(',');
// delete tempStr;
// 这个tempStr就叫做包装对象

let arr1 = new Array();
console.log(arr1);
// Array, Object, Number, String, Boolean
let o = new Object();
console.log(o);
let str1 = "";
let str2 = new String();
console.log(str1);
console.log(str2);

// let str11 = '';
new String();

let str00 = '000';
let str11 = "321";
let str22 = `123`;
// ``读作反引号，术语叫做模板字符串
// 模板字符串，相对于普通字符串而言，更强大
// 1. 它支持换行
// 2. 它支持嵌入表达式，通过${}的语法
console.log(str22);

"john say: 'you are bad bad'";
`john say: 'you are bad bad'`;
let person = 'xiaoming'
let adj = 'good good'
console.log(`${person} are ${adj} ${1 + 1}`);
let result = person + ' are ' + adj;
console.log(result);

console.log('abcsss');
console.log(`abc
sss`);
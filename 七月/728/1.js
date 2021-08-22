var count = 1;
while(count<6){
    // alert(count);
    // console.log(count);
    count++;
}
var c = null;
var b = undefined;
var a = "啦啦啦";
var d = 8;
var e = Math.pow(3,2);
var f = Object();
var e = Array();

let fun = function(){};
function fun1(){

}

let obj = {
    name: "xiao pig",
    age: 18,
    isStudent: true,
    parents: {
        father: 'bill gates',
        mother: 'jinsanshun'
    }
}
console.log(obj['name'])
console.log(obj.name); // select
obj.name = 'dog'; // edit
obj.gender = 'male'; // add
delete obj.name; // delete
console.log(obj);

let arr = [1, 2, 3, "ddd", null, undefined, {}, [2, 3]];
console.log(arr[0])
arr[0] = 5;
// arr[3] = 5;
arr[arr.length] = 7;
arr.push(9);
arr.push(9);
arr.push(9);
arr.push(50);
let x = arr.pop();
console.log(x);
// arr.unshift(7);
// arr.shift();
console.log(arr);
arr.reverse();
console.log(arr);
let res = arr.join('))))');
console.log(res);

let arr2 = [1, 2, 3, [4, 5, [6, 7, [8]]]];
console.log(arr2);
let matrix = [
    [0, 0], 
    [0, 1]
];
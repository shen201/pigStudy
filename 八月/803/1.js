function s(num) {
    var a = Math.pow(num, 2) * 3.14
    return a;
}
console.log(s(3));

// let a = [1, 2, 3, 4]
// for(let i=0; i<a.length;i++){
//     console.log(a[i]);
// }
// for (let j = a.length-1; j > -1; j--) {
//     console.log(a[j]);
// }

// let x = 0;
// while(x < a.length){
//     console.log(a[x]);
//     x++;
// }

// let x = a.length-1;
// while(x>-1){
//     console.log(a[x]);
//     x--;
// }

let n = (1 + 2 == 3) ? true : false;
console.log(n);
let m = (2 + 2 == 3) ? true : ((4 + 5 == 9) ? true : undefined);
console.log(m);
let nn;
if(1 + 2 == 3){
    nn = true;
}else{
    nn = false;
}
console.log(nn);
// alert('5');
// let ccc = confirm('555?')
// if(ccc){
//     // 用户点击了确认
// }else{
//     // 用户点击了取消
// }
// console.log(ccc);
// let ppp = prompt('enter your name please')
// console.log(ppp);
// var result;
// result = expresion ? val1 : val2;
let obj = {
    name: 'xiaoming',
    age: 12,
    isMale: true,
    say: function(){
        console.log('Hi');
    }
}
obj.say();
console.log(console);
console.error('you are wrong');
console.warn('warning');
console.info('something');
// console.dir();
console.count()
console.count()
console.count()
console.count()
console.countReset();
console.count()
console.count()
console.count()
console.group(234);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.groupEnd();
// console.log(("you are small pig pig".indexOf("pig")));
const str = "you are small pig pig";

// indexOf 是字符串的包装对象一个方法
// 它的作用是找出某个符合规则的字符在某个字符串中的位置
// str.indexOf(searchValue [, fromIndex])

// str.indexOf(searchValue);
// str.indexOf(searchValue, fromIndex);
let res = str.indexOf('a');
let res1 = str.indexOf('a', 5);
let res2 = str.indexOf('a', 11);
console.log(res);
console.log(res1);
console.log(res2);

function allIndexOf(str, target){
    let res = [];
    let r = str.indexOf(target);
    while(r != -1){
        res.push(r);
        r = str.indexOf(target, r + 1);
    };
    return res;
}
console.log(allIndexOf(str, 'pig'));

const it = str.matchAll(/pig/g);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

// let a = obj.a;
// let b = obj.b;
// let c = obj.c;
// let d = obj.d;
// 在没有解构表达式之前
// 想要取出一个对象里面的各个属性，很麻烦

let name = '1';
let {
    a,
    b,
    c,
    name: newName,
    arr: [item1, item2, item3],
    obj: { y: newY }
} = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    name: '444',
    arr: [1, 2, 3],
    obj: {
        x: 5,
        y: 10,
        z: 30
    }
};
console.log(newY, a, b, c, newName, item1, item2, item3);









let arr = [4, 3, 2, 1];
// let aa = arr[0];
// let bb = arr[1];
// let cc = arr[2];
// let dd = arr[3];
let [aa, bb, cc] = arr;
console.log(aa, bb, cc);
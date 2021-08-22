// ...
// 展开运算符
let a = [1, 2, 3];
let b = [4, 5, 6];
let ab = [...a, ...b];
// let ab = [[1, 2, 3], b];
// let ab = [1, 2, 3, b];
console.log(ab);

let o1 = {
    a: 1,
    b: 2,
    c: 33
};
let o2 = {
    // c: 366,
    d: 4
}
let o = {
    ...o1,
    ...o2
}
// let o = {
//     ...{
//         a: 1,
//         b: 2
//     },
//     ...o2
// }
// let o = {
//     a: 1,
//     b: 2,
//     ...o2
// }
console.log(o);
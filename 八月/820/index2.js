// && 与 ||
// 简单来讲，&&和||代表 且 和 或
// 但是，这是最浅显的含义
// 在JavaScript中，&& 和 || 有一个有趣运算规则

// && 的意思是，左右两边都要为真
// 在JavaScript引擎中，它是这样判断的
// 从左到右开始判断
// 对于&&运算符来说
// 先判断第一个值，是否为真
// 如果为假，则返回第一个值
let b = false && true;
// 如果第一个值为真，则返回第二个值
let a = true && false;
// 只有当第一个值为true的时候，第二个值才会被用到
let c = true && false && true && true && false;
let d = true && (true && (true && (true && false)));

let e = true && 5;
console.log(e);
console.log(0 && 1);
console.log(0 == false);
// truty falsy
// 0 null undefined false ""
console.log(0 && null && undefined && false && "" && 8);
console.log(0 || null || undefined || false || "" || 8);

let x = 0
let m = 500;
// // if(m > 90){
// //     x = 5;
// // }
// m > 90 && (x = 5);
x = m > 90 ? 5 : 0;
console.log(x);

// 总结：
// &&是真值才会开门
// ||是假值才会开门
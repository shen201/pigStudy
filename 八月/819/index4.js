// ... 收拢，剩余参数
let arr = [1, 2, 3, 4, 5];
let [a, b, ...c] = [1, 2, ...[3, 4, 5]];
let [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a, b, c);

function fn(a, b, ...c){
    // console.log(arguments);
    // let [a, b, ...c] = [1, 2, 3, 4, 5, 6];
    // let [a, b, ...c] = arguments;
    console.log(c);
    return a + b;
}
console.log(fn(1, 2, 3, 4, 5, 6));

function fn2(){
    let [...args] = arguments;
    // let [...args] = [2, 4, 6, 8, 0];
    // let [...args] = [...[2, 4, 6, 8, 0]];
    console.log(args);
    // console.log(arguments);
}
fn2(2, 4, 6, 8, 0);
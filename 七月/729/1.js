function fun(arr){
    arr.shift()
    arr.pop()
    arr.reverse()
    let result = arr.join('-');
    return result;
}
var aaa=[1,2,3,4,5,6];
let b = fun(aaa);
// console.log(b);



function add(num1, num2){
    let res = num1 + num2;
    return res;
}
let adddddd = add(1, 2);
// console.log(adddddd);



function loop(num){
    for(var i = 1; i<=num;i++){
        console.log(i)
    }
}
// loop(7); // 1, 2, 3, 4, 5, 6, 7


let array = [1, 3, 5, 7, 9, 11, 13, 15, 17];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// console.log(array[arr.length - 1]);
// console.log(array[arr.length - 2]);
// console.log(array[0]);
for(let i = array.length - 1; i >= 0 ; i--){
    if(array[i] % 5 === 0){

    }else{
        console.log(array[i]);
    }
}









for (var count = 1; count < 6; count++) {
    // console.log(count);
};
for (var i = 1;
    /*前循环语句，只执行一次*/
    i < 6;
    /*循环条件，当判断值为true的时候，就会执行循环，为false则退出循环*/
    i++
    /*后循环语句，在循环体执行完后执行*/
) {
    // 循环体
    // console.log(i);
}

var day = new Date().getDay();
let x;
switch (day) {
    case 0: x = "星期一";
        break;
    case 1: x = "星期二";
        break;
    case 2: x = "星期三";
        break;
    case 3: x = "星期四";
        break;
    case 4: x = "星期五";
        break;
    case 5: x = "星期六";
        break;
    case 6: x = "星期日";
        break;
    default: x = '123';
        break;
}
// console.log(x);
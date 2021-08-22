// function math(num){
//     return Math.round(num)
// }
// alert(math(4.5))
// alert(math(4.4))
// alert(math(2.3))
// alert(math(8.9))

function round(num){
    num = num * 10;
    var count = num % 10;
    if(count > 4){
        num = num - count + 10;
    }else{
        num = num - count;
    }
    num = num / 10;
    return num;
}
alert(round(4.4))
alert(round(4.8))
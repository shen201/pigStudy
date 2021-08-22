for (let i = 1; i <= 9; i++) {
    
    for (let j = i; j <= 9;j++) {
        // console.log(i + '*' + j + '=' + i*j);
    }
    
    
}
let a = 1;
let b = 2;
// console.log(a + b);
let c = '1';
// console.log(a + c);
// console.log(String(a) + c);
// console.log(a);
// console.log(String(a));

let arr = [0, 2, 4, 5, 6, 7, 9]
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
function getEven(arr, sldkjf){
    let arr2 = [];
    arr.forEach(function (item1, index, list){
        if(index%2 === 0){
            arr2.push(arr[index])
        }
    });
    return arr2;
}
let res = getEven(arr, 234);
console.log(res);

let res2 = arr.map(function(item){
    if(item % 2 === 0){
        return item;
    }
})
console.log(res2);
function f1(arr){
    let res = 0;
    for (let i = 0; i < arr.length;) {
        
        res = res + arr[i];
        i++;
    //    console.log(res);
    }
    return res;
}
let arr1 =[1,2,3,4,5];
console.log(f1(arr1));


function f2(array){
    let result=[];
    array.map(function(item){
        result.push(Math.pow(item,2));
    })
    return result;
}
let array = [1,2,3,4,5,6,7];
console.log(f2(array));

let arr2 = [1,2,3,4,5,6,7];
let arr3 = arr2.filter(function(item) {
    return (item%2) === 0
})
console.log(arr3);
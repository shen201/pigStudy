function fun(arr){
    for(let i = 0; i < arr.length; i = i + 1){
        if(arr[i] === 0){
            arr[i] = 1;
        }
    }
    return arr;
}
console.log(fun([1, 2, 3, 4, 0, 6, 5, 4, 0]))
// [1, 2, 3, 4, 1, 6, 5, 4, 1]
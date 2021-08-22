function fu(arr){
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 === 0){
            console.log(arr[i]);
        }
    }
};
let arr = [1,2,3,4,5,6,7,8,9,10];
fu(arr);
//  0 / 2 = 0 ---0
//  1 / 2 = 0 ---1
//  2 / 2 = 1 ---0
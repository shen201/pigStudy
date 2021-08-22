function wrapper(){
    var count = 0;
    function fn(){
        console.log(count);
        count++;
    }
    return fn;
}
let a = wrapper();
// console.log(a);
a();
a();

// function abc(){
//     console.log('abc');
// }
// abc();
// let cba = abc;
// console.log(cba);

(function(){
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
})();
/* 
(function(){

})();
(function(){

}());
叫做，立即执行表达式，英文缩写，专门名词IIFE
IIFE的意义在于，在不支持块级作用域的JavaScript环境中
通过函数作用域，模拟出来了块级作用域
*/
console.log('i: ', i);
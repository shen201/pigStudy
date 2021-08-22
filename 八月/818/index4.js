let counter = (function(){
    let count = 0;
    return function fn(){
        console.log(count);
        count++;
    }
    // return fn;
})();
// let counter = wrapper();

counter();
counter();
counter();
counter();
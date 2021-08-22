// 按值传递和按引用传递
        // 123 '123' true null undefined
        // [] {} f
        let a = {
            age: 1,
            /* so many, so big */
        };
        console.log(a);
        let b = a;
        console.log(b);
        a.age = 2;
        console.log(a);
        console.log(b);
        // 对象的赋值是引用传递
        // 它把对象的内存地址，或者说指针，赋值给了变量

        let str1 = '123';
        console.log(str1);
        let str2 = str1;
        console.log(str2);
        str1 = str1 + '5';
        console.log(str1);
        console.log(str2);
        // 按值传递

        // string number boolean null undefined object
        // object: array function date regexp
        // 数据类型天然就分为两类：
        // 基本类型和引用类型
        // 基本类型包括：
        // 字符串、数字、null、undefined、布尔值、Symbol（符号）、bigInt（大数）
        // 除此之外的其他数据类型，统统属于对象，也就是引用类型
        function fn(a, b){

        }
        console.dir(fn);

        // let、const的区别
        // let声明的变量是可以变的
        // const声明的变量是不可以变的

        let v1 = 1;
        v1 = 2;
        console.log(v1);

        const v2 = 1;
        // v2 = 2;
        console.log(v2);
        // const 就是 constant 的缩写
        // 意思就是常量
        // 所谓的常量，就是指不会变的值
        // Π就是一个最常见的常量
        const v3 = {};
        console.log(v3);
        v3.age = 1;
        console.log(v3);
        // v3 = {};
        // v3 = "";

        let v5 = 5;
        let v5 = 6;
        // let 不允许重复声明
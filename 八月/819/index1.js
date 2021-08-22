class Animal {
    constructor(){
        this.eye = 2;
        this.head = 1;
    }
    move(){
        console.log('run');
    }
}

// class Dog{
//     constructor(){
//         this.eye = 2;
//         this.head = 1;
//         this.legs = 4;
//     }
// }
class Dog extends Animal{
    constructor(){
        super();
        this.legs = 4;
    }
    bark(){
        console.log('wangwangwang!');
    }
}

let hsq = new Dog();
console.log(hsq);
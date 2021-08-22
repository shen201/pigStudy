class Square {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
let a = new Square(3, 5);
console.log(a);
console.log(a.getArea());


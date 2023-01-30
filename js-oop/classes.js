// const _width = new WeakMap();

class Rectangle {
    #width;
    constructor(width) {
        // _width.set(this, width);
        this.#width = width;
    }

    draw() {
        // console.log('Rectangle with width' + _width.get(this));
        console.log("Rectangle with width " + this.#width);
    }
}

const rectangle = new Rectangle(5);

// console.log(_width.get(rectangle));
rectangle.draw();
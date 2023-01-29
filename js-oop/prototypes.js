function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw a circle");
  };
}

console.log("Circle() constructor: ", Circle.constructor);
console.log("Circle() prototype: ", Object.getPrototypeOf(Circle));

let c1 = new Circle(1);

console.log("c1 constructor: ", c1.constructor);
console.log("c1 prototype: ", Object.getPrototypeOf(c1));
console.log("Prototype that Circle referencing: ", Circle.prototype);
console.log("Circle.prototype is not same with Circle.__proto__");

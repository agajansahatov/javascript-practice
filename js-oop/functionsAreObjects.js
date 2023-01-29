function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw a circle");
  };
}

console.log("Circle() constructor: ", Circle.constructor);
console.log("Circle() prototype: ", Object.getPrototypeOf(Circle));

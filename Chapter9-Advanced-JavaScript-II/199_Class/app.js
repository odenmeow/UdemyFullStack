/*         Circle範例              */

class Circle {
  static allCircles = [];
  constructor(radius) {
    this.radius = radius;
    Circle.allCircles.push(this);
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getPerimeter() {
    return Math.PI * 2 * this.radius;
  }
  static getAreaFormula() {
    return "園面積公式 2 * pi * r";
  }
  static getAllCircleAreaTotal() {
    let area = 0;
    this.allCircles.forEach((element) => {
      area += element.getArea();
    });
    return area;
  }
}

let c1 = new Circle(10);
console.log(c1.getArea());
let c2 = new Circle(10);
console.log(Circle.allCircles);
console.log(Circle.getAllCircleAreaTotal());

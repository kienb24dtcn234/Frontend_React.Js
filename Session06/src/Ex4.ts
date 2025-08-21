interface Geometry {
  calculateArea(): number;
  calculatePerimeter(): number;
}
class Circle implements Geometry {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
class Rectangle implements Geometry {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}
const c = new Circle(5);
const r = new Rectangle(4, 7);
console.log(`Circle -> Area: ${c.calculateArea().toFixed(2)}, Perimeter: ${c.calculatePerimeter().toFixed(2)}`);
console.log(`Rectangle -> Area: ${r.calculateArea()}, Perimeter: ${r.calculatePerimeter()}`);

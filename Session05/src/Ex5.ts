class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
const rect = new Rectangle(5, 10);
console.log(`Width: ${rect.getWidth()}, Height: ${rect.getHeight()}, Perimeter: ${rect.getPerimeter()}, Area: ${rect.getArea()}`);
rect.setWidth(7);
rect.setHeight(14);
console.log(`Width: ${rect.getWidth()}, Height: ${rect.getHeight()}, Perimeter: ${rect.getPerimeter()}, Area: ${rect.getArea()}`);

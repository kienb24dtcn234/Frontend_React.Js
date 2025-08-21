abstract class Shape {
  constructor(protected name: string) {}
  getName(): string {              // method thường: đã có triển khai
    return this.name;
  }
  abstract getSize(): string;      // abstract method: lớp con bắt buộc triển khai
}
class Rectangle extends Shape {
  constructor(name: string, private w: number, private h: number) {
    super(name);
  }
  getSize(): string {              // bắt buộc override
    return `width=${this.w}, height=${this.h}`;
  }
}
const r = new Rectangle("Hình chữ nhật", 5, 10);
console.log(r.getName());        
console.log(r.getSize());          

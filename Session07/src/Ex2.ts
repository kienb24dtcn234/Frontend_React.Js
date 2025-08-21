class Vehicle {
  protected name: string;
  protected speed: number;
  protected id: number;
  constructor(id: number, name: string, speed: number = 0) {
    this.id = id;
    this.name = name;
    this.speed = speed;
  }
  slowDown(amount: number): void {
    if (amount > 0) this.speed = Math.max(0, this.speed - amount);
  }
  speedUp(amount: number): void {
    if (amount > 0) this.speed += amount;
  }
  showSpeed(): void {
    console.log(`Tốc độ hiện tại của ${this.name}: ${this.speed} km/h`);
  }
}
class Bicycle extends Vehicle {
  private gear: number;
  constructor(id: number, name: string, gear: number, speed: number = 0) {
    super(id, name, speed);
    this.gear = gear;
  }
  showInfo(): void {
    console.log(
      `Xe đạp => ID: ${this.id}, Tên: ${this.name}, Tốc độ: ${this.speed} km/h, Số bánh răng: ${this.gear}`
    );
  }
}
const bike = new Bicycle(101, "Xe đạp thể thao", 21, 10);
bike.showInfo();
bike.speedUp(8);
bike.showSpeed();
bike.slowDown(5);
bike.showSpeed();
bike.slowDown(20);
bike.showInfo();

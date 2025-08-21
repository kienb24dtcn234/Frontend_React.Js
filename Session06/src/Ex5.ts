interface ChangeSpeed {
  speedUp(amount: number): void;
  slowDown(amount: number): void;
  stop(): void;
}
class Vehicle implements ChangeSpeed {
  private speed: number;
  constructor(initialSpeed: number = 0) {
    this.speed = Math.max(0, initialSpeed);
  }
  getSpeed(): number {
    return this.speed;
  }
  speedUp(amount: number): void {
    if (amount > 0) this.speed += amount;
  }
  slowDown(amount: number): void {
    if (amount > 0) this.speed = Math.max(0, this.speed - amount);
  }
  stop(): void {
    this.speed = 0;
  }
}
const v = new Vehicle();
console.log(`Tốc độ hiện tại: ${v.getSpeed()} km/h`);
v.speedUp(30);
console.log(`Sau speedUp(30): ${v.getSpeed()} km/h`);
v.slowDown(10);
console.log(`Sau slowDown(10): ${v.getSpeed()} km/h`);
v.speedUp(50);
console.log(`Sau speedUp(50): ${v.getSpeed()} km/h`);
v.stop();
console.log(`Sau stop(): ${v.getSpeed()} km/h`);

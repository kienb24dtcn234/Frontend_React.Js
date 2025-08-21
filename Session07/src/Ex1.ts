class Employee {
  public name: string;
  protected company: string;
  private phone: string;
  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }
  printInfo(): void {
    console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
  }
}
class Manager extends Employee {
  private teamSize: number;
  constructor(name: string, company: string, phone: string, teamSize: number) {
    super(name, company, phone);
    this.teamSize = teamSize;
  }
  printInfo(): void {
    super.printInfo();
    console.log(`Team size: ${this.teamSize}`);
  }
}
const nv1 = new Employee("Nguyễn Thế Kiên", "ABC Corp", "0123456789");
const nv2 = new Manager("Trần Ngọc Trang", "XYZ Corp", "0987654321", 10);
nv1.printInfo();
nv2.printInfo();

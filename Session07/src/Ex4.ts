abstract class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  displayInfo(): void {
    console.log(`Person: ${this.name}`);
  }
}
class Student extends Person {
  private id: number;
  constructor(id: number, name: string) {
    super(name);
    this.id = id;
  }
  displayInfo(): void {
    console.log(`Student => ID: ${this.id}, Name: ${this.name}`);
  }
}
class Teacher extends Person {
  private subject: string;
  constructor(name: string, subject: string) {
    super(name);
    this.subject = subject;
  }
  displayInfo(): void {
    console.log(`Teacher => Name: ${this.name}, Subject: ${this.subject}`);
  }
}
const student = new Student(101, "Nguyễn Văn A");
const teacher = new Teacher("Trần Thị B", "Toán");
student.displayInfo();
teacher.displayInfo();

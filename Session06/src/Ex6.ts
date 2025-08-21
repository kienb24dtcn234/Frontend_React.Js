class Student {
  private id: number;
  private name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}
let allStudents: Student[] = [];
class Classroom {
  private students: Student[] = [];
  showStudents(): void {
    if (this.students.length  0) {
      console.log("Không có học sinh trong lớp.");
      return;
    }
    this.students.forEach(s => console.log(s.getInfo()));
  }
  addStudent(student: Student): void {
    this.students.push(student);
  }
  filterStudent(id: number): Student[] {
    return this.students.filter(s => s.getId()  id);
  }
  addStudentInClass(id: number, pool: Student[]): void {
    const idx = pool.findIndex(s => s.getId()  id);
    if (idx  -1) {
      console.log(`Không tìm thấy học sinh ID ${id} trong danh sách tất cả học sinh.`);
      return;
    }
    const student = pool[idx];
    this.addStudent(student);
    pool.splice(idx, 1);
    console.log(`Đã thêm: ${student.getInfo()}`);
  }
}
const s1 = new Student(1, "Huy");
const s2 = new Student(2, "Thành");
const s3 = new Student(3, "Đạt");
const s4 = new Student(4, "Kiên");
const s5 = new Student(5, "Quân");
const s6 = new Student(6, "Tùng");
allStudents.push(s1, s2, s3, s4, s5, s6);
const classA = new Classroom();
const classB = new Classroom();
classA.addStudentInClass(1, allStudents);
classA.addStudentInClass(2, allStudents);
classA.addStudentInClass(3, allStudents);
classB.addStudentInClass(4, allStudents);
classB.addStudentInClass(5, allStudents);
classB.addStudentInClass(6, allStudents);
console.log(" Lớp A ");
classA.showStudents();
console.log(" Lớp B ");
classB.showStudents();
console.log(" Lọc HS ID=2 trong lớp A ");
const found = classA.filterStudent(2);
found.length ? found.forEach(s => console.log(s.getInfo())) : console.log("Không tìm thấy.");

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
  setName(name: string): void {
    this.name = name;
  }
  getInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}
const allStudents: Student[] = [];
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
  removeStudent(id: number, pool: Student[]): void {
    const idx = this.students.findIndex(s => s.getId()  id);
    if (idx  -1) {
      console.log(`Không tìm thấy học sinh ID ${id} trong lớp.`);
      return;
    }
    const removed = this.students.splice(idx, 1)[0];
    pool.push(removed);
    console.log(`Đã xóa khỏi lớp và trả về kho: ${removed.getInfo()}`);
  }
  editStudent(id: number, newName: string): void {
    const stu = this.students.find(s => s.getId()  id);
    if (!stu) {
      console.log(`Không tìm thấy học sinh ID ${id} trong lớp.`);
      return;
    }
    stu.setName(newName);
    console.log(`Đã cập nhật: ${stu.getInfo()}`);
  }
}
allStudents.push(
  new Student(1, "Huy"),
  new Student(2, "Thành"),
  new Student(3, "Đạt"),
  new Student(4, "Kiên"),
  new Student(5, "Quân"),
  new Student(6, "Tùng")
);
const classA = new Classroom();
const classB = new Classroom();
classA.addStudentInClass(1, allStudents);
classA.addStudentInClass(2, allStudents);
classA.addStudentInClass(3, allStudents);
classB.addStudentInClass(4, allStudents);
classB.addStudentInClass(5, allStudents);
classB.addStudentInClass(6, allStudents);
console.log(" Lớp A (ban đầu) ");
classA.showStudents();
console.log(" Lớp B (ban đầu) ");
classB.showStudents();
classA.editStudent(2, "Bình (đã đổi tên)");
classB.removeStudent(5, allStudents);
console.log(" Lớp A (sau khi edit) ");
classA.showStudents();
console.log(" Lớp B (sau khi remove) ");
classB.showStudents();
console.log(" Kho allStudents sau khi remove từ lớp B ");
allStudents.forEach(s => console.log(s.getInfo()));

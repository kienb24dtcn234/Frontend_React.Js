interface Student {
    name: string;
    age: number;
    email: string;
}
let student1: Student = {
    name: "Nguyễn Thế Kiên",
    age: 19,
    email: "thekien780@gmail.com"
};
function gioiThieuSinhVien(sinhVien: Student): void {
    console.log(`Tên tôi là ${sinhVien.name}, tôi ${sinhVien.age} tuổi và email của tôi là ${sinhVien.email}.`);
}
gioiThieuSinhVien(student1);

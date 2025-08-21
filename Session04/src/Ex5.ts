interface Person {
    name: string;
    age: number;
}
interface Employee {
    employeeId: string;
    department: string;
}
type StaffMember = Person & Employee;
function printStaffInfo(staff: StaffMember): void {
    console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
}
const staff1: StaffMember = {
    name: "Nguyễn Thế Kiên",
    age: 19,
    employeeId: "NTK051",
    department: "Kỹ Thuật"
};
printStaffInfo(staff1);

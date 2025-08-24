import React from "react";
interface Student {
  id: number;
  code: string;
  name: string;
  birthday: string;
  email: string;
  status: string;
}
const students: Student[] = [
  {
    id: 1,
    code: "SV001",
    name: "Nguyễn Văn A",
    birthday: "21/12/2023",
    email: "nva@gmail.com",
    status: "Hoạt động",
  },
  {
    id: 2,
    code: "SV002",
    name: "Nguyễn Thị B",
    birthday: "21/11/2022",
    email: "ntb@gmail.com",
    status: "Ngừng hoạt động",
  },
];
function Ex5() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Quản lý sinh viên</h2>
      <button style={{ marginBottom: "10px" }}>Thêm mới sinh viên</button>
      <table
        border={1}
        cellPadding={10}
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu.id}>
              <td>{stu.id}</td>
              <td>{stu.code}</td>
              <td>{stu.name}</td>
              <td>{stu.birthday}</td>
              <td>{stu.email}</td>
              <td>
                {stu.status === "Hoạt động" ? (
                  <span style={{ color: "green" }}>Hoạt động</span>
                ) : (
                  <span style={{ color: "red" }}>Ngừng hoạt động</span>
                )}
              </td>
              <td>
                <button style={{ marginRight: "5px" }}>Sửa</button>
                <button style={{ marginRight: "5px" }}>Xem</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "15px" }}>
        <p>Danh sách sinh viên</p>
      </div>
    </div>
  );
}

export default Ex5;

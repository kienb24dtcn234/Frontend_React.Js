import React from "react";
const UserInfo: React.FC = () => {
  const user = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "nguyenvana@example.com",
    phone: "0123 456 789",
    address: "Hà Nội, Việt Nam"
  };
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", width: "300px" }}>
      <h2>Thông tin cá nhân</h2>
      <p><strong>Họ và tên:</strong> {user.name}</p>
      <p><strong>Tuổi:</strong> {user.age}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Số điện thoại:</strong> {user.phone}</p>
      <p><strong>Địa chỉ:</strong> {user.address}</p>
    </div>
  );
};
export default UserInfo;

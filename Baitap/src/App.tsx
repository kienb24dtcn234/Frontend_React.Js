import React from "react";
import ListCourse from "./components/ListCourse";
import Calculation from "./components/Calculation";
import UserInfo from "./components/UserInfo";
import ColorBox from "./components/ColorBox";
import FormatName from "./components/FormatName";

const App: React.FC = () => {
  return (
    <div className="App" style={{ padding: "20px" }}>
      {/* Danh sách khóa học */}
      <ListCourse />

      {/* Tính toán */}
      <Calculation />

      {/* Thông tin người dùng */}
      <UserInfo />

      {/* Họ và tên đầy đủ */}
      <FormatName />

      {/* Hộp màu */}
      <div style={{ display: "flex", marginTop: "20px" }}>
        <ColorBox color="red" />
        <ColorBox color="blue" />
        <ColorBox color="green" />
      </div>
    </div>
  );
};

export default App;

import React, { Component } from "react";
interface Exercise02State {
  id: number;
  name: string;
  birthday: string;
  address: string;
}
class Exercise02 extends Component<{}, Exercise02State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      id: 1,
      name: "Nguyễn Văn Sơn",
      birthday: "20/12/2023",
      address: "Thanh Xuân, Hà Nội",
    };
  }
  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2 style={{ textAlign: "center" }}>Thông tin cá nhân</h2>
        <p><strong>id:</strong> {this.state.id}</p>
        <p><strong>Tên:</strong> {this.state.name}</p>
        <p><strong>Ngày sinh:</strong> {this.state.birthday}</p>
        <p><strong>Địa chỉ:</strong> {this.state.address}</p>
      </div>
    );
  }
}
export default Exercise02;

import React, { Component } from "react";
class Notification extends Component {  componentDidMount() {
    console.log("Component đã được mount!");
  }
  render() {
    return (
      <div style={{ padding: "20px", fontSize: "18px" }}>
        <p>Hãy mở Console để xem thông báo.</p>
      </div>
    );
  }
}
export default Notification;

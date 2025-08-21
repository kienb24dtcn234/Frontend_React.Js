import React, { Component } from "react";
interface Exersice01State {
  userName: string;
}
class Exersice01 extends Component<{}, Exersice01State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: "Nguyễn Thế Kiên", 
    };
  }
  render() {
    return (
      <div style={{ padding: "20px", fontSize: "18px" }}>
        <h2>Xin chào!</h2>
        <p>Tôi là: <b>{this.state.userName}</b></p>
      </div>
    );
  }
  componentDidMount() {
    console.log("Component đã được mount!");
  }
}

export default Exersice01;

import React, { Component } from "react";
interface Exercises01State {
  myName: string;
}
class Exercise01 extends Component<{}, Exercises01State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      myName: "Nguyễn Minh Sơn", 
    };
  }
  render() {
    return (
      <div>
        <p>Họ và tên: {this.state.myName}</p>
      </div>
    );
  }
}
export default Exercise01;

import React, { Component } from "react";
import Children_Comp from "./Children_Comp";
interface ParentState {
  fullName: string;
}
class Parent_Comp extends Component<{}, ParentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      fullName: "Nguyễn Văn Nam",
    };
  }
  render() {
    return (
      <div>
        <h2>Họ và tên bên component cha: {this.state.fullName}</h2>        <Children_Comp fullName={this.state.fullName} />
      </div>
    );
  }
}
export default Parent_Comp;

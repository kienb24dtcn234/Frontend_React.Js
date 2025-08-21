import React, { Component } from "react";
interface SloganState {
  slogan: string;
}
class Slogan extends Component<{}, SloganState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      slogan: "Học code để đi làm",
    };
  }
  changeState = () => {
    this.setState({
      slogan: "Học code sẽ thành công",
    });
  };
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Slogan: "{this.state.slogan}"</h2>
        <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}
export default Slogan;

import React, { Component } from "react";
interface CompanyState {
  companyName: string;
}
class Company extends Component<{}, CompanyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      companyName: "Rikkei Academy",
    };
  }
  changeState = () => {
    this.setState({ companyName: "RikkeiSoft" });
  };
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Company: {this.state.companyName}</h2>
        <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}
export default Company;

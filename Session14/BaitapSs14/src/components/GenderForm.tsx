import React, { Component } from "react";
interface GenderFormState {
  gender: string; 
}
class GenderForm extends Component<{}, GenderFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      gender: "", 
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Giới tính đã chọn:", this.state.gender);
    alert("Giới tính bạn chọn là: " + this.state.gender);
  };
  render() {
    return (
      <div style={{ maxWidth: "300px", margin: "20px auto", border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
        <h3>Giới tính:</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Nam"
                checked={this.state.gender === "Nam"}
                onChange={this.handleChange}
              />
              Nam
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Nữ"
                checked={this.state.gender === "Nữ"}
                onChange={this.handleChange}
              />
              Nữ
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Khác"
                checked={this.state.gender === "Khác"}
                onChange={this.handleChange}
              />
              Khác
            </label>
          </div>
          <button type="submit" style={{ marginTop: "10px", padding: "6px 12px" }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default GenderForm;

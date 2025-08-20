import React, { Component } from "react";
interface User {
  id: number;
  name: string;
  age: number;
}
interface Exercise03State {
  users: User[];
}
class Exercise03 extends Component<{}, Exercise03State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "John", age: 30 },
        { id: 2, name: "Mary", age: 25 },
        { id: 3, name: "Jane", age: 20 },
      ],
    };
  }
  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Danh sách người dùng</h2>
        <table border={1} cellPadding={10} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Exercise03;

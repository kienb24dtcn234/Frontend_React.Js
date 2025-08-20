import React, { Component } from "react";
import Ex5_Children_comp from "./Ex5_Children_ comp";

type Product = {
  id: number;
  name: string;
  price: string;
  quantity: number;
};

type ParentState = {
  product: Product;
};

class Ex5_Parent_comp extends Component<{}, ParentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {
        id: 1,
        name: "Bưởi ba roi",
        price: "12.000 đ",
        quantity: 6,
      },
    };
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Ex5_Children_comp product={this.state.product} />
      </div>
    );
  }
}

export default Ex5_Parent_comp;

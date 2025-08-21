import React, { Component } from "react";
interface Product {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
}
interface ProductFormState {
  productCode: string;
  productName: string;
  price: string;    
  quantity: string; 
}
class ProductForm extends Component<{}, ProductFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      productCode: "",
      productName: "",
      price: "",
      quantity: "",
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    } as Pick<ProductFormState, keyof ProductFormState>);
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    const product: Product = {
      productCode: this.state.productCode,
      productName: this.state.productName,
      price: Number(this.state.price),
      quantity: Number(this.state.quantity),
    };
    console.log(product);
    this.setState({
      productCode: "",
      productName: "",
      price: "",
      quantity: "",
    });
  };
  render() {
    return (
      <div style={{ maxWidth: "300px", margin: "20px auto", border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
        <h3>Thêm mới sản phẩm</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Mã sản phẩm</label>
            <input
              type="text"
              name="productCode"
              value={this.state.productCode}
              onChange={this.handleChange}
              style={{ width: "100%", marginBottom: "10px" }}
              required
            />
          </div>
          <div>
            <label>Tên sản phẩm</label>
            <input
              type="text"
              name="productName"
              value={this.state.productName}
              onChange={this.handleChange}
              style={{ width: "100%", marginBottom: "10px" }}
              required
            />
          </div>
          <div>
            <label>Giá</label>
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              style={{ width: "100%", marginBottom: "10px" }}
              required
            />
          </div>
          <div>
            <label>Số lượng</label>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
              style={{ width: "100%", marginBottom: "10px" }}
              required
            />
          </div>
          <button type="submit" style={{ width: "100%", padding: "8px", background: "blue", color: "white", border: "none", borderRadius: "4px" }}>
            Đăng ký
          </button>
        </form>
      </div>
    );
  }
}
export default ProductForm;

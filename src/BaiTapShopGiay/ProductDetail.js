import React, { Component } from "react";
import style from "./Detail.module.css";

export default class ProductDetails extends Component {
  close = () => {
    document.getElementById("detail").style.display = "none";
    return true;
  };

  render() {
    const { image, name, price, description, quantity } =
      this.props.selectedItem;
    return (
      <div className="detail" id="detail">
        <div className={style.overlay}></div>
        <div
          className="card p-4 mt-5
      position-fixed top-50 start-50 translate-middle"
        >
          <div className="header">
            <h4>CHI TIẾT SẢN PHẨM</h4>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-5">
              <img src={image} alt="" style={{ width: 250 }} />
            </div>
            <div className="col-7">
              <h3>
                Tên: <span style={{ color: "grey" }}>{name}</span>
              </h3>
              <h4>
                Giá: <span style={{ color: "grey" }}>{price}$</span>
              </h4>
              <h4>
                Mô tả:{" "}
                <span style={{ color: "grey", fontSize: 22 }}>
                  {description}
                </span>
              </h4>
              <h4>
                Số lượng: <span style={{ color: "grey" }}>{quantity}</span>
              </h4>
            </div>
          </div>
          <hr></hr>
          <div className={style.closeBtn}>
            <button
              className="btn btn-danger"
              id="close"
              onClick={() => {
                this.close();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

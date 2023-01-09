import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const { image, name, price, description, quantity } =
      this.props.selectedItem;
    return (
      <div className="modal" id="details" tabIndex={-1}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Chi tiết sản phẩm</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-5">
                  <img src={image} alt="" style={{ width: 250 }} />
                </div>
                <div className="col-7">
                  <h2>Tên: {name}</h2>
                  <h4>Giá: {price}$</h4>
                  <h4>Mô tả: {description}</h4>
                  <h4>Số lượng: {quantity}</h4>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// {/* <div className ="card p-4 mt-5">
// <div className="row" >
//   <div className ="col-5" >
//     <img src={image} alt="" />
//   </div>
//   <div className="col-7">
//     <h2>Tên: {name}</h2>
//     <h4>Giá: {price}$</h4>
//     <h4>Mô tả: {description}</h4>
//     <h4>Số lượng: {quantity}</h4>
//   </div>
// </div>
// </div> */}

import React, { Component } from "react";

export default class Cart extends Component {
  totalPrice = () => {
    const total = this.props.cart.reduce((preValue, currentItem) => {
      return preValue + currentItem.quantity * currentItem.product.price;
    }, 0);
    return total;
  };

  renderCart = () => {
    return this.props.cart.map((item, index) => {
      const { image, name, price } = item.product;
      const { quantity } = item;
      return (
        <tr>
          <td>{index+1}</td>
          <td>
            <img
              src={image}
              style={{
                width: 120,
              }}
              alt=""
            />
          </td>
          <td>{name}</td>
          <td>
            <button 
              onClick={() => {
                this.props.decreaseQuantity(item.product.id);
              }}
              className="btn btn-danger mx-1"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => {
                this.props.increaseQuantity(item.product.id);
              }}
              className="btn btn-info mx-1"
            >
              +
            </button>
          </td>
          <td>{price}$</td>
          <td>{price * quantity}$</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.deleteCart(item.product.id);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Giỏ Hàng
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {this.renderCart()}
                </tbody>
              </table>
              <h2 > Tổng tiền: {this.totalPrice()+' $'}</h2>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>

              <button type="button" 
              onClick= {()=>{
                this.props.checkOut()
              }}
              className="btn btn-success">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

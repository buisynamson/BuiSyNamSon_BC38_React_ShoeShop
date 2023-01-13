import React, { Component } from "react";

export default class Item extends Component {

  open =() => {
    document.getElementById('detail').style.display="block";
    return true;
  }

  render() {
    const { image, name, price } = this.props.item;
    return (
      <div className="card p-4 mb-4">
        <img src={image} alt="" />
        <h4 style ={{fontSize: 18}}>{name}</h4>
        <h5 style ={{fontSize: 18}}> Giá: {price}$</h5>
        <div className="d-flex">
          <button
            className="btn btn-primary"
            onClick={() => {
              this.props.setSelectedItem(this.props.item);
              this.open();
            }}
          >
            Chi tiết
          </button>
          <button 
          className="btn btn-dark mx-3"
          onClick ={()=>{
            this.props.addToCart(this.props.item);
          }}
            > Thêm giỏ hàng </button>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Item from "./Item";

export default class ProductList extends Component {

 renderProducts =() => {
  return this.props.products.map((item)=>{
    return (
      <div key={item.id} className="col-3">
        <Item 
        addToCart={this.props.addToCart}
        setSelectedItem={this.props.setSelectedItem}
        item={item} />
      </div>
    );
  });
 }; 
  render() {
    return (
      <div className="row mt-5">
        {this.renderProducts()}
      </div>
    );
  }
}

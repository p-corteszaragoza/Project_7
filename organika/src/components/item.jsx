import React, { Component } from 'react'; //imrc
import "./item.css"
import QuantityPicker from './quantityPicker';

class Item extends Component { //cc
    state = {  quantity: 1 };

    render() { 
        return ( 
          <div className="item-bar">
             <img src={"/images/products/" + this.props.product.image} alt="item" />
            
             <h6>{this.props.product.title}</h6>
             <label>Total: ${this.getTotal()}</label>
             <br></br>
             <label>Price: ${this.props.product.price.toFixed(2)}</label>
             <div className="item-controls">
             <QuantityPicker onValueChange={this.handleQuantityChange}></QuantityPicker>
             
               <button className="btn btn-sm btn-light btn-add">
               <i className="fa fa-cart-plus" aria-hidden="true"></i>
             </button>
             </div>
          </div> );
    }

    getTotal = () => {
      let total = this.props.product.price * this.state.quantity;
      return total.toFixed(2);
    }

    handleQuantityChange = (quantity) => {
      console.log("Quantity changed");
      this.setState({ quantity: quantity});
    };

}
 
export default Item;
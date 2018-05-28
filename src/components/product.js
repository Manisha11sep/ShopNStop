import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProduct, addToCart, cartTotal, actions } from '../ducks/reducer'
import axios from 'axios'

class Product extends Component {
 
  
    render() {
        // console.log('============', this.props.product.name);
        // console.log('============', this.props.product.image);
        // console.log('============', this.props.product.subinfo);
        // console.log('============', this.props.product.info);
        // console.log('============', this.props.product.price);
        // console.log('============= current product', this.props.product.details)
        const product = this.props.product.price ? [this.props.product].map((e, i) => {
            console.log(e.details);
            return <div key={i}>
            <p>{e.name}</p>
            <img src={e.image} alt={e.subinfo}/>
            <p>{e.info}</p>
            <p>${e.price}</p>
            <button onClick={
                () => this.props.addToCart({ name: e.name, id:e.id, qty: 1, image: e.image, price: e.price, total: e.price })
                  && this.props.cartTotal() 
                      && this.props.getCart()
                    }>Buy it!</button> 
        </div>
        }): <div>Go pick an item!</div>
        return (
            <div>
                {product}
            </div>
            
        )
    }    
}
const mapStateToProps = state => {
    return {
      product: state.product,
      cart: state.cart
    }
  }

const mapDispatchToProps = {
  getProduct,
  cartTotal,
  ...actions
}
  export default connect(mapStateToProps, mapDispatchToProps /* {getProduct, addToCart, cartTotal} */)(Product)
import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="Checkout">
      <div className="Checkout-left">
        <img className="Checkout-ad" src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="Checkout-ad" />

        <div>
          <h2 className="Checkout-title">장바구니 입니다.</h2>  
        </div>
      </div>

      <div className="Checkout-right">
        <Subtotal/>
      </div>

    </div>
  )
}

export default Checkout
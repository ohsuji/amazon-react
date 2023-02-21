import React from 'react'
import './Product.css';

function Product() {
  return (
    <div className="Product">
      <div className="Product-info">
        <p>제품1</p>
        <p className="Product-price">
          <small>가격</small>
          <strong>10,000</strong>
          <small>원</small>
        </p>
        <div className="Product-rating">
          <p>★</p>
          <p>★</p>
          <p>★</p>
          <p>★</p>
        </div>

        <img className="Product-image"src="https://www.apple.com/kr/macbook-pro/ah/images/overview/hero_13__d1tfa5zby7e6_large_2x.jpg" alt="Product-image"/>
        <button className="Product-addBasket">장바구니에 담기</button>
      </div>
    </div>
  )
}

export default Product
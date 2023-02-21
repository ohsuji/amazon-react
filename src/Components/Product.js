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
      </div>
    </div>
  )
}

export default Product
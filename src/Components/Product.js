import React from 'react'
import './Product.css';
import { useStateValue } from '../StateProvider';

function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch ({
      type: "ADD_TO_BASKET",
      id: id,
    });
  };
  // console.log("장바구니 확인", basket);

  return (
    <div className="Product">
      <div className="Product-info">
        <p>{ title }</p>

        <p className="Product-price">
          <small>가격</small>
          <strong> {price} </strong>
          <small>원</small>
        </p>

        <div className="Product-rating">
          { 
            Array(rating)
              .fill()
              .map(() => (
                <p>★</p>
              ))
          }
        </div>

        <img className="Product-image" src={image} alt="Product-image"/>

        <button className="Product-addBasket" onClick={addToBasket}> 장바구니에 담기 </button>
      </div>
    </div>
  )
}

export default Product
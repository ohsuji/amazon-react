import React from 'react'
import { useStateValue } from '../StateProvider';
import './Product.css';

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id:id,

    })
  }

  return (
    <div className="CheckoutProduct">
      <img className="CheckoutProduct-image" src={image} alt="CheckoutProduct-image"/>

      <div className="CheckoutProduct-info">
        <p className="CheckoutProduct-title"> 
          { title } 
        </p>

        <p className="CheckoutProduct-price">
          <small> 가격 : </small> 
          <strong> { price } </strong>
          <small> 원 </small> 
        </p>
      </div>

      <div className="CheckoutProduct-rating">
      { 
        Array(rating)
          .fill()
          .map(() => (
            <p>★</p>
          ))
      }
      </div>

      <button onClick={removeFromBasket}> 장바구니에서 삭제하기 </button>

    </div>
  );
}

export default CheckoutProduct
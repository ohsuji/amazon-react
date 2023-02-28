import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="CheckoutProduct">
      <img className="CheckoutProduct-image" src={image} />

      <div className="CheckoutProduct-info">
        <p className="CheckoutProduct-title">{title}</p>
        <p className="CheckoutProduct-price">
          <small>₩</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>★</p>
            ))}
        </div>

        {!hideButton && (
          <button onClick={removeFromBasket}>장바구니에서 제거하기</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
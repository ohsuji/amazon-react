import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="Checkout">
      <div className="Checkout-left">
        <img
          className="Checkout-ad"
          src="https://images-fe.ssl-images-amazon.com/images/G/09/gc/marketing/storefront/2023/BGC_NLLP_EN_DT.jpg"
          alt="Checkout-ad"
        />

        <div>
          <h2 className="Checkout-title"> {user?.email} 님의 장바구니 </h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="Checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

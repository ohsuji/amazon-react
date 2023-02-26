import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'; 
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../Reducer';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="Subtotal">
      
      <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            총액 ( {basket.length} items ) : <strong> {value} 원 </strong>
          </p>
          <small className="Subtotal-gift">
            <input type="checkbox"/> 체크박스
          </small>
        </>
      )}

      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"Text"}
      thousandSeparator={true}
      prefix={"₩"}
      />

      <button>결제하기</button>

    </div>
  )
}

export default Subtotal
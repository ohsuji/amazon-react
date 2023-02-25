import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'; 

function Subtotal() {
  return (
    <div className="Subtotal">
      
      <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            총액 ( 0 items ) : <strong> 0원 </strong>
          </p>
          <small className="Subtotal-gift">
            <input type="checkbox"/> 체크박스
          </small>
        </>
      )}

      decimalScale={2}
      value={0}
      displayType={"Text"}
      thousandSeparator={true}
      prefix={"₩"}
      />

      <button>결제하기</button>

    </div>
  )
}

export default Subtotal
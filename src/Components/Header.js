import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search'
import { ShoppingBasket, LocationOn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header() {
  const [{basket}, dispatch] = useStateValue();
  
  return (
    <div className="Header">
      <Link to='/'>
        <img className="Header-logo" src="./images/Header-logo.png"/>
      </Link>

      <div className="Header-myLocation">
        <LocationOn></LocationOn> 
        <div className="Header-option">
          <span className="Header-optionLineOne"> Deliver to </span>
          <span className="Header-optionLineTwo"> Republic of Korea </span>
        </div>
      </div>

      <div className="Header-search">
        <input className="Header-searchInput" type="text"/>
        <SearchIcon className="Header-searchIcon"></SearchIcon>
      </div>

      <div className="Header-nav">
        <div className="Header-option">
          <span className="Header-optionLineOne"> 안녕하세요! </span>
          <Link to='Login' className="Home-login">
            <span className="Header-optionLineTwo"> 로그인하기 </span>
          </Link>
        </div>

        <div className="Header-option">
          <span className="Header-optionLineOne"> 돌아가기 </span>
          <span className="Header-optionLineTwo"> 주문내역 </span>
        </div>

        <Link to='Checkout'>
          <div className="Header-optionBasket">
            <ShoppingBasket></ShoppingBasket>
            <span className="Header-optionLineTwo Header-basketCount"> {basket?.length} </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
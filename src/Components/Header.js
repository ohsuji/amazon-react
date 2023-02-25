import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search'
import { ShoppingBasket } from '@mui/icons-material';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <Link to='/'>
        <img className="Header-logo" src="./images/Header-logo.png"/>
      </Link>

      <div className="Header-search">
        <input className="Header-searchInput" type="text"/>
        <SearchIcon className="Header-searchIcon"></SearchIcon>
      </div>

      <div className="Header-nav">
        <div className="Header-option">
          <span className="Header-optionLineOne"> 안녕하세요! </span>
          <span className="Header-optionLineTwo"> 로그인하기 </span>
        </div>

        <div className="Header-option">
          <span className="Header-optionLineOne"> 돌아가기 </span>
          <span className="Header-optionLineTwo"> 주문내역 </span>
        </div>

        <Link to='Checkout'>
          <div className="Header-optionBasket">
            <ShoppingBasket></ShoppingBasket>
            <span className="Header-optionLineTwo Header-basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
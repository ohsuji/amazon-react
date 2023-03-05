import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search'
import { ShoppingBasket, LocationOn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { getAuth, signOut } from 'firebase/auth';

function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  
  const auth = getAuth();
  const handleAuthentication = () => {
    if (user) {
      signOut(auth);
    }
  }
  
  return (
    <div className="Header">
      <Link to='/'>
        <img className="Header-logo" src="./images/Header-logo.png" alt="Header-logo"/>
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
          <Link to={!user && 'Login'} className="Home-login">
            <span onClick={handleAuthentication} className="Header-optionLineTwo"> {user ? '로그아웃' : '로그인'} </span>
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
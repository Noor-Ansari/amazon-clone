import React from "react";
import logo from "../../assets/logo.png";
import flag from "../../assets/flag.png";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingCart";

function Navbar() {
  return (
    <div className="header">
      <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="header__logo" />
      <div className="header__options">
        <div className="header__optionsLineOne">Hello</div>
        <div className="header__optionsLineTwo">Select your address</div>
      </div>
      <div className="header__searchbar">
        <input type="text" />
        <SearchIcon className="search__icon" />
      </div>
      <img src={flag} alt="flag" className="flag__icon" />
      <div className="navbar">
        <div className="navbar__options">
          <div className="navbar__optionsLineOne">Hello, Sign in</div>
          <div className="navbar__optionsLineTwo">Accounts & Lists</div>
        </div>
        <div className="navbar__options">
          <div className="navbar__optionsLineOne">Returns</div>
          <div className="navbar__optionsLineTwo">& orders</div>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

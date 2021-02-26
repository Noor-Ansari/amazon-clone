import React from "react";
import flag from "../../assets/flag.png";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import {useDataLayerValues} from "../../DataLayer";

function Navbar() {
  const [{basket}] = useDataLayerValues();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          className="header__logo"
        />
      </Link>
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
        <Link to="/login" className="navbar__links">
          <div className="navbar__options">
            <div className="navbar__optionsLineOne">Hello, Sign in</div>
            <div className="navbar__optionsLineTwo">Accounts & Lists</div>
          </div>
        </Link>

        <Link to="/"  className="navbar__links">
          <div className="navbar__options">
            <div className="navbar__optionsLineOne">Returns</div>
            <div className="navbar__optionsLineTwo">& orders</div>
          </div>
        </Link>

        <Link to="/checkout"  className="navbar__links">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="navbar__optionsLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

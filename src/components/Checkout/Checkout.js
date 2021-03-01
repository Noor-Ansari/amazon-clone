import React from "react";
import { useDataLayerValues } from "../../DataLayer";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Checkout.css";
import cart from "../../assets/empty-cart.png";
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket }] = useDataLayerValues();
  let price = 0;

  // total price
  basket?.map((item) => (price += parseInt(item.price)));

  return (
    <div className="checkout">
      {basket?.length === 0 ? (
        <div className="empty__basket">
          <img src={cart} alt="" />
          <h1>Your Basket Is Currently Empty!</h1>
          <Link to="/">
            <button className="empty__basketButton">Shop Now</button>
          </Link>
        </div>
      ) : (
        <div className="basket__items">
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      )}
      {basket.length > 0 && (
        <div className="total__bill">
          <h1>
            Subtotal ({basket?.length}) item<small>(s)</small> : $ {price}
          </h1>
          <button>Proceed to Buy</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;

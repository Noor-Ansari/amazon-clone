import React from "react";
import { useDataLayerValues } from "../../DataLayer";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket }] = useDataLayerValues();

  return (
    <div className="checkout">
      {basket?.length === 0 ? (
        <div>
          <h1>Your Basket is empty</h1>
        </div>
      ) : (
        <div>
          {basket.map((item) => (
            <CheckoutProduct key={item.id} id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image} /> 
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;

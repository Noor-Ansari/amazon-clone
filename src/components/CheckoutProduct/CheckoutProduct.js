import React from "react";
import "./CheckoutProduct.css";
import { useDataLayerValues } from "../../DataLayer";

function CheckoutProduct({ id, title, rating, price, image }) {
  const [, dispatch] = useDataLayerValues();

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">{price}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeItem} className="checkoutProduct__button">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

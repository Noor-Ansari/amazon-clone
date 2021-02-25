import React from "react";
import "./Product.css";
import {useDataLayerValues} from "../../DataLayer";

function Product({ id, title, price, rating, image}) {
    const [{basket}, dispatch] = useDataLayerValues();
    const addToBasket = () => {
        dispatch({
            type : "ADD_TO_BASKET",
            item : {
                id : id,
                title : title,
                price : price,
                rating : rating,
                image : image,
            }
        })
    }

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">{price}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;

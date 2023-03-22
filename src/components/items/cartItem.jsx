import React, { useContext } from "react";
import { ShopContext } from "../context/contextApp";
import "./item.css";

export const CartItem = (props) => {
  const { cartItems, updateCartItemCount, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="listItem">
      <li>
        <div>
          <img src={props.image} alt={props.title} className="listImg"></img>
        </div>
        <div className="desc">
          <h3>{props.title}</h3>
          <h4>{props.price}€</h4>
        </div>
        <div className="control">
          <button onClick={() => removeFromCart(props.id)}> - </button>
          <input value={cartItems[props.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), props.id) }></input>
          <button onClick={() => addToCart(props.id)}> + </button>
        </div>
      </li>
    </div>
  );
};

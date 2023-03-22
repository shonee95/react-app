import React, { useContext } from "react";
import { ShopContext } from "../context/contextApp";
import { CartItem } from "./cartItem";
import "./itemList.css";

export const CartItemsList = (props) => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="items">
      <ul className="list">
        {props.data.map((item) => {
          if (cartItems[item.id] !== 0) {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};

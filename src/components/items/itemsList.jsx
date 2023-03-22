import React from "react";
import { Item } from "./item";
import "./itemList.css";

export const ItemsList = (props) => {
  return (
    <div className="items">
      <ul className="list">
        {props.data.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
};

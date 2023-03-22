import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemsContext, ShopContext } from "../context/contextApp";
import { Background } from "../layout/background";
import "./item.css";
import { Update } from "./update";

export const Item = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {updateValue} = useContext(ItemsContext);
  const {addToCart, cartItems} = useContext(ShopContext);

  const navigate = useNavigate();

  const onUpdateHandler = (e) => {
    setModalIsOpen(true);
  };

  const onCloseModalHandler = () => {
    setModalIsOpen(false);
  }

  const onDeleteHandler = (e) => {
    e.preventDefault();

    fetch(
      "https://react-first-app-db8ce-default-rtdb.firebaseio.com/items/" +
      props.id +
      ".json",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      updateValue();
      navigate("/", { replace: true });
    });
    
  }

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
        <div className="btn">
          <button onClick={onUpdateHandler}>Update</button>
          <button onClick={onDeleteHandler}>Delete</button>
          <button onClick={() => addToCart(props.id)}>Add to cart ({cartItems[props.id]})</button>
        </div>
      </li>
      {modalIsOpen && <Update onCancel={onCloseModalHandler} data={props} />}
      {modalIsOpen && <Background />}
    </div>
  );
};

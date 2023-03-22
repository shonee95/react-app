import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "../context/contextApp";
import { NewItemForm } from "../items/newItemForm";

export const AddItem = () => {

const navigate = useNavigate();
const {updateValue} = useContext(ItemsContext);

const onAddItemHandler = (item) => {
    fetch(
        "https://react-first-app-db8ce-default-rtdb.firebaseio.com/items.json",
        {
          method: "POST",
          body: JSON.stringify(item),
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
    <div>
      <h1>New Item</h1>
      <NewItemForm onAddItem={onAddItemHandler} />
    </div>
  );
};

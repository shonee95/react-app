import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "../context/contextApp";
import "./update.css";

export const Update = (props) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const { updateValue} = useContext(ItemsContext);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const item = {
      title: title,
      image: image,
      price: price,
    };

    fetch(
      "https://react-first-app-db8ce-default-rtdb.firebaseio.com/items/" +
        id +
        ".json",
      {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      }).then((data) => {
        onCancel();
        
        updateValue();

        navigate("/", { replace: true });
      });
  };

  const onCancel = () => {
    props.onCancel();
  };

  useEffect(() => {
    setId(props.data.id);
    setTitle(props.data.title);
    setImage(props.data.image);
    setPrice(props.data.price);
  }, []);

  return (
    <div className="modal">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            required
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            required
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <button>Update</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

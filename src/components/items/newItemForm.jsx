import React, { useRef } from "react";

export const NewItemForm = (props) => {

    const enteredTitle = useRef(null);
    const enteredImage = useRef(null);
    const enteredPrice = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();

        const itemData = {
            title: enteredTitle.current.value,
            image: enteredImage.current.value,
            price: enteredPrice.current.value,
          };
      
          props.onAddItem(itemData);
    }

    return <div>
        <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={enteredTitle} />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={enteredImage} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" required id="price" ref={enteredPrice} />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
}
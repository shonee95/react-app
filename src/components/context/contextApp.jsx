import React, { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext(null);
export const ShopContext = createContext(null);

export const ItemsContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);
  const [reRun, setReRun] = useState(false);
  const [cartItems, setCartItems] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-first-app-db8ce-default-rtdb.firebaseio.com/items.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const items = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };
          items.push(item);
        }

        setIsLoading(false);
        setLoadedItems(items);
      });
  }, [reRun]);

  useEffect(() => {
    const cart = {};
    for (let i = 0; i < loadedItems.length; i++) {
      cart[loadedItems[i].id] = 0;
    }
    setCartItems(cart);

  }, [loadedItems]);

  const updateValue = () => {
    setReRun(!reRun);
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartItem = () => {
    let totalItem = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += 1;
      }
    }
    return totalItem;
  };

  const getTotalAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] >0) {
        let itemInfo = loadedItems.find((data) => data.id === item);
        totalAmount += Number(itemInfo.price) * cartItems[item];
      }
    }
    return totalAmount;
  }

  const context = {
    loadedItems,
    isLoading,
    updateValue,
  };

  const shopContext = {
    addToCart,
    cartItems,
    getTotalCartItem,
    updateCartItemCount,
    removeFromCart,
    getTotalAmount
  };

  return (
    <ItemsContext.Provider value={context}>
      <ShopContext.Provider value={shopContext}>
        {props.children}
      </ShopContext.Provider>
    </ItemsContext.Provider>
  );
};

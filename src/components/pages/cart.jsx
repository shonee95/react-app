import React, { useContext } from "react";
import { ItemsContext, ShopContext } from "../context/contextApp";
import { CartItemsList } from "../items/cartItemList";


export const Cart = () => {

    const {loadedItems} = useContext(ItemsContext);
    const {getTotalAmount} = useContext(ShopContext);

    return <div>
        <h1>Shopping cart</h1>
        <CartItemsList data={loadedItems} />
        <p>Total price: {getTotalAmount()}€</p>
    </div>
}
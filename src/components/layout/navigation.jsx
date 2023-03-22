import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/contextApp";
import "./navigation.css";

export const Navigation = () => {

  const {getTotalCartItem} = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
        <Link to="/cart">Cart <span className="badge">{getTotalCartItem()}</span></Link>
      </div>
    </div>
  );
};

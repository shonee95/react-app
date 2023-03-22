import React, { useContext } from "react";
import { ItemsContext } from "../context/contextApp";
import { ItemsList } from "../items/itemsList";
import { SpinnerLayout } from "../layout/spinner";

export const Home = () => {
  const { loadedItems, isLoading } = useContext(ItemsContext);

  if (isLoading) {
    return <SpinnerLayout />;
  }

  return (
    <div>
      <h1>Home</h1>
      <ItemsList data={loadedItems} />
    </div>
  );
};

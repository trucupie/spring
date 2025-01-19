import "./SpacecraftBuilder.css";

import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";
import { useState } from "react";

function SpacecraftBuilder() {
  const [inventoryItems, setInventoryItems] = useState([]);

  const addNewItem = (item) => {
    item.id = Math.random().toString(16).slice(2);
    setInventoryItems((prev) => [...prev, item]);
  };

  const deleteItem = (id) => {
    setInventoryItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1>Spacecraft Builder</h1>
      <h4>Add an Item to the Inventory</h4>
      <ItemForm addNewItem={addNewItem} />
      <InventoryDisplay inventory={inventoryItems} deleteItem={deleteItem} />
    </>
  );
}

export default SpacecraftBuilder;

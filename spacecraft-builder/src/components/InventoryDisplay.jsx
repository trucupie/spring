import "./InventoryDisplay.css";
import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";

function InventoryDisplay({ inventory, deleteItem }) {
  return (
    <div className="InventoryDisplay">
      <h4>Inventory</h4>
      {inventory.map((item, key) => (
        <ItemCard key={key} item={item}>
          <ItemAction deleteItem={() => deleteItem(item.id)} />
        </ItemCard>
      ))}
    </div>
  );
}

export default InventoryDisplay;

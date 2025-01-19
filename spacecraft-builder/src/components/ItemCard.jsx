import "./ItemCard.css";

function ItemCard({ item, children }) {
  return (
    <div className="ItemCard">
      <h4>{item.name}</h4>
      <p>Quantity: {item.quantity}</p>
      <p>Purpose: {item.purpose}</p>
      {children}
    </div>
  );
}

export default ItemCard;

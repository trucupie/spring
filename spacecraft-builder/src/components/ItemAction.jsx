import "./ItemAction.css";

function ItemAction({ deleteItem }) {
  return (
    <>
      <button className="ItemAction" onClick={deleteItem}>
        Delete
      </button>
    </>
  );
}

export default ItemAction;

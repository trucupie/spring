import "./ActionButton.css";

const ActionButton = ({ gameStatus, onFire, onRestart }) => {
  if (gameStatus === "ongoing") {
    return (
      <button className="ActionButton ActionButton-fire" onClick={onFire}>
        Fire!
      </button>
    );
  }

  return (
    <button className="ActionButton ActionButton-restart" onClick={onRestart}>
      Restart?
    </button>
  );
};

export default ActionButton;

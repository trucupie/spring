import "./Health.css";

const Health = ({ type, health }) => {
  if (type === "player") {
    return (
      <div className="player-health">
        Player Health: <span className="health-value">{health} ❤️</span>
      </div>
    );
  }

  return (
    <div className="enemy-health">
      Enemy Health: <span className="health-value">{health} 💀</span>
    </div>
  );
};

export default Health;

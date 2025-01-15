import { useState } from "react";
import "./App.css";

import StatusMessage from "./components/StatusMessage";
import Health from "./components/Health";
import ActionButton from "./components/ActionButton";

function App() {
  const minDamage = 5,
    maxDamage = 20;

  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);

  const [gameStatus, setGameStatus] = useState("ongoing");

  const getRandomDamage = () => {
    return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
  };

  const handleFire = () => {
    const damageToEnemy = getRandomDamage();
    const damageToPlayer = getRandomDamage();

    // Update health
    const updatedEnemyHealth = Math.max(enemyHealth - damageToEnemy, 0);
    const updatedPlayerHealth = Math.max(playerHealth - damageToPlayer, 0);

    setEnemyHealth(updatedEnemyHealth);
    setPlayerHealth(updatedPlayerHealth);

    if (updatedEnemyHealth === 0 && updatedPlayerHealth === 0) {
      setGameStatus("draw");
    } else if (updatedEnemyHealth <= 0) {
      setGameStatus("win");
    } else if (updatedPlayerHealth <= 0) {
      setGameStatus("loss");
    }
  };

  const handleRestart = () => {
    setPlayerHealth(100);
    setEnemyHealth(100);
    setGameStatus("ongoing");
  };

  return (
    <>
      <header className="header">
        <h1>Space Battle Simulator</h1>
      </header>

      <div className="stats-bar">
        <Health type="player" health={playerHealth} />
        <ActionButton
          gameStatus={gameStatus}
          onFire={handleFire}
          onRestart={handleRestart}
        />
        <Health type="enemy" health={enemyHealth} />
      </div>

      <footer className="footer">
        <StatusMessage gameStatus={gameStatus} />
      </footer>
    </>
  );
}

export default App;

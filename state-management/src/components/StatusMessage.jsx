const StatusMessage = ({ gameStatus }) => {
  let message;

  switch (gameStatus) {
    case "win":
      message = "Congratulations! You have won the battle!";
      break;
    case "loss":
      message = "You lost the battle. Better luck next time!";
      break;
    case "draw":
      message = "It's a draw! Both ships have been destroyed.";
      break;
    default:
      // "ongoing"
      message = 'Press "Fire" to attack the enemy ship!';
  }

  return <p>{message}</p>;
};

export default StatusMessage;

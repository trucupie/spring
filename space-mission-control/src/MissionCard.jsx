import "./MissionCard.css";

const MissionCard = ({ mission: { name, status, crew } }) => {
  return (
    <>
      <div className="MissionCard-info">
        <h4>{name}</h4>
        <p>Status: {status}</p>
        <p>Crew: {crew.join(", ")}</p>
      </div>
    </>
  );
};

export default MissionCard;

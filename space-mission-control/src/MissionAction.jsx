import "./MissionAction.css";

const MissionAction = ({ missionId, onUpdateMissionStatus }) => {
  return (
    <div className="MissionAction">
      <button onClick={() => onUpdateMissionStatus(missionId, "Active")}>
        Launch
      </button>
      <button onClick={() => onUpdateMissionStatus(missionId, "Completed")}>
        Complete
      </button>
    </div>
  );
};

export default MissionAction;

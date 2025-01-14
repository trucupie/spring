import "./MissionFilter.css";

const MissionFilter = ({ setFilter }) => {
  const STATUSES = ["All", "Planned", "Active", "Completed"];

  return (
    <div className="MissionFilter">
      {STATUSES.map((status, index) => (
        <button key={index} onClick={() => setFilter(status)}>
          {status}
        </button>
      ))}
    </div>
  );
};

export default MissionFilter;

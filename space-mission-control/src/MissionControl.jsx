import { useState } from "react";

import MissionFilter from "./MissionFilter";
import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";

const MissionControl = ({ initialMissions }) => {
  const INITIAL_FILTER = "All";

  const [missions, setMissions] = useState(initialMissions);
  const [filter, setFilter] = useState(INITIAL_FILTER);

  function updateMissionStatus(id, newStatus) {
    setMissions((prevMissions) =>
      prevMissions.map((mission) =>
        mission.id === id ? { ...mission, status: newStatus } : mission
      )
    );
  }

  const filteredMissions = missions.filter(
    (mission) => filter === "All" || mission.status === filter
  );

  return (
    <>
      <h1>Space Mission Control</h1>
      <MissionFilter setFilter={setFilter} />
      {filteredMissions.map((mission, index) => {
        return (
          <div key={index} className="MissionCard">
            <MissionCard mission={mission} />
            <MissionAction
              missionId={mission.id}
              onUpdateMissionStatus={updateMissionStatus}
            />
          </div>
        );
      })}
    </>
  );
};

export default MissionControl;

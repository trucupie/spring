const PhenomenaList = ({ phenomena }) => {
  return (
    <div>
      {/* Map over the phenomena array, randomly assigning a status to each */}
      {phenomena.map((phenomenon) => {
        const status = getRandomStatus();

        return (
          <PhenomenonCard
            key={phenomenon.name}
            phenomenon={phenomenon}
            status={status}
          />
        );
      })}
    </div>
  );
};

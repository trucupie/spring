const PhenomenonCard = ({ phenomenon, status }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px 0",
        padding: "10px",
        borderRadius: "6px",
      }}
    >
      <h2>
        {phenomenon.emoji} {phenomenon.name}
      </h2>
      <p>
        Status: <strong>{status}</strong>
      </p>
      {status === "🚀 Prime for Study" && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          This is a perfect time to bring your advanced equipment!
        </p>
      )}
    </div>
  );
};

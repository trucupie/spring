const App = () => {
  const spacePhenomena = [
    { id: 1, name: "Asteroid Belt", emoji: "☄️" },
    { id: 2, name: "Galactic Nebula", emoji: "🌌" },
    { id: 3, name: "Black Hole", emoji: "🕳️" },
    { id: 4, name: "Supernova Explosion", emoji: "💥" },
    { id: 5, name: "Pulsar", emoji: "⚡" },
    { id: 6, name: "Quasar", emoji: "💫" },
    { id: 7, name: "Exoplanet", emoji: "🪐" },
    { id: 8, name: "Interstellar Cloud", emoji: "☁️" },
    { id: 9, name: "Gamma-Ray Burst", emoji: "🌠" },
    { id: 10, name: "Magnetic Field Reversal", emoji: "🧲" },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Space Phenomena Tracker</h1>
      <p>
        Watch the skies, explorers! Here are some fascinating phenomena observed
        in our universe:
      </p>
      <PhenomenaList phenomena={spacePhenomena} />
    </div>
  );
};

// export default App;
ReactDOM.render(<App />, document.getElementById("root"));

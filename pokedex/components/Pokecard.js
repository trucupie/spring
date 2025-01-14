const Pokecard = ({ pokemon }) => {
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "30px 30px",
        paddingBottom: "20px",
        borderRadius: "6px",
        width: "150px",
        textAlign: "center",
        backgroundColor: "silver",
        display: "inline-block",
      }}
    >
      <h4 style={{ color: "blue" }}>{pokemon.name}</h4>
      <img src={imageSrc} />
      <div>Type: {pokemon.type}</div>
      <div>EXP: {pokemon.base_experience}</div>
    </div>
  );
};

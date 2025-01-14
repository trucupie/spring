const Pokedex = ({ pokemons, total, isWinner }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {/* Map over the pokemon array */}
      {pokemons.map((pokemon, index) => {
        return <Pokecard key={index} pokemon={pokemon} />;
      })}
      <p>Total Experience: {total}</p>
      {isWinner && (
        <p style={{ color: "green", fontWeight: "bold" }}>THIS HAND WINS!</p>
      )}
    </div>
  );
};

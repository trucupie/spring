const Pokegame = ({ pokemons }) => {
  // 1. Shuffle the array randomly
  const shuffled = _.shuffle(pokemons);

  // 2. Chunk the shuffled array into two arrays of 4 cards each
  const [hand1, hand2] = _.chunk(shuffled, 4);

  // Calculate experience totals, determine a winner
  const totals1 = hand1.reduce((acc, p) => acc + p.base_experience, 0);
  const totals2 = hand2.reduce((acc, p) => acc + p.base_experience, 0);
  const winner = totals1 > totals2 ? "Hand1" : "Hand2";

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "silver" }}>Pokedex</h1>
      <Pokedex pokemons={hand1} isWinner={winner === "Hand1"} total={totals1} />
      <Pokedex pokemons={hand2} isWinner={winner === "Hand2"} total={totals2} />
    </div>
  );
};

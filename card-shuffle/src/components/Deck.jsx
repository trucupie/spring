import { useState, useEffect } from "react";
import Card from "./Card";
import { useRef } from "react";

const API_URL = "https://deckofcardsapi.com/api/deck";

function Deck() {
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [drawing, setDrawing] = useState(false);
  const intervalId = useRef("");

  useEffect(() => {
    const getDeck = async () => {
      setLoading(true);

      try {
        const resp = await fetch(`${API_URL}/new/shuffle/?deck_count=1`).then(
          (resp) => resp.json()
        );

        setDeck(resp);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };

    getDeck();
  }, []);

  const drawCard = async () => {
    try {
      const card = await fetch(`${API_URL}/${deck.deck_id}/draw/?count=1`)
        .then((resp) => resp.json())
        .then(({ cards }) => cards[0]);

      if (!card) {
        throw new Error("no cards remaining!");
      }

      setCards((prev) => [...prev, card]);
    } catch (error) {
      clearInterval(intervalId.current);
      setDrawing(false);
      alert(error);
    }
  };

  const startDrawing = () => {
    if (drawing) {
      clearInterval(intervalId.current);
      setDrawing(false);
      return;
    }

    setDrawing(true);
    intervalId.current = setInterval(async () => {
      await drawCard();
    }, 1000);
  };

  const shuffle = async () => {
    setLoading(true);

    try {
      await fetch(`${API_URL}/${deck.deck_id}/shuffle/`);

      setCards([]);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const drawingButton = () => {
    if (drawing) {
      return (
        <button disabled={loading} onClick={startDrawing}>
          STOP DRAWING
        </button>
      );
    }

    return (
      <button disabled={loading} onClick={startDrawing}>
        START DRAWING
      </button>
    );
  };

  return (
    <>
      {drawingButton()}
      <button disabled={loading} onClick={shuffle}>
        SHUFFLE DECK
      </button>
      <div className="deck">
        {cards.map((card, index) => {
          return <Card key={index} src={card.image} />;
        })}
      </div>
    </>
  );
}

export default Deck;

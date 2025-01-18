import { useState, useEffect } from "react";
import "./Space.css";
import Star from "./Star";

const STAR_SIZE = 100;

function Space() {
  const [stars, setStars] = useState([]);

  const getRandomValue = (val) => {
    return Math.floor(Math.random() * val + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const star = {
        id: Math.random().toString(16).slice(2),
        top: getRandomValue(window.innerHeight - STAR_SIZE),
        left: getRandomValue(window.innerWidth - STAR_SIZE),
      };

      setStars((prev) => [...prev, star]);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  const removeStar = (id) => {
    setStars(stars.filter((star) => star.id !== id));
  };

  return (
    <>
      {stars.map((star, index) => {
        return (
          <Star
            onRemove={removeStar}
            key={index}
            id={star.id}
            top={star.top}
            left={star.left}
          />
        );
      })}
    </>
  );
}

export default Space;

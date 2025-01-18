import { useEffect, useRef } from "react";
import "./Star.css";

function Star({ id, top, left, onRemove }) {
  const starRef = useRef(null);

  useEffect(() => {
    const star = starRef.current;
    star.focus();
  }, []);

  return (
    <div
      tabIndex="0"
      ref={starRef}
      onClick={() => onRemove(id)}
      className="Star"
      style={{ left: `${left}px`, top: `${top}px` }}
    >
      &#9733;
    </div>
  );
}

export default Star;

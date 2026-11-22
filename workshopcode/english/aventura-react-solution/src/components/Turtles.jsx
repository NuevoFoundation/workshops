import { useState } from "react";

export default function Turtles() {
  const [turtles, setTurtles] = useState(0);

  const total = 10;

  const saveTurtle = () => {
    if (turtles < total) {
      setTurtles(turtles + 1);
    }
  };

  const restart = () => {
    setTurtles(0);
  };

  return (
    <div className="turtles">
      <h2>🐢 Tortuguero National Park</h2>
      <p>You have saved {turtles} of {total} turtles</p>

      {turtles < total ? (
        <button onClick={saveTurtle}>Save a turtle</button>
      ) : (
        <>
          <p className="success">All the turtles are safe!</p>
          <button onClick={restart}>Restart mission</button>
        </>
      )}
    </div>
  );
}

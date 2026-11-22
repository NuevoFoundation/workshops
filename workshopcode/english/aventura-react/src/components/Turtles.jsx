import { useState } from "react";

export default function Turtles() {
  // TODO 1: Give React a memory for the number of turtles saved.
  // Change this line into a state variable that starts at 0.
  const turtles = 0;

  const total = 10;

  // TODO 2: Save one more turtle each time the button is clicked.
  const saveTurtle = () => {

  };

  // TODO 3: Put the counter back to 0 so we can play again.
  const restart = () => {

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

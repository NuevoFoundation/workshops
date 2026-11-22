import { useState } from "react";

export default function CoffeeFarm() {
  const stages = [
    "🌱 Plant the coffee",
    "🍒 Pick the coffee cherries",
    "🌞 Dry the beans in the sun",
    "🔥 Roast the beans",
    "☕ Enjoy a cup of coffee",
  ];

  // TODO 1: Make step a state variable that starts at 0.
  const step = 0;

  // TODO 2: Go to the next stage, but stop at the last one.
  const next = () => {

  };

  return (
    <div className="coffee-farm">
      <h2>☕ Grandpa's Coffee Farm</h2>
      <p className="stage-number">
        Stage {step + 1} of {stages.length}
      </p>
      <p className="stage">{stages[step]}</p>

      {step < stages.length - 1 ? (
        <button className="next-button" onClick={next}>
          Next stage ➡️
        </button>
      ) : (
        <h3 className="final-message">You finished the whole coffee process!</h3>
      )}
    </div>
  );
}

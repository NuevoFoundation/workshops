import { useState } from "react";

export default function Beach() {
  // TODO 1: Give React a memory for the trash list.
  // Change the first and last lines of this list to make it a state variable
  // (like turtles in Activity 1).
  const trash = [
    "🧃 Plastic bottle",
    "🍾 Glass",
    "🥫 Can",
    "📄 Paper",
  ];

  // TODO 2: Remove the piece of trash that was clicked.
  const pickUp = (item) => {

  };

  return (
    <div className="beach">
      <h2>🏖️ Beach Cleanup</h2>
      <p className="instructions">
        Click the trash to pick it up and protect sea life.
      </p>

      <div className="trash-buttons">
        {/* TODO 3: Make one button for each piece of trash. */}
      </div>

      {trash.length === 0 && <p className="final-message">The beach is clean!</p>}
    </div>
  );
}

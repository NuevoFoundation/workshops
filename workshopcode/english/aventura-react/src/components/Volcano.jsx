import { useState } from "react";

export default function Volcano() {
  // TODO 1: Add at least 3 more animals that live in Costa Rica,
  // then make this list a state variable (like the trash in Activity 2).
  const animals = ["🐒 Howler monkey", "🦜 Toucan"];

  // TODO 2: Remove the animal that was evacuated.
  const evacuate = (animal) => {

  };

  return (
    <div className="volcano">
      <h2>🌋 Arenal Volcano</h2>
      <p className="instructions">
        The volcano is rumbling! Evacuate every animal.
      </p>

      {animals.length > 0 ? (
        <ul>
          {/* TODO 3: Make one list item for each animal, with an Evacuate button. */}
        </ul>
      ) : (
        <p className="final-message">All the animals are safe!</p>
      )}
    </div>
  );
}

import { useState } from "react";

export default function Volcano() {
  const [animals, setAnimals] = useState([
    "🐒 Howler monkey",
    "🦜 Toucan",
    "🐆 Jaguar",
    "🐸 Red-eyed tree frog",
    "🦥 Three-toed sloth",
  ]);

  const evacuate = (animal) => {
    setAnimals(animals.filter((a) => a !== animal));
  };

  return (
    <div className="volcano">
      <h2>🌋 Arenal Volcano</h2>
      <p className="instructions">
        The volcano is rumbling! Evacuate every animal.
      </p>

      {animals.length > 0 ? (
        <ul>
          {animals.map((animal) => (
            <li key={animal}>
              {animal} is in danger!
              <button onClick={() => evacuate(animal)}>Evacuate</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="final-message">All the animals are safe!</p>
      )}
    </div>
  );
}

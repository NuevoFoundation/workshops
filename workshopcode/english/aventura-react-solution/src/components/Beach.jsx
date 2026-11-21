import { useState } from "react";

export default function Beach() {
  const [trash, setTrash] = useState(["🧃 Plastic bottle", "🍾 Glass", "🥫 Can", "📄 Paper"]);

  const pickUp = (item) => {
    setTrash(trash.filter((t) => t !== item));
  };

  return (
    <div className="beach">
      <h2>🏖️ Beach Cleanup</h2>
      <p className="instructions">
        Click the trash to pick it up and protect sea life.
      </p>

      <div className="trash-buttons">
        {trash.map((item) => (
          <button key={item} onClick={() => pickUp(item)}>
            Pick up {item}
          </button>
        ))}
      </div>

      {trash.length === 0 && <p className="final-message">The beach is clean!</p>}
    </div>
  );
}

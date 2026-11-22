import { useState } from "react";

// A SMALL component: one sloth card.
// It gets its information from props: name, saved and onRescue.
function Sloth({ name, saved, onRescue }) {
  return (
    <div className={saved ? "sloth-card saved" : "sloth-card"}>
      {/* TODO 1: Show this sloth's name using the name prop. */}
      <h3>🦥 A sloth</h3>

      <p>{saved ? "✅ Safe!" : "Needs help"}</p>

      {!saved && <button onClick={() => onRescue(name)}>Rescue</button>}
    </div>
  );
}

// A BIG component: the whole rescue area.
export default function Sloths() {
  const sloths = ["Mau", "Rick", "Luna", "Toby"];
  const [rescued, setRescued] = useState([]);

  const rescue = (name) => {
    if (!rescued.includes(name)) {
      setRescued([...rescued, name]);
    }
  };

  return (
    <div className="sloths">
      <h2>🦥 Sloth Rescue</h2>
      <p className="instructions">Click a sloth to rescue it from the forest.</p>

      <div className="sloth-list">
        {/* TODO 2: Show one Sloth card for each name in the sloths list. */}
        <Sloth name="Mau" saved={rescued.includes("Mau")} onRescue={rescue} />
      </div>

      {rescued.length === sloths.length && (
        <h3 className="final-message">You rescued all the sloths!</h3>
      )}
    </div>
  );
}

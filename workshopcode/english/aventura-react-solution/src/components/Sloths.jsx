import { useState } from "react";

// A SMALL component: one sloth card.
// It gets its information from props: name, saved and onRescue.
function Sloth({ name, saved, onRescue }) {
  return (
    <div className={saved ? "sloth-card saved" : "sloth-card"}>
      <h3>🦥 {name}</h3>

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
        {sloths.map((name) => (
          <Sloth
            key={name}
            name={name}
            saved={rescued.includes(name)}
            onRescue={rescue}
          />
        ))}
      </div>

      {rescued.length === sloths.length && (
        <h3 className="final-message">You rescued all the sloths!</h3>
      )}
    </div>
  );
}

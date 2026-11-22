---
title: "Answer key"
date: 2020-03-27T20:24:33-07:00
weight: 20
draft: false
hidden: true
---

These are the finished files from the solution project (`workshopcode/english/aventura-react-solution`). You can also open the finished app and try it:

### <a class="btn btn-info" href="../open-finished/" target="_blank" rel="noopener">👉 Open the finished app</a>

`src/main.jsx` and `src/style.css` are the same in the starter and the finished app, so they aren't shown here. In the Volcano activity, students choose their own animals, so their list can be different.

## src/App.jsx

Both bonus components are turned on.

```jsx
import Turtles from "./components/Turtles.jsx";
import Beach from "./components/Beach.jsx";
import Sloths from "./components/Sloths.jsx";
import CoffeeFarm from "./components/CoffeeFarm.jsx";
import Volcano from "./components/Volcano.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>My Costa Rica Adventure</h1>

      <Turtles />
      <Beach />
      <Sloths />

      <CoffeeFarm />
      <Volcano />
    </div>
  );
}
```

## src/components/Turtles.jsx (Activity 1)

```jsx
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
```

## src/components/Beach.jsx (Activity 2)

```jsx
import { useState } from "react";

export default function Beach() {
  const [trash, setTrash] = useState([
    "🧃 Plastic bottle",
    "🍾 Glass",
    "🥫 Can",
    "📄 Paper",
  ]);

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
```

## src/components/Sloths.jsx (Activity 3)

```jsx
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
```

## src/components/CoffeeFarm.jsx (Bonus: Coffee farm)

```jsx
import { useState } from "react";

export default function CoffeeFarm() {
  const stages = [
    "🌱 Plant the coffee",
    "🍒 Pick the coffee cherries",
    "🌞 Dry the beans in the sun",
    "🔥 Roast the beans",
    "☕ Enjoy a cup of coffee",
  ];

  const [step, setStep] = useState(0);

  const next = () => {
    if (step < stages.length - 1) {
      setStep(step + 1);
    }
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
```

## src/components/Volcano.jsx (Bonus: Arenal volcano)

```jsx
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
```

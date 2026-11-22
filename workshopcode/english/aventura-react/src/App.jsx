import Turtles from "./components/Turtles.jsx";
import Beach from "./components/Beach.jsx";
import Sloths from "./components/Sloths.jsx";

// BONUS: When you get to a bonus activity, remove the // at the
// start of its import line below, and the {/* */} around its tag.
// import CoffeeFarm from "./components/CoffeeFarm.jsx";
// import Volcano from "./components/Volcano.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>My Costa Rica Adventure</h1>

      <Turtles />
      <Beach />
      <Sloths />

      {/* <CoffeeFarm /> */}
      {/* <Volcano /> */}
    </div>
  );
}

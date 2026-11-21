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

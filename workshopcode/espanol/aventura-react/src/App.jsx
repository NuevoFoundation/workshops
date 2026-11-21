import Tortugas from "./components/Tortugas.jsx";
import Playa from "./components/Playa.jsx";
import Perezosos from "./components/Perezosos.jsx";

// EXTRA: Cuando llegues a una actividad extra, borra las // al
// inicio de su línea import de abajo, y las {/* */} alrededor de su etiqueta.
// import FincaCafe from "./components/FincaCafe.jsx";
// import Volcan from "./components/Volcan.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>Mi aventura en Costa Rica</h1>

      <Tortugas />
      <Playa />
      <Perezosos />

      {/* <FincaCafe /> */}
      {/* <Volcan /> */}
    </div>
  );
}

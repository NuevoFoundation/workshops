import { useState } from "react";

// Un componente PEQUEÑO: la tarjeta de un perezoso.
// Recibe su información por props: nombre, rescatado y onRescatar.
function Perezoso({ nombre, rescatado, onRescatar }) {
  return (
    <div className={rescatado ? "tarjeta-perezoso rescatado" : "tarjeta-perezoso"}>
      {/* TAREA 1: Muestra el nombre de este perezoso usando la prop nombre. */}
      <h3>🦥 Un perezoso</h3>

      <p>{rescatado ? "✅ ¡A salvo!" : "Necesita ayuda"}</p>

      {!rescatado && <button onClick={() => onRescatar(nombre)}>Rescatar</button>}
    </div>
  );
}

// Un componente GRANDE: toda la zona de rescate.
export default function Perezosos() {
  const perezosos = ["Mau", "Rick", "Luna", "Toby"];
  const [rescatados, setRescatados] = useState([]);

  const rescatar = (nombre) => {
    if (!rescatados.includes(nombre)) {
      setRescatados([...rescatados, nombre]);
    }
  };

  return (
    <div className="perezosos">
      <h2>🦥 Rescate de los Perezosos</h2>
      <p className="instrucciones">Haz clic en un perezoso para rescatarlo del bosque.</p>

      <div className="lista-perezosos">
        {/* TAREA 2: Muestra una tarjeta Perezoso por cada nombre de la lista perezosos. */}
        <Perezoso
          nombre="Mau"
          rescatado={rescatados.includes("Mau")}
          onRescatar={rescatar}
        />
      </div>

      {rescatados.length === perezosos.length && (
        <h3 className="mensaje-final">¡Has rescatado a todos los perezosos!</h3>
      )}
    </div>
  );
}

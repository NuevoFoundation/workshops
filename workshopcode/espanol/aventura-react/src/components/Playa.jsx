import { useState } from "react";

export default function Playa() {
  // TAREA 1: Dale a React una memoria para la lista de desechos.
  // Cambia esta línea por una variable de estado (como tortugas en la Actividad 1).
  const desechos = ["🧃 Plástico", "🍾 Vidrio", "🥫 Lata", "📄 Papel"];

  // TAREA 2: Quita el desecho al que se le hizo clic.
  const recoger = (desecho) => {

  };

  return (
    <div className="playa">
      <h2>🏖️ Limpieza de las Playas</h2>
      <p className="instrucciones">
        Haz clic en los desechos para recogerlos y proteger a las especies marinas.
      </p>

      <div className="botones-desechos">
        {/* TAREA 3: Crea un botón para cada desecho. */}
      </div>

      {desechos.length === 0 && <p className="mensaje-final">¡La playa está limpia!</p>}
    </div>
  );
}

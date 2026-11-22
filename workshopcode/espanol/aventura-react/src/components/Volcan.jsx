import { useState } from "react";

export default function Volcan() {
  // TAREA 1: Agrega al menos 3 animales más que vivan en Costa Rica,
  // y luego convierte esta lista en una variable de estado (como los desechos en la Actividad 2).
  const animales = ["🐒 Mono congo", "🦜 Tucán"];

  // TAREA 2: Quita el animal que fue evacuado.
  const evacuar = (animal) => {

  };

  return (
    <div className="volcan">
      <h2>🌋 Volcán Arenal</h2>
      <p className="instrucciones">
        ¡El volcán está retumbando! Evacúa a todos los animales.
      </p>

      {animales.length > 0 ? (
        <ul>
          {/* TAREA 3: Crea un elemento de la lista para cada animal, con un botón Evacuar. */}
        </ul>
      ) : (
        <p className="mensaje-final">¡Todos los animales están a salvo!</p>
      )}
    </div>
  );
}

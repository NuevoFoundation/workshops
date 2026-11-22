import { useState } from "react";

export default function FincaCafe() {
  const etapas = [
    "🌱 Sembrar el café",
    "🍒 Cosechar los granos de café",
    "🌞 Secar los granos al sol",
    "🔥 Tostar los granos",
    "☕ Disfrutar una taza de café",
  ];

  // TAREA 1: Haz que paso sea una variable de estado que empiece en 0.
  const paso = 0;

  // TAREA 2: Pasa a la siguiente etapa, pero detente en la última.
  const siguiente = () => {

  };

  return (
    <div className="finca-cafe">
      <h2>☕ Finca del Abuelo</h2>
      <p className="numero-etapa">
        Etapa {paso + 1} de {etapas.length}
      </p>
      <p className="etapa">{etapas[paso]}</p>

      {paso < etapas.length - 1 ? (
        <button className="boton-siguiente" onClick={siguiente}>
          Siguiente etapa ➡️
        </button>
      ) : (
        <h3 className="mensaje-final">¡Has completado todo el proceso del café!</h3>
      )}
    </div>
  );
}

import { useState } from "react";

export default function FincaCafe() {
  const etapas = [
    "🌱 Sembrar el café",
    "🍒 Cosechar los granos de café",
    "🌞 Secar los granos al sol",
    "🔥 Tostar los granos",
    "☕ Disfrutar una taza de café",
  ];

  const [paso, setPaso] = useState(0);

  const siguiente = () => {
    if (paso < etapas.length - 1) {
      setPaso(paso + 1);
    }
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

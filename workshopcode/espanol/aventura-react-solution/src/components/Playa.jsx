import { useState } from "react";

export default function Playa() {
  const [desechos, setDesechos] = useState([
    "🧃 Plástico",
    "🍾 Vidrio",
    "🥫 Lata",
    "📄 Papel",
  ]);

  const recoger = (desecho) => {
    setDesechos(desechos.filter((d) => d !== desecho));
  };

  return (
    <div className="playa">
      <h2>🏖️ Limpieza de las Playas</h2>
      <p className="instrucciones">
        Haz clic en los desechos para recogerlos y proteger a las especies marinas.
      </p>

      <div className="botones-desechos">
        {desechos.map((desecho) => (
          <button key={desecho} onClick={() => recoger(desecho)}>
            Recoger {desecho}
          </button>
        ))}
      </div>

      {desechos.length === 0 && <p className="mensaje-final">¡La playa está limpia!</p>}
    </div>
  );
}

import { useState } from "react";

export default function Volcan() {
  const [animales, setAnimales] = useState([
    "🐒 Mono congo",
    "🦜 Tucán",
    "🐆 Jaguar",
    "🐸 Rana de ojos rojos",
    "🦥 Perezoso de tres dedos",
  ]);

  const evacuar = (animal) => {
    setAnimales(animales.filter((a) => a !== animal));
  };

  return (
    <div className="volcan">
      <h2>🌋 Volcán Arenal</h2>
      <p className="instrucciones">
        ¡El volcán está retumbando! Evacúa a todos los animales.
      </p>

      {animales.length > 0 ? (
        <ul>
          {animales.map((animal) => (
            <li key={animal}>
              ¡{animal} está en peligro!
              <button onClick={() => evacuar(animal)}>Evacuar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mensaje-final">¡Todos los animales están a salvo!</p>
      )}
    </div>
  );
}

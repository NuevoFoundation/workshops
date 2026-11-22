import { useState } from "react";

export default function Tortugas() {
  const [tortugas, setTortugas] = useState(0);

  const total = 10;

  const salvarTortuga = () => {
    if (tortugas < total) {
      setTortugas(tortugas + 1);
    }
  };

  const reiniciar = () => {
    setTortugas(0);
  };

  return (
    <div className="tortugas">
      <h2>🐢 Parque Nacional Tortuguero</h2>
      <p>Has salvado {tortugas} de {total} tortugas</p>

      {tortugas < total ? (
        <button onClick={salvarTortuga}>Salvar tortuga</button>
      ) : (
        <>
          <p className="exito">¡Todas las tortugas están a salvo!</p>
          <button onClick={reiniciar}>Reiniciar misión</button>
        </>
      )}
    </div>
  );
}

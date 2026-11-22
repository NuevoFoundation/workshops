import { useState } from "react";

export default function Tortugas() {
  // TAREA 1: Dale a React una memoria para el número de tortugas salvadas.
  // Cambia esta línea por una variable de estado que empiece en 0.
  const tortugas = 0;

  const total = 10;

  // TAREA 2: Salva una tortuga más cada vez que se haga clic en el botón.
  const salvarTortuga = () => {

  };

  // TAREA 3: Vuelve a poner el contador en 0 para jugar otra vez.
  const reiniciar = () => {

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

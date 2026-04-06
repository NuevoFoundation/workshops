---
title: "Actividad 5 - Rescatando Perezosos"
date: 2019-07-25T13:24:17-07:00
weight: 8
draft: false
---

<img src="../media/bee_honeycomb.png" alt="Abeja pensando en colmena" width="25%" />

¡Ya estamos por terminar nuestro viaje por Costa Rica! Para terminar vamos a conocer un poco sobre los Perezosos.  
Los osos perezosos en Costa Rica son un ícono del país y hay dos especies: el de dos dedos (Choleopus hoffmanni) y el de tres dedos (Bradypus variegatus). Son conocidos por su lentitud, su habilidad para camuflarse y por ser símbolos nacionales que representan la conexión de Costa Rica con la naturaleza. Puedes avistarlos en parques nacionales como Manuel Antonio y Corcovado, y en zonas como La Fortuna y Cahuita.  

**Escribe este archivo `"Perezoso.jsx"`**

{{% notice info %}}
### Un componente dentro de otro componente

En esta actividad vamos a usar dos componentes:

- Un componente pequeño: **Perezoso**
- Un componente grande: **Perezosos**

Esto significa que creamos un componente pequeñito (como un molde de galletas) y luego lo usamos muchas veces dentro del componente grande.
{{% /notice %}}

```jsx
// Componente pequeño
function Perezoso() {
  return <p>Soy un perezoso</p>;
}

// Componente grande
export default function Perezosos() {
  return (
    <Perezoso />
  );
}
```

---

{{% notice info %}}
### Props — información que recibe el componente

Los props son información que enviamos desde el componente grande hacia el componente pequeño.  
El componente Perezoso va a recibir:

- nombre
- onRescatar
- rescatado
{{% /notice %}}

```jsx
function Perezoso({ nombre, onRescatar, rescatado }) {
  return <p>{nombre}</p>;
}
```

Así se envían:

```jsx
<Perezoso
  nombre="Marcos"
  onRescatar={rescatar}
  rescatado={false}
/>
```
---

#### Dentro del componente **Perezosos** va este codigo

```jsx
<div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
      <p>
        {rescatado
          ? `✅ ${nombre} está a salvo!`
          : `🦥 ${nombre} necesita ayuda`}
      </p>

      {!rescatado && (
        <button onClick={() => onRescatar(nombre)}>Rescatar</button>
      )}
    </div>
```

---

{{% notice info %}}
#### 1. Contenedor principal con clases dinámicas

```jsx
<div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
```

- Siempre usa la clase perezoso-card que es del style.css
- Si el perezoso ya fue rescatado (```rescatado === true```), también agrega la clase ```rescatado```.
- Esto sirve para cambiar estilos según su estado.

Es como darle una pegatina especial cuando ya está salvado.
La clase **"rescatado"** es esa pegatina.

---

#### 2. Texto que cambia según el estado del perezoso

```jsx
<p>
  {rescatado
    ? `✅ ${nombre} está a salvo!`
    : `🦥 ${nombre} necesita ayuda`}
</p>

```

- Si rescatado es true, muestra un mensaje de que está a salvo.
- Si es false, muestra que necesita ayuda.
- **El ```? :``` es un “si está rescatado → muestra esto, si no → muestra lo otro”.**

Es como un semáforo:

Si está verde → ¡ya está salvo!

Si está amarillo → todavía necesita ayuda.

---

#### 3. Botón que aparece solo si NO está rescatado

```jsx
{!rescatado && (
  <button onClick={() => onRescatar(nombre)}>Rescatar</button>
)}

```

- !rescatado significa “NO está rescatado”.
- Si esto es cierto, se muestra el botón.
- Si ya está rescatado → el botón desaparece.
- El botón ejecuta ```onRescatar(nombre)``` cuando lo presionás.

Es como un botón de “¡ayúdalo!”.
Si ya está bien, el botón se esconde porque ya no lo necesitas.

{{% /notice %}}






---


{{% notice info %}}
### Haz una funcion llamada Perezosos

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Una constante llamada rescatados y setRescatados.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Otra constante llamada perezosos y agregale nombres de perezosos.</p>
{{% /notice %}}

---



**Constante para rescatar a los perezosos!**
```jsx
const rescatar = (nombre) => {
    setRescatados([...rescatados, nombre]);
  };
```

---

{{% notice info %}}
### Crear lista de componentes con un for

```jsx
let listaPerezosos = [];

for (let i = 0; i < perezosos.length; i++) {
  listaPerezosos.push(
    <Perezoso
      key={i}
      nombre={perezosos[i]}
      onRescatar={rescatar}
      rescatado={rescatados.includes(perezosos[i])}
    />
  );
}
```
{{% /notice %}}

#### Asi se muestra 

```jsx
return (
    <div className="perezosos-container">
      <h2>Rescate de los Perezosos</h2>
      <p className="instruccion">
        Haz clic en los perezosos para rescatarlos del bosque
      </p>

      <div className="lista-perezosos">{listaPerezosos}</div>

      {rescatados.length === perezosos.length && (
        <h3 className="mensaje-final">
          Has rescatado a todos los perezosos!
        </h3>
      )}
    </div>
  );
```

**NO OLVIDES IMPORTARLO EN EL APP.JSX**

![alt text height="200px" width="50%"](../media/Components5Perezoso.png "Perezoso")

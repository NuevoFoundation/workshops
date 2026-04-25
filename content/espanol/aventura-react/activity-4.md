---
title: "Actividad 4 - Volcan Arenal"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

¿Sabías que hay alrededor de 200 volcanes en Costa Rica?, de los cuales solo cinco están activos que son: el Poás, Irazú, Turrialba, Rincón de la Vieja y Arenal. El resto se encuentran inactivos o extintos. 

Bueno te vamos a hablar del Volcán Arenal. 

<img src="../media/Arenal.jpg" alt="Arenal" style="width:50%;);">

El Volcán Arenal es un estratovolcán inactivo y un ícono de Costa Rica, ubicado en la provincia de Alajuela, dentro del Parque Nacional Volcán Arenal. Es conocido por su forma cónica y está rodeado por selvas tropicales, aguas termales y una rica biodiversidad, que incluye una gran cantidad de especies de aves. Su última gran actividad eruptiva comenzó en 1968 y cesó en 2010.

**Escribe este archivo `"Volcan.jsx"`**


<h2 style="font-size:2rem; color:#007BFF;">Crea una constante de animales con un respectivo SetAnimales, escribe los que piensas que hay en Costa Rica!</h2>

---

#### **Vamonos a salvarlos porque parece que el Volcán Arenal presenta actividad!**

<img src="../media/volcan.png" alt="Volcan-Peligro" style="width:50%;);">

**Creamos constante para evacuarlos del lugar**
```jsx
const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };
```


{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">En Playas solo creábamos botones, pero en Volcán creamos una lista completa:</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Un "li" puede contener texto + un botón + una función</p>
{{% /notice %}}

```jsx
// Aquí hacemos una lista a mano usando un for
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} está en peligro{" "}
        <button onClick={() => evacuar(animales[i])}>Evacuar</button>
      </li>
    );
  }
```

{{% notice tip %}}
### Imagina lo siguiente
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Un helicóptero hace rondas para rescatar a los animales:</p>

```jsx
for (let i = 0; i < animales.length; i++)
```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 0 → Primera ronda: visita al animal 1</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 1 → Segunda ronda: visita al animal 2 </p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 2 → Segunda ronda: visita al animal 3 </p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 3 → Segunda ronda: visita al animal 4 </p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 4 → ¡STOP! Ya no hay más animales (porque animales.length = 4)</p>

```jsx
listaAnimales.push( ... )
```

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Es como cuando el piloto anota en su lista qué animal encontró y qué botón debe apretar para salvarlo. </p>
{{% /notice %}}

{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">En Playas usábamos:</p>

```jsx
<div className="botones">{botones}</div>

```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Pero en Volcan.jsx vemos esto: </p>

```jsx
<ul>{listaAnimales}</ul>

```
{{% /notice %}}

**Como se muestra**

```jsx
return (
    <div className="volcan">
      <h2>Volcán Arenal</h2>

      {animales.length > 0 ? (
        <ul>{listaAnimales}</ul>
      ) : (
        <p>Todos los animales están a salvo!</p>
      )}
    </div>
  );
```

**NO OLVIDES IMPORTARLO EN EL APP.JSX**

![alt text height="200px" width="50%"](../media/Components4Volcan.png "Volcan Arenal")


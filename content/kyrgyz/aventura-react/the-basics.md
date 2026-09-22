---
title: "PlayCode чөйрөсүн орнотуу"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

<p style="font-size:1.8rem; text-align:center; color:#333;">Төмөнкү шилтемени басып, Коста-Рика колдонмосун өзүңүз кураңыз:</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">React долбооруңузду түзүңүз!</a>

Төмөнкү баскычты басканыңарда сиз PlayCode баракчасына киресиз:

<img src="../media/UsarPlaygroud.png" alt="PlayCode старт экраны акысыз опцияны көрсөтүүдө" style="width:50%;">



**Start Free дегенди басыңыз**

<video controls width="800" height="400" style="display:block; margin:20px auto;">
  <source src="../media/Configuracion2.mp4" type="video/mp4">
  Сиздин браузер видео элементин колдобойт.
</video>

`"App.jsx"` файлында **бул кодду чаптаңыз!**

```jsx
import React from 'react';

export function App(props) {
  return (
      <div className="App">
       <h2>Салам дүйнө</h2>
      </div>
      );
}

console.log('Конфигурацияланууда')
``` 

`"index.jsx"` файлында **бул кодду чаптаңыз!**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.jsx'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<App />)

```

`"index.html"` файлында **бул кодду чаптаңыз!**

```jsx 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/style.css">
  </head>
  <body>
    <div id="root"></div>

    <script src="src/index.jsx"></script>
  </body>
</html>

```

**"style.css" деп аттуу файл түзүңүз**

<img src="../media/css.png" alt="PlayCode'до жаңы style.css файл түзүү" style="width:50%;">

Коста-Рика долбообузду түзүү үчүн керек болгон бардык элементтерди көрүүдөн мурда, биз маанилүү папканы орнотушубуз керек, тактап айтканда, аны түзүү керек.

**"src" деп аталган негизги папканын жанындагы 3 чекитти басыңыз**

<img src="../media/paso1-carpeta.png" alt="src папкасынын жанындагы үч чекитти басыңыз" style="width:70%;">

{{% notice info %}}
#### 'style.css' файлы src папкасынын ичинде болушу керек
{{% /notice %}}

**Андан соң төмөнкү кадамдарды аткарыңыз:**

`"New", "Directory"`

<img src="../media/paso2-carpeta.png" alt="New жана андан соң Directory тандап, жаңы папка түзүү" style="width:70%;">

**Эми папка түзүлдү, үч чекитти басып, атын өзгөртүңүз**:

<img src="../media/paso3-carpeta.png" alt="Жаңы папканын атын Components деп өзгөртүү" style="width:70%;">

**Бүттү! Components папкасы түзүлдү, биз дээрлик даярбыз!**

<img src="../media/paso4-carpeta.png" alt="src'тын ичинде түзүлгөн Components папкасы" style="width:70%;">

**Акырында, долбообузду курууга баштоо үчүн jsx файлдарын кошушубуз керек!**

Муну аткаруу үчүн, `"Components"` папкасынын жанындагы үч чекитти басыңыз.

**Маанилүү: `"JSX"` файл түрүн тандаңыз.**

<img src="../media/paso5-carpeta.png" alt="Components папкасынын ичинде жаңы JSX файлын кошуу" style="width:70%;">

Бул жаңы файлдын көрүнүшү төмөндөгүдөй болушу керек, анын аты: `"Tortugero.jsx"`

```jsx 
Tortugero.jsx
```

**Тортугеро аралы Борбордук Америкадагы Коста-Рика өлкөсүнө таандык арал. Ал Кариб деңизи менен ошол эле аталыштагы лагунанын ортосунда жайгашкан жана жалпы аянты 2,810 гектар деп бааланат.**


<img src="../media/paso6-carpeta.png" alt="Components папкасынын ичинде түзүлгөн Tortugero.jsx файлы" style="width:70%;">
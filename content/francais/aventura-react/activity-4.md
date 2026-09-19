```markdown
---
title: "Activité 4 - Volcan Arenal"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

Saviez-vous qu'il y a environ 200 volcans au Costa Rica ? Parmi eux, seulement cinq sont actifs : Poás, Irazú, Turrialba, Rincón de la Vieja et Arenal. Les autres sont inactifs ou éteints. 

Eh bien, nous allons vous parler du Volcan Arenal. 

<img src="../media/Arenal.jpg" alt="Volcan Arenal" style="width:50%;">
Le Volcan Arenal est un stratovolcan inactif et une icône du Costa Rica, situé dans la province d'Alajuela, au sein du Parc National du Volcan Arenal. Il est connu pour sa forme conique et est entouré de forêts tropicales, de sources chaudes et d'une biodiversité riche, comprenant un grand nombre d'espèces d'oiseaux. Sa dernière grande activité éruptive a commencé en 1968 et s'est arrêtée en 2010.

**Écrivez ce fichier `"Volcan.jsx"`** :

{{% notice info %}}
### Important à utiliser :

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Volcan() { }</p>

{{% /notice %}}

<h2 style="font-size:2rem; color:#007BFF;">Créez une constante d'animaux avec un SetAnimales correspondant, écrivez ceux qui, selon vous, vivent au Costa Rica !</h2>

```jsx
const [animales, setAnimales] = useState([
    "",
    "",
    "",
    "",
    ""
  ]);
```

---

#### **Allons les sauver car il semble que le Volcan Arenal montre des signes d'activité !**

<img src="../media/Volcan.png" alt="Danger du volcan" style="width:50%;">
**Nous créons une constante pour les évacuer de la zone**
```jsx
const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };
```


{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Dans Plages, nous avons seulement créé des boutons, mais dans Volcan, nous créons une liste complète :</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Un "li" peut contenir du texte + un bouton + une fonction.</p>
{{% /notice %}}

```jsx
/* Ici nous faisons une liste à la main en utilisant une boucle for */
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} est en danger{" "}
        <button onClick={() => evacuar(animales[i])}>Évacuer</button>
      </li>
    );
  }
```

{{% notice tip %}}
### Imaginez ce qui suit
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Un hélicoptère fait des rondes pour sauver les animaux :</p>

```jsx
for (let i = 0; i < animales.length; i++)
```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 0 → Première ronde : visite l'animal 1.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 1 → Deuxième ronde : visite l'animal 2.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 2 → Troisième ronde : visite l'animal 3.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 3 → Quatrième ronde : visite l'animal 4.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 4 → STOP ! Il n'y a plus d'animaux (parce que animales.length = 4).</p>

```jsx
listaAnimales.push( ... )
```

<p style="font-size:1.6rem; color:#444; line-height:1.8;">C'est comme lorsque le pilote note sur sa liste quel animal a été trouvé et quel bouton appuyer pour le sauver. </p>
{{% /notice %}}

{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Dans Plages, nous avons utilisé :</p>

```jsx
<div className="botones">{botones}</div>

```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Mais dans Volcan.jsx nous voyons ceci : </p>

```jsx
<ul>{listaAnimales}</ul>

```
{{% /notice %}}

**Comment cela est affiché** :

```jsx
return (
    <div className="volcan">
      <h2>Volcan Arenal</h2>

      {animales.length > 0 ? (
        <ul>{listaAnimales}</ul>
      ) : (
        <p>Tous les animaux sont en sécurité !</p>
      )}
    </div>
  );
```

**N'OUBLIEZ PAS DE L'IMPORTER DANS APP.JSX**

``` jsx
import Volcan from "./Components/Volcan.jsx"
``` 

<img src="../media/Components4Volcan.png" alt="Composant Volcan rendu dans l'application" style="width:50%;">
```
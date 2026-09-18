```markdown
---
title: "Activité 3 - Plantation de café"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

Savez-vous à quel point le café est important au Costa Rica ?

Le café costaricien est reconnu dans le monde entier pour sa haute qualité, grâce à la combinaison de sols volcaniques fertiles, d’un climat idéal et de la culture exclusive des grains d'Arabica. Le pays interdit la culture de la variété Robusta afin de garantir un produit doux et équilibré. Le café a historiquement été vital pour l'économie et la culture du pays, et il est cultivé dans diverses régions, notamment Tarrazú, qui est l'une des plus célèbres.

Alors, apprenons le processus du café et pourquoi ne pas en savoir plus sur React avec **Sharky** !

**Écrivez ce fichier `"FincaCafe.jsx"`** :

{{% notice info %}}
### Important à utiliser :

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function FincaCafe() { }</p>

{{% /notice %}}

<img src="../media/Cafe.png" alt="Café" style="width:50%;">

Pour faire du café, nous devons d'abord savoir qu'il s'agit d'un processus important qui contient plusieurs étapes, que nous verrons ci-dessous.

{{% notice info %}}
### Nous allons apprendre différentes choses
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Nous utiliserons un nombre pour savoir à quelle étape de l'histoire nous sommes.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. Nous changeons ce que nous voyons en fonction de ce nombre.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. Il ne s'agit pas de compter, mais de naviguer entre les étapes.</p>

{{% /notice %}}

```jsx
const etapas = [
  "Planter le café",
  "Récolter les grains",
  "Sécher au soleil",
  "Faire griller",
  "Déguster"
];

const [indice, setIndice] = useState(0);

```

**Ici, nous créons une constante appelée `"ETAPAS"`, mais nous avons également une autre constante appelée `"INDICE"`.**

{{% notice info %}}
### Cela signifie que :
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Le chiffre 0 correspond à l'étape 1.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Le chiffre 1 correspond à l'étape 2.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Le chiffre 2 correspond à l'étape 3.</p>

{{% /notice %}}

À présent, avec cela, nous pouvons créer une constante appelée `"siguiente"` afin de naviguer entre les étapes.

```jsx
const siguiente = () => {
    if (indice < etapas.length - 1) {
      setIndice(indice + 1);
    }
  };
```
return (
    <div className="finca-container">
      <h2>La Finca de l’Abuelo</h2>
      <p className="etapa">{etapas[indice]}</p>

      {indice < etapas.length - 1 ? (
        <button className="btn-siguiente" onClick={siguiente}>
          Étape suivante
        </button>
      ) : (
        // VOUS ÊTES ARRIVÉ À LA DERNIÈRE ÉTAPE
        <h3 className="mensaje-final">
          Vous avez complété tout le processus de fabrication du café !
        </h3>
      )}
    </div>
  );
```

{{% notice tip %}}
### Imaginez que vous jouez à un jeu avec 5 niveaux
<p style="font-size:1.6rem; color:#444; line-height:1.8;">etapas.length = Combien de niveaux contient le jeu (exemple : 5 niveaux).</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">indice = Sur quel niveau vous êtes actuellement (cela peut être le niveau 1, 2, 3...).</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Le chiffre 2 correspond à l'étape 3.</p>

{{% /notice %}}

**N'OUBLIEZ PAS DE L'IMPORTER DANS APP.JSX**

``` jsx
import FincaCafe from "./Components/FincaCafe.jsx"
``` 

<img src="../media/Components3FincaCafe.png" alt="Composant FincaCafe rendu dans l'application" style="width:50%;">
```
```yaml
---
title: "Activité 2 - Nettoyage des plages"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

<img src="../media/Playa.png" alt="Nettoyage de plage" style="width:50%;">

Génial ! Vous avez réussi à sauver les tortues. Maintenant, pour nettoyer les plages du Costa Rica, nous allons apprendre à utiliser des constantes avec des tableaux, des boucles for et des variables let.

**Écrivez ce fichier `"Playa.jsx"`** :

{{% notice info %}}
### Important à utiliser :

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Playa() { }</p>

{{% /notice %}}
Tout d'abord, nous allons créer un tableau dans lequel vous pouvez stocker un certain nombre d'éléments. Regardez cet exemple !

Voici à quoi ressemblent les tableaux dans React.

```jsx
const [Dinero, setDinero] = useState([
    "Colones",
    "Dolares",
    "Euros",
    "Pesos"
  ]);
```

Créez une constante appelée **desechos et setDesechos** pour cette activité. À l'intérieur de cette constante, mettez des éléments qui sont des déchets sur les plages.

Nous devons créer une fonction pour pouvoir nettoyer la plage des déchets dans le tableau.

```jsx
const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));
``` 

Cette fonction supprime un déchet de la liste lorsque vous cliquez dessus. Voyons comment cela fonctionne :

{{% notice tip %}}
### Que fait cette fonction ?
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));</code></p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Lorsque vous cliquez dessus, elle enlève ce qui se trouve dans le tableau.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Le filtre vérifie un par un, crée un nouveau tableau, puis sauvegarde la liste sans ce déchet.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Exemple : si vous supprimez le plastique, il vous reste le verre, le métal et le papier.</p>

{{% /notice %}}

Ensuite, nous devons créer une variable appelée `"let"`. Contrairement à const, let peut être modifiée.

Nous la nommons `"botones = [];"`

```jsx
let botones = [];

  for (let i = 0; i < desechos.length; i++) {
    botones.push(
      <button key={i} onClick={() => limpiar(desechos[i])}>
        Recolecter {desechos[i]}
      </button>
    );
  }

```

Cela nous évite d'écrire 4 boutons à la main.

{{% notice info %}}
### La boucle fait ceci :
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Commence par le premier déchet.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. Crée un bouton pour ce déchet.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. Passe au suivant.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">4. Répète jusqu'à ce que ce soit terminé.</p>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Le bouton possède l'onClick qui est utilisé pour nettoyer</p>

**Si la liste change, React redessine uniquement les boutons restants.**

{{% /notice %}}
return (
  <div className="playas-container">
      <h2>Nettoyage des Plages</h2>
      <p className="instruccion">
        Cliquez sur les déchets pour les ramasser et aider à protéger les
        espèces marines
      </p>

      <div className="botones">{botones}</div>

      {desechos.length === 0 && (
        <p className="mensaje-final">Plage propre !</p>
      )}
    </div>
);
```

**N'OUBLIEZ PAS DE L'IMPORTER DANS APP.JSX**
```jsx
import Playa from "./Components/Playa.jsx"
``` 

<img src="../media/Components2Playa.png" alt="Composant Playa rendu dans l'application" style="width:50%;">
```
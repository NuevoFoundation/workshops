```markdown
---
title: "Activité 5 - Sauver les paresseux"
date: 2019-07-25T13:24:17-07:00
weight: 8
draft: false
---

<img src="../media/Perezoso.png" alt="Paresseux, illustration téléchargée depuis freepik" width="25%" />

Nous sommes presque arrivés à la fin de notre voyage à travers le Costa Rica ! Pour conclure, apprenons un peu sur les paresseux.  
Les paresseux sont une icône du Costa Rica, et il y a deux espèces : le paresseux à deux doigts (*Choleopus hoffmanni*) et le paresseux à trois doigts (*Bradypus variegatus*). Ils sont connus pour leur lenteur, leur capacité à se camoufler, et pour être des symboles nationaux représentant la connexion du Costa Rica avec la nature. Vous pouvez les apercevoir dans des parcs nationaux comme Manuel Antonio et Corcovado, et dans des régions comme La Fortuna et Cahuita.  

**Écris ce fichier `"Perezoso.jsx"`** :

{{% notice info %}}
### Important à utiliser :

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>

### Un composant dans un autre composant

Dans cette activité, nous allons utiliser deux composants :

- Un petit composant : **Perezoso**
- Un grand composant : **Perezosos**

Cela signifie que nous créons un petit composant (comme un emporte-pièce) et que nous l’utilisons plusieurs fois à l’intérieur du grand composant.
{{% /notice %}}

```jsx
// Petit composant
function Perezoso() {
  return <p>Je suis un paresseux</p>;
}

// Grand composant
export default function Perezosos() {
  return (
    <Perezoso />
  );
}
```

---

{{% notice info %}}
### Props, informations que le composant reçoit

Les props sont des informations que nous envoyons du grand composant vers le petit composant.  
Le composant Perezoso va recevoir :

- nom
- onRescatar
- sauvé
{{% /notice %}}

```jsx
function Perezoso({ nom, onRescatar, sauvé }) {
  return <p>{nom}</p>;
}
```

Voici comment elles sont envoyées :

```jsx
<Perezoso
  nom="Marcos"
  onRescatar={rescatar}
  sauvé={false}
/>
```
---

#### Ce code va à l'intérieur du composant **Perezoso**

```jsx
<div className={`perezoso-card ${sauvé ? "sauvé" : ""}`}>
      <p>
        {sauvé
          ? `${nom} est en sécurité !`
          : `${nom} a besoin d'aide`}
      </p>

      {!sauvé && (
        <button onClick={() => onRescatar(nom)}>Sauver</button>
      )}
    </div>
```

---

{{% notice info %}}
#### 1. Conteneur principal avec des classes dynamiques

```jsx
<div className={`perezoso-card ${sauvé ? "sauvé" : ""}`}>
```

- Il utilise toujours la classe `perezoso-card` depuis style.css.
- Si le paresseux a déjà été sauvé (```sauvé === true```), il ajoute également la classe ```sauvé```.
- Cela est utilisé pour changer les styles en fonction de son état.

C'est comme lui donner un autocollant spécial lorsqu'il a été sauvé.
La classe **"sauvé"** est cet autocollant.

---

#### 2. Texte qui change en fonction de l'état du paresseux

```jsx
<p>
  {sauvé
      ? `${nom} est en sécurité !`
      : `${nom} a besoin d'aide`}
</p>

```

- Si sauvé est vrai, il affiche un message indiquant qu’il est en sécurité.
- S’il est faux, il indique qu’il a besoin d’aide.
- **Le ```? :``` est une manière d’écrire : "s’il est sauvé → montre ceci, sinon → montre cela".**

C’est comme un feu de circulation :

Si c’est vert → il est déjà sauvé !

Si c’est jaune → il a encore besoin d’aide.

---

#### 3. Bouton qui apparaît uniquement s'il n'est PAS sauvé

```jsx
{!sauvé && (
  <button onClick={() => onRescatar(nom)}>Sauver</button>
)}

```

- `!sauvé` signifie "PAS sauvé".
- Si ceci est vrai, le bouton est affiché.
- S’il est déjà sauvé → le bouton disparaît.
- Le bouton exécute ```onRescatar(nom)``` lorsque vous cliquez dessus.

C’est comme un bouton "aide-le !".
S’il est déjà en sécurité, le bouton disparaît car il n’est plus nécessaire.

{{% /notice %}}

---


{{% notice info %}}
### Crée une fonction appelée Perezosos

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Une constante appelée `sauvés` et `setSauvés`.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Une autre constante appelée `perezosos`, et ajoute des noms de paresseux à l’intérieur.</p>
{{% /notice %}}

---

**Constante pour sauver les paresseux !**
const rescatar = (nom) => {
    setSauvés([...sauvés, nom]);
  };
```

---

{{% notice info %}}
### Crée une liste de composants avec une boucle for

```jsx
let listePerezosos = [];

for (let i = 0; i < perezosos.length; i++) {
  listePerezosos.push(
    <Perezoso
      key={i}
      nom={perezosos[i]}
      onRescatar={rescatar}
      sauvé={sauvés.includes(perezosos[i])}
    />
  );
}
```
{{% /notice %}}

#### Comment il est affiché

```jsx
return (
    <div className="perezosos-container">
      <h2>Sauvetage des paresseux</h2>
      <p className="instruccion">
        Clique sur les paresseux pour les sauver de la forêt
      </p>

      <div className="liste-perezosos">{listePerezosos}</div>

      {sauvés.length === perezosos.length && (
        <h3 className="mensaje-final">
          Tu as sauvé tous les paresseux !
        </h3>
      )}
    </div>
  );
```

**N’OUBLIE PAS DE L’IMPORTER DANS APP.JSX**

``` jsx
import Perezosos from "./Components
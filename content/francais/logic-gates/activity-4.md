```markdown
---
title: "Activité 6 - La mission du Petit Singe (Combinaison de portes)"
date: 2025-10-20T01:55:00-05:00
weight: 7
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/monito.jpg" alt="Nuvi déguisé en petit singe" width="20%" />

## Introduction

Du haut d’un arbre, le **Petit Singe (Monito)** vous salue avec enthousiasme :

> "Vous avez fait beaucoup de chemin ! Vous connaissez déjà **ET**, **OU** et **NON**.  
> Il est maintenant temps de **les combiner** pour restaurer l’énergie de la **Sphère de la Forêt**."

Dans cette activité, vous allez construire un circuit utilisant **toutes** les portes pour résoudre un défi.

---

<img src="../media/pattern.webp" alt="Motif décoratif pour l'atelier logique" width="100%" />

## Objectif

Construisez et vérifiez le circuit logique :

- La **Sphère** s’allume si :
  - **B** est activé, **ou**
  - **A** est activé **et** **C** est désactivé.

Ce circuit utilise **NON**, **ET** et **OU**.

---

## Composants nécessaires

- 3 **Entrées** : A, B, C  
- 1 **Porte NON**  
- 1 **Porte ET**  
- 1 **Porte OU**  
- 1 **Sortie**

<img src="../media/actividad_4.png" alt="Exemple visuel du circuit combiné avec portes ET, OU, NON, trois entrées et une sortie" width="20%" class="lg-img"/>

---

<img src="../media/paisaje_bosque.webp" alt="Paysage de la forêt magique" width="100%" />

## Instructions du simulateur

### 1. Placez les composants
1. Assurez-vous d’être en mode **Édition**.
2. Dans la barre latérale gauche, sélectionnez et placez :
  - Placez **A**, **B**, **C** (entrées).  
  - Placez **NON**, **ET**, **OU**.  
  - Placez une **Sortie** à droite.

### 2. Connectez les composants
1. Connectez **C ➔ NON** (cela crée **NON C**).  
2. Connectez **A** et **NON C** à la porte **ET** (cela crée **A ET NON C**).  
3. Connectez **(A ET NON C)** et **B** à la porte **OU**.  
4. Connectez la sortie de **OU ➔ Sortie**.

---

## Tests guidés

Essayez ces combinaisons et vérifiez la **Sortie** :

1. **A = 1, B = 0, C = 0** ➔ `NON C = 1` ➔ `A ET NON C = 1` ➔ `Sortie = 1`  
2. **A = 1, B = 0, C = 1** ➔ `NON C = 0` ➔ `A ET NON C = 0` ➔ `Sortie = 0` 
3. **A = 0, B = 1, C = 1** ➔ `B = 1` ➔ `Sortie = 1`
4. **A = 0, B = 0, C = 0** ➔ les deux chemins donnent `0` ➔ `Sortie = 0`

Si les quatre résultats correspondent, la Sphère s’allume correctement !

---

## Table de vérité

<details class="lg-details">
<summary class="lg-summary">
Voir la table de vérité complète
</summary>

<div class="lg-div">

| A | B | C | NON C | A ET NON C | Sortie = (A ET NON C) OU B  |
|---|---|---|-------|-------------|-----------------------------|
| 0 | 0 | 0 |   1   |      0      |              0              |
| 0 | 0 | 1 |   0   |      0      |              0              |
| 0 | 1 | 0 |   1   |      0      |              1              |
| 0 | 1 | 1 |   0   |      0      |              1              |
| 1 | 0 | 0 |   1   |      1      |              1              |
| 1 | 0 | 1 |   0   |      0      |              0              |
| 1 | 1 | 0 |   1   |      1      |              1              |
| 1 | 1 | 1 |   0   |      0      |              1              |

</div>
</details>

---

## Simulateur

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulateur de logique" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Erreurs courantes et comment les résoudre

- **La sortie est toujours égale à 0 :** vérifiez que la porte **OU** reçoit **deux signaux** : `B` **et** `A ET NON C`.  

---

## Qu’avez-vous appris ?

- Les portes peuvent être combinées pour créer des décisions plus complexes qu’une seule porte ne peut offrir.
- NON vous permet d’inverser un signal ; ET permet de combiner des conditions simultanées ; OU permet de joindre des chemins alternatifs.
- La sortie finale dépend de la façon dont les portes sont connectées et de l’ordre dans lequel les signaux sont traités.

---

## À suivre

Dans la prochaine mission, vous rencontrerez à nouveau les personnages de la forêt pour résoudre des défis plus grands en utilisant les mêmes trois portes.
```
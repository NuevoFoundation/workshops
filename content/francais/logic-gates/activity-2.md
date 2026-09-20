```markdown
---
title: "Activité 2 - La montagne du paresseux (OU)"
date: 2025-10-20T01:30:00-05:00
weight: 3
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/perezoso.webp" alt="Nuvi déguisé en paresseux" width="10%" />

## Introduction

Après avoir laissé derrière la porte du toucan, le sentier vous mène à une montagne paisible.  
Sur une branche, un paresseux bâille et dit d'une voix calme :

> "Pas besoin de se précipiter... Pour arriver au sommet, vous pouvez emprunter le sentier **A** ou le sentier **B**.  
> Si l'un des deux est ouvert, vous y arriverez. Et si les deux sont ouverts, vous y arriverez aussi ! Ici, nous utilisons la logique **OU**."

Votre mission est de vérifier ce comportement dans le simulateur et d'illuminer le chemin vers le sommet.

---

<img src="../media/pattern.webp" alt="Motif décoratif pour l'atelier de logique" width="100%" />

## Qu'est-ce qu'une porte OU ?

- Elle a **deux entrées** et **une sortie**.  
- La sortie s'active (`1`) **si au moins une des entrées est activée (`1`)**.  
- Elle reste désactivée (`0`) uniquement lorsque **les deux** entrées sont désactivées (`0`).

<details class="lg-details">
<summary class="lg-summary">
Voir la table de vérité complète
</summary>

<div class="lg-div">

| Entrée A | Entrée B | Sortie OU |
|----------|----------|-----------|
| 0        | 0        | 0         |
| 0        | 1        | 1         |
| 1        | 0        | 1         |
| 1        | 1        | 1         |

</div>
</details>

---

<img src="../media/paisaje_camino.webp" alt="Paysage de la montagne et du sentier" width="100%" />

## Instructions du simulateur

### 1. Placer les composants
1. Assurez-vous d'être en mode **Édition**.
2. Dans la barre latérale gauche, sélectionnez et placez :
   - **Entrée** ➔ placez **deux** entrées (A et B).
   - **Porte OU** ➔ placez une porte OU entre les entrées et la sortie.
   - **Sortie** ➔ placez une sortie à droite de la porte.

<img src="../media/actividad_2.png" alt="Exemple visuel du circuit OU avec deux entrées et une sortie" width="20%" class="lg-img"/>

### 2. Connecter les composants
1. Connectez la **sortie** de **l'entrée A** à l'une des **entrées** de la **porte OU**.  
2. Connectez la **sortie** de **l'entrée B** à **l'autre entrée** de la **porte OU**.  
3. Connectez la **sortie** de la **porte OU** à la **Sortie**.

### 3. Tester le circuit
- Cliquez sur chaque **Entrée** pour alterner entre `0` ↔ `1`.  
- Essayez toutes les quatre combinaisons (00, 01, 10, 11).  
- **Objectif / Condition de victoire :** la sortie doit être `1` si **A = 1** **ou** **B = 1** (ou les deux).  

> "Vous voyez ? Avec seulement un chemin ouvert, vous pouvez déjà atteindre le sommet."

---

## Conseils rapides

- Si la sortie reste à `0` même avec A = 1 ou B = 1, vérifiez que les deux entrées sont bien connectées à la porte OU.  
- Assurez-vous d'avoir utilisé une **porte OU** et non une **porte ET** par erreur.

---

## Simulateur

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulateur de circuit logique" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Qu'avez-vous appris ?

- OU représente **des options** : un seul chemin suffit pour activer la sortie.  
- La seule façon que la sortie soit égale à `0` est si **A = 0** et **B = 0** en même temps.

---

## À suivre

Dans la prochaine activité, vous visiterez l'étang des réflexions avec la **grenouille** et découvrirez comment fonctionne la porte **NON**.
```
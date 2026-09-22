---
title: "Activité 7 - Le pont de la grenouille (Valeurs différentes avec AND/OR/NOT)"
date: 2025-10-20T02:40:00-05:00
weight: 8
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/ranita.jpg" alt="Nuvi déguisée en grenouille" width="15%" />

## Introduction

La **Grenouille** garde un pont avec une règle précise :

> "Seuls ceux portant **exactement une** torche allumée peuvent traverser.  
> Si vous n'en portez aucune ou les deux, le pont se ferme."

---

<img src="../media/pattern.webp" alt="Motif décoratif pour l'atelier de logique" width="100%" />

## Objectif logique

Construisez une sortie qui vaut 1 lorsque A et B sont **différents**.  
Elle est construite en utilisant **seulement** AND, OR et NOT :

<details class="lg-details">
<summary class="lg-summary">
Voir la table de vérité complète
</summary>

<div class="lg-div">

| A | B | A OR B | A AND B | NOT(A AND B)  | Sortie |
|---|---|--------|---------|---------------|--------|
| 0 | 0 |   0    |    0    |       1       |   0    |
| 0 | 1 |   1    |    0    |       1       |   1    |
| 1 | 0 |   1    |    0    |       1       |   1    |
| 1 | 1 |   1    |    1    |       0       |   0    |

</div>
</details>

---

<img src="../media/paisaje_lago.webp" alt="Paysage du lac dans la forêt" width="100%" />

## Instructions du simulateur

### 1. Placez
- **Entrées** : A, B  
- **Porte OR**  
- **Porte AND** (x2)  
- **Porte NOT**  
- **Sortie**

<img src="../media/actividad_7.png" alt="Exemple visuel du circuit XOR utilisant AND, OR et NOT avec deux entrées et une sortie" width="20%" class="lg-img"/>

### 2. Connectez
1. A et B ➔ **OR** : `OR_AB`  
2. A et B ➔ **AND1** : `AND_AB`  
3. `AND_AB` ➔ **NOT** : `NOT_AND_AB`  
4. `OR_AB` et `NOT_AND_AB` ➔ **AND2**  
5. **AND2** ➔ **Sortie**

### 3. Testez
- Vérifiez 00, 01, 10, 11.  
- La sortie doit être 1 seulement pour 01 et 10.

**Condition de victoire** : sortie = 1 quand A ≠ B.

---

## Conseils rapides

- Si vous obtenez 1 pour 11, vous avez oublié la négation de `AND_AB`.  
- Séparez visuellement les branches `OR_AB` et `NOT_AND_AB` pour éviter les fils croisés.

---

## Simulateur

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulateur de circuits logiques" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Qu'avez-vous appris ?

- Comment construire la condition "**ils sont différents**" en utilisant **AND/OR/NOT**.
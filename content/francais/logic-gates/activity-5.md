---
title: "Activité 4 - La porte inversée du Toucan (ET + NON)"
date: 2025-10-20T02:10:00-05:00
weight: 5
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/tucan.png" alt="Nuvi déguisé en toucan" width="15%" />

## Introduction

Devant la porte de pierre, le **Toucan** vous fait un clin d'œil :

> "Vous vous souvenez de ma porte **ET** ? Aujourd'hui, nous allons l’**inverser** grâce à **NON**.  
> La porte s’ouvrira **sauf si** les deux torches sont allumées."

---

<img src="../media/pattern.webp" alt="Motif décoratif pour l'atelier des portes logiques" width="100%" />

## Objectif logique

Construisez une sortie vraie **sauf** lorsque A = 1 **et** B = 1 :

<details class="lg-details">
<summary class="lg-summary">
Voir la table de vérité complète
</summary>

<div class="lg-div">

| A | B | A ET B | Sortie = NON(A ET B)    |
|---|---|---------|------------------------|
| 0 | 0 |    0    |           1            |
| 0 | 1 |    0    |           1            |
| 1 | 0 |    0    |           1            |
| 1 | 1 |    1    |           0            |

</div>
</details>

---

<img src="../media/paisaje_puerta.webp" alt="Paysage de la porte de pierre dans la forêt" width="100%" />

## Instructions du simulateur

### 1. Placez les composants
1. Assurez-vous d’être en mode **édition**.
- **Entrées** : A, B  
- **Porte ET**  
- **Porte NON**  
- **Sortie**

<img src="../media/actividad_5.png" alt="Exemple visuel du circuit ET suivi de NON avec deux entrées et une sortie" width="20%" class="lg-img"/>

### 2. Connectez
1. A et B ➔ **ET**  
2. Sortie de **ET** ➔ **NON**  
3. Sortie de **NON** ➔ **Sortie**

### 3. Testez
- Essayez les combinaisons 00, 01, 10, 11.  
- La porte s’ouvre dans tous les cas **sauf** 11.

**Condition de victoire :** la sortie est 0 uniquement lorsque A = 1 et B = 1.

---

## Conseils rapides

- Si cela donne toujours 0, vous avez probablement connecté la **Sortie** à la **porte ET** au lieu de la **porte NON**.  

---

## Simulateur

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulateur de portes logiques" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Qu'avez-vous appris ?

- Comment **inverser** une condition composée : d’abord **ET**, puis **NON**.
---
title: "Activité 1 - La porte du Toucan (ET)"
date: 2025-10-20T01:15:00-05:00
weight: 2
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/tucan.png" alt="Illustration de Nuvi déguisé en toucan" width="15%" />

## Introduction

En vous promenant dans la forêt, vous arrivez devant une grande porte en bois.  
Un toucan apparaît à côté et dit :

> "Cette porte ne s'ouvre que si les deux torches sont allumées en même temps.  
> Si une seule est allumée, la porte ne bougera pas.  
> Ici, nous utilisons la logique ET."

Votre mission est de tester ce comportement à l'aide du simulateur de portes logiques.

---

<img src="../media/pattern.webp" alt="Motif décoratif pour l'atelier de logique" width="100%" />

## Qu'est-ce que la porte ET ?

- Elle possède **deux entrées** et **une sortie**.  
- La sortie s'allume (`1`) **uniquement si les deux entrées sont allumées (`1`)**.  
- Si une ou deux des entrées sont éteintes (`0`), la sortie reste éteinte (`0`).

<details class="lg-details">
<summary class="lg-summary">
Voir la table de vérité complète
</summary>

<div class="lg-div">

| Entrée A | Entrée B | Sortie ET |
|----------|----------|-----------|
| 0        | 0        | 0         |
| 0        | 1        | 0         |
| 1        | 0        | 0         |
| 1        | 1        | 1         |

</div>
</details>

---

<img src="../media/paisaje_puerta.webp" alt="Paysage de la porte dans la forêt" width="100%" />

## Instructions pour le simulateur

### 1. Placez les composants
1. Assurez-vous d'être en mode **Édition**.
2. Depuis la barre latérale gauche, cliquez sur :
   - **Entrée** ➔ placez **deux** entrées (A et B).
   - **Porte ET** ➔ placez une porte ET.
   - **Sortie** ➔ placez une sortie à droite de la porte.

<img src="../media/actividad_1.png" alt="Exemple visuel du circuit ET avec deux entrées et une sortie" width="20%" class="lg-img"/>

### 2. Connectez les composants
1. Cliquez sur le cercle de sortie de **l'entrée A**, puis cliquez sur une des entrées de la porte ET.  
2. Répétez la même opération avec **l'entrée B**.  
3. Depuis la sortie de la porte ET, connectez au cercle de la **Sortie**.

### 3. Testez le circuit
- Cliquez sur chaque entrée pour basculer entre `0` et `1`.  
- Essayez toutes les combinaisons possibles.  
- La porte du Toucan ne "s'ouvre" (sortie = 1) que lorsque l'Entrée A est 1 et que l'Entrée B est 1 (A=1 ET B=1).

---

## Simulateur

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulateur de porte logique" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Qu'avez-vous appris ?

- ET représente des conditions qui doivent être remplies ensemble : la sortie ne s'active que lorsque A = 1 et B = 1 en même temps.
- Si une des entrées est à 0, la sortie sera également à 0, sans exception.

---

## À suivre

Dans la prochaine activité, vous emprunterez le sentier jusqu'à rencontrer le Paresseux et découvrir comment fonctionne la porte OU.
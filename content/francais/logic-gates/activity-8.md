---
title: "Activité 8 - La chambre aux miroirs du Petit Singe (Égalité avec AND/OR/NOT)"
date: 2025-10-20T02:55:00-05:00
weight: 9
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/monito.jpg" alt="Nuvi déguisé en petit singe" width="20%" />

## Introduction

Dans la salle des reflets, le **Petit Singe** explique :

> "Pour activer la chambre, les signaux doivent **correspondre**.  
> Si A et B sont égaux, la porte s'ouvre."

---

<img src="../media/pattern.webp" alt="Motif décoratif pour l'atelier logique" width="100%" />

## Objectif logique

Construisez une sortie qui vaut 1 lorsque **A = B**, en utilisant **AND/OR/NOT** :

<details class="lg-details">
<summary class="lg-summary">
Voir la table de vérité complète
</summary>

<div class="lg-div">

| A | B | NON A | NON B | A ET B | (NON A ET NON B)   | Sortie |
|---|---|--------|-------|---------|--------------------|--------|
| 0 | 0 |    1   |   1   |    0    |         1          |    1   |
| 0 | 1 |    1   |   0   |    0    |         0          |    0   |
| 1 | 0 |    0   |   1   |    0    |         0          |    0   |
| 1 | 1 |    0   |   0   |    1    |         0          |    1   |

</div>
</details>

---

<img src="../media/paisaje_bosque.webp" alt="Paysage de la forêt magique" width="100%" />

## Instructions pour le simulateur

### 1. Placez
- **Entrées** : A, B  
- **Porte NON** (x2)  
- **Porte ET** (x2)  
- **Porte OU**  
- **Sortie**

<img src="../media/actividad_8.png" alt="Exemple visuel du circuit XNOR utilisant AND, OR et NOT avec deux entrées et une sortie" width="20%" class="lg-img"/>

### 2. Connectez
1. A ➔ **NON** : `NON_A`  
2. B ➔ **NON** : `NON_B`  
3. A et B ➔ **ET1** (branche "les deux valent 1")  
4. `NON_A` et `NON_B` ➔ **ET2** (branche "les deux valent 0")  
5. **ET1** et **ET2** ➔ **OU**  
6. **OU** ➔ **Sortie**

### 3. Testez
- Essayez 00, 01, 10, 11.  
- La sortie devrait être 1 pour 00 et 11.

**Condition de victoire :** sortie = 1 si et seulement si A et B correspondent.

---

## Conseils rapides

- Si la sortie est 1 pour 01 ou 10, vérifiez les câbles entre `NON_A`/`NON_B` et **ET₂**.  
- Gardez les deux branches symétriques pour que le circuit soit plus facile à lire.

---

## Simulateur

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulateur de portes logiques" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Qu'avez-vous appris ?

- Comment construire la condition "**ils sont égaux**" en utilisant uniquement **AND/OR/NOT**.  
- Comment utiliser des **branches parallèles** pour couvrir des cas complémentaires.
```markdown
---
title: "Activité 5 - Le sommet silencieux du paresseux (OR + NOT)"
date: 2025-10-20T02:25:00-05:00
weight: 6
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/perezoso.webp" alt="Nuvi déguisé en paresseux" width="10%" />

## Introduction

Le **Paresseux** vous attend sur la montagne :

> "Je veux un silence total : la sortie ne s'allume que lorsqu'**aucun** sentier n'a de lumière.  
> Utilisons **OR** pour détecter s'il y a de la lumière, et **NOT** pour inverser."

---

<img src="../media/pattern.webp" alt="Motif décoratif pour l'atelier de logique" width="100%" />

## Objectif logique

La sortie doit être 1 uniquement si **A = 0 et B = 0** :

<details class="lg-details">
<summary class="lg-summary">
Voir la table de vérité complète
</summary>

<div class="lg-div">

| A | B | A OR B | Sortie = NOT(A OR B)  |
|---|---|--------|-----------------------|
| 0 | 0 |   0    |          1            |
| 0 | 1 |   1    |          0            |
| 1 | 0 |   1    |          0            |
| 1 | 1 |   1    |          0            |

</div>
</details>

---

<img src="../media/paisaje_camino.webp" alt="Paysage du sommet de la montagne" width="100%" />

## Instructions du simulateur

### 1. Placer
- **Entrées** : A, B  
- **Porte OR**  
- **Porte NOT**  
- **Sortie**

<img src="../media/actividad_6.png" alt="Exemple visuel du circuit OR suivi de NOT avec deux entrées et une sortie" width="20%" class="lg-img"/>

### 2. Connecter
1. A et B ➔ **OR**  
2. Sortie de **OR** ➔ **NOT**  
3. Sortie de **NOT** ➔ **Sortie**

### 3. Tester
- Essayez 00, 01, 10, 11.  
- Seul le 00 doit produire une sortie de 1.

**Condition de victoire :** s'il y a **la moindre** lumière dans A ou B, la sortie est 0.

---

## Conseils rapides

- Si la sortie reste toujours sur 1, il se peut que le câble entre **OR** et **NOT** manque.  
- Donnez un nom au signal intermédiaire `OR_AB`.

---

## Simulateur

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulateur de portes logiques" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Qu'avez-vous appris ?

- Comment exprimer "**aucune** des entrées n'est active" avec **OR** suivi de **NOT**.
```
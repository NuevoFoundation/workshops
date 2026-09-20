---
title: "Activité 3 - Le défi de la grenouille (NON)"
date: 2025-10-20T01:40:00-05:00
weight: 4
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/ranita.jpg" alt="Nuvi déguisé en grenouille" width="15%" />

## Introduction

En suivant le sentier, vous arrivez à un étang scintillant.  
Une **grenouille verte** saute sur une feuille et vous salue :

> "Bienvenue à l'**étang de réflexion** !  
> Ici, tout fonctionne **à l'envers** : si quelque chose est allumé, il s'éteint ;  
> si c'est éteint, il s'allume. C'est la logique **NON**."

Votre mission est de construire un circuit qui **inverse** le signal d'entrée.

---

<img src="../media/pattern.webp" alt="Motif décoratif pour l'atelier de logique" width="100%" />

## Qu'est-ce que la porte NON ?

- Elle a **une seule entrée** et **une seule sortie**.  
- La sortie est **toujours l'opposée** de l'entrée.

<details class="lg-details">
<summary class="lg-summary">
Voir la table de vérité complète
</summary>

<div class="lg-div">

| Entrée A | Sortie NON |
|----------|------------|
| 0        | 1          |
| 1        | 0          |

</div>
</details>

> Cette porte est aussi appelée un **inverseur**.

---

<img src="../media/paisaje_lago.webp" alt="Paysage de l'étang dans la forêt" width="100%" />

## Instructions du simulateur

### 1. Placez les composants
1. Assurez-vous d'être en mode **Édition**.  
2. Dans la barre latérale gauche, sélectionnez et placez :
   - **Entrée** ➔ une entrée (A).  
   - **Porte NON** ➔ une porte NON entre l'entrée et la sortie.  
   - **Sortie** ➔ une sortie à droite de la porte.

<img src="../media/actividad_3.png" alt="Exemple visuel du circuit NON avec une entrée et une sortie" width="20%" class="lg-img"/>

### 2. Connectez les composants
1. Connectez la **sortie** de l'**entrée A** à l'**entrée** de la **porte NON**.  
2. Connectez la **sortie** de la **porte NON** à la **sortie**.

### 3. Testez le circuit
- Cliquez sur l'**entrée A** pour basculer entre `0` ↔ `1`.  
- Observez la **sortie** : elle devrait afficher **l'opposé** de A.

**Condition de victoire :**  
- Si `A = 0` ➔ **Sortie = 1**  
- Si `A = 1` ➔ **Sortie = 0**

> La grenouille applaudit :  
> "Bravo ! Parfois, pour avancer, il faut **penser à l'envers**."

---

## Conseils rapides

- Si la sortie ne change **pas** en fonction de l'opposé de l'entrée, vérifiez que le câble passe **par** la **porte NON**.  
- Assurez-vous d'avoir sélectionné la **porte NON** et non une autre porte.  
- Si la sortie est **identique** à l'entrée, la porte NON n'est probablement pas connectée ou est absente.

---

## Défi (optionnel)

- **Double NON** : ajoutez **deux** portes NON en série. Que se passe-t-il avec la sortie ?  

---

## Simulateur

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulateur de circuits logiques" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Qu'avez-vous appris ?

- La porte **NON** inverse la valeur logique : `0 → 1` et `1 → 0`.  
- Elle est utile pour créer des **comportements inversés** (alarme en l'absence de signal, lumières automatiques, etc.).  
- Deux portes NON successives **s'annulent mutuellement**.

---

## À suivre

Excellent ! Dans la prochaine activité, le **Petit Singe** vous montrera comment **combiner** AND, OR et NON pour résoudre des défis plus complexes et rétablir l'énergie de la **Sphère de la Forêt**.
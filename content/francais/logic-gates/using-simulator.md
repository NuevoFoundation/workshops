---
title: "Utilisation du simulateur"
date: 2025-10-20T01:00:18-05:00
weight: 1
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

## Introduction

Vous êtes arrivé à la Forêt Magique du Costa Rica. Dans cet endroit vit une sphère qui protège les animaux et la nature, mais son énergie s'épuise.  
Pour la restaurer, nous devons d'abord apprendre à utiliser le simulateur de circuits logiques.

---

<img src="../media/pattern.webp" alt="Motif décoratif pour l'atelier de logique" width="100%" />

## Utilisation de base du simulateur

Avant d'apprendre à utiliser les portes logiques, il est nécessaire de comprendre comment placer des composants et les connecter correctement.

### 1. Interface principale

Sur le côté gauche, il y a une barre avec tous les composants disponibles, tels que :

- Entrées (Input)  
<img src="../media/logicinput.png" alt="Icône d'une entrée" width="40px" class="lg-img"/>

- Sorties (Output)  
<img src="../media/logicoutput.png" alt="Icône d'une sortie" width="40px" class="lg-img"/>

- Horloge (CLK)  
<img src="../media/logicclock.png" alt="Icône d'une horloge" width="64px" class="lg-img"/>

- Portes logiques (AND, OR, NOT, etc.)  
<div style="margin-left: 20px; display: flex; gap: 5px; align-items: center;">
   <img src="../media/logicand.png" alt="Icône d'une porte logique AND" width="64px"/>
   <img src="../media/logicor.png" alt="Icône d'une porte logique OR" width="64px"/>
   <img src="../media/logicnot.png" alt="Icône d'une porte logique NOT" width="64px"/>
</div>

En haut, il y a des boutons importants :
- **Editer** : mode pour placer des composants.
- **Déplacer** : déplacer les composants déjà placés.
- **Supprimer** : enlever les composants.
- **Sauvegarder / Charger** : sauvegarder ou charger des circuits.
<img src="../media/menu.png" alt="Icône du menu du simulateur" class="lg-img"/>

La zone blanche est l'endroit où vous construirez votre circuit.

---

## Première mission : connecter une entrée à une sortie

### Étapes

1. Assurez-vous que le mode **Editer** est sélectionné.
2. Dans la barre de gauche, cliquez sur **Input**.
3. Cliquez n'importe où dans l'espace blanc pour le placer.
4. Ensuite, sélectionnez **Output** et cliquez à nouveau pour le placer à droite ou proche de l'entrée.
5. Pour les connecter :
   - Cliquez sur le petit cercle de l'entrée.
   - Cliquez ensuite sur le cercle de la sortie.
   - Un fil sera dessiné automatiquement.
6. Cliquez sur le symbole de l'entrée pour changer sa valeur en activé ou désactivé :
   - `0` = désactivé
   - `1` = activé

Si l'entrée est à `1` et que la sortie affiche `1`, alors votre circuit fonctionne.

---

## Qu'avez-vous appris ?

- Comment placer des composants (cliquez sur le composant, puis sur l'espace blanc).
- Comment les connecter en utilisant les cercles de connexion.
- Comment changer les signaux des entrées.
- Ce circuit n'utilise pas encore de portes logiques, juste une connexion directe.

## Simulateur

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulateur de portes logiques" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Et ensuite

Lorsque vous serez prêt, dans la prochaine activité, vous rencontrerez le Toucan et apprendrez à utiliser la porte logique **AND**.
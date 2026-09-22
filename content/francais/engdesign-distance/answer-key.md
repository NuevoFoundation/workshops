---
title: "Conception technique pour DISTANCE - Clé de réponse"
date: 2024-01-15T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Ceci est une référence pour les enseignants du workshop de conception technique DISTANCE. Ce workshop est actuellement à l'état de brouillon (toutes les pages d'activités sont marquées `draft: true`) et contient du contenu incomplet, y compris des images manquantes, un fichier de code MATLAB/Octave manquant, et une table de critères d'évaluation absente. Cette clé de réponse documente les étapes du processus de conception du workshop ainsi que les choix de paramètres attendus pour aider les enseignants à comprendre le flux prévu si le workshop est finalisé à l'avenir.
{{% /notice %}}

{{% notice warning %}}
**Statut du workshop : Incomplet.** Les 11 pages d'activités sont `draft: true`. Plusieurs pages contiennent des espaces réservés `[insert image]` et `[insert table]`. Le code MATLAB/Octave référencé tout au long du document n'est pas fourni. Les instructions d'installation d'Octave font référence à un fichier ("Octave Instructions.docx") qui n'existe pas dans le dépôt. Ce workshop ne peut pas être proposé aux étudiants dans son état actuel.
{{% /notice %}}

## Aperçu du workshop

Les étudiants participent à une compétition fictive de course appelée DISTANCE (San Diego Student Racing Competition). Leur tâche est de concevoir un arbre de transmission pour une voiture de course en utilisant le processus de conception technique, avec un programme MATLAB/Octave qui calcule le diamètre recommandé de l'arbre en fonction des paramètres sélectionnés par les étudiants.

## Les 5 paramètres de conception

Le workshop guide les étudiants à travers 5 choix qui alimentent le calcul MATLAB :

### 1. Facteur de sécurité (Activité 5)

Un ratio entre la limite d'un matériau et la contrainte actuelle. Des valeurs plus élevées signifient des conceptions plus sûres mais potentiellement surdimensionnées.

| Facteur de sécurité | Signification |
|----------------------|---------------|
| 1 | La limite du matériau équivaut à la contrainte actuelle (risqué) |
| 2-3 | Typique pour de nombreuses applications techniques |
| 6 | Facteur de sécurité du pont du Golden Gate |
| Valeurs plus élevées | Plus sûr mais plus lourd/coûteux |

**Choix attendu des étudiants :** Un nombre supérieur à 1. Le workshop fournit des exemples du monde réel (ponts, moteurs, avions) comme références.

### 2. Choix de matériau (Activité 6)

Les étudiants choisissent parmi 5 matériaux, chacun ayant des propriétés mécaniques différentes :

| Matériau | Caractéristique principale |
|----------|----------------------------|
| Acier | Solide, lourd, difficile à casser |
| Bois | Léger, facile à travailler, moins durable |
| Verre | Cassant, se brise facilement sous la force |
| Aluminium | Plus léger que l'acier, résistance modérée |
| Plastique | Flexible, léger, option la plus faible |

**Choix attendu des étudiants :** L'acier ou l'aluminium sont les plus pratiques pour un arbre de transmission. Le programme utilise les propriétés mécaniques de chaque matériau (limite d'élasticité, limite d'endurance) dans le calcul.

### 3. Conditions de l’arbre (Activité 7)

Trois conditions environnementales qui affectent les performances de l'arbre :

| Condition | Options | Impact |
|-----------|---------|--------|
| Polissage de surface | Poli vs. non poli | Les fissures/déformations augmentent le risque de défaillance |
| Température du moteur | Excellent à risque de surchauffe | La surchauffe peut faire fondre ou endommager les pièces |
| Conditions météorologiques (pluie) | Optimistes vs. réalistes | L'eau provoque la corrosion et la dégradation des matériaux |

**Choix attendu des étudiants :** Ce sont des jugements personnels. Les choix optimistes produisent des diamètres plus petits, tandis que des choix réalistes produisent des diamètres plus grands (et plus sûrs).

### 4. Paramètres de charge (Activité 8)

Deux types de forces sur l'arbre de transmission :

| Type de charge | Description | Intervalle |
|----------------|-------------|------------|
| Couple | Force de rotation du moteur vers les roues | 0-10 000 (basé sur les valeurs de couple réelles des voitures) |
| Moment (flexion) | Forces causant la flexion de l'arbre | 0-10 000 |

**Saisie attendue des étudiants :** Les étudiants sélectionnent des valeurs minimales et maximales pour le couple et le moment. Des valeurs élevées nécessitent un diamètre d'arbre plus grand.

### 5. Géométrie (Activité 9)

Les étudiants choisissent entre deux types d'angles pour la section transversale de l'arbre :

| Géométrie | Description | Effet |
|-----------|-------------|-------|
| Angles droits | Arêtes vives | Concentrations de contraintes plus élevées (plus dangereux) |
| Angles arrondis | Arêtes arrondies | Concentrations de contraintes plus faibles (plus sûr) |

**Choix attendu des étudiants :** Les angles arrondis sont un choix technique plus sûr. Le workshop explique les concentrations de contraintes en utilisant l'exemple des fenêtres d'avion (fenêtres arrondies vs. rectangulaires).

## Résultat attendu

Le programme MATLAB/Octave calcule un diamètre minimum de l'arbre basé sur les 5 paramètres. Les étudiants vérifient ensuite leur diamètre par rapport à une table de critères d'évaluation (Activité 11, non fournie dans le workshop) pour déterminer la "position" de leur voiture dans la compétition.

**Principes généraux** (basés sur des principes standard d'ingénierie ; le code réel n'est pas disponible pour vérification) :
- Un facteur de sécurité plus élevé produit un diamètre plus grand
- Les matériaux plus résistants (acier) permettent des diamètres plus petits
- Des conditions défavorables (surchauffe, pluie, non poli) augmentent le diamètre
- Des charges plus élevées (couple, moment) augmentent le diamètre
- Les angles droits nécessitent des diamètres plus grands que les angles arrondis

## Statut d'achèvement du workshop

| Activité | Titre | Statut |
|----------|-------|--------|
| 1 | Contexte sur l'arbre de transmission | Brouillon, texte incomplet |
| 2 | Concevez votre arbre de transmission | Brouillon, image manquante |
| 3 | Code (MATLAB/Octave) | Brouillon, fichier de code non fourni, fichier d'installation Octave manquant |
| 4 | Structure du code | Brouillon, image manquante |
| 5 | Facteur de
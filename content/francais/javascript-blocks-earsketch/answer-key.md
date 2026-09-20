---
title: "Blocs : EarSketch - Clé de réponses"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Ceci est une référence pour les enseignants du workshop EarSketch en JavaScript Blocks. Le workshop utilise des blocs de glisser-déposer, mais chaque bloc génère du code JavaScript en arrière-plan. Cette clé de réponses montre le code JavaScript équivalent pour chaque activité afin que les enseignants puissent vérifier le travail des élèves. Puisque c’est un workshop de composition musicale créative, il existe de nombreuses réponses valides. Votre code est correct s'il s'exécute sans erreur et produit de la musique !
{{% /notice %}}

## Activité 1 : Définir le tempo et ajouter des sons

Glissez un bloc `fitMedia()` en dessous du bloc `setTempo` et remplissez les paramètres :

**JavaScript équivalent :**
```javascript
setTempo(120);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 1, 1, 9);
```

**Paramètres du bloc :**

| Paramètre | Valeur | Comment le définir |
|-----------|-------|--------------------|
| Son | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | Cliquez sur "sound" dans le bloc, puis collez à partir du panneau des sons |
| Piste | `1` | Utilisez le menu déroulant |
| Début | `1` | Mesure de départ |
| Fin | `9` | Mesure de fin |

## Activité 2 : Créer une chanson (sons multiples)

Ajoutez quatre blocs `fitMedia()`, chacun sur une piste différente :

**JavaScript équivalent :**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
```

{{% notice tip %}}
**Concept clé pour les élèves :** Chaque bloc `fitMedia()` doit utiliser un numéro de piste différent. Cela permet d'organiser les sons et de jouer plusieurs sons simultanément.
{{% /notice %}}

## Activité 3 : Ajouter des effets

Glissez un bloc `setEffect()` (version à 4 paramètres) en dessous des blocs `fitMedia()` :

**JavaScript équivalent :**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0);
```

**Paramètres du bloc `setEffect` (version à 4 paramètres) :**

| Paramètre | Valeur | Signification |
|-----------|-------|--------------|
| Piste | `2` | Quelle piste (utilisez `0` pour toutes les pistes) |
| Type d'effet | `DELAY` | Sélectionnez dans le menu déroulant |
| Paramètre | `DELAY_FEEDBACK` | Sélectionnez dans le menu déroulant |
| Valeur | `-6.0` | Intervalle : -120.0 à -1.0 |

## Activité 4 : Fondu en ouverture (fade-in) avec des effets

Glissez un bloc `setEffect()` (version à 7 paramètres) pour créer un fondu en ouverture :

**JavaScript équivalent :**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0);
setEffect(0, VOLUME, GAIN, -60, 1, 0, 3);
```

**Paramètres du bloc `setEffect` (version à 7 paramètres) :**

| Paramètre | Valeur | Signification |
|-----------|-------|--------------|
| Piste | `0` | Piste principale (tous les sons) |
| Type d'effet | `VOLUME` | Contrôle du volume |
| Paramètre | `GAIN` | Réglage de la puissance sonore |
| Valeur de départ | `-60` | Presque silencieux (en décibels) |
| Mesure de début | `1` | Début du fondu |
| Valeur finale | `0` | Volume normal |
| Mesure finale | `3` | Fin du fondu |

{{% notice tip %}}
**Comment fonctionne le fondu en ouverture :** Le volume démarre à -60 dB (presque silencieux) à la mesure 1 et augmente jusqu'à 0 dB (volume normal) à la mesure 3. Plus le nombre en décibels est négatif, plus le son est faible. Ne dépassez pas 0 dB.
{{% /notice %}}

## Référence rapide EarSketch

| Bloc | Objectif | Paramètres clés |
|-------|---------|----------------|
| `setTempo(bpm)` | Définir la vitesse de la chanson | 45-220 BPM |
| `fitMedia(clip, track, start, end)` | Ajouter un son | Choisir un clip à partir du panneau des sons |
| `setEffect(track, type, param, value)` | Ajouter un effet | Choisir le type/paramètre dans les menus déroulants |
| `setEffect(track, type, param, startVal, start, endVal, end)` | Automatiser un effet | Pour fondu en ouverture/en fermeture |
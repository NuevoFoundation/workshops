---
title: "Python : EarSketch - Guide de Réponses"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Voici des solutions d'exemple pour l'atelier EarSketch. Comme EarSketch est un atelier créatif de musique, de nombreuses réponses sont valides. Les clips sonores, tempos et numéros de pistes que vous choisissez dépendent de vous. Votre code est correct s'il s'exécute sans erreurs et produit de la musique ! Les exemples ci-dessous correspondent au code d'exemple présenté dans chaque activité.
{{% /notice %}}

## Activité 1 : Définir le tempo et ajouter des sons

Définir un tempo et ajouter un son avec `fitMedia()` :

```python
from earsketch import *

setTempo(120)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
```

**Ce que chaque paramètre signifie :**

| Paramètre | Valeur | Signification |
|-----------|--------|---------------|
| Clip sonore | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | Le clip audio à jouer (explorez le panneau Sounds pour trouver des clips) |
| Piste | `3` | Sur quelle piste placer le son (tout entier positif) |
| Début | `1` | Mesure où le son commence |
| Fin | `17` | Mesure où le son se termine |

{{% notice tip %}}
**Question fréquente des étudiants :** "Quel tempo dois-je utiliser ?"

Tout nombre entre 45-220 fonctionne. Voici quelques lignes directrices :
- **80-90** : Hip-hop, Trap
- **100-130** : Pop, House
- **140-180** : Drum & Bass, Dubstep
{{% /notice %}}

## Activité 2 : Créer une chanson (sons multiples)

Ajoutez quatre clips audio différents sur différentes pistes :

```python
from earsketch import *

setTempo(120)
fitMedia(RD_TRAP_BELLLEAD_1, 1, 5, 9)
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
fitMedia(YG_TRAP_BASS_9, 4, 1, 9)
```

{{% notice tip %}}
**Concept clé :** Chaque appel de `fitMedia()` doit utiliser un numéro de piste différent. Cela permet de garder les sons organisés et d'autoriser plusieurs sons à jouer simultanément. La piste 1 joue un son, la piste 2 en joue un autre, et ainsi de suite.
{{% /notice %}}

## Activité 3 : Organiser avec des fonctions

Utilisez des fonctions pour créer des sections d'une chanson dans un modèle A-B-A :

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# Section A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

# Section B
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17)
sectionA(17, 25)
```

**Comment fonctionne la structure A-B-A :**

| Mesures | Section | Fonction appelée |
|---------|---------|------------------|
| 1-9 | A | `sectionA(1, 9)` |
| 9-17 | B | `sectionB(9, 17)` |
| 17-25 | A (répétition) | `sectionA(17, 25)` |

{{% notice tip %}}
**Question fréquente des étudiants :** "Pourquoi utiliser des fonctions au lieu de simplement faire plus d'appels `fitMedia` ?"

Les fonctions vous permettent de réutiliser un groupe de sons sans copier tous les appels `fitMedia`. Pour jouer la section A deux fois, vous appelez simplement `sectionA()` deux fois avec des mesures début/fin différentes au lieu d'écrire 6 appels `fitMedia`.
{{% /notice %}}

## Activité 4 : Ajouter des effets

Utilisez `setEffect()` pour ajouter un effet d'écho :

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# Section A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

# Section B
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17)
sectionA(17, 25)
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
setEffect(2, DELAY, DELAY_TIME, 1200.0)
```

**Paramètres de `setEffect` (version à 4 paramètres) :**

| Paramètre | Valeur | Signification |
|-----------|--------|---------------|
| Piste | `2` | À quelle piste appliquer l'effet (utilisez `0` pour maître/toutes les pistes) |
| Type | `DELAY` | Le type d'effet |
| Paramètre | `DELAY_FEEDBACK` | Quel réglage ajuster |
| Valeur | `-6.0` | La valeur pour ce réglage (plage : -120,0 à -1,0 pour DELAY_FEEDBACK)
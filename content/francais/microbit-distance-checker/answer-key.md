---
title: "micro:bit distance checker - Réponse clé"
date: 2024-07-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Il s'agit d'une référence pour les enseignants dans le cadre de l'atelier de distanciation sociale sans fil avec micro:bit. L'atelier guide les élèves à travers la construction d'un projet complet étape par étape en utilisant les blocs MakeCode. Cette réponse clé fournit le code final complet (à la fois dans une description en blocs et en équivalent JavaScript), explique les concepts clés et inclut des instructions pour résoudre les problèmes.
{{% /notice %}}

## Solution complète

### Code final (équivalent JavaScript)

Voici le programme complet que les élèves construisent au cours des activités de l'atelier :

```javascript
radio.onReceivedNumber(function (receivedNumber) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (strength > -67) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let strength = 0
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
```

### Code final (description des blocs)

Pour les enseignants qui préfèrent suivre avec la vue basée sur les blocs :

| Location du bloc | Bloc | Paramètres |
|------------------|------|------------|
| **commencer** | `radio set group` | Groupe : `1` |
| **toujours** | `radio send number` | Nombre : `0` |
| **on radio received (receivedNumber)** | `set strength to` | `received packet signal strength` |
| (à l'intérieur du bloc reçu) | `if strength > -67 then` | Afficher icône : visage triste |
| (sinon) | `else` | Afficher icône : visage heureux |

**Ce qu'il fait :** Chaque micro:bit diffuse en continu un signal radio. Lorsqu'il reçoit un signal d'un autre micro:bit, il vérifie la force du signal. Si le signal est plus fort que -67 dBm (ce qui signifie que les micro:bits sont à moins de 6 pieds / 2 mètres l'un de l'autre), il montre un visage triste. Si le signal est plus faible (ce qui signifie qu'ils sont assez éloignés), il montre un visage heureux.

## Décomposition étape par étape

### Étape 1 : Qu'est-ce qu'un micro:bit (page 1)

Il s'agit d'une page introductive. Aucun code n'est écrit. Points clés :

- Caractéristiques du micro:bit : 25 LED, 2 boutons, broches IO, boussole, accéléromètre, Bluetooth
- Les élèves déballent leur matériel : micro:bit, 2 piles, câble USB, support de piles
- **Simulateur :** Les élèves sans matériel peuvent utiliser le simulateur MakeCode avec deux micro:bits virtuels côte à côte. L'antenne radio (onde carrée jaune) peut être cliquée et déplacée pour simuler les changements de force du signal.
- Seuil de force du signal pour le simulateur : `strength > -67` déclenche le visage triste

### Étape 2 : Diffuser un signal (page 2)

**Code ajouté à cette étape :**

```javascript
// commencer
radio.setGroup(1)

// toujours
basic.forever(function () {
    radio.sendNumber(0)
})
```

**Concepts clés :**
- `radio set group 1` va dans le bloc "commencer" pour qu'il s'exécute une fois au démarrage du micro:bit
- Tous les micro:bits doivent utiliser le même numéro de groupe pour communiquer
- `radio send number 0` va dans le bloc "toujours" pour diffuser en continu
- Le numéro réellement envoyé (0) n'a pas d'importance pour ce projet ; seul la force du signal compte

### Étape 3 : Recevoir un message (page 3)

**Code ajouté à cette étape :**

```javascript
radio.onReceivedNumber(function (receivedNumber) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
let strength = 0
```

**Concepts clés :**
- Le bloc `on radio received` se déclenche chaque fois que le micro:bit reçoit un numéro d'un autre micro:bit
- Une **variable** appelée `strength` est créée pour stocker la force du signal reçu
- `received packet signal strength` donne la valeur RSSI (Indicateur de Force du Signal Reçu)
- Les variables sont des conteneurs nommés qui stockent des informations et peuvent être utilisées et mises à jour plus tard

### Étape 4 : Interpréter la force du signal (page 4)

**Code ajouté à cette étape :**

```javascript
if (strength > -67) {
    // trop proche - moins de 6 pieds d'écart
} else {
    // distance sûre - plus de 6 pieds d'écart
}
```

**Concepts clés :**
- -67 dBm est le niveau de force du signal pré-mesuré à 6 pieds (2 mètres) pour le Bluetooth du micro:bit
- Force du signal plus proche de 0 = signal plus fort = distance plus proche
- Force du signal plus éloignée de 0 (plus négative) = signal plus faible = distance plus éloignée
- `strength > -67` signifie que les appareils sont **plus proches** que 6 pieds (signal plus fort que le seuil)

**Question courante des élèves :** "Pourquoi -67 ?" Parce que -67 dBm a été mesuré comme niveau de puissance lorsque deux micro:bits sont à 6 pieds d'écart. Différents radios Bluetooth peuvent avoir des valeurs différentes à la même distance.

### Étape 5 : Illuminer les LED (page 5)

**Code ajouté à cette étape :**

```javascript
if (strength > -67) {
    basic.showIcon(IconNames.Sad)    // trop proche
} else {
    basic.showIcon(IconNames.Happy)  // distance sûre
}
```

**Concepts clés :**
- Visage triste = trop proche (moins de 6 pieds)
- Visage heureux = distance sûre (6 pieds ou plus)
- Les icônes se trouvent dans la section Basic de MakeCode

Pour une référence visuelle du code final en blocs, consultez la capture d'écran à la fin de la page [Lighting it up](../light-it-up).

### Étape 6 : Télécharger le code (page 6)

Aucun nouveau code n'est écrit. Cette page couvre :

1. **Appairage :** Connectez USB, cliquez sur `...` à côté de Télécharger, sélectionnez "Pair device", cliquez sur "BBC micro:bit CMSIS-DAP", puis sur Connecter
2. **Téléchargement :** Cliquez sur `...` à nouveau, sélectionnez "Télécharger
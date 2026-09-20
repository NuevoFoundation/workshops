```markdown
---
title: "JSappyBird - Clé de réponse"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Cette clé de réponse couvre tout le code que les étudiants ajoutent pour construire le jeu Flappy Bird. Chaque étape ajoute une ligne spécifique de JavaScript à un fichier spécifique dans le projet Replit. L'atelier est guidé (les étudiants sont dirigés sur ce qu'il faut taper), mais cela consolide tout en une référence pour les enseignants.
{{% /notice %}}

## Ajouts de code étape par étape

### 1. Charger l'image de l'oiseau

**Fichier :** `load-sprites.js`

```javascript
game.load.image('bird', 'assets/bird.png');
```

### 2. Modifier le texte de l'écran de démarrage

**Fichier :** `start-screen.js`

```javascript
var text = game.add.text(0, 0, "Appuyez sur Espace pour commencer", textOptions);
```

### 3. Faire sauter l'oiseau avec la barre d'espace

**Fichier :** `create-game.js`

```javascript
spaceKey.onDown.add(jump, this);
```

### 4. Ajouter la gravité

**Fichier :** `create-game.js`

```javascript
bird.body.gravity.y = 900;
```

### 5. Ajouter une force de saut (vélocité)

**Fichier :** `create-game.js`

```javascript
bird.body.velocity.y = -350;
```

{{% notice tip %}}
**Question fréquente des étudiants :** "Comment faire pour que l'oiseau saute plus haut ou plus bas ?"

Modifiez le nombre dans `bird.body.velocity.y`. Plus c'est négatif = saut plus haut. Essayez `-200` pour un petit bond ou `-500` pour un grand saut.
{{% /notice %}}

### 6. Ajouter une rotation de l'oiseau en cas de chute

**Fichier :** `update-game.js`

```javascript
if (bird.angle < 50) {
    bird.angle += 1;
}
```

### 7. Ajouter un son de saut

**Fichier :** `create-game.js`

```javascript
jumpSound.play();
```

## Réponses des Activités Bonus

### Faire sauter l'oiseau en avant

**Fichier :** `create-game.js`

```javascript
bird.body.velocity.x = 100;
```

### Questions d'exploration bonus

| Question                         | Ce qu'il se passe                                   |
|----------------------------------|----------------------------------------------------|
| Rendre la gravité plus forte ?  | `bird.body.gravity.y = 1500;` — l'oiseau tombe plus vite, le jeu devient plus difficile |
| Rendre la gravité négative ?    | `bird.body.gravity.y = -900;` — l'oiseau flotte vers le haut au lieu de tomber |
| Faire tourner l'oiseau plus vite ? | Changez `bird.angle += 1` en `bird.angle += 5`      |
| Supprimer le `if` autour de la rotation ? | L'oiseau tourne sans fin au-delà de 50 degrés     |

## Code des Activités (Version Avancée)

L'atelier inclut également trois activités de codage qui enseignent les variables, les conditions, les fonctions et les boucles :

### Activité 1 : Garder l'oiseau à l'écran (conditionnel)

```javascript
if (bird.y > 0 && bird.y < 490) {
    // l'oiseau est à l'écran - permet le mouvement
}
```

### Activité 2 : Fonction de saut

```javascript
function jump() {
    bird.body.velocity.y = -300;
}
```

### Activité 3 : Ajouter des obstacles avec une ouverture

```javascript
var hole = Math.floor(Math.random() * 6) + 1;

for (var i = 0; i < 8; i++) {
    if (i != hole) {
        addOnePipe(i);
    }
}
```

**Comment cela fonctionne :** La boucle `for` crée 8 obstacles en forme de tuyaux. La variable `hole` choisit une position aléatoire (1-6) à sauter, créant une ouverture pour que l'oiseau puisse passer.

## Résumé de la logique complète du jeu

| Fonctionnalité         | Code                                              | Fichier         |
|-------------------------|--------------------------------------------------|-----------------|
| Charger le sprite de l'oiseau | `game.load.image('bird', 'assets/bird.png')`   | load-sprites.js |
| Écran de démarrage      | `game.add.text(0, 0, "Appuyez sur Espace pour commencer", textOptions)` | start-screen.js |
| Saut avec la barre d'espace | `spaceKey.onDown.add(jump, this)`                  | create-game.js  |
| Gravité                 | `bird.body.gravity.y = 900`                       | create-game.js  |
| Vélocité de saut        | `bird.body.velocity.y = -350`                     | create-game.js  |
| Rotation en chutant     | `if (bird.angle < 50) { bird.angle += 1; }`       | update-game.js  |
| Son de saut             | `jumpSound.play()`                                | create-game.js  |
```
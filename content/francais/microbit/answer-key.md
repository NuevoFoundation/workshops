```markdown
---
title: "Micro:Bit - Clé de réponse"
date: 2026-04-28T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Ceci est un guide de référence pour les enseignants pour l'atelier Micro:Bit. L'atelier est principalement un tutoriel guidé avec des exemples de code intégrés plutôt que des exercices à trous. Cette clé de réponse consolide tous les concepts clés, exemples de code, résultats des tutoriels et projets d'exemple pour la section ouverte "À vous de jouer".
{{% /notice %}}

## Référence des bases de JavaScript

### Variables et types de données

L'atelier introduit cinq types de données. Voici un résumé avec des exemples :

| Type de données | Description | Exemple |
|------------------|-------------|---------|
| Entier | Nombres entiers (sans décimales) | `var a = 5;` |
| Double | Nombres avec décimales | `var x = 0.5;` |
| Chaîne | Texte (entre guillemets doubles) | `var company = "My company";` |
| Caractère | Lettre unique (entre guillemets simples) | `var letter = 'A';` |
| Booléen | Valeurs vrai ou faux | `var codingIsCool = true;` |

**Règles principales pour les noms de variables :**
- Peuvent contenir des lettres, chiffres, underscores et des signes dollar
- Ne peuvent pas contenir d'espaces
- Doivent commencer par une lettre

### Opérations mathématiques

| Opération | Opérateur | Exemple | Résultat |
|-----------|-----------|---------|----------|
| Addition | `+` | `var c = 13 + 10;` | `c = 23` |
| Soustraction | `-` | `var c = 15 - 10;` | `c = 5` |
| Multiplication | `*` | `var c = 2 * 5;` | `c = 10` |
| Division | `/` | `var c = 20 / 2;` | `c = 10` |
| Modulo | `%` | `var d = 10 % 2;` | `d = 0` |

**Remarque :** La source de l'atelier montre `c = a + b; // c = 25`, mais 13 + 10 = 23. Il s'agit d'une faute de frappe dans l'atelier original.

**Opérateurs raccourcis :**
- `c += a;` ajoute `a` à `c`
- `c -= a;` soustrait `a` de `c`
- `c *= a;` multiplie `c` par `a`
- `c /= a;` divise `c` par `a`
- `c++` incrémente de 1, `c--` décrémente de 1

**Remarque :** L'exemple de division dans l'atelier montre dans les commentaires `c /= a; // c = 5`, mais le véritable résultat est `0.5` (10 divisé par 20). Les enseignants doivent être conscients de cette différence.

### Instructions d'impression

```javascript
// Afficher dans la console du navigateur (non visible sur la page web)
console.log("Hello!");

// Afficher sous forme de fenêtre contextuelle
alert("Hello!");

// Fenêtre contextuelle avec champ de saisie - stocke la réponse de l'utilisateur
var userResponse = prompt("What is your name?");
```

### Instructions conditionnelles

```javascript
var age = 10;
if (age < 18) {
  print("You're not an adult yet! :( ");
}
```

**Remarque :** L'atelier utilise `print()` dans cet exemple, ce qui n'est pas standard pour le JavaScript dans les navigateurs. Dans MakeCode, l'équivalent serait `basic.showString()`. Dans un navigateur, utilisez `console.log()` ou `alert()`. De plus, la source de l'atelier contient une faute dans le commentaire : il précise "Si l'âge est inférieur à 10" mais la condition vérifie `age < 18`.

### Boucles

```javascript
// boucle while - compte à rebours à partir de 10
var count = 10;
while (count > 0) {
  alert(count);
  count--;
}

// boucle for - compte à rebours à partir de 10
for (var i = 10; i > 0; i--) {
  alert(i);
}
```

**Important :** Une boucle infinie `while (true)` bloquera un navigateur. Sur le micro:bit, `basic.forever()` est l'équivalent sûr pour une exécution continue.

**Supplémentaire :** L'instruction `break;` peut arrêter immédiatement une boucle et passer l'exécution à la ligne située en dessous de la boucle.

## Configuration du Micro:bit

### Vue d'ensemble du matériel

Le micro:bit dispose de :
- 25 LEDs programmables individuellement (grille 5×5)
- 2 boutons programmables (A et B)
- Broches de connexion physique
- Capteurs de mouvement (accéléromètre et boussole)
- Communication sans fil (Bluetooth et radio)
- Interface USB

### Connexion à un ordinateur

1. Branchez le micro:bit via un câble USB
2. Il apparaît comme un lecteur appelé `MICROBIT` dans l'explorateur de fichiers
3. Pour charger des programmes : copiez les fichiers `.hex` sur le lecteur MICROBIT (ou clic droit → Envoyer vers → MICROBIT)
4. La LED jaune à l'arrière clignote pendant le téléchargement du code

### Éditeur MakeCode

L'environnement de programmation est accessible à [makecode.microbit.org](https://makecode.microbit.org/). Les étudiants peuvent basculer entre les vues Bloc et JavaScript.

## Résultats des tutoriels

### Tutoriel "Cœur Clignotant"

Les élèves suivent le tutoriel intégré à MakeCode. Le résultat attendu :

```javascript
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
```

**Ce que ça fait :** Alterne entre une grande icône de cœur et une petite icône de cœur sur l'écran LED, créant une animation ressemblant à un battement de cœur.

### Tutoriel "Micro Chat"

Les élèves suivent le tutoriel intégré à MakeCode. Le résultat attendu :

```javascript
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello")
    basic.showString("Hello")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Goodbye")
    basic.showString("Goodbye
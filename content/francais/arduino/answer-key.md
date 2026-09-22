---
title: "Arduino - Clef de réponses"
date: 2024-07-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Ceci est une référence pour les enseignants concernant l'atelier sur le jeu de lumière Arduino. L'atelier guide les étudiants à travers 4 activités matérielles utilisant un Arduino UNO et le kit de démarrage Elegoo. Tout le code est fourni dans l'atelier, cette clé de réponses consolide donc les solutions complètes, explique les concepts clés et signale un bug dans le code source que les enseignants devraient connaître.
{{% /notice %}}

## Activité 1 : LED clignotante

### Résumé du câblage

1. Reliez la patte longue (anode) de la LED à la broche 25J et la patte courte (cathode) au rail bleu [-]
2. Reliez une résistance de 220 ohms de la broche 25H au rail rouge [+]
3. Reliez un fil de raccordement du rail rouge [+] au 5V de l'Arduino
4. Reliez un fil de raccordement du rail bleu [-] (31Z) au GND de l'Arduino
5. Connectez l'Arduino via USB

### Code

Les étudiants chargent l'exemple intégré : **Fichier > Exemples > 01.Basics > Blink**

Le code ci-dessous représente le cœur fonctionnel de l'exemple intégré Blink. L'exemple complet chargé par les étudiants comprend des commentaires et des attributions supplémentaires.

```c++
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

### Concepts clés

- `setup()` s'exécute une fois lorsque l'Arduino est allumé
- `loop()` s'exécute en boucle à l'infini
- `pinMode()` configure une broche comme INPUT ou OUTPUT
- `digitalWrite()` définit une broche sur HIGH (allumé) ou LOW (éteint)
- `delay(1000)` fait une pause de 1000 millisecondes (1 seconde)

### Réponse au défi supplémentaire

L'atelier demande : "Que pourriez-vous changer pour modifier le temps d'attente ?" Réponse : changez le nombre dans `delay(1000)`. Par exemple, `delay(500)` fait clignoter la LED deux fois plus rapidement. 1000 millisecondes = 1 seconde, donc 10 minutes = 600000 millisecondes.

## Activité 2 : Joystick avec sortie série

### Résumé du câblage

1. Joystick GND à GND de l'Arduino
2. Joystick +5V à 5V de l'Arduino
3. Joystick VRx à la broche analogique A0
4. Joystick VRy à la broche analogique A1
5. Joystick SW à la broche numérique 2
6. Connectez l'Arduino via USB

### Code

```c++
//www.elegoo.com
//2016.12.09

// Numéros des broches Arduino
const int SW_pin = 2; // broche numérique connectée à la sortie du bouton
const int X_pin = A0; // broche analogique connectée à la sortie X
const int Y_pin = A1; // broche analogique connectée à la sortie Y

void setup() {
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(9600);
}

void loop() {
  Serial.print("Bouton:  ");
  Serial.print(digitalRead(SW_pin));
  Serial.print("\n");
  Serial.print("Axe X: ");
  Serial.print(analogRead(X_pin));
  Serial.print("\n");
  Serial.print("Axe Y: ");
  Serial.println(analogRead(Y_pin));
  Serial.print("\n\n");
  delay(500);
}
```

### Concepts clés

- `Serial.begin(9600)` initialise la communication série à 9600 bauds
- `Serial.print()` envoie du texte au Moniteur Série (cliquez sur l'icône de loupe dans l'IDE Arduino)
- `analogRead()` lit une valeur de 0 à 1023 depuis une broche analogique
- `digitalRead()` lit HIGH (1) ou LOW (0) depuis une broche numérique
- `digitalWrite(SW_pin, HIGH)` active la résistance pull-up interne sur la broche 2, de sorte que le bouton lit HIGH lorsqu'il n'est pas pressé et LOW lorsqu'il est pressé
- La position centrale du joystick est approximativement X = 490, Y = 490

### Résultat attendu dans le moniteur série

Lorsque le joystick est centré, les étudiants devraient voir des valeurs proches de :
```
Bouton:  1
Axe X: 490
Axe Y: 490
```

Déplacer le joystick modifie les valeurs X et Y (plage 0-1023). Appuyer sur le bouton du joystick modifie l'état du Bouton de 1 à 0.

## Activité 3 : Joystick et LEDs

### Résumé du câblage

Cette activité combine le joystick et 4 LEDs de couleurs (bleue, jaune, rouge, verte), ainsi qu'une 5ème LED sur la broche 7 pour le bouton. Le câblage complet comprend 25 étapes décrites en détail dans l'atelier. Connexions clés :

| Composant | Broche Arduino |
|-----------|----------------|
| Joystick VRx | A0 |
| Joystick VRy | GND |
| Joystick SW | Broche numérique 2 |
| Joystick +5V | Rail rouge [+] de la plaque d'essai |
| Joystick GND | Rail bleu [-] de la plaque d'essai |
| LED bleue | Broche numérique 11 |
| LED jaune | Broche numérique 10 |
| LED rouge | Broche numérique 9 |
| LED verte | Broche numérique 8 |
| LED pour le bouton | Broche numérique 7 |

### Concepts clés 

- Chaque direction du joystick illumine une LED différente selon les valeurs analogiques 
- Les boutons permettent la commande d’éclairage LED 

En conclusion, chaque étape peut également inclure des ajustements potentiels pour un projet personnalisé. Si vous souhaitez explorer davantage l'expérience éducative FOURNISSEZ-moi une autre trame !
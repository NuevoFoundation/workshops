---
title: "Activité 2 - Joystick avec sortie série"
draft: false
weight: 5
---

## Câblage du joystick

Maintenant que vous comprenez comment obtenir des signaux du programme (sorties) et les utiliser pour contrôler des LED, examinons comment intégrer des entrées dynamiques dans le système. Pour cette activité, nous utiliserons une commande joystick, similaire à celles utilisées dans les consoles de jeux vidéo.

![Texte Alt : Diagramme de câblage pour le module joystick](../img/act2_Joystick.png)

1. Attachez une extrémité d’un fil de connexion au GND du joystick et l’autre au GND de l’Elegoo.  
2. Attachez une extrémité d’un fil de connexion au +5V du joystick et l’autre au 5V de l’Elegoo.  
3. Attachez une extrémité d’un fil de connexion au VRx du joystick et l’autre à A0 (broche analogique 0) de l’Elegoo.  
4. Attachez une extrémité d’un fil de connexion au VRy du joystick et l’autre à A1 (broche analogique 1) de l’Elegoo.  
5. Attachez une extrémité d’un fil de connexion au SW du joystick et l’autre à 2 (broche numérique 2) de l’Elegoo.  
6. Branchez la carte Arduino via USB à votre PC et ouvrez l’application Arduino IDE.  

## Reconnaître et afficher les entrées analogiques

Nous allons une fois de plus utiliser du code exemple pour nos programmes. Cette fois-ci, nous le récupérons directement sur le site web d’Elegoo. Copiez le code suivant dans votre Arduino IDE.

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
  Serial.print("Bouton :  ");
  Serial.print(digitalRead(SW_pin));
  Serial.print("\n");
  Serial.print("Axe X : ");
  Serial.print(analogRead(X_pin));
  Serial.print("\n");
  Serial.print("Axe Y : ");
  Serial.println(analogRead(Y_pin));
  Serial.print("\n\n");
  delay(500); 
}
```

7. Cliquez maintenant sur le bouton de téléversement pour déployer le programme sur l’Arduino.  
8. Cliquez sur le bouton "Moniteur Série" en haut à droite de l’écran pour afficher la console.  
![Texte Alt : Capture d’écran d’Arduino IDE montrant l’emplacement du bouton moniteur série](../img/SerialMonitor-button.png)  
9. Observez comment les valeurs X et Y changent lorsque vous déplacez le joystick.  
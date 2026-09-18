```markdown
---
title: "Activité 4 - Écran LCD"
draft: false
weight: 7
---

## Schéma de Câblage

Maintenant que vous maîtrisez l'émission de signaux vers des LED, voyons comment afficher du texte avec un simple écran. Une seule résistance (5K) est utilisée pour limiter la luminosité de l'écran. Essayez de câbler cela selon le schéma sans instructions spécifiques.

![Texte alternatif : Schéma de câblage pour Elegoo et écran LCD](../img/LCD-wiring.png)

## Le Code :
```c++
//www.elegoo.com
//2016.12.9

/*
  Bibliothèque LiquidCrystal - Hello World

 Démontre l'utilisation d'un écran LCD 16x2. La bibliothèque 
 LiquidCrystal fonctionne avec tous les écrans LCD compatibles 
 avec le driver Hitachi HD44780. Il en existe beaucoup, et vous 
 pouvez généralement les reconnaître par leur interface à 16 broches.

 Ce programme affiche "Hello World!" sur l'écran LCD 
 et montre le temps écoulé.

 Le circuit :
 * Broche RS de l'écran LCD connectée à la broche numérique 7
 * Broche Enable de l'écran LCD connectée à la broche numérique 8
 * Broche D4 de l'écran LCD connectée à la broche numérique 9
 * Broche D5 de l'écran LCD connectée à la broche numérique 10
 * Broche D6 de l'écran LCD connectée à la broche numérique 11
 * Broche D7 de l'écran LCD connectée à la broche numérique 12
 * Broche R/W de l'écran LCD connectée à la masse
 * Broche VSS de l'écran LCD connectée à la masse
 * Broche VCC de l'écran LCD connectée à 5V
 * Résistance de 10K :
 * extrémités connectées à +5V et à la masse
 * potentiomètre connecté à la broche VO de l'écran LCD (broche 3)

 Bibliothèque initialement ajoutée le 18 avril 2008
 par David A. Mellis
 modifiée le 5 juillet 2009
 par Limor Fried (http://www.ladyada.net)
 exemple ajouté le 9 juillet 2009
 par Tom Igoe
 modifiée le 22 novembre 2010
 par Tom Igoe

 Ce code d'exemple est dans le domaine public.

 http://www.arduino.cc/en/Tutorial/LiquidCrystal
 */

// inclure le code de la bibliothèque :
#include <LiquidCrystal.h>

// initialiser la bibliothèque avec les numéros des broches de l'interface
LiquidCrystal lcd(7, 8, 9, 10, 11, 12);

void setup() {
  // configurer le nombre de colonnes et de lignes de l'écran LCD :
  lcd.begin(16, 2);
  // Afficher un message sur l'écran LCD.
  lcd.print("Hello, World!");
}

void loop() {
  // positionner le curseur à la colonne 0, ligne 1
  // (note : la ligne 1 est la deuxième ligne, car le comptage commence à 0) :
  lcd.setCursor(0, 1);
  // afficher le nombre de secondes depuis le démarrage :
  lcd.print(millis() / 1000);
}
```
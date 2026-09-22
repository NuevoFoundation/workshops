```markdown
---
title: "Activité 3 - Joystick & LEDs"
draft: false
weight: 6
---

## Activité 3 - Joystick + LEDs

![Alt Text: Schéma de câblage pour connecter un joystick et 5 LEDs](../img/act3_joy+led.png)

Combinons l'activité 1 avec l'activité 2. Contrôlons les LEDs en fonction des entrées du joystick.  
1. Branchez une extrémité d'un fil jumper au GND du joystick et l'autre à 7X sur la breadboard.  
2. Branchez une extrémité d'un fil jumper au +5V du joystick et l'autre à 5W sur la breadboard.  
3. Branchez une extrémité d'un fil jumper au VRx du joystick et l'autre à A0 sur l'Elegoo.  
4. Branchez une extrémité d'un fil jumper au VRy du joystick et l'autre au GND sur l'Elegoo.  
5. Branchez une extrémité d'un fil jumper au SW du joystick et l'autre à 2 sur l'Elegoo.  
6. Connectez la patte longue (anode) de votre LED bleue à la broche 8F et la patte courte (cathode) à la broche 9F.  
7. Connectez une résistance de 220 ohms avec une patte dans 8G et l'autre dans 4G.  
8. Branchez une extrémité d'un fil jumper à 4H sur la breadboard et l'autre à 11 sur l'Elegoo.  
9. Branchez une extrémité d'un fil jumper à 9G et l'autre à 12Z (n'importe où sur la ligne bleue [-]) de la breadboard.  
10. Connectez la patte longue (anode) de votre LED jaune à la broche 14J et la patte courte (cathode) à la broche 15J.  
11. Connectez une résistance de 220 ohms avec une patte dans 14I et l'autre dans 10I.  
12. Branchez une extrémité d'un fil jumper à 10J sur la breadboard et l'autre à 10 sur l'Elegoo.  
13. Branchez une extrémité d'un fil jumper à 15I et l'autre à 18Z (n'importe où sur la ligne bleue [-]) de la breadboard.  
14. Connectez la patte longue (anode) de votre LED rouge à la broche 21F et la patte courte (cathode) à la broche 22F.  
15. Connectez une résistance de 220 ohms avec une patte dans 17G et l'autre dans 21G.  
16. Branchez une extrémité d'un fil jumper à 17H sur la breadboard et l'autre à 9 sur l'Elegoo.  
17. Branchez une extrémité d'un fil jumper à 22G et l'autre à 25Z (n'importe où sur la ligne bleue [-]) de la breadboard.  
18. Connectez la patte longue (anode) de votre LED verte à la broche 14A et la patte courte (cathode) à la broche 15A.  
19. Connectez une résistance de 220 ohms avec une patte dans 10B et l'autre dans 14B.  
20. Branchez une extrémité d'un fil jumper à 10C sur la breadboard et l'autre à 8 sur l'Elegoo.  
21. Branchez une extrémité d'un fil jumper à 15B et l'autre à 17X (n'importe où sur la ligne bleue [-]) de la breadboard.  
22. Connectez les rails bleus [-] entre eux avec un fil jumper.  
23. Connectez les rails rouges [+] entre eux avec un fil jumper.  
24. Branchez une extrémité d'un fil jumper au +5V sur l'Elegoo et l'autre n'importe où sur une des lignes rouges [+].  
25. Branchez une extrémité d'un fil jumper au GND sur l'Elegoo et l'autre n'importe où sur une des lignes bleues [-].

## Le Code

``` c++
int button=2;
int buttonState=0;
int buttonState1=0;

void setup() {
  pinMode(7,OUTPUT);
  pinMode(button,INPUT);
  digitalWrite(button,HIGH);
  Serial.begin(9600);

  pinMode(8,OUTPUT);
  pinMode(9,OUTPUT);
  pinMode(10,OUTPUT);
  pinMode(11,OUTPUT);
}
 
void loop() {

 int xValue = analogRead(joyX);
 int yValue = analogRead(joyY);

  Serial.print(xValue);
  Serial.print("\t");
  Serial.println(yValue);
  buttonState = digitalRead(button);
  Serial.println(buttonState);

  if (xValue>=0 && yValue<=20)
  {
    digitalWrite(10,HIGH);
  }
  else{digitalWrite(10,LOW);}

  if (xValue<=20 && yValue>=490)
  {
    digitalWrite(11,HIGH);
  }
  else{digitalWrite(11,LOW);}

  if (xValue>=1010 && yValue>=490)
  {
    digitalWrite(9,HIGH);
  }
  else{digitalWrite(9,LOW);}

  if (xValue>=490 && yValue>=1010)
  {
    digitalWrite(8,HIGH);
  }
  else{digitalWrite(8,LOW);}

  if (xValue>=1010 && yValue>=1010)
  {
    digitalWrite(9,LOW);
    digitalWrite(8,LOW);
  }

  if (buttonState==LOW)
  {
    Serial.println("Switch = High");
    digitalWrite(7,HIGH);
  }
  else{digitalWrite(7,LOW);}
  buttonState1=digitalRead(7);
  Serial.println(buttonState1);
  delay(100);
}

```
```
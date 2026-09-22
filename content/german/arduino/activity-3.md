```markdown
---
title: "Aktivität 3 - Joystick & LEDs"
draft: false
weight: 6
---

## Aktivität 3 - Joystick + LEDs

![Alt Text: Verdrahtungsdiagramm für die Verbindung von Joystick und 5 LEDs](../img/act3_joy+led.png)

Kombinieren wir Aktivität 1 und Aktivität 2. Lassen Sie uns LEDs basierend auf den Eingaben des Joysticks steuern.
1. Verbinden Sie ein Ende eines Jumper-Kabels mit GND des Joysticks und das andere Ende mit 7X auf dem Breadboard.
2. Verbinden Sie ein Ende eines Jumper-Kabels mit +5V des Joysticks und das andere Ende mit 5W auf dem Breadboard.
3. Verbinden Sie ein Ende eines Jumper-Kabels mit VRx des Joysticks und das andere Ende mit A0 des Elegoo.
4. Verbinden Sie ein Ende eines Jumper-Kabels mit VRy des Joysticks und das andere Ende mit GND des Elegoo.
5. Verbinden Sie ein Ende eines Jumper-Kabels mit SW des Joysticks und das andere Ende mit 2 des Elegoo.
6. Stecken Sie die lange Leitung (Anode) Ihrer blauen LED in Pin 8F und die kurze Leitung (Kathode) in Pin 9F.
7. Befestigen Sie einen 220-Ohm-Widerstand mit einem Bein in 8G und dem anderen in 4G.
8. Verbinden Sie ein Ende eines Jumper-Kabels mit 4H auf dem Breadboard und das andere mit 11 des Elegoo.
9. Verbinden Sie ein Ende eines Jumper-Kabels mit 9G und das andere mit 12Z (irgendwo in der blauen [-]-Linie) auf dem Breadboard.
10. Stecken Sie die lange Leitung (Anode) Ihrer gelben LED in Pin 14J und die kurze Leitung (Kathode) in Pin 15J.
11. Befestigen Sie einen 220-Ohm-Widerstand mit einem Bein in 14I und dem anderen in 10I.
12. Verbinden Sie ein Ende eines Jumper-Kabels mit 10J auf dem Breadboard und das andere mit 10 des Elegoo.
13. Verbinden Sie ein Ende eines Jumper-Kabels mit 15I und das andere mit 18Z (irgendwo in der blauen [-]-Linie) auf dem Breadboard.
14. Stecken Sie die lange Leitung (Anode) Ihrer roten LED in Pin 21F und die kurze Leitung (Kathode) in Pin 22F.
15. Befestigen Sie einen 220-Ohm-Widerstand mit einem Bein in 17G und dem anderen in 21G.
16. Verbinden Sie ein Ende eines Jumper-Kabels mit 17H auf dem Breadboard und das andere mit 9 des Elegoo.
17. Verbinden Sie ein Ende eines Jumper-Kabels mit 22G und das andere mit 25Z (irgendwo in der blauen [-]-Linie) auf dem Breadboard.
18. Stecken Sie die lange Leitung (Anode) Ihrer grünen LED in Pin 14A und die kurze Leitung (Kathode) in Pin 15A.
19. Befestigen Sie einen 220-Ohm-Widerstand mit einem Bein in 10B und dem anderen in 14B.
20. Verbinden Sie ein Ende eines Jumper-Kabels mit 10C auf dem Breadboard und das andere mit 8 des Elegoo.
21. Verbinden Sie ein Ende eines Jumper-Kabels mit 15B und das andere mit 17X (irgendwo in der blauen [-]-Linie) auf dem Breadboard.
22. Verbinden Sie die blauen [-]-Schienen miteinander mit einem Jumper-Kabel.
23. Verbinden Sie die roten [+]-Schienen miteinander mit einem Jumper-Kabel.
24. Verbinden Sie ein Ende eines Jumper-Kabels mit +5V am Elegoo und das andere irgendwo mit einer roten [+]-Linie.
25. Verbinden Sie ein Ende eines Jumper-Kabels mit GND am Elegoo und das andere irgendwo mit einer blauen [-]-Linie.

## Der Code

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
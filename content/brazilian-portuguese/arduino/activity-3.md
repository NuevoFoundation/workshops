---
title: "Atividade 3 - Joystick & LEDs"
draft: false
weight: 6
---

## Atividade 3 - Joystick + LEDs

![Alt Text: Diagrama de fiação para conectar joystick e 5 LEDs](../img/act3_joy+led.png)

Vamos combinar a atividade 1 e a atividade 2. Vamos controlar os LEDs com base na entrada do joystick.
1. Conecte uma extremidade de um fio de jumper ao GND no joystick e a outra ao 7X no Breadboard.
2. Ligue uma extremidade de um fio de jumper a +5V no joystick e a outra a 5W no Breadboard.
3. Conecte uma extremidade de um fio de jumper ao VRx no joystick e a outra ao A0 no Elegoo.
4. Conecte uma extremidade de um fio de jumper ao VRy no joystick e a outra ao GND no Elegoo.
5. Conecte uma extremidade de um fio de jumper ao SW no joystick e a outra ao 2 no Elegoo.
6. Ligue o chumbo longo (ânodo) do seu LED azul ao pino 8F e o cabo curto (cátodo) no pino 9F.
7. Conecte uma resistência 220 com uma perna em 8G e a outra em 4G.
8. Encaixe uma extremidade de um fio de jumper a 4H no Breadboard e a outra a 11 no Elegoo.
9. Conecte uma extremidade de um fio de jumper ao 9G e a outra ao 12Z (em qualquer lugar da linha azul [-] no Breadboard.
10. Coloque o chumbo longo (ânodo) do seu LED amarelo no pino 14J e o chumbo curto (cátodo) no pino 15J.
11. Fixe uma resistência 220 com uma perna em 14I e a outra em 10I.
12. Fixe uma extremidade de um fio de jumper a 10J no Breadboard e a outra a 10 no Elegoo.
13. Ligue uma extremidade de um fio de jumper ao 15I e a outra ao 18Z (em qualquer lugar da linha azul [-] no Breadboard.
14. Coloque o chumbo longo (ânodo) do seu LED vermelho no pino 21F e o cabo curto (cátodo) no pino 22F.
15. Ligue uma resistência 220 com uma perna em 17G e a outra em 21G.
16. Fixe uma extremidade de um fio de jumper a 17H no Breadboard e a outra a 9 no Elegoo.
17. Conecte uma extremidade de um fio de jumper a 22G e a outra a 25Z (em qualquer lugar na linha azul [-] ) no Breadboard.
18. Coloque o chumbo longo (ânodo) do seu LED verde no pino 14A e o chumbo curto (cátodo) no pino 15A.
19. Fixe uma resistência 220 com uma perna em 10B e a outra em 14B.
20. Fixe uma extremidade de um fio de jumper a 10C no Breadboard e a outra a 8 no Elegoo.
21. Coloque uma extremidade de um fio de jumper em 15B e a outra em 17X (em qualquer lugar na linha azul [-] ) no Breadboard.
22. Conecte os trilhos azuis com um fio de jumper
23. Conecte os trilhos [+] vermelhos com um fio de jumper
24. Conecte uma extremidade de um fio de jumper ao +5V no Elegoo e a outra em qualquer lugar em uma das linhas vermelhas.
25. Conecte uma extremidade de um fio de jumper ao GND no Elegoo e a outra em qualquer lugar em uma das linhas azuis.

## O Código

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

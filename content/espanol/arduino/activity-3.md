```markdown
---
title: "Actividad 3 - Joystick & LEDs"
draft: false
weight: 6
---

## Actividad 3 - Joystick + LEDs

![Texto alternativo: Diagrama de cableado para conectar Joystick y 5 LEDs](../img/act3_joy+led.png)

Combinemos la actividad 1 y la actividad 2. Controlaremos los LEDs basándonos en la entrada del joystick.

1. Conecta un extremo de un cable a GND en el joystick y el otro extremo a 7X en la placa de pruebas.
2. Conecta un extremo de un cable a +5V en el joystick y el otro extremo a 5W en la placa de pruebas.
3. Conecta un extremo de un cable a VRx en el joystick y el otro extremo a A0 en el Elegoo.
4. Conecta un extremo de un cable a VRy en el joystick y el otro extremo a GND en el Elegoo.
5. Conecta un extremo de un cable a SW en el joystick y el otro extremo al pin 2 en el Elegoo.
6. Conecta la pata larga (ánodo) de tu LED azul al pin 8F y la pata corta (cátodo) al pin 9F.
7. Conecta una resistencia de 220Ω con una pata en 8G y la otra en 4G.
8. Conecta un extremo de un cable a 4H en la placa de pruebas y el otro extremo al pin 11 del Elegoo.
9. Conecta un extremo de un cable a 9G y el otro a 12Z (cualquier lugar en la línea azul [-]) de la placa de pruebas.
10. Conecta la pata larga (ánodo) de tu LED amarillo al pin 14J y la pata corta (cátodo) al pin 15J.
11. Conecta una resistencia de 220Ω con una pata en 14I y la otra en 10I.
12. Conecta un extremo de un cable a 10J en la placa de pruebas y el otro extremo al pin 10 del Elegoo.
13. Conecta un extremo de un cable a 15I y el otro a 18Z (cualquier lugar en la línea azul [-]) de la placa de pruebas.
14. Conecta la pata larga (ánodo) de tu LED rojo al pin 21F y la pata corta (cátodo) al pin 22F.
15. Conecta una resistencia de 220Ω con una pata en 17G y la otra en 21G.
16. Conecta un extremo de un cable a 17H en la placa de pruebas y el otro extremo al pin 9 del Elegoo.
17. Conecta un extremo de un cable a 22G y el otro a 25Z (cualquier lugar en la línea azul [-]) de la placa de pruebas.
18. Conecta la pata larga (ánodo) de tu LED verde al pin 14A y la pata corta (cátodo) al pin 15A.
19. Conecta una resistencia de 220Ω con una pata en 10B y la otra en 14B.
20. Conecta un extremo de un cable a 10C en la placa de pruebas y el otro extremo al pin 8 del Elegoo.
21. Conecta un extremo de un cable a 15B y el otro a 17X (cualquier lugar en la línea azul [-]) de la placa de pruebas.
22. Conecta los rieles azules [-] juntos con un cable.
23. Conecta los rieles rojos [+] juntos con un cable.
24. Conecta un extremo de un cable al +5V del Elegoo y el otro a cualquier lugar en una de las líneas rojas [+].
25. Conecta un extremo de un cable al GND del Elegoo y el otro a cualquier lugar en una de las líneas azules [-].

## El Código

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
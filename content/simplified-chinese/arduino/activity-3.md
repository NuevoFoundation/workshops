```markdown
---
title: "Activity 3 - 摇杆 & LED灯"
draft: false
weight: 6
---

## 活动 3 - 摇杆 + LED灯

![Alt Text: 连接摇杆和5个LED的布线图](../img/act3_joy+led.png)

让我们把活动 1 和活动 2 结合起来。通过摇杆的输入来控制LED灯。
1. 将跳线的一端连接到摇杆的GND，另一端连接到面包板上的7X。
2. 将跳线的一端连接到摇杆的+5V，另一端连接到面包板上的5W。
3. 将跳线的一端连接到摇杆的VRx，另一端连接到Elegoo的A0。
4. 将跳线的一端连接到摇杆的VRy，另一端连接到Elegoo的GND。
5. 将跳线的一端连接到摇杆的SW，另一端连接到Elegoo的2。
6. 将蓝色LED的长引脚（阳极）连接到8F，短引脚（阴极）连接到9F。
7. 将一个220欧姆电阻的一个引脚连接到8G，另一个引脚连接到4G。
8. 将跳线的一端连接到面包板上的4H，另一端连接到Elegoo的11。
9. 将跳线的一端连接到9G，另一端连接到面包板上的12Z（蓝色[-]线中的任何位置）。
10. 将黄色LED的长引脚（阳极）连接到14J，短引脚（阴极）连接到15J。
11. 将一个220欧姆电阻的一个引脚连接到14I，另一个引脚连接到10I。
12. 将跳线的一端连接到面包板上的10J，另一端连接到Elegoo的10。
13. 将跳线的一端连接到15I，另一端连接到面包板上的18Z（蓝色[-]线中的任何位置）。
14. 将红色LED的长引脚（阳极）连接到21F，短引脚（阴极）连接到22F。
15. 将一个220欧姆电阻的一个引脚连接到17G，另一个引脚连接到21G。
16. 将跳线的一端连接到面包板上的17H，另一端连接到Elegoo的9。
17. 将跳线的一端连接到22G，另一端连接到面包板上的25Z（蓝色[-]线中的任何位置）。
18. 将绿色LED的长引脚（阳极）连接到14A，短引脚（阴极）连接到15A。
19. 将一个220欧姆电阻的一个引脚连接到10B，另一个引脚连接到14B。
20. 将跳线的一端连接到面包板上的10C，另一端连接到Elegoo的8。
21. 将跳线的一端连接到15B，另一端连接到面包板上的17X（蓝色[-]线中的任何位置）。
22. 用一个跳线连接两个蓝色[-]导轨。
23. 用一个跳线连接两个红色[+]导轨。
24. 将跳线的一端连接到Elegoo的+5V，另一端连接到红色[+]线上任一位置。
25. 将跳线的一端连接到Elegoo的GND，另一端连接到蓝色[-]线上任一位置。

## 代码

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
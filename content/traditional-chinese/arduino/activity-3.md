```yaml
---
title: "活動 3 - 搖桿與 LED"
draft: false
weight: 6
---

## 活動 3 - 搖桿與 LED

![說明圖：搖桿與 5 個 LED 的接線圖](../img/act3_joy+led.png)

讓我們將活動 1 和活動 2 結合起來。透過搖桿的輸入來控制 LED。
1. 將跳線的一端連接到搖桿的 GND，另一端連接到麵包板的 7X。
2. 將跳線的一端連接到搖桿的 +5V，另一端連接到麵包板的 5W。
3. 將跳線的一端連接到搖桿的 VRx，另一端連接到 Elegoo 的 A0。
4. 將跳線的一端連接到搖桿的 VRy，另一端連接到 Elegoo 的 GND。
5. 將跳線的一端連接到搖桿的 SW，另一端連接到 Elegoo 的 2。
6. 將藍色 LED 的長腳 (陽極) 插入 8F，短腳 (陰極) 插入 9F。
7. 將 220 歐姆電阻的一腳插入 8G，另一腳插入 4G。
8. 將跳線的一端連接到麵包板的 4H，另一端連接到 Elegoo 的 11。
9. 將跳線的一端連接到 9G，另一端連接到麵包板藍色 [-] 線的 12Z 任意位置。
10. 將黃色 LED 的長腳 (陽極) 插入 14J，短腳 (陰極) 插入 15J。
11. 將 220 歐姆電阻的一腳插入 14I，另一腳插入 10I。
12. 將跳線的一端連接到麵包板的 10J，另一端連接到 Elegoo 的 10。
13. 將跳線的一端連接到 15I，另一端連接到麵包板藍色 [-] 線的 18Z 任意位置。
14. 將紅色 LED 的長腳 (陽極) 插入 21F，短腳 (陰極) 插入 22F。
15. 將 220 歐姆電阻的一腳插入 17G，另一腳插入 21G。
16. 將跳線的一端連接到麵包板的 17H，另一端連接到 Elegoo 的 9。
17. 將跳線的一端連接到 22G，另一端連接到麵包板藍色 [-] 線的 25Z 任意位置。
18. 將綠色 LED 的長腳 (陽極) 插入 14A，短腳 (陰極) 插入 15A。
19. 將 220 歐姆電阻的一腳插入 10B，另一腳插入 14B。
20. 將跳線的一端連接到麵包板的 10C，另一端連接到 Elegoo 的 8。
21. 將跳線的一端連接到 15B，另一端連接到麵包板藍色 [-] 線的 17X 任意位置。
22. 使用跳線將藍色 [-] 軌道連接在一起。
23. 使用跳線將紅色 [+] 軌道連接在一起。
24. 將跳線的一端連接到 Elegoo 的 +5V，另一端連接到紅色 [+] 線的任意位置。
25. 將跳線的一端連接到 Elegoo 的 GND，另一端連接到藍色 [-] 線的任意位置。

## 程式碼

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
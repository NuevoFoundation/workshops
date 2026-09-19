---
title: "Arduino - 解答鍵"
date: 2024-07-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
此為 Arduino 光遊戲工作坊的教師參考資料。該工作坊引領學生使用 Arduino UNO 和 Elegoo 初學者套件完成四個硬體活動。所有代碼均包含在工作坊中，本解答鍵整合了完整解答、解釋主要概念，並標記了教師需注意的一個源代碼錯誤。
{{% /notice %}}

## 活動 1：閃爍 LED

### 連接總結

1. LED 長腳（正極）接至 25J，短腳（負極）接至藍色 [-] 軌
2. 220 歐姆電阻從 25H 接至紅色 [+] 軌
3. 跳線從紅色 [+] 軌接至 Arduino 的 5V 接口
4. 跳線從藍色 [-] 軌（31Z）接至 Arduino 的 GND 接口
5. 使用 USB 連接 Arduino

### 代碼

學生加載內建範例：**File > Examples > 01.Basics > Blink**

以下代碼為內建 Blink 範例的功能核心。學生加載的完整範例包含其他註解和歸屬信息。

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

### 主要概念

- `setup()` 在 Arduino 開機時執行一次
- `loop()` 持續地重複執行
- `pinMode()` 將引腳設置為 INPUT 或 OUTPUT
- `digitalWrite()` 將引腳設置為 HIGH（開啟）或 LOW（關閉）
- `delay(1000)` 暫停 1000 毫秒（1 秒）

### 額外挑戰解答

工作坊提問：「你可以更改什麼來修改閃爍的時間？」  
解答：更改 `delay(1000)` 中的數字。例如，`delay(500)` 會使 LED 閃爍速度加倍。1000 毫秒 = 1 秒，因此 10 分鐘 = 600000 毫秒。

## 活動 2：搖桿與串列輸出

### 連接總結

1. 搖桿 GND 接 Arduino GND
2. 搖桿 +5V 接 Arduino 5V
3. 搖桿 VRx 接類比引腳 A0
4. 搖桿 VRy 接類比引腳 A1
5. 搖桿 SW 接數位引腳 2
6. 使用 USB 連接 Arduino

### 代碼

```c++
//www.elegoo.com
//2016.12.09

// Arduino 引腳編號
const int SW_pin = 2; // 數位引腳連接至開關輸出
const int X_pin = A0; // 類比引腳連接至 X 輸出
const int Y_pin = A1; // 類比引腳連接至 Y 輸出

void setup() {
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(9600);
}

void loop() {
  Serial.print("Switch:  ");
  Serial.print(digitalRead(SW_pin));
  Serial.print("\n");
  Serial.print("X-axis: ");
  Serial.print(analogRead(X_pin));
  Serial.print("\n");
  Serial.print("Y-axis: ");
  Serial.println(analogRead(Y_pin));
  Serial.print("\n\n");
  delay(500);
}
```

### 主要概念

- `Serial.begin(9600)` 以 9600 波特率啟動串列通信
- `Serial.print()` 將文字傳送至 Arduino IDE 的串列監視器（點擊放大鏡圖示進入）
- `analogRead()` 從類比引腳讀取 0 至 1023 的數值
- `digitalRead()` 從數位引腳讀取 HIGH（1）或 LOW（0）
- `digitalWrite(SW_pin, HIGH)` 啟用第 2 號引腳的內部上拉電阻，所以按鈕未按下時讀取為 HIGH，按下時為 LOW
- 搖桿中心位置約為 X=490，Y=490

### 預期串列輸出

當搖桿處於中心位置時，學生應會看到接近以下的數值：

```
Switch:  1
X-axis: 490
Y-axis: 490
```

移動搖桿會改變 X 和 Y 的數值（範圍 0-1023）。按下搖桿按鈕會使開關從 1 變為 0。

## 活動 3：搖桿與 LED

### 連接總結

此活動結合搖桿與 4 個彩色 LED（藍色、黃色、紅色、綠色）以及第 5 個連接至引腳 7 的按鈕 LED。完整的連接分為工作坊的25個具體步驟，關鍵連接如下：

| 元件 | Arduino 引腳 |
|------|-------------|
| 搖桿 VRx | A0 |
| 搖桿 VRy | GND |
| 搖桿 SW | 數位引腳 2 |
| 搖桿 +5V | 麵包板紅色 [+] 軌 |
| 搖桿 GND | 麵包板藍色 [-] 軌 |
| 藍色 LED | 數位引腳 11 |
| 黃色 LED | 數位引腳 10 |
| 紅色 LED | 數位引腳 9 |
| 綠色 LED | 數位引腳 8 |
| 按鈕 LED | 數位引腳 7 |

### 代碼

{{% notice warning %}}
**工作坊原始代碼錯誤：** 代碼使用了從未宣告的變數 `joyX` 和 `joyY`。原始代碼無法編譯。教師需在 `setup()` 函數之前加入下方的失蹤變數宣告以修復錯誤。

此外，工作坊的第四步將 VRy
---
title: "micro:bit 距離檢測器 - 答案解析"
date: 2024-07-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
這是一份給教師參考的 micro:bit 無線社交距離工作坊資料。該工作坊引導學生使用 MakeCode Blocks 一步步構建一個完整的項目。本答案解析提供了最終完整的代碼（包括 Blocks 描述和 JavaScript 程式碼）、關鍵概念解釋，以及故障排除指導。
{{% /notice %}}

## 完整解決方案

### 最終代碼 (JavaScript 等效)

以下是學生在所有工作坊活動中最終構建完成的完整程式碼：

```javascript
radio.onReceivedNumber(function (receivedNumber) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (strength > -67) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let strength = 0
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
```

### 最終代碼 (Blocks 描述)

提供給教師偏好以基於積木方式查看完整程式碼：

| 區塊位置            | 區塊              | 設置         |
|--------------------|-----------------|------------|
| **on start**      | `radio set group` | 群組: `1`   |
| **forever**       | `radio send number` | 數字: `0`    |
| **on radio received (receivedNumber)** | `set strength to` | `received packet signal strength` |
| （位於接收區塊內） | `if strength > -67 then` | 顯示圖標: 難過的表情 |
| （否則）          | `else`              | 顯示圖標: 開心的表情 |

**功能描述：** 每個 micro:bit 都會持續廣播無線電信號。當它接收到來自另一個 micro:bit 的信號後，會檢查信號強度。如果信號強度大於 -67 dBm（意即 micro:bit 之間的距離小於 6 英尺 / 2 米），將顯示難過的表情。如果信號弱於該值（意味著距離較遠），則顯示一個開心的表情。

## 詳細步驟分解

### 第 1 步：認識 micro:bit (第 1 頁)

這是介紹步驟，沒有編寫程式碼。關鍵要點：

- micro:bit 功能：25 顆 LED、2 個按鈕、IO 接腳、指南針、加速計、藍牙
- 學生需要拆封硬體：micro:bit、2 節電池、USB 線、電池盒
- **模擬器：** 沒有硬體的學生可以使用 MakeCode 模擬器，兩個虛擬 micro:bit 並排解釋。無線電天線（黃色弦波）可點擊並拖動以模擬信號強度變化。
- 模擬器信號強度閾值：`strength > -67` 會觸發難過的表情顯示

### 第 2 步：廣播信號 (第 2 頁)

**本步驟添加的程式碼：**

```javascript
// on start
radio.setGroup(1)

// forever
basic.forever(function () {
    radio.sendNumber(0)
})
```

**關鍵概念：**
- `radio set group 1` 放在 "on start" 區塊內，它在 micro:bit 開機時運行一次
- 所有 micro:bit 都必須使用相同的群組號才能互相通信
- `radio send number 0` 放在 "forever" 區塊內以持續進行廣播
- 此項目中實際發送的數字（0）並不重要；我們只關注信號強度

### 第 3 步：接收消息 (第 3 頁)

**本步驟添加的程式碼：**

```javascript
radio.onReceivedNumber(function (receivedNumber) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
let strength = 0
```

**關鍵概念：**
- `on radio received` 區塊會在 micro:bit 收到來自另一個 micro:bit 的數字時觸發
- 建立一個名為 `strength` 的**變數**來儲存接收到的信號強度
- `received packet signal strength` 提供了 RSSI（接收信號強度指標）值
- 變數是用於存儲資訊的命名容器，稍後可以使用和更新

### 第 4 步：解釋信號強度 (第 4 頁)

**本步驟添加的程式碼：**

```javascript
if (strength > -67) {
    // 距離過近 - 小於 6 英尺
} else {
    // 安全距離 - 大於 6 英尺
}
```

**關鍵概念：**
- -67 dBm 是測定的 micro:bit 藍牙在距離 6 英尺（2 公尺）時的信號強度
- 信號強度越接近 0 = 信號越強 = 距離越近
- 信號強度越遠離 0（值更負）= 信號越弱 = 距離越遠
- `strength > -67` 表示設備之間的距離**小於** 6 英尺（信號強度比閾值更強）

**常見學生問題：** 「為什麼是 -67？」因為 -67 dBm 是測量兩個 micro:bit 在 6 英尺距離時的信號功率。不同藍牙收發器在相同距離下可能存在不同的值。

### 第 5 步：顯示圖標 (第 5 頁)

**本步驟添加的程式碼：**

```javascript
if (strength > -67) {
    basic.showIcon(IconNames.Sad)    // 距離過近
} else {
    basic.showIcon(IconNames.Happy)  // 安全距離
}
```

**關鍵概念：**
- 難過的表
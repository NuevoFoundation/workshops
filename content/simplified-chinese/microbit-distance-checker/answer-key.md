---
title: "micro:bit 距离检测器 - 答案键"
date: 2024-07-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
这是 micro:bit 无线社交距离工作坊的教师参考。工作坊通过使用 MakeCode Blocks 逐步指导学生完成一个完整的项目。该答案键提供了最终完整代码（包括 Blocks 描述和 JavaScript）、关键概念讲解以及故障排除指导。
{{% /notice %}}

## 完整解决方案

### 最终代码（JavaScript 等价版）

这是学生在工作坊各活动中构建的完整程序：

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

### 最终代码（Blocks 描述）

适合希望按照块状视图教学的教师使用：

| 块位置         | 块                   | 设置          |
|---------------|---------------------|--------------|
| **on start**  | `radio set group`  | Group: `1`   |
| **forever**   | `radio send number`| Number: `0`  |
| **on radio received (receivedNumber)** | `set strength to` | `received packet signal strength` |
| (接收到的块内) | `if strength > -67 then` | 显示图标：伤心脸 |
| (否则)        | `else`             | 显示图标：开心脸 |

**功能说明：** 每个 micro:bit 会持续发送一个广播信号。当它接收到另一个 micro:bit 的信号时，会检查信号强度。如果信号强于 -67 dBm（表示 micro:bits 相距小于 6 英尺 / 2 米），它会显示一个伤心脸。如果信号较弱（表示它们间距足够远），则显示一个开心脸。

## 分步讲解

### 第 1 步：了解 micro:bit（第 1 页）

这是介绍页面，无需编写代码。关键点：

- micro:bit 的特点：25 个 LED、2 个按钮、IO 引脚、指南针、加速度计、蓝牙
- 学生拆开硬件：micro:bit、2 节电池、USB 线、带电池的电池盒
- **模拟器：** 未获取硬件的学生可以使用 MakeCode 模拟器，其中包含两个虚拟 micro:bit 并排显示。可以单击并拖动黄色方波（天线）来模拟信号强度的变化。
- 模拟器信号强度阈值：`strength > -67` 会触发显示伤心脸

### 第 2 步：发送广播信号（第 2 页）

**该步骤新增的代码：**

```javascript
// on start
radio.setGroup(1)

// forever
basic.forever(function () {
    radio.sendNumber(0)
})
```

**关键概念：**
- `radio set group 1` 放在“on start”块中，使其在 micro:bit 开启时运行一次
- 所有 micro:bit 必须使用相同的组号才能通信
- `radio send number 0` 放在“forever”块中以持续广播信号
- 本项目中发送的实际数字（0）无关紧要，我们只关心信号强度

### 第 3 步：接收消息（第 3 页）

**该步骤新增的代码：**

```javascript
radio.onReceivedNumber(function (receivedNumber) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
let strength = 0
```

**关键概念：**
- `on radio received` 块每次从另一个 micro:bit 接收数字时触发
- 使用一个名为 `strength` 的**变量**来存储接收到的信号强度
- `received packet signal strength` 返回 RSSI（接收信号强度指示）值
- 变量是存储信息的命名容器，可供后续使用和更新

### 第 4 步：解释信号强度（第 4 页）

**该步骤新增的代码：**

```javascript
if (strength > -67) {
    // 太近 - 少于 6 英尺
} else {
    // 安全距离 - 超过 6 英尺
}
```

**关键概念：**
- -67 dBm 是微比特蓝牙在 6 英尺（2 米）距离时的预测信号强度
- 信号强度越接近 0 = 信号越强 = 距离越近
- 信号强度越远离 0（更负值）= 信号越弱 = 距离越远
- `strength > -67` 表示设备距离**小于** 6 英尺（信号强于阈值）

**常见学生问题：** “为什么是 -67？”因为测量发现，两只 micro:bit 相距 6 英尺时信号强度为 -67 dBm。不同的蓝牙电台在相同距离可能有不同的值。

### 第 5 步：点亮显示（第 5 页）

**该步骤新增的代码：**

```javascript
if (strength > -67) {
    basic.showIcon(IconNames.Sad)    // 太近
} else {
    basic.showIcon(IconNames.Happy)  // 安全距离
}
```

**关键概念：**
- 伤心脸 = 太近（少于 6 英尺）
- 开心脸 = 安全距离（6 英尺或以上）
- 图标可以在 MakeCode 的 Basic 部分找到

有关最终块状代码的视觉参考，请参见[点亮显示](../light-it-up)页面末尾的截图。

### 第 6 步：下载代码（第 6 页）

无需新增代码。本页内容包括：

1. **配对：** USB 连接，点击“...”按钮，选择“Pair device”，选择“BBC micro:bit CMSIS-DAP”，然后点击“Connect”
2. **下载：** 再次点击“...”，选择“Download to micro:bit”，等待“Download complete”弹出完成提示
3. 学生只需配对一次

## 故障排除

| 问题                     | 原因                | 解决方案                                      |
|--------------------------|---------------------|---------------------------------------------|
| Micro:bit 之间无法通信
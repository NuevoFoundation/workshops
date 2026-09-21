```markdown
---
title: "Micro:Bit - 答案参考"
date: 2026-04-28T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
这是微型:Bit工作坊的教师参考指南。该工作坊主要是带有嵌入式代码示例的引导式教程，而非填空练习。此答案参考汇总了所有关键概念、代码示例、教程成果以及“轮到你”的开放式部分中可能的示例项目。
{{% /notice %}}

## JavaScript基础参考

### 变量和数据类型

工作坊介绍了五种数据类型。以下是带示例的总结：

| 数据类型 | 描述 | 示例 |
|-----------|-------------|---------|
| 整数 | 整数（无小数） | `var a = 5;` |
| 双精度数 | 带小数的数字 | `var x = 0.5;` |
| 字符串 | 文本（用双引号括起来） | `var company = "My company";` |
| 字符 | 单个字母（用单引号括起来） | `var letter = 'A';` |
| 布尔值 | 真或假的值 | `var codingIsCool = true;` |

**变量命名规则的关键点：**
- 可以包含字母、数字、下划线和美元符号
- 不能有空格
- 必须以字母开头

### 数学运算

| 运算 | 运算符 | 示例 | 结果 |
|-----------|----------|---------|--------|
| 加法 | `+` | `var c = 13 + 10;` | `c = 23` |
| 减法 | `-` | `var c = 15 - 10;` | `c = 5` |
| 乘法 | `*` | `var c = 2 * 5;` | `c = 10` |
| 除法 | `/` | `var c = 20 / 2;` | `c = 10` |
| 取余 | `%` | `var d = 10 % 2;` | `d = 0` |

**注意：**工作坊的代码示例显示为`c = a + b; // c = 25`，但13 + 10 = 23。这是原始工作坊中的一个错误。

**简写运算符：**
- `c += a;` 将`a`加到`c`上
- `c -= a;` 从`c`中减去`a`
- `c *= a;` 将`c`乘以`a`
- `c /= a;` 将`c`除以`a`
- `c++` 增加1，`c--` 减少1

**注意：**工作坊的除法示例注释显示为`c /= a; // c = 5`，但实际结果是`0.5`（10除以20）。教师需注意此差异。

### 打印语句

```javascript
// 在浏览器控制台显示（网页上不可见）
console.log("Hello!");

// 显示为弹出窗口
alert("Hello!");

// 带有输入框的弹出窗口——存储用户的回复
var userResponse = prompt("What is your name?");
```

### 条件语句

```javascript
var age = 10;
if (age < 18) {
  print("You're not an adult yet! :( ");
}
```

**注意：**工作坊在此示例中使用了`print()`，这并不是浏览器中标准的JavaScript。在MakeCode环境中，等效的是`basic.showString()`。在浏览器中建议使用`console.log()`或`alert()`。此外，工作坊源码中有注释错误：它说“如果年龄小于10”，但条件检查的是`age < 18`。

### 循环

```javascript
// while循环 - 从10开始倒计时
var count = 10;
while (count > 0) {
  alert(count);
  count--;
}

// for循环 - 从10开始倒计时
for (var i = 10; i > 0; i--) {
  alert(i);
}
```

**重要：**一个无限的`while (true)`循环会导致浏览器卡死。在微型:Bit上，`basic.forever()`是用于实现连续执行的安全等效方法。

**补充：**`break;`语句可以立即停止循环并将执行跳转到循环后的下一行代码。

## 微型:Bit设置

### 硬件概览

微型:Bit包括：
- 25个可编程LED（5×5网格）
- 2个可编程按钮（A和B）
- 物理连接引脚
- 运动传感器（加速度计和指南针）
- 无线通信（蓝牙和无线电）
- USB接口

### 连接到电脑

1. 使用USB线连接微型:Bit
2. 它会在文件资源管理器中显示为一个名为`MICROBIT`的驱动器
3. 加载程序：将`.hex`文件复制到MICROBIT驱动器（或右键单击 → 发送到 → MICROBIT）
4. 后面的黄色LED在下载代码时会闪烁

### MakeCode编辑器

编程环境位于 [makecode.microbit.org](https://makecode.microbit.org/)。学生可以在块视图和JavaScript视图之间切换。

## 教程成果

### 跳动的心形教程

学生按照MakeCode内置教程操作。预期结果如下：

```javascript
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
```

**功能描述：**在LED屏幕上交替显示大心形和小心形图标，形成类似心脏跳动的动画效果。

### 微型聊天教程

学生按照MakeCode内置教程操作。预期结果如下：

```javascript
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello")
    basic.showString("Hello")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Goodbye")
    basic.showString("Goodbye")
})
radio.setGroup(1)
```

**功能描述：**通过无线电通信在两个微型:Bit之间发送和接收文本消息。按钮A发送“Hello”，按钮B发送“Goodbye”。两个微型:Bit
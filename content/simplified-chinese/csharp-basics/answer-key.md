---
title: "C#: 基础知识 - 答案"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
以下是示例解答。许多挑战题有多个有效答案，尤其是那些要求你创建自己的示例的题目。如果你的解答能产生期望的输出结果，那么你的答案也是正确的！
{{% /notice %}}

## 变量和数据类型

### 帮助 Patrick 修复变量

Patrick 的代码中为变量分配了错误的数据类型。以下是修正后的声明：

```csharp
string bestFriend = "Minerva";
int numOfFriends = 4;
double GPA = 3.6;
char meaningOfLife = '$';
bool loveMusic = true;
```

**解释：** 每个变量都需要匹配存储值的数据类型：

| 变量 | 错误类型 | 正确类型 | 原因 |
|------|----------|----------|------|
| `bestFriend` | `int` | `string` | `"Minerva"` 是文本，不是数字 |
| `numOfFriends` | `bool` | `int` | `4` 是整数，不是布尔值 |
| `GPA` | `string` | `double` | `3.6` 是小数，不是文本 |
| `meaningOfLife` | `double` | `char` | `'$'` 是单个字符，不是小数 |
| `loveMusic` | `char` | `bool` | `true` 是布尔值，不是字符 |

输出：
```
你修好了这个代码！
```

## 运算符

### 考试统计

给定分数：Patrick (88)，Tom (89)，Mary (95)，Chris (84)，Jen (92)：

```csharp
// 1. 声明学生成绩变量
int patrickGrade = 88;
int tomGrade = 89;
int maryGrade = 95;
int chrisGrade = 84;
int jenGrade = 92;

// 2. 计算班级平均分
average = (patrickGrade + tomGrade + maryGrade + chrisGrade + jenGrade) / 5.0;

// 3. 使用关系运算符进行比较
bool over60 = average > 60;
bool over70 = average > 70;
bool over80 = average > 80;
bool over90 = average > 90;
```

{{% notice tip %}}
我们用 `5.0` 而不是 `5` 来进行除法运算，以获得小数结果。在 C# 中，两个整数相除只会返回整数（余数将被舍弃）。使用 `5.0` 确保我们能得到准确的平均值。
{{% /notice %}}

输出：
```
---------------------------
     音乐成绩报告          
---------------------------

学生成绩:
- Patrick: 88
- Tom: 89
- Mary: 95
- Chris: 84
- Jen: 92

班级平均分: 89.6
- 平均分超过60: True
- 平均分超过70: True
- 平均分超过80: True
- 平均分超过90: False
```

## 控制结构

### If语句：Patrick 的问候

填写布尔表达式，让 Patrick 根据小时数说出正确的问候语：

```csharp
int currentHour = 10; // 更改此值以测试不同的小时数 (0-23)

if (currentHour < 12)
{
    Console.WriteLine("早上好");
}
else if (currentHour < 20)
{
    Console.WriteLine("下午好");
}
else
{
    Console.WriteLine("晚上好");
}
```

**工作原理：**
- 小时 0-11: `currentHour < 12` 为 `true` → 输出 "早上好"
- 小时 12-19: `currentHour < 12` 为 `false`，但 `currentHour < 20` 为 `true` → 输出 "下午好"
- 小时 20-23: 两个条件均为 `false` → 进入 `else` → 输出 "晚上好"

### For循环：计算 1 到 100 的和

将 while 循环转换为 for 循环，计算 1 + 2 + 3 + ... + 100 的和：

```csharp
int total = 0;
for (int num = 1; num <= 100; num = num + 1)
{
    total = total + num;
}
Console.WriteLine("通过 for 循环计算的答案: " + total);
```

输出：
```
通过 for 循环计算的答案: 5050
```

{{% notice tip %}}
答案是 5050。据说数学家卡尔·弗里德里希·高斯小时候就发现了这个规律，他注意到 1 + 100 = 101，2 + 99 = 101，依此类推——一共是 50 对 101，相加得 5050！
{{% /notice %}}

## 方法

### 数一下金字塔

编写一个方法，计算具有 `n` 层的平方数金字塔中的珠子总数。第 1 层有 1×1 = 1 个珠子，第 2 层有 2×2 = 4 个珠子，第 3 层有 3×3 = 9 个珠子，依此类推。

```csharp
public static int pyramidCount(int levels)
{
    int total = 0;
    for (int i = 1; i <= levels; i++)
    {
        total = total + (i * i);
    }
    return total;
}
```

**工作原理：** 该方法循环遍历从 1 到 `levels` 的每一层，将层数的平方（`i * i`）累加到总数中。

示例值：

| 层数 | 计算 | 总数 |
|------|------|------|
| 1 | 1×1 | 1 |
| 2 | 1 + 4 | 5 |
| 3 | 1 + 4 + 9 | 14 |
| 4 | 1 + 4 + 9 + 16 | 30 |

输出：
```
恭喜你！挑战解答成功！
```

## 类和对象

### 构建 Bird 类

以下是完整的 `Bird` 类，包括所有字段、构造函数和方法：

```csharp
public class Bird
{
    // 第1步：声明私有字段
    private string species;
    private string name;
    private string hobby;
    private int age;
    private bool loveMusic;

    // 第2步：构造函数
    public Bird(string speciesInput, string name
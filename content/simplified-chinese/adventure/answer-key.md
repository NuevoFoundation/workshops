```yaml
---
title: "选择你的冒险任务 - 答案解析"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
这个工作坊充满创意——每个学生的故事都会有所不同！本答案解析展示了基于工作坊中 Nuvi 的故事创建完成的一个完整示例，此外还有一个代码模板，供教师在帮助学生构建自己冒险故事时参考。
{{% /notice %}}

## 使用的关键概念

| 概念          | Python代码               | 在故事中的用途     |
|--------------|-----------------------|----------------|
| 输出文本       | `print("text")`      | 向读者讲述故事     |
| 获取用户输入    | `input("question")`  | 让读者进行选择     |
| 存储到变量中    | `choice = input(...)` | 记住读者的选择     |
| 条件决策       | `if` / `else`        | 根据选择改变故事情节 |

## Nuvi 的完整冒险

以下是基于工作坊中 Nuvi 的故事板实现的一个完整示例：

```python
# Nuvi 的选择自己冒险游戏

print("=" * 40)
print("Nuvi 的冒险!")
print("=" * 40)
print()
print("Nuvi 刚刚完成了学校的机器人练习。")
print("是时候回家了!")
print()

# 选择 1: 如何回家
choice1 = input("Nuvi 应该步行还是骑自行车回家？输入 'walk' 或 'bike': ")

if choice1 == "walk":
    print()
    print("Nuvi 决定步行回家。")
    print("途中，Nuvi遇到了一只可爱的小狗！")
    print("Nuvi揉了揉小狗，然后继续步行。")
    print("Nuvi 回家时心情愉悦。")
elif choice1 == "bike":
    print()
    print("Nuvi 跳上自行车骑回家。")
    print("微风拂过好舒服！Nuvi 骑得飞快。")
    print("Nuvi 以创纪录的速度到达了家！")
else:
    print()
    print("Nuvi 无法做决定，只好选择步行回家。")

print()
print("Nuvi 最终到家了！一些朋友在外面。")
print()

# 选择 2: 和朋友们做什么
choice2 = input("Nuvi 应该和朋友踢足球还是游泳？输入 'soccer' 或 'swim': ")

if choice2 == "soccer":
    print()
    print("Nuvi 和朋友们在公园里踢足球！")
    print("Nuvi 打进了制胜的一球！")
    print("大家欢呼起来！真是美好的一天！")
elif choice2 == "swim":
    print()
    print("Nuvi 和朋友们去了游泳池！")
    print("他们在水里嬉戏玩耍，度过了愉快的时光。")
    print("Nuvi 做了一个炸弹式跳水！哗啦！")
else:
    print()
    print("Nuvi 决定只是和朋友们闲聊而已。")

print()
print("多么棒的一天！结束。")
```

**示例输出 (用户选择 "walk" 然后选择 "soccer"):**
```
========================================
Nuvi 的冒险!
========================================

Nuvi 刚刚完成了学校的机器人练习。
是时候回家了！

Nuvi 应该步行还是骑自行车回家？输入 'walk' 或 'bike': walk

Nuvi 决定步行回家。
途中，Nuvi遇到了一只可爱的小狗！
Nuvi揉了揉小狗，然后继续步行。
Nuvi 回家时心情愉悦。

Nuvi 最终到家了！一些朋友在外面。

Nuvi 应该和朋友踢足球还是游泳？输入 'soccer' 或 'swim': soccer

Nuvi 和朋友们在公园里踢足球！
Nuvi 打进了制胜的一球！
大家欢呼起来！真是美好的一天！

多么棒的一天！结束。
```

## 给学生的代码模板

学生可以使用此模板作为创建自己故事的起点：

```python
# 我的选择自己冒险游戏
# 把引号中的文本替换成你的故事！

print("欢迎来到我的冒险游戏！")
print()

# 讲述故事的开头
print("你正在 [描述故事的场景]。")
print("[发生了什么，让冒险开始]。")
print()

# 第一个选择
choice1 = input("[向读者提出一个选择的问题]: ")

if choice1 == "[选项1]":
    print("[如果选择选项1会发生什么]")
elif choice1 == "[选项2]":
    print("[如果选择选项2会发生什么]")
else:
    print("[如果输入与选项不符会发生什么]")

print()

# 第二个选择
choice2 = input("[向读者提出另一个选择的问题]: ")

if choice2 == "[选项A]":
    print("[如果选择选项A会发生什么]")
elif choice2 == "[选项B]":
    print("[如果选择选项B会发生什么]")
else:
    print("[如果输入与选项不符会发生什么]")

print()
print("结束！")
```

{{% notice tip %}}
**常见的学生问题及解决方法:**

**"我的 if 语句从来不会匹配！"**
- 确保比较值和用户输入完全一致。"Walk" 和 "walk" 不一样。技巧：使用 `.lower()` 来处理大小写问题：`if choice1.lower() == "walk":`

**"我如何添加更多选择？"**
- 可以在 if/else 语句中嵌套更多分支路径，或者添加更多的 `elif` 选项。每一个选择都会创建故事的新分支。

**"我如何让故事更长？"**
- 在选择之间添加更多的 `print()` 语句来扩展故事。你也可以使用相同的 `input()` 和 `if/else` 模式添加第三或第四个选择。
{{% /notice %}}

## 故事板与代码映射

| 故事板元素       | 代码概念            |
|----------------|----------------|
| 读者看到的故事文本 | `print("...")`    |
| 读者做出决定     | `choice = input("...")` |
| 根据决定改变情节   | `if` / `elif` / `else` |
| 将文本与变量结合
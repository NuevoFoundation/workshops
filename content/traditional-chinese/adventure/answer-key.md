---
title: "選擇您自己的冒險 - 答案鍵"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
此工作坊充滿創意——每位學生的故事都會不同！這個答案鍵展示了一個基於工作坊中Nuvi的故事的完整範例，以及供教師參考的程式碼模板，以幫助學生結構化自己的冒險故事。
{{% /notice %}}

## 使用的核心概念

| 概念 | Python 程式碼 | 故事中的用途 |
|---------|------------|---------------------|
| 打印文字 | `print("文字")` | 將故事告訴讀者 |
| 獲取使用者輸入 | `input("問題")` | 讓讀者進行選擇 |
| 儲存到變數 | `choice = input(...)` | 記住讀者的選擇 |
| 做出決策 | `if` / `else` | 根據選擇更改故事內容 |

## Nuvi的完整冒險故事

這是基於工作坊中Nuvi的故事板的完整範例：

```python
# Nuvi的選擇您自己的冒險遊戲

print("=" * 40)
print("Nuvi的冒險！")
print("=" * 40)
print()
print("Nuvi剛結束學校的機器人學習練習。")
print("現在是回家的時間！")
print()

# 選擇1：如何回家
choice1 = input("Nuvi應該步行還是騎腳踏車回家？輸入'walk'或'bike': ")

if choice1 == "walk":
    print()
    print("Nuvi決定步行回家。")
    print("在回家的路上，Nuvi看到了一隻可愛的小狗！")
    print("Nuvi摸了摸小狗，然後繼續步行回家。")
    print("Nuvi感到開心地到家了。")
elif choice1 == "bike":
    print()
    print("Nuvi跳上腳踏車，騎車回家。")
    print("微風感覺很好！Nuvi騎得非常快。")
    print("Nuvi以驚人的速度到達了家！")
else:
    print()
    print("Nuvi無法決定，所以最後選擇步行回家。")

print()
print("Nuvi終於到家了！幾個朋友在外面。")
print()

# 選擇2：和朋友一起做什麼
choice2 = input("Nuvi應該踢足球還是去游泳？輸入'soccer'或'swim': ")

if choice2 == "soccer":
    print()
    print("Nuvi和朋友們在公園玩足球！")
    print("Nuvi攻入了致勝的進球！")
    print("大家都在歡呼！今天真棒！")
elif choice2 == "swim":
    print()
    print("Nuvi和朋友們去泳池游泳！")
    print("他們玩得很開心，大量的嬉戲和潑水。")
    print("Nuvi跳水做了一個大水花！噗通！")
else:
    print()
    print("Nuvi決定只是和朋友們在外面閒坐聊天。")

print()
print("真是美好的一天！故事結束。")
```

**範例輸出（如果使用者選擇"walk"，然後選擇"soccer"）：**
```
========================================
Nuvi的冒險！
========================================

Nuvi剛結束學校的機器人學習練習。
現在是回家的時間！

Nuvi應該步行還是騎腳踏車回家？輸入'walk'或'bike': walk

Nuvi決定步行回家。
在回家的路上，Nuvi看到了一隻可愛的小狗！
Nuvi摸了摸小狗，然後繼續步行回家。
Nuvi感到開心地到家了。

Nuvi終於到家了！幾個朋友在外面。

Nuvi應該踢足球還是去游泳？輸入'soccer'或'swim': soccer

Nuvi和朋友們在公園玩足球！
Nuvi攻入了致勝的進球！
大家都在歡呼！今天真棒！

真是美好的一天！故事結束。
```

## 學生用程式碼模板

學生可以使用以下模板開始創作自己的故事：

```python
# 我的選擇您自己的冒險遊戲 
# 把引號中的文字替換成您自己的故事！

print("歡迎來到我的冒險遊戲！")
print()

# 敘述故事的開頭
print("你現在是[描述故事背景]。")
print("[發生了一些事，開始了冒險]。")
print()

# 第一次選擇
choice1 = input("[請讀者做出選擇]: ")

if choice1 == "[選擇1]":
    print("[當他們選擇選項1時發生的事情]")
elif choice1 == "[選擇2]":
    print("[當他們選擇選項2時發生的事情]")
else:
    print("[當他們輸入意外內容時會發生的情況]")

print()

# 第二次選擇
choice2 = input("[請讀者再做一次選擇]: ")

if choice2 == "[選擇A]":
    print("[當他們選擇選項A時發生的事情]")
elif choice2 == "[選擇B]":
    print("[當他們選擇選項B時發生的事情]")
else:
    print("[當他們輸入意外內容時會發生的情況]")

print()
print("故事結束！")
```

{{% notice tip %}}
**常見學生問題與解決方法：**

**“我的if語句從不匹配！”**
- 確保比較內容與使用者輸入完全匹配。"Walk"與"walk"是不同的。提示：使用`.lower()`來處理解大小寫問題：`if choice1.lower() == "walk":`

**“如何增加更多的選擇？”**
- 您可以在每個分支內再嵌套if/else語句以創建分支路徑，或者增加更多`elif`選項。每個選擇都能創建故事
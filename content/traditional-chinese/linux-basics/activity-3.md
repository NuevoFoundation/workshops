---
title: "Activity 3 - 探索當前目錄"
description: "使用 Linux 指令查看當前目錄的內容"
date: 2022-09-23
difficulties: ["intermediate"]
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/dSsed9cR9QI" title="Activity 3 - Explore Current Directory - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 如何探索目錄？

要查看當前目錄中的檔案，我們使用 `ls` 指令。它的含義是 "列出"。

試試看：

```
ls
```

![ls command](../images/03_ls-command.png?classes=border,shadow)

### 如何獲取目錄中檔案的更多資訊？

試試看：

```
ls -l
```
<img src="../images/../images/03_ls-l.png" height="500" alt="ls -l command"/>

上面指令中的 `-l` 參數表示以詳細格式列出資訊。

## 顯示的資訊是什麼？

讓我們逐步檢查上述範例中**Videos**目錄的第一行資訊，從左到右：

![ls -l command explained](../images/03_ls-l-numbers.png?classes=border,shadow)

1. <span style="color:green">綠色</span>：檔案的權限。第一個字元 `d` 表示 **Videos** 是一個目錄。如果是 `-` 則意味著 **Videos** 是一個檔案。
2. <span style="color:red">紅色</span>：此檔案的**連結數**。目錄 **Videos** 有 2 個連結。
3. <span style="color:purple">紫色</span>：擁有此檔案的使用者。在此例中用戶 `nuvi` 是 **Videos** 目錄的所有者。
4. <span style="color:white;background-color:#232b36">白色</span>：檔案所屬的群組。在這裡，目錄 **Videos** 屬於 `nuvi` 群組。
5. <span style="color:#ffc000">黃色</span>：檔案的大小（單位為**位元組**）。目錄 **Videos** 的大小為 4096 位元組。
6. <span style="color:#ed7d31">橙色</span>：檔案創建的日期和時間。
7. <span style="color:#2e75b6">藍色</span>：目錄的名稱。
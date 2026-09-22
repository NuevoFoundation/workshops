---
title: "Activity 5 - 安全的使用者權限"
description: "使用 Linux 指令保護您的文件"
date: 2022-09-23
difficulties: ["中階"]
weight: 8
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/D5Y6LH0mBi0" title="Activity 5 - Secure User Permissions - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        哎呀。我們的一些文件可能被修改了！讓我們來保護我們的筆記檔案 file1。我們不希望有駭客破壞這些文件！
    </div>
</div>

### 我們要如何限制訪問我們的文件？

透過為使用者設定文件的「權限」！

權限是電腦用來判斷誰可以訪問文件及對那些文件進行哪些操作的一種方式。

在 Linux 中，使用者可能會請求對文件進行三種常見的訪問操作：「讀取」、「寫入」或「執行」。

{{% notice note %}}

「讀取」權限表示使用者可以開啟並閱讀文件。「讀取」權限通常用 `r` 符號表示。

「寫入」權限表示使用者可以開啟並寫入文件，包括重新命名和將文件移至檔案系統的其他位置。「寫入」權限通常用 `w` 符號表示。

「執行」權限表示使用者可以嘗試像程式一樣執行該文件。「執行」權限通常用 `x` 符號表示。

{{% /notice %}}

### 但是我們如何了解文件是否足夠安全？

是否有我們目前學過的指令可以顯示文件的安全性？  
如果需要，可以回顧一下！

![ls -l 指令](../images/Act5.1.png?classes=border,shadow)

我們應該繼續使用這個指令來檢查權限是否已如預期更改。

---

### 那麼我們要如何使用權限保護文件呢？

```
chmod u=rwx g=rx o=x file1
```

`chmod` 是用來修改文件權限的指令（意思是「改變模式」），適用於以下三個不同群組的使用者：

- 文件的<b>使用者</b>及擁有者
- 文件相關的<b>群組</b>及群組成員
- 文件的<b>其他人</b>或任何其他人

這些群組可以被授予以下的權限：

- <b>讀取</b>
- <b>寫入</b>
- <b>執行</b>

---

### 自己試試看吧！

現在讓我們嘗試更改文件的權限。我們希望除了我們自己及我們的群組以外的任何人都無法訪問 `file1`。我們應該如何做到？

![chmod 指令](../images/Act5.2.png?classes=border,shadow)

#### 趣事：快捷方式！

`chmod` 也可以與簡單的數字命令一起使用。這些命令格式如下：

```
chmod 751 [插入文件名]
```

這些數值代表為使用者授予讀取、寫入及執行的權限。  
那麼其他兩個數值代表什麼權限呢？

| 數字 |        含義         |
| :--: | :-----------------: |
|  7   | 讀取 + 寫入 + 執行  |
|  6   |      讀取 + 寫入     |
|  5   |     讀取 + 執行      |
|  4   |        讀取         |
|  3   |   執行 + 寫入       |
|  2   |       寫入          |
|  1   |      執行           |
|  0   |     無權限          |
---
title: "活動 11 - 儲存並保護檔案"
description: "使用 Linux 指令壓縮與封存檔案。"
date: 2022-09-23
prereq: "無。"
difficulties: ["中級"]
weight: 14
---

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        非常感謝你幫助我們修好了我的機器！現在讓我們將所有東西打包成一個漂亮的包裹吧。
    </div>
</div>

### 保護你的檔案，避免再次被篡改

`tar` 是一個用於建立與解壓存檔案的指令。

{{% notice info %}}
**存檔檔案** 是一組封存檔案的集合。存檔檔案包含一個或多個檔案的壓縮數據。

`zip` 是一個用於壓縮一組檔案的指令。格式為：`zip [壓縮檔名稱] [要壓縮的檔名]`

{{% /notice %}}

`tar` 的格式為：`tar [檔案名稱]`。

| 標誌 (flags) | 功能                                   |
| :----------- | :----------------------------------- |
| -c           | 創建封存檔案                          |
| -x           | 解壓封存檔案                          |
| -f           | 以指定檔名建立封存檔案                |

使用 `tar` 保護你的 `files` 資料夾！你將需要創建一個名為 `files.tar.gz` 的封存檔案。

![tar 指令](../images/Act11.png?classes=border,shadow)
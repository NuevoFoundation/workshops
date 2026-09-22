```yaml
---
title: "活动 11 - 存储并保护文件"
description: "使用 Linux 命令压缩和归档文件。"
date: 2022-09-23
prereq: "无。"
difficulties: ["中级"]
weight: 14
---

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        非常感谢您帮我们修好了我的机器！现在让我们把所有东西打包成一个整齐的文件包吧。
    </div>
</div>

### 保护您的文件，以免再次被篡改

`tar` 是一个用于创建和提取归档文件的命令。

{{% notice info %}}
归档是多个文件的集合。归档文件包含一个或多个文件的压缩数据。

`zip` 是一个压缩文件集的命令。其格式为：`zip [zip 文件名] [需压缩的文件名]`

{{% /notice %}}

其格式为：`tar [文件名]`。

| 标志  | 用途                                |
| :---- | :---------------------------------- |
| -c    | 创建归档                            |
| -x    | 提取归档                            |
| -f    | 用指定文件名创建归档文件            |

使用 `tar` 来保护您的 `files` 目录！您需要创建一个名为 `files.tar.gz` 的归档文件。

![tar 命令](../images/Act11.png?classes=border,shadow)
```
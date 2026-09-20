```markdown
---
title: "格式化"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 5
---
在創建或修改工作坊時，您將使用標準的 Markdown 語法以及一些額外的自定義語法。本頁面將解釋如何使用特定語法來為工作坊添加格式。

## 格式化參考

- [標準 Markdown 速查表](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [使用 Shortcodes 的自定義格式選項](/guidelines/shortcodes/)

## 格式化範例

此主題包含許多選項可自定義您的網站外觀和風格。在以下部分，您可以找到多個使用範例，這些範例包括所需語法以及在頁面上顯示的實際效果。

### 警告框

#### 資訊

    {{</* alert theme="info" */>}}**這是**一條資訊警告{{</* /alert */>}}

{{< alert theme="info">}}**這是**一條資訊警告{{< /alert >}}

#### 成功

    {{</* alert theme="success" */>}}**成功了！** 這是成功的提示{{</* /alert */>}}

{{< alert theme="success" >}}**成功了！** 這是成功的提示{{< /alert >}}

#### 警告

    {{</* alert theme="warning" */>}}**小心** 這是一條警告{{</* /alert */>}}

{{< alert theme="warning" >}}**小心** 這是一條警告{{< /alert >}}

#### 危險

    {{</* alert theme="danger" */>}}**注意！** 這是一條危險警告{{</* /alert */>}}

{{< alert theme="danger" >}}**注意！** 這是一條危險警告{{< /alert >}}

### 按鈕

    {{</* button href="https://nuevofoundation.org" */>}} 前往 Nuevo Foundation {{</* /button */>}}

{{<button href="https://google.com" >}} 前往 Nuevo Foundation {{< /button >}}

#### 成功按鈕

    {{</* button href="https://nuevofoundation.org" theme="success" */>}} 成功 {{</* /button */>}}

{{<button href="https://google.com" theme="success">}} 成功 {{< /button >}}

#### 資訊按鈕

    {{</* button href="https://nuevofoundation.org" theme="info" */>}} 資訊 {{</* /button */>}}

{{<button href="https://google.com" theme="info">}} 資訊 {{< /button >}}

#### 警告按鈕

    {{</* button href="https://nuevofoundation.org" theme="warning" */>}} 警告 {{</* /button */>}}

{{<button href="https://google.com" theme="warning">}} 警告 {{< /button >}}

#### 危險按鈕

    {{</* button href="https://nuevofoundation.org" theme="danger" */>}} 危險 {{</* /button */>}}

{{<button href="https://google.com" theme="danger">}} 危險 {{< /button >}}

#### 預設按鈕

    {{</* button href="https://nuevofoundation.org" theme="default" */>}} 預設 {{</* /button */>}}

{{<button href="https://google.com" theme="default">}} 預設 {{< /button >}}

### 展開

    {{</*expand "點擊此處展開！"*/>}}
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    {{</* /expand*/>}}

{{< expand "點擊此處展開！" >}}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{{< /expand >}}

### 通告

#### 注意通告

    {{</* notice note */>}}
    這是一個注意通告
    {{</* /notice */>}}

{{< notice note >}}
這是一個注意通告
{{< /notice >}}

#### 資訊通告

    {{</* notice info */>}}
    這是一條資訊通告
    {{</* /notice */>}}

{{< notice info >}}
這是一條資訊通告
{{< /notice >}}

#### 提示通告

    {{</* notice tip */>}}
    這是一條提示
    {{</* /notice */>}}

{{< notice tip >}}
這是一條提示
{{< /notice >}}

#### 警告通告

    {{</* notice warning */>}}
    這是一條警告
    {{</* /notice */>}}

{{< notice warning >}}
這是一條警告
{{< /notice >}}

### 可用圖標範例

[完整列表請點此](/guidelines/shortcodes/icon)

|圖標|圖標名稱|使用範例|
|----|---------|-------------|
|{{< icon name="asterisk" size="large" >}}|asterisk|<code>{{&lt;icon name=&quot;asterisk&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="plus" size="large" >}}|plus|<code>{{&lt;icon name=&quot;plus&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="euro" size="large" >}}|euro|<code>{{&lt;icon name=&quot;euro&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="eur" size="large" >}}|eur|<code>{{&lt;icon name=&quot;eur&quot; size=&quot
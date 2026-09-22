```markdown
---
title: "格式化"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 5
---
在创建或修改课程时，您需要使用标准的Markdown语法，以及一些附加的自定义语法。此页面解释了在创建课程时用于添加特定格式的语法。

## 格式参考

- [标准 Markdown 速查表](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [使用短代码的自定义格式选项](/guidelines/shortcodes/)

## 格式示例

该主题包含许多用于自定义站点外观和风格的选项。以下是一些用法示例，展示了需要使用的语法以及在页面上实际显示的内容。

### 提示框

#### 信息提示

    {{</* alert theme="info" */>}}**This** is an info {{</* /alert */>}}

{{< alert theme="info">}}**This** 是一个信息提示{{< /alert >}}

#### 成功提示

    {{</* alert theme="success" */>}}**Yeahhh !** is a success{{</* /alert */>}}

{{< alert theme="success" >}}**Yeahhh !** 是一个成功提示{{< /alert >}}

#### 警告提示

    {{</* alert theme="warning" */>}}**Be careful** is a warning{{</* /alert */>}}

{{< alert theme="warning" >}}**Be careful** 是一个警告提示{{< /alert >}}

#### 危险提示

    {{</* alert theme="danger" */>}}**Beware !** is a danger{{</* /alert */>}}

{{< alert theme="danger" >}}**Beware !** 是一个危险提示{{< /alert >}}

### 按钮

    {{</* button href="https://nuevofoundation.org" */>}} go to Nuevo Foundation {{</* /button */>}}

{{<button href="https://google.com" >}} 前往 Nuevo Foundation {{< /button >}}

#### 成功按钮

    {{</* button href="https://nuevofoundation.org" theme="success" */>}} Success {{</* /button */>}}

{{<button href="https://google.com" theme="success">}} 成功 {{< /button >}}

#### 信息按钮

    {{</* button href="https://nuevofoundation.org" theme="info" */>}} Info {{</* /button */>}}

{{<button href="https://google.com" theme="info">}} 信息 {{< /button >}}

#### 警告按钮

    {{</* button href="https://nuevofoundation.org" theme="warning" */>}} Warning {{</* /button */>}}

{{<button href="https://google.com" theme="warning">}} 警告 {{< /button >}}

#### 危险按钮

    {{</* button href="https://nuevofoundation.org" theme="danger" */>}} Danger ! {{</* /button */>}}

{{<button href="https://google.com" theme="danger">}} 危险！ {{< /button >}}

#### 默认按钮

    {{</* button href="https://nuevofoundation.org" theme="default" */>}} Danger ! {{</* /button */>}}

{{<button href="https://google.com" theme="default">}} 默认 {{< /button >}}

### 展开

    {{</*expand "Click here to expand!"*/>}}
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    {{</* /expand*/>}}

{{< expand "点击此处展开！" >}}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{{< /expand >}}

### 通知

#### 注意通知

    {{</* notice note */>}}
    A notice disclaimer
    {{</* /notice */>}}

{{< notice note >}}
这是一个注意通知
{{< /notice >}}

#### 信息通知

    {{</* notice info */>}}
    An information disclaimer
    {{</* /notice */>}}

{{< notice info >}}
这是一个信息通知
{{< /notice >}}

#### 小提示通知

    {{</* notice tip */>}}
    A tip disclaimer
    {{</* /notice */>}}

{{< notice tip >}}
这是一个小提示通知
{{< /notice >}}

#### 警告通知

    {{</* notice warning */>}}
    An warning disclaimer
    {{</* /notice */>}}

{{< notice warning >}}
这是一个警告通知
{{< /notice >}}

### 示例可用的图标

[完整列表请查看此处](/guidelines/shortcodes/icon)

|图标|图标名称|示例用法|
|----|---------|-------------|
|{{< icon name="asterisk" size="large" >}}|asterisk|<code>{{&lt;icon name=&quot;asterisk&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="plus" size="large" >}}|plus|<code>{{&lt;icon name=&quot;plus&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="euro" size="large" >}}|euro|<code>{{&lt;icon name=&quot;euro&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="eur" size="large" >}}|eur|<code>{{&lt;icon name=&quot;eur&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="minus" size="large" >}}|minus|<code>{{&lt;icon name=&quot;minus&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="cloud" size="large" >}}|cloud|<code>{{&lt;icon name=&quot;cloud&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="envelope
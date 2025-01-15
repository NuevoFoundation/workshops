---
title: "포맷팅(Formatting)"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 5
---
워크숍을 새로 만들거나 수정할 때는 표준 마크다운(Markdown) 신텍스(syntax)와 일부 맞춤 신텍스(syntax)를 사용하여 작성합니다. 이 페이지는 워크숍에 특정 형식을 추가하기 위해 사용할 신텍스(syntax)를 설명합니다.

## 포맷 참조(Formatting Reference)

- [표준 마크다운(Markdown) 치트시트(Cheatsheet)](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [쇼트코드를 사용한 맞춤 형식 옵션(Custom Formatting Options using shortcodes)](/guidelines/shortcodes/)

## 포맷 예제(Formatting Examples)

이 테마에는 사이트의 모양과 느낌을 사용자 지정할 수 있는 다양한 옵션이 포함되어 있습니다. 아래에 신텍스(syntax) 예제와 해당 신텍스를 사용하게 되면 페이지에 실제로 표시되는 결과를 확인할 수 있습니다.

### 알림(Alerts)

#### 정보(Info)

    {{</* alert theme="info" */>}}**This** is an info {{</* /alert */>}}

{{< alert theme="info">}}**This** is an info{{< /alert >}}

#### 성공(Success)

    {{</* alert theme="success" */>}}**Yeahhh !** is a success{{</* /alert */>}}

{{< alert theme="success" >}}**Yeahhh !** is a success{{< /alert >}}

#### 경고(Warning)

    {{</* alert theme="warning" */>}}**Be careful** is a warning{{</* /alert */>}}

{{< alert theme="warning" >}}**Be careful** is a warning{{< /alert >}}

#### 위험(Danger)

    {{</* alert theme="danger" */>}}**Beware !** is a danger{{</* /alert */>}}

{{< alert theme="danger" >}}**Beware !** is a danger{{< /alert >}}

### 버튼(Buttons)

    {{</* button href="https://nuevofoundation.org" */>}} go to Nuevo Foundation {{</* /button */>}}

{{<button href="https://google.com" >}} go to Nuevo Foundation {{< /button >}}

#### 성공 버튼(Success Button)

    {{</* button href="https://nuevofoundation.org" theme="success" */>}} Success {{</* /button */>}}

{{<button href="https://google.com" theme="success">}} Success {{< /button >}}

#### 정보 버튼(Info Button)
    {{</* button href="https://nuevofoundation.org" theme="info" */>}} Info {{</* /button */>}}

{{<button href="https://google.com" theme="info">}} Info {{< /button >}}

#### 경고 버튼(Warning Button)

    {{</* button href="https://nuevofoundation.org" theme="warning" */>}} Warning {{</* /button */>}}

{{<button href="https://google.com" theme="warning">}} Warning {{< /button >}}

#### 위험 버튼(Danger Button)

    {{</* button href="https://nuevofoundation.org" theme="danger" */>}} Danger ! {{</* /button */>}}

{{<button href="https://google.com" theme="danger">}} Danger ! {{< /button >}}

#### 기본 버튼(Default Button)

    {{</* button href="https://nuevofoundation.org" theme="default" */>}} Danger ! {{</* /button */>}}

{{<button href="https://google.com" theme="default">}} Danger ! {{< /button >}}

### 확장(Expand)

    {{</*expand "Click here to expand!"*/>}}
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    {{</* /expand*/>}}

{{< expand "Click here to expand!" >}}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{{< /expand >}}

### 알림

#### 노트 알림(Note Notice)

    {{</* notice note */>}}
    A notice disclaimer
    {{</* /notice */>}}

{{< notice note >}}
A notice disclaimer
{{< /notice >}}

#### 정보 알림(Info Notice)

    {{</* notice info */>}}
    An information disclaimer
    {{</* /notice */>}}

{{< notice info >}}
An information disclaimer
{{< /notice >}}

#### 팁 알림(Tip Notice)

    {{</* notice tip */>}}
    A tip disclaimer
    {{</* /notice */>}}

{{< notice tip >}}
A tip disclaimer
{{< /notice >}}

#### 경고 알림(Warning Notice)

    {{</* notice warning */>}}
    An warning disclaimer
    {{</* /notice */>}}

{{< notice warning >}}
An warning disclaimer
{{< /notice >}}

### 아이콘 예제(Example icons available)

[Full list here](/guidelines/shortcodes/icon)

|Icon|Icon Name|Example Usage|
|----|---------|-------------|
|{{< icon name="asterisk" size="large" >}}|asterisk|<code>{{&lt;icon name=&quot;asterisk&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="plus" size="large" >}}|plus|<code>{{&lt;icon name=&quot;plus&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="euro" size="large" >}}|euro|<code>{{&lt;icon name=&quot;euro&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="eur" size="large" >}}|eur|<code>{{&lt;icon name=&quot;eur&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="minus" size="large" >}}|minus|<code>{{&lt;icon name=&quot;minus&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="cloud" size="large" >}}|cloud|<code>{{&lt;icon name=&quot;cloud&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="envelope" size="large" >}}|envelope|<code>{{&lt;icon name=&quot;envelope&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="pencil" size="large" >}}|pencil|<code>{{&lt;icon name=&quot;pencil&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="glass" size="large" >}}|glass|<code>{{&lt;icon name=&quot;glass&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="music" size="large" >}}|music|<code>{{&lt;icon name=&quot;music&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="search" size="large" >}}|search|<code>{{&lt;icon name=&quot;search&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="heart" size="large" >}}|heart|<code>{{&lt;icon name=&quot;heart&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="star" size="large" >}}|star|<code>{{&lt;icon name=&quot;star&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="star-empty" size="large" >}}|star-empty|<code>{{&lt;icon name=&quot;star-empty&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="user" size="large" >}}|user|<code>{{&lt;icon name=&quot;user&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="film" size="large" >}}|film|<code>{{&lt;icon name=&quot;film&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="th-large" size="large" >}}|th-large|<code>{{&lt;icon name=&quot;th-large&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="th" size="large" >}}|th|<code>{{&lt;icon name=&quot;th&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="th-list" size="large" >}}|th-list|<code>{{&lt;icon name=&quot;th-list&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="ok" size="large" >}}|ok|<code>{{&lt;icon name=&quot;ok&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="remove" size="large" >}}|remove|<code>{{&lt;icon name=&quot;remove&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="zoom-in" size="large" >}}|zoom-in|<code>{{&lt;icon name=&quot;zoom-in&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="zoom-out" size="large" >}}|zoom-out|<code>{{&lt;icon name=&quot;zoom-out&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="off" size="large" >}}|off|<code>{{&lt;icon name=&quot;off&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="signal" size="large" >}}|signal|<code>{{&lt;icon name=&quot;signal&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="cog" size="large" >}}|cog|<code>{{&lt;icon name=&quot;cog&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="trash" size="large" >}}|trash|<code>{{&lt;icon name=&quot;trash&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="home" size="large" >}}|home|<code>{{&lt;icon name=&quot;home&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="file" size="large" >}}|file|<code>{{&lt;icon name=&quot;file&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="time" size="large" >}}|time|<code>{{&lt;icon name=&quot;time&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="road" size="large" >}}|road|<code>{{&lt;icon name=&quot;road&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="download-alt" size="large" >}}|download-alt|<code>{{&lt;icon name=&quot;download-alt&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="download" size="large" >}}|download|<code>{{&lt;icon name=&quot;download&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="upload" size="large" >}}|upload|<code>{{&lt;icon name=&quot;upload&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="inbox" size="large" >}}|inbox|<code>{{&lt;icon name=&quot;inbox&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="play-circle" size="large" >}}|play-circle|<code>{{&lt;icon name=&quot;play-circle&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="repeat" size="large" >}}|repeat|<code>{{&lt;icon name=&quot;repeat&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="refresh" size="large" >}}|refresh|<code>{{&lt;icon name=&quot;refresh&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="list-alt" size="large" >}}|list-alt|<code>{{&lt;icon name=&quot;list-alt&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="lock" size="large" >}}|lock|<code>{{&lt;icon name=&quot;lock&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="flag" size="large" >}}|flag|<code>{{&lt;icon name=&quot;flag&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="headphones" size="large" >}}|headphones|<code>{{&lt;icon name=&quot;headphones&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="volume-off" size="large" >}}|volume-off|<code>{{&lt;icon name=&quot;volume-off&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="volume-down" size="large" >}}|volume-down|<code>{{&lt;icon name=&quot;volume-down&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="volume-up" size="large" >}}|volume-up|<code>{{&lt;icon name=&quot;volume-up&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="qrcode" size="large" >}}|qrcode|<code>{{&lt;icon name=&quot;qrcode&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="barcode" size="large" >}}|barcode|<code>{{&lt;icon name=&quot;barcode&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="tag" size="large" >}}|tag|<code>{{&lt;icon name=&quot;tag&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="tags" size="large" >}}|tags|<code>{{&lt;icon name=&quot;tags&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="book" size="large" >}}|book|<code>{{&lt;icon name=&quot;book&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="bookmark" size="large" >}}|bookmark|<code>{{&lt;icon name=&quot;bookmark&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="print" size="large" >}}|print|<code>{{&lt;icon name=&quot;print&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="camera" size="large" >}}|camera|<code>{{&lt;icon name=&quot;camera&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="font" size="large" >}}|font|<code>{{&lt;icon name=&quot;font&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="bold" size="large" >}}|bold|<code>{{&lt;icon name=&quot;bold&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="italic" size="large" >}}|italic|<code>{{&lt;icon name=&quot;italic&quot; size=&quot;large&quot;&gt;}}</code>|

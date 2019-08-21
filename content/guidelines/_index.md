---
title: "Workshop Contributor Guidelines"
date: 2019-07-22T14:08:32-07:00
draft: false
hidden: true
---

These guidelines are for creating or editing a Nuevo Foundation workshop.

## Coming Soon

Workshop guidance is a work in progress. In the meantime, visit the project readme.md for setup instructions.

## Formatting Reference

- [Standard Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Custom Formatting Options using shortcodes](shortcodes/)

## Formatting Examples

This theme includes a number of options to customize the look and feel of your site.

### Alerts

#### Info

    {{%/* alert theme="info" */%}}**this** is an info {{%/* /alert */%}}

{{% alert theme="info"%}}**this** is an info{{% /alert %}}

#### Success

    {{%/* alert theme="success" */%}}**Yeahhh !** is a success{{%/* /alert */%}}

{{% alert theme="success" %}}**Yeahhh !** is a success{{% /alert %}}

#### Warning

    {{%/* alert theme="warning" */%}}**Be carefull** is a warning{{%/* /alert */%}}

{{% alert theme="warning" %}}**Be carefull** is a warning{{% /alert %}}

#### Danger

    {{%/* alert theme="danger" */%}}**Beware !** is a danger{{%/* /alert */%}}

{{% alert theme="danger" %}}**Beware !** is a danger{{% /alert %}}

### Buttons

    {{</* button href="https://nuevofoundation.org" */>}} go to Nuevo Foundation {{</* /button */>}}

{{<button href="https://google.com" >}} go to Nuevo Foundation {{< /button >}}

#### Success Button

    {{</* button href="https://nuevofoundation.org" theme="success" */>}} Success {{</* /button */>}}

{{<button href="https://google.com" theme="success">}} Success {{< /button >}}

#### Info Button

    {{</* button href="https://nuevofoundation.org" theme="info" */>}} Info {{</* /button */>}}

{{<button href="https://google.com" theme="info">}} Info {{< /button >}}

#### Warning Button

    {{</* button href="https://nuevofoundation.org" theme="warning" */>}} Warning {{</* /button */>}}

{{<button href="https://google.com" theme="warning">}} Warning {{< /button >}}

#### Danger Button

    {{</* button href="https://nuevofoundation.org" theme="danger" */>}} Danger ! {{</* /button */>}}

{{<button href="https://google.com" theme="danger">}} Danger ! {{< /button >}}

#### Default Button

    {{</* button href="https://nuevofoundation.org" theme="default" */>}} Danger ! {{</* /button */>}}

{{<button href="https://google.com" theme="default">}} Danger ! {{< /button >}}

### Expand

    {{%/*expand*/%}}Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{{%/* /expand*/%}}

{{%expand%}}Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{{% /expand%}}

### Notices

#### Note Notice

    {{%/* notice note */%}}
    A notice disclaimer
    {{%/* /notice */%}}

renders as

{{% notice note %}}
A notice disclaimer
{{% /notice %}}

#### Info Notice

    {{%/* notice info */%}}
    An information disclaimer
    {{%/* /notice */%}}

renders as

{{% notice info %}}
An information disclaimer
{{% /notice %}}

#### Tip Notice

    {{%/* notice tip */%}}
    A tip disclaimer
    {{%/* /notice */%}}

{{% notice tip %}}
A tip disclaimer
{{% /notice %}}

#### Warning Notice

    {{%/* notice warning */%}}
    An warning disclaimer
    {{%/* /notice */%}}

renders as

{{% notice warning %}}
An warning disclaimer
{{% /notice %}}

### Example icons available

[Full list here](shortcodes/icon)

- {{< icon name="asterisk" size="large" >}} asterisk
- {{< icon name="plus" size="large" >}} plus
- {{< icon name="euro" size="large" >}} euro
- {{< icon name="eur" size="large" >}} eur
- {{< icon name="minus" size="large" >}} minus
- {{< icon name="cloud" size="large" >}} cloud
- {{< icon name="envelope" size="large" >}} envelope
- {{< icon name="pencil" size="large" >}} pencil
- {{< icon name="glass" size="large" >}} glass
- {{< icon name="music" size="large" >}} music
- {{< icon name="search" size="large" >}} search
- {{< icon name="heart" size="large" >}} heart
- {{< icon name="star" size="large" >}} star
- {{< icon name="star-empty" size="large" >}} star-empty
- {{< icon name="user" size="large" >}} user
- {{< icon name="film" size="large" >}} film
- {{< icon name="th-large" size="large" >}} th-large
- {{< icon name="th" size="large" >}} th
- {{< icon name="th-list" size="large" >}} th-list
- {{< icon name="ok" size="large" >}} ok
- {{< icon name="remove" size="large" >}} remove
- {{< icon name="zoom-in" size="large" >}} zoom-in
- {{< icon name="zoom-out" size="large" >}} zoom-out
- {{< icon name="off" size="large" >}} off
- {{< icon name="signal" size="large" >}} signal
- {{< icon name="cog" size="large" >}} cog
- {{< icon name="trash" size="large" >}} trash
- {{< icon name="home" size="large" >}} home
- {{< icon name="file" size="large" >}} file
- {{< icon name="time" size="large" >}} time
- {{< icon name="road" size="large" >}} road
- {{< icon name="download-alt" size="large" >}} download-alt
- {{< icon name="download" size="large" >}} download
- {{< icon name="upload" size="large" >}} upload
- {{< icon name="inbox" size="large" >}} inbox
- {{< icon name="play-circle" size="large" >}} play-circle
- {{< icon name="repeat" size="large" >}} repeat
- {{< icon name="refresh" size="large" >}} refresh
- {{< icon name="list-alt" size="large" >}} list-alt
- {{< icon name="lock" size="large" >}} lock
- {{< icon name="flag" size="large" >}} flag
- {{< icon name="headphones" size="large" >}} headphones
- {{< icon name="volume-off" size="large" >}} volume-off
- {{< icon name="volume-down" size="large" >}} volume-down
- {{< icon name="volume-up" size="large" >}} volume-up
- {{< icon name="qrcode" size="large" >}} qrcode
- {{< icon name="barcode" size="large" >}} barcode
- {{< icon name="tag" size="large" >}} tag
- {{< icon name="tags" size="large" >}} tags
- {{< icon name="book" size="large" >}} book
- {{< icon name="bookmark" size="large" >}} bookmark
- {{< icon name="print" size="large" >}} print
- {{< icon name="camera" size="large" >}} camera
- {{< icon name="font" size="large" >}} font
- {{< icon name="bold" size="large" >}} bold
- {{< icon name="italic" size="large" >}} italic

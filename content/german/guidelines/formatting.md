```markdown
---
title: "Formatierung"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 5
---
Beim Erstellen oder Ändern von Workshops schreiben Sie diese mithilfe der Standard-Markdown-Syntax sowie einiger zusätzlicher benutzerdefinierter Syntax. Diese Seite erläutert, welche Syntax verwendet wird, um spezifische Formate zu einem Workshop hinzuzufügen.

## Formatierungsreferenz

- [Standard Markdown Cheat-Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Benutzerdefinierte Formatierungsoptionen mit Shortcodes](/guidelines/shortcodes/)

## Formatierungsbeispiele

Dieses Theme enthält eine Reihe von Optionen, um das Erscheinungsbild Ihrer Website anzupassen. Unten finden Sie mehrere Beispiele für die Verwendung, die die zu verwendende Syntax sowie die Darstellung auf einer Seite enthalten, wenn Sie diese Syntax anwenden.

### Warnungen

#### Info

    {{</* alert theme="info" */>}}**Dies** ist eine Info {{</* /alert */>}}

{{< alert theme="info">}}**Dies** ist eine Info{{< /alert >}}

#### Erfolg

    {{</* alert theme="success" */>}}**Yeahhh !** ist ein Erfolg{{</* /alert */>}}

{{< alert theme="success" >}}**Yeahhh !** ist ein Erfolg{{< /alert >}}

#### Warnung

    {{</* alert theme="warning" */>}}**Sei vorsichtig** ist eine Warnung{{</* /alert */>}}

{{< alert theme="warning" >}}**Sei vorsichtig** ist eine Warnung{{< /alert >}}

#### Gefahr

    {{</* alert theme="danger" */>}}**Vorsicht!** ist eine Gefahr{{</* /alert */>}}

{{< alert theme="danger" >}}**Vorsicht!** ist eine Gefahr{{< /alert >}}

### Buttons

    {{</* button href="https://nuevofoundation.org" */>}} Gehe zur Nuevo Foundation {{</* /button */>}}

{{<button href="https://google.com" >}} Gehe zur Nuevo Foundation {{< /button >}}

#### Erfolg-Button

    {{</* button href="https://nuevofoundation.org" theme="success" */>}} Erfolg {{</* /button */>}}

{{<button href="https://google.com" theme="success">}} Erfolg {{< /button >}}

#### Info-Button

    {{</* button href="https://nuevofoundation.org" theme="info" */>}} Info {{</* /button */>}}

{{<button href="https://google.com" theme="info">}} Info {{< /button >}}

#### Warnung-Button

    {{</* button href="https://nuevofoundation.org" theme="warning" */>}} Warnung {{</* /button */>}}

{{<button href="https://google.com" theme="warning">}} Warnung {{< /button >}}

#### Gefahr-Button

    {{</* button href="https://nuevofoundation.org" theme="danger" */>}} Gefahr! {{</* /button */>}}

{{<button href="https://google.com" theme="danger">}} Gefahr! {{< /button >}}

#### Standard-Button

    {{</* button href="https://nuevofoundation.org" theme="default" */>}} Gefahr! {{</* /button */>}}

{{<button href="https://google.com" theme="default">}} Gefahr! {{< /button >}}

### Expandieren

    {{</*expand "Hier klicken, um zu expandieren!"*/>}}
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    {{</* /expand*/>}}

{{< expand "Hier klicken, um zu expandieren!" >}}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{{< /expand >}}

### Hinweise

#### Hinweis

    {{</* notice note */>}}
    Ein Hinweis-Disclaimer
    {{</* /notice */>}}

{{< notice note >}}
Ein Hinweis-Disclaimer
{{< /notice >}}

#### Info-Hinweis

    {{</* notice info */>}}
    Ein Informations-Disclaimer
    {{</* /notice */>}}

{{< notice info >}}
Ein Informations-Disclaimer
{{< /notice >}}

#### Tipp-Hinweis

    {{</* notice tip */>}}
    Ein Tipp-Disclaimer
    {{</* /notice */>}}

{{< notice tip >}}
Ein Tipp-Disclaimer
{{< /notice >}}

#### Warnhinweis

    {{</* notice warning */>}}
    Ein Warn-Disclaimer
    {{</* /notice */>}}

{{< notice warning >}}
Ein Warn-Disclaimer
{{< /notice >}}

### Verfügbare Beispiel-Icons

[Komplette Liste hier](/guidelines/shortcodes/icon)

|Icon|Icon-Name|Beispiel-Usage|
|----|---------|--------------|
|{{< icon name="asterisk" size="large" >}}|asterisk|<code>{{&lt;icon name=&quot;asterisk&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="plus" size="large" >}}|plus|<code>{{&lt;icon name=&quot;plus&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="euro" size="large" >}}|euro|<code>{{&lt;icon name=&quot;euro&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="eur" size="large" >}}|eur|<code>{{&lt;icon name=&quot;eur&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="minus" size="large" >}}|minus|<code>{{&lt;icon name=&quot;minus&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="cloud" size="large" >}}|cloud|<code>{{&lt;icon name=&quot;cloud&quot; size=&quot
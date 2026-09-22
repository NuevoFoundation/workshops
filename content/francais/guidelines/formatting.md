```markdown
---
title: "Mise en Forme"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 5
---
Lors de la création ou de la modification d'ateliers, vous les rédigez en utilisant la syntaxe Markdown standard, ainsi qu'une syntaxe personnalisée supplémentaire. Cette page explique quelle syntaxe utiliser pour ajouter des formats spécifiques à un atelier.

## Référence de Mise en Forme

- [Cheatsheet Markdown standard](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Options de mise en forme personnalisées à l'aide de shortcodes](/guidelines/shortcodes/)

## Exemples De Mise en Forme

Ce thème inclut un certain nombre d'options pour personnaliser l'apparence et le ressenti de votre site. Ci-dessous, vous trouverez plusieurs exemples d'utilisation, qui incluent la syntaxe à utiliser suivie de ce qui est réellement affiché sur une page lorsque vous utilisez cette syntaxe.

### Alertes

#### Info

    {{</* alert theme="info" */>}}**Ceci** est une info {{</* /alert */>}}

{{< alert theme="info">}}**Ceci** est une info{{< /alert >}}

#### Succès

    {{</* alert theme="success" */>}}**Yeahhh !** c'est un succès{{</* /alert */>}}

{{< alert theme="success" >}}**Yeahhh !** c'est un succès{{< /alert >}}

#### Avertissement

    {{</* alert theme="warning" */>}}**Attention** c'est un avertissement{{</* /alert */>}}

{{< alert theme="warning" >}}**Attention** c'est un avertissement{{< /alert >}}

#### Danger

    {{</* alert theme="danger" */>}}**Attention !** c'est un danger{{</* /alert */>}}

{{< alert theme="danger" >}}**Attention !** c'est un danger{{< /alert >}}

### Boutons

    {{</* button href="https://nuevofoundation.org" */>}} aller à Nuevo Foundation {{</* /button */>}}

{{<button href="https://google.com" >}} aller à Nuevo Foundation {{< /button >}}

#### Bouton de Succès

    {{</* button href="https://nuevofoundation.org" theme="success" */>}} Succès {{</* /button */>}}

{{<button href="https://google.com" theme="success">}} Succès {{< /button >}}

#### Bouton d'Info

    {{</* button href="https://nuevofoundation.org" theme="info" */>}} Information {{</* /button */>}}

{{<button href="https://google.com" theme="info">}} Information {{< /button >}}

#### Bouton d'Avertissement

    {{</* button href="https://nuevofoundation.org" theme="warning" */>}} Avertissement {{</* /button */>}}

{{<button href="https://google.com" theme="warning">}} Avertissement {{< /button >}}

#### Bouton de Danger

    {{</* button href="https://nuevofoundation.org" theme="danger" */>}} Danger ! {{</* /button */>}}

{{<button href="https://google.com" theme="danger">}} Danger ! {{< /button >}}

#### Bouton par Défaut

    {{</* button href="https://nuevofoundation.org" theme="default" */>}} Danger ! {{</* /button */>}}

{{<button href="https://google.com" theme="default">}} Danger ! {{< /button >}}

### Dépliables 

    {{</*expand "Cliquez ici pour dérouler !"*/>}}
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    {{</* /expand*/>}}

{{< expand "Cliquez ici pour dérouler !" >}}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{{< /expand >}}

### Avis

#### Avis d'Info

    {{</* notice note */>}}
    Un avertissement
    {{</* /notice */>}}

{{< notice note >}}
Un avertissement
{{< /notice >}}

#### Avis d'Information

    {{</* notice info */>}}
    Une information importante
    {{</* /notice */>}}

{{< notice info >}}
Une information importante
{{< /notice >}}

#### Avis Conseil

    {{</* notice tip */>}}
    Une astuce ou un conseil
    {{</* /notice */>}}

{{< notice tip >}}
Une astuce ou un conseil
{{< /notice >}}

#### Avis d'Avertissement

    {{</* notice warning */>}}
    Un avertissement important
    {{</* /notice */>}}

{{< notice warning >}}
Un avertissement important
{{< /notice >}}

### Exemples d'icônes disponibles

[Liste complète ici](/guidelines/shortcodes/icon)

|Icône|Nom de l'icône|Exemple d'utilisation|
|----|--------------|---------------------|
|{{< icon name="asterisk" size="large" >}}|asterisk|<code>{{&lt;icon name=&quot;asterisk&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="plus" size="large" >}}|plus|<code>{{&lt;icon name=&quot;plus&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="euro" size="large" >}}|euro|<code>{{&lt;icon name=&quot;euro&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="eur" size="large" >}}|eur|<code>{{&lt;icon name=&quot;eur&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="minus" size="large" >}}|minus|<code>{{&lt;icon name=&quot;minus&quot; size=&quot;large&quot;&gt;}}</code
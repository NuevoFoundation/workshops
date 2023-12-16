---
title: "Formatando"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 5
---
Ao criar ou modificar workshops, você os escreverá usando a sintaxe Markdown padrão, além de alguma sintaxe personalizada adicional. Esta página explica qual sintaxe usar para adicionar formatos específicos a um workshop.

## Referência de formatação

- [Folha de dicas do Markdown padrão](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Opções de formatação personalizada usando códigos de acesso](/guidelines/shortcodes/)

## Exemplos de formatação

Este tema inclui uma série de opções para personalizar a aparência do seu site. Abaixo, você pode encontrar vários exemplos de uso, que incluem a sintaxe a ser usada seguida pelo que realmente é mostrado em uma página quando você usa essa sintaxe.

### Alertas

#### Informações

    {{</* alert theme="info" */>}}**Isto** é uma informação {{</* /alert */>}}

{{< alert theme="info">}}**Isto** é uma informação{{< /alert >}}

#### Sucesso

    {{</* alert theme="success" */>}}**Yeahhh !** é um sucesso{{</* /alert */>}}

{{< alert theme="success" >}}**Yeahhh !** é um sucesso{{< /alert >}}

#### Aviso

    {{</* alert theme="warning" */>}}**Aviso** é um aviso{{</* /alert */>}}

{{< alert theme="warning" >}}**Aviso** é um aviso{{< /alert >}}

#### Perigo

    {{</* alert theme="danger" */>}}**Cuidado !** é um perigo{{</* /alert */>}}

{{< alert theme="danger" >}}**Cuidado !** é um perigo{{< /alert >}}

### Botões

    {{</* button href="https://nuevofoundation.org" */>}} ir para Nuevo Foundation {{</* /button */>}}

{{<button href="https://google.com" >}} ir para Nuevo Foundation {{< /button >}}

#### Botão de Sucesso

    {{</* button href="https://nuevofoundation.org" theme="success" */>}} Sucesso {{</* /button */>}}

{{<button href="https://google.com" theme="success">}} Sucesso {{< /button >}}

#### Botão Informação

    {{</* button href="https://nuevofoundation.org" theme="info" */>}} Informação {{</* /button */>}}

{{<button href="https://google.com" theme="info">}} Informação {{< /button >}}

#### Botão de Aviso

    {{</* button href="https://nuevofoundation.org" theme="warning" */>}} Aviso {{</* /button */>}}

{{<button href="https://google.com" theme="warning">}} Aviso {{< /button >}}

#### Botão de Perigo

    {{</* button href="https://nuevofoundation.org" theme="danger" */>}} Perigo ! {{</* /button */>}}

{{<button href="https://google.com" theme="danger">}} Perigo ! {{< /button >}}

#### Botão Padrão

    {{</* button href="https://nuevofoundation.org" theme="default" */>}} Perigo ! {{</* /button */>}}

{{<button href="https://google.com" theme="default">}} Perigo ! {{< /button >}}

### Expandir

    {{</*expand "Clique aqui para expandir!"*/>}}
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    {{</* /expand*/>}}

{{< expand "Clique aqui para expandir!" >}}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{{< /expand >}}

### Avisos

#### Nota

    {{</* notice note */>}}
    Um aviso de isenção de responsabilidade
    {{</* /notice */>}}

{{< notice note >}}
Um aviso de isenção de responsabilidade
{{< /notice >}}

#### Informativo

    {{</* notice info */>}}
    Uma isenção de responsabilidade de informação
    {{</* /notice */>}}

{{< notice info >}}
Uma isenção de responsabilidade de informação
{{< /notice >}}

#### Dica

    {{</* notice tip */>}}
    Um aviso de isenção de responsabilidade
    {{</* /notice */>}}

{{< notice tip >}}
Um aviso de isenção de responsabilidade
{{< /notice >}}

#### Aviso

    {{</* notice warning */>}}
    Um aviso de isenção de responsabilidade
    {{</* /notice */>}}

{{< notice warning >}}
Um aviso de isenção de responsabilidade
{{< /notice >}}

### Exemplos de ícones disponíveis

[Lista Completa Aqui](/guidelines/shortcodes/icon)

|Ícone|Nome do ícone|Exemplo de Uso|
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

---
title: "Formatando de um Jeitinho Divertido"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 5
---
Quando você cria ou muda os workshops, você usa uma linguagem especial chamada Markdown. Aqui, vamos aprender a usar essa linguagem para deixar seus textos mais bonitos e divertidos!

## Guia de Formatação

- [Dicas Rápidas do Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Opções Legais com Códigos Especiais](/guidelines/shortcodes/)

## Exemplos de Formatação

Este tema tem várias maneiras de deixar seu site do jeitinho que você gosta. Veja abaixo alguns exemplos: o que você precisa digitar e como vai aparecer na sua página.

### Caixas de Aviso

#### Informação

    {{</* alert theme="info" */>}}**Olha!** Esta é uma informação {{</* /alert */>}}

Que fica assim:

{{< alert theme="info">}}**Olha!** Esta é uma informação{{< /alert >}}

#### Sucesso

    {{</* alert theme="success" */>}}**Uhu!** Tudo deu certo!{{</* /alert */>}}

Que fica assim:

{{< alert theme="success" >}}**Uhu!** Tudo deu certo!{{< /alert >}}

#### Atenção

    {{</* alert theme="warning" */>}}**Atenção!** Preste cuidado!{{</* /alert */>}}

Que fica assim:

{{< alert theme="warning" >}}**Atenção!** Preste cuidado!{{< /alert >}}

#### Perigo

    {{</* alert theme="danger" */>}}**Cuidado!** Pode ser perigoso!{{</* /alert */>}}

Que fica assim:

{{< alert theme="danger" >}}**Cuidado!** Pode ser perigoso!{{< /alert >}}

### Botões

#### Botão Simples

    {{</* button href="https://nuevofoundation.org" */>}} Visite o site da Nuevo Foundation {{</* /button */>}}

Que fica assim:

{{<button href="https://google.com" >}} Visite o site da Nuevo Foundation {{< /button >}}

#### Botão de Sucesso

    {{</* button href="https://nuevofoundation.org" theme="success" */>}} Tudo Certo! {{</* /button */>}}

Que fica assim:

{{<button href="https://google.com" theme="success">}} Tudo Certo! {{< /button >}}

#### Botão de Informação

    {{</* button href="https://nuevofoundation.org" theme="info" */>}} Mais Informações {{<//* /button */>}}

Que fica assim:

{{<button href="https://google.com" theme="info">}} Mais Informações {{< /button >}}

#### Botão de Atenção

    {{</* button href="https://nuevofoundation.org" theme="warning" */>}} Atenção! {{<//* /button */>}}

Que fica assim:

{{<button href="https://google.com" theme="warning">}} Atenção! {{< /button >}}

#### Botão de Perigo

    {{</* button href="https://nuevofoundation.org" theme="danger" */>}} Cuidado! {{<//* /button */>}}

Que fica assim:

{{<button href="https://google.com" theme="danger">}} Cuidado! {{< /button >}}

#### Botão Normal

    {{</* button href="https://nuevofoundation.org" theme="default" */>}} Clique Aqui {{<//* /button */>}}

Que fica assim:

{{<button href="https://google.com" theme="default">}} Clique Aqui {{< /button >}}

### Seções Expansíveis

#### Expandir o Conteúdo

    {{</*expand "Clique aqui para ver mais!"*/>}}
    Aqui vai um texto grande cheio de informações legais, curiosidades e histórias divertidas.
    {{</* /expand*/>}}

Que fica assim:

{{< expand "Clique aqui para ver mais!" >}}
Aqui vai um texto grande cheio de informações legais, curiosidades e histórias divertidas.
{{< /expand >}}

### Mensagens Especiais

#### Nota

    {{</* notice note */>}}
    Aqui vai uma nota importante para lembrar de algo.
    {{</* /notice */>}}

Que fica assim:

{{< notice note >}}
Aqui vai uma nota importante para lembrar de algo.
{{< /notice >}}

#### Informativo

    {{</* notice info */>}}
    Aqui tem uma informação importante para você.
    {{</* /notice */>}}

Que fica assim:

{{< notice info >}}
Aqui tem uma informação importante para você.
{{< /notice >}}

#### Dica

    {{</* notice tip */>}}
    Aqui vai uma dica para te ajudar.
    {{</* /notice */>}}

Que fica assim:

{{< notice tip >}}
Aqui vai uma dica para te ajudar.
{{< /notice >}}

#### Aviso

    {{</* notice warning */>}}
    Preste atenção, isso é um aviso!
    {{</* /notice */>}}

Que fica assim:

{{< notice warning >}}
Preste atenção, isso é um aviso!
{{< /notice >}}

### Ícones Divertidos

[Veja a Lista Completa Aqui](/guidelines/shortcodes/icon)

| Ícone                                          | Nome do Ícone       | Exemplo de Uso                                 |
| ---------------------------------------------- | ------------------- | ---------------------------------------------- |
| {{< icon name="asterisk" size="large" >}}      | asterisco           | `<icon name="asterisk" size="large">`           |
| {{< icon name="plus" size="large" >}}          | mais                | `<icon name="plus" size="large">`               |
| {{< icon name="euro" size="large" >}}          | euro                | `<icon name="euro" size="large">`               |
| {{< icon name="eur" size="large" >}}           | eur                 | `<icon name="eur" size="large">`                |
| {{< icon name="minus" size="large" >}}         | menos               | `<icon name="minus" size="large">`              |
| {{< icon name="cloud" size="large" >}}         | nuvem               | `<icon name="cloud" size="large">`              |
| {{< icon name="envelope" size="large" >}}      | envelope            | `<icon name="envelope" size="large">`           |
| {{< icon name="pencil" size="large" >}}        | lápis               | `<icon name="pencil" size="large">`             |
| {{< icon name="glass" size="large" >}}         | copo                | `<icon name="glass" size="large">`              |
| {{< icon name="music" size="large" >}}         | música              | `<icon name="music" size="large">`              |
| {{< icon name="search" size="large" >}}        | busca               | `<icon name="search" size="large">`             |
| {{< icon name="heart" size="large" >}}         | coração             | `<icon name="heart" size="large">`              |
| {{< icon name="star" size="large" >}}          | estrela             | `<icon name="star" size="large">`               |
| {{< icon name="star-empty" size="large" >}}    | estrela vazia       | `<icon name="star-empty" size="large">`         |
| {{< icon name="user" size="large" >}}          | usuário             | `<icon name="user" size="large">`               |
| {{< icon name="film" size="large" >}}          | filme               | `<icon name="film" size="large">`               |
| {{< icon name="th-large" size="large" >}}      | grade grande        | `<icon name="th-large" size="large">`           |
| {{< icon name="th" size="large" >}}            | grade               | `<icon name="th" size="large">`                 |
| {{< icon name="th-list" size="large" >}}       | lista               | `<icon name="th-list" size="large">`            |
| {{< icon name="ok" size="large" >}}            | ok                  | `<icon name="ok" size="large">`                 |
| {{< icon name="remove" size="large" >}}        | remover             | `<icon name="remove" size="large">`             |
| {{< icon name="zoom-in" size="large" >}}       | aumentar            | `<icon name="zoom-in" size="large">`            |
| {{< icon name="zoom-out" size="large" >}}      | diminuir            | `<icon name="zoom-out" size="large">`           |
| {{< icon name="off" size="large" >}}           | desligado           | `<icon name="off" size="large">`                |
| {{< icon name="signal" size="large" >}}        | sinal               | `<icon name="signal" size="large">`             |
| {{< icon name="cog" size="large" >}}           | engrenagem          | `<icon name="cog" size="large">`                |
| {{< icon name="trash" size="large" >}}         | lixeira             | `<icon name="trash" size="large">`              |
| {{< icon name="home" size="large" >}}          | casa                | `<icon name="home" size="large">`               |
| {{< icon name="file" size="large" >}}          | arquivo             | `<icon name="file" size="large">`               |
| {{< icon name="time" size="large" >}}          | tempo               | `<icon name="time" size="large">`               |
| {{< icon name="road" size="large" >}}          | estrada             | `<icon name="road" size="large">`               |
| {{< icon name="download-alt" size="large" >}}  | download alternativo| `<icon name="download-alt" size="large">`       |
| {{< icon name="download" size="large" >}}      | download            | `<icon name="download" size="large">`           |
| {{< icon name="upload" size="large" >}}        | upload              | `<icon name="upload" size="large">`             |
| {{< icon name="inbox" size="large" >}}         | caixa de entrada    | `<icon name="inbox" size="large">`              |
| {{< icon name="play-circle" size="large" >}}   | tocar               | `<icon name="play-circle" size="large">`        |
| {{< icon name="repeat" size="large" >}}        | repetir             | `<icon name="repeat" size="large">`             |
| {{< icon name="refresh" size="large" >}}       | atualizar           | `<icon name="refresh" size="large">`            |
| {{< icon name="list-alt" size="large" >}}      | lista alternativa   | `<icon name="list-alt" size="large">`           |
| {{< icon name="lock" size="large" >}}          | cadeado             | `<icon name="lock" size="large">`               |
| {{< icon name="flag" size="large" >}}          | bandeira            | `<icon name="flag" size="large">`               |
| {{< icon name="headphones" size="large" >}}    | fone de ouvido      | `<icon name="headphones" size="large">`         |
| {{< icon name="volume-off" size="large" >}}    | sem volume          | `<icon name="volume-off" size="large">`         |
| {{< icon name="volume-down" size="large" >}}   | volume baixo        | `<icon name="volume-down" size="large">`        |
| {{< icon name="volume-up" size="large" >}}     | volume alto         | `<icon name="volume-up" size="large">`          |
| {{< icon name="qrcode" size="large" >}}        | código QR           | `<icon name="qrcode" size="large">`             |
| {{< icon name="barcode" size="large" >}}       | código de barras    | `<icon name="barcode" size="large">`            |
| {{< icon name="tag" size="large" >}}           | etiqueta            | `<icon name="tag" size="large">`                |
| {{< icon name="tags" size="large" >}}          | etiquetas           | `<icon name="tags" size="large">`               |
| {{< icon name="book" size="large" >}}          | livro               | `<icon name="book" size="large">`               |
| {{< icon name="bookmark" size="large" >}}      | marcador            | `<icon name="bookmark" size="large">`           |
| {{< icon name="print" size="large" >}}         | imprimir            | `<icon name="print" size="large">`              |
| {{< icon name="camera" size="large" >}}        | câmera              | `<icon name="camera" size="large">`             |
| {{< icon name="font" size="large" >}}          | fonte               | `<icon name="font" size="large">`               |
| {{< icon name="bold" size="large" >}}          | negrito             | `<icon name="bold" size="large">`               |
| {{< icon name="italic" size="large" >}}        | itálico             | `<icon name="italic" size="large">`             |

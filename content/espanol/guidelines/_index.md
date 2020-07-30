---
title: "Directrices para colaboradores del taller"
date: 2020-07-30T14:08:32-07:00
draft: false
hidden: true
---

¡Bienvenido! Estas pautas son para crear o editar un Taller de Nuevo Foundation.

## Próximamente

La orientación del taller es un trabajo en progreso. Mientras tanto, visite el readme.md del proyecto para obtener instrucciones de configuración.

## Formateo de Referencia

- [Hoja de trucos para Markdown Estandár](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Opciones de formato personalizado mediante “shortcodes”](shortcodes/)

## Ejemplos de formato

Este tema incluye una serie de opciones para personalizar el aspecto de tu página.

### Alertas

#### Información

    {{%/* alert theme="info" */%}}**Esta** es una alerta de información{{%/* /alert */%}}

{{% alert theme="info"%}}**Esta** es una alerta de información{{% /alert %}}

#### Éxito

    {{%/* alert theme="success" */%}}**Lo lograste!** es un ejemplo de un éxito{{%/* /alert */%}}

{{% alert theme="success" %}}**Lo lograste!** es un ejemplo de un éxito{{% /alert %}}

#### Advertencia

    {{%/* alert theme="warning" */%}}***Ten cuidado** es una advertencia{{%/* /alert */%}}

{{% alert theme="warning" %}}**Ten cuidado** es una advertencia{{% /alert %}}

#### Peligro

    {{%/* alert theme="danger" */%}}**Cuidado** es un ejemplo de un peligro{{%/* /alert */%}}

{{% alert theme="danger" %}}**Cuidado** es un ejemplo de un peligro{{% /alert %}}

### Botones

    {{</* button href="https://nuevofoundation.org" */>}} ir a Nuevo Foundation  {{</* /button */>}}

{{<button href="https://google.com" >}} ir a Nuevo Foundation  {{< /button >}}

#### Botón de Éxito

    {{</* button href="https://nuevofoundation.org" theme="success" */>}} Éxito {{</* /button */>}}

{{<button href="https://google.com" theme="success">}} Éxito {{< /button >}}

#### Botón de Información

    {{</* button href="https://nuevofoundation.org" theme="info" */>}} Información {{</* /button */>}}

{{<button href="https://google.com" theme="info">}} Información {{< /button >}}

#### Botón de Advertencia

    {{</* button href="https://nuevofoundation.org" theme="warning" */>}} Advertencia {{</* /button */>}}

{{<button href="https://google.com" theme="warning">}} Advertencia {{< /button >}}

#### Botón de Peligro

    {{</* button href="https://nuevofoundation.org" theme="danger" */>}} ¡Peligro! {{</* /button */>}}

{{<button href="https://google.com" theme="danger">}} ¡Peligro! {{< /button >}}

#### Botón Predeterminado

    {{</* button href="https://nuevofoundation.org" theme="default" */>}} Predeterminado {{</* /button */>}}

{{<button href="https://google.com" theme="default">}} Predeterminado {{< /button >}}

### Expand

    {{%/* expand */%}}Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{{%/* /expand */%}}

{{% expand %}}Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{{% /expand %}}

### Avisos

#### Aviso de Apunte

    {{%/* notice note */%}}
    Aviso de apunte
    {{%/* /notice */%}}

rinde

{{% notice note %}}
Aviso de apunte
{{% /notice %}}

#### Aviso de Información

    {{%/* notice info */%}}
    Aviso de información
    {{%/* /notice */%}}

rinde

{{% notice info %}}
Aviso de información
{{% /notice %}}

#### Aviso de Artimaña

    {{%/* notice tip */%}}
    Aviso de artimaña
    {{%/* /notice */%}}

{{% notice tip %}}
Aviso de artimaña
{{% /notice %}}

#### Aviso de Advertencia

    {{%/* notice warning */%}}
    Aviso de advertencia
    {{%/* /notice */%}}

rinde

{{% notice warning %}}
Aviso de advertencia
{{% /notice %}}

### Ejemplos de Iconos Disponibles

[Lista completa aquí](shortcodes/icon)

- {{< icon name="asterisk" size="large" >}} asterisco
- {{< icon name="plus" size="large" >}} más
- {{< icon name="euro" size="large" >}} euro
- {{< icon name="eur" size="large" >}} eur
- {{< icon name="minus" size="large" >}} menos
- {{< icon name="cloud" size="large" >}} nube
- {{< icon name="envelope" size="large" >}} sobre
- {{< icon name="pencil" size="large" >}} lápiz
- {{< icon name="glass" size="large" >}} copa
- {{< icon name="music" size="large" >}} música
- {{< icon name="search" size="large" >}} búsqueda
- {{< icon name="heart" size="large" >}} corazón
- {{< icon name="star" size="large" >}} estrella
- {{< icon name="star-empty" size="large" >}} estrella vacía
- {{< icon name="user" size="large" >}} usuario
- {{< icon name="film" size="large" >}} película
- {{< icon name="th-large" size="large" >}} th-grande
- {{< icon name="th" size="large" >}} th
- {{< icon name="th-list" size="large" >}} th-lista
- {{< icon name="ok" size="large" >}} marcar
- {{< icon name="remove" size="large" >}} eliminar
- {{< icon name="zoom-in" size="large" >}} zoom-in
- {{< icon name="zoom-out" size="large" >}} zoom-out
- {{< icon name="off" size="large" >}} apagar
- {{< icon name="signal" size="large" >}} señal
- {{< icon name="cog" size="large" >}} rueda dentada
- {{< icon name="trash" size="large" >}} basura
- {{< icon name="home" size="large" >}} casa
- {{< icon name="file" size="large" >}} archivo
- {{< icon name="time" size="large" >}} hora
- {{< icon name="road" size="large" >}} camino
- {{< icon name="download-alt" size="large" >}} descargar-alt
- {{< icon name="download" size="large" >}} descargar
- {{< icon name="upload" size="large" >}} subir
- {{< icon name="inbox" size="large" >}} buzón electrónico
- {{< icon name="play-circle" size="large" >}} botón de play
- {{< icon name="repeat" size="large" >}} repetir
- {{< icon name="refresh" size="large" >}} actualizar
- {{< icon name="list-alt" size="large" >}} lista-alt
- {{< icon name="lock" size="large" >}} cerradura
- {{< icon name="flag" size="large" >}} bandera
- {{< icon name="headphones" size="large" >}} auriculares
- {{< icon name="volume-off" size="large" >}} volumen apagado
- {{< icon name="volume-down" size="large" >}} volumen bajar
- {{< icon name="volume-up" size="large" >}} volumen aumentar
- {{< icon name="qrcode" size="large" >}} código QR
- {{< icon name="barcode" size="large" >}} código de barras
- {{< icon name="tag" size="large" >}} etiqueta
- {{< icon name="tags" size="large" >}} etiquetas
- {{< icon name="book" size="large" >}} libro
- {{< icon name="bookmark" size="large" >}} marcapáginas
- {{< icon name="print" size="large" >}} imprimir
- {{< icon name="camera" size="large" >}} cámara
- {{< icon name="font" size="large" >}} fuente
- {{< icon name="bold" size="large" >}} negrita
- {{< icon name="italic" size="large" >}} cursiva

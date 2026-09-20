---
title: "Discord: Construyendo un Bot Traductor"
description: "Aprende conceptos intermedios de Python como bibliotecas y APIs con integración de Discord"
date: 2025-09-15T10:11:00-07:00
prereq: "Fundamentos de Python"
difficulties: ["intermedio"]
language: "python"
topics: ["fundamentos-de-programación"]
icon: "fab fa-python"
draft: false
---

## Descripción General
¡Bienvenido al curso **Python: Construyendo un Bot Traductor para Discord**!

{{< alert theme="info" >}}
<img src="media/NF_mascot.jpg" alt="Mascota Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi dice:</strong> ¿Listo para codificar algo increíble? Vamos a construir un bot que rompa barreras lingüísticas, como un amigo súper inteligente que traduce mensajes al instante. Hagamos que el internet sea más amigable, una traducción a la vez.
{{< /alert >}}

![Nuvi](media/NF_mascot.jpg)
Nuvi acaba de crear un nuevo servidor de Discord para que todos sus amigos de todo el mundo puedan interactuar, compartir ideas y planificar proyectos creativos. Solo hay un problema: no todos hablan el mismo idioma. Algunos amigos escriben en inglés, otros en español, algunos en portugués y otros en coreano o chino. Las conversaciones se interrumpen, algunas personas se sienten excluidas, y Nuvi quiere que todos se sientan incluidos.

Entonces Nuvi tiene una idea: construir un **bot traductor** que viva directamente dentro del servidor de Discord. Comenzarás con comandos sencillos de barra diagonal, luego actualizarás el bot para que los usuarios puedan registrar su idioma preferido (inglés o español) y reciban automáticamente traducciones privadas (DM) cada vez que alguien más escriba en el otro idioma. Para lograrlo, Nuvi (¡y tú!) aprenderá cómo:

{{< alert theme="warning" >}}
<img src="media/NF_mascot.jpg" alt="Mascota Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Atención:</strong> No te preocupes si algunos de estos términos suenan nuevos. Desglosaremos todo paso a paso. Al final, verás cómo todas las piezas encajan como un rompecabezas.
{{< /alert >}}

- Conectar código en Python con Discord usando un usuario bot
- Escuchar mensajes de forma segura (con los intentos correctos)
- Ejecutar un servicio de traducción local (LibreTranslate)
- Detectar si un mensaje está en inglés o español
- Traducir mensajes automáticamente para usuarios registrados
- Enviar traducciones en privado para mantener el canal limpio
- Seguir ofreciendo un comando manual `/translate` como respaldo

Al final, tendrás un bot funcional que ayuda a personas que hablan diferentes idiomas a conversar juntas. No solo estarás escribiendo código, ¡estarás construyendo un puente entre amigos!

### Hoja de Ruta
1. Configuración: requisitos previos y fundamentos de Discord
2. Creación del Bot: registro + comando de barra mínima
3. Ejecutando Traducción Local: iniciar LibreTranslate + script de prueba
4. Integración Total: detectar, traducir, registrar preferencias de idioma
5. Objetivos Adicionales: persistencia (guardar las preferencias de idioma de los usuarios), más comandos

### Glosario
- **Endpoint:** Una URL específica en un servidor que realiza una tarea (por ejemplo, `/translate`).
- **Intent:** Una bandera de permiso que le dice a Discord qué eventos puede recibir tu bot.
- **Comando de Barra:** Un comando estructurado que comienza con `/` y que Discord valida y autocompleta.
- **Servidor de Traducción:** El proceso local de LibreTranslate que detecta y traduce texto.
- **Persistencia (Adicional):** Guardar las preferencias de idioma de los usuarios para que se conserven después de un reinicio.

¿Listo para ayudar a Nuvi? Vamos a construirlo paso a paso.
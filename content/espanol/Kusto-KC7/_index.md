---
title: "KC7: Juego de Defensor Cibernético"
description: "KC7 es un juego que te enseña habilidades reales de ciberseguridad utilizadas por profesionales Defensores Cibernéticos"
date: 2023-02-01T13:24:17-07:00
prereq: "Ninguno"
draft: false
icon: "fas fa-database"
weight: 131
language: "kusto"
topics: ["ciberseguridad", "datos"]
difficulties: ["avanzado"]
---

## Introducción: ¡Aprende a Atrapar al Hacker!

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KC7Logo.png?raw=true" alt="logo" height="20%">

### ¡Bienvenidos nuevos Defensores Cibernéticos! 
*--- La inteligencia de amenazas es para todos.*
Aprende ciberseguridad utilizando datos reales sobre amenazas.
**KC7 es un juego que te enseña habilidades reales de ciberseguridad**
>KC7 simula una intrusión por parte de múltiples actores de amenazas cibernéticas contra una empresa ficticia, enseñándote a identificar actividad adversaria en las siete fases de la Cadena de Ataques Cibernéticos (Cyber Kill Chain) utilizando datos realistas.

Al final de tu primer día de trabajo, deberías ser capaz de: 
- Usar el Lenguaje de Consulta de Kusto (KQL) para manipular datos en Azure Data Explorer (ADX)  
- Usar múltiples conjuntos de datos para responder preguntas específicas  
- Encontrar actividad cibernética en registros que incluyen: correos electrónicos, tráfico web y registros de servidores  
- Usar múltiples técnicas para rastrear la actividad de APTs (Amenazas Persistentes Avanzadas)  
- Usar conjuntos de datos de terceros para descubrir información sobre tus atacantes   
- Crear un informe de inteligencia de amenazas    
- Hacer recomendaciones sobre qué acciones puede tomar una empresa para protegerse    

Si eres un instructor, por favor comienza con el apartado **T3: Introducción para Instructores** antes de realizar el taller. Si eres un estudiante, sigue con **Actividad 1: Inicio de Sesión y Configuración del Entorno Cibernético**.

{{% notice warning %}}
Por favor, no utilices el navegador Firefox para este taller.
{{% /notice%}}


{{% notice warning %}}
Ten en cuenta que KQL, al igual que otros lenguajes de programación, distingue entre mayúsculas y minúsculas (es sensible a las mayúsculas). Por lo tanto, tenlo en mente al trabajar en Azure Data Explorer (ADX). Sin embargo, el marcador de puntaje del juego Defensor Cibernético **NO** distingue entre mayúsculas y minúsculas.
{{% /notice%}}

<details>
<summary>Tabla de Contenidos</summary>
{{% children /%}}
</details>
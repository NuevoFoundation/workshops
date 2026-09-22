---
title: "Tutorial 1: Introducción a la Inteligencia de Amenazas"
draft: false
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/F6qFmiV6Alc" title="Tutorial 1: Intro to Threat Intelligence - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}} A medida que avances en este taller, notarás que cada página con un video duplica la lección tanto en formato de video como en texto escrito. Puedes seguir uno u otro dependiendo del tipo de aprendizaje que prefieras.{{< /notice >}}

## ¿Qué es la Inteligencia de Amenazas?

**Analistas de Inteligencia de Amenazas**:

{{<icon name="user" size="large">}} Aprenden sobre adversarios ... y comparten conocimientos con socios del sector público/privado

{{<icon name="time" size="large">}} Rastrean adversarios a lo largo del tiempo ... para entender el panorama cambiante de amenazas

{{<icon name="lock" size="large">}} Implementan defensas ... y trabajan con equipos de desarrollo de productos para proteger a los clientes

Los datos por sí solos no equivalen a inteligencia. Los registros de seguridad por sí mismos no te dicen nada significativo hasta que se procesan. Una vez que un analista de inteligencia de amenazas procesa los datos y la información, con el contexto de los adversarios que rastrean y el panorama en constante cambio de las amenazas, pueden comenzar a construir una historia y una línea de tiempo de lo que pudo haber sucedido. Entender qué significan esas amenazas, por qué ocurrieron y cómo han afectado a tu empresa ... eso es verdadera inteligencia de amenazas.

## ¿Qué es la Cyber Kill Chain?

La Cyber Kill Chain, desarrollada originalmente por Lockheed Martin, es un marco para identificar y prevenir ataques cibernéticos. Este marco identifica 7 pasos que los adversarios deben completar para lograr su objetivo  [^1] .
[^1]: https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html

<img src= "https://www.lockheedmartin.com/content/dam/lockheed-martin/rms/photo/cyber/THE-CYBER-KILL-CHAIN-body.png.pc-adaptive.1280.medium.png" alt= “CyberKillChain” width="60%" height="value">


## Entendiendo el Modelo del Diamante

El Modelo del Diamante de Análisis de Intrusión proporciona un método para analizar las características de los ataques cibernéticos. Este modelo enfatiza las relaciones entre 4 componentes: **el adversario, capacidades, infraestructura y víctimas**. La teoría en la que está basado es que para cada ataque cibernético existe "un **adversario** que toma un paso hacia un objetivo intencionado usando una **capacidad** a través de una **infraestructura** contra una **víctima** para producir un resultado"  [^2] .
[^2]: https://www.recordedfuture.com/diamond-model-intrusion-analysis 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/diamondmodel.png?raw=true" alt= “DiamondModel” width="40%" height="value">

## ¿Qué es KC7?

Esto nos lleva a la razón por la cual elegimos llamar a este juego KC7; porque ayuda a las personas a través de las 7 etapas de la Cyber Kill Chain descritas anteriormente.

**KC7 es un juego diseñado para enseñar a las personas cómo aplicar conocimientos de ciberseguridad y desarrollar habilidades de análisis utilizando datos realistas.** Es una simulación única e inmersiva de análisis de ciberseguridad que fue desarrollada por expertos en seguridad del Centro de Inteligencia de Amenazas de Microsoft (MSTIC), un equipo que se enfoca en rastrear a los actores cibernéticos más sofisticados del mundo. La mejor parte de estos datos es que son ficticios y generados por un script en Python, lo que significa que los participantes pueden aprender técnicas reales sin los peligros de manejar datos privados. Este entrenamiento brinda a los participantes la oportunidad de aprender y aplicar habilidades de análisis de amenazas cibernéticas mientras defienden a una empresa simulada de hackers.

{{< alert theme="info" >}} Ahora que hemos cubierto algunos temas de inteligencia de amenazas, sigamos adelante. No te preocupes si no lo entiendes completamente de inmediato, estos temas se volverán más fáciles de comprender más adelante en el entrenamiento. {{< /alert >}}
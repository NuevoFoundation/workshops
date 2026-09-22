---
title: "Python: Aprendizaje Automático"
description: "Conceptos básicos del Aprendizaje Automático"
prereq: "Ninguno"
draft: false
language: "python"
topics: ["ai"]
difficulties: ["principiante"]
---

## Aprendamos algo de aprendizaje automático para evaluar las calificaciones generales de los jugadores en el videojuego FIFA

El aprendizaje automático es la ciencia que estudia *algoritmos* y *modelos* que permiten a las computadoras reconocer cosas, tomar decisiones e incluso predecir resultados sin instrucciones explícitas. Por ejemplo, al hablar con el asistente de tu teléfono, como Siri o Cortana, el aprendizaje automático ayuda a traducir tu voz en texto y a entender lo que solicitaste. ¿No es increíble?

Hoy vamos a mostrarte cómo *enseñarle* a una computadora a evaluar las calificaciones generales de los jugadores de fútbol basándose en sus atributos, paso a paso.

¡Manos a la obra!

## Un poco de contexto

Supongamos que hay una fórmula para calcular las calificaciones "Overall" (Generales) de los jugadores de fútbol, creada por EA Sports (el desarrollador de FIFA 2019). Con esta fórmula, podríamos calcular fácilmente las calificaciones generales de cualquier jugador, incluso si no está en el juego. El problema es que no conocemos exactamente cómo es esa fórmula. <br>
Sabemos que las *entradas* consisten en los atributos de los jugadores y que la *salida* son las calificaciones generales. Entonces, podemos usar un enfoque llamado "regresión" para "estimar" la fórmula basándonos en las entradas y salidas.

Hoy vamos a usar un modelo simple llamado Regresión Lineal.  
Supongamos que la fórmula que calcula las calificaciones generales de los jugadores de fútbol \( y = f(x)\) es
\[
    f(x) = ax + b
\]
La regresión lineal tiene como objetivo determinar \(a\) y \(b\). La fórmula (f(x)) se llama "modelo" en aprendizaje automático, y el proceso de resolver/estimar el modelo se llama "entrenar" el modelo. Una vez que entrenamos el modelo, podemos usarlo para predecir el objetivo \(y\) de nuevos datos.

Volviendo a nuestra historia, si solo tuviéramos 1 variable \(x\), estimar \(f(x)\) sería fácil. Cualquiera podría resolverlo con un bolígrafo y una hoja de papel. Sin embargo, cuando \(x\) es una lista larga de atributos de jugadores de fútbol como velocidad, potencia, pases, entradas, se vuelve complicado. Entonces, la fórmula debería reescribirse como:
\[
    f(x_1, x_2, ..., x_n) = a_1 * x_1 + a_2 * x_2 + ... + a_n * x_n + b
\]
Luego, tenemos que alimentar al modelo con una gran cantidad de datos de alta calidad para acercar el modelo lo más posible a la fórmula "real". ¡Comencemos!


## Tabla de Contenidos

<details close>
<summary>Tabla de Contenidos</summary>
{{% children /%}}
</details>
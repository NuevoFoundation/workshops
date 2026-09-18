---
title: "Diseño de Ingeniería DISTANCE - Clave de respuestas"
date: 2024-01-15T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Esta es una referencia para maestros del taller Diseño de Ingeniería DISTANCE. Este taller se encuentra actualmente en estado de borrador (todas las páginas de actividades están marcadas como `draft: true`) y tiene contenido incompleto, incluyendo imágenes faltantes, un archivo de código MATLAB/Octave faltante, y una tabla de criterios de evaluación faltante. Esta clave de respuestas documenta los pasos del proceso de diseño del taller y las opciones de parámetros esperadas para ayudar a los maestros a entender el flujo previsto si el taller se completa en el futuro.
{{% /notice %}}

{{% notice warning %}}
**Estado del taller: Incompleto.** Las 11 páginas de actividades están en `draft: true`. Varias páginas tienen marcadores de posición `[insert image]` y `[insert table]`. El código MATLAB/Octave referido a lo largo del taller no se proporciona. Las instrucciones de instalación de Octave hacen referencia a un archivo inexistente ("Octave Instructions.docx") en el repositorio. Este taller no puede ser entregado a los estudiantes en su estado actual.
{{% /notice %}}

## Resumen del taller

Los estudiantes participan en una competición de carreras ficticia llamada DISTANCE (Competencia de Carreras Estudiantiles de San Diego). Su tarea es diseñar un eje de transmisión para un coche de carreras utilizando el Proceso de Diseño de Ingeniería, con un programa MATLAB/Octave que calcula el diámetro recomendado del eje basado en los parámetros seleccionados por los estudiantes.

## Los 5 parámetros de diseño

El taller guía a los estudiantes a través de 5 elecciones que se introducen en el cálculo de MATLAB:

### 1. Factor de seguridad (Actividad 5)

Una relación entre el límite de un material y la carga actual. Valores más altos significan diseños más seguros pero potencialmente sobre diseñados.

| Factor de seguridad | Significado |
|---------------------|-------------|
| 1 | El límite del material es igual a la carga actual (riesgoso) |
| 2-3 | Típico para muchas aplicaciones de ingeniería |
| 6 | Factor de seguridad del Puente Golden Gate |
| Valores altos | Más seguridad pero diseños más pesados/caros |

**Elección esperada de los estudiantes:** Un número mayor a 1. El taller proporciona ejemplos del mundo real (puentes, motores, aviones) como contexto.

### 2. Selección de material (Actividad 6)

Los estudiantes eligen entre 5 materiales, cada uno con propiedades mecánicas diferentes:

| Material | Característica clave |
|----------|----------------------|
| Acero | Fuerte, pesado, difícil de romper |
| Madera | Ligera, fácil de trabajar, menos duradera |
| Vidrio | Frágil, se rompe fácilmente bajo fuerza |
| Aluminio | Más ligero que el acero, fuerza moderada |
| Plástico | Flexible, ligero, opción más débil |

**Elección esperada de los estudiantes:** El acero o el aluminio son las opciones más prácticas para un eje de transmisión. El programa usa las propiedades mecánicas de cada material (límite de fluencia, límite de resistencia) en el cálculo del diámetro.

### 3. Condiciones del eje (Actividad 7)

Tres condiciones ambientales que afectan el desempeño del eje:

| Condición | Opciones | Impacto |
|-----------|----------|---------|
| Pulido superficial | Pulido vs. sin pulir | Las grietas/deformaciones aumentan el riesgo de falla |
| Temperatura del motor | De excelente a riesgo de sobrecalentamiento | El sobrecalentamiento puede fundir o dañar partes |
| Clima (lluvia) | Optimista vs. realista | El agua causa corrosión y podrido del material |

**Opciones esperadas de los estudiantes:** Estas son elecciones de juicio. Las opciones optimistas producen diámetros más pequeños; las opciones realistas producen diámetros más grandes (más seguros).

### 4. Parámetros de carga (Actividad 8)

Dos tipos de fuerza en el eje de transmisión:

| Tipo de carga | Descripción | Rango |
|---------------|-------------|-------|
| Torque | Fuerza rotacional desde el motor hacia las ruedas | 0-10,000 (basado en valores reales de torque de autos) |
| Momento (flexión) | Fuerzas que causan que el eje se doble | 0-10,000 |

**Entrada esperada de los estudiantes:** Los estudiantes seleccionan valores mínimos y máximos tanto para torque como para momento. Valores más altos requieren un diámetro de eje mayor.

### 5. Geometría (Actividad 9)

Los estudiantes eligen entre dos tipos de esquinas para la sección transversal del eje:

| Geometría | Descripción | Efecto |
|-----------|-------------|--------|
| Esquinas cuadradas | Bordes afilados | Concentraciones de esfuerzo más altas (más peligroso) |
| Esquinas redondeadas | Bordes redondeados | Concentraciones de esfuerzo más bajas (más seguro) |

**Elección esperada de los estudiantes:** Las esquinas redondeadas son la elección más segura en ingeniería. El taller explica las concentraciones de esfuerzo utilizando el ejemplo de las ventanas de aviones (ventanas redondeadas vs. rectangulares).

## Salida esperada

El programa MATLAB/Octave calcula un diámetro mínimo del eje basado en los 5 parámetros. Luego, los estudiantes verifican su diámetro contra una tabla de criterios de evaluación (Actividad 11, no proporcionada en el taller) para determinar la "posición" de su coche en la competición.

**Principios generales** (basados en principios estándar de ingeniería; el código real no está disponible para verificar):
- Un factor de seguridad más alto produce un diámetro mayor.
- Materiales más fuertes (acero) permiten diámetros más pequeños.
- Peores condiciones (sobrecarga térmica, lluvia, sin pulir) aumentan el diámetro.
- Cargas más altas (torque, momento) incrementan el diámetro.
- Esquinas cuadradas requieren diámetros más grandes que esquinas redondeadas.

## Estado de finalización del taller

| Actividad | Título | Estado |
|-----------|--------|--------|
| 1 | Antecedentes del eje de transmisión | Borrador, texto incompleto |
| 2 | Diseña tu eje de transmisión | Borrador, imagen faltante |
| 3 | Código (MATLAB/Octave) | Borrador, archivo de código no proporcionado, archivo de instalación de Octave faltante |
| 4 | Estructura del código | Borrador, imagen faltante |
| 5 | Factor de seguridad | Borrador, imagen faltante, tiene enlaces externos |
| 6 | Selección de material | Borrador, imagen faltante |
| 7 | Selección de condiciones | Borrador, imágenes faltantes |
| 8 | Parámetros de carga
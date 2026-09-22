---
title: "Analítica de la Cadena de Suministro - Clave de Respuestas"
date: 2026-04-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Esta es una referencia para profesores del taller de Analítica de la Cadena de Suministro. Contiene la configuración completa de optimización, configuración de Excel Solver y soluciones para tanto el problema principal como el desafío adicional. Los estudiantes también tienen acceso al archivo de respuestas de Excel enlazado en la página de Resolución.
{{% /notice %}}

## Configuración del problema

Los estudiantes administran una panadería de galletas que vende dos tipos de galletas. El objetivo es maximizar las ganancias utilizando Excel Solver.

### Datos del escenario

**Ingresos, costos y ganancias por lote (12 galletas):**

| Galleta | Ingresos | Costo | Ganancia |
|---------|----------|-------|----------|
| Chispas de Chocolate | $20 | $10 | $10 |
| Galleta de Azúcar | $15 | $7 | $8 |

**Ingredientes requeridos por lote:**

| Ingrediente | Chispas de Chocolate | Galleta de Azúcar | Disponible |
|-------------|-----------------------|-------------------|------------|
| Huevos | 3 | 2 | 24 |
| Harina (tazas) | 8 | 5 | 55 |
| Azúcar (tazas) | 5 | 6 | 50 |

## Formulación de la optimización

Sea **x** = lotes de galletas de chispas de chocolate, **y** = lotes de galletas de azúcar.

**Variables de decisión:** x e y (deben ser enteros no negativos)

**Función objetivo (maximizar):**

```
Ganancia = 10x + 8y
```

**Restricciones:**

```
3x + 2y ≤ 24    (huevos)
8x + 5y ≤ 55    (harina)
5x + 6y ≤ 50    (azúcar)
x, y ≥ 0        (no negativos)
x, y enteros    (solo lotes completos)
```

{{% notice tip %}}
**Consejo para profesores:** Guíe a los estudiantes para traducir el problema en palabras a matemáticas. Cada fila de la tabla de restricciones se convierte en una desigualdad. El lado izquierdo es "cuánto de este ingrediente utilizamos" y el lado derecho es "cuánto tenemos disponible."
{{% /notice %}}

## Solución: problema principal

**Respuesta óptima: 5 lotes de chispas de chocolate, 3 lotes de galletas de azúcar**

**Ganancia máxima: $74**

Cálculo: Ganancia = 10(5) + 8(3) = 50 + 24 = **$74**

### Verificación de restricciones

| Restricción | Cálculo | Usado | Disponible | Excedente |
|-------------|----------|-------|------------|-----------|
| Huevos | 3(5) + 2(3) = 21 | 21 | 24 | Sobraron 3 |
| Harina | 8(5) + 5(3) = 55 | 55 | 55 | 0 (usada completamente) |
| Azúcar | 5(5) + 6(3) = 43 | 43 | 50 | Sobraron 7 |

{{% notice tip %}}
**Consejo para profesores:** Señale que la harina es la "restricción vinculante" (excedente cero). Esto significa que la harina es el ingrediente que limita cuántas galletas podemos hacer. Si pudiéramos conseguir más harina, podríamos generar más ganancias. Los huevos y el azúcar tienen capacidad sobrante.
{{% /notice %}}

## Configuración de Excel Solver

En el diálogo de Solver, los estudiantes deben configurar:

| Campo en Solver | Celda/valor |
|------------------|-------------|
| **Set Objective** | La celda de Ganancia Total (Paso 3) |
| **To** | Max |
| **By Changing Variable Cells** | Las dos celdas de "# de lotes" (Paso 2) |
| **Subject to Constraints** | Fórmula de huevos ≤ 24, fórmula de harina ≤ 55, fórmula de azúcar ≤ 50 |
| **Restricción Entera** | Celdas de lotes = Enteros (para que Solver devuelva números enteros) |
| **Make Unconstrained Variables Non-Negative** | Marcado |
| **Solving Method** | Simplex LP |

Asegúrese también de que la opción "Make Unconstrained Variables Non-Negative" esté marcada en las opciones de Solver.

### Referencia de fórmulas de Excel

| Propósito de la celda | Patrón de fórmula |
|------------------------|-------------------|
| Ganancia por lote | `=Revenue - Cost` (por ejemplo, `=C7-D7`) |
| Ganancia Total | `=Profit_CC * Batches_CC + Profit_Sugar * Batches_Sugar` |
| Uso de huevos | `=Eggs_per_CC * Batches_CC + Eggs_per_Sugar * Batches_Sugar` |
| Uso de harina | `=Flour_per_CC * Batches_CC + Flour_per_Sugar * Batches_Sugar` |
| Uso de azúcar | `=Sugar_per_CC * Batches_CC + Sugar_per_Sugar * Batches_Sugar` |

## Desafío adicional: escasez de huevos

El cerco se rompe y las gallinas escapan. Los huevos disponibles bajan de 24 a 15.

**Nueva respuesta óptima: 1 lote de chispas de chocolate, 6 lotes de galletas de azúcar**

**Nueva ganancia máxima: $58**

Cálculo: Ganancia = 10(1) + 8(6) = 10 + 48 = **$58**

### Verificación de restricciones (desafío)

| Restricción | Cálculo | Usado | Disponible | Excedente |
|-------------|----------|-------|------------|-----------|
| Huevos | 3(1) + 2(6) = 15 | 15 | 15 | 0 (usada completamente) |
| Harina | 8(1) + 5(6) = 38 | 38 | 55 | Sobraron 17 |
| Azúcar | 5(1) + 6(6) = 41 | 41 | 50 | Sobraron 9 |

**La ganancia disminuyó en $16** (de $74 a $58).

{{% notice tip %}}
**Consejo para profesores:** Este es un gran momento de discusión. Pregunte a los estudiantes:
- ¿Por qué cambió el mix de producción de mayormente chispas de chocolate a mayormente galletas de
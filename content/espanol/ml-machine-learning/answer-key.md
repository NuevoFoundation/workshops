```markdown
---
title: "Machine Learning: Regresión Lineal - Clave de Respuestas"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Esta clave de respuestas cubre todos los ejercicios y cálculos clave del taller de Regresión Lineal. El taller utiliza Replit para ejercicios de Python con un conjunto de datos sobre Experiencia vs. Salario. Algunos ejercicios producen resultados diferentes en cada ejecución debido al muestreo aleatorio.
{{% /notice %}}

## Sección 1: ¿Qué es la Regresión?

### Respuestas del Ejercicio 1

**P1:** ¿Puedes conocer el tipo de figura basado en el área?

**R:** No. Un cuadrado (3x3 = 9) y un triángulo (base 6, altura 3, área = 6x3/2 = 9) pueden tener el mismo área pero son figuras diferentes.

**P2:** ¿Qué relación determina el tipo de figura?

**R:** El número de lados. Es una relación lineal directa: 3 lados = triángulo, 4 lados = cuadrado, 5 lados = pentágono, etc.

## Sección 2: Regresión Lineal Simple

### Fórmula Clave

La ecuación de regresión lineal:

```
y = ax + b + ε
```

Donde:
- `x` = variable independiente (Años de Experiencia)
- `y` = variable dependiente (Salario)
- `a` = pendiente/coeficiente (cuánto cambia y por unidad de x)
- `b` = intersección (valor de y cuando x = 0)
- `ε` = término de error

### Ejercicio 1: Experimentar con Scikit-learn

Cargar y visualizar el conjunto de datos:

```python
import pandas as pd
from sklearn import linear_model

dataset = pd.read_csv("Experience_vs_Salary.csv")
x = dataset.iloc[:, :-1].values  # Columna de Experiencia
y = dataset.iloc[:, 1].values    # Columna de Salario

model = linear_model.LinearRegression()
model.fit(x, y)
```

### Ejercicio 2: Encontrando Pendiente e Intersección

**Respuestas:**
- **Intersección (b):** 25,792.20
- **Coeficiente/Pendiente (a):** 9,449.96
- **Ecuación:** SALARIO = 9,449.96 × (Experiencia) + 25,792.20 + ε

**Interpretación:**
- Un empleado con 0 años de experiencia gana aproximadamente $25,792
- Cada año adicional de experiencia incrementa el salario en aproximadamente $9,450

## Sección 3: Intervalos de Confianza

### Fórmula Clave

```
CoefficientRange = Coefficient ± 2 × StandardError
```

### Ejercicio 2: Encontrando el Error Estándar

**Respuesta:** Error estándar = **409.40**

### Cálculo de Intervalo de Confianza

```
CoefficientRange = 9,449.96 ± 2 × 409.40
CoefficientRange = 9,449.96 ± 818.80
CoefficientRange = [8,631.16 , 10,268.76]
```

**Interpretación:** Estamos 95% seguros de que cada año de experiencia incrementa el salario entre $8,631.16 y $10,268.76.

### Ejercicio 1: Revisión con Más Muestras

**P:** ¿Por qué los valores de intersección y coeficiente varían en cada ejecución?

**R:** Cada ejecución selecciona una muestra aleatoria diferente de 30 registros de un conjunto de datos de más de 10,000. Las muestras distintas producen resultados ligeramente diferentes, pero los valores permanecen dentro del rango del intervalo de confianza.

### Ejercicio 3: Distribución Normal

El histograma de los valores del coeficiente obtenidos de muchas muestras forma una curva de campana (distribución normal). Esto confirma que los valores se agrupan alrededor del coeficiente verdadero, con la mayoría cayendo dentro del intervalo de confianza.

## Sección 4: Ajuste del Modelo

### Ejercicio 1: Encontrando R-Squared

**Respuesta:** R² = **0.973**

**Interpretación:** Estamos 97.3% seguros de que los años de experiencia están relacionados con el salario del empleado. El modelo explica el 97.3% de la variación en el salario.

{{% notice tip %}}
**Para profesores:** Los valores de R² oscilan entre 0 y 1. Valores superiores a 0.9 indican una relación muy fuerte. Si los estudiantes obtienen un R² más bajo, pídales revisar el tamaño de la muestra. Motívelos a cambiar la variable `sample_size` y observar cómo cambia R².
{{% /notice %}}

## Sección 5: Hacer Predicciones

### Concepto Clave: División de Entrenamiento y Prueba

- **Conjunto de entrenamiento:** 70% de los datos (utilizados para construir el modelo)
- **Conjunto de prueba:** 30% de los datos (utilizados para verificar el modelo)
- Ambos valores de R² deben ser similares (si R² de prueba es mucho más bajo, el modelo está sobreajustado)

### Ejercicio 1: Realizar Predicciones

```python
# El código de Replit crea conjuntos de datos de entrenamiento/prueba
# y genera líneas de predicción para ambos
# Verificación clave: R² de entrenamiento ≈ R² de prueba
```

### Ejercicio 2: Predicciones Personalizadas

Los estudiantes cambian la variable `experience` para predecir el salario para cualquier número de años de experiencia:

| Años de Experiencia | Salario Predicho (aproximado) |
|--------------------|--------------------------------|
| 0 | $25,792 |
| 5 | $73,042 |
| 10 | $120,292 |
| 15 | $167,542 |
| 20 | $214,792 |

**Fórmula utilizada:** Salario = 9,449.96 × Experiencia + 25,792.20

{{% notice tip %}}
**Pregunta común de estudiantes:** "¿Por qué mi predicción no coincide exactamente con la tabla?"

El coeficiente exacto y la intersección dependen de qué muestra aleatoria fue seleccionada. Los valores anteriores utilizan los valores de referencia del taller (pendiente = 9,449.96, intersección = 25,792.20). Tus valores específicos serán ligeramente diferentes pero deberían producir predicciones similares.
{{% /notice %}}

## Referencia Rápida

| Concepto | Valor | Significado |
|---------|-------|-------------|
| Pendiente (a) | 9,449.96 | Incremento salarial por año de experiencia |
| Intersección (b) | 25,
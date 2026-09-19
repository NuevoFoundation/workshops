```markdown
---
title: "C#: Basics - Answer Key"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Estas son soluciones de ejemplo. Muchos desafíos tienen múltiples respuestas válidas, especialmente aquellos que te piden crear tus propios ejemplos. ¡Tu solución es correcta si produce la salida esperada!
{{% /notice %}}

## Variables y Tipos de Dato

### Ayuda a Patrick a corregir sus variables

El código de Patrick tiene los tipos de datos incorrectos asignados a cada variable. Aquí están las declaraciones corregidas:

```csharp
string bestFriend = "Minerva";
int numOfFriends = 4;
double GPA = 3.6;
char meaningOfLife = '$';
bool loveMusic = true;
```

**Explicación:** Cada variable necesita un tipo de dato que coincida con el valor almacenado:

| Variable        | Tipo Incorrecto | Tipo Correcto | Razón                                |
|-----------------|-----------------|---------------|--------------------------------------|
| `bestFriend`    | `int`           | `string`      | `"Minerva"` es texto, no un número. |
| `numOfFriends`  | `bool`          | `int`         | `4` es un número entero, no true/false. |
| `GPA`           | `string`        | `double`      | `3.6` es un número decimal, no texto. |
| `meaningOfLife` | `double`        | `char`        | `'$'` es un carácter único, no un decimal. |
| `loveMusic`     | `char`          | `bool`        | `true` es un valor booleano, no un carácter. |

Salida:
```
¡Lo arreglaste!
```

## Operadores

### Estadísticas de Examen

Dados los puntajes: Patrick (88), Tom (89), Mary (95), Chris (84), Jen (92):

```csharp
// 1. Declarar variables de puntajes de estudiantes
int patrickGrade = 88;
int tomGrade = 89;
int maryGrade = 95;
int chrisGrade = 84;
int jenGrade = 92;

// 2. Calcular el promedio de la clase
average = (patrickGrade + tomGrade + maryGrade + chrisGrade + jenGrade) / 5.0;

// 3. Usar operadores relacionales para las comparaciones
bool over60 = average > 60;
bool over70 = average > 70;
bool over80 = average > 80;
bool over90 = average > 90;
```

{{% notice tip %}}
Dividimos entre `5.0` en lugar de `5` para obtener un resultado decimal. En C#, dividir dos enteros da como resultado un entero (el resto se descarta). Usar `5.0` asegura que obtengamos el promedio exacto.
{{% /notice %}}

Salida:
```
---------------------------
     Informe de Notas de Música    
---------------------------

Puntajes de Estudiantes:          
- Patrick: 88
- Tom: 89
- Mary: 95
- Chris: 84
- Jen: 92

Promedio de la Clase: 89.6
- Promedio mayor a 60: True
- Promedio mayor a 70: True
- Promedio mayor a 80: True
- Promedio mayor a 90: False
```

## Estructuras de Control

### If-Statement: El saludo de Patrick

Rellena las expresiones booleanas para que Patrick diga el saludo correcto según la hora:

```csharp
int currentHour = 10; // cambia esto para probar diferentes horas (0-23)

if (currentHour < 12)
{
    Console.WriteLine("Buenos días");
}
else if (currentHour < 20)
{
    Console.WriteLine("Buenas tardes");
}
else
{
    Console.WriteLine("Buenas noches");
}
```

**Cómo funciona:**
- Horas 0-11: `currentHour < 12` es `true` → imprime "Buenos días".
- Horas 12-19: `currentHour < 12` es `false`, pero `currentHour < 20` es `true` → imprime "Buenas tardes".
- Horas 20-23: ambas condiciones son `false` → cae en `else` → imprime "Buenas noches".

### For-Loop: Suma de 1 a 100

Convierte el bucle while en un bucle for que calcule 1 + 2 + 3 + ... + 100:

```csharp
int total = 0;
for (int num = 1; num <= 100; num = num + 1)
{
    total = total + num;
}
Console.WriteLine("Respuesta calculada en un bucle for: " + total);
```

Salida:
```
Respuesta calculada en un bucle for: 5050
```

{{% notice tip %}}
La respuesta es 5050. Una famosa historia dice que el matemático Carl Friedrich Gauss lo descubrió de niño al notar que 1 + 100 = 101, 2 + 99 = 101, y así sucesivamente — dando 50 pares de 101, lo que equivale a 5050.
{{% /notice %}}

## Métodos

### Contar la Pirámide

Escribe un método que calcule el número total de cuentas en una pirámide de números cuadrados con `n` niveles. El nivel 1 tiene 1×1 = 1 cuenta, el nivel 2 tiene 2×2 = 4 cuentas, el nivel 3 tiene 3×3 = 9 cuentas, y así sucesivamente.

```csharp
public static int pyramidCount(int levels)
{
    int total = 0;
    for (int i = 1; i <= levels; i++)
    {
        total = total + (i * i);
    }
    return total;
}
```

**Cómo funciona:** El método recorre cada nivel desde 1 hasta `levels`, sumando el cuadrado del número de nivel (`i * i`) al total acumulado.

Valores de ejemplo:

| Niveles | Cálculo          | Total |
|---------|------------------|-------|
| 1       | 1×1              | 1     |
| 2       | 1 + 4            | 5     |
| 3       | 1 + 4 + 9        | 14    |
| 4       | 1 + 4 + 9 + 16   | 30    |

Salida:
```
¡Felicidades! ¡Reto Solucionado!
```

## Clases y Objetos

### Construir la Clase Bird

Aquí está la clase `Bird` completa con todos los campos, el constructor, y todos los métodos:

```csharp
public class Bird
{
    // Paso 1: Declarar campos privados
    private
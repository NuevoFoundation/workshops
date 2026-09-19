---
title: "Paso 1 - Encontrando el problema (Parte 1)"
difficulties: ["intermedio"]
weight: 3
draft: false
---

## Errores del Compilador

Empecemos echando un vistazo a uno de los primeros problemas intimidantes que enfrenta un programador principiante: **leer** y **entender** los errores.

Existen dos tipos de errores: **errores de compilación** y **errores en tiempo de ejecución**.

Un **error de compilación** generalmente indica un problema con tu sintaxis. Tal vez quisiste expresar una idea en el programa pero no seguiste las reglas del lenguaje de programación. Estos errores son detectados cuando compilas tu programa. Los errores de compilación son buenos porque son relativamente fáciles de corregir. Los compiladores como `gcc` suelen proporcionar mucha información sobre qué salió mal al compilar el código. Exploremos algunos de estos errores.

Abre la pestaña **Shell** en el programa de Replit a continuación y ejecuta el siguiente comando:

```bash
make CompilerErrors
```

{{% notice note %}}
En este ejemplo, no vamos a ejecutar el programa; este programa está diseñado para mostrar algunos errores comunes de compilación que podrías encontrar.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Abrir Replit</a>

El primer error debería verse así (o similar):

![Error 1: Falta punto y coma](../resources/w2-01.png "Una captura de pantalla de un error del compilador que dice 'error: expected ';' after top level declarator'")

Podrás notar que el error contiene:

- El nombre del archivo que intentamos compilar (**`CompilerErrors.c`**).
- La línea donde se encontró el error (**`12`**).
- La posición en la línea donde se encuentra el error (**`19`**).

Como puedes ver, ¡el compilador te da la línea de código y señala dónde ocurrió realmente el error! Luego te da un breve nombre del error, en este caso, el compilador esperaba un punto y coma (**`;`**) al final de la línea. Simplemente puedes agregar un punto y coma para corregir este error.

Otro error menciona que falta una llave (**`}`**) cuando no se esperaba una. La solución para este error también es relativamente simple: puedes agregar la llave correspondiente `{` junto a `func()`.

{{% notice warning %}}
Una llave faltante suele ser la razón de errores aparentemente extraordinarios. El compilador no es muy bueno detectando dónde debería ir una llave, por lo que si estás incluyendo un archivo de encabezado con una llave faltante, estallará en tu cara. En casi todos los casos, cuando el compilador muestra una serie de errores en un código que no escribiste, probablemente falta una llave en algún lugar de tu código (o quizás incluso en el código de la biblioteca que estás usando).
{{% /notice %}}

Una vez que lo hayas corregido, puedes compilar el código nuevamente usando el mismo comando.

```bash
make CompilerErrors
```

¡Espera, hay más errores! Como se mencionó en la nota de advertencia, el compilador no es muy bueno detectando errores si falta una llave. Un error de compilación puede "ocultar" otros.

Usaremos una tabla para mostrar errores comunes de compilación y su causa general.

| Error | Causa | Solución General |
|---|---|---|
| Falta un punto y coma | Falta un punto y coma. | Agrega el punto y coma `;`.|
| Cuerpo de función esperado después de declarador de función | Falta una llave `{`, usualmente al inicio de una declaración del cuerpo de la función. | Agrega la llave `{` donde corresponde. |
| Se esperaba un identificador o '(' | En el contexto de una llave, usualmente significa que tienes una llave `{` adicional y sin par. | Elimina la llave o agrega una correspondiente `}` después de esta. |
| Redefinición de ... | Alguna parte de tu código tiene una variable declarada. Más tarde, fue declarada nuevamente. | Cambia el nombre de las variables o elimina una de ellas. |
| Uso de tipo no declarado... | El compilador no puede encontrar la declaración de un tipo que deseas usar. | Usualmente esto se debe a directivas `#include` incorrectas (ya que los tipos suelen declararse en los archivos de encabezado). Asegúrate de que no haya errores tipográficos. |
| Debes usar etiqueta `struct` (o `enum`) | C requiere que uses `struct NOMBRE_DEL_TIPO` o `enum NOMBRE_DEL_ENUM` cuando quieras referirte al tipo struct/enum. | Usualmente los desarrolladores de C usan una declaración `typedef` para no tener que escribir `struct` o `enum` al referirse a esos tipos. Sin embargo, puedes agregar esas palabras clave tú mismo. |
| No hay miembro llamado... | En tu `struct`, no existe un campo con el nombre solicitado. | Probablemente sea un error tipográfico, o aún no has definido un campo en tu `struct`. |
| Tipos incompatibles... | Estás mezclando tipos, lo cual no está permitido en C sin una conversión explícita. | Revisa si una asignación es correcta o usa una conversión explícita para resolver el error durante el tiempo de compilación. Pero ¡cuidado!, esto podría generar errores en tiempo de ejecución. |
| Tipo de argumento incompleto | Si una función devuelve void, no puedes pasarla como argumento a otra función. | Corrige la declaración de la función para no ser void, y asegúrate de que deseas tal comportamiento. |
| Paréntesis '(' o ')' adicionales antes de ';' | Paréntesis desbalanceados `()` | Tienes un paréntesis adicional en algún lugar. Revisa que haya un par coincidente para cada uno de ellos. |

Si aplicar una solución general no funciona, *entonces* deberías acudir a Internet en busca de ayuda. Para errores comunes con soluciones simples, saber cómo leer el error y descifrar qué necesita ser corregido puede ser mucho más rápido que buscarlo en línea.

{{% notice warning %}}
No todos los compiladores brindan información útil. Por ejemplo, los errores del compilador de C++ pueden variar desde errores simples (como en `CompilerErrors.c`) hasta bloques enormes de texto, especialmente al trabajar con plantillas. El objetivo de esta lección NO es disuadirte completamente del uso de fuentes en Internet, sino más bien familiarizarte con ellas y darte cierta intuición adicional sobre cómo solucionar errores simples.
{{% /notice %}}
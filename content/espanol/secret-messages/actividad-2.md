---
title: "Actividad 2 - Input y Variables"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

¡Muy bien! Ahora demos un paso más. 
No solo vamos a imprimir para quién es el mensaje, sino que vamos a ingresar el nombre del destinatario, y haremos que nuestro programa lo salude.

Para eso necesitaremos de las **variables**.


{{% notice tip %}}

### Variables

Una **variable** es un contenedor que guarda información.
Hay distintos tipos de variables que dependen en que información guarda. Pueden ser del tipo: 
1. **string**: guarda una secuencia de caracteres, es decir, de números, letras o símbolos. Por ejemplo `"hola"`, `"1, 2, 3"` son strings. 
2. **int**: guarda números enteros (sin decimales) ya sea negativo o positivo, como `1`, `100` y `-250`. 
3. **char**: sirve para contener un solo caracter. Por ejemplo `'A'` , `'e'`, `'I'`, etc. Un char siempre va entre comillas simples `''`.
4. **bool**: solo guarda `true` (verdadero) o `false` (falso).

Para crear una variable, necesitamos declararla de la siguiente manera:
```
int numero = 10;
```
Observemos en detalle esa instrucción:

Primero debemos indicar el tipo de información que va a guardar la variable. En este caso es del tipo `int`. Luego tenemos que escribir el nombre del contenedor, en el ejemplo el nombre es `numero`. Por último, indicamos que es lo que va a guardar. Para eso escribimos el signo igual `=`, luego el contenido (`10`) y como toda instrucción en C++, termina con un punto y coma `;`

Ahora, podemos usar la variable `numero` en el programa para hacer referencia al número que guarda esa variable, que sería el 10. Por ejemplo si queremos imprimir la variable, tenemos que usar la siguiente instrucción:

```
cout << "El numero es: " << numero << endl;
```
 
En la consola veremos:

```
El numero es: 10
```
{{% /notice %}}

{{< notice note >}}
Al usar **cout**, podemos imprimir palabras, números, y variables.
Para imprimir más de una cosa, debemos separar cada termino con los signos `<<`.
Ejemplo: 
```
int hora = 13;
cout << "Son las " << hora << " del mediodía" << endl;
```
Esto imprimirá: 
```
Son las 13 del mediodía
```
{{< /notice >}}

Lo siguiente que necesitaremos, es ingresar en la consola el nombre del destinatario (que guardaremos en una variable), y que el programa lo salude.

Para ingresar el nombre, vamos a usar la siguiente instrucción:
```
string nombre;
cin >> nombre;
```
Entendamos esta línea:

{{% notice tip %}}

### Entrada en la consola

Al igual que podemos imprimir en la consola con la instrucción `cout`, podemos ingresar datos escribiendo en la consola con la instrucción `cin`.

Lo que se escribe en la consola tiene que ser guardado en una **variable**. 

Entonces para ingresar datos escribimos `cin`, seguidos de dos operadores mayor `>>` (los contrarios a los que se usan con cout), y luego la variable que queremos ingresar.

En el ejemplo, estamos diciendo que lo que se escriba en la consola, va a ser el contenido de la variable **nombre**.

Entonces, si en la consola se escribiese: 
```
Reina
```
La variable `nombre` automaticamente representará el string "Reina".

Para ingresar datos en la consola, luego de apretar Run, debemos escribir en la pestaña **console** (la pantalla negra) y apretar la tecla enter al terminar.

{{% /notice%}}

¡Ahora si!

Vamos a empezar con nuestro programa.

Pasos a seguir para esta actividad:

1. Declara una variable del tipo string
2. Usa la instrucción `cin` para ingresar en la consola el contenido de esa variable.
3. Imprime en la consola "Hola " y la variable ingresada anteriormente.
4. Apreta Run. Escribie en la pestaña **console** el nombre del destinatario y presiona enter.


<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/activity-2?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% notice warning %}}

### ¡AYUDA! 

Si después de presionar el botón **Run**, está la palabra **error** en rojo en la pestaña **console**, es porque tienes errores en el código. Pídele ayuda al instructor para revisar tu código.

Mientas tanto puedes revisar lo siguiente:

1. No uses letras mayúsculas.
2. Asegurate que las lineas que escribiste tengan al final un punto y coma **`;`**.
3. Recuerda que solo los strings tiene que ir entre **comillas** "".
4. Por ahora, todo el código que escribas tiene que ir dentro de las llaves `{ }` de la funcion  `int main`. 

{{% /notice %}}



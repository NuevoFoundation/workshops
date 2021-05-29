---
title: "Objetos y Clases"
description: "Introducción a objetos y clases en Java."
date: 2020-07-16T00:00:00Z
weight: 7
---

### 1. Creando una Clase
Java es un lenguaje de programación <b>orientado a objetos</b>, cual significa que todo en Java está asociado con un <b>objeto</b> y una <b>clase</b> (el plano para un objeto).

Por ejemplo, la línea de código que usamos en la actividad 1 es una llamada de un método de una clase pre definida llamada `System`.
```java
System.out.println("Hello World");
```
1. `System` es una clase que se usa para manejar entradas y salidas del usuario.
2. `out` es una variable en la clase `System` de clas/tipo `PrintStream`.
3. `println()` es un método pre definido en la clase `PrintStream`.

<br />
Otra clase con la cual hemos interactuados en ejercisios previos es `String`. La clase `String` defines un par de reglas que determinan como una lista de caracteres deberían comportarse.

Con el siguiente código, creamos un objeto `String` llamado `name` usando las reglas definidas en la clase `String`:
```java
String name = "Patrick";
```
<br />
`System`, `PrintStream`, y `String` son clases pre definidas en Java. Sin embargo, no estamos limitados a solo usar ls clases pre definidas, y podemos crear nuestros propios tipos de data creando una clase. Esto es muy útil para que programadores puedan crear objectos específicos con ciertos atributos y comportamientos. Teniendo acceso a tipos de data definidos por el usuario nos permite crear distintos programas.

Vamos a aprender sobre las distintas partes de una clase:

{{% notice note %}}
#### Clase
Una clase es un plano o prototipo de un objeto nuevo. Por lo general, una clase contiene tres partes importantesÑ (1) campos de data/variables de instancia (2) constructor (3) métodos. 

<img src="../images/class.png" height="400"/> 

1. <b>campos de data/variables de instancia</b>: Estas son las variables que un objeto de esta clase tiene acceso a. Por ejemplo: Una clase llamada `Car` puede tener variables `tire` de la clase `Tire`.

2. <b>constructor</b>: un método para crear un objeto de esa Clase.

3. <b>métodos</b>: Los métodos de un objeto dentro de una clase.

Por ejemplo:
```java
public class SampleClass{
    // (1) campos de data/variables de instancia
    private String name; // ejemplo

    // (2) constructor
    public SampleClass(){
        name = "example";
    }
    // (3) métodos
    public sampleMethod(){}
}
```
{{% /notice %}}

### 2. Vamos a Intentarlo 🐥
Vamos a crea una clase `Bird` para representar a Patrick 🐥 y todos sus amigos pájaros siguiendo los siguientes pasos.

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsBird?lite=true#Bird.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

#### Primero, empezamos definiendo el nombre de la clase usando el formato `public` `class` `name`.
```java
public class Bird{}
```
<br />

####  Segundo, declaremos todos los campos de data que necesitaremos para la clase Bird: species, name, hobby, age, loveMusic.
Cada campo de data esta declarado en el formato: `private` `data type` `name` `;`.
1. Declaramos los 5 campos como `private` en la clase `Bird`. Nos ayuda a asegurarnos que la data solo pueda ser accesada dentro de su misma clase.

2. Identifiquemos un tipo de data adecuado para cada campo:
- `species` debería ser `String` que guarde por ejemplo: "duck", "swan", "owl".
- `name` debería ser `String` que guarde por ejemplo: "Patrick".
- `hobby` debería ser `String` que guarde por ejemplo: "play basketball".
- `age` debería ser `int` que guarde por ejemplo: 25.
- `loveMusic` debería ser `boolean` que guarde el valor true o false.

Por ejemplo, para declarar `species` como una clase privada `Bird`, usaríamos `private String species;` .

3. Termina de crear los 4 campos de data de la clase Bird.

<br />

#### Tercero, vamos a crear el constructor de la clase `Bird`. 
Usualmente, un constructor es un método que inicializa el valor de todos los campos. Teine el formato `public` `class name` `(parameter)`. Tenemos 5 campos de data en la clase, y por eso tenemos 5 parametros/entradas en el constructor.
```java
public Bird(String speciesInput, String nameInput, String hobbyInput, int ageInput, boolean loveMusicInput){
    // cuerpo del constructor
}
```
En el cuerpo del constructor, necesitamos inicializar todas las variables de instancia, asignandole a cada campo de data un valor inicial:
```java
species = speciesInput;
name = nameInput;
hobby = hobbyInput;
age = ageInput;
loveMusic = loveMusicinput;
```
<br />

#### Por último, vamos a crear unos métodos para la clase `Bird`.
Vamos a crear 6 métodos para esta clase.
-  getSpecies();   // retorna la especie de un pájaro
-  getName();      // retorna el nombre de un pájaro
-  getHobby();     // retorna el pasa tiempo de un pájaro
-  getAge();       // retorna la edad de un pájaro
-  getLoveMusic(); // retorna si al pájaro ama la música
-  toString();     // retorna la information como un string

Intente escribir los primeros 5 métodos con lo que ha aprendido en los ejercisios previos.

<br />
Luego, vamos a escribir el método `toString()` juntos.

`toString()` es un método que va a retornar un objeto de tipo `String`. 

Vamos a retornar un String que incluye todos los campos de la clase `Bird`: name, age, species, hobby, loveMusic llamando los 5 métodos que implementaste.
```java
public String toString(){
    // inicializa la variable info a un String vacío.
    String info = "";

    // agrega información al objetor String en el siguiente formato: 
    // Hi, my name is [name]. I am a [age] year old [species] who likes to [hobby].
    info = info + "Hi, my name is " + getName() + 
           ". I am a " + getAge() + " year old " + getSpecies() + 
           " who likes to " + getHobby() + ". ";

    // si al pájaro le gusta la música, appen the Bird likes music, append the String "I also like music very much!" to info
    if(getLoveMusic()){
        info = info + "I also like music very much!";
    }else{        
        info = info + "However, I do not like music!";
    }

    // retorna el valor de la variable info
    return info;
}
```
{{% notice warning %}}
Si implementaste corectamente la clase`Bird`, verás el siguiente mensaje luego de hacer click a `Run`:
```
Congratulations! You correctly implemented the Bird Class :)
```

Si hay algo incompleto o incorrecto cuando oprimas `Run`:
- Tal vez te salga el error `Main.java:3: error: cannot access Bird`.
- O si no, el mensaje, `Something is still not quite right!`.
{{% /notice %}}

### 3. Creando Pájaros 🐥
Felicitaciones! Has escrito su primera clase en Java. `Bird` class. Ahora vamos a escribir un programa que utilice la clase para crea objectos de tipo `Bird`.

Definimos la clase `Bird` para tener los siguientes atributos (variables de instancia) and y comportamientos (métodos):
<img src="../images/bird_class.png" height="450"/> 


Para crear un objeto nuevo de una clase en particular, llamamos al de esa clase en el siguiente formato `class name` `variable name` `=` `new` `constructor call`.

Recuerda que un constructor de la clase `Bird` es lo siguiente:
```java
public Bird(String speciesInput, String nameInput, String hobbyInput, int ageInput, boolean loveMusicInput);
```

Por esto, podemos crear un Bird con los siguientes atributos (species - duck; name - Patrick; hobby - hangout with friends; age - 15; loveMusic - true) con esta línea de codigo.
```java
Bird patrick = new Bird("duck", "Patrick", "hangout with friends", 15, true);
```
Intenta crear multiples pájaros de distintas especies usando la clase Bird 🐦🐤🐔🐧

<br />
Próximo, usaremos el método `toString()` en los objetos de tipo `Bird` para imprimir la información de nuestros amigos. Puedes hacer una de las siguientes:

1. Imprimir el valor que retorna el método `toString()`. (i.e. `System.out.println(patrick.toString());`)
2. Imprimir el objecto `Bird` quen en cambio llama el método `toString()` (i.e. `System.out.println(patrick);`).

Intante imprimir la informacíon de todos sus amigos pájaros 🐦🐤🐔🐧

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsBirdMain?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


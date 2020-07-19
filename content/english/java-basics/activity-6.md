---
title: "Object and Classes"
description: "Introduce object and class in Java."
date: 2020-07-16T00:00:00Z
weight: 7
---

### 1. Creating a Class!
Java is an object-oriented programming language, and in Java everything is associated with an <b>object</b> and a <b>class</b> (the blueprint for the object).

For starters, the line of code that we used to print statements from activity 1 is a method call from a class!
```java
System.out.println("Hello World");
```
1. `System` is a class that deals with user input and outputs.
2. `out` is a variable in class `System` of the type `PrintStream`.
3. `println()` is a method of the class `PrintStream`.

Another class/object we have interacted with in the previous exercises is the class `String` that defines a set of rules on how a list of characters should behave.

Besides the classes predefined in Java such as `System`, `PrintStream`, and `String`, we can also create our own class that defines an object!

{{% notice note %}}
#### Class
In a class, there are three important parts: (1) data fields/instance variables (2) constructor (3) methods, and a class definition follows the following format in general:
```java
public class SampleClass{
    // (1) data fields/instance variables
    private String name; // example

    // (2) constructor
    public SampleClass(){
        name = "example";
    }
    // (3) methods
}
```
(1) <b>data fields/instance variables</b>: These are the variables an Object of this class will have access to.
                                           For example: A `Car` class may have the field `tire` of type(class) `Tire`.

(2) <b>constructor</b>: This is the method we call to create an Object of this Class.

(3) <b>methods</b>: These are methods an Object of this class will be able to call to perform tasks.
{{% /notice %}}

{{% notice tip %}}
#### Public, or Private
As mentioned in the previous exercise, when defining a method, there are 4 parts `access specifier` `return type` `name` `parameter` where `access specifier` can be `public` or `private`.

Similary, 
{{% /notice %}}

### 2. Try it Out 🐥!
Let's make a `Bird` class to represent Patrick 🐥 and all of his best Bird friends!

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsBird?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

#### First, we start by defining the class name in the format `public` `class` `name`.
```java
public class Bird{}
```
<br />

####  Second, let's say each Bird will 5 field: species, name, hobby, age, loveMusic.
Let's identify the appropriate type to each field:
- species should be a `String` that store for exmaple: "duck", "swan", "owl".
- name should be a `String` that store for example: "Patrick".
- hobby should be a `String` that store for example: "play basketball".
- age should be an `int` that store for example: 25.
- loveMusic should be a `boolean` that store either true or false.

Let's declare all 5 fields as `private` in the class `Bird`:
For example, you would put `private String species;` to declare `species` as a private field of class `Bird`.

Finish the other 4 variables!

<br />

#### Third, let's create the constructor for the class `Bird`. 
Usually, constructor is the method that assign values to all the instance variables in a class. It has the format `public` `class name` (`parameter`).
```java
public Bird(String species_input, String name_input, String hobby_input, int age_input, boolean loveMusic_input){
    // constructor body
}
```
The method header contains 5 parameters, which will be inputs of the method call to the constructor when the program creates an `Bird` object!
In the constructor body, we need to initialize all the instance variables, or assign them to initial values with the following:
```java
species = species_input;
name = name_input;
hobby = hobby_input;
age = age_input;
loveMusic = loveMusic_input;
```
<br />

#### Lastly, let's create some methods for the class `Bird`.
Let's create 6 methods for this class!
1. getSpecies();   // return species of the bird
2. getName();      // return name of the bird
3. getHobby();     // return hobby of the bird
4. getAge();       // return age of the bird
5. getLoveMusic(); // return whether the bird loves music
6. toString();     // return information in a String

Try to write out the first 5 methods with what you learned from the previous exercise!

And, let's write the `toString()` method together!
```java
public String toString(){
    String info = "";
    info = info + "Hi, my name is " + getName() + 
           ". I am a " + getAge() + "year old " + getSpecies() + 
           " who likes to " + getHobby() + ". ";
    if(getLoveMusic()){
        info = info + "I also like music very much!";
    }else{        
        info = info + "However, I do not like music!";
    }
    return info;
}
```

### 3. Creating Birds 🐥!

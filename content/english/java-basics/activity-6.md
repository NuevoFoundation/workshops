---
title: "Object and Classes"
description: "Introduce object and class in Java."
date: 2020-07-16T00:00:00Z
weight: 7
---

### 1. Creating a Class!
Java is an object-oriented programming language, and in Java everything is associated with an <b>object</b> and a <b>class</b> (the blueprint for the object).

For starters, the line of code that we used to print statements from activity 1 is activity a method call from a predefined class `System`!
```java
System.out.println("Hello World");
```
1. `System` is a class that deals with user input and outputs.
2. `out` is a variable in class `System` of the type `PrintStream`.
3. `println()` is a method of the class `PrintStream`.

Another class we have interacted with in the previous exercises is `String`. The `String` class defines a set of rules on how a list of characters should behave.

With the line of code, `String name = "Patrick";`, we created a `String` object with the rules defined in the `String` class.

`System`, `PrintStream`, and `String` are predefined classes in Java. However, we are not limited to these classes, we can actually create our own types by writing a new class that defines an object!

{{% notice note %}}
#### Class
A class is a blueprint or prototype of a new type of object.
In general, a class contains three important parts: (1) data fields/instance variables (2) constructor (3) methods. 

<img src="../images/class.png" height="400"/> 

(1) <b>data fields/instance variables</b>: These are the variables an object of this class has access to.
                                           For example: A `Car` class may have the field `tire` of class `Tire`.

(2) <b>constructor</b>: This is a method we call to create an object of this Class.

(3) <b>methods</b>: These are methods an object of this class will be able to call to perform tasks.

For example:
```java
public class SampleClass{
    // (1) data fields/instance variables
    private String name; // example

    // (2) constructor
    public SampleClass(){
        name = "example";
    }
    // (3) methods
    public sampleMethod(){}
}
```
{{% /notice %}}

### 2. Try it Out 🐥!
Let's make a `Bird` class to represent Patrick 🐥 and all of his best Bird friends!

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsBird?lite=true#Bird.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

#### First, we start by defining the class name in the format `public` `class` `name`.
```java
public class Bird{}
```
<br />

####  Second, let's declare all the fields of the Bird class: species, name, hobby, age, loveMusic.
Let's identify the appropriate type to each field:
- species should be a `String` that store for exmaple: "duck", "swan", "owl".
- name should be a `String` that store for example: "Patrick".
- hobby should be a `String` that store for example: "play basketball".
- age should be an `int` that store for example: 25.
- loveMusic should be a `boolean` that store either true or false.

Let's declare all 5 fields as `private` in the class `Bird` which means these data can only be accessed within this class:

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

Try to write out the first 5 methods with what you learned from the previous exercise about writing methods!

And, let's write the `toString()` method together!

`toString()` is a method that returns the `String` representation of the object. We will return a String that include all fields of the `Bird`: name, age, species, hobby, loveMusic by calling the methods that returns those particular fields!
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
We defined the `Bird` class to have the following attributes (instance variables) and bahaviors (methods):
<img src="../images/bird_class.png" height="450"/> 

After writing the `Bird` class, let's write a program that uses `Bird` objects!

To create a new object of a particular class, we make a method call to the class' consturctor.

Recall that the constructor of `Bird` class is the following:
```java
public Bird(String species_input, String name_input, String hobby_input, int age_input, boolean loveMusic_input);
```

Hence, we can create a Bird with the attribute: 
- species - duck
- name - Patrick
- hobby - hangout with friends
- age - 15
- loveMusic - true, 
with one line of code in the format `class name` `variable name` `=` `new` `constructor call`.
```java
Bird patrick = new Bird("duck", "Patrick", "hangout with friends", 15, true);
```
Try it out yourself and create multiple Birds of different species 🐦🐤🐔🐧!
<br />
Next, let's try to call on `toString()` method on these `Bird` objects we created. You can do either of the following:

1. directly call the `toString()` method. (i.e. `patrick.toString();`)
2. put the name you given to the object in a print statement. (i.e. `System.out.println(patrick);`).

Try it out yourself to print out information of all the birds 🐦🐤🐔🐧!

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsBird?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
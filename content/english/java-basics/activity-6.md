---
title: "Object and Classes"
description: "Introduce object and class in Java."
date: 2020-07-16T00:00:00Z
weight: 7
---

<p style="text-align: center;"><iframe width="50%" height="500px" src="https://www.youtube.com/embed/ejXgw0qchDg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

### 1. Creating a Class!
Java is an <b>object-oriented</b> programming language, which means everything in Java is associated with an <b>object</b> and a <b>class</b> (the blueprint for the object).

For starters, the line of code that we used to print statements from activity 1 is actually a method call from a predefined class called `System`!

```java
System.out.println("Hello World");
```

1. `System` is a class that deals with user input and outputs.
2. `out` is a variable in class `System` of the class/type `PrintStream`.
3. `println()` is a method defined in the class `PrintStream`.

<br />

Another class we have interacted with in the previous exercises is `String`. The `String` class defines a set of rules on how a list of characters should behave.

With following line of code, we created a `String` object called `name` using the rules defined in the `String` class:

```java
String name = "Patrick";
```

<br />

`System`, `PrintStream`, and `String` are predefined classes in Java. However, we are not limited to these predefined classes, and we can actually create our own data type by writing a class! This is useful for coders to create specific objects to have certain attributes and behaviors. Having access to these user-defined types allows us to build distinct programs.

Let's learn about the different parts in a class below:

{{% notice note %}}
#### Class
A class is a blueprint or prototype of a new type of object. In general, a class contains three important parts: (1) data fields/instance variables (2) constructor (3) methods.

<img src="../images/class.png" height="400"/> 

1. <b>data fields/instance variables</b>: These are the variables an object of this class has access to. For example: A `Car` class may have the field `tire` of class `Tire`.

2. <b>constructor</b>: This is a method we call to create an object of this Class.

3. <b>methods</b>: These are methods an object of this class will be able to call to perform certain tasks.

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

Let's make a `Bird` class to represent Patrick 🐥 and all of his Bird friends by following the steps below!

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsBird?lite=true#Bird.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

#### First, we start by defining the class name in the format `public` `class` `name`.

```java
public class Bird{}
```

<br />

####  Second, let's declare all the fields of the Bird class: species, name, hobby, age, loveMusic.

Each field is declared in the format: `private` `data type` `name` `;`.

1. We declare all 5 fields as `private` in the class `Bird`. This ensures these data can only be accessed within this class.

2. Let's identify the appropriate type for each field:

- `species` should be a `String` that stores for exmaple: "duck", "swan", "owl".
- `name` should be a `String` that stores for example: "Patrick".
- `hobby` should be a `String` that stores for example: "play basketball".
- `age` should be an `int` that stores for example: 25.
- `loveMusic` should be a `boolean` that stores either true or false.

For example, to declare `species` as a private field of class `Bird`, you would put `private String species;` .

3. Finish creating the other 4 fields of the Bird class!

<br />

#### Third, let's create the constructor for the class `Bird`. 

Usually, constructor is the method that initialializes value to all the fields in a class. It has the format `public` `class name` `(parameter)`. Since we have 5 fields in this class, the constructor will take in 5 parameter/inputs.

```java
public Bird(String speciesInput, String nameInput, String hobbyInput, int ageInput, boolean loveMusicInput){
    // constructor body
}
```

In the constructor body, we need to initialize all the instance variables, by assign each variables to its initial values:

```java
species = speciesInput;
name = nameInput;
hobby = hobbyInput;
age = ageInput;
loveMusic = loveMusicinput;
```

<br />

#### Lastly, let's create some methods for the class `Bird`.

We are gonna create 6 methods for this class!
-  getSpecies();   // return species of the bird
-  getName();      // return name of the bird
-  getHobby();     // return hobby of the bird
-  getAge();       // return age of the bird
-  getLoveMusic(); // return whether the bird loves music
-  toString();     // return information in a String

Try to write out the first 5 methods with what you learned from the previous exercise about writing methods!

<br />
After, let's write the `toString()` method together!

`toString()` is a method that returns the `String` representation of the object. 

We will return a String that include all fields of the `Bird`: name, age, species, hobby, loveMusic by calling the 5 methods you just implemented!

```java
public String toString(){
    // initialize variable info to have empty String
    String info = "";

    // append information to the String in the format: 
    // Hi, my name is [name]. I am a [age] year old [species] who likes to [hobby].
    info = info + "Hi, my name is " + getName() + 
           ". I am a " + getAge() + " year old " + getSpecies() + 
           " who likes to " + getHobby() + ". ";

    // if the Bird likes music, append the String "I also like music very much!" to info
    if(getLoveMusic()){
        info = info + "I also like music very much!";
    }else{        
        info = info + "However, I do not like music!";
    }

    // return the full String
    return info;
}
```

{{% notice warning %}}
If you correctly implemented the `Bird` class, you will see the following message when you click `Run`:

```
Congratulations! You correctly implemented the Bird Class :)
```

If there is still something incomplete or incorrect when you click `Run`:
- You might get an error such as `Main.java:3: error: cannot access Bird`.
- Or, you will see the message, `Something is still not quite right!`.
{{% /notice %}}

### 3. Creating Birds 🐥!

Congratulations! You just wrote you first Java class `Bird` class. Now let's learn to write a program that uses `Bird` objects!

We defined the `Bird` class to have the following attributes (instance variables) and behaviors (methods):
<img src="../images/bird_class.png" height="450"/> 

To create a new object of a particular class, we call the constructor of that class in the format `class name` `variable name` `=` `new` `constructor call`.

Recall that the constructor of `Bird` class is the following:

```java
public Bird(String speciesInput, String nameInput, String hobbyInput, int ageInput, boolean loveMusicInput);
```

Hence, we can create a Bird with these attributes (species - duck; name - Patrick; hobby - hangout with friends; age - 15; loveMusic - true) with this line of code.

```java
Bird patrick = new Bird("duck", "Patrick", "hangout with friends", 15, true);
```

Try it out yourself and create multiple Birds of different species 🐦🐤🐔🐧!

<br />
Next, let's call the `toString()` method on these `Bird` objects we created to print the information of our friends. You can do either of the following:

1. Print the return value of `toString()` method. (i.e. `System.out.println(patrick.toString());`)
2. Directly print the `Bird` object, which prompt `toString()` to be called in the background. (i.e. `System.out.println(patrick);`).

Try it out and print out all the information of the bird friends you created 🐦🐤🐔🐧!

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsBirdMain?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
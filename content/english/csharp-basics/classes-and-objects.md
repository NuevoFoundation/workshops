---
title: "Classes and Objects"
description: "Introduce classes and objects in C#."
date: 2024-09-16T00:00:00Z
weight: 8
---

## What is an Object and what is a Class?

An Object is a thing (noun) that has certain characteristics and can perform certain tasks. A Class is the blueprint or definition for that object when it is created.

An example is a Person. A Person is a kind of Class. A person can have certain characteristics that distinguish it from another person. It can have blue eyes, it can be 15 years old, etc. A person can also perform certain tasks. It can walk, it can talk, etc.

A C# Object is an instance of a C# Class. In this instance "Bea" is a "Person". "Bea" has brown eyes. This is a property (or data field) of "Bea". "Bea" can speak in English. "Bea" can speak in Spanish. These are methods  that "Bea" can perform.

## Creating a Class!

C# is an **object-oriented** programming language, which means everything in C# is associated with an **object** and a **class** (the blueprint for the object).

For starters, the line of code that we used to print statements from activity 1 is actually a method call from a predefined class called `System`!

```c#
Console.WriteLine("Hello World");
```

1. `Console` is a class that deals with user input and outputs.
3. `WriteLine()` is a method defined in the class `Console`.

Another built-in class we have interacted with in the previous exercises is `string`. The `string` class defines a set of rules on how a list of characters should behave.

With the following line of code, we created a `string` object called `name` using the rules defined in the `string` class:

```c#
string name = "Patrick";
```

`Console`, and `string` are predefined classes in C#. However, we are not limited to these predefined classes, and we can actually create our own data type by writing a class! This is useful for coders to create specific objects to have certain attributes and behaviors. Having access to these user-defined types allows us to build distinct programs.

Let's learn about the different parts in a class below:

{{% notice note %}}
### Class
A class is a blueprint or prototype of a new type of object. In general, a class contains three important parts: 

<img src="../images/class.png" height="400" alt="A Class blueprint for an object contains instance varialbes/data fields which are data/attributes in the object, constructor which are methods that creates the obejct of the class, and methods, which are behaviors possible for the object."/> 

**Element** | **Description** | **Example**
---|---|---
**data fields/instance variables** | variables an object of this class has access to that describe the object | For example, a Person class could have fields eyeColor, age, height.
**constructor** | method called automatically when an object from this class is created, constructors have the same name as the class | There can be more than one constructor per class
**methods** | methods for the object of this class to perform certain tasks | Person class could have methods talk and walk.  

For example:

```c#
public class Person{
    // (1) data fields/instance variables
    private String name; // example
    private int age;
    private int height;

    // (2) constructor - constructors have the same name as the class
    public Person()
    {
        name = "Bea";
        age = 29;
        height = 167;
    }

    // (2) constructor - you can have more than one
    public Person( String nameInput, int ageInput, int heightInput)
    {
        name = nameInput;
        age = ageInput;
        height = heightInput;
    }

    // (3) methods
    public void talk()
    {
        Console.WriteLine($"Hello from {name}");
    }
}
```

{{% /notice %}}

## Try it Out 🐥!

Let's make a `Bird` class to represent Patrick 🐥 and all of his Bird friends by following the steps below! 
**Note:** For this exercise, you will be working in Bird.cs instead of Main.cs.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsBird" target="_blank">Launch Replit</a>

### First, we start by defining the class name in the format `public` `class` `name`.

```c#
public class Bird{}
```

<br />

### Second, let's declare all the fields of the Bird class: species, name, hobby, age, loveMusic.

Each field is declared in the format: `access specifier` `data type` `name` `;`.

1. We declare all 5 fields as `private` in the class `Bird`. This ensures these fields can only be accessed within this class.

2. Let's identify the appropriate type for each field:

- `species` should be a `String` that stores for exmaple: "duck", "swan", "owl".
- `name` should be a `String` that stores for example: "Patrick".
- `hobby` should be a `String` that stores for example: "play basketball".
- `age` should be an `int` that stores for example: 25.
- `loveMusic` should be a `bool` that stores either true or false.

For example, to declare `species` as a private field of class `Bird`, you would put `private String species;` .

3. Finish creating the other 4 fields of the Bird class!

### Third, let's create the constructor for the class `Bird`. 

Usually, constructor is the method that initialializes value to all the fields in a class. It has the format `public` `class name` `(parameter)`. Since we have 5 fields in this class, the constructor will take in 5 parameter/inputs.

```c#
public Bird(string speciesInput, string nameInput, string hobbyInput, int ageInput, bool loveMusicInput){
    // constructor body
}
```

In the constructor body, we need to initialize all the instance variables, by assign each variables to its initial values:

```c#
species = speciesInput;
name = nameInput;
hobby = hobbyInput;
age = ageInput;
loveMusic = loveMusicinput;
```

<br />

### Lastly, let's create some methods for the class `Bird.`

We are gonna create 6 methods for this class!
- `getSpecies();`   // return species of the bird
- `getName();`      // return name of the bird
- `getHobby();`     // return hobby of the bird
- `getAge();`       // return age of the bird
- `getLoveMusic();` // return whether the bird loves music
- `ToString();`     // return information in a string

Try to write out the first 5 methods with what you learned from the previous exercise about writing methods!

After, let's write the `ToString()` method together!

`ToString()` is a method that returns the `string` representation of the object. 

We will return a String that include all fields of the `Bird`: name, age, species, hobby, loveMusic by calling the 5 methods you just implemented!

```c#
public string ToString(){
    // initialize variable info to have empty String
    string info = "";

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

    // return the full string
    return info;
}
```

{{% notice warning %}}
If you correctly implemented the `Bird` class, you will see the following message when you click `Run`:

```
Congratulations! You correctly implemented the Bird Class :)
```

If there is still something incomplete or incorrect when you click `Run`:
- You might get an error such as `todo: fill this in`.
- Or, you will see the message, `Something is still not quite right!`.
{{% /notice %}}

## Creating Birds 🐥!

Congratulations! You just wrote you first C# class `Bird` class. Now let's learn to write a program that uses `Bird` objects!

We defined the `Bird` class to have the following attributes (instance variables) and behaviors (methods):
<img src="../images/bird_class.png" height="450" alt="Bird Class blueprint for a Bird object contains instance variables/data fields which include String species, String name, String hobby, int age, and bool loveMusic, constructor, which requires all 5 variables to be passed in, and methods, including String getSpecies(), String getName(), String getHobby(), int getAge(), bool getLoveMusic(), and String toString()." /> 

To create a new object of a particular class, we call the constructor of that class in the format `class name` `variable name` `=` `new` `constructor call`.

Recall that the constructor of `Bird` class is the following:

```C#
public Bird(string speciesInput, string nameInput, string hobbyInput, int ageInput, bool loveMusicInput);
```

Hence, we can create a Bird with these attributes (species - duck; name - Patrick; hobby - hangout with friends; age - 15; loveMusic - true) with this line of code.

```c#
Bird patrick = new Bird("duck", "Patrick", "hangout with friends", 15, true);
```

Try it out yourself and create multiple Birds of different species 🐦🐤🐔🐧!

<br />
Next, let's call the `ToString()` method on these `Bird` objects we created to print the information of our friends. You can do either of the following:

1. Print the return value of `ToString()` method. (i.e. `Console.WriteLine(patrick.ToString());`)
2. Directly print the `Bird` object, which prompts `ToString()` to be called in the background. (i.e. `Console.WriteLine(patrick);`).

Try it out and print out all the information of the bird friends you created 🐦🐤🐔🐧!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/CSharpBasicsClasses" target="_blank">Launch Replit</a>

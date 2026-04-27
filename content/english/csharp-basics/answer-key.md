---
title: "C#: Basics - Answer Key"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
These are sample solutions. Many challenges have multiple valid answers, especially those that ask you to create your own examples. Your solution is correct if it produces the expected output!
{{% /notice %}}

## Variables and Data Types

### Help Patrick Fix His Variables

Patrick's code has the wrong data types assigned to each variable. Here are the corrected declarations:

```csharp
string bestFriend = "Minerva";
int numOfFriends = 4;
double GPA = 3.6;
char meaningOfLife = '$';
bool loveMusic = true;
```

**Explanation:** Each variable needs a data type that matches the value being stored:

| Variable | Wrong Type | Correct Type | Why |
|----------|-----------|-------------|-----|
| `bestFriend` | `int` | `string` | `"Minerva"` is text, not a number |
| `numOfFriends` | `bool` | `int` | `4` is a whole number, not true/false |
| `GPA` | `string` | `double` | `3.6` is a decimal number, not text |
| `meaningOfLife` | `double` | `char` | `'$'` is a single character, not a decimal |
| `loveMusic` | `char` | `bool` | `true` is a boolean value, not a character |

Output:
```
You fixed it!
```

## Operators

### Exam Statistics

Given the grades: Patrick (88), Tom (89), Mary (95), Chris (84), Jen (92):

```csharp
// 1. Declare student grade variables
int patrickGrade = 88;
int tomGrade = 89;
int maryGrade = 95;
int chrisGrade = 84;
int jenGrade = 92;

// 2. Calculate the class average
average = (patrickGrade + tomGrade + maryGrade + chrisGrade + jenGrade) / 5.0;

// 3. Use relational operators for the comparisons
bool over60 = average > 60;
bool over70 = average > 70;
bool over80 = average > 80;
bool over90 = average > 90;
```

{{% notice tip %}}
We divide by `5.0` instead of `5` to get a decimal result. In C#, dividing two integers gives an integer (the remainder is thrown away). Using `5.0` ensures we get the exact average.
{{% /notice %}}

Output:
```
---------------------------
     Music Grade Report    
---------------------------

Student Grades:          
- Patrick: 88
- Tom: 89
- Mary: 95
- Chris: 84
- Jen: 92

Class Average: 89.6
- Average Over 60: True
- Average Over 70: True
- Average Over 80: True
- Average Over 90: False
```

## Control Structures

### If-Statement: Patrick's Greeting

Fill in the boolean expressions so Patrick says the right greeting based on the hour:

```csharp
int currentHour = 10; // change this to test different hours (0-23)

if (currentHour < 12)
{
    Console.WriteLine("Good Morning");
}
else if (currentHour < 20)
{
    Console.WriteLine("Good Afternoon");
}
else
{
    Console.WriteLine("Good Night");
}
```

**How it works:**
- Hours 0-11: `currentHour < 12` is `true` → prints "Good Morning"
- Hours 12-19: `currentHour < 12` is `false`, but `currentHour < 20` is `true` → prints "Good Afternoon"
- Hours 20-23: both conditions are `false` → falls into `else` → prints "Good Night"

### For-Loop: Sum of 1 to 100

Convert the while loop to a for loop that calculates 1 + 2 + 3 + ... + 100:

```csharp
int total = 0;
for (int num = 1; num <= 100; num = num + 1)
{
    total = total + num;
}
Console.WriteLine("Answer calculated in a for loop: " + total);
```

Output:
```
Answer calculated in a for loop: 5050
```

{{% notice tip %}}
The answer is 5050. A famous story says the mathematician Carl Friedrich Gauss figured this out as a child by noticing that 1 + 100 = 101, 2 + 99 = 101, and so on — giving 50 pairs of 101, which equals 5050!
{{% /notice %}}

## Methods

### Count the Pyramid

Write a method that calculates the total number of beads in a square-number pyramid with `n` levels. Level 1 has 1×1 = 1 bead, level 2 has 2×2 = 4 beads, level 3 has 3×3 = 9 beads, and so on.

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

**How it works:** The method loops through each level from 1 to `levels`, adding the square of the level number (`i * i`) to the running total.

Example values:

| Levels | Calculation | Total |
|--------|------------|-------|
| 1 | 1×1 | 1 |
| 2 | 1 + 4 | 5 |
| 3 | 1 + 4 + 9 | 14 |
| 4 | 1 + 4 + 9 + 16 | 30 |

Output:
```
Congratulations! Challenge Solved!
```

## Classes and Objects

### Build the Bird Class

Here is the complete `Bird` class with all fields, the constructor, and all methods:

```csharp
public class Bird
{
    // Step 1: Declare private fields
    private string species;
    private string name;
    private string hobby;
    private int age;
    private bool loveMusic;

    // Step 2: Constructor
    public Bird(string speciesInput, string nameInput, string hobbyInput, int ageInput, bool loveMusicInput)
    {
        species = speciesInput;
        name = nameInput;
        hobby = hobbyInput;
        age = ageInput;
        loveMusic = loveMusicInput;
    }

    // Step 3: Getter methods
    public string getSpecies()
    {
        return species;
    }

    public string getName()
    {
        return name;
    }

    public string getHobby()
    {
        return hobby;
    }

    public int getAge()
    {
        return age;
    }

    public bool getLoveMusic()
    {
        return loveMusic;
    }

    // Step 4: ToString method
    public string ToString()
    {
        string info = "";
        info = info + "Hi, my name is " + getName() +
               ". I am a " + getAge() + " year old " + getSpecies() +
               " who likes to " + getHobby() + ". ";

        if (getLoveMusic())
        {
            info = info + "I also like music very much!";
        }
        else
        {
            info = info + "However, I do not like music!";
        }

        return info;
    }
}
```

Output:
```
Congratulations! You correctly implemented the Bird Class :)
```

### Creating Bird Objects

Once you have the `Bird` class, you can create Bird objects and print their information:

```csharp
Bird patrick = new Bird("duck", "Patrick", "swimming", 15, true);
Bird sally = new Bird("swan", "Sally", "reading", 10, false);
Bird oscar = new Bird("owl", "Oscar", "stargazing", 20, true);

Console.WriteLine(patrick.ToString());
Console.WriteLine(sally.ToString());
Console.WriteLine(oscar.ToString());
```

Example output:
```
Hi, my name is Patrick. I am a 15 year old duck who likes to swimming. I also like music very much!
Hi, my name is Sally. I am a 10 year old swan who likes to reading. However, I do not like music!
Hi, my name is Oscar. I am a 20 year old owl who likes to stargazing. I also like music very much!
```

{{% notice note %}}
You can create birds with any species, name, hobby, age, and music preference you like! The examples above are just one possibility.
{{% /notice %}}

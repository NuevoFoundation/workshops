---
title: "Activity 5 - ASCII Code"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

That's great!

In this activity we will encrypt (make secret) the name of the recipient.

Let's use the **ASCII Code**

{{% notice tip %}}

### ASCII Code

The ASCII code shows that each character has a numeric value. For example, the character `A` is the number 65, `B` is 66, `C` is 67, etc.

The following list shows the value of the most commonly used characters:

![List of ASCII Codes](../media/ascii-english.png)

Since each character has a numeric value, we can use this to add or subtract values to these letters, and thus change the order of them in a certain way. It allows us to convert characters (`char`) into numbers (`int`) and vice versa.

Example
```
char letter = 'A';
int letter_value = letter;

cout << letter << " = " << letter_value << endl;
```
This will print:
```
A = 65
```

In this example, we save the character in a variable type **char**. Then, in an **int** type variable we save the char type variable, but since the second variable saves numbers, it will convert the character into its numerical value according to the ASCII code.

We could do the opposite, for example:
```
int letter_value = 67;
char letter = letter_value;
cout << letter_value << " = " << letter << endl;
```
This will print:
```
67 = C
```
{{% /notice %}}

To create the secret message we will use a keyword, from which we will encode the name. The idea is to go through each character of the name with a **for** statement, and at the same time go through each character of the keyword. Then we will add the value of the character of the name and the keyword, and the result will be a new character, which will make the message encrypted.

For example, if my keyword is `queen` and the name I want to encrypt is `programmer`, the program has to add the `'r'` and the `'p'`, and save the result in place of 'p' in the string "programmer". Then I would add the  `'r'` and the `'e'`, the  `'o'` and the `'i'` , etc. When we are in character 5 of the programmer string (counted the first as 0), we will have to turn around in the queen string and start in the returned character 0, that is, the letter `'r'`, since the queen string has no more characters.

For that, we are going to gather part of what we have already done, and we must follow the following steps:

1. First, create a variable of type `string` to be the keyword.
2. Store the input received from console into this variable. This will be the name.
3. Repeat the first two steps, but this will store the keyword.
3. Declare a `for` loop, and use a variable of type `int` initialized to 0. Add `1` to this variable for each cycle of the loop, and continue the loop while the variable is less than the `string` variable's `size`.
4. In the body of the `for` loop, create an `int` variable that is equal to the sum of the name character (`name[i]`) and the keyword character at the counter position (`key[counter]`). From this sum we must subtract a lowercase letter `'a'` so that the sum corresponds to a letter and not some other random character of the ASCII code.
5. Use an `if` statement to determine whether the sum of characters corresponds to a character greater than `'z'`. If so, subtract by `25` (the number of letters of the alphabet) to ensure we get a true letter in the alphabet.
6. Set the character `name[i]` to be the value contained by the `sum` variable. This will change the original letter to the new character.
7. Add `1` to the counter we carry from the keyword.
8. Check if the keyword counter is greater than or equal to the length of the `key` string; if so, reset the counter to `0`.
9. Finally, after the `for` statement, print the encrypted message to the console.

Remember that you can always go back to the previous activities to review anything!

Once the steps are complete, start playing and encrypting your words! Press **Run** and type in the console the keyword followed by the enter key, and then the name or word to encrypt, followed also by a enter. For example, you can copy and paste the following into your console:
```
programmer
queen
```
{{< alert theme="warning" >}} **Warning:** in this program we should always write the strings and characters in **lowercase letters**. {{< /alert >}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-5-english" target="_blank">Launch Replit</a>

{{< alert theme="danger" >}}**Important:** To paste into the console, right click the console and click "Paste". Otherwise, the paste operation may not work correctly. {{< /alert >}}
© 2022 GitHub, Inc.

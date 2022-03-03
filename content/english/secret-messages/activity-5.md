---
title: "Activity 5 - Ascii Code"
date: 2022-02-23
weight: 4
draft: true
---

That's great!

In this activity we will encrypt (make secret) the name of the recipient.

Let's use the **Ascii Code**

{{% notice tip %}}

### Ascii Code

The Ascii code shows that each character has a numeric value. For example, the character 'A' is the number 65, 'B' is the 66, 'C' the 67, etc.

The following list shows the value of the most commonly used characters:

Lista del código ASCII

That each character has a value, will serve us to add or subtract letters, and thus change the order of them in a certain way. It allows us to convert characters () into numbers () and vice versa.charint

Example
```
char letra = 'A';
int valor_letra = letra;

cout << letra << " = " << valor_letra << endl;
```
This will print:
```
A = 65
```

In this example, we save the character in a variable type **char**. Then, in an **int** type variable we save the char type variabale, but since the second variable saves numbers, it will convert the character into its numerical value according to the ascii code.A

In this way, we could do the opposite, for example:
```
int valor_letra = 67;
char letra = valor_letra;
cout << valor_letra << " = " << letra << endl;
```
This will print:
```
67 = C
```
{{% /notice %}}

To create the secret message we will use a keyword, from which we will encode the name. The idea is to go through each character of the name with a **for** statement, and at the same time go through each character of the keyword. Then we will add the value of the character of the name and the keyword, and the result will be a new character, which will make the message encrypted.

For example, if my keyword is 'queen' and the name I want to encrypt is 'programmer', the program has to add the 'r' and the 'p', and save the result in place of 'p' in the string "programmer". Then I would add the  'r' and the 'e', the  'o' and the 'i' , etc. When we are in character 5 of the programmer string (counted the first as 0), we will have to turn around in the queen string and start in the returned character 0, that is, the letter 'r', since the queen string has no more characters.

For that, we are going to gather part of what we have already done, and we must follow the following steps:

1. Creates a variable of type string to be the keyword.
2. Enter its value per console.
3. Declares a variable type int and initializes it to 0. To this variable, we will add 1 in each cycle of the for to go through the keyword.
4. In the for statement, create an int variable that is equal to the sum of the name character ('name[i]') and the keyword character at the counter position ('key[counter]'). From this sum we must subtract a lowercase letter 'a' so that the sum corresponds to a letter and not another character of the ascii code.
5. Uses an if statement to determine whether the sum of characters corresponds to a character greater than 'z'. If so, this number must be subtracted from 25 (the number of letters of the alphabet) so that the number of the turn, and begin with the letter 'a'.
6. Equalizes the character 'name[i]' to the variable int with the sum. This will change the original letter to the new character.
7. Add 1 to the counter we carry from the keyword.
8. Schedule a condition where if the keyword counter is greater than or equal to the length of the key string, the counter will be worth 0 again.
9. Finally, after the for statement, print the various name by console.

To help, remember that you can go back to the other activities.

Once the steps are complete, start playing and encrypting your words! Press **Run** and type in the console the keyword followed by the enter key, and then the name or word to encrypt, followed also by a enter. For example, you can copy and paste the following into your console:

programmmer
reina

{{< alert theme="warning" >}} **Be careful**, in this program we must always write the strings and characters in **lowercase letter**. {{< /alert >}}

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/actividad-5?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin-scripts allow-modals"></iframe>

{{< alert theme="danger" >}} **Be careful**. To paste something into the console, right-click paste. Otherwise it may not work. {{< /alert >}}
© 2022 GitHub, Inc.

---
title: "Help, I am stuck!"
description: "Setting up headphones"
date: 2019-07-23T11:45:38-07:00
weight: 12
prereq: "None"
difficulty: "Beginner"
draft: false
---
##### No worries! See if any of the following helps you, if not, feel free to reach out to one of us, and we will help you.

1.  Indentation is very important when you are working in Python. Be careful of spaces & tabs in your code, because indentation errors can sometimes be pretty difficult to spot. 

    ![IndentationError: expected an indented block](../img/screenshot-indentationerror.png)

    However on the positive side, strict formatting makes Python code very clean and organized. Are all your variables, functions indented properly as
    instructed?
2.  SyntaxError: invalid syntax
    Verify your keywords are spelled correctly and that you are following the structure defined.

3.  IndentationError: unexpected indent
    If you see this, check your indentions.

4.  NameError: global name \'\-\--\' is not defined
    Variables that are defined within a function can only be used within the function. If you try to use a variable from one function in another function, you will receive this error. 
    
    To make information available to other functions you pass it out of one function with the return statement, possibly assigning it to a variable. Then you pass it into another function using a parameter. See the functions tutorial link in my signature for a detailed explanation.

5.  Cannot recognize error: spelling mistake?
    You usually receive this when you make a spelling mistake in your keywords. Check all of your keywords.

6.  TypeError: Can't convert 'int' object to str implicitly
    Check to make sure you are not trying to use an integer in string actions (You can not string concatentate a string and an integer. You must convert the integer to a string first).
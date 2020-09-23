---
title: "Activity 6 - A BAD File"
description: "Use Linux commands to search"
date: 2020-09-17
prereq: "None."
difficulty: "Intermediate"
weight: 9
---

*I know I had a file `secret-message.txt` with one of my favorite quotes in it. "Do. Or do not. There is no try." Can you help me find it?*

### Searching for a pattern in a file?

`grep` is a command used to search for a pattern of `chars`. There are different flags or options that can change how it is used.  
The format is: `grep [flag] “[pattern]” [filename]`.

{{% notice tip %}}
A `char` is any letter, symbol, or number. Examples include `!`, `h`, `2`, etc.
{{% /notice %}}


|flags | Uses |
| :--- | :---- |
| -c | To get the number of files with the pattern. |
| -i | To make the search case-insensitive. “uNiX” is the same as “unix” |
| -n | To return matched lines and their line numbers. |
| -R | Search all files in current directory. |

*Let's practice this command to find my secret-message.txt! Let's try the following command:*

```
cd
grep -R "Do. Or do not. There is no try."
```

![grep command](../images/Act6.1.png?classes=border,shadow)

--------------------------

### Why does the secret-message file look like that?

*Remember that file we saw with the strange name? It was called `malware.sh`. We should go find it again and take a closer look at it. I think this was left by the hackers!*

`find` is a command used to search for a file with certain parameters within a directory or region of files. It can be used in multiple ways including:

- Searching for a file with a specific file name  
 The format is: `find [directory] -name [filename]`
- Searching for all files with a specific file extension (for example, text files, ending with .txt)  
 The format is: `find [directory] -name *.txt`

Use the `find` command to search for the file within the current directory. Is there a command we can use to figure out what the current directory is?

![find command](../images/Act6.2.png?classes=border,shadow)

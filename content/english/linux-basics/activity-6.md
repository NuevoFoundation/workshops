---
title: "Activity 6 - A BAD File"
description: "Use Linux commands to search"
date: 2020-09-17
difficulty: "Intermediate"
weight: 9
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/OaXi1GN_93U" alt="A YouTube video on Linux Basics Activity 6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*I know I had a file `secret-message.txt` with one of my favorite quotes in it. "Do. Or do not. There is no try." Can you help me find it?*

### Searching for a pattern in a file?

`grep` (<b>g</b>lobal search for <b>r</b>egular <b>e</b>xpression and <b>p</b>rint the result) is a command used to search for text within files. There are different flags or options that can change how it is used.  
The format is: `grep [flag] “[pattern]” [filename]`.

| flags | Uses |
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

*Remember that file we saw with the strange name? It was called `malware.sh`. We should go find it again and take a closer look at it. I think that the hackers left this!*

`find` is a command used to search for a file with certain parameters within a directory or region of files. It can be used in multiple ways including:

- Searching for a file with a specific file name  
 The format is: `find [directory] -name [filename]`
- Searching for all files with a specific file extension (for example, text files, ending with .txt)  
 The format is: `find [directory] -name *.txt`

Use the `find` command to search for the file within the current directory. Is there a command we can use to figure out what the current directory is?

![find command](../images/Act6.2.png?classes=border,shadow)

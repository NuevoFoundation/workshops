---
title: "Activity 6 - A BAD File"
description: "Use Linux commands to search"
date: 2020-07-08
weight: 9
translationKey: "linux-basics-activity-6"
---

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

*Let's practice this command to find Nuvi's secret-message.txt! Let's try the following command:*

```
cd
grep -R "Do. Or do not. There is no try."
```

[insert image of grep command]

--------------------------

### Why does the secret-message file look like that?

*Remember that file we saw with the strange name? It was called `malware.sh`. We should go find it again and take a closer look 
at it.*

`find` is a command used to search for a file with certain parameters within a directory or region of files. It can be used in multiple ways including:

- Searching for a specific File Name  
 The format is: `find [directory] -name [filename]`
- Searching for all text files (Files that end with .txt)  
 The format is: `find [directory] -name *.txt`

Use the `find` command to search for the file within the current directory. Is there a command we can use to figure out what the current directory is?

[Example find command usage]

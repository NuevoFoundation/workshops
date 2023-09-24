---
title: "Activity 6 - A BAD File"
description: "Use Linux commands to search"
date: 2022-09-23
difficulty: "Intermediate"
weight: 9
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/OaXi1GN_93U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        I know I had a file secret-message.txt with one of my favorite quotes in it. "Do. Or do not. There is no try." Can you help me find it?
    </div>
</div>

### Searching for a pattern in a file?

`grep` (**g**lobal search for **r**egular **e**xpression and **p**rint the result) is a command used to search for text within files. There are different flags or options that can change how it is used.

The format is: `grep [flag] “[pattern]” [filename]`.

| flags | Uses                                                              |
| :---- | :---------------------------------------------------------------- |
| -c    | To get the number of files with the pattern.                      |
| -i    | To make the search case-insensitive. “uNiX” is the same as “unix” |
| -n    | To return matched lines and their line numbers.                   |
| -R    | Search all files in current directory.                            |

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Let's practice this command to find my secret-message.txt!
    </div>
</div>

Let's try the following command:

```
cd
grep -R "Do. Or do not. There is no try."
```

![grep command](../images/Act6.1.png?classes=border,shadow)

---

### Why does the secret-message file look like that?

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Remember that file we saw with the strange name? It was called malware.sh. We should go find it again and take a closer look at it. I think that the hackers left this!
    </div>
</div>

`find` is a command used to search for a file with certain parameters within a directory or region of files. It can be used in multiple ways including:

- Searching for a file with a specific file name  
  The format is: `find [directory] -name [filename]`
- Searching for all files with a specific file extension (for example, text files, ending with .txt)  
  The format is: `find [directory] -name *.txt`

Use the `find` command to search for the file within the current directory. Is there a command we can use to figure out what the current directory is?

![find command](../images/Act6.2.png?classes=border,shadow)

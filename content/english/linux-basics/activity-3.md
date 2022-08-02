---
title: "Activity 3 - Explore Current Directory"
description: "Use Linux commands to view the contents of the current directory"
date: 2020-09-17
difficulty: "Intermediate"
weight: 6
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/dSsed9cR9QI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*Now that we know who and where we are, let's take a look around for signs of the hackers.*
## How do you explore the directory?

To see the files in the current directory, we use the `ls` command. It means "List". Try `ls -l`.

Try it: 
```
ls
```
![ls command](../images/03_ls-command.png?classes=border,shadow)

### How do I get more info about the files in this directory?

Try it:
```
ls -l
```

![ls -l command](../images/03_ls-l.png?classes=border,shadow)

The `-l` flag in the above command tells `ls` to list long form information.

## What information is being displayed?

Let's examine the top line of the example above from left to right, for the directory `Desktop`:

```
drwxr-xr-x 2 nuvi nuvi 4096 Aug 10 23:50 Desktop
```

- drwxr-xr-x: The first character `d` denotes that Desktop is a directory. If it were a `-` it would mean that Desktop was a file.
- 2: The number of links for this file
- nuvi: The user who owns this file
- nuvi: The group this file belongs to
- 4096: The size of the file in bytes
- Aug 10 23:50: Date and time the file was created
- Desktop: Name of the directory


---
title: "Activity 3 - Explore Current Directory"
description: "Use Linux commands to view the contents of the current directory"
date: 2022-09-23
difficulty: "Intermediate"
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/dSsed9cR9QI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## How do you explore the directory?

To see the files in the current directory, we use the `ls` command. It means "List".

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
<img src="../images/../images/03_ls-l.png" height="500" alt="ls -l command"/>

The `-l` flag in the above command tells `ls` to list long form information.

## What information is being displayed?

Let's examine the top line of the example above from left to right, for the directory `Videos`:

![ls -l command explained](../images/03_ls-l-numbers.png?classes=border,shadow)

1. <span style="color:green">green</span>: the file permissions. The first character `d` denotes that **Videos** is a directory. If it were a `-` it would mean that **Videos** was a file.
2. <span style="color:red">red</span>: the number of **links** for this file. The directory **Videos** has 2 _links_.
3. <span style="color:purple">purple</span>: the user who owns this file. User `nuvi` is the owner of **Videos** directory.
4. <span style="color:white;background-color:#232b36">white</span>: the group this file belongs to. Here, the directory **Videos** belongs to `nuvi` group.
5. <span style="color:#ffc000">yellow</span>: the size of the file in **bytes**. The size for directory **Videos** is 4096 bytes.
6. <span style="color:#ed7d31">orange</span>: date and time the file was created.
7. <span style="color:#2e75b6">blue</span>: name of the directory.

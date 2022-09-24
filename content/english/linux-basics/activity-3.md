---
title: "Activity 3 - Explore Current Directory"
description: "Use Linux commands to view the contents of the current directory"
date: 2022-09-23
difficulty: "Intermediate"
weight: 6
---

<iframe style="display: block; margin: auto;" width="560" height="315" src="https://www.youtube.com/embed/dSsed9cR9QI" alt="A YouTube video on Linux Basics Activity 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Now that we know who and where we are, let's take a look around for signs of the hackers.
    </div>
</div>

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

![ls -l command](../images/03_ls-l.png?classes=border,shadow)

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

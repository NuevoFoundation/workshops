---
title: "Activity 2 - Determine User Location"
description: "Use a Linux command to determine what directory you are currently in"
date: 2020-09-17
difficulty: "Intermediate"
weight: 5
---

<p style="text-align: center;"><iframe width="50%" height="500px" src="https://www.youtube.com/embed/v1XLyLuQQyA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

*Before we can stop the hackers, we need to learn to navigate the Linux filesystem.*

## What is a filesystem?

A filesystem is a structured collection of files and data on a computer disk or drive. The highest level of a filesystem is referred to as the "root". You can think of it as the beginning of the filesystem.

{{% notice tip %}}
Fun fact: filesystems are often described as a "tree". This is because the filesystem looks like an upside down tree with each folder as a branch or leaf. For example, your filesystem may look like the below.

<img src="../images/filesystem-tree.png" height="500" alt="Picture of a filesystem tree"/>

{{% /notice %}}

On a Windows computer, you can browse the computer's "C:\" drive filesystem using "File Explorer" like below:

![Picture of a Windows file explorer](../images/filesystem-windows.png?classes=border,shadow)

On a Mac, you can browse the computer's home filesystem in "Finder" like below:

![Picture of the Mac file finder](../images/home-folder-mac.jpg?classes=border,shadow)

## Where in the filesystem are you?

We want to find out what our "current working directory" is. This is the location in the filesystem that you are currently at.

The Linux command `pwd` will display your current location. This stands for "Print Working Directory". Try it!

<!---!![pwd command](../images/02_pwd.png?classes=border,shadow) --->
<img src="../images/02_pwd.png" alt="pwd command" style="width:600px;"/>

The output above is `/home/nuvi` and its meaning is explained below:

- `/`: This is the symbol for the root directory of this filesystem.
- `/home`: This is the path of the home directory, which is located within the root directory.
- `/home/nuvi`: This is the path for the nuvi directory, which is located within the home directory. The output stops here, meaning `/home/nuvi` is the current working directory where we are located.
- This process of going into the filesystem through each folder can go on for many more steps in some cases. 
- The path shown and described above is called the <b>absolute path</b>, because it is the path given from the current directory all the way up to the root directory.

## How do I move around the filesystem?

To move to a different directory, use the command `cd`. This stands for "Change Directory". The format of this command is `cd [directory name]`.

<!---![cd command](../images/02_cd.PNG?classes=border,shadow) --->
<img src="../images/02_cd.PNG" alt="cd command" style="width:600px;"/>

In the output above, you can see that when we type `pwd` again, the working directory we are in is now Desktop. Try `cd ..`.

Try one more example of `cd` below:
```
cd ..
```
![cd command](../images/02_cdDotDot.PNG?classes=border,shadow)

The `..` after the cd command takes you one level up the filesystem tree. The output of `pwd` now shows we are back where we started. We began in the nuvi directory, moved down the tree into `Desktop` with `cd Desktop`, and then moved up the tree with `cd ..`.

*Great job, next we'll look at how to explore the directories themselves.*

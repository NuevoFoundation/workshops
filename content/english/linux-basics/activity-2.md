---
title: "Activity 2 - Determine User Location"
description: "Use a Linux command to determine what directory you are currently in"
date: 2020-07-08
weight: 5
---

*So before we can stop the hackers, we need to learn to navigate the Linux filesystem.*

### Where in the file system are you?

The Linux command `pwd` will display your current location. This stands for Print Working Directory

Try it:
```
pwd
```

![pwd command](../images/02_pwd.png?classes=border,shadow)

The output above is `/home/nuvi` and its meaning is explained below:
- `/`: This denotes the root directory, which is the beginning of the Linux file system.
- `home`: This denotes the home directory, which is located within the root directory.
- `/nuvi`: This denotes the nuvi directory, which is located within the home directory. The output stops here, meaning nuvi is current working directory where we are located.
- This process of heading down the filesystem tree, branching at a new directory can go on for many more steps in some cases. 
- The path shown and described above is called the <b>absolute path</b>, because it is the path given from the current directory all the way up to the root directory.

### How do I move around the file system?

To move to a different directory, use the command `cd` This stands for change directory. The format of this command is cd directory_name.

Try it:
```
cd Downloads
```
![cd command](../images/02_cd.PNG?classes=border,shadow)

In the output above, you can see that when we type `pwd` again, the working directory we are in is now Downloads. 

Try one more example of cd below:
```
cd ..
```
![cd command](../images/02_cdDotDot.PNG?classes=border,shadow)

The `..` after the cd command takes you one level up the filesystem tree. The output of `pwd` now shows we are back where we started. We began in the nuvi directory, moved down the tree into `Downloads` with `cd Downloads`, and then moved up the tree with `cd ..`.

*Great job, next we'll look at how to explore the directories themselves.*
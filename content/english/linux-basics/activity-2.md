---
title: "Activity 2 - Determine User Location"
description: "Use a Linux command to determine what directory you are currently in"
date: 2020-07-08
weight: 5
translationKey: "linux-basics-activity-2"
---

At any given time in Linux, each user is in a directory within the Linux filesystem.
This activity will show you how to determine your current location.

**Where in the file system are you?**

To find out where in the file system you are currently located, type the command “pwd” This stands for Print Working 

![pwd command](/images/02_pwd.png?classes=border,shadow)

The output above is "/home/nuvi" and its meaning is explained below:

- /: The first “/” denotes the root directory. This is the beginning of the Linux filesystem. It is called the root because the filesystem is built like a tree. The branches of the file system tree connect to more directories, which can in turn branch again to yet another directory, or to a file
home: This denotes the home directory, which is located within the root directory
- /nuvi: This denotes the nuvi directory, which is located within the home directory. The output stops here, meaning nuvi is current working directory where we are located.
- This process of heading down the filesystem tree, branching at a new directory can go on for many more steps in some cases. 
- The path shown and described above is called the **absolute path**, because it is the path given from the current directory all the way up to the root directory.
- There is also a path known as the **relative path**, which is the path from anywhere in the filesystem all the way up to the current directory.
- If you look at the example above, you can see additional special character, the tilde “~” This denotes that we are in the home directory of the current user.

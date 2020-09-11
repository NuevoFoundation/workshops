---
title: "Activity 2 - Determine User Location"
description: "Use a Linux command to determine what directory you are currently in"
date: 2020-07-08
weight: 5
translationKey: "linux-basics-activity-2"
---

This activity will show you how to determine your location within the Linux filesystem

**Where in the file system are you?**

To find out where in the file system you are currently located, type “pwd” This will display the current working directory.
Here is a sample output, followed by an explanation of what is displayed:

/home/user/Desktop

![pwd command](../images/02_pwd.png?classes=border,shadow)

- /: The first “/” denotes the root directory. This is the beginning of the Linux filesystem. It is called the root because the filesystem is built like a tree. The branches of the file system tree connect to more directories, which can in turn branch again to yet another directory, or to a file
home: This denotes the home directory, which is located within the root directory
- /user: This denotes another directory, called user, which is located within the home directory
- /Desktop: This is the Desktop directory, which is where you are currently located
- This process of heading down the filesystem tree, branching at a new directory can go on for many more steps in some cases. 
- The path shown and described above is called the **absolute path**, because it is the path given from the current directory all the way up to the root directory.
- There is also a path known as the **relative path**, which is the path all the way up to the current directory.
- There is an additional special character, the tilde “~” This denotes the home directory of the current user.

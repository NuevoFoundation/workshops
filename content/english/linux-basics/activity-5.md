---
title: "Activity 5- Secure User Permissions"
description: "Use a Linux command to secure your files"
date: 2020-07-08
---

Oh no. Some of our files might have been messed with! Let’s secure our files… but, how?

**How do I know how secure my files are?**

Type in the Linux command, “ls -l" to see the current permissions for your files.

[Image & Explanation of results]

**How do I secure them then? **
chmod is a command used to modify the permissions of your files for the following 3 different groups of users: the user and owner of the file,
the group and the members of the group of people with access to the file, and others or anyone else. These groups can be modified to have
permissions to **r**ead, **w**rite, or e**x**ecute.
Try it:
chmod u=rwx g=rx o=x [filename]

**Shortcut!**
chmod can also be used with simple number commands. These commands are written like:
chmod 751 filename
The values can be understood as 7 is the combination of 4, 2, and 1. Thus, it gives users the permission to read, write, and execute.
What permissions do the other two values give?
KEY
4 = read
2 = write
1 = execute
0 = no permission
Now, let's try to change the permissions of our files. Type in ‘ls -l’. Look at the results. We want anyone outside of our group and
aside from ourselves to have no permissions for _____ file. How do we do that?



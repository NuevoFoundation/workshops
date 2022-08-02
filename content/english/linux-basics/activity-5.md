---
title: "Activity 5 - Secure User Permissions"
description: "Use a Linux command to secure your files"
date: 2020-09-17
difficulty: "Intermediate"
weight: 8
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/D5Y6LH0mBi0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*Oh no. Some of our files might have been messed with! Let’s secure our notes, file1. We don't want a hacker to mess with these!*

### How do we limit access to our files? 

By giving users "permissions" on files! 

Permissions are a way for the computer to determine who has access to files and what they can do with those files.

In Linux, there are three common types of access to a file that a user might request: "read", "write", or "execute". 

{{% notice note %}}

"Read" access means that a user may open and read a file. "Read" access is often denoted with a `r` symbol. 

"Write" access means that a user may open and write to a file. This includes renaming and moving a file to a different location in the filesystem. "Write" access is often denoted with a `w` symbol. 

"Execute" access means that a user may attempt to run the file as a program. "Execute" access is often denoted with a `x` symbol. 

{{% /notice %}}

### But how do we know how secure our files are?

Is there a command that we have learned so far that can show us how secure our files are?  
Feel free to go back if you need to!

![ls -l command](../images/Act5.1.png?classes=border,shadow)

We should keep using that command to check if we changed the permissions as expected.

---

### How do we secure the files with permissions then?

```
chmod u=rwx g=rx o=x file1
```

`chmod` is a command used to modify the permissions of your files (it means "Change Mode") for the following 3 different groups of users: 
- the <b>u</b>ser and owner of the file
- the <b>g</b>roup and the members of the group of people with access to the file
- the <b>o</b>thers or anyone else

These groups can be modified to have permissions to do the following:

- <b>r</b>ead
- <b>w</b>rite
- e<b>x</b>ecute. 

---

### Try it on your own!

Now, let's try to change the permissions of our files. We want anyone outside of our group and aside from ourselves to not be able to access `file1`. How would we do that?

![chmod command](../images/Act5.2.png?classes=border,shadow)

#### Fun Fact: Shortcut!

`chmod` can also be used with simple number commands. These commands are written like:  

```
chmod 751 [insert filename]
```

The values can be understood as giving users the permission to read, write, and execute.  
What permissions do the other two values give?  

| Number | Meaning |
| :---: | :---: |
| 7 | read + write + execute |
| 6 | read + write |
| 5 | read + execute |
| 4 | read |
| 3 | execute + write |
| 2 | write |
| 1 | execute |
| 0 | no permission |

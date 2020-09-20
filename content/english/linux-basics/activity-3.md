---
title: "Activity 3 - Explore Current Directory"
description: "Use Linux commands to view the contents of the current directory"
date: 2020-09-17
prereq: "None."
difficulty: "Intermediate"
weight: 6
---

*Now that we know who and where we are, let's take a look around for signs of the hackers.*

### How do you explore the directory?

To see the Files in the current directory, we use the `ls` command.

Try it:
```
ls -l
```

![ls-l command](../images/03_ls-l.png?classes=border,shadow)

The `-l` flag in the above command tells ls to list long form information.

### What information is being displayed?

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
- Desktop: name of the directory

### What can you do with these files?

One example of how you can manipulate a file or directory is by moving it to another location. This is accomplished by the move command, `mv`. Let's practice by moving the `Documents` directory into the `Downloads` directory. 

Type in the command listed below:
```
mv Documents/ Downloads/
```

Now type in `ls -l` one more time and look at the output.

![ls-l after move](../images/03_ls-l_after_move.PNG?classes=border,shadow)

You should see that the directory `Documents` no longer appears, because it was moved into the `Downloads` directory.

{{% notice tip %}}
We can see that it moved into `Downloads` by using the `ls` command with an added directory path.
```
ls -l Downloads/
```
{{% /notice %}}

Let's practice `mv` one more time by moving it back. 

Try it:
```
mv Downloads/Documents/ .
```

This moves the `Documents` directory from the `Downloads` directory, back to our current directory, denoted by `.` The period, or dot, is used in commands to denote the current directory. Typing `ls -l` one more time shows `Documents` has returned to this directory. 

![ls-l command](../images/03_ls-l.png?classes=border,shadow)

*Great job, you now know how to move files around. We will use this knowledge soon to recover from the hack.*

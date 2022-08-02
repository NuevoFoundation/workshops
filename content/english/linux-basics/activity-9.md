---
title: "Activity 9 - Remove the Bad File"
description: "Use Linux commands to remove the bad file and directory"
date: 2020-09-17
difficulty: "Intermediate"
weight: 12
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/mLsJXEIsadE" alt="A YouTube video on Linux Basics Activity 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*So `malware.sh` is definitely a bad file left by the hackers. We need to remove it and the directory holding it!*

## Remove the bad file!

`rm` is a command that removes files.  
The format is: `rm [filename]`.

{{% notice warning %}}
`rm` permanently removes the file.
{{% /notice %}}

Remove the file we have decided is causing our problems. How can we check that the file was fully removed?

![rm command](../images/Act9.1.png?classes=border,shadow)

----

## What if we need to remove a directory?

`rmdir` is a command that can remove an empty directory.  
The format is: `rmdir [directoryName]`.

{{% notice warning %}}
`rmdir` permanently removes the directory.
{{% /notice %}}

How can you remove the directory that the bad file was in?

![rmdir command](../images/Act9.2.png?classes=border,shadow)

{{% notice warning %}}
Removing files can be a dangerous operation, especially on Linux. Make sure that you are 100% certain the file you want to delete is safe to remove. By removing the wrong file, you could accidentally ruin your computer.
{{% /notice %}}

Do you remember the command to remake the directory that we deleted?

![mkdir command](../images/Act9.3.png?classes=border,shadow)

*Now let's go check if we know a command to restore the `secret-message.txt` file...*

---
title: "Activity 10 - Let's move and replace"
description: "Use Linux commands to move and copy files"
date: 2020-09-17
difficulty: "Intermediate"
weight: 13
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/LPcQW4oGK6g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*Great, now that the hackers' malicious file won't cause us any more headaches, let's restore the old file so things will run smoothly again.*

### How to fix the secret-message

The command `mv` can also be used to replace the destination file with the source file.  
The format is: `mv [source filename] [destination name]`.

Replace the messed up secret message with the backup that we found earlier.  
Let's move the file into the new directory that we made.

![mv command](../images/Act10.1.png?classes=border,shadow)

---

### Backup your files

*That backup file earlier came in handy to fix the tampered file. Let's backup the files in our directory.*

`cp` is a command that copies a file from one location to another.  
The format is: `cp [source filename] [destination filename]`.

Make a copy of the file you made and the `secret-message.txt`.

![cp command](../images/Act10.2.png?classes=border,shadow)

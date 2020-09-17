---
title: "Activity 10 - Lets move and replace."
description: "Use Linux commands to move and copy files."
date: 2020-07-08
weight: 13
translationKey: "linux-basics-activity-10"
---

*Great, now that the bad one won't cause us any more headaches, let's replace the old file so things will run smoothly again.*

### How to fix the secret-message

{{% notice tip %}}

The command `mv` can also be used to replace the destination file with the source file.  
The format is: `mv [source filename] [destination name]`.

{{% /notice %}}

Replace the messed up secret message with the backup that we found earlier.  
Let's move the file into the new directory that we made.

[image of the command]

{{% notice tip %}}

The command `mv` can also be used to change the name of a file.  
The format is: `mv [old filename] [new name]`.

{{% /notice %}}

Try changing the name of the file you created!

---

### Backup your files

*That backup file earlier came in handy to fix the bugged file. Let's backup the files in our directory*

`cp` is a command that copies a file from one location to another.  
The format is: `cp [source filename] [destination name]`.

Make a copy of the file you made and the `secret-message.txt`.

[Image of result]

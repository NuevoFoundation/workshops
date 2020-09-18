---
title: "Activity 9 - Remove the Bad File"
description: "Use Linux commands to remove the bad file and directory."
date: 2020-09-17
prereq: "None."
difficulty: "Intermediate"
weight: 12
---

*So `malware.sh` is definitely a bad file left by the hackers. We need to remove it and the directory holding it!*

### Remove the bad file!

`rm` is a command that removes files.  
The format is: `rm [filenames]`.

{{% notice warning %}}
`rm` permanently removes the file.
{{% /notice %}}

Remove the file we have decided is causing our problems. How can we check that the file was fully removed?

![rm command](../images/Act9.1.png?classes=border,shadow)

----

### But what if we need to remove a directory?

`rmdir` is a command that can remove an empty directory.  
The format is: `rmdir [directoryName]`.

{{% notice warning %}}
`rmdir` permanently removes the directory.
{{% /notice %}}

How can you remove the directory that the bad file was in?

![rmdir command](../images/Act9.2.png?classes=border,shadow)

Do you remember the command to remake the directory that we deleted?

![mkdir command](../images/Act9.3.png?classes=border,shadow)

*Now let's go check if we know a command to restore the `secret-message.txt`...*

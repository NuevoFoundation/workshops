---
title: "Activity 9 - Remove the Bad File."
description: "Use Linux commands to remove the bad file and directory."
date: 2020-07-08
weight: 12
translationKey: "linux-basics-activity-9"
---

*So `malware.sh` is definitely a bad file, so we should probably remove it and the directory holding it!*

### Remove the bad file!

`rm` is a command that removes files.  
The format is: `rm [filenames]`.

Remove the file we have decided is causing our problems. How can we check that the file was fully removed?

[Image of result]

----

### But what if we need to remove a directory?

`rmdir` is a command that can remove an empty directory.  
The format is: `rmdir [directoryName]`.

{{% notice warning %}}

`rmdir` permanantly removes the directory.

{{% /notice %}}

How can you remove the directory that the bad file was in?

[Image of result]

Do you remember the command to remake the directory that we deleted?

[Image of result]

Now let's go check if we know a command to fix the secret-message.txt...

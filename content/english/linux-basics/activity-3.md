---
title: "Activity 3 - Explore Current Directory"
description: "Use Linux commands to view the contents of the current directory"
date: 2020-07-08
weight: 6
---

Now that we know where we are on the computer, let's take a look around. This way we can start finding what files might have been modified. 

**Files and permissions**

To look at the files in your current directory, we will now enter our first Linux command with a flag. Type “ls -l” to see the list of files and directories in your current directory. “ls” is the command to list the contents of a directory, and the flag “-l” is to list them in long form, meaning more detailed information will be displayed.

![ls-l command](../images/03_ls-l.png?classes=border,shadow)

**What information is being displayed?**

Given the following sample output from “ls -l”, each column of output is explained below:

-rwx------ 1 user group 256 Jan 1 12:00 file.extension
- -rwx------: The first character “-” denotes that this is a file. It would be a “d” if it were a directory
- 1: The number of links for this file
- user: The user who owns this file
- group: The group this file belongs to
- 256: The size of the file in bytes
- Jan 1 12:00: Date and time the file was created
- File.extension: name of he file

**What can you do with these files?**

One example of how you can manipulate a file is by moving it to another location. This is accomplished by the move command, “mv” Practice by moving one of the files you listed above with “ls -l”, by using the “mv” command in the following format:

mv file.extension /home /usr

Insert examples of moving, file a location where there is a bad file.

Oh look, here is a file that sounds like trouble! (file named malware or something)
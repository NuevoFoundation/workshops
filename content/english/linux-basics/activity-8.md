---
title: "Activity 8 - What's different?"
description: "Use Linux commands to compare files."
date: 2020-08-10
weight: 11
translationKey: "linux-basics-activity-8"
---

*Let's look at the secret-message to make sure this weird `malware.sh` file hasn't done anything to it!*

### Do we know a command that can help us find the location of the `secret-message.txt` file?

![find command](../images/Act8.1.PNG?classes=border,shadow)

Move into that directory and let's check for the quote "Do. Or do not. There is no try." from earlier. Do you remember what command can help us check?  

![grep command](../images/Act8.2.PNG?classes=border,shadow)

*This file is usually a good file, but there seems to be some changes to it. Should we compare it to a known good version?*

Lets see if there might be any backups of the secret message within its directory. Go to the Document directory and try:

```
ls -la
```
{{% notice tip %}}

The `-a` flag gives all entries including hidden files.

{{% /notice %}}

Did you find any new files? Put that in your file!

### Compare the secret-message.txt file to the backup file

`diff` is a command used to compare two files to get what has been added, changed, and deleted to the file.  
The format is: `diff -u [filename] [Filename of Comparison File]`

{{% notice info %}}

Fun Fact: The `-u` flag puts the output in unified mode. You can change the `u` to a `c` to put the output in context mode. You can also remove the flag altogether to get the output without any formatting. 

{{% /notice %}}

Check the difference between the two files. How many differences did you find? Put it in the file you made!

{{% notice tip %}}

### A better way to see the differences

`vimdiff` is a command that opens a window with the files in separate tabs highlighting the differences.

Try `vimdiff` to better visualize the differences between the files.

{{% /notice %}}

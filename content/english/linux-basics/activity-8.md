---
title: "Activity 8 - What's different?"
description: "Use Linux commands to compare files."
date: 2020-08-10
weight: 11
---

***This file is usually a good file, but there seems to be some changes to it. Should we compare it to a known good version?***

Lets see if there are any backups of the secret message within its directory. Go to Document and try:
ls -la
The -a flag gives all entries including hidden files.

Did you find any new files?

**Compare the secret-message.txt file to the backup file**

diff is a command used to compare two files to get what has been added, changed, and deleted to the file.
Diff -u [filename] [Filename of Comparison File]
Fun Fact: The u flag puts the output in unified mode. You can change the u to a c to put the output in context mode. You can also remove the flag altogether to get the output without any formatting. 

Check the difference between the two files. How many differences did you find?

**A better way to see the differences**

vimdiff is a command that opens a window with the files in separate tabs highlighting the differences.

Try vimdiff to better visualize the differences between the files.

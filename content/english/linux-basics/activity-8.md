---
title: "Activity 8- What's different?"
description: "Use Linux commands to compare files."
date: 2020-08-10
---

***This file is usually a good file, but there seems to be some changes to it. Should we compare it to a known good version?***

**Diff**

diff is a command used to compare two files to get what has been added, changed, and deleted to the file.
Diff -u [filename] [Filename of Comparison File]
Fun Fact: The u flag puts the output in unified mode. You can change the u to a c to put the output in context mode. You can also remove the flag altogether to get the output without any formatting. 

**Vimdiff**

vimdiff is a command that opens a window with the files in separate tabs highlighting the differences.

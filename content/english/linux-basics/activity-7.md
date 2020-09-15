---
title: "Activity 7 - What's wrong with the file?"
description: "Use Linux commands to read the file without opening it."
date: 2020-07-08
weight: 10
translationKey: "linux-basics-activity-7"
---

*Instead of opening the file in an editor, let's use the command line to try reading it.*

For files that we aren't sure about, we need to peek at them so we don't accidentally open a virus.

### How can we look at the first 5 lines of the file?

Sometimes you just need to look at the beginning of a file:
The command head shows the top of a file. If you add the -n flag you can put how many lines you want to look at.
head -n [# of lines] [Filename]
Try to look at the first 2 lines of secret-message.txt!

### How can we look at the last 5 lines of the file?

Sometimes you just need to look at the end of the file:
The command tail shows the bottom of a file. If you add the -n flag you can put how many lines you want to look at.
tail -n [# of lines] [Filename]
Try to look at the last 2 lines of secretmessage.txt!

### How can we look at the whole file?

Sometimes looking at the first and last lines of the file allow us to realize we need to view the whole file to understand what it is doing and what we should do about it:
Cat shows the contents of a file.
cat [flags] [Filename]
Let's look at the entire contents of secretmessage.txt!

What do you think the file does? Add it to your message to Nuvee!

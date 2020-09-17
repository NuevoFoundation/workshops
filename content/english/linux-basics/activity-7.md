---
title: "Activity 7 - What's wrong with the file?"
description: "Use Linux commands to read the file without opening it."
date: 2020-07-08
weight: 10
---

*Instead of opening the file in an editor, let's use the command line to try reading it.*

For files that we aren't sure about, we need to peek at them so we don't accidentally open a virus.

### How can we look at the first lines of the file?

Sometimes you just need to look at the beginning of a file. The command `head` shows the top of a file.  
The format is: `head [Filename]`

{{% notice tip %}} 

If you add the -n flag you can put how many lines you want to look at.  
The format is: `head -n [# of lines] [Filename]`

{{% /notice %}}

Try to look at the first 5 lines of `malware.sh`!

![head command](../images/Act7.1.PNG?classes=border,shadow)

### How can we look at the last lines of the file?

Sometimes you just need to look at the end of the file. The command `tail` shows the bottom of a file.  
The format is: `tail [Filename]`

{{% notice tip %}} 

If you add the -n flag you can put how many lines you want to look at.  
The format is: `tail -n [# of lines] [Filename]`

{{% /notice %}}

Try to look at the last 5 lines of `malware.sh`!

![tail command](../images/Act7.2.PNG?classes=border,shadow)

### How can we look at the whole file?

Sometimes looking at the first and last lines of the file allow us to realize we need to view the whole file to understand what it is doing and what we should do about it:

`cat` shows the contents of a file.  
The format is: `cat [flags] [Filename]`

{{% notice tip %}} 

Less and more are commands similar to cat.

#### MORE

`more` is a command meant for larger files. It shows as many lines as possible and then you press enter to see the next section of the file until you reach the end of the file.  
The format is: `more [filename]`

![more command](../images/Act7.3.PNG?classes=border,shadow)

#### LESS

`less` is a command helpful for going back and forth through sections of a file. It work similarly to more, but you use the up and down arrow keys to move from one section of the file to the next. The way to exit is by pressing 'q'.  
The format is: `less [filename]`

![less command](../images/Act7.4.PNG?classes=border,shadow)

{{% /notice %}}

Let's look at the entire contents of `malware.sh`!

What do you think `malware.sh` does? Add it to your message to Nuvi!

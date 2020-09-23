---
title: "Activity 4 - Note Taking Practice"
description: "Use Linux commands to view the contents of the current directory"
date: 2020-09-17
prereq: "None."
difficulty: "Intermediate"
weight: 7
---

*As a cybersecurity engineer, it is important to take a lot of notes. These are helpful for future reference to understand how the hack happened. Let's step up our workspace!*

### What if I want to create a new directory?

To practice creating a new directory, use the command `mkdir` in the following format: 
mkdir new_directory_name. 

Lets make a directory called `files` by typing the command below:

```
mkdir files
```

![ls-l command](../images/04_mkdir.PNG?classes=border,shadow)

As you can see, now when `ls -l` is run, an additional directory named `files` appears

### What if I want to create a new file?
To create a file we can use the `touch` command. The tough command creates an empty file with no data. 

Try the command below to create a file named `file1`:

```
touch file1
```

![ls-l command](../images/04_touch.PNG?classes=border,shadow)

Now when we type `ls -l` we can see that the file has been created.

### What if I want to add data to the file?

An empty file doen't have much use, so lets add some data to it, like our name.
To open the file for editing, we will use the `vim` command. Vim is an editor that allows us to add, remove and change the data in a file. 

Type in the command below to edit file1:
```
vim file1
```

![ls-l command](../images/04_vim.PNG?classes=border,shadow)

We are now in the Vim editor. Press `i` to enter insert mode. Now type in `nuvi` and press esc to exit insert mode. Finally type in `:wq` and press enter The colon tells vim you are entering a command. The w and q then tell vim you want to write the changes you made and quit.
 
![ls-l command](../images/04_vim_after.PNG?classes=border,shadow)

Once again type `ls -l` and you can see that file1 now has 5 bytes of content, instead of 0 when it was blank. 

One last thing. Lets move our new file into our new directory.

Type in the following command:

```
mv file1 files
```

*Congratulations, you have created, edited, and moved your first file! Now let's secure our system!*

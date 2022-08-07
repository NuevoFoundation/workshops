---
title: "Activity 4 - Note Taking Practice"
description: "Use Linux commands to view the contents of the current directory"
date: 2020-09-17
difficulty: "Intermediate"
weight: 7
---

<p style="text-align: center;"><iframe width="50%" height="500px" src="https://www.youtube.com/embed/h9qokQeLREI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

*As a cybersecurity engineer, it is important to take a lot of notes. These are helpful for future reference to understand how the hack happened. Let's step up our workspace!*

### What if I want to create a new directory?

To practice creating a new directory, use the command `mkdir` (meaning "Make Directory") in the following format: `mkdir new_directory_name`.

Let's make a directory called `files` by typing the command below:

```
mkdir files
```
<!---![ls-l command](../images/04_mkdir.PNG?classes=border,shadow) --->
<img src="../images/04_mkdir.PNG" alt="mkdir command" style="width:600px;"/>

As you can see, now when `ls -l` is run, an additional directory named `files` appears

### What can you do with these files?

One example of how you can manipulate a file or directory is by moving it to another location. This is accomplished by the move command, `mv`. Let's practice by moving the `Music` directory into the `Documents` directory. 

Type in the command listed below:
```
mv Music/ Documents/
```

Now type in `ls -l` one more time and look at the output.

![ls-l command](../images/04_mv_music_dir.png?classes=border,shadow)

You should see that the directory `Music` no longer appears, because it was moved into the `Documents` directory.

{{% notice tip %}}
We can see that it moved into `Documents` by using the `ls` command with an added directory path.
```
ls -l Documents/
```
{{% /notice %}}

Let's practice `mv` one more time by moving it back. 

Try it:
```
mv Documents/Music/ .
```

This moves the `Music` directory from the `Documents` directory, back to our current directory, denoted by `.` The period, or dot, is used in commands to denote the current directory. Typing `ls -l` one more time shows `Music` has returned to this directory. 

<img src="../images/../images/03_ls-l.png" height="500" alt="ls -l command"/>

*Great job, you now know how to move files around. We will use this knowledge soon to recover from the hack.*

### What if I want to create a new file?
To create a file we can use the `touch` command. The touch command creates an empty file with no data. 

Try the command below to create a file named `file1`:

```
touch file1
```
<!---![ls-l command](../images/04_touch.PNG?classes=border,shadow) --->
<img src="../images/04_touch.PNG" alt="touch command" style="width:600px;"/>

Now when we type `ls -l` we can see that the file has been created.

### What if I want to add data to the file?

An empty file doesn't have much use, so lets add some data to it, like our name.
To open the file for editing, we will use the `vim` command. Vim is an editor that allows us to add, remove and change the data in a file. 

Type in the command below to edit file1:
```
vim file1
```

<!---![ls-l command](../images/04_vim.PNG?classes=border,shadow) --->
<img src="../images/../images/04_vim.PNG" height="500" alt="vim command"/>


We are now in the Vim editor. Press `i` to enter insert mode. Now type in `nuvi` and press `esc` to exit insert mode. Finally type in `:wq` and press enter. The colon tells Vim you are entering a command. The w and q then tell vim you want to write the changes you made and quit.

{{% notice warning %}}
To exit `vim`, press `esc` then type `:wq`. You will need this every time you open `vim`! 
{{% /notice %}}

<img src="../images/04_vim_after.PNG" alt="vim after" style="width:600px;"/>

Once again type `ls -l` and you can see that file1 now has 5 bytes of content, instead of 0 when it was blank.

{{% notice note %}}

Definition: A <b>byte</b> is a unit of measurement for data. At the lowest level, computers use what's known as a "bit", which is a single unit of data whose value can only be "0" or "1", to represent information. A byte is a collection of 8 bits. 

{{% /notice %}}

One last thing. Let's move our new file into our new directory.

Type in the following command:

```
mv file1 files
```

*Congratulations, you have created, edited, and moved your first file! Now let's secure our system!*

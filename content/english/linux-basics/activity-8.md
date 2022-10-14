---
title: "Activity 8 - What's different?"
description: "Use Linux commands to compare files"
date: 2022-09-23
difficulty: "Intermediate"
weight: 11
---

<p style="text-align: center;"><iframe width="50%" height="500px" src="https://www.youtube.com/embed/fAI1kyAoVTA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Let's look at the secret message to make sure this weird `malware.sh` file hasn't done anything to it!
    </div>
</div>

## Differences

Do we know a command that can help us find the location of the `secret-message.txt` file?

![find command](../images/Act8.1.png?classes=border,shadow)

Let's move into that directory and let's check for the quote "Do. Or do not. There is no try." from earlier. Do you remember what command can help us check?

![grep command](../images/Act8.2.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        This file usually has good and fun quotes, but there seems to be lots of changes. Should we compare it to a known good version?
    </div>
</div>

Let's see if there might be any backups of the secret message within its directory. Go to the Document directory and try:

```
ls -la
```

{{% notice tip %}}
The `-a` flag gives all entries including hidden files.
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Did you find any new files? Take notes of the changes!
    </div>
</div>

## Compare the secret-message.txt file to the backup file

`diff` is a command used to compare two files to get what has been added, changed, and deleted to the file.  
The format is: `diff [filename] [Filename of Comparison File]`

{{% notice info %}}
Fun Fact: Running `diff --help` will output information on how to use the `diff` tool, including what options can be used with the tool.
{{% /notice %}}

Check the difference between the two files. How many differences did you find? Put it in the file you made!

{{% notice tip %}}

### A better way to see the differences

`vimdiff` is a command that opens a window with the files in separate tabs highlighting the differences.

Try `vimdiff` to better visualize the differences between the files.
{{% /notice %}}

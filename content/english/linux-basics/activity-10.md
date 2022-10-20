---
title: "Activity 10 - Let's move and replace"
description: "Use Linux commands to move and copy files"
date: 2022-09-23
difficulty: "Intermediate"
weight: 13
---

<p style="text-align: center;"><iframe width="50%" height="500px" src="https://www.youtube.com/embed/LPcQW4oGK6g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Great, now that the hackers' malicious file won't cause us any more headaches, let's restore the old file so things will run smoothly again.
    </div>
</div>

### How to fix the secret-message

The command `mv` can also be used to replace the destination file with the source file.  
The format is: `mv [source filename] [destination name]`.

Replace the messed up secret message with the backup that we found earlier.  
Let's move the file into the new directory that we made.

![mv command](../images/Act10.1.png?classes=border,shadow)

---

### Backup your files

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        That backup file earlier came in handy to fix the tampered file. Let's backup the files in our directory.
    </div>
</div>

`cp` is a command that copies a file from one location to another.  
The format is: `cp [source filename] [destination filename]`.

Make a copy of the file you made and the `secret-message.txt`.

![cp command](../images/Act10.2.png?classes=border,shadow)

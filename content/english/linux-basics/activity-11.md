---
title: "Activity 11 - Store and protect files"
description: "Use Linux commands to compress and archive files."
date: 2022-09-23
prereq: "None."
difficulty: "Intermediate"
weight: 14
---

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Thanks so much for helping us fix my machine! Now let's get everything up into one nice package.
    </div>
</div>

### Secure your files, so they don't get tampered with again

`tar` is a command that creates and extracts archived files.

{{% notice info %}}
An archive is a collection of archive files. An archive file holds the compressed data of one or more files.

`zip` is a command that compresses a set of files. The format is: `zip [name of zip file] [filenames to be zipped]`

{{% /notice %}}

The format is: `tar [filenames]`.

| flags | Uses                                |
| :---- | :---------------------------------- |
| -c    | creates archive                     |
| -x    | extracts archive                    |
| -f    | creates archive with given filename |

Use `tar` to secure your directory of `files`! You are going to want to create an archive with the name `files.tar.gz`.

![tar command](../images/Act11.png?classes=border,shadow)

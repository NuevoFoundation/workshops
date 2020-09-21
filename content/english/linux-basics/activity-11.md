---
title: "Activity 11 - Store and protect files"
description: "Use Linux commands to compress and archive files."
date: 2020-09-17
prereq: "None."
difficulty: "Intermediate"
weight: 14
---

*Thanks so much for helping us fix my machine! Now let's get everything up into one nice package.*

### Secure your files, so they don't get tampered with again

`tar` is a command that creates and extracts archived files.  

{{% notice info %}}
An archive is a collection of archive files. An archive file holds the compressed data of one or more files.
{{% /notice %}}

The format is: `tar [filenames]`.

| flags | Uses |
| :--- | :--- |
| -c | creates archive |
| -x | extracts archive |
| -f | creates archive with given filename |

Use `tar` to secure your directory of `files`! You are going to want to create an archive with the name `files.tar.gz`.

![tar command](../images/Act11.png?classes=border,shadow)

{{% notice info %}}
`zip` is a command that compresses a set of files.  
The format is: `zip [name of zip file] [filenames to be zipped]`
{{% /notice %}}

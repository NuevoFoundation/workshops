---
title: " Activity 11 - Store and protect files."
description: "Use Linux commands to compress and archive files."
date: 2020-07-08
weight: 14
translationKey: "linux-basics-activity-11"
---

*Thanks so much for helping us fix the machine! Now let's get everything up into one nice package.*

### Secure your files, so they don't get tampered with again

`tar` is a command that creates and extracts archived files.  
The format is: `tar [filenames]`.

{{% notice info %}}

An archive is a collection of archive files. An archive file holds the compressed data of one or more files.

{{% /notice %}}

| flags | Uses |
| :--- | :--- |
| -c | creates archive |
| -x | extracts archive |
| -f | creates archive with given filename |

Use `tar` to secure your directory of `files`! You are going to want to create an archive with the name `files.tar.gz`.

![tar command](../images/Act11.PNG?classes=border,shadow)

{{% notice info %}}

`zip` is a command that compresses a set of files.  
The format is: `zip [name of zip file] [filenames to be zipped]`

{{% /notice %}}

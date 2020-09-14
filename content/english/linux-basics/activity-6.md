---
title: "Activity 6 - A BAD File"
description: "Use Linux commands to search"
date: 2020-07-08
weight: 9
translationKey: "linux-basics-activity-6"
---

***Remember that file we saw with the strange name? It was called Malware.sh. We should go find it again and take a closer look 
at it.***

### Searching for a file?

Find is a command used to search for a file with certain parameters within a directory or region of files.
Search for a specific File Name:
file [directory] -name [filename]
<b>Search for all text files (Files that end with .txt)</b>:
file [directory] -name *.txt 

Use the find command to search for the file within the current directory. Is there a command we can use to figure out what the current directory is?

--------------------------

### Searching for a pattern in a file?

Grep is a command used to search for a pattern of characters. (Should we define chars?). Grep has different flags or options that can change how it is used.


|flags | Uses |
| :--- | :---- |
| -c | To get the number of files with the pattern. |
| -i | To make the search case-insensitive. “uNiX” is the same as “unix” |
| -n | To return matched lines and their line numbers. |

grep [flag] “[pattern]” [filename]

---
title: "Activity 5- A BAD File"
description: "Use Linux commands to search"
date: 2020-07-08
---

***Remember that file we saw with the strange name? It was called [insert filename]. We should go find it again and take a closer look 
at it.***

**Searching for a file?**

Find is a command used to search for a file with certain parameters within a directory or region of files.
Search for a specific File Name:
file [directory] -name [filename]
**Search for all text files (Files that end with .txt):**
file [directory] -name *.txt 

**Searching for a pattern in a file?**

Grep is a command used to search for a pattern of characters. (Should we define chars?). Grep has different flags or options that can change how it is used.

---
Flags: Uses
c: "To get the number of files with the pattern."
i: "To make the search case-insensitive. “uNiX” is the same as “unix”"
n: "To return matched lines and their line numbers."
---

grep [flag] “[pattern]” [filename]

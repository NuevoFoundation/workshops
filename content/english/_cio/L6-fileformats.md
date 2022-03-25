---
title: "C:I/O"
description: "Creating a file format using C"
date: 2021-07-221T14:51:26-07:00
prereq: "???"
difficulty: "Intermediate"
download: " "
draft: true
hidden: false 
weight: 6
---
# Reading and Designing File Formats
We have the capability now to write data to a file and read that data. As a review, lets first write some save data for a simple role-playing game.

# The Data
The game will need to store the following data.
* The player name, which will be a string (`char*`).
* The player's position, which are `x` and `y` coordinates. These are 2 `float`s.
* The player's money, which is stored as a `long long`.
* The player's current HP, which is stored as a `int`.
* The player's stats (HP, ATK, DEF) are stored as 3 `int`s.

<!---Exercise - read and write this file-->

We can now write this data to a file, but there are also some design considerations to look at:
1. If there is an update that requires saving more data to a file, how can we do that? 
2. How do we make sure that the file we are reading is valid?
3. Can we protect the contents of the file from being edited?

## Updates
In a lot of games (and software in general), there are usually updates that are released regularly. These updates could change the file format and possibly break older save files.


### The Header
Some file types start with a *header*, which has some information about the file. We can read this header, which will always have the same data layout, and discern how to continue reading the actual data in the rest of the file.

## Validity
We can use the header to get some sense of validity for the file to ensure that it is, in fact, a file that contains save data for the game. There are many ways to achieve this, but the simplest is to encode a series of bytes that identify the file.
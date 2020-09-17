---
title: "Activity 5 - Secure User Permissions"
description: "Use a Linux command to secure your files"
date: 2020-07-08
weight: 8
translationKey: "linux-basics-activity-5"
---

*Oh no. Some of our files might have been messed with! Let’s secure our files…*

### But, How do we know how secure our files are?

Is there a command that we have learned so far that can show us how secure our files are?  
Feel free to go back if you need to!

[Image of results with the command blocked out!]

We should keep using that command to check if we changed the permissions as expected.

---

### How do we secure the files then?

```
chmod u=rwx g=rx o=x file1
```

`chmod` is a command used to modify the permissions of your files for the following 3 different groups of users: 
- the <b>u</b>ser and owner of the file
- the <b>g</b>roup and the members of the group of people with access to the file
- the <b>o</b>thers or anyone else

These groups can be modified to have permissions to do the following:

- <b>r</b>ead
- <b>w</b>rite
- e<b>x</b>ecute. 

---

### Try it on your own!

Now, let's try to change the permissions of our files. We want anyone outside of our group and aside from ourselves to have no permissions for the file1. How do we do that?

{{% notice tip %}}

#### Shortcut!

chmod can also be used with simple number commands. These commands are written like:  

```
chmod 751 [insert filename]
```

The values can be understood as 7 is the combination of 4, 2, and 1. Thus, it gives <b>u</b>sers the permission to read, write, and execute.  
What permissions do the other two values give?  

| Number | Meaning |
| :---: | :---: |
| 4 | read |
| 2 | write |
| 1 | execute |
| 0 | no permission |

{{% /notice %}}

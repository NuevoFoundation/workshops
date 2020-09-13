---
title: "Activity 5 - Secure User Permissions"
description: "Use a Linux command to secure your files"
date: 2020-07-08
weight: 8
translationKey: "linux-basics-activity-5"
---

Oh no. Some of our files might have been messed with! Let’s secure our files… but, how?

## How do we know how secure our files are?

Is there a command that we have learned so far that can show us how secure our files are?  
Feel free to go back if you need to!

[Image & Explanation of results]

We should keep using that command to check if we changed the permissions as expected.

## How do we secure the files then?

Try it:

'''
chmod u=rwx g=rx o=x [insert filename]
'''

chmod is a command used to modify the permissions of your files for the following 3 different groups of users: the **u**ser and owner of the file, the **g**roup and the members of the group of people with access to the file, and **o**thers or anyone else. These groups can be modified to have permissions to **r**ead, **w**rite, or e**x**ecute. 

## Try It

How would you use this command to secure the files in your new directory.

{{% notice tip %}}

## Shortcut!

chmod can also be used with simple number commands. These commands are written like:  

'''
chmod 751 [insert filename]
'''

The values can be understood as 7 is the combination of 4, 2, and 1. Thus, it gives users the permission to read, write, and execute.  
What permissions do the other two values give?  
| KEY               |
| :---              |
| 4 = read          |
| 2 = write         |
| 1 = execute       |
| 0 = no permission |

{{% /notice %}}

Now, let's try to change the permissions of our files. Type in ‘ls -l’. Look at the results. We want anyone outside of our group and
aside from ourselves to have no permissions for ____ file. How do we do that?

---
title: "Activity 1 - Determine User Account"
description: "Use a Linux command to determine what user you are"
date: 2022-09-23
difficulty: "Intermediate"
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/XAtCQ9S1vSI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Now we are at the command line. Let's test a simple command to show us the user account.
    </div>
</div>

## What are user accounts?

Every user in Linux has a user account. These are used to uniquely identify each user.

For example, say you and your friend, Nuvi, share a computer. You and Nuvi might create separate user accounts to keep track of which files belong to which of you and to ensure that none of you accidentally changes anything important.

## How do I find out which account I am using?

The Linux command `whoami` will tell you which account you are using. Try it!

```
whoami
```

<!---![home directory](../images/01_whoami.png?classes=border,shadow) --->
<img src="../images/01_whoami.png" alt="home directory" style="width:600px;"/>

In our example above, the terminal output is the name of our user, `nuvi`.

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Now that we checked who we are, next let's find out where we are.
    </div>
</div>

---
title: "Getting Started"
date: 2020-07-29T14:08:32-07:00
draft: false
hidden: true
---

# Getting Started

#### Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Hugo](https://gohugo.io/getting-started/installing/)
- [Git](https://git-scm.com/downloads) and you can get some experience here: https://try.github.io/

## Code

Contribution to this repository is via the [fork model](https://help.github.com/articles/fork-a-repo/). Contributors push changes to their own "forked" version of workshops, and then submit a pull request into it requesting those changes be merged.

To get started:

1. Fork the repo by clicking Fork in the top right corner:

![image](media/fork.PNG)

2. From git bash, run (replacing _[user-name]_ with your GitHub user name):

```
\> git clone https://github.com/[user-name]/workshops.git
\> cd workshops
\workshops> git remote add upstream https://github.com/NuevoFoundation/workshops.git
\workshops> git remote set-url --push upstream no_push
```

The last command prevents an accidental push to this repository without going through a pull request.

After running above, `git remote -v` should show something similar to the following:
```
\workshops> git remote -v 
origin  https://github.com/dmonroym/workshops.git (fetch)
origin  https://github.com/dmonroym/workshops.git (push)
upstream        https://github.com/NuevoFoundation/workshops.git (fetch)
upstream        no_push (push)
```

## Build and Test

In order to build and test your changes you'll want to use hugo. If you've followed the right installation instructions then hugo should be in your PATH (if not give your machine a restart).

```
\> cd workshops
\workshops> hugo -D server
```

This'll output some build information but the most important line is going to be along the lines of: `Web Server is available at //localhost:1313/ (bind address 127.0.0.1)`

You can now launch your favorite web browser and open up //localhost:1313/ and should see the site up

## Updating your fork

In order to keep yourself up to date you'll want to maintain your fork updated as much as possible.
Before creating a new branch you should fetch the changes and push them to your fork. Here's how to do it (if you need another branch just use that instead of master)

```
\workshops> git fetch --all --prune
\workshops> git checkout master
\workshops> git merge upstream/master
\workshops> git push origin master
```

## Sample Walkthrough

**Scenario**: Let's make a simple change to the Getting Started page and submit a pull request.

### Follow instructions above

Once you've followed the Code instructions above you'll have a local copy of the workshops repo

### Create a topic branch

Make sure your fork is updated before doing this

```
\workshops> git checkout master
\workshops> git checkout -b [branch-name]
\workshops> git push --set-upstream origin [branch-name]
```

### Open the repo using VS Code

When you launch VS Code you can Open Folder... Navigate to the workshop folder and select open

### Navigate to file and modify it

Depending on what you're modifying you'll want to get a better understanding of [how the site is built](site-architecture.md)

In our case you want to modify this file so go to content\english\guidelines\getting-started.md
I simply want you to add two exclamation points to the word "Welcome!"

**Before**: `Welcome!`

**After**: `Welcome!!!`

### Commit the change 

Running git status should provide you with all the changes you've made and all the file names. You'll want to stage them by using git add and then commit and push them. Here's the commands to do that.

```
\workshops> git status
\workshops> git add content/english/guidelines/getting-started.md
\workshops> git commit -m "Added exlamations"
\workshops> git push
```

Some git tips: If you want to add everything and commit at the same time you can skip all these commands and just use `git commit -am "message here" ` and then do the `git push`

### Create a pull request
Congratulations, you've now made all the necessary changes and the last step is to get it reviewed and pushed into production.


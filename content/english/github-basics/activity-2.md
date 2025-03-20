---
title: "Room 2: The Commit Conundrum"
description: "Learn to make changes and commit them to your repository."
difficulty: "Beginner"
weight: 2
---

<img src="../images/room2_commit.jpg" alt="Code snippets float around a central terminal, waiting to be organized" />

As you enter the second room, snippets of code float in the air. A terminal in the center flickers with a message: "Bring order to chaos. Commit your changes to proceed."

## Your Mission

1. Create a new file called `solution.md` in your local repository.
2. Add the secret code from Room 1 to this file.
3. Stage and commit your changes.

## Instructions

1. In your terminal, ensure you're in the `escape-room` directory.
2. Create the file and add the code:

```
echo "Secret Code: GITHUB_BASICS_101" > solution.md
```

3. Stage and commit your changes:

```
git add solution.md
git commit -m "Add solution for Room 1"
```


{{< notice warning >}}
**Tip:** Always write clear and descriptive commit messages. They help you and others understand the history of your project.
{{< /notice >}}

{{< expand "Quiz: Test Your Knowledge" >}}

**Question 1: What command do you use to stage changes?**

{{< button href="#" >}}git stage{{< /button >}}
{{< button href="#" >}}git add{{< /button >}}
{{< button href="#" >}}git commit{{< /button >}}

**Question 2: What does the -m flag do in the commit command?**

{{< button href="#" >}}Marks the commit as important{{< /button >}}
{{< button href="#" >}}Merges the commit immediately{{< /button >}}
{{< button href="#" >}}Allows you to add a commit message{{< /button >}}

{{< /expand >}}

When you've made your commit, enter the commit message you used:

<label for="finput">Input field for commit message:</label><br>
<input type="text" id="finput" name="finput"><br>
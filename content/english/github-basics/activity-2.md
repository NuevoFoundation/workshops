---
title: "Room 2: The Commit Conundrum"
description: "Learn to make changes and commit them to your repository."
difficulty: "Beginner"
weight: 2
---

# Room 2: The Commit Conundrum

{{< figure src="images/room2_commit.jpg" title="Code snippets float around a central terminal, waiting to be organized" >}}

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

{{< hint warning >}}
**Tip:** Always write clear and descriptive commit messages. They help you and others understand the history of your project.
{{< /hint >}}

{{< quiz name="commit-quiz" >}}
{{< quiz-item name="q1" question="What command do you use to stage changes?" >}}
{{< quiz-option value="git stage" >}}git stage{{< /quiz-option >}}
{{< quiz-option value="git add" correct="true" >}}git add{{< /quiz-option >}}
{{< quiz-option value="git commit" >}}git commit{{< /quiz-option >}}
{{< /quiz-item >}}

{{< quiz-item name="q2" question="What does the -m flag do in the commit command?" >}}
{{< quiz-option value="Marks the commit as important" >}}Marks the commit as important{{< /quiz-option >}}
{{< quiz-option value="Merges the commit immediately" >}}Merges the commit immediately{{< /quiz-option >}}
{{< quiz-option value="Allows you to add a commit message" correct="true" >}}Allows you to add a commit message{{< /quiz-option >}}
{{< /quiz-item >}}
{{< /quiz >}}

When you've made your commit, enter the commit message you used:

[Input field for commit message]

{{< hint info >}}
Note: The actual input field and encryption functionality would need to be implemented separately, as Hugo doesn't provide this out of the box.
{{< /hint >}}
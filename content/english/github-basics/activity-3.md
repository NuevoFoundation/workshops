---
title: "Room 3: The Pull Request Portal"
description: "Learn to push changes and create a pull request."
difficulty: "Intermediate"
weight: 3
---

# Room 3: The Pull Request Portal

{{< figure src="images/room3_pull_request.jpg" title="A massive door stands before you, with 'Pull Request' emblazoned above" >}}

A massive door blocks your path, with "Pull Request" written above it. A sign reads: "To open this door, your changes must be reviewed."

## Your Mission

1. Push your local changes to your forked repository.
2. Create a pull request to the original `CodeDungeon/escape-room` repository.

## Instructions

1. Push your changes:
   ```
   git push origin main
   ```
2. Go to your forked repository on GitHub.
3. Click "Contribute" then "Open pull request".
4. Fill in the title as "Solution for Room 2" and provide a brief description.
5. Click "Create pull request".

{{< hint info >}}
**Hint:** Keep an eye on your pull request. The dungeon guardians (repository maintainers) will review it and may request changes!
{{< /hint >}}

{{< tabs "pull-request-process" >}}
{{< tab "Push Changes" >}}
First, push your local changes to your remote repository:
```
git push origin main
```
{{< /tab >}}
{{< tab "Create Pull Request" >}}
1. Navigate to your fork on GitHub
2. Click the "Pull requests" tab
3. Click "New pull request"
4. Ensure the base repository is the original and the head repository is your fork
5. Click "Create pull request"
{{< /tab >}}
{{< tab "Wait for Review" >}}
After creating the pull request:
1. Wait for the maintainers to review your changes
2. Address any feedback they provide
3. Push new commits to update the pull request if needed
{{< /tab >}}
{{< /tabs >}}

Once you've created your pull request, enter its number to proceed:

[Input field for pull request number]

{{< hint info >}}
Note: The actual input field and encryption functionality would need to be implemented separately, as Hugo doesn't provide this out of the box.
{{< /hint >}}
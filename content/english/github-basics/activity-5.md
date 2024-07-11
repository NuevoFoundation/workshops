---
title: "Room 5: The Conflict Canyon"
description: "Learn to resolve merge conflicts and sync with the upstream repository."
difficulty: "Advanced"
weight: 5
---

# Room 5: The Conflict Canyon

{{< figure src="/images/room5_conflict.jpg" title="Two bridges almost connect over a deep chasm, representing a merge conflict" >}}

You enter a room with a deep chasm. Two bridges extend from either side but don't quite meet in the middle. A sign reads: "Only by resolving conflicts can you cross."

## Your Mission

1. Pull the latest changes from the original repository.
2. Resolve the merge conflict that appears.
3. Commit the resolution and push the changes.

## Instructions

1. Add the original repository as a remote:
   ```
   git remote add upstream https://github.com/CodeDungeon/escape-room.git
   ```
2. Fetch and merge the changes:
   ```
   git fetch upstream
   git merge upstream/main
   ```
3. You'll see a merge conflict. Open the conflicting file(s) and resolve the conflicts.
4. After resolving, stage, commit, and push:
   ```
   git add .
   git commit -m "Resolve merge conflict"
   git push origin main
   ```

{{< hint info >}}
**Hint:** Look for the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) in the files. Choose which changes to keep or combine them as needed.
{{< /hint >}}

{{< highlight diff "linenos=table" >}}
<<<<<<< HEAD
This is some content from your current branch.
=======
This is conflicting content from the branch you're merging in.
>>>>>>> upstream/main
{{< /highlight >}}

After resolving the conflict, what was the final line of the conflicting file? Enter it below:

{{< input-encrypt key="This is the resolved content that combines both changes." >}}
Outstanding work! You've conquered the Conflict Canyon and completed all the challenges. You're now a GitHub master!
{{< /input-encrypt >}}
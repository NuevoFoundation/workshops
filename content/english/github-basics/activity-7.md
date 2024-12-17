activity_7.md
---
title: "Activity 7: Resolving Merge Conflicts"
description: "Learn how to handle merge conflicts when creating pull requests."
difficulty: "Beginner"
weight: 7
---

Merge conflicts occur when changes on two branches cannot be automatically merged. This can happen when the same lines of code are modified or when one branch deletes a file that another branch has modified. In this activity, you will learn how to resolve these conflicts.

## Your Mission

1. **Identify the Conflict:**
   - GitHub will notify you of any merge conflicts when trying to merge branches. Navigate to your pull request on GitHub to see the conflicts.
2. **Open Your Local Repository:**
   - On your local machine, navigate to the repository using your terminal.
3. **Fetch the Latest Changes:**
   - Run the command:
     `git fetch origin`
4. **Merge the Base Branch:**
   - Try merging the branch again:
     `git merge origin/main`
5. **Resolve Conflicts:**
   - Open the files with conflicts in your code editor. You will see sections labeled with `<<<<<<`, `======`, and `>>>>>>`. Edit these lines to resolve the conflict.
   - Once resolved, save the files.
6. **Stage and Commit the Resolved Changes:**
   - Use the command to stage the changes:
     `git add <filename>`
   - Then commit:
     `git commit -m "Resolved merge conflict"`

## Instructions

- Always review the changes and test your code after resolving conflicts.
- Communicate with your team about the conflicts and how you resolved them.

## Next Steps

After resolving conflicts, you can continue with your pull request process. The next activity will cover using Git tags and releases.

{{< expand "Need help?" >}}
If you're struggling with conflict resolution:
- Take your time to understand the conflicting changes before resolving them.
- If you're unsure about which changes to keep, consult with your team or the original authors of the conflicting code.
- Consider using a visual merge tool if you find it difficult to resolve conflicts in a text editor.
{{< /expand >}}
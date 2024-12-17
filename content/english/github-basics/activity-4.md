activity_4.md
---
title: "Activity 4: Creating a Branch"
description: "Learn how to create and manage branches in Git."
difficulty: "Beginner"
weight: 4
---

Branching is an essential feature in Git that allows you to work on different lines of development without impacting the main codebase. In this activity, you will create a new branch to work on new features or fixes.

## Your Mission

1. **Open Your Terminal:**
   - Ensure you are in the project directory by navigating to it in the terminal.
   - Confirm your current directory with `pwd` (on Mac/Linux) or `cd` (on Windows).
2. **Check Existing Branches:**
   - Run the command:
     `git branch`
   - This will list all existing branches.
3. **Create a New Branch:**
   - Use the following command to create a new branch:
     `git branch <new_branch_name>`
   - Replace `<new_branch_name>` with a name that reflects the purpose of the branch.
4. **Switch to the New Branch:**
   - Run the command:
     `git checkout <new_branch_name>`
5. **Verify the Branch Change:**
   - Check to ensure you are on the new branch by running `git branch` again.
   - The current branch will be highlighted.

## Instructions

- When making changes, ensure they are committed to this branch before merging or switching branches.
- Use descriptive names for your branches to easily identify their purpose.

## Next Steps

You are now ready to make changes to your new branch. The next activity will cover how to merge branches.

{{< expand "Need help?" >}}
If you're encountering issues:
- Make sure you're in the correct directory of your cloned repository.
- If you can't create a new branch, ensure you have the latest version of the repository by running `git fetch` first.
- If you're unable to switch branches, commit or stash your changes in the current branch before switching.
{{< /expand >}}
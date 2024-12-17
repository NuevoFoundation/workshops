activity_5.md
---
title: "Activity 5: Merging Branches"
description: "Learn how to merge branches in Git."
difficulty: "Beginner"
weight: 5
---

Merging branches in Git allows you to incorporate changes from one branch into another. This is typically used to combine new features or fixes into the main branch. In this activity, you will learn how to perform a merge.

## Your Mission

1. **Ensure You Are on the Main Branch:**
   - First, switch back to the main branch by running:
     `git checkout main`
2. **Update the Main Branch:**
   - Pull the latest changes to ensure your main branch is up to date:
     `git pull origin main`
3. **Merge the Feature Branch:**
   - To merge your new branch into the main branch, run:
     `git merge <your_branch_name>`
   - Replace `<your_branch_name>` with the name of the branch you created earlier.
4. **Resolve Any Merge Conflicts:**
   - If there are any conflicts, Git will notify you. Open the conflicting files and make the necessary changes to resolve them.
   - After resolving conflicts, stage the changes using:
     `git add <conflicted_file>`
5. **Finalize the Merge:**
   - Commit the merge if there were conflicts:
     `git commit -m "Resolved merge conflict"`

## Instructions

- Ensure you frequently commit changes to avoid complex merge conflicts.
- Always review the changes before finalizing the merge.

## Next Steps

You have successfully merged your changes. The next activity will cover the process of creating a pull request on GitHub.

{{< expand "Need help?" >}}
If you're struggling with the merge:
- Make sure you've committed all changes in your feature branch before attempting to merge.
- If you're unsure about resolving conflicts, consider using a visual merge tool like GitKraken or SourceTree.
- If you've made a mistake during the merge, you can abort it using `git merge --abort` and start over.
{{< /expand >}}
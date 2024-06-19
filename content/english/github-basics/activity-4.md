---
title: "Activity 4: Understanding Branching in GitHub"
date: 2023-12-21T13:24:17-07:00
draft: false
weight: 5
---

{{% notice info %}}
## NOTE:
Before starting this activity, make sure you have a GitHub account and a repository. If not, please complete [Activity 1](#activity-1) first.
{{% /notice %}}

## The Role of Branching in GitHub

Branching in GitHub is a fundamental aspect of managing and developing projects. It allows you to work on new features or fixes without affecting the main project code.

### Importance of Branches
1. **Isolation**: Branches provide a way to work on changes or new features separately from the main codebase.
2. **Collaboration**: Multiple team members can work on different features simultaneously without interference.
3. **Safe Experimentation**: Test new ideas in a branch without risking the stability of the main project.

### Creating a Branch
1. **Using GitHub’s Web Interface**:
   - Go to your repository on GitHub.
   - Locate the "Branch" dropdown menu at the top of the file list.
   - Enter a name for your new branch, then click "Create branch".

2. **Using the Terminal**:
   - Make sure you have cloned the repository to your local machine.
   - Use the command `git checkout -b [branch-name]` to create and switch to a new branch.

### Committing Changes on a Branch
1. **Through the Terminal**:
   - After making changes, stage them with `git add .`
   - Then commit the changes with `git commit -m "Your commit message"`

2. **Using GitHub Desktop**:
   - Choose the files you want to commit in the Changes tab.
   - Write a commit message describing your changes.
   - Click "Commit to [branch-name]".

### Merging Branches
After you've completed work on a branch, you can merge it into the main project:

1. **Creating a Pull Request**:
   - On GitHub, navigate to your repository and click "Pull requests".
   - Click "New pull request", select your branch, and then click "Create pull request".
   - Describe the changes and submit the pull request.

2. **Review and Merge**:
   - Collaborators can review the changes, discuss them, and suggest edits.
   - Once the pull request is approved, it can be merged into the main branch.

Branching is a powerful tool in GitHub that supports collaborative development and safe code management. As you grow more comfortable with GitHub, branching will become an integral part of your workflow.

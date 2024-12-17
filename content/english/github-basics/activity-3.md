activity_3.md
---
title: "Activity 3: Cloning a Repository"
description: "Learn how to clone your forked GitHub repository to your local machine."
difficulty: "Beginner"
weight: 3
---

In this activity, you will learn how to clone your forked repository from GitHub to your local machine. Cloning downloads a copy of the repository, allowing you to work on it without affecting the original repository.

## Your Mission

1. **Copy Your Repository URL:**
   - Go to your forked repository on GitHub.
   - Click the green 'Code' button and copy the URL provided under 'Clone with HTTPS'.
2. **Open Terminal:**
   - On your local machine, open a terminal (Command Prompt, PowerShell, or any terminal of your choice).
3. **Clone the Repository:**
   - In the terminal, navigate to the directory where you want to save the repository using `cd <directory_path>`.
   - Run the command:
     `git clone <YOUR_FORKED_REPO_URL>`
4. **Change Directory to the Project Folder:**
   - After cloning, enter the project directory with:
     `cd escape-room`

## Instructions

- Ensure you have Git installed on your machine by running `git --version` in the terminal.
- If Git is not installed, download and install it from [git-scm.com](https://git-scm.com/downloads).

## Next Steps

After successfully cloning your repository, the next activity will give you guidance on creating a new branch to work on features or fixes.

{{< expand "Need help?" >}}
If you're facing difficulties:
- Make sure you've copied the correct URL from your forked repository.
- Check if Git is properly installed by running `git --version` in your terminal.
- If you receive a "permission denied" error, ensure you have the necessary permissions to write to the directory where you're trying to clone the repository.
{{< /expand >}}
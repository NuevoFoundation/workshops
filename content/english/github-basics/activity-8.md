activity_8.md
---
title: "Activity 8: Using Git Tags"
description: "Learn how to tag releases in your Git repository."
difficulty: "Beginner"
weight: 8
---

Tags in Git are used to mark specific points in the repository's history as important - typically used for marking release versions. In this activity, you will learn how to create and manage tags in your repository.

## Your Mission

1. **Open Your Terminal:**
   - Ensure you are in the correct project directory.
2. **Create a Tag:**
   - To create a new tag, use the following command:
     `git tag -a v1.0 -m "Version 1.0 released"`
   - Replace `v1.0` with your desired tag name and provide an appropriate message.
3. **View Your Tags:**
   - You can view all tags in your repository by running:
     `git tag`
4. **Push Your Tags to GitHub:**
   - To share your tags with others, push them to GitHub:
     `git push origin --tags`
5. **Deleting a Tag (if necessary):**
   - If you need to delete a tag, use:
     `git tag -d v1.0` to delete it locally, and then:
     `git push origin --delete v1.0` to delete it from GitHub.

## Instructions

- Tags are helpful in version management; ensure you tag relevant milestones in your project.
- Use semantic versioning (e.g., v1.0.0) for your tags to indicate major, minor, and patch versions.

## Next Steps

Now that you have familiarized yourself with tagging, the next activity will summarize collaboration workflows.

{{< expand "Need help?" >}}
If you're having issues with tags:
- Make sure you have the necessary permissions to create and push tags to the repository.
- If you can't see your tags on GitHub after pushing, try refreshing the page or waiting a few minutes.
- When deleting tags, ensure you have the exact tag name to avoid accidentally deleting the wrong tag.
{{< /expand >}}
---
title: "Room 9: The Security Stronghold"
description: "Fortify your repository with GitHub's security features."
difficulty: "Advanced"
weight: 9
---

# Room 9: The Security Stronghold

{{< figure src="../images/room9_security.jpg" title="A room filled with locks, shields, and security monitors" >}}

You enter a room bristling with security measures. Locks, shields, and security monitors surround you. A stern voice declares: "Secure your code to proceed!"

## Your Mission

1. Enable Dependabot alerts for your repository.
2. Add a security policy to your repository.
3. Run a code scanning alert using GitHub Actions (if your repository is public).

## Instructions

1. Go to your repository's "Settings" tab.
2. Click on "Security & analysis" in the left sidebar.
3. Enable Dependabot alerts.
4. In your repository, create a new file at `.github/SECURITY.md`.
5. Add basic security guidelines to this file.
6. If your repository is public, enable code scanning in the "Security & analysis" settings.

{{< hint danger >}}
**Important:** Always be cautious when dealing with security settings. Make sure you understand each feature before enabling it.
{{< /hint >}}

{{< highlight markdown "linenos=table" >}}
# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please send an e-mail to security@example.com. All security vulnerabilities will be promptly addressed.

## Supported Versions

Use this section to tell people about which versions of your project are currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |
{{< /highlight >}}

After setting up your security policy, what email address did you specify for reporting vulnerabilities? Enter it below:

{{< input-encrypt key="security@example.com" >}}
Well done, security expert! You've fortified your repository. On to the final challenge!
{{< /input-encrypt >}}
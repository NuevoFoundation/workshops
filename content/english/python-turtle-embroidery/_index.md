---
title: "Embroidery with Python Turtle"
description: "Help Nuvi personalize their wardrobe while connecting Python Turtle drawings to embroidery stitch paths."
date: 2026-11-06
prereq: "Python variables, loops, and functions"
language: "python"
topics: ["graphics", "engineering"]
difficulties: ["intermediate"]
draft: false
hidden: false
alwaysopen: false
icon: "fab fa-python"
weight: 1
---

## Introduction

Nuvi wants to give their wardrobe a fresh look without replacing their favorite clothes. Your mission: design a small embroidered patch that adds a personal touch!

**Embroidery** decorates fabric with thread. A machine follows a sequence of movements and stitches, much like a turtle follows your Python instructions. First you will draw a patch border, then plan which movements should make stitches, and finally generate a Nuvi design.

<img src="media/nuvi-turtlethread.svg" alt="Nuvi embroidery design: a rounded robot outline with side handles, a top loop, a rectangular face, and two yellow oval eyes" width="50%">

This is a **digital design workshop**, not a machine-operation lesson. You can finish every activity without fabric, a needle, or an embroidery machine.

## What you will learn

By the end, you will be able to:

- Draw and turn with Python Turtle to create a closed border.
- Explain how a drawing movement differs from a travel movement that makes no stitch.
- Predict the space between motifs using a drawing model of embroidery distances.
- Draw partial circles and rounded corners, then personalize a complete Nuvi preview.

## Prerequisites

**Ages:** 11-14. **Experience:** comfortable with Python variables, loops, and functions. You do not need previous Turtle or embroidery experience.

**Delivery:** in person, with an internet-connected computer and a browser. No student accounts, Python installation, or embroidery hardware are required.

**Time:** the original target is 45 minutes. With the two mini-activities added, allow approximately **55-65 minutes**: 5 to get ready, 10 for squares, 10 for stitch gaps, 7 for partial circles, 7 for rounded corners, 15 for Nuvi, and 3 to share. Keep all five activities; allow extra time rather than rushing past the curve practice.

{{% notice info %}}
For now, students use **Codebunga's embedded Python Turtle editor** to draw and experiment. These are drawing previews, not actual stitch-file exports. Codebunga's current runtime does not support `turtlethread` or `pyembroidery`. The original [Nuvi embroidery script](media/nuvi_turtlethread.py) is preserved for a facilitator's separate export step. [Implementation notes](codebunga-embroidery-support/) explain the support Codebunga would need.
{{% /notice %}}

### Your coding workspace

Each activity contains a live Codebunga editor, just like the Python Turtle workshop.

1. Copy the activity's complete starting program using the code block's copy button.
2. Click inside the embedded editor. Select its existing code with **Ctrl+A** on Windows/Linux or **Command+A** on Mac, then paste your program.
3. Press **Run** in the editor. Your drawing appears in its result area on this page.
4. Edit the code to complete the challenge, then press **Run** again.

We currently reuse a shared blank Turtle starter rather than dedicated hosted projects. **Reset** restores that starter, not the activity's program; paste the program again if you reset. Keep a copy of your edited code in a text file before leaving the page. If embedding is blocked, use the editor's fallback link.

If a message appears below the editor, read its last line. Check spelling, quotation marks, and indentation before trying again. The editors load automatically and need internet access.

## Your design mission

Imagine the patch on a jacket, bag, or shirt. Choose colors that suit your own style: Nuvi is happy to share the spotlight with your ideas! If working with a partner, alternate who types and who predicts the next movement.

{{% notice info %}}
A screen preview is not proof that a design will sew well. An experienced facilitator must check machine compatibility, dimensions, hoop placement, fabric, stitch density, travel moves, and thread changes before any supervised machine demonstration. Do not send these files directly to a machine during the student activities.
{{% /notice %}}

## Table of Contents

<details>
<summary>Table of Contents</summary>
{{% children /%}}
</details>

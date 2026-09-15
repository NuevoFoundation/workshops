---
title: "Engineering Design DISTANCE - Answer key"
date: 2024-01-15T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
This is a teacher reference for the Engineering Design DISTANCE workshop. This workshop is currently in draft state (all activity pages are marked `draft: true`) and has incomplete content including missing images, a missing MATLAB/Octave code file, and a missing grading criteria table. This answer key documents the workshop's design process steps and expected parameter choices to help teachers understand the intended flow if the workshop is completed in the future.
{{% /notice %}}

{{% notice warning %}}
**Workshop status: Incomplete.** All 11 activity pages are `draft: true`. Multiple pages have `[insert image]` and `[insert table]` placeholders. The MATLAB/Octave code referenced throughout is never provided. The Octave installation instructions reference a file ("Octave Instructions.docx") that does not exist in the repository. This workshop cannot be delivered to students in its current state.
{{% /notice %}}

## Workshop overview

Students participate in a fictional racing competition called DISTANCE (San Diego Student Racing Competition). Their task is to design a driveshaft for a racing car using the Engineering Design Process, with a MATLAB/Octave program that calculates the recommended shaft diameter based on student-selected parameters.

## The 5 design parameters

The workshop guides students through 5 choices that feed into the MATLAB calculation:

### 1. Factor of Safety (Activity 5)

A ratio of a material's limit to its current loading. Higher values mean safer but potentially over-engineered designs.

| Factor of Safety | Meaning |
|-----------------|---------|
| 1 | Material limit equals current loading (risky) |
| 2-3 | Typical for many engineering applications |
| 6 | Golden Gate Bridge's factor of safety |
| Higher values | Safer but heavier/more expensive |

**Expected student choice:** A number greater than 1. The workshop provides real-world examples (bridges, engines, aircraft) for context.

### 2. Material selection (Activity 6)

Students choose from 5 materials, each with different mechanical properties:

| Material | Key characteristic |
|----------|-------------------|
| Steel | Strong, heavy, hard to break |
| Wood | Light, easy to work with, less durable |
| Glass | Brittle, breaks easily under force |
| Aluminum | Lighter than steel, moderate strength |
| Plastic | Flexible, lightweight, weakest option |

**Expected student choice:** Steel or aluminum are the most practical for a driveshaft. The program uses each material's mechanical properties (yield strength, endurance limit) in the diameter calculation.

### 3. Shaft conditions (Activity 7)

Three environmental conditions that affect shaft performance:

| Condition | Options | Impact |
|-----------|---------|--------|
| Surface polish | Polished vs. unpolished | Cracks/deformities increase failure risk |
| Engine temperature | Excellent to overheating risk | Overheating can melt or damage parts |
| Weather (rain) | Optimistic vs. realistic | Water causes corrosion and material rot |

**Expected student choices:** These are judgment calls. Optimistic choices produce smaller diameters; realistic choices produce larger (safer) diameters.

### 4. Loading parameters (Activity 8)

Two types of force on the driveshaft:

| Loading type | Description | Range |
|-------------|-------------|-------|
| Torque | Rotational force from engine to wheels | 0-10,000 (based on real car torque values) |
| Moment (bending) | Forces causing the shaft to bend | 0-10,000 |

**Expected student input:** Students select minimum and maximum values for both torque and moment. Higher values require a larger shaft diameter.

### 5. Geometry (Activity 9)

Students choose between two corner types for the shaft cross-section:

| Geometry | Description | Effect |
|----------|-------------|--------|
| Square corners | Sharp edges | Higher stress concentrations (more dangerous) |
| Filleted corners | Rounded edges | Lower stress concentrations (safer) |

**Expected student choice:** Filleted corners are the safer engineering choice. The workshop explains stress concentrations using the airplane window example (rounded windows vs. rectangular windows).

## Expected output

The MATLAB/Octave program calculates a minimum shaft diameter based on all 5 parameters. Students then check their diameter against a grading criteria table (Activity 11, not provided in the workshop) to determine their car's "placement" in the competition.

**General principles** (based on standard engineering principles; the actual code is not available to verify):
- Larger factor of safety produces a larger diameter
- Stronger materials (steel) allow smaller diameters
- Worse conditions (overheating, rain, unpolished) increase diameter
- Higher loading (torque, moment) increases diameter
- Square corners require larger diameters than filleted corners

## Workshop completion status

| Activity | Title | Status |
|----------|-------|--------|
| 1 | Driveshaft background | Draft, incomplete text |
| 2 | Design your driveshaft | Draft, missing image |
| 3 | Code (MATLAB/Octave) | Draft, code file not provided, Octave install file missing |
| 4 | Structure of the code | Draft, missing image |
| 5 | Factor of safety | Draft, missing image, has external links |
| 6 | Select material | Draft, missing image |
| 7 | Select conditions | Draft, missing images |
| 8 | Loading parameters | Draft, missing images |
| 9 | Select geometry | Draft, missing images |
| 10 | Check your diameter | Draft, missing image |
| 11 | Grading criteria | Draft, grading table not provided |

**To make this workshop deliverable:** The MATLAB/Octave code must be created or sourced, images must be added for all activities, and the grading criteria table must be defined. Multiple files throughout the workshop contain `**(TO FIX)**` markers next to mentions of MATLAB (including _index.md, Activities 1, 2, and 3), suggesting the technology choice may need revisiting.

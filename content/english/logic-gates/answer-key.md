---
title: "Logic gates workshop: Answer key"
date: 2025-12-04T10:00:00-06:00
draft: false
hidden: true
weight: 300
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

{{% notice tip %}}
Note: For this workshop, make sure to use a compatible browser and have JavaScript enabled for the interactive simulator.

The activities may include selecting options or components in the simulator.
{{% /notice %}}

### Activity 1: AND gate
Expected answer: The output is activated (1) only if both inputs are active (1).

Tip: Try all possible combinations of the two inputs. Only when both are 1 will the output be 1.

<img src="../media/answer_1.png" alt="Visual solution for the AND circuit with two inputs and one output" width="40%" class="lg-img"/>

---

### Activity 2: OR gate
Expected answer: The output is activated (1) if at least one of the inputs is active (1).

Tip: If one or both inputs are 1, the output will be 1. It will only be 0 if both inputs are 0.

<img src="../media/answer_2.png" alt="Visual solution for the OR circuit with two inputs and one output" width="40%" class="lg-img"/>

---

### Activity 3: NOT gate
Expected answer: The output is always the opposite of the input.

Tip: If the input is 0, the output will be 1. If the input is 1, the output will be 0.

<img src="../media/answer_3.png" alt="Visual solution for the NOT circuit with one input and one output" width="40%" class="lg-img"/>

**Double NOT challenge:**
If you place two NOT gates in series, the signal is inverted twice. That is:
- If the input is 0: the first NOT converts it to 1, the second converts it back to 0.
- If the input is 1: the first NOT converts it to 0, the second converts it back to 1.

**Conclusion:** Two NOT gates in a row cancel the inversion effect and the output will be equal to the original input.

---

### Activity 4: Combining gates (AND, OR, NOT)
Expected answer: The output is activated if B is 1, or if A is 1 and C is 0 (use NOT to invert C).

Tip: Build the circuit by combining the gates according to the given logical condition. Test the cases suggested in the activity.

1. **Identify the inputs and outputs:**
- Inputs: A, B, C
- Output: Output

2. **Invert input C using NOT:**
- Connect C to the NOT gate to get `NOT C`.

3. **Combine A and NOT C with AND:**
- Connect A and `NOT C` to the AND gate to get `A AND NOT C`.

4. **Combine the previous result with B using OR:**
- Connect `A AND NOT C` and B to the OR gate to get the final output: `(A AND NOT C) OR B`.

5. **Connect the OR output to the Output.**

**Example of connections:**

<img src="../media/answer_4.png" alt="Visual solution for the combined AND, OR, NOT circuit with three inputs and one output" width="40%" class="lg-img"/>

**Guided tests:**

- A = 1, B = 0, C = 0 → Output = 1
- A = 1, B = 0, C = 1 → Output = 0
- A = 0, B = 1, C = 1 → Output = 1
- A = 0, B = 0, C = 0 → Output = 0

---

### Activity 5: AND + NOT (Inverted gate)
Expected answer: The output is 1 except when both inputs are 1 (use AND and then NOT).

Tip: The NOT gate inverts the AND result. Only if both inputs are 1 will the output be 0.

<img src="../media/answer_5.png" alt="Visual solution for the AND followed by NOT circuit with two inputs and one output" width="40%" class="lg-img"/>

---

### Activity 6: OR + NOT (Silent output)
Expected answer: The output is 1 only if both inputs are 0 (use OR and then NOT).

Tip: The NOT gate inverts the OR result. If any input is 1, the output will be 0.

<img src="../media/answer_6.png" alt="Visual solution for the OR followed by NOT circuit with two inputs and one output" width="40%" class="lg-img"/>

---

### Activity 7: Exclusive difference (XOR with AND/OR/NOT)
Expected answer: The output is 1 only if the inputs are different (use a combination of AND, OR, and NOT).

Tip: Try all combinations. The output will be 1 only if one input is 1 and the other is 0.

1. **Identify the inputs and the output:**
- Inputs: A, B
- Output: Output

2. **Create the OR combination:**
- Connect A and B to the OR gate to get `OR_AB`.

3. **Create the AND combination:**
- Connect A and B to the AND gate to get `AND_AB`.

4. **Invert the AND result:**
- Connect the output of `AND_AB` to the NOT gate to get `NOT_AND_AB`.

5. **Combine both with another AND:**
- Connect `OR_AB` and `NOT_AND_AB` to a second AND gate to get the final output: `XOR = (A OR B) AND NOT(A AND B)`.

6. **Connect the output of the second AND to the Output.**

**Example of connections:**

<img src="../media/answer_7.png" alt="Visual solution for the XOR circuit using AND, OR, and NOT with two inputs and one output" width="40%" class="lg-img"/>

**Guided tests:**

- A = 0, B = 0 → Output = 0
- A = 0, B = 1 → Output = 1
- A = 1, B = 0 → Output = 1
- A = 1, B = 1 → Output = 0

**Explanation of intermediate steps:**
- **A OR B**: Is 1 if at least one input is 1.
- **A AND B**: Is 1 only if both inputs are 1.
- **NOT(A AND B)**: Inverts the AND result; is 1 except when both are 1.
- **(A OR B) AND NOT(A AND B)**: Is only 1 if one input is 1 and the other is 0 (different).



---

### Activity 8: Equality (XNOR with AND/OR/NOT)
Expected answer: The output is 1 only if both inputs are equal (use a combination of AND, OR, and NOT).

Tip: The output will be 1 if both inputs are 0 or both are 1.

1. **Identify the inputs and the output:**
- Inputs: A, B
- Output: Output

2. **Invert both inputs:**
- Connect A to a NOT gate to get `NOT_A`.
- Connect B to another NOT gate to get `NOT_B`.

3. **Create the "A AND B" combination:**
- Connect A and B to an AND gate to get `AND1 = A AND B`.

4. **Create the "NOT_A AND NOT_B" combination:**
- Connect `NOT_A` and `NOT_B` to another AND gate to get `AND2 = NOT_A AND NOT_B`.

5. **Combine both with an OR:**
- Connect `AND1` and `AND2` to an OR gate to get the final output: `XNOR = (A AND B) OR (NOT_A AND NOT_B)`.

6. **Connect the OR output to the Output.**

**Example of connections:**

<img src="../media/answer_8.png" alt="Visual solution for the XNOR circuit using AND, OR, and NOT with two inputs and one output" width="40%" class="lg-img"/>

**Guided tests:**
- A = 0, B = 0 → Output = 1
- A = 0, B = 1 → Output = 0
- A = 1, B = 0 → Output = 0
- A = 1, B = 1 → Output = 1

{{% notice tip %}}
**How XOR works:** 
An XOR (exclusive OR) gate is a digital logic gate that produces a high-level output (1) if and only if its inputs are different from each other.
{{% /notice %}}

---

### Bonus activity: Using the simulator
Tip: Explore the simulator to create your own circuits and test different combinations of logic gates. Observe how the outputs change based on the inputs.

<img src="../media/answer_us.png" alt="Visual example of a custom circuit created in the simulator" width="40%" class="lg-img"/>

---

If you have questions, review the truth table for each gate and experiment in the simulator. Digital logic is best learned by trying!
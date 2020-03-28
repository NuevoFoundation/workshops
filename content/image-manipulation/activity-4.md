---
title: "Activity 4"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 11
--- 

Try printing out the answers to the following expressions using <font color="blue">print</font>. If the results for any of these statements don't make sense, please ask for help! 

- 54 < (10 + 32)
- (37 / 5) != 7
- "Hello" + "World" == "Hello World"
- <font color="blue">False</font> == <font color="blue">False</font>


{{% alert theme="danger" %}}
Challenge: Try making your own expressions! 
{{% /alert %}}

### Fun Fact: Connecting Booleans with AND and OR operators

You can also connect boolean expressions together using the AND and the OR operator. Here's a chart that describes what happens when we connect booleans together:

Expression  | Result 
------------|----------
<font color="blue">True</font> and <font color="blue">True</font>  | <font color="blue">True</font> 
<font color="blue">True</font>  and <font color="blue">False</font> | <font color="blue">False</font>
<font color="blue">False</font> and <font color="blue">True</font> | <font color="blue">False</font>
<font color="blue">False</font> and <font color="blue">False</font> | <font color="blue">False</font>
<font color="blue">True</font>  or <font color="blue">True</font>  | <font color="blue">True</font> 
<font color="blue">True</font>  or <font color="blue">False</font> | <font color="blue">True</font> 
<font color="blue">False</font> or <font color="blue">True</font>  | <font color="blue">True</font> 
<font color="blue">False</font>  and <font color="blue">False</font> | <font color="blue">False</font>

To summarize, AND requires both boolean expressions to be true, while OR only requires one of the two Boolean expressions to be true. Here are some more examples:

- (5 < 8) and (9 != 10) produces <font color="blue">True</font> since both 5 is less than 8 and 9 is not equal to 10.
- (8 <= 2) or ("h" + "e" == "he") produces <font color="blue">True</font> since "h" + "e" results in "he", even though 8 is not less than or equal to 2.
- (6 != 2 * 3) or (8 < 2 * 4) produces <font color="blue">False</font> since both 6 not equal to 2 * 3, and 8 being less than 2 * 4, produce <font color="blue">False</font>.

{{% alert theme="danger" %}}
What do you think the following expressions produce?
{{% /alert %}}

- (11-2 < 10) and (7+3 > 10)
- (<font color="blue">True</font> or 3 < 1) and (<font color="blue">False</font> or 3>1)


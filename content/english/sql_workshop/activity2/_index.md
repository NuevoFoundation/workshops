---
title: "Activity 2: Learn the WHERE Command"
description: "Learn the WHERE command"
date: 2020-07-16
prereq: "SELECT command"
difficulty: "Beginner"
draft: false
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<link rel="stylesheet" href="_activity2.css" type="text/css"></link>

<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="_activity2.js"></script>

{{< youtube FZnnkNVn0Ok >}}

## Task 2: Travel to the Planet of Fun!

You need to program your rocket ship GPS to go to the Planet of Fun by rearranging the code blocks. To find the coordinates,
the Galactic Federation has given you the next SQL command: `WHERE`!

{{%notice info%}}
### What the command does:
The `WHERE` command allows you to only show data that you want.
{{%/notice%}}

![Explain](assets/Where_Explain.png)

### Example:

![Ex](assets/Where_Ex.png)

{{%notice info%}}
1. The `SELECT * FROM` database block that we learned from the previous activity allows us to choose a database to look through.

2. The `WHERE` command allows us to narrow down what data is displayed depending on the condition (the green blocks in the image below).

**A condition is a requirement you are looking for. Conditions do not have to follow the example above, but the most common use of conditions are looking for rows that contain specific information.**

3. The name of the column we wish to look for information in.
 
4. The equal sign means that we want to find information that matches what we have on the right-hand side of the equal sign. 

5. When we are looking for specific words or text, we must surround the text with single quote marks. SQL uses single quote marks to indicate that we are looking for a word in the database.

6. You can replace 'text' with any word you are looking for in the database.

7. Semicolons act as the end of a SQL command, like a period at the end of a sentence.
{{%/notice%}}

#### Using the database called 'galaxy' that has a column labeled 'planet', find the coordinates for the Planet of Fun!

<!-- rearrange code blocks on terminal to get coordinate block -->

{{< rawhtml >}}

<div class="terminal_div" id="terminal_div">

<!-- Rectangles to Receive blocks -->
<div id="div7" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div8" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div9" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div10" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div11" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div12" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>

<div style="clear: both;"></div>

<br><br>

<div id="div1" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" id="answer5" src="assets/Equal.PNG" draggable="true" ondragstart="drag(event)" id="drag1">
</div>

<div id="div2" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer2" src="assets/galaxy_block.png" draggable="true" ondragstart="drag(event)" id="drag2">
</div>

<div id="div3" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer4" src="assets/Planet_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag3">
</div>

<div id="div4" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer6" src="assets/Planet_Fun_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag4">
</div>

<div style="clear: both;"></div>

<div id="buffer" class="codeBlocks" style="border: none;"></div>

<div id="div5" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer1" src="assets/Select_From_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag5">
</div>

<div id="div6" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer3" src="assets/Where_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag5">
</div>

<div style="clear: both;"></div>
<br><br>

<!-- Press Enter and if correct, unhide coordinate block -->
<button class="button button1" onclick="check()"> Enter </button>
</div>

<table id="planet" style="visibility:hidden">
  <tr>
  </tr>
  <script>displaytable("galaxy where planet_name = 'Planet of Fun'", "planet");</script>
</table>

<div id="text" style="visibility:hidden">
<h3> Now that you know where the Planet of Fun is, we can find more information about it and ignore the other planets. Let's go to the Planet of Fun! </h3>
</div>

<img src="" id="gps">

<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    You've completed the task! Continue to the next mission!
  </div>
</div>
{{< /rawhtml >}}

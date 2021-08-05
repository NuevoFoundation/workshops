---
title: "Activity 1: Learn the SELECT Command"
description: "Learn the SELECT command"
date: 2020-07-17
prereq: "none"
difficulty: "Beginner"
draft: false
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<link rel="stylesheet" href="_activity1.css" type="text/css"></link>

<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="_activity1.js"></script>
{{< youtube hUTKI3AHJ1s >}}

# Mission 1: Save the Planet of Fun from Boredom!
Your first mission is to go to the Planet of Fun and save them from boredom! 
You are sent a database about the planet and you need to learn how to use SQL 
commands to help save the Planet of Fun!

## Task 1: Take a peek at the information on the Planet of Fun
You are given information about the Galaxy and want to look for the Planet of Fun. To do this,
 the Galactic Federation has given you your first SQL command: `SELECT`. 

{{%notice info%}}
### What the command does: 
The `SELECT` command allows you to choose what data to show from a database.
{{%/notice%}}

### Example:

![Select](assets/Select.PNG)

### Now use what you learned! 
{{%notice tip%}}
**Drag the blocks into the terminal and rearrange them to answer the question below!**
{{%/notice%}}

#### Question: What command will display all the columns in the database called "galaxy"?

{{< rawhtml >}}
<div class="terminal_div" id="terminal_div">

<!-- Rectangles to Receive blocks -->
<div id="div6" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div7" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div8" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div9" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div10" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>

<div style="clear: both;"></div> 

<br>

<div id="div1" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
 <img class="img" id="answer1" src="assets/Select_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag1" align: top left> <!-- style="border: 1px solid green;"> -->
</div>

<div id="div2" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer2" src="assets/Asterix_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag2">
</div>

<div id="div3" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer4" src="assets/galaxy_block.png" draggable="true" ondragstart="drag(event)" id="drag3">
</div>

<div id="div4" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer3" src="assets/From_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag4">
</div>

<div id="div5" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer5" src="assets/Semicolon_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag5">
</div>

<div style="clear: both;"></div> 

<!-- Enter button -->
<button class="button button1" onclick="check()">Enter</button>
</div>

<!-- Hidden SQL database will appear once correct sequence is placed -->
<div style="clear: both;"></div> 
<h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT</strong></h1>
<table id="table">
  <tr></tr>
</table>

<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <p>You found the correct command to display the entire database! This is handy when you want to see all the information at the tip of your fingers!</p>
  <div class="alert">
    <span id="check">&#10003;</span>
    You've completed the task! Continue to the next mission!
  </div>
</div>
{{< /rawhtml >}}

---
title: "Use MIN Command"
description: "Use MIN Command"
date: 2020-07-10
prereq: "SELECT Command, WHERE Command, MAX/MIN Command"
difficulty: "Beginner"
draft: false
translationKey: "sql_activity_7"
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<link rel="stylesheet" href="_activity7.css" type="text/css"></link>

<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<script type="text/javascript" src="_activity7.js"></script>

<!-- Embed YouTube Video Link here when ready -->


## Task 7: Find the Key to Get to the Confetti Cannon!

You found the location of the Legendary Confetti Cannon but it is locked away behind a door made of titanium 
and can only be unlocked with the smallest key on the planet! 

**To help you out, the Galactic Federation has sent you a reminder on how to use 'MIN()' from a previous activity.**

![Explain](../activity5/assets/max_min.png)

#### Using the database called 'items' with a column labeled 'object', find the 'key' with the smallest height.
{{%notice tip%}}
* Hint 1: Remember the advice from the Galactic Federation: SELECT [column/column property] FROM [database] [optional condition];

* Hint 2: Condition: WHERE [column_name] ['IN()'/'NOT IN()']; 

* Hint 3: Do you need to use 'IN()' or 'NOT IN()' to show the 'key'?
{{%/notice%}}
<!-- SQL Type In Activity -->

{{< rawhtml >}}

<div class="terminal_div" id="terminal_div">

  <div class="text-area">
    <textarea id="commands" placeholder="Enter command here!" style="resize: none"></textarea>
  </div>
  
    <div style="clear: both;"></div> 
    <button class="button button1" onclick="sql()">	Enter </button>
    
    <div style="clear: both;"></div> 
    <button class = "button reset" onclick="document.getElementById('commands').value = ''">Reset</button>  
</div>

<div style="clear: both;"></div>
<h1 class="error" id="sqlcommand" <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT></strong></h1>

<table id="table">
	 <tr>
	 </tr>
</table>

<h4 id="story"></h4>

<br>
{{< /rawhtml >}}


### Choose and drag the correct key onto the lock to continue your adventure!
{{%notice note%}}
The correct key will highlight green
{{%/notice%}}

{{< rawhtml >}}

<!-- Player drags key block to drop block to finish mission -->
<div class="door_div" id="door_div">

<div id="buffer" class = "codeBlocks"></div>
<div style="clear: both;"></div> 


<!-- Position of first key -->
<div id="div1" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" src="assets/Key1.png" draggable="true" ondragstart="drag(event)" id="drag1">
</div> 

<!-- Drag Block -->
<div id="div2" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" src="assets/Key2.png" draggable="true" ondragstart="drag(event)" id="drag2">
</div> 

<div id="div3" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" src="assets/Key3.png" draggable="true" ondragstart="drag(event)" id="drag3">
</div> 

<!-- Drop Location -->
<div id="div4" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>

</div>

<!-- Next mission text displays -->
<div id="text1" style="visibility:hidden">
  <p> You found the Legendary Totem of Fun: Confetti Cannon! </p>
</div>

<!-- Unhide the Confetti Cannon -->
<img id="cannon" alt="cannon" style="visibility:hidden"/>
{{< /rawhtml >}}

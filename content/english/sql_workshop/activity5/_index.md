---
title: "Learn MAX/MIN Command"
description: "Learn MAX/MIN Command"
date: 2020-07-12
prereq: "SELECT Command, WHERE Command"
difficulty: "Beginner"
draft: false
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<link rel="stylesheet" href="_activity5.css" type="text/css"></link>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="_activity5.js"></script>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>

<!-- Embed YouTube Video Link here when ready -->

## Task 5: Find the Tallest Ladder To Get To Their Dear Leader

You have discovered that the planet's leader
is in a hut on the tallest hill but to get to it, you need to find the largest ladder in the Capital of Fun!

The Galactic Federation has sent you four new SQL commands to play around with! Lets take a look at them!


### What the commands do:

![Explain](assets/max_min.png)

<br/>

{{%notice info%}}
Column Property:
'MAX()' is used to look for the largest value in a column. 'MIN()' is the opposite of max and will look for the smallest value in a column.
You can replace any word inside the parenthesis with another column name to get the largest or smallest value of that column.
{{%/notice%}}

![IN](assets/In.png)
![NOT](assets/not.png)

{{%notice info%}}
Condition:
* 'IN()' and 'NOT IN()' are used hand in hand with the WHERE command we learned in activity 2. IN() is part of the condition of a SQL command and is helpful when you want to show some columns but not all of them.

* 'NOT IN()' is the opposite of 'IN()'. Instead of choosing what to show like 'IN()', 'NOT IN()' will show all the columns you did not choose inside the parenthesis.

* You can use commas inside the parenthesis to choose more than one column to show or not show.
{{%/notice%}}
<br/>

### Now use what you learned! Using the database called 'items' with a column labeled 'object', find the tallest 'ladder'.
{{%notice tip%}}
* Hint 1: Remember the advice from the Galactic Federation: `SELECT [column/column property] FROM [database] [optional condition];`

* Hint 2: Column property: Do you need to use 'MAX()' or 'MIN()' to find the tallest ladder?

* Hint 3: Condition: `WHERE [column_name] [IN/NOT IN];`

* Hint 4: Do you need to use 'IN()' or 'NOT IN()' to show the 'ladder'?
{{%/notice%}}
<!-- SQL Type In Activity -->

{{< rawhtml >}}

  <div class="terminal_div" id="terminal_div">
    <div class = "outer">
      <h3 id = "commands" contenteditable="true" onclick="document.getElementById('commands').innerHTML = ''"> Type command here!<h3>
    </div>
    <div style="clear: both;"></div> 
    </br></br></br></br></br></br>
    <button class="button button1" onclick="sql()"> Enter </button>
    <div style="clear: both;"></div> 
    <button class = "button reset" onclick="document.getElementById('commands').innerHTML = ''">Reset</button>
  </div>
  <div style="clear: both;"></div> 
  <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT></strong></h1>
  <table id="table">
    <tr></tr>
  </table>
  <h4 id="story"></h4>

  <div id="legend" style="visibility:hidden">
    <br/>
    <p style="color:red;"> RED Ladder = 100 </p>
    <p style="color:blue;"> BLUE Ladder = 60 </p>
    <p style="color:brown;"> BROWN Ladder = 20 </p>
    </br>
  </div>

{{< /rawhtml >}}


### Choose and drag the correct ladder onto the hill to continue your adventure!

{{%notice note%}}
The correct ladder will highlight green
{{%/notice%}}

{{< rawhtml >}}


<!-- Player drags ladder block to drop block to finish mission -->
<div class="hill_div" id="hill_div">

<!-- Drop Location -->
<div id="div4" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>

<!-- Drag Block -->
<div id="div1" class ="codeBlocks" style="clear: left;" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" src="assets/ladder.png" draggable="true" ondragstart="drag(event)" id="drag1">
</div>

<div id="div2" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" src="assets/ladder_blue.png" draggable="true" ondragstart="drag(event)" id="drag2">
</div>

<div id="div3" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" src="assets/ladder_brown.png" draggable="true" ondragstart="drag(event)" id="drag3">
</div>

</div>

<div style="clear: both;"></div> 

<!-- Next mission text displays -->
<div id="text1" style="visibility:hidden">
  <p> You made it! The Dear Leader tells you that the Planet of Fun is in danger of being invaded by the aliens from the Planet of Boredom!
  You must find the Totems of Fun in order to save the planet! </p>
</div>


{{< /rawhtml >}}

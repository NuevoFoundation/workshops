---
title: "Activity 11: Learn the GROUP BY command"
description: "Learn GROUP BY command"
date: 2020-07-06
prereq: "SELECT Command, WHERE Command"
difficulty: "Beginner"
draft: false
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<link rel="stylesheet" href="_activity11.css" type="text/css"></link>
<script type="text/javascript" src="_activity11.js"></script>

{{< youtube WXoQP79SPsg >}}

## Party with the Inhabitants! 

You are tasked to choose which food to serve at the party! Each city has their own favorite food and you need to decide which ones to have at the party! Let's use the `GROUP BY` command to figure out what to bring.

### What the `GROUP BY` command does:

![Explain](assets/group.png)

### Task 11: Using the database called 'planet' with the column 'favorite_food', find out what to bring to the party!
{{%notice tip%}}
Hint: The command follows closely to the example above.

BONUS: Combine the `COUNT()` and `GROUP BY` commands to show the number of cities that like each food.
(Review activity 3 and activity 4 for help)

{{%/notice%}}

{{< rawhtml >}}
<div class="terminal_div" id="terminal_div">
    <div class = "outer">
      <h3 id = "commands" contenteditable="true" onclick="placeholder()">Type command here!</h3>
    </div>
    <div class = "prev">
      <h3 id = "prev"></h3>
    </div>
    <div style="clear: both;"></div> 
    <button class="button button1" onclick="sql()"> Enter </button>
    <div style="clear: both;"></div> 
    <button class = "button reset" onclick="reset()">Reset</button>
  </div>
  <div style="clear: both;"></div> 
  <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT></strong></h1>
  <table id="table">
    <tr></tr>
  </table>
  <h4 id="story"></h4>

<div class="vendor_div" id="vendor_div">
  <button class="button cake" id = "cake_button" onclick="highlight('cake_button')"></button>
  <button class="button ice_cream" id = "ic_button" onclick="highlight('ic_button')"></button> 
  <button class="button hot_dog" id = "hd_button" onclick="highlight('hd_button')"></button> 
  <button class="button vendor_reset" id = "vendor_reset" onclick="oven_reset()"> Clear </button> 
  <div style="clear: both;"></div>  
  <button class="button burger" id = "burger_button" onclick="highlight('burger_button')"></button>
  <button class="button pizza" id = "pizza_button" onclick="highlight('pizza_button')"></button>
  <button class="button taco" id = "taco_button" onclick="highlight('taco_button')"></button>
  <button class="button vendor_button" id = "vendor_button" onclick="confirm()"> Cook! </button>  
  <div style="clear: both;"></div> 
</div>

<br>

<h4 id="plot" style="visibility:hidden"> You did it Space Cadet! Now the inhabitants can finally begin the party! </h4> 

<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    You've completed the task! Continue to the next mission!
  </div>
</div>
{{< /rawhtml >}}

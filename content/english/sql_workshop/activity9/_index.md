---
title: "Activity 9: Learn the AVG Command"
description: "Learn AVG Command"
date: 2020-07-08
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

<script type="text/javascript" src="_activity9.js"></script>
<link rel="stylesheet" href="_activity9.css" type="text/css"></link>

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/XLm2T6XBltg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>


## Task 9: Unlock the Infinite Buffet Table:

You discovered the location of the Legendary Infinite Buffet Table! However, it is locked behind a door that 
will only unlock if you find the secret number. 

{{% notice info %}}
Your only clue is that the combination is the first two digits of the average city population.
{{% /notice%}}

**Let's look at the `AVG()` command!**

![Explain](assets/AVG.png)

#### Using the database 'planet' and the `AVG()` command, find the first two digits of the average city 'population'!
{{% notice tip %}}
Use the command from activity 1 to view the entire database.

* Hint 1: The command follows very closely to the example.

* Hint 2: How do you use 'population' with the `AVG()` command?
{{% /notice%}}
<!-- SQL Type In Activity -->

{{< rawhtml >}}
  <div class="content_scaler">
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
    </div> <!-- terminal_div -->
  </div> <!-- content_scaler -->
  <div style="clear: both;"></div> 
  <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT></strong></h1>
  <table id="table">
    <tr></tr>
  </table>
  <h4 id="story"></h4>

{{< /rawhtml >}}

### Figure out the combination to unlock the vault!
{{% notice info %}}
The clue to the combination is at the top of this page!
{{% /notice%}}

{{< rawhtml >}}

<div class="content_scaler">
  <div class="vault_div" id="vault_div">

    <div id="left_div">
    <button class="button first_up" id = "first_up" onclick="add(1)"> + </button>
    <button class="button sec_up" id = "sec_up" onclick="add(2)"> + </button> 
    
    <div style="clear: both;"></div> 
    
    <textarea class="lock" id="lock1" readonly>0</textarea>
    <textarea class="lock" id="lock2" readonly>0</textarea>
    
    <button class="button first_down" id = "first_down" onclick="subtract(-1)" style="clear:left;"> - </button>
    <button class="button sec_down" id = "sec_down" onclick="subtract(-2)"> - </button>
    </div>

    <div id="right_div">
    <button class="button vault_button" id = "vault_button" onclick="confirm()"> Check </button>
    </div>
    
    <div style="clear: both;"></div> 

  </div> <!-- vault_div -->
</div> <!-- content_scaler -->

<br>

<h5 id="plot" style="visibility:hidden"> You did it, Space Explorer! You found the Legendary Totem of Fun: Infinite Buffet Table! </h5> 

<!-- Unhide the Infinite Buffet Table -->
<img id="buffet" alt="buffet" style="visibility:hidden"/>

<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    You've completed the task! Continue to the next mission!
  </div>
</div>

{{< /rawhtml >}}

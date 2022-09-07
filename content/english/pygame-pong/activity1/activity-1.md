---
title: "Activity 1 - Define the width of the Pong screen"
date: 2019-07-29T13:24:17-07:00
weight: 3
draft: false
---

You can adjust the boundary of the Pong game by adjusting the height and width of the rectangle that represents the boundary.

Go to the <a href="https://replit.com/@nuevofoundation/PongLessonStudent?v=1" target="_blank">code</a> containing the Pong game. Press **run**. Notice that the game's boundary doesn't seem look right - see the image below. Let's fix that in this activity, so that the game boundary looks better.

![Pong game with incorrect boundary](../media/width-highlight.png)

Find `# TODO (ACTIVITY 1)` in the code. Follow the instructions there to modify the `WIDTH` attribute of the `Pong` class. If you did this correctly, the boundary problem will be fixed. Press **run** to observe the result.

{{% notice tip %}}

Try changing the values for height and width to see the effects of different values on the game's boundary.

{{% /notice %}}

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/PongLessonStudent?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Now use what you learned! 
{{%notice tip%}}
**Drag the blocks into the terminal and rearrange them to answer the question below!**
{{%/notice%}}

#### Question: What value did you change `WIDTH` to?

{{< rawhtml >}}
<div class="content_scaler">
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
</div> <!-- terminal_div -->
</div> <!-- content_scaler -->

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

## Takeaway

You have just modified one of the attributes in the `Pong` class to influence how the game will look on-screen.

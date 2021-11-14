function drop(ev) 
{
  ev.preventDefault();
  var data = ev.dataTransfer.getData("content");
  var div_num = ev.currentTarget.id;
  var current = document.getElementById(div_num);
  
  /* If drop div already has a block, don't replace image block */
  var inDivs = current.getElementsByTagName("img");
  if(inDivs.length == 0 && data == "drag1") 
  {
    ev.target.appendChild(document.getElementById(data));
  }
 

  if(div_num == "div4" && data == "drag1") 
  {
    alert("Congrats! You found the correct key!");
  
    //Display next mission prompt
    var display1 = document.getElementById("text1");
    display1.setAttribute("style","visibility:visible");
    
    //Display confetti cannon
    var display2 = document.getElementById("cannon");
    display2.src = "assets/confetti.png";
    display2.setAttribute("style","visibility:visible");
  
    //Turn box green
    var box = document.getElementById("div4");
    box.setAttribute("style","border:5px solid lime");
    
    //Disable dragging keys
    var img1 = document.getElementById('drag1');
    img1.setAttribute('draggable', false);
    var img2 = document.getElementById('drag2');
    img2.setAttribute('draggable', false);
    var img3 = document.getElementById('drag3');
    img3.setAttribute('draggable', false);
    
    //Display the checkmark
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
  }
  else if(div_num == "div4") 
  {
    alert("Try again Space Cadet!");
  }
}

function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"select min(height) from items where object in('key');", "select * from items where object in('key');");
  var array = alasql("MATRIX OF " + user);
  var ans = JSON.stringify(alasql(user));

  document.getElementById("sqlcommand").style.visibility = 'hidden';

  ans = ans.substring(ans.indexOf("{") + 1, ans.indexOf("}"));
  
  var ansArr = ans.split(',');
  var headArr = [];
  var i;
  for( i = 0; i < ansArr.length; i++)
  {
    headArr.push(ansArr[i].substring( ansArr[i].indexOf('"') + 1, ansArr[i].indexOf('":')));
  }

  sqlToTable(headArr, array, "table");
  
  /*change answer here */
  var ans1 = "select min(height) from items where object in('key');";
  var ans2 = "select * from items where object in('key');";
  var ans3 = "select min(height) from items where object = 'key';";
  var ans4 = "select * from items where object = 'key';";
  var ans5 = "select min(height) from items where object not in('totem', 'ladder');";
  var ans6 = "select min(height) from items where object not in('totem');";
  var ans7 = "select min(height) from items where object not in('ladder');";
  
  //Change string to lower case
  var input = user.toLowerCase();
  
  if(input == ans1 || input == ans2 || input == ans3 || input == ans4 || input == ans5 || input == ans6 || input == ans7)
  {
    green(input);
    document.getElementById("story").innerHTML = "Amazing work as always, Space Cadet! You found the key!";
    
    /* Changes terminal screen */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"
  }
}

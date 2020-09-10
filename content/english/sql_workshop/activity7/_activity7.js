function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("content");
  ev.target.appendChild(document.getElementById(data));
  var div_num = ev.currentTarget.id;
 

  if(div_num == "div4" && data == "drag1") {
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
  }
  else if(div_num == "div4") {
    alert("Try again Space Cadet!");
  }
  
}

function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"select min(height) from items where object in ('key');");
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

  sqlToTable(headArr, array);
  
  /*change answer here */
  var ans1 = "select min(height) from items where object in ('key');";
  var ans2 = "select min(height) from items where object in ('key')";
  var ans3 = "select * from items where object in ('key')";
  var ans4 = "select * from items where object in ('key');";
  
  //Change string to lower case
  var input = user.toLowerCase();
  
  if(input == ans1 || input == ans2 || input == ans3 || input == ans4)
  {
    document.getElementById("story").innerHTML = "Amazing work as always, space cadet! You found the key!";
  }
  else
  {
    document.getElementById("story").innerHTML = "Not quite the right command. Keep trying!";
  }
}

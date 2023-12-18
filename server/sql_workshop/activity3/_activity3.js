function sql() 
{ 
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
  document.getElementById("sqlcommand").style.visibility="visible";
  
  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"select count(*) from planet;", "select count(city_number) from planet;");
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

  var ans1 = "select count(*) from planet;";
  var ans2 = "select count(city_number) from planet;";
  user = user.toLowerCase();

  
  if(user == ans1 || user == ans2)
  {
    
    /* Changes terminal screen */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"
    
    //Display the checkmark
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
    
    document.getElementById("story").innerHTML = "Oh no! You discover that the inhabitants are being invaded by the aliens from the planet Boredom. Press next to continue.";
  }
  else
  {
    document.getElementById("story").innerHTML = "Not quite the right command. Keep trying!";
  }
}

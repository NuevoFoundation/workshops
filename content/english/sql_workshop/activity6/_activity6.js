function check(){

  //Display the confetti canon if correct command is used
  var display1 = document.getElementById("cannon");
  display1.src = "assets/confetti_canon.png";
  display1.setAttribute("style","visibility:visible");
  
  alert("Congrats Space Cadet! Continue your Adventure!");
}

function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"select * from items where date_created >= '1738-09-12';");
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
  var ans1 = "select * from items where date_created >= '1738-09-12';";
  var ans2 = "select * from items where date_created >= '1738-09-12'";
  var ans3 = "select * from items where date_created == '1738-09-12';";
  var ans4 = "select * from items where date_created == '1738-09-12'";
  
  //Change string to lower case
  var input = user.toLowerCase();

  if(input == ans1 || input == ans2 || input == ans3 || input == ans4)
  {
    document.getElementById("story").innerHTML = "Nice job!";
    check();
  }
  else
  {
    document.getElementById("story").innerHTML = "Not quite the right command. Keep trying!";
  }
}



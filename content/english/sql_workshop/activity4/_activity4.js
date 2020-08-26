function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"select planet, leader from galaxy;");
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

  var ans1 = "select planet, leader from galaxy";
  var ans2 = "select planet, leader from galaxy;";
  user = user.toLowerCase();
  
  if(user == ans1 || user == ans2)
  {
    document.getElementById("commands").innerHTML = "<span class='right'>" + user + " </span>";
    alert("You found the correct command!");
    document.getElementById("story").innerHTML = "Amazing work as always, space cadet! You discovered that the Planet of Fun's Dear Leader is Olivia Windsor! Now you need to figure out a way to get to them!";
  }
  else
  {
    document.getElementById("story").innerHTML = "Not quite the right command. Keep trying!";
  }
}

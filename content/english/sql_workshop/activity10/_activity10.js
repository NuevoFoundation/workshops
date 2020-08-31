function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"select sum(population) from planet;");
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
  var ans1 = "select sum(population) from planet;";
  var ans2 = "select sum(population) from planet";
  
  //Change string to lower case
  var input = user.toLowerCase();
  
  if(input == ans1 || input == ans2)
  {
    document.getElementById("story").innerHTML = "Now we know how many guests will be attending! What do we need to bring to the party?"; 
  }
  else
  {
    document.getElementById("story").innerHTML = "Not quite the right command. Keep trying!";
  }
}

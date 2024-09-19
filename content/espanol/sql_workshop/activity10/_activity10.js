function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR ENTRADA INVÁLIDA";
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

  sqlToTable(headArr, array, "table");
  
  /*change answer here */
  var ans1 = "select sum(population) from planet;";
  
  //Change string to lower case
  var input = user.toLowerCase();
  
  if(input == ans1)
  {
    green(input);
    document.getElementById("story").innerHTML = "Ahora que sabemos cuántos invitados van a asistir, hay que elegir qué comida llevar a la fiesta."; 
    
    /* Changes terminal screen */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"
    
    /* Display the checkmark */
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
  }
  else
  {
    document.getElementById("story").innerHTML = "El comando no es correcto. ¡Sigue intentando!";
  }
}

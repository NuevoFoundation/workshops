function sql()
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR ENTRADA INVÁLIDA";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"select planet, leader from galaxy;", "select leader, planet from galaxy;");
  var array = alasql("MATRIX OF " + user);
  var ans = JSON.stringify(alasql(user));

  document.getElementById("sqlcommand").style.visibility = 'hidden';

  ans = ans.substring(ans.indexOf("{") + 1, ans.indexOf("}"));
  
  var ansArr = ans.split(',');
  var headArr = [];
  var i;
  for(i = 0; i < ansArr.length; i++)
  {
    headArr.push(ansArr[i].substring( ansArr[i].indexOf('"') + 1, ansArr[i].indexOf('":')));
  }

  sqlToTable(headArr, array, "table");

  var ans1 = "select leader, planet from galaxy;";
  var ans2 = "select planet, leader from galaxy;";
  user = user.toLowerCase();
  
  if(user == ans1 || user == ans2)
  {
    green(user);
    
    /* Changes terminal screen */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"
    
    /* Display the checkmark */
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
    
    document.getElementById("story").innerHTML = "¡Increíble trabajo, como siempre, Cadete Espacial! Haz descubierto que la líder del Planeta de la Diversión es Olivia Windsor. Ahora tienes que averiguar cómo llegar a ella";
  }
  else
  {
    document.getElementById("story").innerHTML = "El comando no es correcto. ¡Sigue intentando!";
  }
}

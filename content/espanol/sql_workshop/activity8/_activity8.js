function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR ENTRADA INVÁLIDA";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"select * from items where date_created like '%-10-%';", "select * from items where date_created like '1738-10-%';");
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
  var ans1 = "select * from items where date_created like '%-10-%';";
  var ans2 = "select * from items where date_created like '1738-10-%';";
  
  //Change string to lower case
  var input = user.toLowerCase();
  
  if(input == ans1 || input == ans2)
  {
    document.getElementById("story").innerHTML = "Gran tabajo, como siempre, Cadete Espacial. El Tótem Legendario del Planeta de la Diversión: La Mesa de Buffet Infinito está en la Capital.";
    var display_legend = document.getElementById("legend");
    display_legend.setAttribute("style","visibility:visible");
    
    var display = document.getElementById("gps");
    display.src = "assets/GPSTerminal2.png";
    display.setAttribute("style","visibility:visible");
    
    /* Changes terminal screen */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"
    
    /*Display the checkmark */
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
    
  }
  else
  {
    document.getElementById("story").innerHTML = "El comando no es correcto. ¡Sigue intentando!";
  }
}

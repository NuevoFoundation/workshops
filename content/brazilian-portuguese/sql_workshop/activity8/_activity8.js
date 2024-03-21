function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"selecione * dos itens onde date_created como '%-10-%';", "selecione * dos itens onde date_created como '1738-10-%';");
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
  
  /*altere a resposta aqui */
  var ans1 = "select * de itens onde date_created como '%-10-%';";
  var ans2 = "select * de itens onde date_created como '1738-10-%';";
  
  //Altera a string para minúscula
  var input = user.toLowerCase();
  
  if(input == ans1 || input == ans2)
  {
    document.getElementById("story").innerHTML = "Trabalho incrível como sempre, cadete espacial! O Lendário Totem da Diversão: Mesa Buffet Infinita está na Fun Capital!";
    var display_legend = document.getElementById("legend");
    display_legend.setAttribute("style","visibility:visible");
    
    var display = document.getElementById("gps");
    display.src = "assets/GPSTerminal2.png";
    display.setAttribute("style","visibility:visible");
    
    /* Muda a tela do terminal */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"
    
    /*Exibir a marca de seleção */
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
    
  }
  else
  {
    document.getElementById("story").innerHTML = "Não é exatamente o comando certo. Continue tentando!";
  }
}

function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERRO ENTRADA INVÁLIDA";
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
  
  /*mude a resposta aqui */
  var ans1 = "select sum(population) from planet;";
  
  //Alterar string para minúscula
  var input = user.toLowerCase();
  
  if(input == ans1)
  {
    green(input);
    document.getElementById("story").innerHTML = "Agora sabemos quantos convidados estarão presentes! Vamos escolher que comida levar para a festa!"; 
    
    /* Altera a tela do terminal */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"
    
    /* Exibir a marca de seleção */
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
  }
  else
  {
    document.getElementById("story").innerHTML = "Não é exatamente o comando certo. Continue tentando!";
  }
}

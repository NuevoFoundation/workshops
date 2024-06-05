function drop(ev) 
{
  ev.preventDefault();
  var data = ev.dataTransfer.getData("content");
  var div_num = ev.currentTarget.id;
  var current = document.getElementById(div_num);
  
  /* Se drop div já tiver um bloco, não substitua o bloco de imagem */
  var inDivs = current.getElementsByTagName("img");
  if(inDivs.length == 0 && data == "drag1") 
  {
    ev.target.appendChild(document.getElementById(data));
  }
 

  if(div_num == "div4" && data == "drag1") 
  {
    alert("Parabéns! Você encontrou a chave correta!");
  
    //Exibir aviso da próxima missão
    var display1 = document.getElementById("text1");
    display1.setAttribute("style","visibility:visible");
    
    //Exibir canhão de confete
    var display2 = document.getElementById("cannon");
    display2.src = "assets/confetti.png";
    display2.setAttribute("style","visibility:visible");
  
    //Tornar a caixa verde
    var box = document.getElementById("div4");
    box.setAttribute("style","border:5px solid lime");
    
    //Desativar teclas de arrastar
    var img1 = document.getElementById('drag1');
    img1.setAttribute('draggable', false);
    var img2 = document.getElementById('drag2');
    img2.setAttribute('draggable', false);
    var img3 = document.getElementById('drag3');
    img3.setAttribute('draggable', false);
    
    //Exibir a marca de seleção
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
  }
  else if(div_num == "div4") 
  {
    alert("Tente novamente Cadete Espacial!");
  }
}

function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERRO ENTRADA INVÁLIDA";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"selecione min(altura) dos itens onde o objeto está('chave');", "selecione * dos itens onde o objeto está('chave'));");
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
  var ans1 = "selecione min(altura) dos itens onde o objeto está em('chave');";
  var ans2 = "selecione * dos itens onde o objeto está ('chave');";
  var ans3 = "selecione min(altura) dos itens onde object = 'chave';";
  var ans4 = "selecione * dos itens onde object = 'chave';";
  var ans5 = "selecione min(altura) dos itens onde o objeto não está em('totem', 'escada');";
  var ans6 = "selecione min(altura) dos itens onde o objeto não está em('totem');";
  var ans7 = "selecione min(altura) dos itens onde o objeto não está em('escada');";
  
  //Alterar string para minúscula
  var input = user.toLowerCase();
  
  if(input == ans1 || input == ans2 || input == ans3 || input == ans4 || input == ans5 || input == ans6 || input == ans7)
  {
    green(input);
    document.getElementById("story").innerHTML = "Trabalho incrível como sempre, Cadete Espacial! Você encontrou a chave!";
    
    /* Altera a tela do terminal */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"
  }
}

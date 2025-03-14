function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("content");
  var div_num = ev.currentTarget.id;
  var current = document.getElementById(div_num);
  
  /* Se drop div já tiver um bloco, não substitua o bloco de imagem */
  var inDivs = current.getElementsByTagName("img");
  if(inDivs.length == 0 && data == "drag1") {
    ev.target.appendChild(document.getElementById(data));
  }
  
  // Verifique se a escada correta foi escolhida
  if(div_num == "div4" && data == "drag1") {
    alert("Você encontrou a escada correta! Vá falar com o Líder!");
  
    //Exibir aviso da próxima missão
    var display1 = document.getElementById("text1");
    display1.setAttribute("style","visibility:visible");
  
    //Tornar a caixa verde
    var box = document.getElementById("div4");
    box.setAttribute("style","border:5px solid lime");
    
    //Desabilitar arrastar escadas
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
  else if(div_num == "div4") {
    alert("Tente novamente Cadete Espacial!");
  }
  
}

function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERRO ENTRADA INVÁLIDA";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"selecione max(height) dos itens onde o objeto está('ladder');");    
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

  // os espaços em branco foram removidos das respostas porque às vezes causam erros quando há vários espaços em branco
  var ans1 = "selecione max(height) dos itens onde o objeto está ('ladder');".replace(/\s+/g, '');
  var ans2 = "selecione * dos itens onde o objeto está ('ladder');".replace(/\s+/g, '');
  var ans3 = "selecione max(height) dos itens onde object = 'ladder';".replace(/\s+/g, '');
  var ans4 = "selecione * dos itens onde object = 'ladder';".replace(/\s+/g, '');
  var ans5 = "selecione max(height) dos itens onde o objeto não está em('totem', 'key');".replace(/\s+/g, '');
  var ans6 = "selecione max(height) dos itens onde o objeto não está em('totem');".replace(/\s+/g, '');
  var ans7 = "selecione max(height) dos itens onde o objeto não está em('key');".replace(/\s+/g, '');
  
  // Alterar string para minúscula
  var input = user.toLowerCase().replace(/\s+/g, '');

if(input == ans1 || input == ans2 || input == ans3 || input == ans4 || input == ans5 || input == ans6 || input == ans7)
  {
    green(user);
    document.getElementById("story").innerHTML = "Excelente trabalho Cadete Espacial! Agora você precisa descobrir uma maneira de chegar até o Líder!";
    
    // Altera a tela do terminal
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"

    // Exiba a legenda em todas as respostas bem-sucedidas, em vez de apenas ans1 e ans3.
    var display_legend = document.getElementById("legend");
    display_legend.setAttribute("style","visibility:visible");
  }
}

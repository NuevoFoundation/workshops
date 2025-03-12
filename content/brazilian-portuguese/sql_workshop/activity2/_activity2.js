//Variáveis ​​globais para acompanhar os locais de resposta
var p6 = null;
prev.push(p6);
bools.push(null);
div_array.push('div11');
div_array.push('div12');
ans_array.push('answer6');
place.push(p6);

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("content");
  var target = ev.currentTarget.id;
  var current = document.getElementById(target);
  
  /* Se algum retângulo estiver vermelho sem bloco, mude para branco */
  var q = 0;
  for(q; q < place.length; q++) {
    
    var temp_num = place[q];
    var temp_div = null;
    switch(q) {
      case 0:
        temp_div = document.getElementById("div7");
        break;
      case 1:
        temp_div = document.getElementById("div8");
        break;
      case 2:
        temp_div = document.getElementById("div9");
        break;
      case 3:
        temp_div = document.getElementById("div10");
        break;
      case 4:
        temp_div = document.getElementById("div11");
        break;
      case 5:
        temp_div = document.getElementById("div12");
        break;
      default:
        break;
    }
    if(temp_div.style.borderColor != "green") {
      temp_div.style.borderColor = "white";
    }
  }
  
  prev[0] = p1;
  prev[1] = p2;  
  prev[2] = p3;
  prev[3] = p4;
  prev[4] = p5;
  prev[5] = p6;

  /* Se drop div já tiver um bloco, não substitua o bloco de imagem */
  var inDivs = current.getElementsByTagName("img");
  if(inDivs.length == 0) {
    ev.target.appendChild(document.getElementById(data));
    
    //Acompanha os locais de resposta:
    //Ex - currentTarget.id = div6, dados = resposta1
    switch(ev.currentTarget.id) {
      case 'div7':
        bools[0] = data;
        break;
      case 'div8':
        bools[1] = data;
        break;
      case 'div9':
        bools[2] = data;
        break;
      case 'div10':
        bools[3] = data;
        break;
      case 'div11':
        bools[4] = data;
        break;
      case 'div12':
        bools[5] = data;
        break;
      default:
        break;
    }
  }

  /* Código fonte para duplicatas: 
  https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array/49215411
  */
  let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
  var dupli = [...new Set(findDuplicates(bools))];
  var duplicate;
  var dupli_flag = false;
  
  /* Verifique se há duplicatas */
  for(var j = 0; j < dupli.length; j++) {
    if(dupli[j] !== null) {
      duplicate = dupli[j];
      dupli_flag = true;
    }
  }
  
  if(dupli_flag) {
    
    var index = 0;
    //Livre-se da duplicata anterior
    for(var i = 0; i < prev.length; i++) {
      if(prev[i] == duplicate) {
        index = i;
      }
    }

    bools[index] = null;
  } 
  
  //Se o bloco for retornado ao banco de palavras, remova o espaço reservado de resposta do bloco suspenso
  if(target == "div1" || target == "div2" || target == "div3" || target == "div4" || target == "div5" || target == "div6") {
    var count = 0;
    for(count; count < bools.length; count++) {
      if(bools[count] == data) {
        bools[count] = null;
      }
    }
  }
  
    p1 = bools[0];
    p2 = bools[1];
    p3 = bools[2];
    p4 = bools[3];
    p5 = bools[4];
    p6 = bools[5];
}

function check(){

  //Destaque as respostas corretas em verde
  change_color('div7', p1, "answer1");
  change_color('div8', p2, "answer2");
  change_color('div9', p3, "answer3");
  change_color('div10', p4, "answer4");
  change_color('div11', p5, "answer5");
  change_color('div12', p6, "answer6");

  //Verifique se todas as respostas estão corretas
  if(p1 == "answer1" && p2 == "answer2" && p3 == "answer3" &&
     p4 == "answer4" && p5 == "answer5" && p6 == "answer6") {

    //Exibir o planeta das informações divertidas
    var display1 = document.getElementById("planet");
    display1.setAttribute("style","visibility:visible");
    
    var display2 = document.getElementById("gps");
    display2.setAttribute("style","visibility:visible");
  
    var display3 = document.getElementById("text");
    display3.setAttribute("style","visibility:visible");
    
    /* Altera a tela do terminal */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/Accept.png')"
    
    //Exibir a marca de seleção
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
    
    hide_boxes();

    document.getElementById("planet").src="assets/Show_Planet.png";
    document.getElementById("gps").src="assets/GPS.png";
  } else {
    alert("Try Again, Space Cadet!");
  }
}

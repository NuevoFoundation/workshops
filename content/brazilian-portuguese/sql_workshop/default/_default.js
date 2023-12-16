document.addEventListener("DOMContentLoaded", function() {
  setUpUiRescaling();
});

// Divs com classe "content_scaler" redimensionam uniformemente seu elemento filho usando transformações CSS.
function setUpUiRescaling() {
  const DEBOUNCE_TIME_IN_MS = 100;
  const contentScalerElements = document.getElementsByClassName("content_scaler");
  for (let scaler of contentScalerElements) {
    const onResize = (resizeObserverEntries) => {
      let computedParentStyle = getComputedStyle(scaler.parentElement);
      let parentWidth = scaler.parentElement.offsetWidth - parseFloat(computedParentStyle.paddingLeft) - parseFloat(computedParentStyle.paddingRight);
      let scaleFactor = parentWidth / elementToScale.offsetWidth;
      elementToScale.style.transform = `scale(${scaleFactor})`;
      elementToScale.style.transformOrigin = "top left";
      scaler.style.width = "100%";
      scaler.style.height = elementToScale.offsetHeight * scaleFactor + "px";
      scaler.style.overflow = "hidden";
    };
    const elementToScale = scaler.firstElementChild;
    const resizeObserver = new ResizeObserver(debounce(onResize, DEBOUNCE_TIME_IN_MS));
    onResize();
    resizeObserver.observe(scaler.parentElement);
  }
}

// pega uma função e retorna uma versão "debounced" (rejeitada) da função. É uma forma de limitar a taxa de chamadas subsequentes rápidas para a função.
function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  }
}

//Variáveis ​​globais para acompanhar os locais de resposta
var p1 = null;
var p2 = null;
var p3 = null;
var p4 = null;
var p5 = null;

//Usado para rastrear duplicatas e locais de resposta (drop boxes)
var place = [p1, p2, p3, p4, p5];
var prev = [null, null, null, null, null];
var bools = [null, null, null, null, null];

//Usado para ocultar caixas após o comando correto ser usado
var div_array = ['div1','div2','div3','div4','div5','div6','div7','div8','div9','div10'];
var ans_array = ['answer1', 'answer2','answer3','answer4','answer5'];

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("content", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("content"); //resposta2
  var target = ev.currentTarget.id; //Div#
  var current = document.getElementById(target);
  
  /* Se algum retângulo estiver vermelho sem bloco, mude para branco */
  var q = 0;
  for(q; q < place.length; q++) {
    
    var temp_num = place[q];
    var temp_div = null;
    switch(q) {
      case 0:
        temp_div = document.getElementById("div6");
        break;
      case 1:
        temp_div = document.getElementById("div7");
        break;
      case 2:
        temp_div = document.getElementById("div8");
        break;
      case 3:
        temp_div = document.getElementById("div9");
        break;
      case 4:
        temp_div = document.getElementById("div10");
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
  
  /* Se drop div já tiver um bloco, não substitua o bloco de imagem */
  var inDivs = current.getElementsByTagName("img");
  if(inDivs.length == 0) {
    ev.target.appendChild(document.getElementById(data));
    
    //Acompanha os locais de resposta:
    //Ex - currentTarget.id = div6, dados = resposta1
    switch(ev.currentTarget.id) {
      case 'div6':
        bools[0] = data;
        break;
      case 'div7':
        bools[1] = data;
        break;
      case 'div8':
        bools[2] = data;
        break;
      case 'div9':
        bools[3] = data;
        break;
      case 'div10':
        bools[4] = data;
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
    //Livrar-se da duplicata anterior
    for(var i = 0; i < prev.length; i++) {
      if(prev[i] == duplicate) {
        index = i;
      }
    }

    bools[index] = null;
  } 
  
  //Se o bloco for retornado ao banco de palavras, remova o espaço reservado de resposta do bloco suspenso
  if(target == "div1" || target == "div2" || target == "div3" || target == "div4" || target == "div5") {
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
}

/* Muda a cor do bloco ao clicar em Enter */
function change_color(div_num, block, answer) {
  
  var a1 = document.getElementById(div_num);
  if(block == answer) {
    a1.style.borderWidth = "thick";
    a1.style.borderColor = "green";
    a1.setAttribute('ondrop', false);
    var img1 = document.getElementById(answer);
    img1.setAttribute('draggable', false);
  } 
  //Se o bloco estiver no local incorreto, destaque em vermelho
  else if(block != null) {
    a1.style.borderColor = "red";
  } 
  //Se nenhum bloco for colocado (mas anteriormente era vermelho), volte para branco
  else {
    a1.style.borderColor = "white";
  }
}

function hide_boxes() {
  
  /*Ocultar caixas */
  for(var i = 0; i < div_array.length; i++) {
    var temp = div_array[i];
    document.getElementById(temp).style.border = "none";
  }
  for(var j = 0; j < ans_array.length; j++) {
    var temps = ans_array[j];
    document.getElementById(temps).style.visibility = "hidden";
  }
}
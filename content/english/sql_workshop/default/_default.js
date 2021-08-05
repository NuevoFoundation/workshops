//Global variables to keep track of answer places
var p1 = null;
var p2 = null;
var p3 = null;
var p4 = null;
var p5 = null;

//Used to keep track of duplicates and answer places (drop boxes)
var place = [p1, p2, p3, p4, p5];
var prev = [null, null, null, null, null];
var bools = [null, null, null, null, null];

//Used to hide boxes after correct command is used
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
  var data = ev.dataTransfer.getData("content"); //answer2
  var target = ev.currentTarget.id; //Div#
  var current = document.getElementById(target);
  
  /* If any rectangles are red without a block, change to white */
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
  
  /* If drop div already has a block, don't replace image block */
  var inDivs = current.getElementsByTagName("img");
  if(inDivs.length == 0) {
    ev.target.appendChild(document.getElementById(data));
    
    //Keeps track of the answer places:
    //Ex - currentTarget.id = div6, data = answer1
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

  /* Source code for duplicates: 
  https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array/49215411
  */
  let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
  var dupli = [...new Set(findDuplicates(bools))];
  var duplicate;
  var dupli_flag = false;
  
  /* Check for duplicates */
  for(var j = 0; j < dupli.length; j++) {
    if(dupli[j] !== null) {
      duplicate = dupli[j];
      dupli_flag = true;
    }
  }
  
  if(dupli_flag) {
    
    var index = 0;
    //Get rid of the previous duplicate
    for(var i = 0; i < prev.length; i++) {
      if(prev[i] == duplicate) {
        index = i;
      }
    }

    bools[index] = null;
  } 
  
  //If block is returned to word bank, remove answer placeholder from drop block
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

/* Changes block color on enter click */
function change_color(div_num, block, answer) {
  
  var a1 = document.getElementById(div_num);
  if(block == answer) {
    a1.style.borderWidth = "thick";
    a1.style.borderColor = "green";
    a1.setAttribute('ondrop', false);
    var img1 = document.getElementById(answer);
    img1.setAttribute('draggable', false);
  } 
  //If block is in incorrect spot, highlight in red
  else if(block != null) {
    a1.style.borderColor = "red";
  } 
  //If no block is placed (but was previously red), change back to white
  else {
    a1.style.borderColor = "white";
  }
}

function hide_boxes() {
  
  /* Hide boxes */
  for(var i = 0; i < div_array.length; i++) {
    var temp = div_array[i];
    document.getElementById(temp).style.border = "none";
  }
  for(var j = 0; j < ans_array.length; j++) {
    var temps = ans_array[j];
    document.getElementById(temps).style.visibility = "hidden";
  }
}
//Global variables to keep track of answer places
var p1 = null;
var p2 = null;
var p3 = null;
var p4 = null;
var p5 = null;

var prev = [null, null, null, null, null];
var bools = [null, null, null, null, null];
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
  var data = ev.dataTransfer.getData("content");
  var target = ev.currentTarget.id;
  var current = document.getElementById(target);
  
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
    p1 = bools[0];
    p2 = bools[1];
    p3 = bools[2];
    p4 = bools[3];
    p5 = bools[4];
}

function check(){

  //Highlight the correct answers in green and disable drag
  if(p1 == "answer1") {
    var a1 = document.getElementById('div6');
    a1.style.borderWidth = "thick";
    a1.style.borderColor = "green";
    a1.setAttribute('ondrop', false);
    var img1 = document.getElementById('answer1');
    img1.setAttribute('draggable', false);
  }
  if(p2 == "answer2") {
    var a2 = document.getElementById('div7');
    a2.style.borderWidth = "thick";
    a2.style.borderColor = "green";
    a2.setAttribute('ondrop', false);
    var img2 = document.getElementById('answer2');
    img2.setAttribute('draggable', false);
  }
  if(p3 == "answer3") {
    var a3 = document.getElementById('div8');
    a3.style.borderWidth = "thick";
    a3.style.borderColor = "green";
    a3.setAttribute('ondrop', false);
    var img3 = document.getElementById('answer3');
    img3.setAttribute('draggable', false);
  }
  if(p4 == "answer4") {
    var a4 = document.getElementById('div9');
    a4.style.borderWidth = "thick";
    a4.style.borderColor = "green";
    a4.setAttribute('ondrop', false);
    var img4 = document.getElementById('answer4');
    img4.setAttribute('draggable', false);
  }
  if(p5 == "answer5") {
    var a5 = document.getElementById('div10');
    a5.style.borderWidth = "thick";
    a5.style.borderColor = "green";
    a5.setAttribute('ondrop', false);
    var img5 = document.getElementById('answer5');
    img5.setAttribute('draggable', false);
  }

  //Check if all the answers are correct
  if(p1 == "answer1" && p2 == "answer2" && p3 == "answer3" &&
     p4 == "answer4" && p5 == "answer5") {

    //Display the database
    var display = document.getElementById("database");
    display.src = "assets/Database.png";
    display.setAttribute("style","visibility:visible");
    
    //Display the checkmark
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
    
    /* Changes terminal screen */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/Accept.png')"
    
    hide_boxes();
    
    document.getElementById("database").src="assets/Database.png";
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
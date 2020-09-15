//Global variables to keep track of answer places
var p6 = null;
prev.push(p6);
bools.push(null);
div_array.push('div11');
div_array.push('div12');
ans_array.push('answer6');

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
  prev[5] = p6;

  /* If drop div already has a block, don't replace image block */
  var inDivs = current.getElementsByTagName("img");
  if(inDivs.length == 0) {
    ev.target.appendChild(document.getElementById(data));
    
    //Keeps track of the answer places:
    //Ex - currentTarget.id = div6, data = answer1
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
    p6 = bools[5];
}

function check(){

  //Highlight the correct answers in green
  if(p1 == "answer1") {
    var a1 = document.getElementById('div7');
    a1.style.borderWidth = "thick";
    a1.style.borderColor = "green";
    a1.setAttribute('ondrop', false);
    var img1 = document.getElementById('answer1');
    img1.setAttribute('draggable', false);
  }
  if(p2 == "answer2") {
    var a2 = document.getElementById('div8');
    a2.style.borderWidth = "thick";
    a2.style.borderColor = "green";
    a2.setAttribute('ondrop', false);
    var img2 = document.getElementById('answer2');
    img2.setAttribute('draggable', false);
  }
  if(p3 == "answer3") {
    var a3 = document.getElementById('div9');
    a3.style.borderWidth = "thick";
    a3.style.borderColor = "green";
    a3.setAttribute('ondrop', false);
    var img3 = document.getElementById('answer3');
    img3.setAttribute('draggable', false);
  }
  if(p4 == "answer4") {
    var a4 = document.getElementById('div10');
    a4.style.borderWidth = "thick";
    a4.style.borderColor = "green";
    a4.setAttribute('ondrop', false);
    var img4 = document.getElementById('answer4');
    img4.setAttribute('draggable', false);
  }
  if(p5 == "answer5") {
    var a5 = document.getElementById('div11');
    a5.style.borderWidth = "thick";
    a5.style.borderColor = "green";
    a5.setAttribute('ondrop', false);
    var img5 = document.getElementById('answer5');
    img5.setAttribute('draggable', false);
  }
  if(p6 == "answer6") {
    var a6 = document.getElementById('div12');
    a6.style.borderWidth = "thick";
    a6.style.borderColor = "green";
    a6.setAttribute('ondrop', false);
    var img6 = document.getElementById('answer6');
    img6.setAttribute('draggable', false);
  }

  //Check if all the answers are correct
  if(p1 == "answer1" && p2 == "answer2" && p3 == "answer3" &&
     p4 == "answer4" && p5 == "answer5" && p6 == "answer6") {

    //Display the planet of fun info
    var display1 = document.getElementById("planet");
    display1.setAttribute("style","visibility:visible");
    
    var display2 = document.getElementById("gps");
    display2.setAttribute("style","visibility:visible");
  
    var display3 = document.getElementById("text");
    display3.setAttribute("style","visibility:visible");
    
    /* Changes terminal screen */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/Accept.png')"
    
    //Display the checkmark
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
    
    hide_boxes();

    document.getElementById("planet").src="assets/Show_Planet.png";
    document.getElementById("gps").src="assets/GPS.png";
  }
}

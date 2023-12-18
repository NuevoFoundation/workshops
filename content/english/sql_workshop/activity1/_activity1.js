function check()
{
    // Highlight the correct answers in green and disable drag
    change_color('div6', p1, "answer1");
    change_color('div7', p2, "answer2");
    change_color('div8', p3, "answer3");
    change_color('div9', p4, "answer4");
    change_color('div10', p5, "answer5");
    
    // Check if all the answers are correct
    if(p1 == "answer1" && p2 == "answer2" && p3 == "answer3" &&
       p4 == "answer4" && p5 == "answer5")
    {
        document.getElementById("sqlcommand").style.visibility = 'hidden';
        displaytable("galaxy", "table");

        // Display the checkmark
        var checkmark = document.getElementById("resume_plot");
        checkmark.setAttribute("style","visibility:visible");
        
        // Change terminal screen to display "Command Accepted" image
        var screen = document.getElementById("terminal_div");
        screen.style.backgroundImage = "url('../media/Accept.png')";

        hide_boxes();
    } else {
    // If incorrect, give alert
      alert("Try Again, Space Cadet!");
    }
}

function check()
{
    // Destaque as respostas corretas em verde e desative o arrastar
    change_color('div6', p1, "answer1");
    change_color('div7', p2, "answer2");
    change_color('div8', p3, "answer3");
    change_color('div9', p4, "answer4");
    change_color('div10', p5, "answer5");
    
    // Verifique se todas as respostas estão corretas
    if(p1 == "answer1" && p2 == "answer2" && p3 == "answer3" &&
       p4 == "answer4" && p5 == "answer5")
    {
        document.getElementById("sqlcommand").style.visibility = 'hidden';
        displaytable("galaxy", "table");

        // Exibir a marca de seleção
        var checkmark = document.getElementById("resume_plot");
        checkmark.setAttribute("style","visibility:visible");
        
        // Altere a tela do terminal para exibir a imagem "Comando aceito"
        var screen = document.getElementById("terminal_div");
        screen.style.backgroundImage = "url('../media/Accept.png')";

        hide_boxes();
    } else {
    // Se incorreto, dê alerta
      alert("Tente novamente, Cadete Espacial!");
    }
}

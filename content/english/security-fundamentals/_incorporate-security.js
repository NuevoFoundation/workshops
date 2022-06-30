function displaySection() 
{
    // Check if student has entered something
    var textField = document.getElementById("text_field").value;
    console.log(textField);
    if (textField != "")
    {
        // Display sample responses
        var answers = document.getElementById("sample_answers");
        answers.setAttribute("style","visibility:visible");
    } else {
        // If nothing entered, encourage them to do that first
        alert("Try writing an answer first!");
    }
}
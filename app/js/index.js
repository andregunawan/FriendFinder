let questionArr = ["Your mind is always buzzing with unexplored ideas and plans.",
    "Generally speaking, you rely more on your experience than your imagination.",
    "You find it easy to stay relaxed and focused even when there is some pressure.",
    "You rarely do something just out of sheer curiosity.",
    "People can rarely upset you.",
    "It is often difficult for you to relate to other people’s feelings.",
    "In a discussion, truth should be more important than people’s sensitivities.",
    "You rarely get carried away by fantasies and ideas.",
    "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
    "You feel more energetic after spending time with a group of people."];

let form_tag = "<form class='form-group'>";
$("#questionContainer").append(form_tag);

for(let i = 0; i < questionArr.length; i++)
{
    let html = "<div class='form-group col-lg-12'>";
    html += "<h3><b>Question " + parseInt(i+1) + "</b></h3>";
    html += "<h4>" + questionArr[i] + "</h4>";
    html += "<div class='row'>";
    html += "<div class='col-lg-4'>";
    html += "<select class='form-control col-lg-6' id='selectQuestion"+parseInt(i+1)+"'>";
    html += "<option id='0' disabled selected>Select your option</option>";
    html += "<option id='1'>1 (Strongly Disagree)</option>";
    html += "<option id='2'>2</option>";
    html += "<option id='3'>3</option>";
    html += "<option id='4'>4</option>";
    html += "<option id='5'>5 (Strongly Agree)</option>";
    html += "</select>";
    html += "</div>";
    html += "</div>";
    html += "</div>";

    $("#questionContainer").append(html);
}
$("#questionContainer").append("<button id='submitBtn' class='btn-success col-lg-12' data-toggle='modal' data-target='#myModal' style='margin-bottom: 5px'>Submit</button>");
let form_close_tag = "</form>";
$("#questionContainer").append(form_close_tag);
var alltimeblocks = document.getElementsByClassName("row time-block");
var textarea = document.getElementsByClassName("col-md-10 description");
buttonid = "";
textareaid = "";
input = "";

//Displays Current Date and Time
var todayDate = moment().format('LLLL');
$("#currentDay").html(todayDate);


colorcode();


//Function that color codes each hour block depending on whether hour is in past, present or future
function colorcode() {
    var hour = moment().hours();
    //Var Hour logs current Date and Time in Hours
    $(".time-block").each(function() {
        var currenthour = parseInt($(this).attr("id"));
        if (currenthour === hour) {
            $(this).attr("style", "background-color:lightsalmon;");
        } else if (currenthour > hour) {
            $(this).attr("style", "background-color:lightgreen;");
        } else {
            $(this).attr("style", "background-color:lightgrey;");
        }
    });
}


/*WHEN I click into a timeblock, THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage*/

$(":button").click(submit);

function submit(event) {
    event.preventDefault()
    buttonid = event.currentTarget.parentNode.id;
    parent = event.currentTarget.parentNode;
    textareaid = $(this).siblings("textarea");
    hour = buttonid;
    console.log(hour);
    input = textareaid.val();
    localStorage.setItem(hour, input);
    console.log(localStorage.getItem(hour));
    textareaid.textContent = localStorage.getItem(hour);
    textareaid.prop('readonly', true);
}
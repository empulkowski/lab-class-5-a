$(document).ready(function (){
    $("button").on("click", displayName);
});


function displayName(event)
{

    let firstName = $("input[id=first-name]").val();

        let lastName = $("input[id=last-name]").val();

    let rank = $("input[name=rank]:checked").data("display");

    $("p#fullName").text(`Welcome ${rank} ${firstName} ${lastName}`);

}





















//questions for teach
//why do we put event in the function displayName?
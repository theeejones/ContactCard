$(document).ready(function(){
    
    $("button").click(function(){
        var first_name = $("#first_name").val();
        var last_name = $("#last_name").val();
        var description = $("#description").val();
        if(first_name != "" && last_name != "" && description != ""){
            var appendstring = "<div class=\"contactcard\" first_name=\"" + first_name + "\" last_name=\"" + last_name + "\" description=\"" + description + "\">";
            appendstring += "\n<h3>" + first_name + " " + last_name + "</h3>";
            appendstring += "\n<h5>Click for a description!</h5>";
            appendstring += "\n</div>";
            $("#right").append(appendstring);
        }
        else {
            alert("Please fill out all fields before adding!");
        }
    });

    $("#right").on("click", "div.contactcard", function(){
        var first_name = $(this).attr("first_name");
        var last_name = $(this).attr("last_name");
        var description = $(this).attr("description");
        if($(this).find("h3").text() == description){
            $(this).find("h3").text(first_name + " " + last_name);
            $(this).find("h5").text("Click for a description!");
        }
        else {
            $(this).find("h3").text(description);
            $(this).find("h5").text("Click for name!");
        }
    });

});
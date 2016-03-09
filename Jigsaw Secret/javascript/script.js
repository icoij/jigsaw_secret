$(document).ready(function(){
	$(".puzzle").draggable();
});

$(document).ready(function(){
	$("#button").hover(function(){
    $("#button").css("background-color", "#ffae00");
    }, 

    function(){
    $("#button").css("background-color", "#FF9900");
	});
});

$(document).ready(function(){
	$("#button").click (function(){
		$("#button").css("background-color", "#ffc64d");
		});
});

confirm("Assemble the puzzle pieces to find a secret quote. Click 'answer' when you are finished to submit!");


$(document).ready(function(){
	$("#button").on("click", function(){

	var answer = prompt("What is the hidden quote?");
	 
	switch(answer) {
    
    case "Like A Boss":
        confirm("Correct! Thanks for playing!");
        break;
    case "like a boss":
        confirm("Correct! Thanks for playing!");
        break;
    case "LIKE A BOSS":
        confirm("Correct! Thanks for playing!");
        break;
    default:
        confirm("Sorry that's incorrect. Please type the answer exactly as it is written on the image.");
        break;
}
	});
});
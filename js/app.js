$(document).ready(function(){
//click event to get user number remove p element and function call
	$("#button").click(function(){
		$("p").remove();
		var myNumber = $("#number").val();
		fizzBuzz(myNumber);
	});

});
//fizzBuzz function display fizzBuzz depending on user input
function fizzBuzz (myNumber)
{

	if((myNumber % 1 != 0) || (isNaN(myNumber) || (myNumber > 100) || myNumber <= 0)){
		alert("Please enter a valid number!");
		return;
	}
//loop to check user input and append fizzBuzz to wrapper element
	for (x = 1 ; x <= myNumber ; x ++){
		if ((x % 3 === 0) && (x % 5 === 0)) {
	  		$(".wrapper").append('<p>fizzBuzz</p>');
		}
		else if (x % 3 === 0) {
			$(".wrapper").append('<p>fizz</p>');
		}
		else if(x % 5 === 0) {
	  		$(".wrapper").append('<p>Buzz</p>');
		}
		else{
	 	 	$(".wrapper").append('<p>' +x+ '</p>');
		}
	}
}
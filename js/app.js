$(document).ready(function(){
$("#button").click(function(){
	$("p").remove();
  fizzBuzz();
  });

});

function fizzBuzz ()
{
	var int = $("#number").val();
	if(int === ""){
		return
	}
 for (x = 1 ; x <= int; x ++){
	if ((x % 3 === 0) && (x % 5 === 0))
	{
  $(".wrapper").append('<p>fizzBuzz</p>');
	}else if (x % 3 === 0)
	{
	$(".wrapper").append('<p>fizz</p>');
	}else if(x % 5 === 0) 
	{
  $(".wrapper").append('<p>Buzz</p>');
	}else
	{
  $(".wrapper").append('<p>' +x+ '</p>');
	}
 }
}
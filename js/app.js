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
 for (int = int; int <= 100; int ++){
	if ((int % 3 === 0) && (int % 5 === 0))
	{
  $(".wrapper").append('<p>fizzBuzz</p>');
	}else if (int % 3 === 0)
	{
	$(".wrapper").append('<p>fizz</p>');
	}else if(int % 5 === 0) 
	{
  $(".wrapper").append('<p>Buzz</p>');
	}else
	{
  $(".wrapper").append('<p>' +int+ '</p>');
	}
 }
}
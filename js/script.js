$(document).ready(function(){
	var deletenumber = 16;
	var number;



	for(var j = 0; j < 16; j++){
		for(var i = 0; i < 16; i++){
			$("#main").append('<div id="sq"></div>');
		}
		$("#main").append('<br/>');
	}

	$('button').click(function(){
		number = prompt("Введите размер квадрата");
		$("#main").remove();
		$("body").append('<div id="main"></div>')

		for(var j = 0; j < number; j++){
			for(var i = 0; i < number; i++){
				$("#main").append('<div id="sq"></div>');
			}
			$("#main").append('<br/>');
		}
		deletenumber = number;
	})
});
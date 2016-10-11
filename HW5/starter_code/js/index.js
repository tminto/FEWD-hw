$(document).ready(function() {
	console.log("Running");
	var city;
	//on click prevent default and change the picture 	
	$("#submit-btn").on("click", function(){
		event.preventDefault();
		city=$("#city-type").val();
        console.log("after pressing the button, the entered text is" + city);
		changePic();
	});//end on click

	function changePic(){
		//if the user entered new york
		if (city=="new york" || city == "NYC" || city == "new york city")
			{
			    console.log("the entered city is nyc");
			    //change bg photo to nyc
	      	    $("body").css("background-image", 'url("../starter_code/images/nyc.jpg")');
			}
		else if(city == "San francisco" || city == "sf" || city == "Bay Area"){
	    //if the user entered San francisco
			    console.log("entered SF");
			    //change bg photo to SF
				$("body").css("background-image", 'url("../starter_code/images/sf.jpg")');
			}
		else if(city=="Los Angeles" || city=="LAX"){
				$("body").css("background-image", 'url("../starter_code/images/la.jpg")');
			}
		else if(city=="Austin" || city=="ATX")
			{
				$("body").css("background-image", 'url("../starter_code/images/austin.jpg")');
			}
		else if(city=="Sydney" || city=="SYD")		
			{
				$("body").css("background-image", 'url("../starter_code/images/sydney.jpg")');
			}
	}//end function changePic
});
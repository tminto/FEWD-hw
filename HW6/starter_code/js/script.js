$(document).ready(function(){
	console.log("hello world");
	var cityList=["NYC", "SF", "LA", "ATX", "SYD"];
	//use the append function to add the array elements to the dropdown list and a selected"value"
	for(var i = 0; i<5; i++){
		$("#city-type").append($("<option>" + cityList[i] + "</option>"))
	}
	//use change function to see when something is selected from dropdown menu
	$("#city-type").change(function() {
		console.log("selected a city")
		console.log($(this).val())
    	//change body background to the image that corresponds to the value of the dropdown selection
		if($(this).val()=="NYC"){
		    $("body").css("background-image", 'url("../starter_code/images/nyc.jpg")');
		}
		else if($(this).val()=="SF"){
		    $("body").css("background-image", 'url("../starter_code/images/sf.jpg")');
		}
		else if($(this).val()=="LA"){
		    $("body").css("background-image", 'url("../starter_code/images/la.jpg")');
		}
		else if($(this).val()=="ATX"){
		    $("body").css("background-image", 'url("../starter_code/images/austin.jpg")');
		}
		else if($(this).val()=="SYD"){
		    $("body").css("background-image", 'url("../starter_code/images/sydney.jpg")');
		}
	});
    //

})
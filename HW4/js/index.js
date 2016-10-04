
jQuery(document).ready(function(){

	$("a.preventLink").on("click", function(){
		event.preventDefault();
		});
    $(".readmore").on("click", function(){
    	$("p#show-this-on-click").slideDown();
    	$(".readmore").hide();
    	$(".readless").show();
    	});
    $(".readless").on("click", function(){
        $(".readless").hide();
    	$("p#show-this-on-click").slideUp();
    	$(".readmore").show();
    	});
   $(".learnmore").on("click", function(){
        $(".learnmore").hide();
        $(".relaxr-category-sidebar p span").slideDown();
    	});
});
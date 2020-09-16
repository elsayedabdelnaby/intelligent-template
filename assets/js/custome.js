$(document).ready(function(){
	$(".dropdown").hover(function(){
		var dropdownMenu = $(this).children(".dropdown-menu");
		if(dropdownMenu.is(":visible")){
			dropdownMenu.parent().toggleClass("open");
		}
	});

	$('#global-search .input-group').hover(function(){
		$('#search-modules-list').toggle("show");
	});
	$('#search-modules-list li').click(function(){
		$('#search-option').html($(this).html());
	});
});		

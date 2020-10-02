$(document).ready(function(){
	$('#global-search .input-group').hover(function(){
		$('#search-modules-list').toggle("show");
	});
	$('#search-modules-list li').click(function(){
		$('#search-option').html($(this).html());
	});

	$('.getMenu').on('mouseover', function(){
		$('.submenu').hide();
		$("." + $(this).data('type') + "-submenu").show();
	});
	$('.submenu').on('mouseover', function(){
		$(this).show();
	});
	$('.getMenu, .submenu').on('mouseleave', function(){
		$('.submenu').hide();
	});
});		

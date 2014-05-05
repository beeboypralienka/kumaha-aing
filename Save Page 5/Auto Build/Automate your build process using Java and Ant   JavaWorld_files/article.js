$(document).ready(function(){
	
	//zoom image functionality
	$('article .zoom').attr('target','_blank'); //opening the link with a js window.open seems to trigger popup blockers.
	$('article .zoom').append('<div class="zoom-icon"></div>');
	/* $('article .zoom').click(function(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		window.open(url,'_blank');
	}); */
	
	//initialize Prettify, which cleans up code samples
	prettyPrint();
});


//user taps the promo handles - needs to be $(document).on() because the promo modules load via ajax
$(document).on('click', '.handle', function(e){
	$(this).prev().addClass('open');
    $(this).addClass('open');
});
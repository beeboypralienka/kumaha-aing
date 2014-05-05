$(document).ready(function() {
  
	$("div.panel_button").click(function(){										 
		$("div#droppanel").animate({
			height: "0px"
		}, 200);
		$("div.panel_button").toggle();	
	});		
	
  $("div#hide_button").click(function(){
		$("div#droppanel").animate({
			height: "380px"
		}, 200);			
  });		
   
	$("div.panel_buttontopbar").click(function(){
	  if(parseInt($("div#panelnotification").css('height')) > 0) {
		  $("div.panel_buttonnotification").toggle();
		  $("div#panelnotification").animate({
  			height: "0px"
  		}, 200);
  	}
		$("div#paneltopbar").animate({
			height: "200px"
		}, 200);
		$("div.panel_buttontopbar").toggle();
	});	
	
  $("div#hide_buttontopbar").click(function(){
		$("div#paneltopbar").animate({
			height: "0px"
		}, 200);
  });		
   
	$("div.panel_buttonnotification").click(function(){
		if(parseInt($("div#paneltopbar").css('height')) > 0) {
		  $("div#paneltopbar").animate({
  			height: "0px"
  		}, 200);
  		$("div.panel_buttontopbar").toggle();
  	}
		$("div#panelnotification").animate({
			height: "200px"
		}, 200);
		$("div.panel_buttonnotification").toggle();
	});	
	
  $("div#hide_buttonnotification").click(function(){
    $("div#panelnotification").animate({
    	height: "0px"
    }, 200);	
  });	
  
  
  	/*menu kanal*/
	$("div.panel_menu").mouseenter(function(){	 
		$("div#panelmenu").animate({
			height: "30px"
		}, 200);		
		$("span.more").hide();
	});	
	
  	$("div#panelout").mouseleave(function(){
		$("div#panelmenu").animate({
			height: "0px"
		}, 200);
		$("span.more").show();
  	});	
	
	$("div.panel_menu").mouseenter(function(){	 
		$("div#panelmenuc").animate({
			height: "30px"
		}, 200);		
		$("span.more").hide();
	});	
	
  	$("div#panelout").mouseleave(function(){
		$("div#panelmenuc").animate({
			height: "0px"
		}, 200);
		$("span.more").show();
  	});	
	/*menu kanal end*/  
  
   
});
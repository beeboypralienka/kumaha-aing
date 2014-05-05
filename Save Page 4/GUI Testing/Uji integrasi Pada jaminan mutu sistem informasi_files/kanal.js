(function($) {
	
	$("div.panel_menu").mouseenter(function(){	 
		$("div#panelmenu, div#panelmenuc").animate({
			height: "30px"
		}, 200).show();
		$("span.more").hide();
	});	
	
	$("div#panelout").mouseleave(function(){
		$("div#panelmenu, div#panelmenuc").animate({
			height: "0px"
		}, 200).hide();
		$("span.more").show();
	});	

})(jQuery);

// Hehe.
if ( window.addEventListener ) {
	var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
	window.addEventListener("keydown", function(e){
		kkeys.push( e.keyCode );
		if ( kkeys.toString().indexOf( konami ) >= 0 ) {
			kkeys = [];
			//alert('We\'re gonna missing you dude!');
			//location.href = 'http://a7.sphotos.ak.fbcdn.net/hphotos-ak-ash1/22479_285655908098_663668098_3523123_1124892_n.jpg';
			if(! document.getElementById('kndr')) {
				var tt = document.getElementById('hl-tab');
				var ttt = tt.getElementsByTagName('li');
				var ttl = ttt[ttt.length - 1];
				var ttn = document.createElement('li');
				ttn.innerHTML = '<a href="#" rel="hl-tab' + ttt.length + '" style="background-color:#6ad7cf; color:#092555;" id="kndr">KNDR</a> ';
				tt.insertBefore(ttn, ttl);
				var hcb = document.getElementById('hl-tab' + (ttt.length - 2));
				
				var hcn = document.createElement('div');
				hcn.setAttribute('id', 'hl-tab' + (ttt.length - 1));
				hcn.setAttribute('style', 'display:none; margin-top:-40px; position:relative; z-index:2;')
				hcn.innerHTML = '' +
				'<img src="http://a7.sphotos.ak.fbcdn.net/hphotos-ak-ash1/22479_285655908098_663668098_3523123_1124892_n.jpg" style="width: 680px;" alt="Kandar" width="680" />' +
				'<div class="headline_box">' +
					'<div class="headline_box_2">' +
						'<img class="left mr_15 img_01" src="http://stat.ks.kidsklik.com/statics/u/prf/15939196891291351334252405850.jpg" alt="KNDR" height="50" width="50" />' +
						'<span class="headline_text"><a title="Game Over, Gan!" href="http://www.kompasiana.com/kndr.html">Game Over, Gan!</a></span>' +
						'<a style="text-decoration: none;" title="Eka Siswanto Pratam..." href="http://www.kompasiana.com/oq"><span class="sub_text_headline">oq</span></a>' +
					'</div>' +
				'</div>';
				hcb.parentNode.insertBefore(hcn, hcb.nextSibling);
				var myheads = new ddtabcontent('hl-tab');
		    myheads.setpersist(false);
		    myheads.setselectedClassTarget('link');
		    myheads.init(5000);
		  }
		}
	}, true);
}

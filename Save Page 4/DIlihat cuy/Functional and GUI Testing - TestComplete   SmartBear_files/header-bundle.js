$(document).ready(function(){
//sticky header
var location = window.location.href;
var locFlag = location.indexOf('support'); //for another sticky header for support

if ( ($(window).width() > 768)&&(locFlag == -1) )  {
    $(".main-header-wrap").sticky({
        topSpacing:0,
        className:'header-sticky-white' //class defined in templateSB
    });
    $('.hidden-col-button').attr('data-state','opened'); //menu button
} else if ( ($(window).width() > 768)&&(locFlag > -1) ) {
	console.log('support');
}

//menu hover
var windowWidth = $(window).width();
	if(windowWidth > 980){
		$('.megalink').mouseover(function(){
			$(this).find(".megamenu").css('display','block');
		}).mouseout(function(){
			$(this).find(".megamenu").css('display','none');
		});
}

//searchbox events
if ($('#search-small').length) {
        
        var resultsPage = 'Search-Results/';
        var searchContainer = $('#search-small');
        //Redirects the user to the results page
        var searchAction = function (e) {
  
            e.preventDefault();
            var keyCode = e.keyCode;

            //Assuming that if the keycode is not defined
            //this was called from the search button being clicked
            if (typeof keyCode === 'undefined') {
                 //e.preventDefault();
                keyCode = 13;
            }
           
            if (keyCode !== 13) {  
            return; }
       
            var searchText = searchContainer.find('input.form-control-search').val();
            searchText = $.trim(searchText);
           var url = '';
  
              if (searchText.length) {
                  // IE hash fix
                  var ua = window.navigator.userAgent;
                  var reg = new RegExp("(msie 6\.0|msie 7\.0|msie 8\.0|msie 9\.0)", "i");
                  var is_safari = navigator.userAgent.indexOf("Safari");
  
                  if( (reg.test(ua)) || (is_safari > -1))
                      url = '?search=' + searchText; // for IE v <= 9 and Safari
                  else 
                      url = '#search/' + searchText;
              }        
             
            var loc = window.location;
            var locationPath = loc.protocol + '//' + loc.host; 

            if (locationPath.substr(locationPath.length - 1, 1) != "/") locationPath += "/";

            if (window.Root) {
                locationPath += window.Root;
            }
           window.location = locationPath + resultsPage + url;
        };

        //Bind the search action to the text box, as well as the button
        searchContainer        
        .find('input.form-control-search')
        .bind('keyup', searchAction)
        .end();
		
		$('.button-searchbutton').on('click', searchAction);
        
    }
});

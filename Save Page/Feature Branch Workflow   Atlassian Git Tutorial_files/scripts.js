$(function(){
  $("#ss-form").validate();
  /*$('#sectionfooter .box').wrapInner('<div class="fourColumn" />');*/
  $('a[href*="#!"]').live('click',function(){
    $(window).scrollTo('.tabsContent:visible');
  });
});
function submitSpreadsheetForm() {
  if($('#ss-form').valid()){
     // see if there is a #ss-form on the page.  There can only be one.
    if ($('#ss-form').length === 1) {
      // don't let them submit feedback more than once
      if ($('#spreadsheet-iframe').length === 0) {
        // so the user experience isn't disturbed, create a hidden iframe to submit the form in.
        var spreadsheet_iframe = $('<iframe></iframe>').attr('id', 'spreadsheet-iframe');
        spreadsheet_iframe.attr('name', 'spreadsheet-iframe');
        spreadsheet_iframe.attr('style', 'display:none;');
        // add the hideen iframe
        $('body').append(spreadsheet_iframe);
        // set the target for the form the id/name of the hidden iframe
        $('#ss-form').attr('target', 'spreadsheet-iframe');
        // hide the form and
        $('#ss-form').fadeOut('fast', function() {
          $('.formSubmit').fadeIn('fast');
        });
        // do a virtual page view to indicate they took an action
        _gaq.push(['_setAccount', 'UA-6032469-1']);
        _gaq.push(['_setDomainName', 'none']);
        _gaq.push(['_setAllowLinker', true]);
        _gaq.push(['_trackPageview', 'spreadsheet=true']);
      }
    }
    return false;
  }else{
    return false;  
  }
}
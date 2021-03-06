(function($) {
    
    // Inisialisasi: Font replacement.
    Cufon.now();
    Cufon.replace('h2');
    
    // Inisialisasi: Tab Berita Admin & Letter to Admin
    $('#admin-tab').tabs({ fxFade: true, fxSpeed: 'fast' });
    
    // Inisialisasi: Accordion box Ter*.
    ddaccordion.init({
      headerclass: 'shead', //Shared CSS class name of headers group
      contentclass: 'subm', //Shared CSS class name of contents group
      revealtype: 'click', //Reveal content when user clicks or onmouseover the header? Valid value: "click" or "mouseover
      mouseoverdelay: 0, //if revealtype="mouseover", set delay in milliseconds before header expands onMouseover
      collapseprev: true, //Collapse previous content (so only one open at any time)? true/false
      defaultexpanded: [0], //index of content(s) open by default [index1, index2, etc] [] denotes no content
      onemustopen: true, //Specify whether at least one header should be open always (so never all headers closed)
      animatedefault: false, //Should contents open by default be animated into view?
      persiststate: false, //persist state of opened contents within browser session?
      toggleclass: ['', 'selected'], //Two CSS classes to be applied to the header when it's collapsed and expanded, respectively ["class1", "class2"]
      togglehtml: ['', '', ''], //Additional HTML added to the header when it's collapsed and expanded, respectively  ["position", "html1", "html2"] (see docs)
      animatespeed: 50, //speed of animation: "fast", "normal", or "slow"
      oninit:function(headers, expandedindices){ //custom code to run when headers have initalized
        //do nothing
      },
      onopenclose:function(header, index, state, isuseractivated){ //custom code to run whenever a header is opened or closed
        //do nothing
      }
    });
    
    // Inisialisasi: Popup chart.
    if(img_stat.length) {
        $('.bubble_html').html(img_stat.replace('localhost/k3.5', 'stat.ks.kidsklik.com'));
        $('.coda_bubble').codaBubble({
            bubbleImagesPath: static_domain + 'statics/plugins3.5/codabubble/images/skins/classic',
            bubbleTimes: [500],
            bubbleWidths: [310],
            distances: [0],
            hideDelays: [0],
            leftShifts: [-115],
            msieFix: true,
            msiePop: true
        });
    }
    
})(jQuery);
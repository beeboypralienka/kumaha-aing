// click the shortstack button
$('#banner .masthead button').click(function(e){
    e.stopPropagation();
    $('#banner').toggleClass('nav-open');
    //make sure no subnavs peak out unexpectedly
    $('#banner').removeClass('sub');
    $('ul.primary li').each(function(){
        $(this).removeClass('nav-open');
    });
});

// click a primary nav item in the left shortstack menu
$('ul.primary > li > a.hasChildren').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $main_nav = $('nav.main');
    $li = $(this).parent();
    $li.toggleClass('nav-open');
    $('#banner').toggleClass('sub');
});

// click a subnav header to go back in the left shortstack menu
$('ul.primary > li ul > li:first-child a').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('#banner').removeClass('sub');
    $('ul.primary li').each(function(){
        $(this).removeClass('nav-open');
    });
});

$('#search-btn').click(function(e){
    e.preventDefault();
    if($('#banner').hasClass('expand-open') && $('section.tools-expand').hasClass('user')){
        // if the banner is already open on user, switch to search
        $('section.tools-expand').removeClass('user');
        $('#banner').addClass('search');
    } if($('#banner').hasClass('expand-open') && $('section.tools-expand').hasClass('search')){
        // if the banner is already open on search, close it
        $('#banner').removeClass('expand-open');
    } else{
        // open the banner, make sure user isn't visible, show search
        $('#banner').addClass('expand-open');
        $('section.tools-expand').removeClass('user').addClass('search');
    }
    $('#search-form #banner-search-term').focus();
});

$('#user-btn').click(function(e){
    e.preventDefault();
    if($('#banner').hasClass('expand-open') && $('section.tools-expand').hasClass('search')){
        // if the banner is already open on search, switch to user
        $('section.tools-expand').removeClass('search');
        $('#banner').addClass('user');
    } if($('#banner').hasClass('expand-open') && $('section.tools-expand').hasClass('user')){
        // if the banner is already open on user, close it
        $('#banner').removeClass('expand-open');
    } else{
        // open the banner, make sure search isn't visible, show user
        $('#banner').addClass('expand-open');
        $('section.tools-expand').removeClass('search').addClass('user');
    }
});

$('#reading-selector .label').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).parent().toggleClass('open');
})

$('#network-selector .label').click(function(e){
    e.preventDefault();
    $(this).parent().toggleClass('open');
})
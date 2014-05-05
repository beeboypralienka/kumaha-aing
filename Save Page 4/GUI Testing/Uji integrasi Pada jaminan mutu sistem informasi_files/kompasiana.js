var url_base = 'http://www.kompasiana.com/';
var stat_base = 'http://stat.ks.kidsklik.com/';
function inline_popup (t,m){
    var g = false;
    var a = '#TB_popup?mess<;>'+m;
    tb_show(t,a,g);
}
function preload (){
    jQuery("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' /></div>");//add loader to the page
    jQuery('#TB_load').show();//show loader
}
function do_login (this_url){
    inline_popup('Not Login','<p>Anda belum Login. Untuk login silahkan <a href="'+url_base+'login?continue='+encodeURIComponent(this_url)+'">klik</a> di sini.</p>');
}
function ajax_poup (t,a){
    var g = false;
    var b = a + '&height=200&width=300';
    tb_show(t,b,g);
}
function kompasiana_init (domChunk){
    jQuery(domChunk).click(function(){
        var a = this.rel;
        var t = this.name;
        ajax_poup(t,a);
        return false;
    });
}
function form_comment (id, uinfo, is_sub){
    var html = '' +
    '<li class="sub" id="form_' + id + '">' +
        '<div class="left user_1 w50 pd_5" align="center">' +
            '<img src="' + uinfo['u_img'] + '" alt="" /><br />' +
            '<span class="cc_blue_kompas font11">' + uinfo['u_dis_name'] + '</span>' +
        '</div>' +
        '<div class="left w470">' +
            '<div class="font11 komentar2a">' +
                '<div>' +
                    '<form name="testform" action="javascript:send_reply(' + id + ');" method="post">' +
                        '<textarea rows="5" name="reply_comment" id="reply_comment" cols="51" class="mb_5"></textarea>'+
                        '<div class="pr15 c_blue4"><input type="submit" name="submit" value="Submit" class="submit_comment" /> <input type="button" name="" value="Cancel" onClick="cancle_reply('+id+')" /></div>'+
                    '</form>' +
                '</div>' +
            '</div>' +
            '<div class="komentar1b"></div>' +
        '</div>' +
        '<div class="clearit"></div>' +
    '</li>';
	return html;
}
function new_post_comment (comment, parent_id, style, end_line, uinfo, status){
	var line = '';
	var mbcl = 'mt10';
	if(end_line){
		var line = '<div class="bord_bot_1px_com2 mb10 w610"></div>';
		var mbcl = 'mb10';
	}
	if(style == 'par'){
	    var w = 'w600';
	    var n = '1';
	}
	else{
	    var w = 'w470';
	    var n = '2';
	}
	if(status == 0)
		var note = '&nbsp;&nbsp;<em>Komentar menunggu approval.</em>';
	else
		var note = '';
		
		var html = '' +
        '<li id="pc_' + parent_id + '" class="' + style + '">' +
            '<div class="left user_1 w50 pd_5" align="center">' +
                '<img src="' + uinfo['u_img'] + '" alt="" /><br />' +
                '<span class="cc_blue_kompas font11">' + uinfo['u_dis_name'] + '</span>' +
            '</div>' +
            '<div class="left ' + w + '">' +
                '<div class="font11 komentar' + n + 'a">' +
                    '<div class="c_abu font10 pb_5">' +
                        '<div class="left">' + comment.date + '</div> ' +
                        /* '<div class="ico_jempol_plus left ml_10">' +
                            '<a href="#"><strong class="pl_20">0</strong></a>' +
                        '</div>' + */
                    '</div>' +
                    '<div>' + comment.content + '</div>' +
                    /* '<div align="right" class="c_abu4 pt_10">' +
                        '<div class="right pr_5">' +
                            '<b><a href="#" onClick="reply_comment(' + parent_id + '); return false;">Balas tanggapan</a></b>' +
                        '</div>' +
                    '</div>' + */
                    '<div class="clearit"></div>' +
                '</div>' +
                '<div class="komentar' + n + 'b"></div>' +
            '</div>' +
            '<div class="clearit"></div>' +
        '</li>';
	return html;
}
function div_message (){
	var g = false;
	var a = '#TB_popup?mess<;><form action="javascript:send_message();" method="post"><strong>Subject:</strong> <span id="err"></span><br /><input size="50" type="text" name="subject" class="fsize11 bord_1px fa pd5 sbj"><br /><strong>Message:</strong><br /><textarea name="text_message" id="text_message" cols="48" rows="8" class="fsize11 bord_1px fa pd5"></textarea><br /><input type="submit" name="submit" value="Kirim"> <input type="button" onclick="tb_remove()" value="Cancel"/></form><;>240<;>338';
	tb_show('Message',a,g);
	
}
function send_message (){
    var mess = $('textarea#text_message').val();
    var subj = $('.sbj').val();
    if(mess == ''){
	$("#err").html('');
	$("#err").append('<span style="color: #f00;"> Silahkan isikan pesan Anda</span>').show().fadeOut(5000);
    }
    else{
	var callback = function(data){
	    preload();
	    if (data.status == 0){
		$("#TB_load").remove();
		$('#TB_ajaxContent').html('<p style="text-align: center;">Anda belum login. Untuk login silahkan klik <a href="'+url_base+'login?continue='+udata['this_url']+'">di sini</a></p>.');
	    }
	    else if(data.status == 2){
		tb_remove();
		alert('Sorry, an error has occurred. Try again later.');
	    }
	    else{
		$('#TB_ajaxContent').html('<p style="text-align: center;">Pesan Anda berhasil terkirm.<br /><input type="button" onclick="tb_remove()" value="Ok"/></p>');
		$("#TB_load").remove();
		setTimeout('tb_remove()',4000);
	    }
	}
	$.post("ajax?m=send_message",{ subject: subj, message: mess, toid: udata['upid'] }, callback, "json");	
    }
}
function add_as_firend (friend,fid){
    preload();
    $.getJSON('ajax?m=is_login', function(json){
	if(json.status == 1){
	    var a = '#TB_popup?mess<;><p style="text-align: center;">Jadikan '+friend+' sebagai teman?<br /><br /><input type="submit" onclick="do_add_firend('+fid+');" value="Ok"/> <input type="button" onclick="tb_remove()" value="Cancel"/></p><;>120<;>300';
	    tb_show('Add Friend',a, false);
	}
	else{
	    do_login(udata['this_url']);
	}
    });	
}
function do_add_firend (fid){
    var callback = function (data, textStatus) {
	preload();
	if (data.status == 0){
	    $("#TB_load").remove();
	    $('#TB_ajaxContent').html('<p style="text-align: center;">Anda belum login. Untuk login silahkan klik <a href="'+url_base+'login?continue='+udata['this_url']+'">di sini</a></p>.');
	}
	else{
	    $('#TB_ajaxContent').html('<p style="text-align: center;">Tambahkan teman berhasil.<br /><input type="button" onclick="tb_remove()" value="Ok"/></p>');
	    $("#TB_load").remove();
	    setTimeout('tb_remove()',4000);
	    $('#friend_request').html('<a href="#">Tunggu Konfirmasi</a>');
	}
    }
    $.post("ajax?m=add_friend",{ add_friend: fid }, callback, "json");
}
function scrollTo (selector) {
    var targetOffset = $(selector).offset().top;
    $('html,body').animate({scrollTop: targetOffset}, 500);
}

(function($) {
    var id;
    var type;
    var title;
    $('.reportThis').click(function(){
	id = this.id;
	type = this.rel;
	title = this.title;
	var g = false;
	var a = '#TB_popup?mess<;><strong>Tuliskan alasan Anda:</strong> <span id="err"></span><br /><textarea name="text_message" id="text_message" cols="48" rows="8" class="fsize11 bord_1px fa pd5"></textarea><br /><input class="doReport" type="button" name="submit" value="Kirim"> <input type="button" onclick="tb_remove()" value="Cancel"/><;>180<;>328';
	id = id.replace('_', '');
	tb_show(title,a,g);
        return false;
    });
    $('.doReport').live('click', function(){
	var mess = $('textarea#text_message').val();
	if(mess == ''){
	    $("#err").html('').append('<span style="color: #f00;"> Silahkan isikan alasan Anda</span>').show().fadeOut(5000);
	    return false;
	}
	var callback = function (data) {
	    preload();
	    if (data.status == 0){
		$("#TB_load").remove();
		$('#TB_ajaxContent').html('<p style="text-align: center;">Anda belum login. Untuk login silahkan klik <a href="'+url_base+'login?continue='+udata['this_url']+'">di sini</a></p>.');
	    }
	    else{
		$('#TB_ajaxContent').html('<p style="text-align: center;">Laporan Anda telah terkirim.<br /><input type="button" onclick="tb_remove()" value="Ok"/></p>');
		$("#TB_load").remove();
		setTimeout('tb_remove()',4000);
	    }
	};
	$.post("ajax?m=report",{report:mess,id:id,type:type},callback,"json");
    });
})(jQuery);
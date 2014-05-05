
// JavaScript Document

function bookmarksite(title, url){
if (document.all)
window.external.AddFavorite(url, title);
else if (window.sidebar)
window.sidebar.addPanel(title, url, "")
}



function refSubmit(qnum)
{	
	document.referqsn.c_url.value = location.href;
	document.referqsn.path.value = 'http://www.allinterview.com/showanswers/'+qnum+'.html';
	document.referqsn.question.value = qnum;
	document.referqsn.submit();	
}


	
function refTopic(tno)
{	
	document.referqsn.c_url.value = location.href;
	//document.referqsn.path.value = 'http://www.allinterview.com/showanswers/'+qnum+'.html';
	document.referqsn.topic.value = tno;
	document.referqsn.submit();	
}
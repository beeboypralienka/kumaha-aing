var i;
var llactid;
var myid;

myid = 1;
mypage = escape(location.href);
myref = escape(document.referrer);
myip = escape(location.hostaddress);

if (i!="undefined")
    {
	if (i>10000)
	{
        myid = i;
	}
    }

if  (llactid!="undefined")
    {
	if (llactid>10000)
	{
        myid = llactid;
	}
    }

if (myref=="")
    {
     myref="None";
    }
if (mypage=="")
    {
    mypage="Unavailable";
    }
var linkreefer = "http://t3.trackalyzer.com/trackalyze.asp?r=" + myref + "&p=" + mypage + "&i=" + myid;
document.write ("<img src='" + linkreefer + "'>");



function Trackalyzer (myid, page, forward, open)
{
	var mypage = page;
	var myref = escape(document.referrer);
	var myip = escape(location.hostaddress);

	if ((typeof(forward)=='undefined'))
	{
	forward=mypage;
	};

	var linkreefer = "http://t3.trackalyzer.com/trackalyze.asp?i=" + myid + "&r=" + myref + "&p=" + mypage + "&f=" + forward;

	var el = document.createElement("iframe");
	el.setAttribute('width', '0%');
	el.setAttribute('height', '0%');
	el.setAttribute('frameborder', '0');
	el.setAttribute('id', 'ifrm');
	el.setAttribute('src', linkreefer);
	setTimeout(document.body.appendChild(el), 10000);
	document.body.appendChild(el);


	try
	{
		if (open=='new')
			{ setTimeout(window.open(forward), 700); }

		var browser = navigator.userAgent;
		var browsertype=browser.indexOf("xxxFirefox");
		if ( browsertype!= -1  ) 
			{
			my_window = window.open(linkreefer, "formalyzer","status=1,width=1,height=1");
			my_window.blur();
			my_window.close();
			}
	}

	catch(e){
		var browser = navigator.userAgent;
		var browsertype=browser.indexOf("xxxFirefox");
		if ( browsertype!= -1  ) 
			{
			my_window = window.open(linkreefer, "formalyzer","status=1,width=1,height=1");
			my_window.blur();
			my_window.close();
			}
		}
}



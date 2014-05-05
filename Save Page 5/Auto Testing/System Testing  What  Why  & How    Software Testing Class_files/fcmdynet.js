  try {
var _mN = _mN || {};
var iframeURL = 'http://contextual.media.net/mediamain.html?cid=8CUFLK5I3&crid=358561571&pid=8PO94E1WG&size=200x200&cpnet=yVb1sHm%2B0KIh29BOFTjjrINPNkm3H2GTtnjS59gOkHk%3D&cme=%2BGrnje2DVSUEOXxUGC8xNiavel%2FfZ5Xsnz4bMh%2Blsr2y9cSqHE3VUyQktXJ1%2BfoMvtRtwN16AdqxG3QiEzO0jzCyEaiYL6sseQXz1c5toQ8%3D%7C%7CN7fu2vKt8%2Fs%3D%7CFcl4VLL%2BIaLYulrOcpLHqOaMGjy%2Bz5be7niEpmiU1lHk4OKmnckSkJJBUNzoRun6U4WxxXOquuaH%2BHep5kpd8w%3D%3D%7CsRBSg3CPSiQ%3D%7C&cc=ID&bf=0&vif=1';
var winScope = window;var buckets = [{"bucket_id":44105,"percentage":"33"},{"bucket_id":44106,"percentage":"33"},{"bucket_id":44107,"percentage":"34"}];

function getRandomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
} 

function getABTestBucket(){ 
	if(buckets && buckets.length > 0){
		var buckLen = buckets.length,
		randStr = getRandomFromTo(1, 100),
		sumBucket = 0;
		
		for(var l=0; l<buckLen; l++){
			sumBucket = parseInt(sumBucket) + parseInt(buckets[l]['percentage']);
			
			if(randStr <= sumBucket && buckets[l]['bucket_id']){
				iframeURL += '&bid='+buckets[l]['bucket_id'];
				return '';
			}
		}
	}
}
getABTestBucket();
var _mNObject = window._mN;
var _mNDetailsObject = window._mNDetails;
if(window._mNObject && _mNObject.util && _mNObject.util.triggerAdTagEvent) {
	_mNObject.util.triggerAdTagEvent('358561571',"layerTwoLoadCompleted", false, []);
	_mNObject.util.triggerAdTagEvent('358561571',"layerThreeLoadStarted", false, iframeURL);
}_mNDetailsObject.console = _mNDetailsObject.console || {};
if(window.buckets && window._mNDetailsObject && window._mNObject) {
    _mNDetailsObject.console['358561571'] = _mNDetailsObject.console['358561571'] || {};
	_mNDetailsObject.console['358561571'].buckets = buckets;
	window.buckets = undefined;
}
var locHash = '';
try{
	if(typeof _mNDetails != 'undefined' && _mNDetails['locHash'] && _mNDetails['locHash']['358561571']){ locHash += _mNDetails['locHash']['358561571'];};
	if(locHash != ''){
		locHash = '#'+locHash;
	}
	locHash += '&dytm=' + new Date().getTime();
}catch(e){}
iframeURL += locHash;
_mNDetails = (typeof _mNDetails != "undefined")?_mNDetails:{};
_mNDetails['locHash'] = _mNDetails['locHash'] || {};		
    _mNDetails['locHash']['358561571'] = locHash;
var _mN_mc_cnt = _mN_mc_cnt || 0; 
var _mN_mc_frameID = '_mN_main_358561571'+'_'+_mN_mc_cnt++;
_mNDetails = (typeof _mNDetails != "undefined")?_mNDetails:{};
_mNDetails['iframeURL'] = _mNDetails['iframeURL'] || {};
_mNDetails['iframeURL']['358561571'] = iframeURL;
_mNDetails['iframeID'] = _mNDetails['iframeID'] || {};
_mNDetails['iframeID']['358561571'] = _mN_mc_frameID; 
document.write("<iframe marginwidth='0' marginheight='0' scrolling='NO' frameborder='0' height='200' width='200' id='"+_mN_mc_frameID+"' style='display:none;' ></iframe>");
var dyncId = _mN_mc_frameID.replace("main", "dy").replace(/_[0-9]*$/g, ""); var winScope = window;window.winScope = winScope;winScope._mNDetails.triggerAdTagEvent("358561571", "dfpInit", false,
    {
        dyncId: dyncId,
        elemId: "div-gpt-ad-8CUFLK5I3358561571-0",
        slot: "/45361917/8CUFLK5I3-358561571-Class-200x200-Right-Sidebar",
        width: "200",
        height: "200"
    });  	
function bidDoneListener() {
    var dyncId = "_mN_dy_358561571";
	var bid = winScope._mNDetails[dyncId].bid;
winScope._mNDetails.triggerAdTagEvent("358561571", "dfpDisplayInit", false,
    {
        dyncId: dyncId,
        elemId: "div-gpt-ad-8CUFLK5I3358561571-0",
        slot: "/45361917/8CUFLK5I3-358561571-Class-200x200-Right-Sidebar",
        width: "200",
        height: "200"
    });
}

if(winScope._mNDetails[dyncId].winProv != 0 ) {
	bidDoneListener();
} else {
	winScope._mNDetails.addToEventQueue("bidDone", "358561571", bidDoneListener);
}var _mN_mainCont = '<!DOCTYPE html><html><head><scri' + 'pt type="text/javascript">var publisherScope = window.parent.winScope; var iframeID = typeof (frameID) !== "undefined" ? frameID : window.parent._mNDetails["iframeID"]["358561571"], callback = false, dyncId = iframeID.replace("main", "dy").replace(/_[0-9]*$/g, ""), mFrame = window.parent._mNDetails["iframeURL"]["358561571"].replace(/#.*/, "");function processL3() {if (typeof publisherScope !== "object") {    return;}function bidDoneL3Listener() {    var dyncId = "_mN_dy_358561571";	if(\'|1|4|9|7|6|\'.indexOf(\'|\' + publisherScope._mNDetails[dyncId].winProv + \'|\') !== -1) {		publisherScope._mNDetails[dyncId].adCode = window.adContent.content;	}	publisherScope._mNDetails[dyncId].display(false);}if (publisherScope._mNDetails.triggerAdTagEvent) {    publisherScope._mNDetails.triggerAdTagEvent("358561571","adContentLoaded");}if(publisherScope._mNDetails[dyncId].winProv != 0 ) {	bidDoneL3Listener();} else {	publisherScope._mNDetails.addToEventQueue("bidDone", "358561571", bidDoneL3Listener);}					 				} window.parent.loadL3 = loadL3; function loadL3() { parent._mN_dy.putContent(iframeID, adContent.content, "200", "200", "", "0"); }; function getL3URL(urlFromL2) { var isSecureSrc = urlFromL2.indexOf("https") === 0, isWindowSecure = "https:" == document.location.protocol; if (!isWindowSecure || isSecureSrc) { return urlFromL2 + "&nb=1"; } try { (function(){        var localhash = (window._mNDetails && _mNDetails[\'locHash\'] && _mNDetails[\'locHash\'][\'358561571\']) || \'\';		var imgUrl = \'http://qsearch.media.net/flping.php?reason=34&action=15&cme=J%2BTYxn1%2F5%2Fr0jBXSFHaEX2q97wO9LTrLMjmd5xO1tIvpdASfjrNcTxDcKisxlLXG79oMqAPQyw14VidIO6TXLxLTO74Bd%2F8lDMthSyyokIQCEI%2Bdktt3GvhpnnuKZaV1OLENXxA%2FO%2ByN8kOCzCEvsg2taEOYc6dbGZxb5V%2FDqWoQoQgjbCcz%2FqXLVbQPC2Ywo9Na28qbcYkR0wDUf798kPb6d96bwyLh4c%2BgZwrEy4pCeP5yj%2Bo09NswAU3yUWe%2BJSq%2BfOxkV3mSCYo5dJN7JjbpItKTAEDLSQI308BKD1dk%2B8Ck7e4y2oQoNazD5yFu9XpoLz5hfi87YCuOK5gVNqf45v%2Bdq%2BuR%2Bs7f%2FN3P11XHU7nP7h2GQnADzvPsyepSRTg1oEmJbOjLN0%2Fh2S%2FvsR%2BWYwHYlcdXPtQJjK19HQ%2Fsqym8aFf1Qbo2srBOSGegq6UagI1lEyJ3B7DuVeN%2F%2FoxZLjQhAjPelsMDofqO0Nw%3D%7C%7C&r=\'+new Date().getTime()+\'&\'+localhash.replace(/#/g, \'&\');		if(window._mN && _mN._util && _mN._util.logNBBeacons){			_mN._util.logNBBeacons(imgUrl);		}else if(window._mN && _mN.util && _mN.util.logBeacons){			_mN.util.logBeacons(imgUrl);		}else{			(new Image()).src = imgUrl;		}	})(); } catch (e) { } return ""; }; function createTag() { var l3src = getL3URL(mFrame); if (!l3src) { return; } var scr = document.createElement("script"); scr.onload = scr.onreadystatechange = function () { if (typeof adContent != "undefined" && !callback) { callback = true; processL3();} }; scr.type = "text/javascript"; scr.src = l3src; scr.async = "async"; document.getElementsByTagName("head")[0].appendChild(scr); };</scri' + 'pt></head><body onload="createTag()"></body></html>';
var _mN_dy = _mN_dy || {};_mN_dy.eventLib = {
	addEvent: function (elem, type, eventHandle) {
		if(elem.addEventListener) {
			elem.addEventListener( type, eventHandle, false );
		} else if ( elem.attachEvent ) {
			elem.attachEvent( "on" + type, eventHandle );
		}
		elem = null; // Handle Memory Leak
	},
	removeEvent: function(elem, type, eventHandle) {
		if (elem.removeEventListener) {
			elem.removeEventListener(type, eventHandle);
		} else if(elem.detachEvent) {
			elem.detachEvent('on' + type, eventHandle);
		}
		elem = null;
	}
};
_mN_dy.getContent = function (data, url, w, h, id, insl) {
	var ifr = document.getElementById(id),
	errload = function(){_mN_dy.getContent(data, url, w, h, id);};
	
	if(!ifr){
		_mN_dy.eventLib.addEvent(document, 'DOMContentLoaded', errload);  
		//_mN_dy.eventLib.addEvent(window, 'load', errload);
		ifr = null;
		return;
	}
	//_mN_dy.eventLib.removeEvent(window, 'load', errload);
	var doc,
	win = ifr.contentWindow || ifr.contentDocument; 
	try { 
		doc = (win && (win.document || win)) || false;
		if(doc) {
			doc.open();
			win.frameID = id;
			doc.write(data);
			doc.close();
			win.frameID = id;
			//win.locHash = window.locHash || null;
		}
	} catch (e) { 
		_mN_dy.putContent(id, '', w, h, url, insl);
	}
}
_mN_dy.putContent = function (id, data, w, h, url, insl) {
	var ifr = document.getElementById(id), 
	mainFrame = document.createElement("iframe");
	mainFrame.marginWidth = 0;
	mainFrame.marginHeight = 0;
	mainFrame.scrolling = "no";
	mainFrame.frameBorder = 0;
	mainFrame.height = h;
	mainFrame.width = w;
	mainFrame.id = id+"_n";
	mainFrame.setAttribute('allowTransparency', "true");
	if(mainFrame.attachEvent) { mainFrame.attachEvent('onload', (function (mf) { return function() { _mN._mNVI.trigger(mf); };})(mainFrame)); } else { mainFrame.onload = function (){ var doc = this.contentWindow.document; if(doc && doc.body && doc.body.firstChild) { _mN._mNVI.trigger(this); } } }
	if(url != '' && data == ''){
		mainFrame.src = url;
	}
	ifr.parentNode.insertBefore(mainFrame, ifr);
	if(url != '' && data == ''){
		mainFrame.parentNode.removeChild(ifr);
		return;
	}
	
	var win = mainFrame.contentWindow || mainFrame.contentDocument,
	doc = (win && (win.document || win)) || false;
	if(doc) { 
		try {
			if(/msie/.test(navigator.userAgent.toLowerCase())){
				throw 10;
			}
			doc.open();
			win.frameId = id+"_n";
			doc.write(data);
			doc.close();
			win.frameId = id+"_n";
			//win.locHash = window.locHash || null;
		} catch (e) { 
			win.data = data;
			doc.location.replace('javascript:window["data"];');
		}
		if(insl && insl == '1'){
			_mN_dy.inttAd && _mN_dy.inttAd.init && _mN_dy.inttAd.init(mainFrame);
		}
		mainFrame.parentNode.removeChild(ifr);
	}
}; _mN_dy["ha_358561571"] = (function(){ var id = _mN_mc_frameID+"_n"; return function (){  if(document.getElementById(id)){document.getElementById(id).style.display="none";}};})(); _mN_dy.getContent(_mN_mainCont, iframeURL, '200', '200', _mN_mc_frameID, '0');} catch (err){
					var _mNerrStacktrace = '';
					if (err.stack) {_mNerrStacktrace = err.stack;}
					else if (err.s) {_mNerrStacktrace = err.s;}
					else if (err.stacktrace) {_mNerrStacktrace = err.stacktrace;}
					else _mNerrStacktrace = 'No StackTrace';
					
					var _mNobjTrace = '';
					for ( var x in err) {
						if (err.hasOwnProperty && err.hasOwnProperty(x)) {
							_mNobjTrace += x + " : '" + err[x] + "',";  
						}
					}
					
					var _mNurlsrc = 'http://qsearch.media.net/errping.php?&msg='+encodeURIComponent(_mNerrStacktrace)+'&err='+encodeURIComponent(err)+'&errObj='+encodeURIComponent(_mNobjTrace)+'&script=DynamicLayer&cid=8CUFLK5I3&crid=358561571';
					var _mNImgx  = new Image();
					_mNImgx.src = _mNurlsrc ;
			}
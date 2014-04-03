/*
 * JSMin
 * Javascript Compressor
 * http://www.crockford.com/
 * http://www.smallsharptools.com/
*/

var clickdensityCommon;function ClickDensityCommon(){this.recorderUrl=null;this.clickdensityVersion=2011062101;this.pageId=null;this.SessionID=null;this.siteId=null;this.jSite='j.clickdensity.com';this.rSite='r.clickdensity.com';this.recorderUrl=(window.location.protocol==="https:"?'https://':'http://')
+this.rSite+"/Default.aspx?version="+this.clickdensityVersion+"&";this.loadScript=function(url){if((window.location.protocol=="http:")||(window.location.protocol=="https:")){var scriptTag=document.createElement("script");scriptTag.setAttribute("type","text/javascript");scriptTag.setAttribute("src",url);document.getElementsByTagName("head")[0].appendChild(scriptTag);return true;}
else{return false;}};this.loadJS=function(){if(window.location.protocol=="https:"){this.loadScript('https://'+this.jSite+'/clicks.js');}
else{this.loadScript('http://'+this.jSite+'/clicks.js');}};this.getCookie=function(sName){var aCookie=document.cookie.split("; ");for(var i=0;i<aCookie.length;i++){var aCrumb=aCookie[i].split("=");if(sName==aCrumb[0]){return aCrumb[1];}}
return null;};this.createSession=function(){var referrerPath='';var referrerQS='';try{var referrer=document.referrer.split('?');referrerPath=referrer[0];referrerQS=referrer[1]=='undefined'?null:referrer[1];}
catch(error){}
this.fontSize=this.getFontSize();var paramString='';if(null!==this.siteID&&undefined!==this.siteID){paramString+='siteID='+this.siteId+'&';}
paramString+='srx='+window.screen.width+'&sry='+window.screen.height+'&pageHost='+window.location.hostname+'&referrerPath='+referrerPath+'&referrerQS='+referrerQS;if(this.pID==null){paramString+='&page='+encodeURIComponent(window.location.pathname+window.location.search);}else{paramString+='&pageID='+this.pageId;}
if(!isNaN(this.fontSize)){paramString+='&fs='+this.fontSize;}
return this.sendData(paramString);};this.getFontSize=function(){var bodyEl=document.body;var docEl;if(typeof bodyEl.document=='undefined'){docEl=bodyEl.ownerDocument;}else{docEl=bodyEl.document;}
var divTmp=docEl.createElement("div");divTmp.style.visibility="hidden";divTmp.style.position="absolute";divTmp.style.left="0px";divTmp.style.top="0px";divTmp.style.height="1px";divTmp.style.width="10em";divTmp.style.margin="0px";divTmp.style.padding="0px";bodyEl.appendChild(divTmp);var divWidth=parseInt(divTmp.offsetWidth/10);bodyEl.removeChild(divTmp);return divWidth;};this.sendData=function(paramString){return this.loadScript(this.recorderUrl+paramString);};this.setSession=function(sessID,pgID){this.SessionID=sessID;document.cookie="CDSessionID="+sessID+"; ";if(this.pageId==null){this.pageId=pgID;}
if(this.SessionID>0){this.loadJS();}
return null;};}
function clickdensity_init(){try{if(arguments.callee.done){return;}
arguments.callee.done=true;if(typeof(clickdensity_siteID)=='undefined'){if('undefined'===typeof(siteID)){clickdensity_siteID=null;}else{clickdensity_siteID=siteID;}}
if(typeof(clickdensity_keyElement)=='undefined'){clickdensity_keyElement=keyElement;}
if(typeof(clickdensity_hoverMapRecording)=='undefined'){clickdensity_hoverMapRecording=true;}
if(typeof(clickdensity_pageID)=='undefined'&&typeof(pageID)!='undefined'){clickdensity_pageID=pageID;}
clickdensityCommon=new ClickDensityCommon();if(typeof(clickdensity_pageID)!='undefined'){clickdensityCommon.pageId=clickdensity_pageID;}
if(typeof(clickdensity_siteID)!='undefined'){clickdensityCommon.siteId=clickdensity_siteID;}
if(typeof(clickdensity_sessionID)!='undefined'){clickdensityCommon.SessionID=clickdensity_sessionID;}else{clickdensityCommon.SessionID=clickdensityCommon.getCookie("CDSessionID");}
if(clickdensityCommon.SessionID==null){clickdensityCommon.createSession();}
else{if(clickdensityCommon.SessionID>0){clickdensityCommon.loadJS();}}}
catch(e)
{}}
var clickdensity_DomLoaded={onload:[],loaded:function(){if(arguments.callee.done){return;}
arguments.callee.done=true;for(i=0;i<clickdensity_DomLoaded.onload.length;++i){clickdensity_DomLoaded.onload[i]();}},load:function(fireThis){this.onload.push(fireThis);if(document.addEventListener){document.addEventListener("DOMContentLoaded",clickdensity_DomLoaded.loaded,null);}
if(/KHTML|WebKit/i.test(navigator.userAgent)){var _timer=setInterval(function(){if(/loaded|complete/.test(document.readyState)){clearInterval(_timer);delete _timer;clickdensity_DomLoaded.loaded();}},10);}
var oldOnLoad=window.onload;if(typeof oldOnLoad!='function'){window.onload=clickdensity_DomLoaded.loaded;}
else{window.onload=function(){oldOnLoad();clickdensity_DomLoaded.loaded();};}}};var clickdensity;try{clickdensity_DomLoaded.load(clickdensity_init);}
catch(e)
{}

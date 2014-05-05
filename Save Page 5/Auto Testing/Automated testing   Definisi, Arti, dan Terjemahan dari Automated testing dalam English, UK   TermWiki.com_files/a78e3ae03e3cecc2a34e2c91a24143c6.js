/* jquery-1.4.2;TWNewTerms1;TWNewTerms2;TWNewTerms3;TWNewTerms4;TWNewTerms5;buildShare;terms-left;getOtherIndustriesPicturesPart;recently_talks_id;topic22;getTermDetail;termDefinition;TWNewTerms;buildSimpleImages;checkmobile;header;autocomplete;search;mediawiki;termwiki;jquery_ui;editclass;chatclass;floatbox;twproject;tw_l10n;tw_comment;user_profile;wall;roundabout;TWForums;twlanguageflag;MTPlugin;addtermform;twComments;personalTopMenu */
/* filename: common/jquery-ui/js/jquery-1.4.2.min.js weight: 1*/
/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);

/* filename: /common/EditClass.js weight: 1*/
// JavaScript Document

var editor = function(){ 
	var ajaxRequestUrl = wgServer + "/Special:TermWiki_Ajax?action=TWAjax&ClassName=TermWiki_ClientEditProperty";	
	function getKeyCode(e) {
		return e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
	}
	
	function htmlEncode(str) {   
		if(str == null || str.length == 0) return ""; 
		var s = str.toString();	
		s = s.replace(/&/g, "&amp;");   
		s = s.replace(/</g, "&lt;");   
		s = s.replace(/>/g, "&gt;");   
		s = s.replace(/\'/g, "&apos;");   
		s = s.replace(/\"/g, "&quot;");   
		return s;   
	}
	
	function htmlDecode(str) { 
		if(str == null || str.length == 0) return ""; 
		var s = str.toString();		
		s = s.replace(/&amp;/g, "&");   
		s = s.replace(/&lt;/g, "<");   
		s = s.replace(/&gt;/g, ">");   
		s = s.replace(/&apos;/g, "\'");   
		s = s.replace(/&quot;/g, "\"");   
		return s;   
	}
	
	function object2string(obj){
		var result = [];
		if(typeof obj == "string" || obj == null) {
			return obj;
		}
		if(typeof obj == "object"){
			if(!obj.sort){
				result[0] = "{";
				for(var i in obj){
					result[result.length] = i;
					result[result.length] = ":";
					result[result.length] = object2string(obj[i]);
					result[result.length] = ",";
				}
				result[result.length - 1] = "}"
			}else{
				result[0] = "[";
				for(var i = 0; i < obj.length; i++){
					result[result.length] = object2string(obj[i]);
					result[result.length] = ",";
				}
				result[result.length - 1] = "]";
			}
			return result.join("");
		}
		return obj.toString();
	}
	
	function object_from_json(str){
		var r = null;	
		try {
			eval("r = " + str + ";");
		}
		catch(e) {
			return null;
		}
		return r;
	}
	
	function getElementsByClass(object, tag, className) {
		var o = object.getElementsByTagName(tag);
		for ( var i = 0, n = o.length, ret = []; i < n; i++) {
			if (o[i].className == className) ret.push(o[i]);
		}
		if (ret.length == 1) ret = ret[0];
		return ret;
	}
	
	function CacheField(key, value) {
		this.key 	= key;
		this.value 	= value;
	}
	
	CacheField.prototype = {
		getKey : function() {
			return this.key;
		},
		
		get : function() {
			return this.value;
		},
		
		set : function(key, value) {
			this.key 	= key;
			this.value 	= value;
		}
	}
	
	String.prototype.Trim = function() {
		return this.replace(/(^\s*)|(\s*$)/g, '');
	}

	function Fields(id, title) {
		this.fields			= [];
		this.count			= this.fields.length;	
		this.savebutton		= null;
		this.cancelbutton	= null;
		this.viewbutton 	= null;
		this.bar			= null;
		this.articleId 		= wgArticleId;
		this.namespace		= wgNamespaceNumber;
		this.status			= false;			/* ==== Save state ==== */
		this.isSource		= wgNamespaceNumber == 1180 ? true : false;
		this.dialog			= null;
		this.cache			= [];		
	}

	Fields.prototype = {
		save : function() {
			var vali_result = true;
			var data = {};
			data.property = {};
			data.state = "save";
			for(var i = 0; i< this.fields.length; i++) {
				if(typeof this.fields[i] != 'undefined' && typeof this.fields[i].field != 'undefined' && this.fields[i].field != null) {
					if(this.fields[i].changed) {
						if(this.fields[i].validate()) {
							data.property[this.fields[i].field.name.replace(/ /g, '_')] = this.fields[i].getValue();
						}
						else {
							vali_result = false;	
						}
					}
				}
			}
			
			if(!vali_result) return false;
			this.status = true;

			$.ajax({
				type 		: "POST",
				url  		: ajaxRequestUrl + "&key=" + this.articleId,
				data		: data,
				beforeSend 	: function() {
					editor.fields.hideButtons();
					editor.fields.createStatusBar();
				},
				success		: this.redirect
			});
		},
			
		view : function() {
			var self = this;
			if(this.cache.length == 0) {
				var data = {};
				data.property = {};
				data.state = "view";
				$.ajax({
					type 		: "POST",
					url  		: ajaxRequestUrl + "&key=" + this.articleId,
					data		: data,
					success		: function(result) {
						self.showSource(result);
					}
				});
			}
			else {
				self.showSource(self.cache[0]);
			}
		},
		
		showSource : function(result) {
			if(this.cache.length == 0) this.cache[0] = result;
			this.dialog = $('<div id="dialogSourceTitle"></div>');
			this.dialog.html(result);
			$("body").append(this.dialog);
			$("#dialogSourceTitle").dialog({
			    width: 580,
			    height: 400
			});
		},
		
		redirect : function(result) {
			var text = twGetL10nString('edit_class_redirect_label');
			editor.fields.bar.text(text);
			self.location.href = location.href;
		},
		
		cancel : function() {
			for(var i = 0;  i < this.fields.length; i++) {
				if(typeof this.fields[i] != 'undefined' && typeof this.fields[i].field != 'undefined' && this.fields[i].field != null) {
					this.fields[i].undo();
				}
			}
		},
		
		redo : function() {
			for(var i = 0;  i < this.fields.length; i++) {
				if(typeof this.fields[i] != 'undefined' && typeof this.fields[i].field != 'undefined' && this.fields[i].field != null) {
					this.fields[i].redo();
				}
			}
		},
			
		edit : function(fieldName) {
			for(var i = 0; i < this.fields.length; i++) {
				if(this.fields[i].field.name == fieldName) {
					this.fields[i].executeAction();
				}
			}
		},
		
		showButtons : function(field) {	
			if(!this.checkFieldStatus()) return;
			
			if(!this.isSource && this.viewbutton == null) {
				this.createViewSourceButton();
			} 
			
			if(this.savebutton == null) {
				this.createSaveButton();
			}
			
			if(this.cancelbutton == null) {
				this.createCancelButton();
			}
		},
			
		checkFieldStatus : function() {
			for(var i = 0;  i < this.fields.length; i++) {
				if(this.fields[i].field.datasource) {
					if(!this.fields[i].success) {
						return false;
					}
				}
			}
			return true;
		},
		
		hideButtons : function() {
			this.savebutton.remove();
			this.savebutton = null;
			this.cancelbutton.remove();
			this.cancelbutton = null;
			
			if(!this.isSource) {
				this.viewbutton.remove();
				this.viewbutton = null;
			}
		},
		
		createStatusBar	: function() {
			this.bar = $("<span></span>").css({
				"margin-left" : "10px",
				"color" : "#f00",
				"font-weight" : "bold"
			});
		
			var text = twGetL10nString('edit_class_saving_label');
			this.bar.text(text);
			
			$('#editorButtonsContainer').css('display', '');
			$('#editorButtonsContent').append(this.bar);
		},

		createSaveButton : function() {
			var text = twGetL10nString('edit_class_save_button_text');
			this.savebutton = $("<input  type='button' value=' " + text + " ' />");
			this.savebutton.click(function() {
				editor.save();
			});
			$('#editorButtonsContainer').css('display', '');
			$('#editorButtonsContent').append(this.savebutton);
		},
			
		createCancelButton : function() {
			var text = twGetL10nString('edit_class_cancel_button_text');
			this.cancelbutton = $("<input type='button' value=' " + text + " ' />").css({
				"margin-left" : "10px"
			});
			
			this.cancelbutton.click(function() {
				$('#editorButtonsContainer').css('display', 'none');
				editor.fields.hideButtons();
				editor.cancel();
                $("#improve-definition-button").show();
                
                $(".termrate").show();
                if($("#auto_generated_improve").length>0){
                	$("#auto_generated_improve").show();
                }                
			});
			
			$('#editorButtonsContainer').css('display', '');
			$('#editorButtonsContent').append(this.cancelbutton);
		},
			
		createViewSourceButton : function() {
			var text = twGetL10nString('edit_class_view_button_text');
			this.viewbutton = $("<input type='button' value=' " + text + " ' />").css({
				"margin-right" : "360px"
			});
				
			this.viewbutton.click(function() {
				editor.fields.view();
			});
			
			$('#editorButtonsContainer').css('display', '');
			//$('#editorButtonsContent').append(this.viewbutton);
		},
		
		load : function() {
			var fields = $(".allowOnlineEdit");
			var allow = true;
			//if(wgUserName == null || wgUserName == "" || typeof wgUserName == 'undefined') {
			if('1'!=getCookie('devislogin')){
				allow = false;
			}

			for(var i = 0; i < fields.length; i++) {
				var title = $(fields[i]).attr('field');

				if(typeof title != 'undefined') {
					var aField = editor.allowFields.isAllowField(title);
					if(typeof aField == 'object') {
						this.fields[i] = new Field(aField, i, fields[i], allow, this);
					}
					else{
						this.fields[i] = new Field(null, i, fields[i], false, this);
					}
					this.fields[i].init();
				}
			}
		},
		
		set : function(name) {
			for(var i = 0; i< this.fields.length; i++) {
				if(typeof this.fields[i] != 'undefined' && typeof this.fields[i].field != 'undefined' && this.fields[i].field != null && this.fields[i].field.parent != null) {
					if(this.fields[i].field.parent.name == name) {
						this.fields[i].setValue();
					}
				}
			}
		},
		
		refresh : function(name) {
			for(var i = 0; i< this.fields.length; i++) {
				if(typeof this.fields[i] != 'undefined' && typeof this.fields[i].field != 'undefined' && this.fields[i].field != null && this.fields[i].field.parent != null) {
					if(this.fields[i].field.parent.name == name) {
						this.fields[i].success = false;
					}
				}
			}
		},
			
		validate_wordcount : function(name) {
			var _field = this.find(name);
			if(_field) { _field.validate_wordcount(); }
		},
		
		find : function(name) {
			for(var i = 0; i< this.fields.length; i++) {
				if(typeof this.fields[i] != 'undefined' && typeof this.fields[i].field != 'undefined' && this.fields[i].field != null) {
					if(this.fields[i].field.name == name) {
						return this.fields[i];
					}
				}
			}
			return null;
		}	
	}
	
	function Field(field, id, row, allow, parent) {
		
		this.id 				= id;														/* ==== current row id ==== */
		this.field				= field;													/* ==== allow edit property object ==== */
		this.allowEdit 			= allow;													/* ==== can edit this field ==== */
		this.state				= false;													/* ==== field editing state ==== */
		this.row				= row;														/* ==== current row ==== */
		this.parent				= parent;

		this.control 			= null;														/* ==== editor control ==== */
		this.url 				= ajaxRequestUrl;											/* ==== ajax request url ==== */
		this.ov					= [];
		this.pov				= [];
		this.value 				= null;
		this.text				= "";
		this.isT				= false;
		
		this.element			= this.getElementByClassName('div', 'atts_inlineEditCell');	/* ==== current can edit cell ==== */
		//this.target				= this.getElementByClassName('div', 'atts_inner');			/* ==== current show field value controls ==== */
		this.target				= getElementsByClass(this.element, 'div', 'atts_inner');			/* ==== current show field value controls ==== */
		this.element.parent 	= this;
		this.width 				= $(this.element).width();

		this.data 				= [];														/* ==== data source ==== */ 
		this.success			= false;													/* ==== from server get data source successful ==== */
		this.changed			= false;													/* ==== current field value changed ====*/
		this.dialog				= null;
		this.load_control		= $("<img src='../skins/common/LanguageSpark/loading.gif' />");
		this.loading			= false;
		
		this.error_control		= null;
		this.split_char			= ";";
		
		this.element.onmouseover = function() {
			return;
			if(this.parent.allowEdit) {
				this.className = "inlineAllowEdit";
				if(this.parent.field)
				if(this.parent.field.name == "Definition") {
					if(!this.parent.state) {
						if(this.parent.changed) {
							$("#editor_press_save_id").show();
							$("#editor_tip_id").hide();
						}
						else {
							$("#editor_tip_id").show();
							$("#editor_press_save_id").hide();
						}
					}
					else {
						$("#editor_press_save_id").show();
						$("#editor_tip_id").hide();
					}
				}
			}
			else {
				this.className = "inlineLock";
				if(this.parent.field && this.parent.field.name == "Definition") {
					$("#editor_nologin_id").show();
					$("#editor_tip_id").hide();
				}
			}	
		}
		
		this.element.onmouseout = function() {
			return;
			this.className = "inlineAllowEditOff";
			$("#editor_tip_id").hide();
			$("#editor_nologin_id").hide();
			if(this.parent.field)
			if(!this.parent.state && this.parent.field.name == "Definition") {
				if(!this.parent.changed) {
					$("#editor_press_save_id").hide();
				}
			}
		}
		
		this.element.ondblclick = function(event) {
			if(typeof event != "boolean") return;
			if(editor.fields.status) return false;
			if(this.parent.loading) return false;
			if(!this.parent.allowEdit) return false;
			if(this.parent.isT) return false;
			
			this.parent.closeMessage();
			if(this.parent.field.parent != null && this.parent.field.parent.field != null) {
				if(this.parent.field.parent.field.value == "") this.parent.edit();
			}
			
			if(this.parent.field.datasource && !this.parent.success){
				this.parent.ajaxRequest();
			}
			else
				this.parent.edit();
		}
	}
	
	Field.prototype = {	
		executeAction : function() {
			this.element.ondblclick(true);
			this.showTip();
		},
			
		LoginTip : function() {	
			$("#editor_nologin_id").show();
			var timer = setTimeout(function() {
				$("#editor_nologin_id").hide();
				clearTimeout(timer);
			}, 3000);
		},
			
		showTip : function() {
			if(this.allowEdit) {
				if(this.field)
				if(this.field.name == "Definition") {
					$("#editor_press_save_id").show();
				}
			}
			else {
				this.LoginTip();
			}
		},

		init : function() {
			if(this.field != null) {
				this.field.set(this);
				switch(this.field.type) {
					case "textarea":
						this.ov	 = $(this.target, this.element).html();	
						this.value = this.ov;
						this.pov = this.value;
						break;
					case "select":
					case "multiselect":
						this.isT = false;
						/*var d = {};
						d.ns	 = this.parent.namespace;
						d.values = $(this.target, this.element).text();
						d.property = this.field.name.replace(/ /g, "_");
						$.ajax({
							parent		: this,
							type 		: "POST",
							url  		: this.url + "&state=translate",
							data		: d,
							success		: this.getProperty
						});*/

							var colls = $(this.target, this.element).text().split(', ');
							var tempCache = [];
							$.each(colls, function(i, n) {
								if(n) {
									var o = new CacheField(n, n);
									tempCache.push(o);
								}
							});

							this.ov = tempCache;
							if(this.ov instanceof Array) {
								this.value = "";
								for(var i = 0; i < this.ov.length; i++) {
									if(this.value == "") {
										this.value = this.ov[i].getKey();
									}
									else {
										this.value += ", " + this.ov[i].getKey(); 
									}
								}
							}
							else {
								this.value = this.ov;	
							}
							this.pov = this.value;							
						break;
					default:
						this.ov	 = $(this.target, this.element).text();	
						this.value = this.ov;
						this.pov = this.value;
						break;
				}
			}
		},
		
		getElementByClassName : function(tag, className) {
			var o = this.row.getElementsByTagName(tag);
			for(var i = 0; i < o.length; i++) {
				//if(o[i].className.indexOf(className)) return o[i];
				if(o[i].className == className) return o[i];
			}
			return false;
		},
		
		getProperty : function(result) {
			this.parent.isT = false;
			var oResult = object_from_json(result);

			var colls = oResult.data;
			var tempCache = [];
			$.each(colls, function(i, n) {
				if(n.key) {
					var o = new CacheField(n.key, n.value);
					tempCache.push(o);
				}
			});
			
			this.parent.ov = tempCache;
			if(this.parent.ov instanceof Array) {
				this.parent.value = "";
				for(var i = 0; i < this.parent.ov.length; i++) {
					if(this.parent.value == "") {
						this.parent.value = this.parent.ov[i].getKey();
					}
					else {
						this.parent.value += ", " + this.parent.ov[i].getKey(); 
					}
				}
			}
			else {
				this.parent.value = this.parent.ov;	
			}
			this.parent.pov = this.parent.value;
		},

		parseValue : function(result) {
			this.parent.load_control.detach();
			this.parent.loading = false;
			this.parent.success = true;

			$(this.parent.control).remove();
			if(this.parent.field.format == "text") {
				this.parent.data = result;
				this.parent.value = result;
				this.parent.pov = this.parent.value;
			}	
			else {
				var oResult = object_from_json(result);
				if(oResult == null) return;
				var colls = oResult.data;
				var _self = this;
				this.parent.data = [];
				$.each(colls, function(i, n) {
					if(n.key) {
						_self.parent.data.push(new CacheField(n.key, n.value));						
					}
				});
			}
			
			this.parent.edit();
		},

		ajaxRequest : function() {
			var params = {};
			if(this.field.parent != null && this.field.parent.field != null) {
				params.parent = this.field.parent.name;
				params.pv = "";
				if(this.field.parent.field.value) {
					params.pv = this.field.parent.field.value.toString();
				}
			}
			params.format = this.field.format;
			params.key = this.parent.articleId;
			params.ns  = this.parent.namespace;
			$.ajax({
				parent	:  this,
				type 	: "GET",
				url  	: this.url + "&state=get&property=" + this.field.name. replace(/ /g, "_"),
				data	: params,
				beforeSend 	: function(){
					this.parent.loading = true;
					this.parent.target.style.display = "none";
					$(this.parent.element).append(this.parent.load_control);
				},
				success	:  this.parseValue
			});
		},
	
		getValue : function() {
			switch(this.field.type) {
				case "textarea":
				case "select":
				case "multiselect":
					return this.value.toString();
				default:
					//return $(this.target, this.element).text();
					return this.value.toString();
			}
		},
		
		setValue : function() {
			$(this.target).html("");
			this.success = false;
			this.changed = true;
		},
		
		edit : function() {
			if(this.allowEdit && !this.state) {
				this.state = true;
				this.create();	
				this.showTip();
				editor.fields.showButtons();
			}
		},

		complete : function() {
			this.state = false;
			if(this.control && this.control != 'undefined') {
				this.value = this.control.val();
				
				if(typeof this.control.val() == 'object' && this.control.val()) {
					this.value = this.control.val().join(", ");
				}
				this.changed = true;
				return;
				
				if(this.field.callback && this.validateWikiTag()) {
					var data = {};
					data.key = this.parent.articleId;
					data.ns	 = this.parent.namespace;
					data.newValue = this.value;					
					$.ajax({
						parent		: this,
						type 		: "GET",
						url  		: this.url + "&state=parse",
						data		: data,
						beforeSend 	: function(){
							this.parent.loading = true;
							this.parent.control.hide();
							this.parent.target.style.display = "none";
							$(this.parent.element).append(this.parent.load_control);
							
						},
						success 	: function(result) {
							this.parent.load_control.detach();
							this.parent.loading = false;
							if(this.parent.compare(this.parent.ov, result)) {
								editor.fields.set(this.parent.field.name);
								this.parent.changed = true;
								editor.fields.showButtons();
							}

							if(this.parent.pov != this.parent.value) {
								editor.fields.set(this.parent.field.name);
								this.parent.changed = true;
								editor.fields.showButtons();
							}
							this.parent.pov = this.parent.value;
							this.parent.target.style.display = "";
							$(this.parent.target).html(result);						
						}
					});
				}
				else{
					this.control.hide();
					if(this.compare(this.ov, this.value)) {
						editor.fields.set(this.field.name);
						this.changed = true;
						//editor.fields.showButtons();
					}

					if(this.pov != this.value) {
						editor.fields.set(this.field.name);
						this.changed = true;
						//editor.fields.showButtons();
					}

					this.pov = this.value;
					this.target.style.display = "";
					var newText = this.Translate(this.value);
					$(this.target).text(newText);
				}
			}
		},
		
		compare : function(ov, nv, type) {
			if (ov.constructor == Array) {
				var otemp = "";
				for(var i = 0; i < ov.length; i++) {
					if(this.ov[i].get() == "") continue;
					if(otemp == "") otemp = ov[i].getKey();
					else otemp += ", " + ov[i].getKey();
				}
				if(otemp != nv) return true;
			}
			else {
				if(ov != nv) return true;
			}
			return false
		},
		
		Translate : function(text) {
			if(text == "" || text == null) return "";
			if(typeof this.data == "string") return text;
			if(this.data.length <= 0) return text;

			var newText = "";
			var propArray = text.split(/, /);
			if(jQuery.isArray(propArray)) {
				for(var i = 0; i < this.data.length; i++) {
					var tText = this.data[i].get();					
					if(jQuery.inArray(this.data[i].getKey(), propArray) == -1) {
					}
					else {
						if(newText == "")
							newText = tText;
						else 
							newText += ", " + tText;
					}
				}
				return newText;
			}
			return text;
		},
		
		cancel : function() {
			this.state = false;
			this.changed = false;
			if(this.control && this.control != 'undefined') {
				this.control.hide();
				this.target.style.display = "";
			}
		},
		
		undo : function() {
			this.closeMessage();
			$("#editor_press_save_id").hide();
			this.changed = false;
			this.value = this.ov;
			this.state = false;
			switch(this.field.type) {
				case "textarea":
					if(this.field.callback) {
						this.value = this.data;
						$(this.target).html(this.ov);
					}
					else {
						$(this.target).text(this.ov);
					}
					break;
				case "select":
				case "multiselect":		
					var tempText = "";
					if(this.ov != null) {
						for(var i = 0; i < this.ov.length; i++) {
							if(tempText == "") {
								tempText = this.ov[i].get();
								this.value = this.ov[i].getKey();
							}
							else {
								this.value += ", " + this.ov[i].getKey();
								tempText += ", " + this.ov[i].get();	
							}
						}
					}
					$(this.target).text(tempText);
					break;
				default:
					$(this.target).text(this.ov);
					break;
			}
			this.pov = this.value;
			this.control.hide();
			this.target.style.display = "";
			editor.fields.refresh(this.field.name);
		},
		
		undo2 : function() {
			this.closeMessage();
			$("#editor_press_save_id").hide();
			this.changed = false;
			this.value = this.ov;
			switch(this.field.type) {
				case "textarea":
					if(this.field.callback) {
						this.value = this.data;
						$(this.target).html(this.ov);
					}
					else {
						$(this.target).text(this.ov);
					}
					break;
				case "select":
				case "multiselect":		
					var tempText = "";
					if(this.ov != null) {
						for(var i = 0; i < this.ov.length; i++) {
							if(tempText == "") {
								tempText = this.ov[i].get();
								this.value = this.ov[i].getKey();
							}
							else {
								this.value += ", " + this.ov[i].getKey();
								tempText += ", " + this.ov[i].get();	
							}
						}
					}
					$(this.target).text(tempText);
					break;
				default:
					$(this.target).text(this.ov);
					break;
			}
			this.pov = this.value;
			editor.fields.refresh(this.field.name);
		},
		
		redo : function() {
			this.target.innerHTML = this.value;
		},
		
		create : function() {	
			var parent = this;
			this.control = $("#atts" + this.id);

			if(this.control.length == 0) {
				switch(this.field.type) {
					case "text":
						this.createText();
						break;
					case "textarea":
						this.createTextArea();
						break;
					case "select":
						this.createSelect();
						break;
					case "multiselect":
						this.createMultiSelect();
						break;
				}
			}
			else {
				
				switch(this.field.type) {
					case "textarea":
						$(this.control).val(this.value);
						break;
					case "multiselect":
						this.createOptions();
						break;
					default:
						$(this.control).val($(this.target, this.element).text());
						break;
				}
				
				this.control.css("display", "");
				this.target.style.display = "none";
				$(this.element).append(this.control); 
				this.control.focus();
				return;
			}
			
			if(this.field.mode.toLowerCase() == 'dialog') {
				this.createDialog();
				this.dialog = document.getElementById('dialogPropertySetting');
				this.control.val($(this.target).text());
				this.target.style.display = "";
				$(this.dialog).append(this.control); 
				this.control.focus();
			}
			else {
				this.control.blur(function() {	
					parent.complete();
				});
				
				if(this.field.type != "textarea") {
					this.control.keypress(function(e) {
						var keyCode = getKeyCode(e);
						if (keyCode == 13){
							parent.complete();
						}
					});
				}

				this.target.style.display = "none";
				$(this.element).append(this.control); 
				this.control.focus();
			}
		},
				
		createText : function() {
			this.control = $("<input type='text' id='atts" + this.id + "' value='" + this.value + "'>").css({
				"width" : "100%"
			});
			this.control.val($(this.target).text());
		},
		
		createTextArea : function() {
			if(this.field.datasource) {
				this.control = $("<textarea cols='60' style='width:100%;' rows='8' id='atts" + this.id + "'>" + this.data + "</textarea>");
			}
			else 
				this.control = $("<textarea cols='60' style='width:100%;' rows='8' id='atts" + this.id + "'>" + this.value + "</textarea>");
		},
		
		createSelect : function() {
			this.control = $("<select name='atts" + this.id + "' id='atts" + this.id + "'></select>").css({"width":"200px"});
			if(this.field.datasource) {
				for( var i = 0; i < this.data.length; i++) {
					this.control.append($("<option value='" + this.data[i].key + "'>" +  this.data[i].value + "</option>"));
				}
			}
			this.control.val($(this.target).text());
		},
		
		createMultiSelect : function() {
			this.control = $("<select name='atts" + this.id + "' id='atts" + this.id + "' size='5' multiple='multiple'></select>").css({
				"width":"200px"
			});
			if(this.field.datasource) {
				this.createOptions();
			}
		},
		
		createOptions : function() {
			this.control.empty();

			var propArray;
			if(this.value && this.value.length > 0) {
				propArray = this.value.split(/, /); 
			}
			
			if(jQuery.isArray(propArray)) {
				for( var i = 0; i < this.data.length; i++) {		
					if(jQuery.inArray(this.data[i].getKey(), propArray) == -1) {
						this.control.append($("<option value='" + this.data[i].key + "'>" +  this.data[i].value + "</option>"));	
					}
					else {
						this.control.append($("<option value='" + this.data[i].key + "' selected='selected'>" +  this.data[i].value + "</option>"));	
					}
				}
			}
			else {
				for( var i = 0; i < this.data.length; i++) {
					this.control.append($("<option value='" + this.data[i].key + "'>" +  this.data[i].value + "</option>"));	
				}
				this.control.val($(this.target).text());
			}
		},

		createDialog : function() {
			var parent = this;
			var isCancel = true;
			$("#dialogPropertyTitle").html("Property :" + this.field.name);
			$("#dialogPropertySetting").dialog({
				position: 'center',
				draggable: true,
				title: this.field.name,
				modal: true,
				width: 560,
				height:400,		
				close: function(){    
					if(isCancel) parent.cancel();
					else parent.complete();
				},
				buttons: {
					OK: function() {
						isCancel = false;
						$(this).dialog('close');
					},
					Cancel: function() {
						$(this).dialog('close');
					}
				}
			});
		},		
		
		validate : function() {
			this.closeMessage();
			var errorMessage = "";
			if(this.field.canEmpty) return true;
			
			if(this.getValue() == "") {
				switch(this.field.type) {
					case "textarea":
					case "text":
						errorMessage = "Please enter a value for ";
						break;
					case "select":
					case "multiselect":
						errorMessage = "Please select an ";
						break;
				}
				this.showMessage(errorMessage + this.field.name);
				return false;
			}
			return true;
		},
			
		validate_wordcount : function() {
			if(this.field) {
				this.element.ondblclick();
			}
		},
		
		validateTag : function() {
			var regex = new RegExp('<(a|div|ul|hr|h|li|ol|dl|dd|big|small).*?>', 'gi'); 
			return regex.test(this.ov);
		},
		
		validateWikiTag : function() {
			var regex = new RegExp('\\[{1,2}|\\]{1,2}|\'{1,}|={2,4}|-{4}|#{1,}|\\*{1,2}|:{1}|<small.*?>|<big.*?>|[\s]', 'gi');  	
			return regex.test(this.value);
		},
		
		showMessage : function(mess) {
			var container = "";
			container += "<div class='info' style='width:400px; position:relative; border:2px solid #D59799;'>";
            container += "<div id='editor_message_container_id' style='background-color:#FEF5F5;'>";
            container += "	<div class='info-pop-c' style='padding:4px;'>";
            container += "		<div class='cont' id='editor_message_id'>" + mess + "</div>";
            container += "  </div>";
            container += "</div></div>";
			this.error_control = $(container);
			$(this.element).append(this.error_control);
		},
		
		closeMessage : function() {
			if(this.error_control != null) {
				$(this.error_control).remove();
			}
		}
	}
	
	function allowEditFields() {
		this.fields = [];
		this.count = this.fields.length;
	}
	
	allowEditFields.prototype = {
		add : function( field ) {
			this.fields[this.count] = field;
			this.count++;
		},
		
		isAllowField : function (name) {
			for(var i = 0; i < this.count; i++){
				if(name.toLowerCase() == this.fields[i].name .toLowerCase()) return this.fields[i];
			}
			return false;
		}
	}
	
	function allowEditField(name, type, parent, mode, source, required, regexp, empty, format, callback) {
		this.name 			= name;							/* field name */
		this.type 			= type;							/* show type use text/textarea/select/checkbox/file */
		this.mode 			= mode;							/* show mode use dialog or in page */
		this.datasource		= source;						/* */
		this.parent			= parent;						/* parent field */
		this.required		= required;						/* required field values. */
		this.regexp			= regexp;						/* RegExp string */
		this.canEmpty		= empty;						/* allow field values empty */
		this.child			= null;							/* child field */
		
		this.format			= format == "" ? "" : format;	/* data source format */
		this.callback		= callback;						/* data callback */
		this.field			= null;
	}
	
	allowEditField.prototype = {
		set : function(field) {
			this.field = field;
		}
	}

	return {
		init : function() {
			this.allowFields = new allowEditFields();
			
			/* ==== instance ==== */
			var iField = new allowEditField("Industry", "multiselect",	null, "", true, true,	"", false, "array", false); 
			var icField = new allowEditField("Product Category","multiselect", iField, "", true, 	true, "", false, "array", false);
			var dField = new allowEditField("Domain", "multiselect", null, 	"", true, true, "", false, "array", false);
			
			/* ==== ==== */
			this.allowFields.add(new allowEditField("Translation", 	"text",	null, 	"",		false, 	true, 	"",	false, "text",		false));
			this.allowFields.add(new allowEditField("Definition", 		"textarea",	null, 	"",		true, 	true, 	"",	false, "text", 		true));
			this.allowFields.add(new allowEditField("Part of Speech",	"select",	null, 	"", 	true, 	true, 	"",	false, "array", 	false));
			this.allowFields.add(new allowEditField("Usage Status", 	"select",	null, 	"", 	true, 	true,	"",	false, "array", 	false));
			this.allowFields.add(new allowEditField("Context", 		"textarea",	null, 	"", 	false, 	true,	"", false, "text", 	false));
			this.allowFields.add(iField);
			this.allowFields.add(icField);
			this.allowFields.add(dField);
			this.allowFields.add(new allowEditField("Product", 		"select",	null, 	"", 	true, 	true,	"", false, "array", 	false));
			this.allowFields.add(new allowEditField("Company", 		"select",	null, 	"", 	true, 	true,	"", false, "array", 	false));
			
			this.fields = new Fields();
			this.fields.load();	
			
			$("#improve-definition-button").click(function(){
				editor.edit("Translation");
				editor.edit("Definition");
                $("#improve-definition-button").hide();
                $(".termrate").hide();
                if($("#auto_generated_improve").length>0){
                	$("#auto_generated_improve").hide();
                }                
			});
			
			$("#improve-definition-auto-button").click(function(){
				editor.edit("Translation");
				editor.edit("Definition");
                $("#improve-definition-button").hide();
                $(".termrate").hide();
                $("#auto_generated_improve").hide();                
			});
						
            $("#see_source_def_button").click(function(){
            if($("#atts_source_def").val() == undefined)
            {
            var request_url = ajaxRequestUrl + "&state=getSourceDefinition3&source_id=" + wgArticleId;
            $.ajax({
                type     : "GET",
                url      : request_url,
                success  : function(result) {
                           $("#atts1").before("<textarea id=\"atts_source_def\" rows=\"8\" style=\"width:100%;background-color:#DFDFDF;color:black;border-style:groove\" cols=\"60\" readonly>" + result + "</textarea>"); 
            }              
            });
            }
            else
            {
                $("#atts_source_def").toggle();
            }
            });
		},
		save : function() {
			this.fields.save();
		},
		
		cancel : function() {
			this.fields.cancel();
		},
		
		redo : function() {
			this.fields.redo();
		},
		
		validate_word_count : function(name) {
			this.fields.validate_wordcount(name);
		},
		
		edit:function(fieldName) {
			this.fields.edit(fieldName);
		}
	}
}();

$(document).ready(function(){
	editor.init();
});



var bIsNotChanged = 0;   //  
var bIsMtranslated = 0;
//Translate Definition
$(function(){
	var ajaxRequestUrl = "http://us.csoftsolution.com/Special:TermWiki_Ajax?action=TWAjax&ClassName=TermWiki_ClientEditProperty";	
	//  "ajaxRequestUrl" + "&state=checkdiff&key=CPU&ns=ZS"
	var btTranDef      = $("#btTranslateDefinition");
	var btSourceDef    = $("#btSourceDefinition");
	var tranDef        = $("#tranDefinition");
	var tranDefArea    = $("#translateDefinition");
	var btCancelDef    = $("#btCancelDef");
	var btSaveDef      = $("#btSaveDefinition");
	var NewDefinition  = $("#NewDefinition");

	var bIsSlShowed= 0,  bIsClicked = 0 ,bIsEqual = 0;


	var diffNs = wgCanonicalNamespace;
	var diffTitle = wgTitle;
	var oDefinition = $("textarea[name*='[Definition]']");
	var sDefinition = oDefinition.val();
	if (diffNs == 'Special' && diffTitle == 'AddData') {
		var diffDBKey = window.location.href.match(/\/([^/?]*?)(\?|$)/)[1].split(/:/);

		diffNs    = diffDBKey[0];
		diffTitle = diffDBKey[1];
	}
	if(twLangName[diffNs]) {
		var sDefinitionNote = "Add your " + twLangName[diffNs].replace(/ \([A-Z]+\)$/, "") +" definition here.";
	}
	if (diffNs != twSource)
	{
		btTranDef.click(function(){
			btTranDef.css({display: 'none'});
			tranDef.css('display','');
		});

		btCancelDef.click(function(){
			btTranDef.css({display: ''});
			tranDef.css('display','none');
		});

		// Click event
		oDefinition.click(function(){
		
			if(bIsEqual && !bIsClicked && !bIsMtranslated){
				oDefinition.val("");
				bIsClicked = 1;
				bIsNotChanged = 0 ;
			}
		});

		/**
		* on translation form
		*/
		if (oDefinition[0]) {

			$("#btResetDefinition").click(function(){
					oDefinition.val(sDefinition);
				}
			);

			$("#btMachineTrans").click(function(){
				var sl = twSource;
				var tl =twGetNSS(diffNs);
				//bIsMtranslated = 1;                 
				var sContent = $("#showSDContent").html();
				  
				openGoogleWindows(sContent, sl, tl);
				
				/*
				google.language.translate(sContent, sl, tl, function(result) {
					 if (!result.error) {
						if (result.translation) {
							oDefinition.val(result.translation);
							bIsClicked = 1;
							bIsNotChanged =0;
						}
					}
				});
				*/
			});
		}

		/**
		* on target term
		*/	
		else{

			btSourceDef.click(function(){

					$.get("/Special:TermWiki_Ajax",{action: "TWAjax", ClassName:"TermWiki_ClientEditProperty", state:"getSourceDefinition", ns:diffNs, key: diffTitle, anticache:Math.floor(Math.random()*1000)},
						function(data){
							if (!bIsSlShowed) {
								showDialogMsg("Source definition for " + twRemoveSubscript( diffTitle ) , data);
							}
						}
					);
			});

			$("#btMachineTrans").click(function(){
				var sl = twSource;
				var tl = twGetNSS(diffNs);
				bIsMtranslated = 1;
				tl = tl.replace("ZS", "zh-CN");
				tl = tl.replace("ZT", "zh-TW");
				tl = tl.replace("PT", "pt-PT");

				var content = $("#tranDefinition").prev().find('.atts_inner').html();
				google.language.translate(content, sl, tl, function(result) {
					 if (!result.error) {
						if (result.translation) {
							NewDefinition.val(result.translation);
							bIsClicked = 1;
							bIsNotChanged =0;
						}
					}
				});
			});

			btSaveDef.click(function(){
				if(NewDefinition.val() == ''){
					alert("Please enter the translation");
				}else{
					$.post("/Special:TermWiki_Ajax",{action:"TWAjax",ClassName:"TermWiki_ClientEditProperty", key:wgArticleId ,state:"save", "property[Definition]":NewDefinition.val(),  anticache:Math.floor(Math.random()*1000)},
						function(data){
							tranDef.css('display','none');
							if(data.indexOf('TWTermTPL')>0){
								$("#tranDefinition").prev().find('.atts_inner').html(NewDefinition.val());
								$("#btSourceDefinition").css('display','');
							}
						}
					);
				}
			});
		}
	}

var sn_s = twGetNSS(diffNs);
/*
if (sn_s != twSource) {
	$.get("/Special:TermWiki_Ajax",{action: "TWAjax", ClassName:"TermWiki_ClientEditProperty", state:"checkdiff", ns:diffNs, key: diffTitle, anticache:Math.floor(Math.random()*1000)},
		function(data){
			
				if (data == "true") {
					$("#btTranslateDefinition").css('display','');    // Dispaly translate button 
					bIsEqual = 1;
					bIsNotChanged = 1;
					sDefinition = "";
					oDefinition.val(sDefinitionNote);

				} else {
					// Show S icon
					$("#btSourceDefinition").css('display','');
					if (wgCanonicalNamespace == 'Special')
					{
						oDefinition.val(sDefinitionNote);
						bIsEqual = 1;
						sDefinition = "";
						oDefinition.val(sDefinitionNote);
						bIsNotChanged = 1;
					}
				}
			
		}
	);
	}
	*/
});



function allPrpos ( obj )
{	
	var props = "";
	for ( var p in obj )
	{
		if ( typeof ( obj[p] ) == " function " )
		{
			//obj[p](); 
		} else {
			props += p + " => " + obj[p] + "\n\n";
		}
	}
	//alert ( props );
}





/* filename: /common/twtalk.js weight: 1*/
// JavaScript Document

var twtalks = function(){ 
	var talkAjaxURL = "/Special:TermWiki_Ajax?action=TWAjax&ClassName=TermWiki_Talk";	
	function getKeyCode(e) {
		return e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
	}
	
	function object_from_json(str){
		var _text = str.replace(/\r/ig, "").replace(/\n/ig, ""); 
		var r = null;	
		try {
			eval("r = " + _text + ";");
		}
		catch(e) {
			return null;
		}
		return r;
	}
	
	function CacheField(key, data) {
		this.key 	= key;
		this.data 	= data;
	}

	function twTalks(id, title) {
		this.talks			= [];
		this.talkTitle	 	= wgPageName;
		this.namespace		= wgNamespaceNumber;
		this.url 			= talkAjaxURL;
		var image_url = stylepath + "/common/images/loading.gif";
		this.load_control 	= $("<img src='" + image_url + "' style='margin-left:10px; margin-top:20px;' />");
	}

	twTalks.prototype = {			
		parser : function(result, target) {
			$("#" + target).html(result);
		},
		
		load : function() {
			var rows = $(".tw_talk_reply_class");			
			for(var i = 0; i < rows.length; i++) {
				var id = $(rows[i]).attr('titleid');
				if(typeof id != 'undefined') {
					this.talks[i] = new twTalk(rows[i], id, this);
				}
				this.talks[i].init();
			}

			if(rows.length > 0) {
				jQuery().twRating({ajaxURL : talkAjaxURL, className : ".talk-comment"});
			}
		},
		
		show_form : function(id) {
			if(this.talks.length > 0) {
				for(var i = 0; i < this.talks.length; i++) {
					if(id == this.talks[i].aId) {
						this.talks[i].show_form();
					}
				}
			}
		},
			
		ajax_call : function(action, args, target) {
			var params = {};
			var _self = this;
			params.action = "TWAjax";
			params.ClassName = "TermWiki_Talk";
			params.twfAction = action;
			params.namespace = wgNamespaceNumber;
			params.args = [];
			params.args = args;
			$.ajax({
				parent	: this,
				type 	: "POST",
				url  	: "/Special:TermWiki_Ajax",
				data	: params,
				beforeSend 	: function(){
					$("#" + target).html(this.parent.load_control);	
				},
				success	: function(result) {
					_self.parser(result, target);
				}
			});
		}
	}
	
	function twTalk(field, id, parent) {
		this.aId				= id;
		this.state				= false;
		this.parent				= parent;
		this.field 				= field;
		this.control 			= null;	
		this.url 				= talkAjaxURL;
		this.element			= this.getElementByClassName('a' , 'reply_button_class');
		this.element.parent 	= this;
	
		this.form_container 	= "#talk_reply_container_" + this.aId;
		this.load_control		= $("<img src='../skins/common/termimg/loading.gif' style='margin-left:6px;' />");
		
		this.data 				= [];
		this.loading			= false;
		this.is_submited 		= false;
		this.has_cache			= false;
		this.is_hide			= true;
		this.timer				= null;	/* === setTimeout === */
		this.time_interval		= 10000;/* === 10000ms === */
		this.max_time			= 30;	/* === 0s === */
		this.count				= 0;
		this.run				= false;
		this.register();	
		this.form_control		= $(this.form_container).html();

		this.element.onclick = function() {
			if(this.parent.is_hide) {
				if(!this.parent.has_cache) {
					if(this.parent.loading) return;
					this.parent.ajaxRequest();
				}else {
					this.parent.show();
				}
			}else {
				this.parent.hide();
			}
			this.parent.is_hide = !this.parent.is_hide;
		};
	}

	twTalk.prototype = {	
		init : function() {
			this.count = 0;
			this.has_cache = false;
			this.data = [];
			this.run = false;
			this.loading = false;
		},
			
		time : function() {
			var _self = this;
			clearTimeout(this.timer);
			if(this.run) {
				this.timer = setTimeout(function(){ _self.time(); }, this.time_interval);
			}
			if(this.count >= this.max_time) {
				this.init();
			}else {
				this.count++;
			}
		},
			
		getElementByClassName : function(tag, className) {
			var o = this.field.getElementsByTagName(tag);
			for(var i = 0; i < o.length; i++) {
				if(o[i].className == className)	return o[i];
			}
			return false;
		},

		parseValue : function(result) {
			this.parent.loading = false;
			this.parent.load_control.detach();
			$(this.parent.control).remove();
			var result_colls = object_from_json(result);
			if(result_colls == null) return;
			var colls = result_colls.data;
			var _self = this;
			this.parent.data = [];
			$.each(colls, function(i, n) {
				if(n.id) {
					_self.parent.data.push(new CacheField(i, n));						
				}
			});
			this.parent.create();
			this.parent.has_cache = true;
			this.parent.run = true;
			this.parent.time();
			this.parent.show();
		},

		ajaxRequest : function() {
			var params = {};
			params.namespace  = this.parent.namespace;
			params.title_id = this.aId;
			$.ajax({
				parent	: this,
				type 	: "POST",
				url  	: this.url + "&twfAction=getReply",
				data	: params,
				beforeSend 	: function(){
					this.parent.loading = true;
					$(this.parent.element).append(this.parent.load_control);
				},
				success	:  this.parseValue
			});
		},
	
		doSubmit : function (form_id) {
			var params = {};
			var _self = this;
			var container_id = "#talk_reply_container_" + this.aId;
			var _form = $(form_id);
			params.title_id = this.aId;
			params.namespace  = this.parent.namespace;
			$("textarea", _form).each(function() {
				if(this.name != '') {
					params.comment = $(this).val();
				}
			});
			
			$.ajax({
				parent	: this,
				type 	: "POST",
				url  	: this.url + "&twfAction=saveReply",
				data	: params,
				beforeSend 	: function(){
					this.parent.loading = true;
					this.parent.is_submited = true;
		    		$(container_id).html("<span style='padding:10px; font-weight:bold; display:block;'>" + twGetL10nString("talk_submit_reply") + "</span>");
				},
				success	: function(result) {
					this.parent.init();
					$(container_id).html(this.parent.createCompleted());					
					$("#table" +  params.title_id).first().after(result);																		
					_self.is_submited = false;
				}
			});
		},
			
		register : function() {
			var _self = this;
			var editor_id = "#twp_reply_editor_" + this.aId;
			var isPro = twIsPro;
			if(isPro == 'true'){
				$(editor_id).validate({
			        rules: {
			            talk_description: {
			                required: true
			            }
			        },
			        messages: {
			            talk_description: {
			                required: twGetL10nString("form_validate_comment")
			            }
			        },
			        errorPlacement: function(error, element) {
			            error.insertAfter(element.parent().find('label:first'));
			        },
			        submitHandler: function(editor_id) {
			        	if(!_self.is_submited) {
			            	_self.doSubmit(editor_id);
			            }
			            return false;
			        },
			        success: function(label) {
			            label.html("&nbsp;").addClass("ok");
			        }
			    });
			}else{
				$(editor_id).validate({
			        rules: {
			            talk_description: {
			                required: true,
			                minlength: 20
			            }
			        },
			        messages: {
			            talk_description: {
			                required: twGetL10nString("form_validate_comment"),
			                rangelength: jQuery.format(twGetL10nString("form_validate_length"))
			            }
			        },
			        errorPlacement: function(error, element) {
			            error.insertAfter(element.parent().find('label:first'));
			        },
			        submitHandler: function(editor_id) {
			        	if(!_self.is_submited) {
			            	_self.doSubmit(editor_id);
			            }
			            return false;
			        },
			        success: function(label) {
			            label.html("&nbsp;").addClass("ok");
			        }
			    });
			}
		    
		},
		
		show_form : function() {
			$(this.form_container).html(this.form_control);
			this.register();
		},

		createCompleted : function() {
			var temp_html= "";
			temp_html += "<div style='padding:10px; display:block;'>";
            temp_html += " 	<div style='font-size:14px; font-weight:bold;'>Thank You!</div>";
            temp_html += "		<div>Your reply has been submitted.</div>";
            temp_html += "		<div style='padding:6px;'>";
            temp_html += "<input class='btn btn-blue' type='button' value='Post Another Reply' onclick='twtalks.show_form(" + this.aId +")' />";
            temp_html += "</div></div>";
            return temp_html;
		},
			
		hide : function() {
			$("#post_reply_title_" + this.aId).hide();
		},
			
		show : function() {
			$("#post_reply_title_" + this.aId).show();
		},
		
		create : function() {
			$("#post_replies_container_" + this.aId).empty();
			var table = '<table width="100%" border="0" cellspacing="0" cellpadding="0" id="table' +   this.aId + '">';
			var table_trs = '';
			var _replies_count = this.data.length;

			$('.reply_button_count', this.element).text("(" + _replies_count + ")");
			for( var i = 0; i < this.data.length; i++) {
				var	table_tr = "";
				table_tr +='            <tr>';
				table_tr +='                <td style="width: 80px; vertical-align: top; border-top:1px solid #EAEAEA;">';
				table_tr +='                    <div style="padding: 8px 0pt 10px 18px;">';
				table_tr +='                        <div class="user-pic" style="clear:both;">';
				table_tr +='                            <table width="100%" border="0" cellspacing="0" cellpadding="0">';
				table_tr +='                                <tbody>';
				table_tr +='                                    <tr>';
				table_tr +='                                        <td width="1">';
				table_tr += this.data[i].data.pic;
				table_tr +='                                        </td>';
				table_tr +='                                        <td width="1" style="vertical-align: top;">';
				table_tr +='                                            <span id="sf_8360921"></span>';
				table_tr +='                                        </td>';
				table_tr +='                                    </tr>';
				table_tr +='                                </tbody>';
				table_tr +='                            </table>';
				table_tr +='                        </div>';
				table_tr +='                    </div>';
				table_tr +='                </td>';
				table_tr +='                <td valign="top" height="100%" style=" border-top:1px solid #EAEAEA;">';
				table_tr +='                    <div class="tpc_content">';
				table_tr +='                        <div style="color:#555; font-weight:bold; float:left;">';
				table_tr +='                            <b><a href="' + this.data[i].data.user_url + '" style="color:#23A8E6">' + this.data[i].data.user + '</a></b>';
				table_tr +='                        </div>';
				table_tr +='                        <div style="font-weight:bold; float:left; padding:0px 5px;">|</div>';
				table_tr +='                        <div style="color:#9F9F9F; float:left;">';
				table_tr +='<span style="white-space: nowrap;" title="' + this.data[i].data.date + '">' + this.data[i].data.date + '</span>';
				table_tr +='                        </div>';
				table_tr +='                        <div style="color:#9F9F9F; float:right;" class="talk-comment">';

				var article_id = this.data[i].data.art_id;
				if(this.data[i].data.rated) {
					table_tr +='<div style="white-space: nowrap;" class="commentrating" id="commentrating-' +article_id+ '"><span class="rateresult-like" id="rateresult_upid_' +article_id+ '">' + this.data[i].data.like + '</span><span class="' +this.data[i].data.like_class+ '"></span><span class="' +this.data[i].data.dislike_class+ '"></span><span class="rateresult-dislike" id="rateresult_downid_' +article_id+ '">' +this.data[i].data.dislike+ '</span></div>';
				}
				else {
					table_tr +='<div style="white-space: nowrap;" class="commentrating" id="commentrating-' + article_id + '"><span class="rateresult-like" id="rateresult_upid_' + article_id + '">' + this.data[i].data.like + '</span><a href="javascript:;" id="ratbtn-up-' + article_id + '" class="ratebtn up_active"></a><a href="javascript:;" id="ratbtn-down-' + article_id + '" class="ratebtn down_active"></a><span class="rateresult-dislike" id="rateresult_downid_' + article_id + '">' + this.data[i].data.dislike + '</span></div>';
				}


				table_tr +='                        </div>';
				table_tr +='                        <div style="clear:both;"></div>';
				table_tr +='                        <div id="read_8360921" class="f14" style="line-height:normal;">';
				table_tr += this.data[i].data.comment;
				table_tr +='                        </div>';
				table_tr +='                    </div>';
				table_tr +='                </td>';
				table_tr +='            </tr>';
				table_trs += table_tr;
			}
			table += table_trs;
			table += "</table>";			
			$("#post_replies_container_" + this.aId).append(table);
		}
	}

	return {
		init : function() {
			this.twTalks = new twTalks();
			this.twTalks.load();
		},
		show_form : function(id) {
			this.twTalks.show_form(id);
		},
		show_recently : function(action, params, target) {
			this.twTalks.ajax_call(action, params, target);
		}
	}
}();

$(document).ready(function(){
	twtalks.init();
});

//$(function(){
	//for not MT term and definition have more than 2 lines of content 
//	if($('.terms-left').length>0 && term_usageComment!=1 &&termDefinitionHeight>36){
//		var html_google='	<div id="TopGoogleNewForTerm_content" style="margin-bottom:5px;width:1000px;margin-left:4px;">';	
//			html_google +='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>';
//			html_google +='<!-- Term Top 728 x 90 -->';
//			html_google +='<ins class="adsbygoogle"';
//			html_google +='     style="display:inline-block;width:728px;height:90px"';
//			html_google +='     data-ad-client="ca-pub-1729485723800873"';
//			html_google +='     data-ad-slot="1443666055"></ins>';
//			html_google +='<script>';
//			html_google +='(adsbygoogle = window.adsbygoogle || []).push({});';
//			html_google +='</script>';
//			html_google +='<a href="/blossary" style="float: right;clear: none;margin: 0;padding: 0;border: none;"><img src="http://static1.termwiki.com/Suntask/termCompetition/img/be_part_of_a_global_phenomenon.jpg" alt="My Blossary - Create. Collaborate. Publish." style="padding-bottom:10px;" title="My Blossary - Create. Collaborate. Publish." /></a></div>';
//			$('#topGoogleNewForTerm').html(html_google);
			
//		var html_google_middle='<div id="MiddleGoogleNewForTerm_content">';
//		html_google_middle +='<script type="text/javascript"><!--';
//		html_google_middle +='google_ad_client = "ca-pub-1729485723800873";';
//		html_google_middle +='/* New skin center */';
//		html_google_middle +='google_ad_slot = "5686588831";';
//		html_google_middle +='google_ad_width = 468;';
//		html_google_middle +='google_ad_height = 60;';
//		html_google_middle +=' //-->';
//		html_google_middle +='</script>';
//		html_google_middle +='<script type="text/javascript"';
//		html_google_middle +='src="http://pagead2.googlesyndication.com/pagead/show_ads.js">';
//		html_google_middle +='</script>';
//		html_google_middle +='</div><div class="fengenew"></div>';	
//		$('#MiddleGoogleNewForTerm').html(html_google_middle);
//		$('#MiddleGoogleNewForTerm').show();	
		
//		var html_google_right='<div id="RightGoogleNewForTerm_content">';
//		html_google_right +='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>';
//		html_google_right +='<!-- 336 x 280 Term Right New -->';
//		html_google_right +='<ins class="adsbygoogle"';
//		html_google_right +='style="display:inline-block;width:336px;height:280px"';
//		html_google_right +='data-ad-client="ca-pub-1729485723800873"';
//		html_google_right +='data-ad-slot="6992502057"></ins>';
//		html_google_right +='<script>';
//		html_google_right +='(adsbygoogle = window.adsbygoogle || []).push({});';
//		html_google_right +='</script>';
//		html_google_right +='</div>';
//		$('#RightGoogleNewForTerm').html(html_google_right);
//	}
//})

//term page industry part,if the page has no this part,js load it.
$(function(){
	if($('.terms-left').length>0&&$('.tkhyimg').length==0){
		$.ajax({
			type : "GET",
			url : "/Special:TermIndustryPart",
			data:{termname:wgTitle }, 
		
			success : function(response) {
				$('.tkhysix').html(response);
				
			}
		});
	}
})
//term page comment part,if the page has no this part,js load it.
$(document).ready( function(){
 if($('.terms-left').length>0&&$('#input_comment').length==0){
	//get term comment part from js
	$.ajax({
		type : "POST",
		url : "/Special:TWTermTalk",
		data:{fullname:wgPageName}, 
	
		success : function(response) {
			$("#recently_talks_id").html(response);
			
		}
	});
	//get term edit by part from js
//	$.ajax({
//		type : "POST",
//		url : "/Special:TWTermEditedBy",
//		data:{termTitle:wgTitle,termNameSpace:wgNamespaceNumber,termFullPageName:wgPageName}, 
//	    //edit by part location
//		success : function(response) {
//			$(".terms-right").find(".box_style").first().next().html(response);
//			
//		}
//	});	
 }
});
//User top ad,if no this part js load it.
//$(function(){
// if('1'!=getCookie('devislogin')){
//	 
//	if($('.users-left').length>0&&$('#user_add_competition').length>0&&$('#user_add_competition_new').length==0){		
//		
//		$('#user_add_competition').remove();
//		var html_google='	<div id="user_add_competition_new" style="margin-bottom:5px;width:1000px;margin-left:4px;">';		
//			html_google +='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>';
//			html_google +='<!-- User Top 728 x 90 -->';
//			html_google +='<ins class="adsbygoogle"';
//			html_google +='     style="display:inline-block;width:728px;height:90px"';
//			html_google +='     data-ad-client="ca-pub-1729485723800873"';
//			html_google +='     data-ad-slot="3629919657"></ins>';
//			html_google +='<script>';
//			html_google +='(adsbygoogle = window.adsbygoogle || []).push({});';
//			html_google +='</script>';
//			html_google +='<a href="/blossary" style="float: right;clear: none;margin: 0;padding: 0;border: none;"><img src="http://static1.termwiki.com/Suntask/termCompetition/img/be_part_of_a_global_phenomenon.jpg" alt="My Blossary - Create. Collaborate. Publish." style="padding-bottom:10px;" title="My Blossary - Create. Collaborate. Publish." /></a></div>';
//			$('.all-adress').before(html_google);
//	}
//  }
//})



/* filename: /common/jquery.validate.js weight: 1*/
/*
 * jQuery validation plug-in 1.5.2
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 Jörn Zaefferer
 *
 * $Id: jquery.validate.js 6243 2009-02-19 11:40:49Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {

$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {
		
		// if nothing is selected, return nothing; can't chain anyway
		if (!this.length) {
			options && options.debug && window.console && console.warn( "nothing selected, can't validate, returning nothing" );
			return;
		}
		
		// check if a validator for this form was already created
		var validator = $.data(this[0], 'validator');
		if ( validator ) {
			return validator;
		}
		
		validator = new $.validator( options, this[0] );
		$.data(this[0], 'validator', validator); 
		
		if ( validator.settings.onsubmit ) {
		
			// allow suppresing validation by adding a cancel class to the submit button
			this.find("input, button").filter(".cancel").click(function() {
				validator.cancelSubmit = true;
			});
		
			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug )
					// prevent form submit to be able to see console output
					event.preventDefault();
					
				function handle() {
					if ( validator.settings.submitHandler ) {
						validator.settings.submitHandler.call( validator, validator.currentForm );
						return false;
					}
					return true;
				}
					
				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}
		
		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
        if ( $(this[0]).is('form')) {
            return this.validate().form();
        } else {
            var valid = false;
            var validator = $(this[0].form).validate();
            this.each(function() {
				valid |= validator.element(this);
            });
            return valid;
        }
    },
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function(attributes) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function(index, value) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function(command, argument) {
		var element = this[0];
		
		if (command) {
			var settings = $.data(element.form, 'validator').settings;
			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				staticRules[element.name] = existingRules;
				if (argument.messages)
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				break;
			case "remove":
				if (!argument) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function(index, method) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}
		
		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.metadataRules(element),
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.staticRules(element)
		), element);
		
		// make sure required is at front
		if (data.required) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}
		
		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function(a) {return !$.trim(a.value);},
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function(a) {return !!$.trim(a.value);},
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function(a) {return !a.checked;}
});


$.format = function(source, params) {
	if ( arguments.length == 1 ) 
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.format.apply( this, args );
		};
	if ( arguments.length > 2 && params.constructor != Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor != Array ) {
		params = [ params ];
	}
	$.each(params, function(i, n) {
		source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
	});
	return source;
};

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.extend($.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: [],
		ignoreTitle: false,
		onfocusin: function(element) {
			this.lastActive = element;
				
			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass );
				this.errorsFor(element).hide();
			}
		},
		onfocusout: function(element) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function(element) {
			if ( element.name in this.submitted || element == this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function(element) {
			if ( element.name in this.submitted )
				this.element(element);
		},
		highlight: function( element, errorClass ) {
			$( element ).addClass( errorClass );
		},
		unhighlight: function( element, errorClass ) {
			$( element ).removeClass( errorClass );
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function(settings) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		dateDE: "Bitte geben Sie ein gültiges Datum ein.",
		number: "Please enter a valid number.",
		numberDE: "Bitte geben Sie eine Nummer ein.",
		digits: "Please enter only digits",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		accept: "Please enter a value with a valid extension.",
		maxlength: $.format("Please enter no more than {0} characters."),
		minlength: $.format("Please enter at least {0} characters."),
		rangelength: $.format("Please enter a value between {0} and {1} characters long."),
		range: $.format("Please enter a value between {0} and {1}."),
		max: $.format("Please enter a value less than or equal to {0}."),
		min: $.format("Please enter a value greater than or equal to {0}.")
	},
	
	autoCreateRanges: false,
	
	prototype: {
		
		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();
			
			var groups = (this.groups = {});
			$.each(this.settings.groups, function(key, value) {
				$.each(value.split(/\s/), function(index, name) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function(key, value) {
				rules[key] = $.validator.normalizeRule(value);
			});
			
			function delegate(event) {
				var validator = $.data(this[0].form, "validator");
				validator.settings["on" + event.type] && validator.settings["on" + event.type].call(validator, this[0] );
			}
			$(this.currentForm)
				.delegate("focusin focusout keyup", ":text, :password, :file, select, textarea", delegate)
				.delegate("click", ":radio, :checkbox", delegate);

			if (this.settings.invalidHandler)
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if (!this.valid())
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			this.showErrors();
			return this.valid();
		},
		
		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid(); 
		},
		
		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.clean( element );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element );
			if ( result ) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function(errors) {
			if(errors) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function(element) {
					return !(element.name in errors);
				});
			}
			this.settings.showErrors
				? this.settings.showErrors.call( this, this.errorMap, this.errorList )
				: this.defaultShowErrors();
		},
		
		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm )
				$( this.currentForm ).resetForm();
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass );
		},
		
		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},
		
		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj )
				count++;
			return count;
		},
		
		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},
		
		valid: function() {
			return this.size() == 0;
		},
		
		size: function() {
			return this.errorList.length;
		},
		
		focusInvalid: function() {
			if( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus();
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},
		
		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function(n) {
				return n.element.name == lastActive.name;
			}).length == 1 && lastActive;
		},
		
		elements: function() {
			var validator = this,
				rulesCache = {};
			
			// select all valid inputs inside the form (no submit or reset buttons)
			// workaround $Query([]).add until http://dev.jquery.com/ticket/2114 is solved
			return $([]).add(this.currentForm.elements)
			.filter(":input")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				!this.name && validator.settings.debug && window.console && console.error( "%o has no name assigned", this);
			
				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) )
					return false;
				
				rulesCache[this.name] = true;
				return true;
			});
		},
		
		clean: function( selector ) {
			return $( selector )[0];
		},
		
		errors: function() {
			return $( this.settings.errorElement + "." + this.settings.errorClass, this.errorContext );
		},
		
		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.formSubmitted = false;
			this.currentElements = $([]);
		},
		
		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},
		
		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},
	
		check: function( element ) {
			element = this.clean( element );
			
			// if radio/checkbox, validate first element in group instead
			if (this.checkable(element)) {
				element = this.findByName( element.name )[0];
			}
			
			var rules = $(element).rules();
			var dependencyMismatch = false;
			for( method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {
					var result = $.validator.methods[method].call( this, element.value.replace(/\r/g, ""), element, rule.parameters );
					
					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result == "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;
					
					if ( result == "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}
					
					if( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					this.settings.debug && window.console && console.log("exception occured when checking element " + element.id
						 + ", check the '" + rule.method + "' method");
					throw e;
				}
			}
			if (dependencyMismatch)
				return;
			if ( this.objectLength(rules) )
				this.successList.push(element);
			return true;
		},
		
		// return the custom message for the given element and validation method
		// specified in the element's "messages" metadata
		customMetaMessage: function(element, method) {
			if (!$.metadata)
				return;
			
			var meta = this.settings.meta
				? $(element).metadata()[this.settings.meta]
				: $(element).metadata();
			
			return meta && meta.messages && meta.messages[method];
		},
		
		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor == String
				? m
				: m[method]);
		},
		
		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i < arguments.length; i++) {
				if (arguments[i] !== undefined)
					return arguments[i];
			}
			return undefined;
		},
		
		defaultMessage: function( element, method) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customMetaMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},
		
		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method );
			if ( typeof message == "function" ) 
				message = message.call(this, rule.parameters, element);
			this.errorList.push({
				message: message,
				element: element
			});
			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},
		
		addWrapper: function(toToggle) {
			if ( this.settings.wrapper )
				toToggle = toToggle.add( toToggle.parents( this.settings.wrapper ) );
			return toToggle;
		},
		
		defaultShowErrors: function() {
			for ( var i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass );
				this.showLabel( error.element, error.message );
			}
			if( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if (this.settings.success) {
				for ( var i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if (this.settings.unhighlight) {
				for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},
		
		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},
		
		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},
		
		showLabel: function(element, message) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass().addClass( this.settings.errorClass );
			
				// check if we have a generated label, replace the message then
				label.attr("generated") && label.html(message);
			} else {
				// create label
				label = $("<" + this.settings.errorElement + "/>")
					.attr({"for":  this.idOrName(element), generated: true})
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length )
					this.settings.errorPlacement
						? this.settings.errorPlacement(label, $(element) )
						: label.insertAfter(element);
			}
			if ( !message && this.settings.success ) {
				label.text("");
				typeof this.settings.success == "string"
					? label.addClass( this.settings.success )
					: this.settings.success( label );
			}
			this.toShow = this.toShow.add(label);
		},
		
		errorsFor: function(element) {
			return this.errors().filter("[for='" + this.idOrName(element) + "']");
		},
		
		idOrName: function(element) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		checkable: function( element ) {
			return /radio|checkbox/i.test(element.type);
		},
		
		findByName: function( name ) {
			// select by name and filter by form for performance over form.find("[name=...]")
			var form = this.currentForm;
			return $(document.getElementsByName(name)).map(function(index, element) {
				return element.form == form && element.name == name && element  || null;
			});
		},
		
		getLength: function(value, element) {
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				return $("option:selected", element).length;
			case 'input':
				if( this.checkable( element) )
					return this.findByName(element.name).filter(':checked').length;
			}
			return value.length;
		},
	
		depend: function(param, element) {
			return this.dependTypes[typeof param]
				? this.dependTypes[typeof param](param, element)
				: true;
		},
	
		dependTypes: {
			"boolean": function(param, element) {
				return param;
			},
			"string": function(param, element) {
				return !!$(param, element.form).length;
			},
			"function": function(param, element) {
				return param(element);
			}
		},
		
		optional: function(element) {
			return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
		},
		
		startRequest: function(element) {
			if (!this.pending[element.name]) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},
		
		stopRequest: function(element, valid) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if (this.pendingRequest < 0)
				this.pendingRequest = 0;
			delete this.pending[element.name];
			if ( valid && this.pendingRequest == 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
			} else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			}
		},
		
		previousValue: function(element) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", previous = {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}
		
	},
	
	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		dateDE: {dateDE: true},
		number: {number: true},
		numberDE: {numberDE: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},
	
	addClassRules: function(className, rules) {
		className.constructor == String ?
			this.classRuleSettings[className] = rules :
			$.extend(this.classRuleSettings, className);
	},
	
	classRules: function(element) {
		var rules = {};
		var classes = $(element).attr('class');
		classes && $.each(classes.split(' '), function() {
			if (this in $.validator.classRuleSettings) {
				$.extend(rules, $.validator.classRuleSettings[this]);
			}
		});
		return rules;
	},
	
	attributeRules: function(element) {
		var rules = {};
		var $element = $(element);
		
		for (method in $.validator.methods) {
			var value = $element.attr(method);
			if (value) {
				rules[method] = value;
			}
		}
		
		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
			delete rules.maxlength;
		}
		
		return rules;
	},
	
	metadataRules: function(element) {
		if (!$.metadata) return {};
		
		var meta = $.data(element.form, 'validator').settings.meta;
		return meta ?
			$(element).metadata()[meta] :
			$(element).metadata();
	},
	
	staticRules: function(element) {
		var rules = {};
		var validator = $.data(element.form, 'validator');
		if (validator.settings.rules) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},
	
	normalizeRules: function(rules, element) {
		// handle dependency check
		$.each(rules, function(prop, val) {
			// ignore rule when param is explicitly false, eg. required:false
			if (val === false) {
				delete rules[prop];
				return;
			}
			if (val.param || val.depends) {
				var keepRule = true;
				switch (typeof val.depends) {
					case "string":
						keepRule = !!$(val.depends, element.form).length;
						break;
					case "function":
						keepRule = val.depends.call(element, element);
						break;
				}
				if (keepRule) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});
		
		// evaluate parameters
		$.each(rules, function(rule, parameter) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});
		
		// clean number parameters
		$.each(['minlength', 'maxlength', 'min', 'max'], function() {
			if (rules[this]) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			if (rules[this]) {
				rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
			}
		});
		
		if ($.validator.autoCreateRanges) {
			// auto-create ranges
			if (rules.min && rules.max) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if (rules.minlength && rules.maxlength) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}
		
		// To support custom messages in metadata ignore rule methods titled "messages"
		if (rules.messages) {
			delete rules.messages
		}
		
		return rules;
	},
	
	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function(data) {
		if( typeof data == "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},
	
	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function(name, method, message) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message;
		if (method.length < 3) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function(value, element, param) {
			// check if dependency is met
			if ( !this.depend(param, element) )
				return "dependency-mismatch";
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				var options = $("option:selected", element);
				return options.length > 0 && ( element.type == "select-multiple" || ($.browser.msie && !(options[0].attributes['value'].specified) ? options[0].text : options[0].value).length > 0);
			case 'input':
				if ( this.checkable(element) )
					return this.getLength(value, element) > 0;
			default:
				return $.trim(value).length > 0;
			}
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function(value, element, param) {
			if ( this.optional(element) )
				return "dependency-mismatch";
			
			var previous = this.previousValue(element);
			
			if (!this.settings.messages[element.name] )
				this.settings.messages[element.name] = {};
			this.settings.messages[element.name].remote = typeof previous.message == "function" ? previous.message(value) : previous.message;
			
			param = typeof param == "string" && {url:param} || param; 
			
			if ( previous.old !== value ) {
				previous.old = value;
				var validator = this;
				this.startRequest(element);
				var data = {};
				data[element.name] = value;
				$.ajax($.extend(true, {
					url: param,
					mode: "abort",
					port: "validate" + element.name,
					dataType: "json",
					data: data,
					success: function(response) {
						if ( response ) {
							var submitted = validator.formSubmitted;
							validator.prepareElement(element);
							validator.formSubmitted = submitted;
							validator.successList.push(element);
							validator.showErrors();
						} else {
							var errors = {};
							errors[element.name] =  response || validator.defaultMessage( element, "remote" );
							validator.showErrors(errors);
						}
						previous.valid = response;
						validator.stopRequest(element, response);
					}
				}, param));
				return "pending";
			} else if( this.pending[element.name] ) {
				return "pending";
			}
			return previous.valid;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) >= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) <= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function(value, element, param) {
			var length = this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},
        
		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function(value, element) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function(value, element) {
			return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/dateDE
		dateDE: function(value, element) {
			return this.optional(element) || /^\d\d?\.\d\d?\.\d\d\d?\d?$/.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function(value, element) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/numberDE
		numberDE: function(value, element) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(value);
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function(value, element) {
			return this.optional(element) || /^\d+$/.test(value);
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function(value, element) {
			if ( this.optional(element) )
				return "dependency-mismatch";
			// accept only digits and dashes
			if (/[^0-9-]+/.test(value))
				return false;
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				var nDigit = parseInt(cDigit, 10);
				if (bEven) {
					if ((nDigit *= 2) > 9)
						nDigit -= 9;
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) == 0;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/accept
		accept: function(value, element, param) {
			param = typeof param == "string" ? param : "png|jpe?g|gif";
			return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i")); 
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function(value, element, param) {
			return value == $(param).val();
		}
		
	}
	
});

})(jQuery);

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort() 
;(function($) {
	var ajax = $.ajax;
	var pendingRequests = {};
	$.ajax = function(settings) {
		// create settings for compatibility with ajaxSetup
		settings = $.extend(settings, $.extend({}, $.ajaxSettings, settings));
		var port = settings.port;
		if (settings.mode == "abort") {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			return (pendingRequests[port] = ajax.apply(this, arguments));
		}
		return ajax.apply(this, arguments);
	};
})(jQuery);

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target 

// provides triggerEvent(type: String, target: Element) to trigger delegated events
;(function($) {
	$.each({
		focus: 'focusin',
		blur: 'focusout'	
	}, function( original, fix ){
		$.event.special[fix] = {
			setup:function() {
				if ( $.browser.msie ) return false;
				this.addEventListener( original, $.event.special[fix].handler, true );
			},
			teardown:function() {
				if ( $.browser.msie ) return false;
				this.removeEventListener( original,
				$.event.special[fix].handler, true );
			},
			handler: function(e) {
				arguments[0] = $.event.fix(e);
				arguments[0].type = fix;
				return $.event.handle.apply(this, arguments);
			}
		};
	});
	$.extend($.fn, {
		delegate: function(type, delegate, handler) {
			return this.bind(type, function(event) {
				var target = $(event.target);
				if (target.is(delegate)) {
					return handler.apply(target, arguments);
				}
			});
		},
		triggerEvent: function(type, target) {
			return this.triggerHandler(type, [$.event.fix({ type: type, target: target })]);
		}
	})
})(jQuery);

/* filename: /common/twTermPage/twTermToProGlossary.js weight: 1*/
/**
 * Add term to MyGlossary or Pro account
 * @author Louis Liu
 */


function twTermToProGlossary(termId) {
	this.termId = termId;
	this.ajaxRequestUrl = twGetAjaxUrl('TWTermAjax::termToGlossaryPro');
	this.dialog_id		= 'termToProDialog';
	this.dialog_content = 'dialogContent';
	this.loading_ct		= 'loadingcontainer';
}

twTermToProGlossary.prototype = {
	/*========= setup loading window ==========*/
	setupLoadingWindow : function() {
		$( "#"+this.loading_ct ).dialog({
			dialogClass: "loadingScreenWindow",
			autoOpen: false,
			height: 120,
			width: 200,
			modal: true
		});
	},
	/* Draw the dialog */
	drawDialog : function() {
		if ( !this.checkDialogExist() ) {
			var dia = '<div id="' + this.dialog_id + '" style="display:none;">';
			dia += '<div id="' + this.dialog_content + '"></div>';
			dia += '</div>';
			dia += '<div id="' + this.loading_ct + '" title="Loading..." style="display:none;">';
			dia += '<div style="width:80px;height:60px;background:url('+stylepath+'/common/termimg/loading3.gif) center no-repeat;"></div></div>';
			$('body').append(dia);
			this.setupLoadingWindow();
		}
	},
	/*========= check if the dialog div exist =========*/
	checkDialogExist : function() {
		if ( $('#'+this.dialog_id).length > 0 ) {
			return true;
		} 
		return false;
	},
	/*========== setup dialog ===========*/
	setupDialog : function (t) {
		var cForm = this;
		$( "#"+this.dialog_id ).dialog({
			autoOpen: true,
			height: 100,
			width: 350,
			modal: true,
			title: t,
			close : function() {		
				$( this ).dialog( "destroy" );
			}
		});
	},
	destroyDialog : function () {
		$( "#"+this.dialog_id ).dialog( "destroy" );
	},
	showLoading : function() {
		$( "#"+this.loading_ct ).dialog("open");
		/*
		$('#'+this.dialog_content).html($('#'+this.loading_ct).html());
		$( "#"+this.dialog_id ).dialog({
			dialogClass: "loadingScreenWindow",
			autoOpen: true,
			height: 120,
			width: 200,
			modal: true,
			close : function() {
				$( this ).dialog( "destroy" );
			}
		});*/
	},
	closeLoading : function() {
		$( "#"+this.loading_ct ).dialog("close");
	},
	doSubmit : function() {
		var data = $('#copytermform').serialize();
        var ajaxRequestUrl = this.ajaxRequestUrl;
		var cForm = this;
		$.ajax({
			type 	: "POST",
			url  	: ajaxRequestUrl,
			data	: data,
			beforeSend 	: function(){cForm.showLoading();},
			success	: function(response){
				cForm.closeLoading();
				cForm.result(cForm,response);
			}
		});
	},
	displayInfo : function (termId,type) {
		var data = {tid:termId,to:type,act:'build'};
		var ajaxRequestUrl = this.ajaxRequestUrl;
		var cForm = this;
		$.ajax({
			type 	: "POST",
			url  	: ajaxRequestUrl,
			data	: data,
			beforeSend 	: function(){cForm.showLoading();},
			success	: function(response){
				cForm.closeLoading();
				cForm.result(cForm,response);
			}
		});
	},
		
	result : function(cForm,response) {
		eval("data = " + response);
		if ( 'success' == data.result ) {
			if ( data.redirect ) {
				lwGoToUrl(data.redirect);
				return;
			} else if ( data.hasbuttons ) {
				cForm.show(data.content,true);
				return;
			} 
			cForm.show(data.content);
		} else {
			cForm.destroyDialog();
			alert(data.content);
		}
		
	},
	
	show : function (content, hasbtns) {
		//this.destroyDialog();
		var cForm = this;
		$('#'+this.dialog_content).html(content);
		//this.setupDialog('Copy the term to');
		var t = 'Copy the term to';
		if ( hasbtns ) {
			$( "#"+this.dialog_id ).dialog({
				autoOpen: true,
				height: 300,
				width: 350,
				modal: true,
				title: t,
				buttons: {
					Cancel : function() {
						$( this ).dialog( "destroy" );
					},
					Confirm: function() {
						cForm.doSubmit();
						$( this ).dialog( "destroy" );
					}
				},
				close : function() {		
					$( this ).dialog( "destroy" );
				}
			});
		} else {
			$( "#"+this.dialog_id ).dialog({
				autoOpen: true,
				height: 100,
				width: 350,
				modal: true,
				title: t,
				close : function() {		
					$( this ).dialog( "destroy" );
				}
			});
		}
	}
}

function addTermToMyGlossary(termId) {
	if ( !termId ) return;
	form = new twTermToProGlossary(termId);
	form.drawDialog();
	form.displayInfo(termId,'glossary');
}

function addTermToPro(termId) {
	if ( !termId ) return;
	form = new twTermToProGlossary(termId);
	form.drawDialog();
	form.displayInfo(termId,'pro');
}
/* filename: /common/twRating.js weight: 1*/
// JavaScript Document
jQuery.fn.twRating = function(options) {
	this._twOptions = {
		className : 	".comment",
		ajaxURL :	 	wgScript + "/Special:TermWiki_Ajax?action=TWAjax&ClassName=TermWiki_Forum",
		MessageOut:		3000
	};
				
	jQuery.extend(this._twOptions, options);

	var rated_completed = false;
	jQuery.twRating = {
		_twOptions : this._twOptions,
		hRate : function(el, hstate, nstate){
			if(hstate) {
				jQuery(el).removeClass(nstate + '_active').addClass(nstate);
			}
			else{
				jQuery(el).removeClass(nstate).addClass(nstate + '_active');
			}
		},

		rate : function(el, cid, rate_action) {
			//if(wgUserName == null || typeof(wgUserName) == 'undefined') { 
			if('1'!=getCookie('devislogin')){
				jQuery.twRating.message(twGetL10nString("twRateLogin"), cid);
				return false;
			}
			
			if(!rated_completed) {
				rated_completed = true;
				if(rate_action) {
					jQuery(el).removeClass().addClass('ratebtn up'); 
				}
				else {
					jQuery(el).removeClass().addClass('ratebtn down'); 
				}
				var div = jQuery('#commentrating-' + cid).addClass('active-' + cid);

				var params = {};
				params.twfAction = "saveRating";
				params.namespace = wgNamespaceNumber;
				params.post_id = cid;
				params.rate_value = rate_action; 

				rated_completed = false;

				$.ajax({
					type 	: "POST",
					url  	: this._twOptions.ajaxURL,
					data	: params,
					dataType: 'json',
					beforeSend 	: function(){ 
						/////////jQuery.twRating.message("...", cid, false);
					},
					success	: function(result) {
						if(result != null) {
							if(result.error==1)
							{
								if(1 == result.errorCode)
								{
									location.href="/Competiton_Vote_Condition";
								}
								// You need to add a term to vote!
								// Profile picture.  
								// $.twRating.message(result.errorMessage, cid, false);
							}
							else
							{
								if(result.id > 0) {
									jQuery.twRating.complete(cid, rate_action);
									$("#rateresult_upid_" + cid).html(result.rating_like_count);
									$("#rateresult_downid_" + cid).html(result.rating_dislike_count);
									jQuery.twRating.message(twGetL10nString("twfThankForVoted"), cid, true);
									div.addClass('checked');
									return true;
								}
								else{
									jQuery.twRating.message(twGetL10nString("twfRated"), cid);
									return false;
								}							
							}
						}
						else {
							jQuery.twRating.message(twGetL10nString("twRateLogin"), cid);
						}
					},
					error : function (request, status, error) {
						//alert(error);
					}
				});
				return false;
			}
		},
			
		complete : function(cid, action) {
			rated_completed = false;
			if($('#commentrating-' + cid).length != 0) {
				var div = $('#commentrating-' + cid);
				var rate_up_style = 'ratebtn-done';
				var rate_down_style = 'ratebtn-done';
				if(action) {
					rate_up_style += ' up';
					rate_down_style += ' down_done';
				}
				else {
					rate_up_style += ' up_done';
					rate_down_style += ' down';
				}
				if('right' == div.parent().css('float'))
				{
					if(wgNamespaceNumber>1000 && wgNamespaceNumber<2000 && (wgNamespaceNumber%2==0))
					{
						div.html('<div style="white-space: nowrap;" class="commentrating" id="commentrating-' + cid + '"><span class="rateresult-like" id="rateresult_upid_' + cid + '">' + cid + '</span><span class="' + rate_up_style + '" style="margin-top:0px"></span><span class="' + rate_down_style + '" style="margin-top:0px"></span><span class="rateresult-dislike" id="rateresult_downid_' + cid + '" style="text-align:left;">' + cid + '</span></div>');
					}
					else
					{
						div.html('<div style="white-space: nowrap;" class="commentrating" id="commentrating-' + cid + '"><span class="rateresult-like" id="rateresult_upid_' + cid + '">' + cid + '</span><span class="' + rate_up_style + '"></span><span class="' + rate_down_style + '"></span><span class="rateresult-dislike" id="rateresult_downid_' + cid + '">' + cid + '</span></div>');
					}
				}
				else
				{
					div.html('<div style="white-space: nowrap;" class="commentrating" id="commentrating-' + cid + '"><span class="rateresult-like" id="rateresult_upid_' + cid + '">' + cid + '</span><span class="' + rate_up_style + '" style="margin-top:0px"></span><span class="' + rate_down_style + '" style="margin-top:0px"></span><span class="rateresult-dislike" id="rateresult_downid_' + cid + '" style="text-align:left;">' + cid + '</span></div>');
				}
			}
		},

		message : function(text, cid, voted) {
			rated_completed = false;
			if($('#commentrating-' + cid + ' .rating-message').length === 0) {
				var rated = (typeof(arguments[2]) !== 'undefined') ? true : false;
				var div = jQuery('#commentrating-' + cid);
				if(!div.hasClass('active-' + cid)){
					div.addClass('active-' + cid);
				}
				
				var style_class = 'rating-message';
				if(!rated){
					style_class += ' error';
				}
				else{
					div.addClass('rated');
				}
				var msgDiv=jQuery('<div class="' + style_class + '">' + text + '</div>');
				//modified by Johnny
				if('right' == div.parent().css('float'))
				{
					div.prepend(msgDiv)
				}
				else
				{
					div.append(msgDiv)
				}
				var timer = setTimeout(function() {
							if(div.hasClass('active-' + cid)) {
								div.removeClass('active-' + cid);
							}
							msgDiv.remove();
							clearTimeout(timer);
				}, this._twOptions.MessageOut);
			}
		}
	};

	jQuery(this._twOptions.className + ' .commentrating .ratebtn').live('mouseenter mouseleave', function(e) {
			if(jQuery(this).parent('.rated').length === 0) {
				jQuery.twRating.hRate(this, (e.type === 'mouseover') ? 1 : 0, this.id.split('-')[1]);
			}
		}).live('click', function(e) {
			e.preventDefault();
			var set = this.id.split('-');
			if(jQuery(this).parent('.rated').length > 0 || jQuery(this).parent('.checked').length > 0) {
				jQuery.twRating.message(twGetL10nString("twfRated"), set[2]);
			}
			else{
				jQuery.twRating.rate(this, set[2], (set[1] == 'up') ? 1 : 0);
			}
		});

};
if('undefined' == typeof(termRatingListening))
{
	var termRatingListening = false
}

$(function(){
	if(wgNamespaceNumber>1000 && wgNamespaceNumber<2000 && (wgNamespaceNumber%2==0))
	{

		if(termRatingListening)
		{
			return
		}
		if($('#commentrating-' + wgArticleId).length>0)
		{
			return
		}
		termRatingListening = true
		new $().twRating({
			className:".termrate",
			ajaxURL:wgScript + "/Special:TermWiki_Ajax?action=TWAjax&ClassName=TermWiki_Talk",
			MessageOut:3000
		});
		if($('#userpoint').length>0)
		{
				url = twGetAjaxUrl('TWNewTermAjax::getRatingHtml')
		data = {tid:wgArticleId,new1:1}
		options = {
			type:"POST",
			url:url,
			data:data,
			// cache:false,
			success:function(html)
			{
			    var a = JSON.parse(html);
				$('#improve-definition-button').css('float','right').after(a.rate).parent().css('margin-top', '10px');
				$('#userpoint').html(a.userpoint);
				
			}
		}

		}
        else if($('#userpoint1').length>0)
        {
        url = twGetAjaxUrl('TWNewTermAjax::getRatingHtml')
        data = {tid:wgArticleId,new1:2}
        options = {
            type:"POST",
            url:url,
            data:data,
            // cache:false,
            success:function(html)
            {
                var a = JSON.parse(html);
                $('#improve-definition-button').css('float','right').after(a.rate).parent().css('margin-top', '10px');
                $('#userpoint1').html(a.userpoint);
                
            }
        }
        }
		else
		{
				url = twGetAjaxUrl('TWNewTermAjax::getRatingHtml')
		data = {tid:wgArticleId}
		options = {
			type:"POST",
			url:url,
			data:data,
			success:function(html)
			{
                var a = JSON.parse(html);
				$('#improve-definition-button').css('float','right').after(a.rate).parent().css('margin-top', '10px');
				
			}
		}

		}
		$.ajax(options)
	}
})
if('undefined' == typeof(colorversionUpload))
{
	var colorversionUpload = false
}
$(function(){
	if(wgNamespaceNumber>1000 && wgNamespaceNumber<2000 && (wgNamespaceNumber%2==0))
	{
		// change term float box options for new designed upload form
		if(colorversionUpload)
		{
			return
		}
		colorversionUpload = true;
		$('.term-add-img').attr(
			'data-fb-options', 
			'boxRoundCorners:none contentRoundCorners:none showClose:false showOuterClose:false outerBorder:0 innerBorder:0 padding:0 panelPadding:0 afterBoxEnd:`refreshThePage();` width:630 height:482'
		).attr('href', $('.term-add-img').attr('href') + '&colorversion=1' )
	}
})


//by Vivian

//if('undefined' == typeof(glossaryRatingListening))
//{
//	var glossaryRatingListening = false
//}
//$(function(){
//	if(wgNamespaceNumber==2010)
//	{
//
//		if(glossaryRatingListening)
//		{
//			return
//		}
//		if($('#commentrating-' + wgArticleId).length>0)
//		{
//			return
//		}
//		glossaryRatingListening = true
//		$().twRating({
//			className:".termrate",
//			ajaxURL:wgScript + "/Special:TermWiki_Ajax?action=TWAjax&ClassName=TermWiki_Forum",
//			MessageOut:3000
//		})
//		url = twGetAjaxUrl('TWNewTermAjax::getRatingHtml')
//		data = {tid:wgArticleId}
//		options = {
//			type:"POST",
//			url:url,
//			data:data,
//			// cache:false,
//			success:function(html)
//			{
//				$('#rate').html(html);
//			}
//		}
//		$.ajax(options)	
//	}
//})


$(function(){
    var validator = $("#talk_editor").validate({
        rules: {
            talk_description: {
                required: true,
                minlength: 20
            }
        },
        messages: {
            talk_description: {
                required: "Please enter a comment.",
                rangelength: jQuery.format("Enter at least {0} characters.")
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent().find('label:first'));
        },
        submitHandler: function() {
            $("#page #post_containor").text("Submitting comment...");
            talk_editor.submit();
        },
        success: function(label) {
            label.html("&nbsp;").addClass("ok");
        }
    });
});

 $(document).ready(function(){
	if(1==getCookie("devislogin"))
	{
	$("#input_comment").html($("#login_add_comment_form").html());
	}else{
	$("#input_comment").html($("#not_login_add_comment_form").html());
	}

	 				var validator = $("#comment_editor").validate({
        rules: {
            page_description: {
                required: true,
                minlength: 20
            }
        },
        messages: {
            page_description: {
                required: "Please enter a comment.",
                rangelength: jQuery.format("Enter at least {0} characters.")
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent().find('label:first'));
        },
        submitHandler: function() {
            //$("#post_containor").val("Submitting comment...");
            $("#post_containor").attr("disabled","true");
            $('#post_containor').unbind().removeClass('btn_orange').addClass('btn_grey').css('cursor','wait');
            comment_editor.submit();
        },
        success: function(label) {
            label.html("&nbsp;").addClass("ok");
        }
    });
	
	  $("#anchor-post-comment").live("click", function() {
        if($("#page_description")) {
            $("#page_description").focus();
        }       
    });
    
    $("#page_description").blur(function() {
        if($(this).val() == "") {
            $(this).attr("rows", 1); 
        }
    });
    
    $("#page_description").bind("focus", function() {
        $(this).attr("rows", 3);
    });    
  });	 
function OnEnter( field ) { if( field.value == "Leave a message ..." ) { field.value = ""; } }
function OnExit( field ) { if( field.value == "" ) { field.value = "Leave a message ..."; } }

		if('1'!=getCookie('devislogin')){
    	$('#btn_no_login').show();
    	$('#btn_login').hide();
    	$("#btn_no_login a").first().hide();
    }else{
    	$('#btn_no_login').hide();
    	$('#btn_login').show();
    	$("#btn_login a").first().hide();
	}
		$(document).ready( function(){
			$('#definition-content-user').remove();
			$('#get-definition-button').click(function() {
				//$('#definition-content-user').show();
				//alert(definition_html);
				$('#termDefinition').html(''+definition_html+'');
			});
		});	
	
			$(function() {
				if($(".ckgd").css("display") == 'none'){
					$(".ckgd").parent().hide();
				}
						 	
			});        
/* filename: common/twTermPage/twSimpleImages.js weight: 1*/
// JavaScript Document

var twSimpleImageExtensions = function(){ 

    var isLoading = false;

    function ajax_request(params, action, callback, object) {
    	if(typeof params == "undefined" || typeof params != "object") return false;
    	if(typeof action == "undefined") action = "POST";

        $.ajax({
            type    : action,
            url     : TWProject.getAjaxUrl("TWTermAjax::showSimpleImages"),
            data    : params,
            success : function(response) {
            	if(typeof callback != "function") 
            		ajax_response(response);
            	else {
            		callback.call(object, response);
            	}
            }
        });
    }
    
    function ajax_response(response) {
        var result_object = object_from_json(response);
    }
    
    function object_from_json(str){
        var r = null;    
        try {
            eval("r = " + str + ";");
        }
        catch(e) {
            return null;
        }
        return r;
    }
    
	function twControlSimpleImage() {
		this.pageId = wgArticleId;
		this.index = 1;
		this.count = 1;
		this.controller = $("#showSimpleImagePanel");
		this.simpleImages = [];
		
		this.load_image = '<div style="width:139px !important; width:141px; height:130px !important;height:132px; border:1px solid #ccc;"><img src="../skins/common/LanguageSpark/loading.gif" style="padding-left:60px; padding-top:60px;" /></div>';
	}
	
	twControlSimpleImage.prototype = {
		updateImage : function() {
			if(this.simpleImages[this.index] == undefined) {
				this.send_request();
			}
			else { 
				this.show();
				this.updateStatus();
			}
		},
			
		show : function() {
			this.controller.html(this.simpleImages[this.index]);
		},
			
		processResponse : function(response) {
			this.simpleImages[this.index] = response;
			isLoading = false;
			this.show();
			this.updateStatus();		
		},
		
		send_request : function() {
			isLoading = true;
			this.controller.html(this.load_image);
			ajax_request({"page" : this.pageId, "index" : this.index}, "POST", this.processResponse, this);
		},	
					
		prev : function() {
			if(isLoading) return;
			if(this.index <= 1) return;
			this.index--;
			this.updateImage();
		},
		
		next : function() {
			if(isLoading) return;
			if(this.index >= this.count) return;
			this.index++;
			this.updateImage();
		},
			
		updateStatus : function() {
			$("#curr_simple_image").text(this.index);
		},
			
		setup : function() {
			var self = this;
			
			this.count = $("#simple_images_count").text();
			this.index = $("#curr_simple_image").text();
			
			this.simpleImages[this.index] = $("#showSimpleImagePanel").html();
			
			$("#prev_simple_image").bind("click", function() {
				self.prev();
			});		
			
			$("#next_simple_image").bind("click", function() {
				self.next();
			});
		}
	}

	return {
		init : function() {
			this.twControlSimpleImage = new twControlSimpleImage();	
			this.twControlSimpleImage.setup();
		}
	}
}();

$(function() {
	twSimpleImageExtensions.init();
});
/* filename: common/autocomplete.js weight: 1*/
var Tino = Tino || { 'settings': {}, 'behaviors': {}, 'locale': {} };
$(document).ready(function(){
	var acdb = [];
	 $('input.moreselect').each(function () {
		 var uri = $(this).attr('moreselect_path');
		 if (!acdb[uri]) {
			acdb[uri] = new Tino.ACDB(uri);
			
		  }
		 
		 var hidden_id=$(this).attr('id')+'_hidden';
		 var multiple_num=$(this).attr('multiple_num');
		 
		 if($('#'+hidden_id).length==0)
		 {
			 $(this).before('<input type="hidden" value="" id="'+hidden_id+'" name="'+$(this).attr('name')+'_hidden">');
		 
		 }
		
		 var multiple_id=$(this).attr('id')+'_multiple';
		 if(multiple_num>0 && $('#'+multiple_id).length==0)
		 {
			 $(this).before('<div id="'+multiple_id+'" class="autocomplete_multiple"></div>');
		 }
	
		  var $input = $(this)
			.attr('autocomplete', 'OFF')
			.attr('match', 'no')
			.attr('aria-autocomplete', 'list');
		  
		  if($(this).val()!="")
			 {
			 $(this).attr('selected',1).attr('oldval',$(this).val()).attr('match','yes');
			 }

		  $($input[0].form).submit(Tino.autocompleteSubmit);

		  $input.parent()
			.attr('role', 'application')
			.append($('<span class="element-invisible" aria-live="assertive"></span>')
			  .attr('id', $input.attr('id') + '-autocomplete-aria-live')
			);
		  new Tino.jsAC($(this),$input, acdb[uri],multiple_num);
	 });
});
$(document).click(function(e){
	if($(e.target).closest('.autocomplete').length==0)
	{
		Tino.autocompleteSubmit();
	}
});
Tino.autocompleteSubmit = function () {
	$('.autocomplete').hide();
	$('input.moreselect').each(function () {
		if($(this).attr('selected')==0 && $(this).val()!='')
		{
			
			
			if(typeof($(this).attr('dosearch'))=='undefined')
			{
				$(this).attr('match','yes');
				if(typeof($(this).attr('oldval'))!='undefined')
				{
					$(this).val($(this).attr('oldval'));
				}else{

					$(this).val('');
					
				}
			}
		}
		if($(this).val()=='' && typeof($(this).attr('multiple_num'))=='undefined'){$(this).attr('oldval','');$('#'+$(this).attr('id')+'_hidden').val('');}
		
	});
};
Tino.encodePath = function (item, uri) {
  uri = uri || location.href;
  return encodeURIComponent(item).replace(/%2F/g, '/');
};
Tino.ACDB = function (uri) {
  this.uri = uri;
  this.delay = 300;
  this.cache = {};
};
Tino.ACDB.prototype.search = function (searchString) {
  var db = this;
  this.searchString = searchString;
  // See if this string needs to be searched for anyway.
  searchString = searchString.replace(/^\s+|\s+$/, '');
  if (
    searchString.charAt(searchString.length - 1) == ',') {
    return;
  }

  // See if this key has been searched for before.
  if (this.cache[searchString]) {
    return this.owner.found(this.cache[searchString]);
  }
 

  // Initiate delayed search.
  if (this.timer) {
    clearTimeout(this.timer);
  }
  this.timer = setTimeout(function () {
    db.owner.setStatus('begin');

    // Ajax GET request for autocompletion. We use Drupal.encodePath instead of
    // encodeURIComponent to allow autocomplete search terms to contain slashes.
    $.ajax({
      type: 'GET',
      url: db.uri + '&key=' + Tino.encodePath(searchString),
      dataType: 'json',
      success: function (matches) {
        if (typeof matches.status == 'undefined' || matches.status != 0) {
          db.cache[searchString] = matches;
          // Verify if these are still the matches the user wants to see.
          if (db.searchString == searchString) {
            db.owner.found(matches);
          }
          db.owner.setStatus('found');
        }
      },
      error: function (xmlhttp) {
		  //alert('error');
        //alert(Drupal.ajaxError(xmlhttp, db.uri));
      }
    });
  }, this.delay);
};

Tino.ACDB.prototype.searchid = function (searchString) {
	  var db = this;
	  this.searchString = searchString;
	  // See if this string needs to be searched for anyway.
	  searchString = searchString.replace(/^\s+|\s+$/, '');
	  if (searchString.length <= 0 ||
	    searchString.charAt(searchString.length - 1) == ',') {
	    return;
	  }

	  // See if this key has been searched for before.
	  if (this.cache[searchString]) {
	    return this.owner.found(this.cache[searchString]);
	  }
	 

	  // Initiate delayed search.
	  if (this.timer) {
	    clearTimeout(this.timer);
	  }
	  this.timer = setTimeout(function () {
	    db.owner.setStatus('begin');

	    // Ajax GET request for autocompletion. We use Drupal.encodePath instead of
	    // encodeURIComponent to allow autocomplete search terms to contain slashes.
	    $.ajax({
	      type: 'GET',
	      url: db.uri + '&pid=' + Tino.encodePath(searchString),
	      dataType: 'json',
	      success: function (matches) {
	        if (typeof matches.status == 'undefined' || matches.status != 0) {
	          db.cache[searchString] = matches;
	          // Verify if these are still the matches the user wants to see.
	          if (db.searchString == searchString) {
	            db.owner.found(matches);
	          }
	          db.owner.setStatus('found');
	        }
	      },
	      error: function (xmlhttp) {
			 // alert('error');
	        //alert(Drupal.ajaxError(xmlhttp, db.uri));
	      }
	    });
	  }, this.delay);
	};

/**
 * Cancels the current autocomplete request.
 */
Tino.ACDB.prototype.cancel = function () {
  if (this.owner) this.owner.setStatus('cancel');
  if (this.timer) clearTimeout(this.timer);
  this.searchString = '';
  
};
Tino.strip_tags=function(input, allowed) {
	
	  allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
	  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
	    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
	  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
	    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
	  });
}
Tino.jsAC = function ($input_hidden,$input, db,multiple_num) {
  var ac = this;
  this.input = $input[0];
  this.input_hidden=$input_hidden;
  this.isclick=false;
  this.multiple_num=multiple_num;

  this.ariaLive = $('#' + this.input.id + '-autocomplete-aria-live');
  this.db = db;
  this.isleaf='no';
  
  $input
    .keydown(function (event) { return ac.onkeydown(this, event); })
    .click(function (event) { return ac.onclick(this, event); })
    .keyup(function (event) {ac.onkeyup(this, event); })
    //.blur(function () { ac.hidePopup(); ac.db.cancel(); });

};

Tino.jsAC.prototype.onclick = function (input, e) {
	this.isclick=true;
		this.populatePopup();
		return false;
	
	
};
/**
 * Handler for the "keydown" event.
 */
Tino.jsAC.prototype.onkeydown = function (input, e) {
  if (!e) {
    e = window.event;
  }
  if(typeof($(input).attr('dosearch'))=='undefined' && $(input).attr('match')=='yes')
  {
	  $(input).attr('match','no');
	  $(input).val('');
  }
  this.isclick=false;
  switch (e.keyCode) {
    case 40: // down arrow.
      this.selectDown();
      return false;
    case 38: // up arrow.
      this.selectUp();
      return false;
    default: // All other keys.
      return true;
  }
};

/**
 * Handler for the "keyup" event.
 */
Tino.jsAC.prototype.onkeyup = function (input, e) {
  if (!e) {
    e = window.event;
  }
  
  
  this.isclick=false;
  switch (e.keyCode) {
    case 16: // Shift.
    case 17: // Ctrl.
    case 18: // Alt.
    case 20: // Caps lock.
    case 33: // Page up.
    case 34: // Page down.
    case 35: // End.
    case 36: // Home.
    case 37: // Left arrow.
    case 38: // Up arrow.
    case 39: // Right arrow.
    case 40: // Down arrow.
      return true;

    case 9:  // Tab.
    case 13: // Enter.
    case 27: // Esc.
      this.hidePopup(e.keyCode);
      return true;

    default: // All other keys.
      if (input.value.length > 0 && !input.readOnly) {
        this.populatePopup();
      }
      else {
        this.hidePopup(e.keyCode);
      }
      return true;
  }
};

/**
 * Puts the currently highlighted suggestion into the autocomplete field.
 */
Tino.jsAC.prototype.select = function (node) {
	
	if(this.multiple_num>0)
		{
		var tmp=$(this.input).attr('id');
				if($('#autocomplete_select_'+tmp+$(node).data('autocompleteIDH')).length==0)
				{
					
					if(this.multiple_num<$('#'+tmp+'_hidden').val().split(",").length)
						{
						if(typeof($(this.input).attr('multiple_error'))!='undefined')
						{
							alert($(this.input).attr('multiple_error'));
						}else{
							alert('You can not select more than '+this.multiple_num+' options');
						}
						return;	
						}
					
					$('#'+tmp+'_hidden').val($('#'+tmp+'_hidden').val()+','+$(node).data('autocompleteIDH'));
					$('#'+tmp+'_multiple').append('<div id="autocomplete_select_'+tmp+$(node).data('autocompleteIDH')+'"><a class="del" href="###" onclick="autocomplete_del(\''+tmp+'\',\''+$(node).data('autocompleteIDH')+'\');"></a><span class="show">'+$(node).data('multiple').replace('<b>','').replace('</b>','')+'</span></div>');
				}
				this.input.value='';
		}else{
			  //this.input.value = ($(node).data('autocompleteValue')+'').replace('<b>','').replace('</b>','');
			this.input.value =$(node).data('multiple').replace('<b>','').replace('</b>','');
			  $(this.input).attr('oldval',this.input.value);
			  $(this.input).attr('selected',1);
			  var tmp=$(this.input).attr('id');
			  
			  $('#'+tmp+'_hidden').val($(node).data('autocompleteIDH'));
			  //alert($('#'+tmp+'_hidden').val());
  
		}
	var func=$(this.input).attr('func');
	if(typeof(func)!='undefined')
	{
		eval(func);
	}
};

/**
 * Highlights the next suggestion.
 */
Tino.jsAC.prototype.selectDown = function () {
  if (this.selected && this.selected.nextSibling) {
    this.highlight(this.selected.nextSibling);
  }
  else if (this.popup) {
    var lis = $('li', this.popup);
    if (lis.length > 0) {
      this.highlight(lis.get(0));
    }
  }
};

/**
 * Highlights the previous suggestion.
 */
Tino.jsAC.prototype.selectUp = function () {
  if (this.selected && this.selected.previousSibling) {
    this.highlight(this.selected.previousSibling);
  }
};

/**
 * Highlights a suggestion.
 */
Tino.jsAC.prototype.highlight = function (node) {
  if (this.selected) {
    $(this.selected).removeClass('selected');
  }
  $(node).addClass('selected');
  this.selected = node;
  $(this.ariaLive).html($(this.selected).html());
};

/**
 * Unhighlights a suggestion.
 */
Tino.jsAC.prototype.unhighlight = function (node) {
  $(node).removeClass('selected');
  this.selected = false;
  $(this.ariaLive).empty();
};

/**
 * Hides the autocomplete suggestions.
 */
Tino.jsAC.prototype.hidePopup = function (keycode) {
  // Select item if the right key or mousebutton was pressed.
  if (this.selected && ((keycode && keycode != 46 && keycode != 8 && keycode != 27) || !keycode)) {
	  $(this.input).attr('match','yes');
	  
    if(this.multiple_num>0)
    	{
    	
    	}
    
    else{
    	//this.input.value = $(this.selected).data('autocompleteValue').replace('<b>','').replace('</b>','');
    	this.input.value=$(this.selected).data('multiple').replace('<b>','').replace('</b>','');
    }
  }
  // Hide popup.
  var popup = this.popup;
  if (popup) {
    this.popup = null;
    $(popup).fadeOut('fast', function () { $(popup).remove(); });
  }
  this.selected = false;
  $(this.ariaLive).empty();
};

/**
 * Positions the suggestions popup and starts a search.
 */
Tino.jsAC.prototype.populatePopup = function () {
  var $input = $(this.input);
  var position = $input.position();
  // Show popup.
  if (this.popup) {
    $(this.popup).remove();
  }
  this.selected = false;
  this.popup = $('<div id="autocomplete" class="autocomplete"></div>')[0];
  this.popup.owner = this;
  $(this.popup).css({
    top: parseInt(position.top + this.input.offsetHeight, 10) + 'px',
    left: parseInt(position.left, 10) + 'px',
    width: $input.innerWidth() + 'px',
    display: 'none'
  });
  $input.before(this.popup);

  // Do search.
  this.db.owner = this;
  $input.attr('selected',0);
  if(this.isclick && this.input.value!='')
	  {
	  this.db.searchid($('#'+$(this.input).attr('id')+"_hidden").val());
	  }else{this.db.search(this.input.value);}
  
};

/**
 * Fills the suggestion popup with any matches received.
 */
Tino.jsAC.prototype.found = function (matches) {
  // If no value in the textfield, do not show the popup.
  if (!this.input.value.length) {
    //return false;
  }

  // Prepare matches.
  var ul=this.show(matches);

  // Show popup with matches, if any.
  if (this.popup) {
    if (ul.children().length) {
      $(this.popup).empty().append(ul).show();
      $(this.ariaLive).html('Autocomplete popup');
      $(this.popup).height('auto');
      if($(this.popup).height()>350)
	  {
    	  $(this.popup).height(350);
	  }
    }
    else {
      $(this.popup).css({ visibility: 'hidden' });
      this.hidePopup();
    }
    
    
  }
};
Tino.jsAC.prototype.show=function (matches)
{
	 var ul = $('<ul></ul>');
	  var ac = this;
	  
	  
	  for (key in matches) {
		var name=$('<span style="margin-left:'+matches[key].left+'px">'+matches[key].name+'</span>');
	    var tmp1=$('<div></div>').html(name);
	    var tmp=$('<li></li>');
	    tmp.html(tmp1);
	    
	    if(matches[key].more==1 || 0==matches[key].id)
	    {
	    	if('yes'==this.isleaf)
	    	{
		    	$('<span style="float:right;">&gt;&gt;1</span>').prependTo(tmp1);
		    	tmp.mousedown(function () {ac.db.search($(this).data('autocompleteID')+""); });
		    	//this.input_hidden.focus();
	    	}else{
	    		var tmp2=$('<span style="float:right;">&gt;&gt;&nbsp;</span>');
	    		tmp2.prependTo(tmp1);
	    		
	    		tmp.mousedown(function () {
	    			var tmp_data=$(this).data('autocompleteID')+"";
	    			ac.db.searchid(tmp_data); 
	    		});
	    		//name.mousedown(function () {ac.select($(this).parent().parent());ac.hidePopup(); ac.db.cancel(); });
	    		
	    	}
	    }else if(-1==matches[key].id){
	    	
	    }else{
	    	tmp.mousedown(function () {ac.select(this); ac.hidePopup(); ac.db.cancel(); });
	    }
	    
	    tmp.mouseover(function () { ac.highlight(this); })
	      .mouseout(function () { ac.unhighlight(this); })
	      .data('autocompleteValue', matches[key].name)
	      .data('multiple', matches[key].multiple)
	      .data('autocompleteID', matches[key].id)
	      .data('autocompleteIDH', matches[key].hid)
	      .appendTo(ul);
	    
	  }
	 
	  return ul;
}
Tino.jsAC.prototype.setStatus = function (status) {
  switch (status) {
    case 'begin':
      $(this.input).addClass('throbbing');
      $(this.ariaLive).html('search...');
      break;
    case 'cancel':
    case 'error':
    case 'found':
      $(this.input).removeClass('throbbing');
      break;
  }
};
function autocomplete_del(id,did)
{
	var s=$('#'+id+'_hidden').val().replace(','+did,'');
	$('#'+id+'_hidden').val(s);
	$('#autocomplete_select_'+id+did).remove();
}
$(function(){
		$("#searchform").submit(function(){
			if(isPro && 'Pro' !== twTitle ){

				var url = '/Special:Search/pro/term/' + $("#searchInput").val();
				location.href = url;
				return false;
			}else{
				return true;
			}
			
		});
	});

/* filename: /common/wikibits.js weight: 1*/
// MediaWiki JavaScript support functions

var clientPC = navigator.userAgent.toLowerCase(); // Get client info
var is_gecko = /gecko/.test( clientPC ) &&
	!/khtml|spoofer|netscape\/7\.0/.test(clientPC);
var webkit_match = clientPC.match(/applewebkit\/(\d+)/);
if (webkit_match) {
	var is_safari = clientPC.indexOf('applewebkit') != -1 &&
		clientPC.indexOf('spoofer') == -1;
	var is_safari_win = is_safari && clientPC.indexOf('windows') != -1;
	var webkit_version = parseInt(webkit_match[1]);
}
var is_khtml = navigator.vendor == 'KDE' ||
	( document.childNodes && !document.all && !navigator.taintEnabled );
// For accesskeys; note that FF3+ is included here!
var is_ff2 = /firefox\/[2-9]|minefield\/3/.test( clientPC );
var is_ff2_ = /firefox\/2/.test( clientPC );
// These aren't used here, but some custom scripts rely on them
var is_ff2_win = is_ff2 && clientPC.indexOf('windows') != -1;
var is_ff2_x11 = is_ff2 && clientPC.indexOf('x11') != -1;
if (clientPC.indexOf('opera') != -1) {
	var is_opera = true;
	var is_opera_preseven = window.opera && !document.childNodes;
	var is_opera_seven = window.opera && document.childNodes;
	var is_opera_95 = /opera\/(9.[5-9]|[1-9][0-9])/.test( clientPC );
}

// Global external objects used by this script.
/*extern ta, stylepath, skin */

// add any onload functions in this hook (please don't hard-code any events in the xhtml source)
var doneOnloadHook;

if (!window.onloadFuncts) {
	var onloadFuncts = [];
}

function addOnloadHook(hookFunct) {
	// Allows add-on scripts to add onload functions
	if(!doneOnloadHook) {
		onloadFuncts[onloadFuncts.length] = hookFunct;
	} else {
		hookFunct();  // bug in MSIE script loading
	}
}

function hookEvent(hookName, hookFunct) {
	addHandler(window, hookName, hookFunct);
}

function importScript(page) {
	var uri = wgScript + '?title=' +
		encodeURIComponent(page.replace(/ /g,'_')).replace('%2F','/').replace('%3A',':') +
		'&action=raw&ctype=text/javascript';
	return importScriptURI(uri);
}
 
var loadedScripts = {}; // included-scripts tracker
function importScriptURI(url) {
	if (loadedScripts[url]) {
		return null;
	}
	loadedScripts[url] = true;
	var s = document.createElement('script');
	s.setAttribute('src',url);
	s.setAttribute('type','text/javascript');
	document.getElementsByTagName('head')[0].appendChild(s);
	return s;
}
 
function importStylesheet(page) {
	return importStylesheetURI(wgScript + '?action=raw&ctype=text/css&title=' + encodeURIComponent(page.replace(/ /g,'_')));
}
 
function importStylesheetURI(url) {
	return document.createStyleSheet ? document.createStyleSheet(url) : appendCSS('@import "' + url + '";');
}
 
function appendCSS(text) {
	var s = document.createElement('style');
	s.type = 'text/css';
	s.rel = 'stylesheet';
	if (s.styleSheet) s.styleSheet.cssText = text //IE
	else s.appendChild(document.createTextNode(text + '')) //Safari sometimes borks on null
	document.getElementsByTagName('head')[0].appendChild(s);
	return s;
}

// special stylesheet links
if (typeof stylepath != 'undefined' && typeof skin != 'undefined') {
	if (is_opera_preseven) {
		importStylesheetURI(stylepath+'/'+skin+'/Opera6Fixes.css');
	} else if (is_opera_seven && !is_opera_95) {
		importStylesheetURI(stylepath+'/'+skin+'/Opera7Fixes.css');
	} else if (is_opera_95) {
		importStylesheetURI(stylepath+'/'+skin+'/Opera9Fixes.css');
	} else if (is_khtml) {
		importStylesheetURI(stylepath+'/'+skin+'/KHTMLFixes.css');
	} else if (is_ff2_) {
		importStylesheetURI(stylepath+'/'+skin+'/FF2Fixes.css');
	}
}

if (wgBreakFrames) {
	// Un-trap us from framesets
	if (window.top != window) {
		window.top.location = window.location;
	}
}

function showTocToggle() {
	if (document.createTextNode) {
		// Uses DOM calls to avoid document.write + XHTML issues

		var linkHolder = document.getElementById('toctitle');
		if (!linkHolder) {
			return;
		}

		var outerSpan = document.createElement('span');
		outerSpan.className = 'toctoggle';

		var toggleLink = document.createElement('a');
		toggleLink.id = 'togglelink';
		toggleLink.className = 'internal';
		toggleLink.href = 'javascript:toggleToc()';
		toggleLink.appendChild(document.createTextNode(tocHideText));

		outerSpan.appendChild(document.createTextNode('['));
		outerSpan.appendChild(toggleLink);
		outerSpan.appendChild(document.createTextNode(']'));

		linkHolder.appendChild(document.createTextNode(' '));
		linkHolder.appendChild(outerSpan);

		var cookiePos = document.cookie.indexOf("hidetoc=");
		if (cookiePos > -1 && document.cookie.charAt(cookiePos + 8) == 1) {
			toggleToc();
		}
	}
}

function changeText(el, newText) {
	// Safari work around
	if (el.innerText) {
		el.innerText = newText;
	} else if (el.firstChild && el.firstChild.nodeValue) {
		el.firstChild.nodeValue = newText;
	}
}

function toggleToc() {
	var toc = document.getElementById('toc').getElementsByTagName('ul')[0];
	var toggleLink = document.getElementById('togglelink');

	if (toc && toggleLink && toc.style.display == 'none') {
		changeText(toggleLink, tocHideText);
		toc.style.display = 'block';
		document.cookie = "hidetoc=0";
	} else {
		changeText(toggleLink, tocShowText);
		toc.style.display = 'none';
		document.cookie = "hidetoc=1";
	}
}

var mwEditButtons = [];
var mwCustomEditButtons = []; // eg to add in MediaWiki:Common.js

function escapeQuotes(text) {
	var re = new RegExp("'","g");
	text = text.replace(re,"\\'");
	re = new RegExp("\\n","g");
	text = text.replace(re,"\\n");
	return escapeQuotesHTML(text);
}

function escapeQuotesHTML(text) {
	var re = new RegExp('&',"g");
	text = text.replace(re,"&amp;");
	re = new RegExp('"',"g");
	text = text.replace(re,"&quot;");
	re = new RegExp('<',"g");
	text = text.replace(re,"&lt;");
	re = new RegExp('>',"g");
	text = text.replace(re,"&gt;");
	return text;
}


/**
 * Set the accesskey prefix based on browser detection.
 */
var tooltipAccessKeyPrefix = 'alt-';
if (is_opera) {
	tooltipAccessKeyPrefix = 'shift-esc-';
} else if (!is_safari_win && is_safari && webkit_version > 526) {
	tooltipAccessKeyPrefix = 'ctrl-alt-';
} else if (!is_safari_win && (is_safari
		|| clientPC.indexOf('mac') != -1
		|| clientPC.indexOf('konqueror') != -1 )) {
	tooltipAccessKeyPrefix = 'ctrl-';
} else if (is_ff2) {
	tooltipAccessKeyPrefix = 'alt-shift-';
}
var tooltipAccessKeyRegexp = /\[(ctrl-)?(alt-)?(shift-)?(esc-)?(.)\]$/;

/**
 * Add the appropriate prefix to the accesskey shown in the tooltip.
 * If the nodeList parameter is given, only those nodes are updated;
 * otherwise, all the nodes that will probably have accesskeys by
 * default are updated.
 *
 * @param Array nodeList -- list of elements to update
 */
function updateTooltipAccessKeys( nodeList ) {
	if ( !nodeList ) {
		// skins without a "column-one" element don't seem to have links with accesskeys either
		var columnOne = document.getElementById("column-one");
		if ( columnOne )
			updateTooltipAccessKeys( columnOne.getElementsByTagName("a") );
		// these are rare enough that no such optimization is needed
		updateTooltipAccessKeys( document.getElementsByTagName("input") );
		updateTooltipAccessKeys( document.getElementsByTagName("label") );
		return;
	}

	for ( var i = 0; i < nodeList.length; i++ ) {
		var element = nodeList[i];
		var tip = element.getAttribute("title");
		if ( tip && tooltipAccessKeyRegexp.exec(tip) ) {
			tip = tip.replace(tooltipAccessKeyRegexp,
					  "["+tooltipAccessKeyPrefix+"$5]");
			element.setAttribute("title", tip );
		}
	}
}

/**
 * Add a link to one of the portlet menus on the page, including:
 *
 * p-cactions: Content actions (shown as tabs above the main content in Monobook)
 * p-personal: Personal tools (shown at the top right of the page in Monobook)
 * p-navigation: Navigation
 * p-tb: Toolbox
 *
 * This function exists for the convenience of custom JS authors.  All
 * but the first three parameters are optional, though providing at
 * least an id and a tooltip is recommended.
 *
 * By default the new link will be added to the end of the list.  To
 * add the link before a given existing item, pass the DOM node of
 * that item (easily obtained with document.getElementById()) as the
 * nextnode parameter; to add the link _after_ an existing item, pass
 * the node's nextSibling instead.
 *
 * @param String portlet -- id of the target portlet ("p-cactions", "p-personal", "p-navigation" or "p-tb")
 * @param String href -- link URL
 * @param String text -- link text (will be automatically lowercased by CSS for p-cactions in Monobook)
 * @param String id -- id of the new item, should be unique and preferably have the appropriate prefix ("ca-", "pt-", "n-" or "t-")
 * @param String tooltip -- text to show when hovering over the link, without accesskey suffix
 * @param String accesskey -- accesskey to activate this link (one character, try to avoid conflicts)
 * @param Node nextnode -- the DOM node before which the new item should be added, should be another item in the same list
 *
 * @return Node -- the DOM node of the new item (an LI element) or null
 */
function addPortletLink(portlet, href, text, id, tooltip, accesskey, nextnode) {
	var node = document.getElementById(portlet);
	if ( !node ) return null;
	node = node.getElementsByTagName( "ul" )[0];
	if ( !node ) return null;

	var link = document.createElement( "a" );
	link.appendChild( document.createTextNode( text ) );
	link.href = href;

	var item = document.createElement( "li" );
	item.appendChild( link );
	if ( id ) item.id = id;

	if ( accesskey ) {
		link.setAttribute( "accesskey", accesskey );
		tooltip += " ["+accesskey+"]";
	}
	if ( tooltip ) {
		link.setAttribute( "title", tooltip );
	}
	if ( accesskey && tooltip ) {
		updateTooltipAccessKeys( new Array( link ) );
	}

	if ( nextnode && nextnode.parentNode == node )
		node.insertBefore( item, nextnode );
	else
		node.appendChild( item );  // IE compatibility (?)

	return item;
}

function getInnerText(el) {
	if (typeof el == "string") return el;
	if (typeof el == "undefined") { return el };
	if (el.textContent) return el.textContent; // not needed but it is faster
	if (el.innerText) return el.innerText;     // IE doesn't have textContent
	var str = "";

	var cs = el.childNodes;
	var l = cs.length;
	for (var i = 0; i < l; i++) {
		switch (cs[i].nodeType) {
			case 1: //ELEMENT_NODE
				str += ts_getInnerText(cs[i]);
				break;
			case 3:	//TEXT_NODE
				str += cs[i].nodeValue;
				break;
		}
	}
	return str;
}


/**
 * Set up accesskeys/tooltips from the deprecated ta array.  If doId
 * is specified, only set up for that id.  Note that this function is
 * deprecated and will not be supported indefinitely -- use
 * updateTooltipAccessKey() instead.
 *
 * @param mixed doId string or null
 */
function akeytt( doId ) {
	// A lot of user scripts (and some of the code below) break if
	// ta isn't defined, so we make sure it is.  Explictly using
	// window.ta avoids a "ta is not defined" error.
	if (!window.ta) window.ta = new Array;

	// Make a local, possibly restricted, copy to avoid clobbering
	// the original.
	var ta;
	if ( doId ) {
		ta = [doId];
	} else {
		ta = window.ta;
	}

	// Now deal with evil deprecated ta
	var watchCheckboxExists = document.getElementById( 'wpWatchthis' ) ? true : false;
	for (var id in ta) {
		var n = document.getElementById(id);
		if (n) {
			var a = null;
			var ak = '';
			// Are we putting accesskey in it
			if (ta[id][0].length > 0) {
				// Is this object a object? If not assume it's the next child.

				if (n.nodeName.toLowerCase() == "a") {
					a = n;
				} else {
					a = n.childNodes[0];
				}
			 	// Don't add an accesskey for the watch tab if the watch
			 	// checkbox is also available.
				if (a && ((id != 'ca-watch' && id != 'ca-unwatch') || !watchCheckboxExists)) {
					a.accessKey = ta[id][0];
					ak = ' ['+tooltipAccessKeyPrefix+ta[id][0]+']';
				}
			} else {
				// We don't care what type the object is when assigning tooltip
				a = n;
				ak = '';
			}

			if (a) {
				a.title = ta[id][1]+ak;
			}
		}
	}
}

var checkboxes;
var lastCheckbox;

function setupCheckboxShiftClick() {
	checkboxes = [];
	lastCheckbox = null;
	var inputs = document.getElementsByTagName('input');
	addCheckboxClickHandlers(inputs);
}

function addCheckboxClickHandlers(inputs, start) {
	if ( !start) start = 0;

	var finish = start + 250;
	if ( finish > inputs.length )
		finish = inputs.length;

	for ( var i = start; i < finish; i++ ) {
		var cb = inputs[i];
		if ( !cb.type || cb.type.toLowerCase() != 'checkbox' )
			continue;
		var end = checkboxes.length;
		checkboxes[end] = cb;
		cb.index = end;
		cb.onclick = checkboxClickHandler;
	}

	if ( finish < inputs.length ) {
		setTimeout( function () {
			addCheckboxClickHandlers(inputs, finish);
		}, 200 );
	}
}

function checkboxClickHandler(e) {
	if (typeof e == 'undefined') {
		e = window.event;
	}
	if ( !e.shiftKey || lastCheckbox === null ) {
		lastCheckbox = this.index;
		return true;
	}
	var endState = this.checked;
	var start, finish;
	if ( this.index < lastCheckbox ) {
		start = this.index + 1;
		finish = lastCheckbox;
	} else {
		start = lastCheckbox;
		finish = this.index - 1;
	}
	for (var i = start; i <= finish; ++i ) {
		checkboxes[i].checked = endState;
	}
	lastCheckbox = this.index;
	return true;
}

function toggle_element_activation(ida,idb) {
	if (!document.getElementById) {
		return;
	}
	document.getElementById(ida).disabled=true;
	document.getElementById(idb).disabled=false;
}

function toggle_element_check(ida,idb) {
	if (!document.getElementById) {
		return;
	}
	document.getElementById(ida).checked=true;
	document.getElementById(idb).checked=false;
}

/*
	Written by Jonathan Snook, http://www.snook.ca/jonathan
	Add-ons by Robert Nyman, http://www.robertnyman.com
	Author says "The credit comment is all it takes, no license. Go crazy with it!:-)"
	From http://www.robertnyman.com/2005/11/07/the-ultimate-getelementsbyclassname/
*/
function getElementsByClassName(oElm, strTagName, oClassNames){
	var arrReturnElements = new Array();
	if ( typeof( oElm.getElementsByClassName ) == "function" ) {
		/* Use a native implementation where possible FF3, Saf3.2, Opera 9.5 */
		var arrNativeReturn = oElm.getElementsByClassName( oClassNames );
		if ( strTagName == "*" )
			return arrNativeReturn;
		for ( var h=0; h < arrNativeReturn.length; h++ ) {
			if( arrNativeReturn[h].tagName.toLowerCase() == strTagName.toLowerCase() )
				arrReturnElements[arrReturnElements.length] = arrNativeReturn[h];
		}
		return arrReturnElements;
	}
	var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
	var arrRegExpClassNames = new Array();
	if(typeof oClassNames == "object"){
		for(var i=0; i<oClassNames.length; i++){
			arrRegExpClassNames[arrRegExpClassNames.length] =
				new RegExp("(^|\\s)" + oClassNames[i].replace(/\-/g, "\\-") + "(\\s|$)");
		}
	}
	else{
		arrRegExpClassNames[arrRegExpClassNames.length] =
			new RegExp("(^|\\s)" + oClassNames.replace(/\-/g, "\\-") + "(\\s|$)");
	}
	var oElement;
	var bMatchesAll;
	for(var j=0; j<arrElements.length; j++){
		oElement = arrElements[j];
		bMatchesAll = true;
		for(var k=0; k<arrRegExpClassNames.length; k++){
			if(!arrRegExpClassNames[k].test(oElement.className)){
				bMatchesAll = false;
				break;
			}
		}
		if(bMatchesAll){
			arrReturnElements[arrReturnElements.length] = oElement;
		}
	}
	return (arrReturnElements)
}

function redirectToFragment(fragment) {
	var match = navigator.userAgent.match(/AppleWebKit\/(\d+)/);
	if (match) {
		var webKitVersion = parseInt(match[1]);
		if (webKitVersion < 420) {
			// Released Safari w/ WebKit 418.9.1 messes up horribly
			// Nightlies of 420+ are ok
			return;
		}
	}
	if (is_gecko) {
		// Mozilla needs to wait until after load, otherwise the window doesn't scroll
		addOnloadHook(function () {
			if (window.location.hash == "")
				window.location.hash = fragment;
		});
	} else {
		if (window.location.hash == "")
			window.location.hash = fragment;
	}
}

/*
 * Table sorting script based on one (c) 1997-2006 Stuart Langridge and Joost
 * de Valk:
 * http://www.joostdevalk.nl/code/sortable-table/
 * http://www.kryogenix.org/code/browser/sorttable/
 *
 * @todo don't break on colspans/rowspans (bug 8028)
 * @todo language-specific digit grouping/decimals (bug 8063)
 * @todo support all accepted date formats (bug 8226)
 */

var ts_image_path = stylepath+"/common/images/";
var ts_image_up = "sort_up.gif";
var ts_image_down = "sort_down.gif";
var ts_image_none = "sort_none.gif";
var ts_europeandate = wgContentLanguage != "en"; // The non-American-inclined can change to "true"
var ts_alternate_row_colors = false;
var ts_number_transform_table = null;
var ts_number_regex = null;

function sortables_init() {
	var idnum = 0;
	// Find all tables with class sortable and make them sortable
	var tables = getElementsByClassName(document, "table", "sortable");
	for (var ti = 0; ti < tables.length ; ti++) {
		if (!tables[ti].id) {
			tables[ti].setAttribute('id','sortable_table_id_'+idnum);
			++idnum;
		}
		ts_makeSortable(tables[ti]);
	}
}

function ts_makeSortable(table) {
	var firstRow;
	if (table.rows && table.rows.length > 0) {
		if (table.tHead && table.tHead.rows.length > 0) {
			firstRow = table.tHead.rows[table.tHead.rows.length-1];
		} else {
			firstRow = table.rows[0];
		}
	}
	if (!firstRow) return;

	// We have a first row: assume it's the header, and make its contents clickable links
	for (var i = 0; i < firstRow.cells.length; i++) {
		var cell = firstRow.cells[i];
		if ((" "+cell.className+" ").indexOf(" unsortable ") == -1) {
			cell.innerHTML += '&nbsp;&nbsp;'
				+ '<a href="#" class="sortheader" '
				+ 'onclick="ts_resortTable(this);return false;">'
				+ '<span class="sortarrow">'
				+ '<img src="'
				+ ts_image_path
				+ ts_image_none
				+ '" alt="&darr;"/></span></a>';
		}
	}
	if (ts_alternate_row_colors) {
		ts_alternate(table);
	}
}

function ts_getInnerText(el) {
	return getInnerText( el );
}

function ts_resortTable(lnk) {
	// get the span
	var span = lnk.getElementsByTagName('span')[0];

	var td = lnk.parentNode;
	var tr = td.parentNode;
	var column = td.cellIndex;

	var table = tr.parentNode;
	while (table && !(table.tagName && table.tagName.toLowerCase() == 'table'))
		table = table.parentNode;
	if (!table) return;

	if (table.rows.length <= 1) return;

	// Generate the number transform table if it's not done already
	if (ts_number_transform_table == null) {
		ts_initTransformTable();
	}

	// Work out a type for the column
	// Skip the first row if that's where the headings are
	var rowStart = (table.tHead && table.tHead.rows.length > 0 ? 0 : 1);

	var itm = "";
	for (var i = rowStart; i < table.rows.length; i++) {
		if (table.rows[i].cells.length > column) {
			itm = ts_getInnerText(table.rows[i].cells[column]);
			itm = itm.replace(/^[\s\xa0]+/, "").replace(/[\s\xa0]+$/, "");
			if (itm != "") break;
		}
	}

	// TODO: bug 8226, localised date formats
	var sortfn = ts_sort_generic;
	var preprocessor = ts_toLowerCase;
	if (/^\d\d[\/. -][a-zA-Z]{3}[\/. -]\d\d\d\d$/.test(itm)) {
		preprocessor = ts_dateToSortKey;
	} else if (/^\d\d[\/.-]\d\d[\/.-]\d\d\d\d$/.test(itm)) {
		preprocessor = ts_dateToSortKey;
	} else if (/^\d\d[\/.-]\d\d[\/.-]\d\d$/.test(itm)) {
		preprocessor = ts_dateToSortKey;
	// pound dollar euro yen currency cents
	} else if (/(^[\u00a3$\u20ac\u00a4\u00a5]|\u00a2$)/.test(itm)) {
		preprocessor = ts_currencyToSortKey;
	} else if (ts_number_regex.test(itm)) {
		preprocessor = ts_parseFloat;
	}

	var reverse = (span.getAttribute("sortdir") == 'down');

	var newRows = new Array();
	var staticRows = new Array();
	for (var j = rowStart; j < table.rows.length; j++) {
		var row = table.rows[j];
		if((" "+row.className+" ").indexOf(" unsortable ") < 0) {
			var keyText = ts_getInnerText(row.cells[column]);
			var oldIndex = (reverse ? -j : j);
			var preprocessed = preprocessor( keyText );

			newRows[newRows.length] = new Array(row, preprocessed, oldIndex);
		} else staticRows[staticRows.length] = new Array(row, false, j-rowStart);
	}

	newRows.sort(sortfn);

	var arrowHTML;
	if (reverse) {
		arrowHTML = '<img src="'+ ts_image_path + ts_image_down + '" alt="&darr;"/>';
		newRows.reverse();
		span.setAttribute('sortdir','up');
	} else {
		arrowHTML = '<img src="'+ ts_image_path + ts_image_up + '" alt="&uarr;"/>';
		span.setAttribute('sortdir','down');
	}

	for (var i = 0; i < staticRows.length; i++) {
		var row = staticRows[i];
		newRows.splice(row[2], 0, row);
	}

	// We appendChild rows that already exist to the tbody, so it moves them rather than creating new ones
	// don't do sortbottom rows
	for (var i = 0; i < newRows.length; i++) {
		if ((" "+newRows[i][0].className+" ").indexOf(" sortbottom ") == -1)
			table.tBodies[0].appendChild(newRows[i][0]);
	}
	// do sortbottom rows only
	for (var i = 0; i < newRows.length; i++) {
		if ((" "+newRows[i][0].className+" ").indexOf(" sortbottom ") != -1)
			table.tBodies[0].appendChild(newRows[i][0]);
	}

	// Delete any other arrows there may be showing
	var spans = getElementsByClassName(tr, "span", "sortarrow");
	for (var i = 0; i < spans.length; i++) {
		spans[i].innerHTML = '<img src="'+ ts_image_path + ts_image_none + '" alt="&darr;"/>';
	}
	span.innerHTML = arrowHTML;

	if (ts_alternate_row_colors) {
		ts_alternate(table);
	}
}

function ts_initTransformTable() {
	if ( typeof wgSeparatorTransformTable == "undefined"
			|| ( wgSeparatorTransformTable[0] == '' && wgDigitTransformTable[2] == '' ) )
	{
		digitClass = "[0-9,.]";
		ts_number_transform_table = false;
	} else {
		ts_number_transform_table = {};
		// Unpack the transform table
		// Separators
		ascii = wgSeparatorTransformTable[0].split("\t");
		localised = wgSeparatorTransformTable[1].split("\t");
		for ( var i = 0; i < ascii.length; i++ ) { 
			ts_number_transform_table[localised[i]] = ascii[i];
		}
		// Digits
		ascii = wgDigitTransformTable[0].split("\t");
		localised = wgDigitTransformTable[1].split("\t");
		for ( var i = 0; i < ascii.length; i++ ) { 
			ts_number_transform_table[localised[i]] = ascii[i];
		}

		// Construct regex for number identification
		digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '\\.'];
		maxDigitLength = 1;
		for ( var digit in ts_number_transform_table ) {
			// Escape regex metacharacters
			digits.push( 
				digit.replace( /[\\\\$\*\+\?\.\(\)\|\{\}\[\]\-]/,
					function( s ) { return '\\' + s; } )
			);
			if (digit.length > maxDigitLength) {
				maxDigitLength = digit.length;
			}
		}
		if ( maxDigitLength > 1 ) {
			digitClass = '[' + digits.join( '', digits ) + ']';
		} else {
			digitClass = '(' + digits.join( '|', digits ) + ')';
		}
	}

	// We allow a trailing percent sign, which we just strip.  This works fine
	// if percents and regular numbers aren't being mixed.
	ts_number_regex = new RegExp(
		"^(" +
			"[+-]?[0-9][0-9,]*(\\.[0-9,]*)?(E[+-]?[0-9][0-9,]*)?" + // Fortran-style scientific
			"|" +
			"[+-]?" + digitClass + "+%?" + // Generic localised
		")$", "i"
	);
}

function ts_toLowerCase( s ) {
	return s.toLowerCase();
}

function ts_dateToSortKey(date) {	
	// y2k notes: two digit years less than 50 are treated as 20XX, greater than 50 are treated as 19XX
	if (date.length == 11) {
		switch (date.substr(3,3).toLowerCase()) {
			case "jan": var month = "01"; break;
			case "feb": var month = "02"; break;
			case "mar": var month = "03"; break;
			case "apr": var month = "04"; break;
			case "may": var month = "05"; break;
			case "jun": var month = "06"; break;
			case "jul": var month = "07"; break;
			case "aug": var month = "08"; break;
			case "sep": var month = "09"; break;
			case "oct": var month = "10"; break;
			case "nov": var month = "11"; break;
			case "dec": var month = "12"; break;
			// default: var month = "00";
		}
		return date.substr(7,4)+month+date.substr(0,2);
	} else if (date.length == 10) {
		if (ts_europeandate == false) {
			return date.substr(6,4)+date.substr(0,2)+date.substr(3,2);
		} else {
			return date.substr(6,4)+date.substr(3,2)+date.substr(0,2);
		}
	} else if (date.length == 8) {
		yr = date.substr(6,2);
		if (parseInt(yr) < 50) { 
			yr = '20'+yr; 
		} else { 
			yr = '19'+yr; 
		}
		if (ts_europeandate == true) {
			return yr+date.substr(3,2)+date.substr(0,2);
		} else {
			return yr+date.substr(0,2)+date.substr(3,2);
		}
	}
	return "00000000";
}

function ts_parseFloat( s ) {
	if ( !s ) {
		return 0;
	}
	if (ts_number_transform_table != false) {
		var newNum = '', c;
		
		for ( var p = 0; p < s.length; p++ ) {
			c = s.charAt( p );
			if (c in ts_number_transform_table) {
				newNum += ts_number_transform_table[c];
			} else {
				newNum += c;
			}
		}
		s = newNum;
	}

	num = parseFloat(s.replace(/,/g, ""));
	return (isNaN(num) ? 0 : num);
}

function ts_currencyToSortKey( s ) {
	return ts_parseFloat(s.replace(/[^0-9.,]/g,''));
}

function ts_sort_generic(a, b) {
	return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : a[2] - b[2];
}

function ts_alternate(table) {
	// Take object table and get all it's tbodies.
	var tableBodies = table.getElementsByTagName("tbody");
	// Loop through these tbodies
	for (var i = 0; i < tableBodies.length; i++) {
		// Take the tbody, and get all it's rows
		var tableRows = tableBodies[i].getElementsByTagName("tr");
		// Loop through these rows
		// Start at 1 because we want to leave the heading row untouched
		for (var j = 0; j < tableRows.length; j++) {
			// Check if j is even, and apply classes for both possible results
			var oldClasses = tableRows[j].className.split(" ");
			var newClassName = "";
			for (var k = 0; k < oldClasses.length; k++) {
				if (oldClasses[k] != "" && oldClasses[k] != "even" && oldClasses[k] != "odd")
					newClassName += oldClasses[k] + " ";
			}
			tableRows[j].className = newClassName + (j % 2 == 0 ? "even" : "odd");
		}
	}
}

/*
 * End of table sorting code
 */
 
 
/**
 * Add a cute little box at the top of the screen to inform the user of
 * something, replacing any preexisting message.
 *
 * @param String -or- Dom Object message HTML to be put inside the right div
 * @param String className   Used in adding a class; should be different for each
 *   call to allow CSS/JS to hide different boxes.  null = no class used.
 * @return Boolean       True on success, false on failure
 */
function jsMsg( message, className ) {
	if ( !document.getElementById ) {
		return false;
	}
	// We special-case skin structures provided by the software.  Skins that
	// choose to abandon or significantly modify our formatting can just define
	// an mw-js-message div to start with.
	var messageDiv = document.getElementById( 'mw-js-message' );
	if ( !messageDiv ) {
		messageDiv = document.createElement( 'div' );
		if ( document.getElementById( 'column-content' )
		&& document.getElementById( 'content' ) ) {
			// MonoBook, presumably
			document.getElementById( 'content' ).insertBefore(
				messageDiv,
				document.getElementById( 'content' ).firstChild
			);
		} else if ( document.getElementById('content')
		&& document.getElementById( 'article' ) ) {
			// Non-Monobook but still recognizable (old-style)
			document.getElementById( 'article').insertBefore(
				messageDiv,
				document.getElementById( 'article' ).firstChild
			);
		} else {
			return false;
		}
	}

	messageDiv.setAttribute( 'id', 'mw-js-message' );
	messageDiv.style.display = 'block';
	if( className ) {
		messageDiv.setAttribute( 'class', 'mw-js-message-'+className );
	}
	
	if (typeof message === 'object') {
		while (messageDiv.hasChildNodes()) // Remove old content
			messageDiv.removeChild(messageDiv.firstChild);
		messageDiv.appendChild (message); // Append new content
	}
	else {
		messageDiv.innerHTML = message;
	}
	return true;
}

/**
 * Inject a cute little progress spinner after the specified element
 *
 * @param element Element to inject after
 * @param id Identifier string (for use with removeSpinner(), below)
 */
function injectSpinner( element, id ) {
	var spinner = document.createElement( "img" );
	spinner.id = "mw-spinner-" + id;
	spinner.src = stylepath + "/common/images/spinner.gif";
	spinner.alt = spinner.title = "...";
	if( element.nextSibling ) {
		element.parentNode.insertBefore( spinner, element.nextSibling );
	} else {
		element.parentNode.appendChild( spinner );
	}
}

/**
 * Remove a progress spinner added with injectSpinner()
 *
 * @param id Identifier string
 */
function removeSpinner( id ) {
	var spinner = document.getElementById( "mw-spinner-" + id );
	if( spinner ) {
		spinner.parentNode.removeChild( spinner );
	}
}

function runOnloadHook() {
	// don't run anything below this for non-dom browsers
	if (doneOnloadHook || !(document.getElementById && document.getElementsByTagName)) {
		return;
	}

	// set this before running any hooks, since any errors below
	// might cause the function to terminate prematurely
	doneOnloadHook = true;

	updateTooltipAccessKeys( null );
	akeytt( null );
	setupCheckboxShiftClick();
	sortables_init();

	// Run any added-on functions
	for (var i = 0; i < onloadFuncts.length; i++) {
		onloadFuncts[i]();
	}
}

/**
 * Add an event handler to an element
 *
 * @param Element element Element to add handler to
 * @param String attach Event to attach to
 * @param callable handler Event handler callback
 */
function addHandler( element, attach, handler ) {
	if( window.addEventListener ) {
		element.addEventListener( attach, handler, false );
	} else if( window.attachEvent ) {
		element.attachEvent( 'on' + attach, handler );
	}
}

/**
 * Add a click event handler to an element
 *
 * @param Element element Element to add handler to
 * @param callable handler Event handler callback
 */
function addClickHandler( element, handler ) {
	addHandler( element, 'click', handler );
}

/**
 * Removes an event handler from an element
 *
 * @param Element element Element to remove handler from
 * @param String remove Event to remove
 * @param callable handler Event handler callback to remove
 */
function removeHandler( element, remove, handler ) {
	if( window.removeEventListener ) {
		element.removeEventListener( remove, handler, false );
	} else if( window.detachEvent ) {
		element.detachEvent( 'on' + remove, handler );
	}
}
//note: all skins should call runOnloadHook() at the end of html output,
//      so the below should be redundant. It's there just in case.
hookEvent("load", runOnloadHook);

/* filename: /common/ajax.js weight: 1*/
// remote scripting library
// (c) copyright 2005 modernmethod, inc
var sajax_debug_mode = false;
var sajax_request_type = "GET";

/**
* if sajax_debug_mode is true, this function outputs given the message into 
* the element with id = sajax_debug; if no such element exists in the document, 
* it is injected.
*/
function sajax_debug(text) {
	if (!sajax_debug_mode) return false;

	var e= document.getElementById('sajax_debug');

	if (!e) {
		e= document.createElement("p");
		e.className= 'sajax_debug';
		e.id= 'sajax_debug';

		var b= document.getElementsByTagName("body")[0];

		if (b.firstChild) b.insertBefore(e, b.firstChild);
		else b.appendChild(e);
	}

	var m= document.createElement("div");
	m.appendChild( document.createTextNode( text ) );

	e.appendChild( m );

	return true;
}

/**
* compatibility wrapper for creating a new XMLHttpRequest object.
*/
function sajax_init_object() {
	sajax_debug("sajax_init_object() called..")
	var A;
	try {
		// Try the new style before ActiveX so we don't
		// unnecessarily trigger warnings in IE 7 when
		// set to prompt about ActiveX usage
		A = new XMLHttpRequest();
	} catch (e) {
		try {
			A=new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				A=new ActiveXObject("Microsoft.XMLHTTP");
			} catch (oc) {
				A=null;
			}
		}
	}
	if (!A)
		sajax_debug("Could not create connection object.");

	return A;
}

/**
* Perform an ajax call to mediawiki. Calls are handeled by AjaxDispatcher.php
*   func_name - the name of the function to call. Must be registered in $wgAjaxExportList
*   args - an array of arguments to that function
*   target - the target that will handle the result of the call. If this is a function,
*            if will be called with the XMLHttpRequest as a parameter; if it's an input
*            element, its value will be set to the resultText; if it's another type of
*            element, its innerHTML will be set to the resultText.
*
* Example:
*    sajax_do_call('doFoo', [1, 2, 3], document.getElementById("showFoo"));
*
* This will call the doFoo function via MediaWiki's AjaxDispatcher, with
* (1, 2, 3) as the parameter list, and will show the result in the element
* with id = showFoo
*/
function sajax_do_call(func_name, args, target) {
	var i, x, n;
	var uri;
	var post_data;
	uri = wgServer +
		((wgScript == null) ? (wgScriptPath + "/index.php") : wgScript) +
		"?action=ajax";
	if (sajax_request_type == "GET") {
		if (uri.indexOf("?") == -1)
			uri = uri + "?rs=" + encodeURIComponent(func_name);
		else
			uri = uri + "&rs=" + encodeURIComponent(func_name);
		for (i = 0; i < args.length; i++)
			uri = uri + "&rsargs[]=" + encodeURIComponent(args[i]);
		//uri = uri + "&rsrnd=" + new Date().getTime();
		post_data = null;
	} else {
		post_data = "rs=" + encodeURIComponent(func_name);
		for (i = 0; i < args.length; i++)
			post_data = post_data + "&rsargs[]=" + encodeURIComponent(args[i]);
	}
	x = sajax_init_object();
	if (!x) {
		alert("AJAX not supported");
		return false;
	}

	try {
		x.open(sajax_request_type, uri, true);
	} catch (e) {
		if (window.location.hostname == "localhost") {
			alert("Your browser blocks XMLHttpRequest to 'localhost', try using a real hostname for development/testing.");
		}
		throw e;
	}
	if (sajax_request_type == "POST") {
		x.setRequestHeader("Method", "POST " + uri + " HTTP/1.1");
		x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	}
	x.setRequestHeader("Pragma", "cache=yes");
	x.setRequestHeader("Cache-Control", "no-transform");
	x.onreadystatechange = function() {
		if (x.readyState != 4)
			return;

		sajax_debug("received (" + x.status + " " + x.statusText + ") " + x.responseText);

		//if (x.status != 200)
		//	alert("Error: " + x.status + " " + x.statusText + ": " + x.responseText);
		//else

		if ( typeof( target ) == 'function' ) {
			target( x );
		}
		else if ( typeof( target ) == 'object' ) {
			if ( target.tagName == 'INPUT' ) {
				if (x.status == 200) target.value= x.responseText;
				//else alert("Error: " + x.status + " " + x.statusText + " (" + x.responseText + ")");
			}
			else {
				if (x.status == 200) target.innerHTML = x.responseText;
				else target.innerHTML= "<div class='error'>Error: " + x.status + " " + x.statusText + " (" + x.responseText + ")</div>";
			}
		}
		else {
			alert("bad target for sajax_do_call: not a function or object: " + target);
		}

		return;
	}

	sajax_debug(func_name + " uri = " + uri + " / post = " + post_data);
	x.send(post_data);
	sajax_debug(func_name + " waiting..");
	delete x;

	return true;
}

/**
 * @return boolean whether the browser supports XMLHttpRequest
 */
function wfSupportsAjax() {
	var request = sajax_init_object();
	var supportsAjax = request ? true : false;
	delete request;
	return supportsAjax;
}


/* filename: /common/mwsuggest.js weight: 1*/
/*
 * OpenSearch ajax suggestion engine for MediaWiki
 *
 * uses core MediaWiki open search support to fetch suggestions
 * and show them below search boxes and other inputs
 *
 * by Robert Stojnic (April 2008)
 */

// search_box_id -> Results object
var os_map = {};
// cached data, url -> json_text
var os_cache = {};
// global variables for suggest_keypress
var os_cur_keypressed = 0;
var os_last_keypress = 0;
var os_keypressed_count = 0;
// type: Timer
var os_timer = null;
// tie mousedown/up events
var os_mouse_pressed = false;
var os_mouse_num = -1;
// if true, the last change was made by mouse (and not keyboard)
var os_mouse_moved = false;
// delay between keypress and suggestion (in ms)
var os_search_timeout = 250;
// these pairs of inputs/forms will be autoloaded at startup
var os_autoload_inputs = new Array('searchInput', 'searchInput2', 'powerSearchText', 'searchText');
var os_autoload_forms = new Array('searchform', 'searchform2', 'powersearch', 'search' );
// if we stopped the service
var os_is_stopped = false;
// max lines to show in suggest table
var os_max_lines_per_suggest = 7;
// number of steps to animate expansion/contraction of container width
var os_animation_steps = 6;
// num of pixels of smallest step
var os_animation_min_step = 2;
// delay between steps (in ms)
var os_animation_delay = 30;
// max width of container in percent of normal size (1 == 100%)
var os_container_max_width = 2;
// currently active animation timer
var os_animation_timer = null;

/** Timeout timer class that will fetch the results */
function os_Timer(id,r,query){
	this.id = id;
	this.r = r;
	this.query = query;
}

/** Timer user to animate expansion/contraction of container width */
function os_AnimationTimer(r, target){
	this.r = r;
	var current = document.getElementById(r.container).offsetWidth;
	this.inc = Math.round((target-current) / os_animation_steps);
	if(this.inc < os_animation_min_step && this.inc >=0)
		this.inc = os_animation_min_step; // minimal animation step
	if(this.inc > -os_animation_min_step && this.inc <0)
		this.inc = -os_animation_min_step;
	this.target = target;
}

/** Property class for single search box */
function os_Results(name, formname){
	this.searchform = formname; // id of the searchform
	this.searchbox = name; // id of the searchbox
	this.container = name+"Suggest"; // div that holds results
	this.resultTable = name+"Result"; // id base for the result table (+num = table row)
	this.resultText = name+"ResultText"; // id base for the spans within result tables (+num)
	this.toggle = name+"Toggle"; // div that has the toggle (enable/disable) link
	this.query = null; // last processed query
	this.results = null;  // parsed titles
	this.resultCount = 0; // number of results
	this.original = null; // query that user entered
	this.selected = -1; // which result is selected
	this.containerCount = 0; // number of results visible in container
	this.containerRow = 0; // height of result field in the container
	this.containerTotal = 0; // total height of the container will all results
	this.visible = false; // if container is visible
}

/** Hide results div */
function os_hideResults(r){
	var c = document.getElementById(r.container);
	if(c != null)
		c.style.visibility = "hidden";
	r.visible = false;
	r.selected = -1;
}

/** Show results div */
function os_showResults(r){
	if(os_is_stopped)
		return;
	os_fitContainer(r);
	var c = document.getElementById(r.container);
	r.selected = -1;
	if(c != null){
		c.scrollTop = 0;
		c.style.visibility = "visible";
		r.visible = true;
	}
}

function os_operaWidthFix(x){
	// TODO: better css2 incompatibility detection here
	if(is_opera || is_khtml || navigator.userAgent.toLowerCase().indexOf('firefox/1')!=-1){
		return 30; // opera&konqueror & old firefox don't understand overflow-x, estimate scrollbar width
	}
	return 0;
}

function os_encodeQuery(value){
  if (encodeURIComponent) {
    return encodeURIComponent(value);
  }
  if(escape) {
    return escape(value);
  }
  return null;
}
function os_decodeValue(value){
  if (decodeURIComponent) {
    return decodeURIComponent(value);
  }
  if(unescape){
  	return unescape(value);
  }
  return null;
}

/** Brower-dependent functions to find window inner size, and scroll status */
function f_clientWidth() {
	return f_filterResults (
		window.innerWidth ? window.innerWidth : 0,
		document.documentElement ? document.documentElement.clientWidth : 0,
		document.body ? document.body.clientWidth : 0
	);
}
function f_clientHeight() {
	return f_filterResults (
		window.innerHeight ? window.innerHeight : 0,
		document.documentElement ? document.documentElement.clientHeight : 0,
		document.body ? document.body.clientHeight : 0
	);
}
function f_scrollLeft() {
	return f_filterResults (
		window.pageXOffset ? window.pageXOffset : 0,
		document.documentElement ? document.documentElement.scrollLeft : 0,
		document.body ? document.body.scrollLeft : 0
	);
}
function f_scrollTop() {
	return f_filterResults (
		window.pageYOffset ? window.pageYOffset : 0,
		document.documentElement ? document.documentElement.scrollTop : 0,
		document.body ? document.body.scrollTop : 0
	);
}
function f_filterResults(n_win, n_docel, n_body) {
	var n_result = n_win ? n_win : 0;
	if (n_docel && (!n_result || (n_result > n_docel)))
		n_result = n_docel;
	return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
}

/** Get the height available for the results container */
function os_availableHeight(r){
	var absTop = document.getElementById(r.container).style.top;
	var px = absTop.lastIndexOf("px");
	if(px > 0)
		absTop = absTop.substring(0,px);
	return f_clientHeight() - (absTop - f_scrollTop());
}


/** Get element absolute position {left,top} */
function os_getElementPosition(elemID){
	var offsetTrail = document.getElementById(elemID);
	var offsetLeft = 0;
	var offsetTop = 0;
	while (offsetTrail){
		offsetLeft += offsetTrail.offsetLeft;
		offsetTop += offsetTrail.offsetTop;
		offsetTrail = offsetTrail.offsetParent;
	}
	if (navigator.userAgent.indexOf('Mac') != -1 && typeof document.body.leftMargin != 'undefined'){
		offsetLeft += document.body.leftMargin;
		offsetTop += document.body.topMargin;
	}
	return {left:offsetLeft,top:offsetTop};
}

/** Create the container div that will hold the suggested titles */
function os_createContainer(r){
	var c = document.createElement("div");
	var s = document.getElementById(r.searchbox);
	var pos = os_getElementPosition(r.searchbox);
	var left = pos.left;
	var top = pos.top + s.offsetHeight;
	c.className = "os-suggest";
	c.setAttribute("id", r.container);
	document.body.appendChild(c);

	// dynamically generated style params
	// IE workaround, cannot explicitely set "style" attribute
	c = document.getElementById(r.container);
	c.style.top = top+"px";
	c.style.left = left+"px";
	c.style.width = s.offsetWidth+"px";

	// mouse event handlers
	c.onmouseover = function(event) { os_eventMouseover(r.searchbox, event); };
	c.onmousemove = function(event) { os_eventMousemove(r.searchbox, event); };
	c.onmousedown = function(event) { return os_eventMousedown(r.searchbox, event); };
	c.onmouseup = function(event) { os_eventMouseup(r.searchbox, event); };
	return c;
}

/** change container height to fit to screen */
function os_fitContainer(r){
	var c = document.getElementById(r.container);
	var h = os_availableHeight(r) - 20;
	var inc = r.containerRow;
	h = parseInt(h/inc) * inc;
	if(h < (2 * inc) && r.resultCount > 1) // min: two results
		h = 2 * inc;
	if((h/inc) > os_max_lines_per_suggest )
		h = inc * os_max_lines_per_suggest;
	if(h < r.containerTotal){
		c.style.height = h +"px";
		r.containerCount = parseInt(Math.round(h/inc));
	} else{
		c.style.height = r.containerTotal+"px";
		r.containerCount = r.resultCount;
	}
}
/** If some entries are longer than the box, replace text with "..." */
function os_trimResultText(r){
	// find max width, first see if we could expand the container to fit it
	var maxW = 0;
	for(var i=0;i<r.resultCount;i++){
		var e = document.getElementById(r.resultText+i);
		if(e.offsetWidth > maxW)
			maxW = e.offsetWidth;
	}
	var w = document.getElementById(r.container).offsetWidth;
	var fix = 0;
	if(r.containerCount < r.resultCount){
		fix = 20; // give 20px for scrollbar
	} else
		fix = os_operaWidthFix(w);
	if(fix < 4)
		fix = 4; // basic padding
	maxW += fix;

	// resize container to fit more data if permitted
	var normW = document.getElementById(r.searchbox).offsetWidth;
	var prop = maxW / normW;
	if(prop > os_container_max_width)
		prop = os_container_max_width;
	else if(prop < 1)
		prop = 1;
	var newW = Math.round( normW * prop );
	if( w != newW ){
		w = newW;
		if( os_animation_timer != null )
			clearInterval(os_animation_timer.id)
		os_animation_timer = new os_AnimationTimer(r,w);
		os_animation_timer.id = setInterval("os_animateChangeWidth()",os_animation_delay);
		w -= fix; // this much is reserved
	}

	// trim results
	if(w < 10)
		return;
	for(var i=0;i<r.resultCount;i++){
		var e = document.getElementById(r.resultText+i);
		var replace = 1;
		var lastW = e.offsetWidth+1;
		var iteration = 0;
		var changedText = false;
		var txt = e.innerHTML;
		txt = txt.replace(/^[A-Z]{2}:/,"");
		txt = txt.replace(/User:/,"");
		e.innerHTML = txt.replace(/[\u2080-\u2099]+/,"");
		while(e.offsetWidth > w && (e.offsetWidth < lastW || iteration<2)){
			changedText = true;
			lastW = e.offsetWidth;
			var l = e.innerHTML;
			e.innerHTML = l.substring(0,l.length-replace)+"...";
			iteration++;
			replace = 4; // how many chars to replace
		}
		if(changedText){
			// show hint for trimmed titles
			document.getElementById(r.resultTable+i).setAttribute("title",r.results[i]);
		}
	}
}

/** Invoked on timer to animate change in container width */
function os_animateChangeWidth(){
	var r = os_animation_timer.r;
	var c = document.getElementById(r.container);
	var w = c.offsetWidth;
	var normW = document.getElementById(r.searchbox).offsetWidth;
	var normL = os_getElementPosition(r.searchbox).left;
	var inc = os_animation_timer.inc;
	var target = os_animation_timer.target;
	var nw = w + inc;
	if( (inc > 0 && nw >= target) || (inc <= 0 && nw <= target) ){
		// finished !
		c.style.width = target+"px";
		clearInterval(os_animation_timer.id)
		os_animation_timer = null;
	} else{
		// in-progress
		c.style.width = nw+"px";
		if(document.documentElement.dir == "rtl")
			c.style.left = (normL + normW + (target - nw) - os_animation_timer.target - 1)+"px";
	}
}

/** Handles data from XMLHttpRequest, and updates the suggest results */
function os_updateResults(r, query, text, cacheKey){
	os_cache[cacheKey] = text;
	r.query = query;
	r.original = query;
	if(text == ""){
		r.results = null;
		r.resultCount = 0;
		os_hideResults(r);
	} else{
		try {
			var p = eval('('+text+')'); // simple json parse, could do a safer one
			if(p.length<2 || p[1].length == 0){
				r.results = null;
				r.resultCount = 0;
				os_hideResults(r);
				return;
			}
			var c = document.getElementById(r.container);
			if(c == null)
				c = os_createContainer(r);
			c.innerHTML = os_createResultTable(r,p[1]);
			// init container table sizes
			var t = document.getElementById(r.resultTable);
			r.containerTotal = t.offsetHeight;
			r.containerRow = t.offsetHeight / r.resultCount;
			os_fitContainer(r);
			os_trimResultText(r);
			os_showResults(r);
		} catch(e){
			// bad response from server or such
			os_hideResults(r);
			os_cache[cacheKey] = null;
		}
	}
}

/** Create the result table to be placed in the container div */
function os_createResultTable(r, results){
	var c = document.getElementById(r.container);
	var width = c.offsetWidth - os_operaWidthFix(c.offsetWidth);
	var html = "<table class=\"os-suggest-results\" id=\""+r.resultTable+"\" style=\"width: "+width+"px;\">";
	r.results = new Array();
	r.resultCount = results.length;
	for(i=0;i<results.length;i++){
		var title = os_decodeValue(results[i]);
		r.results[i] = title;
		html += "<tr><td class=\"os-suggest-result\" id=\""+r.resultTable+i+"\"><span id=\""+r.resultText+i+"\">"+title+"</span></td></tr>";
	}
	html+="</table>"
	return html;
}

/** Fetch namespaces from checkboxes or hidden fields in the search form,
    if none defined use wgSearchNamespaces global */
function os_getNamespaces(r){
	var namespaces = "";
	var elements = document.forms[r.searchform].elements;
	for(i=0; i < elements.length; i++){
		var name = elements[i].name;
		if(typeof name != 'undefined' && name.length > 2
		&& name[0]=='n' && name[1]=='s'
		&& ((elements[i].type=='checkbox' && elements[i].checked)
		 	|| (elements[i].type=='hidden' && elements[i].value=="1")) ){
			if(namespaces!="")
				namespaces+="|";
			namespaces+=name.substring(2);
		}
	}
	if(namespaces == "")
		namespaces = wgSearchNamespaces.join("|");
	
	
	return namespaces;
}

/** Update results if user hasn't already typed something else */
function os_updateIfRelevant(r, query, text, cacheKey){
	var t = document.getElementById(r.searchbox);
	if(t != null && t.value == query){ // check if response is still relevant
		os_updateResults(r, query, text, cacheKey);
	}
	r.query = query;
}

/** Fetch results after some timeout */
function os_delayedFetch(){
	if(os_timer == null)
		return;
	var r = os_timer.r;
	var query = os_timer.query;
	
	os_timer = null;
	var path = wgMWSuggestTemplate.replace("{namespaces}",os_getNamespaces(r))
							  	  .replace("{dbname}",wgDBname)
							  	  .replace("{searchTerms}",os_encodeQuery(query));

	// try to get from cache, if not fetch using ajax
	var cached = os_cache[path];
	if(cached != null){
		os_updateIfRelevant(r, query, cached, path);
	} else{
		var xmlhttp = sajax_init_object();
		if(xmlhttp){
			try {
				xmlhttp.open("GET", path, true);
				xmlhttp.onreadystatechange=function(){
		        	if (xmlhttp.readyState==4 && typeof os_updateIfRelevant == 'function') {
		        		os_updateIfRelevant(r, query, xmlhttp.responseText, path);
	        		}
	      		};
	     		xmlhttp.send(null);
	     	} catch (e) {
				if (window.location.hostname == "localhost") {
					alert("Your browser blocks XMLHttpRequest to 'localhost', try using a real hostname for development/testing.");
				}
				throw e;
			}
		}
	}
}

/** Init timed update via os_delayedUpdate() */
function os_fetchResults(r, query, timeout){
	if(query == ""){
		os_hideResults(r);
		return;
	} else if(query == r.query)
		return; // no change

	os_is_stopped = false; // make sure we're running

	/* var cacheKey = wgDBname+":"+query;
	var cached = os_cache[cacheKey];
	if(cached != null){
		os_updateResults(r,wgDBname,query,cached);
		return;
	} */

	// cancel any pending fetches
	if(os_timer != null && os_timer.id != null)
		clearTimeout(os_timer.id);
	// schedule delayed fetching of results
	if(timeout != 0){
		os_timer = new os_Timer(setTimeout("os_delayedFetch()",timeout),r,query);
	} else{
		os_timer = new os_Timer(null,r,query);
		os_delayedFetch(); // do it now!
	}

}
/** Change the highlighted row (i.e. suggestion), from position cur to next */
function os_changeHighlight(r, cur, next, updateSearchBox){
	if (next >= r.resultCount)
		next = r.resultCount-1;
	if (next < -1)
		next = -1;
	r.selected = next;
   	if (cur == next)
    	return; // nothing to do.

    if(cur >= 0){
    	var curRow = document.getElementById(r.resultTable + cur);
    	if(curRow != null)
    		curRow.className = "os-suggest-result";
    }
    var newText;
    if(next >= 0){
    	var nextRow = document.getElementById(r.resultTable + next);
    	if(nextRow != null)
    		nextRow.className = os_HighlightClass();
    	newText = r.results[next];
    } else
    	newText = r.original;

    // adjust the scrollbar if any
    if(r.containerCount < r.resultCount){
    	var c = document.getElementById(r.container);
    	var vStart = c.scrollTop / r.containerRow;
    	var vEnd = vStart + r.containerCount;
    	if(next < vStart)
    		c.scrollTop = next * r.containerRow;
    	else if(next >= vEnd)
    		c.scrollTop = (next - r.containerCount + 1) * r.containerRow;
    }

    // update the contents of the search box
    if(updateSearchBox){
    	os_updateSearchQuery(r,newText);
    }
}

function os_HighlightClass() {
	var match = navigator.userAgent.match(/AppleWebKit\/(\d+)/);
	if (match) {
		var webKitVersion = parseInt(match[1]);
		if (webKitVersion < 523) {
			// CSS system highlight colors broken on old Safari
			// https://bugs.webkit.org/show_bug.cgi?id=6129
			// Safari 3.0.4, 3.1 known ok
			return "os-suggest-result-hl-webkit";
		}
	}
	return "os-suggest-result-hl";
}

function os_updateSearchQuery(r,newText){
	newText = newText.replace(/^[A-Z]{2}:/,"").replace(/[\u2080-\u2099]+/,"").replace(/User:/,"");
	document.getElementById(r.searchbox).value = newText;
    r.query = newText;
}

/** Find event target */
function os_getTarget(e){
	if (!e) e = window.event;
	if (e.target) return e.target;
	else if (e.srcElement) return e.srcElement;
	else return null;
}



/********************
 *  Keyboard events
 ********************/

/** Event handler that will fetch results on keyup */
function os_eventKeyup(e){
	var targ = os_getTarget(e);
	var r = os_map[targ.id];
	if(r == null)
		return; // not our event

	// some browsers won't generate keypressed for arrow keys, catch it
	if(os_keypressed_count == 0){
		os_processKey(r,os_cur_keypressed,targ);
	}
	var query = targ.value;
	os_fetchResults(r,query,os_search_timeout);
}

/** catch arrows up/down and escape to hide the suggestions */
function os_processKey(r,keypressed,targ){
	if (keypressed == 40){ // Arrow Down
    	if (r.visible) {
      		os_changeHighlight(r, r.selected, r.selected+1, true);
    	} else if(os_timer == null){
    		// user wants to get suggestions now
    		r.query = "";
			os_fetchResults(r,targ.value,0);
    	}
  	} else if (keypressed == 38){ // Arrow Up
  		if (r.visible){
  			os_changeHighlight(r, r.selected, r.selected-1, true);
  		}
  	} else if(keypressed == 27){ // Escape
  		document.getElementById(r.searchbox).value = r.original;
  		r.query = r.original;
  		os_hideResults(r);
  	} else if(r.query != document.getElementById(r.searchbox).value){
  		// os_hideResults(r); // don't show old suggestions
  	}
}

/** When keys is held down use a timer to output regular events */
function os_eventKeypress(e){
	var targ = os_getTarget(e);
	var r = os_map[targ.id];
	if(r == null)
		return; // not our event

	var keypressed = os_cur_keypressed;
	if(keypressed == 38 || keypressed == 40){
		var d = new Date()
		var now = d.getTime();
		if(now - os_last_keypress < 120){
			os_last_keypress = now;
			return;
		}
	}

	os_keypressed_count++;
	os_processKey(r,keypressed,targ);
}

/** Catch the key code (Firefox bug)  */
function os_eventKeydown(e){
	if (!e) e = window.event;
	var targ = os_getTarget(e);
	var r = os_map[targ.id];
	if(r == null)
		return; // not our event

	os_mouse_moved = false;

	os_cur_keypressed = (e.keyCode == undefined) ? e.which : e.keyCode;
	os_last_keypress = 0;
	os_keypressed_count = 0;
}

/** Event: loss of focus of input box */
function os_eventBlur(e){
	var targ = os_getTarget(e);
	var r = os_map[targ.id];
	if(r == null)
		return; // not our event
	if(!os_mouse_pressed)
		os_hideResults(r);
}

/** Event: focus (catch only when stopped) */
function os_eventFocus(e){
	// nothing happens here?
}



/********************
 *  Mouse events
 ********************/

/** Mouse over the container */
function os_eventMouseover(srcId, e){
	var targ = os_getTarget(e);
	var r = os_map[srcId];
	if(r == null || !os_mouse_moved)
		return; // not our event
	var num = os_getNumberSuffix(targ.id);
	if(num >= 0)
		os_changeHighlight(r,r.selected,num,false);

}

/* Get row where the event occured (from its id) */
function os_getNumberSuffix(id){
	var num = id.substring(id.length-2);
	if( ! (num.charAt(0) >= '0' && num.charAt(0) <= '9') )
		num = num.substring(1);
	if(os_isNumber(num))
		return parseInt(num);
	else
		return -1;
}

/** Save mouse move as last action */
function os_eventMousemove(srcId, e){
	os_mouse_moved = true;
}

/** Mouse button held down, register possible click  */
function os_eventMousedown(srcId, e){
	var targ = os_getTarget(e);
	var r = os_map[srcId];
	if(r == null)
		return; // not our event
	var num = os_getNumberSuffix(targ.id);

	os_mouse_pressed = true;
	if(num >= 0){
		os_mouse_num = num;
		// os_updateSearchQuery(r,r.results[num]);
	}
	// keep the focus on the search field
	document.getElementById(r.searchbox).focus();

	return false; // prevents selection
}

/** hide namespace in the search box
 * Bill, 12/29/2010 */
function os_hideNS(r) {
	var sb = document.getElementById(r.searchbox);
	var sv = document.createElement('input');
	sv.type = 'hidden';
	sv.name = sb.name;
	sb.name = "no use";
	sv.value = sb.value;
	sb.value = sb.value.replace(/^[A-Z]{2}:/,"").replace(/[\u2080-\u2099]+/,"").replace(/User:/,"");
	
	sb.parentNode.appendChild(sv);
}

/** Mouse button released, check for click on some row */
function os_eventMouseup(srcId, e){
	var targ = os_getTarget(e);
	var r = os_map[srcId];
	if(r == null)
		return; // not our event
	var num = os_getNumberSuffix(targ.id);

	if(num >= 0 && os_mouse_num == num){
		os_updateSearchQuery(r,r.results[num]);
		os_hideNS(r); //hide namespace -Bill, 12/29/2010
		os_hideResults(r);
		document.getElementById(r.searchform).submit();
	}
	os_mouse_pressed = false;
	// keep the focus on the search field
	document.getElementById(r.searchbox).focus();
}

/** Check if x is a valid integer */
function os_isNumber(x){
	if(x == "" || isNaN(x))
		return false;
	for(var i=0;i<x.length;i++){
		var c = x.charAt(i);
		if( ! (c >= '0' && c <= '9') )
			return false;
	}
	return true;
}


/** When the form is submitted hide everything, cancel updates... */
function os_eventOnsubmit(e){
	var targ = os_getTarget(e);

	os_is_stopped = true;
	// kill timed requests
	if(os_timer != null && os_timer.id != null){
		clearTimeout(os_timer.id);
		os_timer = null;
	}
	// Hide all suggestions
	for(i=0;i<os_autoload_inputs.length;i++){
		var r = os_map[os_autoload_inputs[i]];
		if(r != null){
			var b = document.getElementById(r.searchform);
			if(b != null && b == targ){
				// set query value so the handler won't try to fetch additional results
				r.query = document.getElementById(r.searchbox).value;
			}
			os_hideResults(r);
		}
	}
	return true;
}

function os_hookEvent(element, hookName, hookFunct) {
	if (element.addEventListener) {
		element.addEventListener(hookName, hookFunct, false);
	} else if (window.attachEvent) {
		element.attachEvent("on" + hookName, hookFunct);
	}
}

/** Init Result objects and event handlers */
function os_initHandlers(name, formname, element){
	var r = new os_Results(name, formname);
	// event handler
	os_hookEvent(element, "keyup", function(event) { os_eventKeyup(event); });
	os_hookEvent(element, "keydown", function(event) { os_eventKeydown(event); });
	os_hookEvent(element, "keypress", function(event) { os_eventKeypress(event); });
	os_hookEvent(element, "blur", function(event) { os_eventBlur(event); });
	os_hookEvent(element, "focus", function(event) { os_eventFocus(event); });
	element.setAttribute("autocomplete","off");
	// stopping handler
	os_hookEvent(document.getElementById(formname), "submit", function(event){ return os_eventOnsubmit(event); });
	os_map[name] = r;
	// toggle link
	if(document.getElementById(r.toggle) == null){
		// TODO: disable this while we figure out a way for this to work in all browsers
		/* if(name=='searchInput'){
			// special case: place above the main search box
			var t = os_createToggle(r,"os-suggest-toggle");
			var searchBody = document.getElementById('searchBody');
			var first = searchBody.parentNode.firstChild.nextSibling.appendChild(t);
		} else{
			// default: place below search box to the right
			var t = os_createToggle(r,"os-suggest-toggle-def");
			var top = element.offsetTop + element.offsetHeight;
			var left = element.offsetLeft + element.offsetWidth;
			t.style.position = "absolute";
			t.style.top = top + "px";
			t.style.left = left + "px";
			element.parentNode.appendChild(t);
			// only now width gets calculated, shift right
			left -= t.offsetWidth;
			t.style.left = left + "px";
			t.style.visibility = "visible";
		} */
	}

}

/** Return the span element that contains the toggle link */
function os_createToggle(r,className){
	var t = document.createElement("span");
	t.className = className;
	t.setAttribute("id", r.toggle);
	var link = document.createElement("a");
	link.setAttribute("href","javascript:void(0);");
	link.onclick = function(){ os_toggle(r.searchbox,r.searchform) };
	var msg = document.createTextNode(wgMWSuggestMessages[0]);
	link.appendChild(msg);
	t.appendChild(link);
	return t;
}

/** Call when user clicks on some of the toggle links */
function os_toggle(inputId,formName){
	r = os_map[inputId];
	var msg = '';
	if(r == null){
		os_enableSuggestionsOn(inputId,formName);
		r = os_map[inputId];
		msg = wgMWSuggestMessages[0];
	} else{
		os_disableSuggestionsOn(inputId,formName);
		msg = wgMWSuggestMessages[1];
	}
	// change message
	var link = document.getElementById(r.toggle).firstChild;
	link.replaceChild(document.createTextNode(msg),link.firstChild);
}

/** Call this to enable suggestions on input (id=inputId), on a form (name=formName) */
function os_enableSuggestionsOn(inputId, formName){
	os_initHandlers( inputId, formName, document.getElementById(inputId) );
}

/** Call this to disable suggestios on input box (id=inputId) */
function os_disableSuggestionsOn(inputId){
	r = os_map[inputId];
	if(r != null){
		// cancel/hide results
		os_timer = null;
		os_hideResults(r);
		// turn autocomplete on !
		document.getElementById(inputId).setAttribute("autocomplete","on");
		// remove descriptor
		os_map[inputId] = null;
	}
}

/** Initialization, call upon page onload */
function os_MWSuggestInit() {
	for(i=0;i<os_autoload_inputs.length;i++){
		var id = os_autoload_inputs[i];
		var form = os_autoload_forms[i];
		element = document.getElementById( id );
		if(element != null)
			os_initHandlers(id,form,element);
	}
}

hookEvent("load", os_MWSuggestInit);

/* filename: /common/termwiki.js weight: 1*/
//Public

function in_array(needle, haystack) {
	if(typeof needle == 'string' || typeof needle == 'number') {
	for(var i in haystack) {
		if(haystack[i] == needle) {
			return true;
		}
		}
	}
	return false;
}



function getCookieValue(cName){
	var strCookie=document.cookie;
	if(cName !=''){
		var arrCookie=strCookie.split(";");
		var cValue;
		for(var i=0;i<arrCookie.length;i++){
			var arr=arrCookie[i].split("=");
			if(cName == arr[0].replace(/(^\s*)|(\s*$)/g, "") ){
				cValue= arr[1];
				return cValue;
			}
		}
	}else{
        	return strCookie;

	}
}

function setCookie(name,value,days){
  var Days = days;
  var exp  = new Date();    
  exp.setTime(exp.getTime() + Days*24*60*60*1000);
  document.cookie = name + "="+ escape(value) +";expires="+ exp.toGMTString()+";path=/;domain="+wgCookieDomain;
}

function getCookie(name)
{
  var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
  if(arr != null) return unescape(arr[2]); return null;
}

function delCookie(name)
{
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval=getCookie(name);
  if(cval!=null) document.cookie=name +"="+cval+";expires="+exp.toGMTString();
}


//show and hide property
function show_hidden_properties(){
   document.cookie = 'showHiddenProperties=true;path=/;';
   document.location=document.location.href;
}

function hide_properties(){
   document.cookie = 'showHiddenProperties=;path=/;';
   document.location=document.location.href;
}

function selectLanguages(shtml)
{
  set_test_dialog(shtml);
 // loadDialog(gid,'thread');
  $('#dialog_otherLanguages').dialog('open');
  //$('#dialog_otherLanguages').dialog('moveToTop');

}


//show and hide the language
function set_test_dialog(content)
{
    var dlg_html = '<div id="dialog_otherLanguages" title="Add or Remove Language Links">';
    dlg_html += '<input type="hidden" id="test_id" value=""/>';
	dlg_html += content;
    dlg_html += '</div>';

    if($('#dialog_otherLanguages').html()==null)
    {
        $('body').append(dlg_html);
        $("#dialog_otherLanguages").dialog({
            bgiframe: true,
            autoOpen: false,
            //height: 400,
            width:580,
           // modal: true,
            position:['center'],
            buttons: {
				'Apply': function(){
					languageBar_select(aDefaultLangs,aUserLangs);
					//if($('#result').val()==1){	
						//var tid = $('#test_id').val();
						//$.get("baby.php", {action: "savetest",tid:tid,result:'1'},function(data){
							//alert(data);
						//}); 
					//}

					$(this).dialog('close');	
				},
                'Cancel': function() {
					$(this).dialog('close');
				}
				
			},
				
			close: function(){	
			}
	});
    }
}

function languageBar_select(aDefaultLangs,aUserLangs){
  var oLang=document.getElementsByName('lang[]');
  var sLang='';
  var aLang=[];
  for(var i=0,sum=oLang.length;i<sum;i++){
     if(oLang[i].checked){
        if(aDefaultLangs.toString().indexOf(oLang[i].value)!=-1 || aUserLangs.toString().indexOf(oLang[i].value) != -1){
        }else{
            aLang.push(oLang[i].value);   //sLang += oLang[i].getAttribute("value");
        }
    }
  }
  sLang=aLang.join(","); 

  //setCookie('langOptions',sLang,0);
   delCookie('langOptions');
   document.cookie = 'langOptions='+sLang+';path=/;';
   document.location=document.location.href;

}

//get the all languages input
function show_all_languages(aLanguages,aDefaultLangs,aUserLangs,aLangShowed){
  var sBar='';
  sBar += '<table cellspacing="0" cellpadding="0" border="0" style="border-spacing:0px;"><tr>';
  sBar += '<td valign="bottom"><span class="span_lang"><input type="checkbox" onclick="checkAllLanguages(this,\'lang[]\')" />Select all languages</span></td>';
  sBar += '<td><div style="margin:0 0 0 3px">Please select additional target languages to display. Registered users can also ' + userLink + ' to display on their user profile page.</div></td>';
  sBar += '</tr></table>';
  sBar += '<hr>';

  for(var i=0,sum=aLanguages.length;i<sum;i++){
      if(in_array(aLanguages[i],aDefaultLangs) || in_array(aLanguages[i],aUserLangs) ){
        sBar += '<span class="span_lang"><input type="checkbox" name="lang[]" value="'+aLanguages[i].match(/\((.+?)\)/i)[1] +'" checked="checked"  disabled="disabled" />'+aLanguages[i]+'</span>';
      }else{
         if(in_array(aLanguages[i],aLangShowed)){
          sBar += '<span class="span_lang"><input type="checkbox" name="lang[]" value="'+aLanguages[i].match(/\((.+?)\)/i)[1] +'"  checked="checked"/>'+aLanguages[i]+'</span>';
       }else{
    
        sBar += '<span class="span_lang"><input type="checkbox" name="lang[]" value="'+aLanguages[i].match(/\((.+?)\)/i)[1] +'" />'+aLanguages[i]+'</span>';
       }
      }
  }

  return   sBar;
}

function checkAll(obj,name) { 
    var bFlag=obj.checked?true:false;
    var el = document.getElementsByTagName('input'); 
    var len = el.length; 
    for(var i=0; i<len;i++){
        if((el[i].type=="checkbox") && (el[i].name==name))  {  
            el[i].checked = bFlag; 
       } 
    }
} 

function checkAllLanguages(obj,name) { 
    var bFlag=obj.checked?true:false;
    var el = document.getElementsByTagName('input'); 
    var len = el.length; 
    for(var i=0; i<len;i++){
        if((el[i].type=="checkbox") && (el[i].name==name))  {  
			
			if(!el[i].disabled){
				el[i].checked = bFlag; 
			}
       } 
    }
}


//Check the image status. If it is not completed, remove it.
function twClearImagesFor(objid) {
	var div = document.getElementById(objid);
	if (div && (typeof(div) == "object")) {
		var imgs = div.getElementsByTagName("img");
		var len = imgs.length;
		for (i = len-1; i >= 0; i--) {
			if(!imgs[i].complete) {
				imgs[i].parentElement.removeChild(imgs[i]);
			}
		}
	}
}
function twCheckImages(){
	twClearImagesFor("termRelatedImages");
	twClearImagesFor("termRelatedVideos");
}
setTimeout('twCheckImages();', 5000);




function showDialogMsg(sTitle , sContent )
{
	creatDialogMsg(sTitle, sContent);
	$('#twDialogMsg').dialog('open');
}


//create message Dialog
function creatDialogMsg(sTitle, sContent)
{
	sTitle = (!sTitle) ? '' : sTitle;
	sContent = (!sContent) ? "" : sContent;

	var aHtml =[];

	aHtml.push('<div id="twDialogMsg" title="' + sTitle + '">');
	aHtml.push('<input type="hidden" id="test_id" value=""/>');
	aHtml.push(sContent);
	aHtml.push('</div>');
	var sHtml = aHtml.join("\n");

	if($('#twDialogMsg').html() == null)
	{
		$('body').append(sHtml);
		$("#twDialogMsg").dialog({
			bgiframe : true,
			autoOpen : false,
			height   : 100,
			width    : 500,
			// modal : true,
			position : ['center'],
			/*
			buttons  : {
				'Apply'  : function(){
					$(this).dialog('close');	
				},
				'Cancel' : function() {
					$(this).dialog('close');
				}
			},
			*/
			close    : function(){
				$("#twDialogMsg").remove();
			}
		});
	}
}

/**
* Remove the subscript from title
* author:Tom tang
*/
function twRemoveSubscript(sTitle){
	return sTitle.replace(/ [\u2080-\u2089]+( [\u208a\u2090-\u2094])?$/g,'');
}

/**
 * Get a random string
 *
 * @author: Louis Liu
 */
function randomString(chars,len){
	if (!chars){
		chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	}
	if (!len) len = 6;
	var string_length = len;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}
//////////////////////////////////////

/**
 * Get a event object
 *
 * @author: Tom Tang
 */
	function GetEvent(){
		if(document.all) // IE
		{
			return window.event;
		}
		func = GetEvent.caller; // 返回调用本函数的函数
		while (func != null) {
		  // Firefox 中一个隐含的对象 arguments，第一个参数为 event 对象  
		  var arg0 = func.arguments[0];
		//  alert('参数长度：' + func.arguments.length);

		  if(arg0)
		  {
			  if((arg0.constructor == Event || arg0.constructor == MouseEvent)
				  ||(typeof(arg0) == "object" && arg0.preventDefault && arg0.stopPropagation))
			  {
				  return arg0;
			  }
		  }
		  func = func.caller;
	  }
		return null;
	}


	// added by tom 2011-03-31
function  checkTitleProper(sTitle) {

	var matches;
	if (matches = sTitle.match(/^([^()]+)\((.*?)\)$/)) {
		var words = matches[1].split(/\s+/);
		var tString = matches[2].replace(/(^\s+)|(\s+$)/,"");
		var fChars = [];
		for( var i=0,len = words.length; i<len; i++){
			fChars[i] = words[i].charAt(0);
		}
		//alert('/' +fChars.join('').toUpperCase() + '/');
		//alert('/' +tString.toUpperCase()+ '/');
		if(fChars.join('').toUpperCase() == tString.toUpperCase()){
			return sTitle.replace(/\(.*?\)/,'(' + tString.toUpperCase() + ')');
		} else {
			return false;
		}
	}
	return sTitle;
}

function checkTermCaps2(sTitle, obj) {
	if(/^[A-Z_,\-() \']+$/.test(sTitle)){
		var bRes =window.confirm("Acronyms should be entered with the original term fully spelled in lower case followed by the acronym in parenthesis. For example, CPU should be entered as \"central processing unit (CPU)\". " + "\n" + "If you decide to leave it as is, this term will be subject for review and may take sometime to appear in the system.","Leave as is","Cancel");
		if(!bRes){
			obj.focus();
			return false;
		 }
	}else{
		if(/[A-Z]/.test(sTitle)){
			if(!/^[0-9a-z_,\-() \']+\([A-Z]+\)$/.test(sTitle)){
				var bRes =window.confirm("Terms with captial letters are subject to review and they may not appear in the system for some time.","Confirm","Cancel");
				if(!bRes){
					obj.focus();
					return false;
				}
			}
		}
	}
	return true;
}



function checkTermCaps(sTitle, obj, property) {

	var isValid = 0;
	var msg ='';

	sTitle = sTitle.replace(/–/g,'-');
	sTitle = sTitle.replace(/(^\s+)|(\s+$)/,"");
	
	if(!/^[\x00-\xff\u2122]+$/.test(sTitle)){
		isValid = 1;
	}
	
	if(/^[A-Z_,\-() \']+$/.test(sTitle)){
		isValid = 1;
	}else{
		if(/[A-Z]/.test(sTitle)){
			if(!/^[0-9a-z_,\-() \']+\([A-Z]+\)$/.test(sTitle)){
				isValid = 1;
			}
		}
	}
	if(isValid) {
		return false;
	}
	return true;
}

function langDetect(sourceText){

	var newScript = document.createElement('script');
	newScript.type = 'text/javascript';
	var source = 'https://www.googleapis.com/language/translate/v2/detect?key=AIzaSyCUPPF3DAC27yzng7lbPBvcijJDchGHfI0&&source=en&target=de&callback=translateText&q=' + encodeURIComponent( sourceText );
	newScript.src = source;

	// When we add this script to the head, the request is sent off.
	document.getElementsByTagName('head')[0].appendChild(newScript);

}

/**
 * show images with floatbox's method
 * @author Louis Liu
 */
function twShowImage(o)
{
   fb.start({ href:o.rel, rev:o.rev});
   return false;
}

/**
 * show videos with floatbox's method
 * @author Louis Liu
 */
function twShowVideo(o){
    window.open(o.rel);
}

function twFacebookLike(){
	if($("#fb-root").length>0){
		$("#fb-root").html('<script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like href="www.termwiki.com" send="true" width="450" show_faces="false" font="arial"></fb:like>');
	}
}

$(function() {
	twFacebookLike();
});

function twGetNSS(ns_text) {
	var ns_s = ns_text.replace(/^Pro( |_)/i, '');
	return ns_s;
}


function refreshThePage(){
        self.location.href=location.href;
 }
 


function openGoogleWindows(text, sl, tl) {
	sl = sl.toLowerCase();
	sl = sl.replace("zs", "zh-CN");
	sl = sl.replace("zt", "zh-TW");
	sl = sl.replace("pt", "pt-PT");

	tl = tl.toLowerCase();
	tl = tl.replace("zs", "zh-CN");
	tl = tl.replace("zt", "zh-TW");
	tl = tl.replace("pt", "pt-PT");

	var currWindow = window.open("http://translate.google.cn/?hl=en#" + sl + "|" + tl + "|" + text, "newwindow", "height=400, width=780, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
	currWindow.focus();

}

//added by Alim 2012-5-9 2
/**
 *@return ajax url 
 */
	function twGetAjaxUrl(func_name,func_option){
		var uri;
		uri = wgServer +
			((wgScript == null) ? (wgScriptPath + "/index.php") : wgScript) +
			"?action=ajax";
		if (uri.indexOf("?") == -1)
			uri = uri + "?rs=" + encodeURIComponent(func_name)+'&'+func_option;
		else
			uri = uri + "&rs=" + encodeURIComponent(func_name)+'&'+func_option;
		return uri;
	}

function twGoToUrl(url)
{
	window.location.href = url;
}
function getMobileLang(){
	var lang;
    if (navigator
            && navigator.userAgent
            && (lang = navigator.userAgent
                    .match(/android.*\W(\w\w)-(\w\w)\W/i))) {
        lang = lang[1];
    }

    if (!lang && navigator) {
        if (navigator.language) {
            lang = navigator.language;
        } else if (navigator.browserLanguage) {
            lang = navigator.browserLanguage;
        } else if (navigator.systemLanguage) {
            lang = navigator.systemLanguage;
        } else if (navigator.userLanguage) {
            lang = navigator.userLanguage;
        }
        lang = lang.substr(0, 2);
    }
    
    console.log("current language is", lang);
    return lang;
}
function twContains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}
//insert user fiends info on upper right,for web not for mobile
//$(function(){
//    if('1'==getCookie('devislogin')){
//		var domain=document.domain;
//		var t=document.domain.indexOf(".");
//		var sub=document.domain.substring(0,t);
//		if(domain.match(/.m./i)==".m." || "m."==domain.substring(0,2) || 'pro'==sub)
//		{
//			return true;
//		}else{			
//			$.ajax({
//				type : "POST",
//				url : "/Special:UserFriendsActivities?action=js",
//				beforeSend     : function() {
//					
//				},
//				success : function(response) {
//					$("body").append(response);
//					if(typeof(twPersonalExtensions)!='undefined')
//					{
//						twPersonalExtensions.init();	
//					}
//					if(typeof(pchat)!='undefined')
//					{
//						pchat.init();
//					}	
//				}
//			});
//			
//		}
//   }
//})


/* filename: /common/twLangName.js weight: 1*/
var twLangName = {'AF':'Afrikaans (AF)','AK':'Akan (AK)','SQ':'Albanian (SQ)','AE':'American English (AE)','AM':'Amharic (AM)','AR':'Arabic (AR)','HY':'Armenian (HY)','AZ':'Azerbaijani (AZ)','EU':'Basque (EU)','BE':'Belarusian (BE)','BN':'Bengali (BN)','BH':'Bihari (BH)','BS':'Bosnian (BS)','PB':'Portuguese, Brazilian (PB)','BR':'Breton (BR)','BG':'Bulgarian (BG)','KM':'Cambodian (KM)','CF':'French, Canadian (CF)','CA':'Catalan (CA)','CK':'Chuukese (CK)','CO':'Corsican (CO)','HR':'Croatian (HR)','CS':'Czech (CS)','DA':'Danish (DA)','NL':'Dutch (NL)','EN':'English (EN)','EO':'Esperanto (EO)','ET':'Estonian (ET)','FO':'Faroese (FO)','TL':'Filipino (TL)','FI':'Finnish (FI)','FR':'French (FR)','FY':'Frisian (FY)','GL':'Galician (GL)','KA':'Georgian (KA)','DE':'German (DE)','EL':'Greek (EL)','GN':'Guarani (GN)','GU':'Gujarati (GU)','HA':'Hausa (HA)','HW':'Hawaiian (HW)','IW':'Hebrew (IW)','HI':'Hindi (HI)','HU':'Hungarian (HU)','IS':'Icelandic (IS)','IG':'Igbo (IG)','ID':'Indonesian (ID)','IA':'Interlingua (IA)','GA':'Irish (GA)','IT':'Italian (IT)','JA':'Japanese (JA)','JW':'Javanese (JW)','KN':'Kannada (KN)','KK':'Kazakh (KK)','RW':'Kinyarwanda (RW)','RN':'Kirundi (RN)','KL':'Klingon (KL)','KO':'Korean (KO)','KU':'Kurdish (KU)','KY':'Kyrgyz (KY)','LO':'Laothian (LO)','LA':'Latin (LA)','XL':'Spanish, Latin American (XL)','LV':'Latvian (LV)','LN':'Lingala (LN)','LT':'Lithuanian (LT)','LG':'Luganda (LG)','MK':'Macedonian (MK)','MG':'Malagasy (MG)','MS':'Malay (MS)','ML':'Malayalam (ML)','MT':'Maltese (MT)','MI':'Maori (MI)','MR':'Marathi (MR)','MC':'Mauritian Creole (MC)','MO':'Moldavian (MO)','MN':'Mongolian (MN)','ME':'Montenegrin (ME)','NE':'Nepali (NE)','NO':'Norwegian (NO)','NN':'Nynorsk Norwegian (NN)','OC':'Occitan (OC)','OR':'Oriya (OR)','OM':'Oromo (OM)','PS':'Pashto (PS)','FA':'Persian (FA)','PL':'Polish (PL)','PT':'Portuguese (PT)','PA':'Punjabi (PA)','QU':'Quechua (QU)','RO':'Romanian (RO)','RM':'Romansh (RM)','RU':'Russian (RU)','GD':'Scots Gaelic (GD)','SR':'Serbian (SR)','SH':'Serbo Croatian (SH)','ST':'Sesotho (ST)','SN':'Shona (SN)','ZS':'Chinese, Simplified (ZS)','SD':'Sindhi (SD)','SI':'Sinhalese (SI)','SK':'Slovak (SK)','SL':'Slovenian (SL)','SO':'Somali (SO)','ES':'Spanish (ES)','SU':'Sundanese (SU)','SW':'Swahili (SW)','SV':'Swedish (SV)','TG':'Tajik (TG)','TA':'Tamil (TA)','TT':'Tatar (TT)','TE':'Telugu (TE)','TH':'Thai (TH)','TI':'Tigrinya (TI)','TO':'Tonga (TO)','ZT':'Chinese, Traditional (ZT)','ZH':'Traditional Chinese HK (ZH)','TR':'Turkish (TR)','TK':'Turkmen (TK)','TW':'Twi (TW)','UG':'Uighur (UG)','UE':'English, UK (UE)','UK':'Ukrainian (UK)','UR':'Urdu (UR)','UZ':'Uzbek (UZ)','VI':'Vietnamese (VI)','CY':'Welsh (CY)','XH':'Xhosa (XH)','YI':'Yiddish (YI)','YO':'Yoruba (YO)','ZU':'Zulu (ZU)'};
/* filename: /common/jquery-ui/js/jquery-ui-1.8.16.custom.min.js weight: 1*/
/*!
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.16",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({propAttr:c.fn.prop||c.fn.attr,_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=
this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,
"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":
"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,
outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,
"tabindex"),d=isNaN(b);return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&
a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&
c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)try{b(d).triggerHandler("remove")}catch(e){}k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){try{b(this).triggerHandler("remove")}catch(d){}});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=
function(h){return!!b.data(h,a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):
d;if(e&&d.charAt(0)==="_")return h;e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=
b.extend(true,{},this.options,this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+
"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",
c);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){var d=false;b(document).mouseup(function(){d=false});b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+
this.widgetName)},_mouseDown:function(a){if(!d){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,f=a.which==1,g=typeof this.options.cancel=="string"&&a.target.nodeName?b(a.target).closest(this.options.cancel).length:false;if(!f||g||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(e){return c._mouseMove(e)};this._mouseUpDelegate=function(e){return c._mouseUp(e)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return d=true}},_mouseMove:function(a){if(b.browser.msie&&
!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=
false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Position 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+(parseInt(c.curCSS(this,"marginRight",true))||0),w=m+q+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=
m/2;i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;/*
 * jQuery UI Draggable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;if(b.iframeFix)d(b.iframeFix===true?"iframe":b.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")});return true},_mouseStart:function(a){var b=this.options;
this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);d.ui.ddmanager&&d.ui.ddmanager.dragStart(this,a);return true},
_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=
false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,
10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},_mouseUp:function(a){this.options.iframeFix===true&&d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});d.ui.ddmanager&&d.ui.ddmanager.dragStop(this,a);return d.ui.mouse.prototype._mouseUp.call(this,a)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||
!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone().removeAttr("id"):this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&
a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),
10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[a.containment=="document"?0:d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a.containment=="document"?0:d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,
(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){a=d(a.containment);var b=a[0];if(b){a.offset();var c=d(b).css("overflow")!=
"hidden";this.containment=[(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),
10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=a}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+
this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&
!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,h=a.pageY;if(this.originalPosition){var g;if(this.containment){if(this.relative_container){g=this.relative_container.offset();g=[this.containment[0]+g.left,this.containment[1]+g.top,this.containment[2]+g.left,this.containment[3]+g.top]}else g=this.containment;if(a.pageX-this.offset.click.left<g[0])e=g[0]+this.offset.click.left;
if(a.pageY-this.offset.click.top<g[1])h=g[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>g[2])e=g[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>g[3])h=g[3]+this.offset.click.top}if(b.grid){h=b.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/b.grid[1])*b.grid[1]:this.originalPageY;h=g?!(h-this.offset.click.top<g[1]||h-this.offset.click.top>g[3])?h:!(h-this.offset.click.top<g[1])?h-b.grid[1]:h+b.grid[1]:h;e=b.grid[0]?this.originalPageX+Math.round((e-this.originalPageX)/
b.grid[0])*b.grid[0]:this.originalPageX;e=g?!(e-this.offset.click.left<g[0]||e-this.offset.click.left>g[2])?e:!(e-this.offset.click.left<g[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<
526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,
c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.16"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var h=d.data(this,"sortable");if(h&&!h.options.disabled){c.sortables.push({instance:h,shouldRevert:h.options.revert});
h.refreshPositions();h._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=
false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;
c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&
this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=
a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!=
"x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<
c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-
c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,
width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),f=c.options,e=f.snapTolerance,h=b.offset.left,g=h+c.helperProportions.width,n=b.offset.top,o=n+c.helperProportions.height,i=c.snapElements.length-1;i>=0;i--){var j=c.snapElements[i].left,l=j+c.snapElements[i].width,k=c.snapElements[i].top,m=k+c.snapElements[i].height;if(j-e<h&&h<l+e&&k-e<n&&n<m+e||j-e<h&&h<l+e&&k-e<o&&o<m+e||j-e<g&&g<l+e&&k-e<n&&n<m+e||j-e<g&&g<l+e&&k-e<o&&
o<m+e){if(f.snapMode!="inner"){var p=Math.abs(k-o)<=e,q=Math.abs(m-n)<=e,r=Math.abs(j-g)<=e,s=Math.abs(l-h)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l}).left-c.margins.left}var t=
p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(k-n)<=e;q=Math.abs(m-o)<=e;r=Math.abs(j-h)<=e;s=Math.abs(l-g)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[i].snapping&&
(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=p||q||r||s||t}else{c.snapElements[i].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),
10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;/*
 * jQuery UI Droppable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(d){d.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var a=this.options,b=a.accept;this.isover=0;this.isout=1;this.accept=d.isFunction(b)?b:function(c){return c.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];d.ui.ddmanager.droppables[a.scope].push(this);
a.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var a=d.ui.ddmanager.droppables[this.options.scope],b=0;b<a.length;b++)a[b]==this&&a.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(a,b){if(a=="accept")this.accept=d.isFunction(b)?b:function(c){return c.is(b)};d.Widget.prototype._setOption.apply(this,arguments)},_activate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);b&&this._trigger("activate",a,this.ui(b))},_deactivate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);b&&this._trigger("deactivate",a,this.ui(b))},_over:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",a,this.ui(b))}},_out:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",a,this.ui(b))}},_drop:function(a,b){var c=b||d.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return false;var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=
d.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],c.currentItem||c.element)&&d.ui.intersect(c,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){e=true;return false}});if(e)return false;if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
a,this.ui(c));return this.element}return false},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}});d.extend(d.ui.droppable,{version:"1.8.16"});d.ui.intersect=function(a,b,c){if(!b.offset)return false;var e=(a.positionAbs||a.position.absolute).left,g=e+a.helperProportions.width,f=(a.positionAbs||a.position.absolute).top,h=f+a.helperProportions.height,i=b.offset.left,k=i+b.proportions.width,j=b.offset.top,l=j+b.proportions.height;
switch(c){case "fit":return i<=e&&g<=k&&j<=f&&h<=l;case "intersect":return i<e+a.helperProportions.width/2&&g-a.helperProportions.width/2<k&&j<f+a.helperProportions.height/2&&h-a.helperProportions.height/2<l;case "pointer":return d.ui.isOver((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,j,i,b.proportions.height,b.proportions.width);case "touch":return(f>=j&&f<=l||h>=j&&h<=l||f<j&&h>l)&&(e>=
i&&e<=k||g>=i&&g<=k||e<i&&g>k);default:return false}};d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,b){var c=d.ui.ddmanager.droppables[a.options.scope]||[],e=b?b.type:null,g=(a.currentItem||a.element).find(":data(droppable)").andSelf(),f=0;a:for(;f<c.length;f++)if(!(c[f].options.disabled||a&&!c[f].accept.call(c[f].element[0],a.currentItem||a.element))){for(var h=0;h<g.length;h++)if(g[h]==c[f].element[0]){c[f].proportions.height=0;continue a}c[f].visible=c[f].element.css("display")!=
"none";if(c[f].visible){e=="mousedown"&&c[f]._activate.call(c[f],b);c[f].offset=c[f].element.offset();c[f].proportions={width:c[f].element[0].offsetWidth,height:c[f].element[0].offsetHeight}}}},drop:function(a,b){var c=false;d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance))c=c||this._drop.call(this,b);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||
a.element)){this.isout=1;this.isover=0;this._deactivate.call(this,b)}}});return c},dragStart:function(a,b){a.element.parents(":not(body,html)").bind("scroll.droppable",function(){a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,b)})},drag:function(a,b){a.options.refreshPositions&&d.ui.ddmanager.prepareOffsets(a,b);d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var c=d.ui.intersect(a,this,this.options.tolerance);
if(c=!c&&this.isover==1?"isout":c&&this.isover==0?"isover":null){var e;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){e=d.data(g[0],"droppable");e.greedyChild=c=="isover"?1:0}}if(e&&c=="isover"){e.isover=0;e.isout=1;e._out.call(e,b)}this[c]=1;this[c=="isout"?"isover":"isout"]=0;this[c=="isover"?"_over":"_out"].call(this,b);if(e&&c=="isout"){e.isout=0;e.isover=1;e._over.call(e,b)}}}})},dragStop:function(a,b){a.element.parents(":not(body,html)").unbind("scroll.droppable");
a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,b)}}})(jQuery);
;/*
 * jQuery UI Resizable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.resizable",e.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var b=this,a=this.options;this.element.addClass("ui-resizable");e.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&e.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=a.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var c=this.handles.split(",");this.handles={};for(var d=0;d<c.length;d++){var f=e.trim(c[d]),g=e('<div class="ui-resizable-handle '+("ui-resizable-"+f)+'"></div>');/sw|se|ne|nw/.test(f)&&g.css({zIndex:++a.zIndex});"se"==f&&g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[f]=".ui-resizable-"+f;this.element.append(g)}}this._renderAxis=function(h){h=h||this.element;for(var i in this.handles){if(this.handles[i].constructor==
String)this.handles[i]=e(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var j=e(this.handles[i],this.element),l=0;l=/sw|ne|nw|se|n|s/.test(i)?j.outerHeight():j.outerWidth();j=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");h.css(j,l);this._proportionallyResize()}e(this.handles[i])}};this._renderAxis(this.element);this._handles=e(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!b.resizing){if(this.className)var h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=h&&h[1]?h[1]:"se"}});if(a.autoHide){this._handles.hide();e(this.element).addClass("ui-resizable-autohide").hover(function(){if(!a.disabled){e(this).removeClass("ui-resizable-autohide");b._handles.show()}},function(){if(!a.disabled)if(!b.resizing){e(this).addClass("ui-resizable-autohide");b._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();
var b=function(c){e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var a=this.element;a.after(this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);b(this.originalElement);return this},_mouseCapture:function(b){var a=
false;for(var c in this.handles)if(e(this.handles[c])[0]==b.target)a=true;return!this.options.disabled&&a},_mouseStart:function(b){var a=this.options,c=this.element.position(),d=this.element;this.resizing=true;this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()};if(d.is(".ui-draggable")||/absolute/.test(d.css("position")))d.css({position:"absolute",top:c.top,left:c.left});e.browser.opera&&/relative/.test(d.css("position"))&&d.css({position:"relative",top:"auto",left:"auto"});
this._renderProxy();c=m(this.helper.css("left"));var f=m(this.helper.css("top"));if(a.containment){c+=e(a.containment).scrollLeft()||0;f+=e(a.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:c,top:f};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:c,top:f};this.sizeDiff=
{width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:b.pageX,top:b.pageY};this.aspectRatio=typeof a.aspectRatio=="number"?a.aspectRatio:this.originalSize.width/this.originalSize.height||1;a=e(".ui-resizable-"+this.axis).css("cursor");e("body").css("cursor",a=="auto"?this.axis+"-resize":a);d.addClass("ui-resizable-resizing");this._propagate("start",b);return true},_mouseDrag:function(b){var a=this.helper,c=this.originalMousePosition,d=this._change[this.axis];
if(!d)return false;c=d.apply(this,[b,b.pageX-c.left||0,b.pageY-c.top||0]);this._updateVirtualBoundaries(b.shiftKey);if(this._aspectRatio||b.shiftKey)c=this._updateRatio(c,b);c=this._respectSize(c,b);this._propagate("resize",b);a.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(c);this._trigger("resize",b,this.ui());return false},
_mouseStop:function(b){this.resizing=false;var a=this.options,c=this;if(this._helper){var d=this._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName);d=f&&e.ui.hasScroll(d[0],"left")?0:c.sizeDiff.height;f=f?0:c.sizeDiff.width;f={width:c.helper.width()-f,height:c.helper.height()-d};d=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null;var g=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;a.animate||this.element.css(e.extend(f,
{top:g,left:d}));c.helper.height(c.size.height);c.helper.width(c.size.width);this._helper&&!a.animate&&this._proportionallyResize()}e("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",b);this._helper&&this.helper.remove();return false},_updateVirtualBoundaries:function(b){var a=this.options,c,d,f;a={minWidth:k(a.minWidth)?a.minWidth:0,maxWidth:k(a.maxWidth)?a.maxWidth:Infinity,minHeight:k(a.minHeight)?a.minHeight:0,maxHeight:k(a.maxHeight)?a.maxHeight:
Infinity};if(this._aspectRatio||b){b=a.minHeight*this.aspectRatio;d=a.minWidth/this.aspectRatio;c=a.maxHeight*this.aspectRatio;f=a.maxWidth/this.aspectRatio;if(b>a.minWidth)a.minWidth=b;if(d>a.minHeight)a.minHeight=d;if(c<a.maxWidth)a.maxWidth=c;if(f<a.maxHeight)a.maxHeight=f}this._vBoundaries=a},_updateCache:function(b){this.offset=this.helper.offset();if(k(b.left))this.position.left=b.left;if(k(b.top))this.position.top=b.top;if(k(b.height))this.size.height=b.height;if(k(b.width))this.size.width=
b.width},_updateRatio:function(b){var a=this.position,c=this.size,d=this.axis;if(k(b.height))b.width=b.height*this.aspectRatio;else if(k(b.width))b.height=b.width/this.aspectRatio;if(d=="sw"){b.left=a.left+(c.width-b.width);b.top=null}if(d=="nw"){b.top=a.top+(c.height-b.height);b.left=a.left+(c.width-b.width)}return b},_respectSize:function(b){var a=this._vBoundaries,c=this.axis,d=k(b.width)&&a.maxWidth&&a.maxWidth<b.width,f=k(b.height)&&a.maxHeight&&a.maxHeight<b.height,g=k(b.width)&&a.minWidth&&
a.minWidth>b.width,h=k(b.height)&&a.minHeight&&a.minHeight>b.height;if(g)b.width=a.minWidth;if(h)b.height=a.minHeight;if(d)b.width=a.maxWidth;if(f)b.height=a.maxHeight;var i=this.originalPosition.left+this.originalSize.width,j=this.position.top+this.size.height,l=/sw|nw|w/.test(c);c=/nw|ne|n/.test(c);if(g&&l)b.left=i-a.minWidth;if(d&&l)b.left=i-a.maxWidth;if(h&&c)b.top=j-a.minHeight;if(f&&c)b.top=j-a.maxHeight;if((a=!b.width&&!b.height)&&!b.left&&b.top)b.top=null;else if(a&&!b.top&&b.left)b.left=
null;return b},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var b=this.helper||this.element,a=0;a<this._proportionallyResizeElements.length;a++){var c=this._proportionallyResizeElements[a];if(!this.borderDif){var d=[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],f=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];this.borderDif=e.map(d,function(g,h){g=parseInt(g,10)||
0;h=parseInt(f[h],10)||0;return g+h})}e.browser.msie&&(e(b).is(":hidden")||e(b).parents(":hidden").length)||c.css({height:b.height()-this.borderDif[0]-this.borderDif[2]||0,width:b.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var b=this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var a=e.browser.msie&&e.browser.version<7,c=a?1:0;a=a?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+
a,height:this.element.outerHeight()+a,position:"absolute",left:this.elementOffset.left-c+"px",top:this.elementOffset.top-c+"px",zIndex:++b.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(b,a){return{width:this.originalSize.width+a}},w:function(b,a){return{left:this.originalPosition.left+a,width:this.originalSize.width-a}},n:function(b,a,c){return{top:this.originalPosition.top+c,height:this.originalSize.height-c}},s:function(b,a,c){return{height:this.originalSize.height+
c}},se:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},sw:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,a,c]))},ne:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},nw:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,a,c]))}},_propagate:function(b,a){e.ui.plugin.call(this,b,[a,this.ui()]);
b!="resize"&&this._trigger(b,a,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});e.extend(e.ui.resizable,{version:"1.8.16"});e.ui.plugin.add("resizable","alsoResize",{start:function(){var b=e(this).data("resizable").options,a=function(c){e(c).each(function(){var d=e(this);d.data("resizable-alsoresize",{width:parseInt(d.width(),
10),height:parseInt(d.height(),10),left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10),position:d.css("position")})})};if(typeof b.alsoResize=="object"&&!b.alsoResize.parentNode)if(b.alsoResize.length){b.alsoResize=b.alsoResize[0];a(b.alsoResize)}else e.each(b.alsoResize,function(c){a(c)});else a(b.alsoResize)},resize:function(b,a){var c=e(this).data("resizable");b=c.options;var d=c.originalSize,f=c.originalPosition,g={height:c.size.height-d.height||0,width:c.size.width-d.width||0,top:c.position.top-
f.top||0,left:c.position.left-f.left||0},h=function(i,j){e(i).each(function(){var l=e(this),q=e(this).data("resizable-alsoresize"),p={},r=j&&j.length?j:l.parents(a.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(r,function(n,o){if((n=(q[o]||0)+(g[o]||0))&&n>=0)p[o]=n||null});if(e.browser.opera&&/relative/.test(l.css("position"))){c._revertToRelativePosition=true;l.css({position:"absolute",top:"auto",left:"auto"})}l.css(p)})};typeof b.alsoResize=="object"&&!b.alsoResize.nodeType?
e.each(b.alsoResize,function(i,j){h(i,j)}):h(b.alsoResize)},stop:function(){var b=e(this).data("resizable"),a=b.options,c=function(d){e(d).each(function(){var f=e(this);f.css({position:f.data("resizable-alsoresize").position})})};if(b._revertToRelativePosition){b._revertToRelativePosition=false;typeof a.alsoResize=="object"&&!a.alsoResize.nodeType?e.each(a.alsoResize,function(d){c(d)}):c(a.alsoResize)}e(this).removeData("resizable-alsoresize")}});e.ui.plugin.add("resizable","animate",{stop:function(b){var a=
e(this).data("resizable"),c=a.options,d=a._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName),g=f&&e.ui.hasScroll(d[0],"left")?0:a.sizeDiff.height;f={width:a.size.width-(f?0:a.sizeDiff.width),height:a.size.height-g};g=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var h=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;a.element.animate(e.extend(f,h&&g?{top:h,left:g}:{}),{duration:c.animateDuration,easing:c.animateEasing,
step:function(){var i={width:parseInt(a.element.css("width"),10),height:parseInt(a.element.css("height"),10),top:parseInt(a.element.css("top"),10),left:parseInt(a.element.css("left"),10)};d&&d.length&&e(d[0]).css({width:i.width,height:i.height});a._updateCache(i);a._propagate("resize",b)}})}});e.ui.plugin.add("resizable","containment",{start:function(){var b=e(this).data("resizable"),a=b.element,c=b.options.containment;if(a=c instanceof e?c.get(0):/parent/.test(c)?a.parent().get(0):c){b.containerElement=
e(a);if(/document/.test(c)||c==document){b.containerOffset={left:0,top:0};b.containerPosition={left:0,top:0};b.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}}else{var d=e(a),f=[];e(["Top","Right","Left","Bottom"]).each(function(i,j){f[i]=m(d.css("padding"+j))});b.containerOffset=d.offset();b.containerPosition=d.position();b.containerSize={height:d.innerHeight()-f[3],width:d.innerWidth()-f[1]};c=b.containerOffset;
var g=b.containerSize.height,h=b.containerSize.width;h=e.ui.hasScroll(a,"left")?a.scrollWidth:h;g=e.ui.hasScroll(a)?a.scrollHeight:g;b.parentData={element:a,left:c.left,top:c.top,width:h,height:g}}}},resize:function(b){var a=e(this).data("resizable"),c=a.options,d=a.containerOffset,f=a.position;b=a._aspectRatio||b.shiftKey;var g={top:0,left:0},h=a.containerElement;if(h[0]!=document&&/static/.test(h.css("position")))g=d;if(f.left<(a._helper?d.left:0)){a.size.width+=a._helper?a.position.left-d.left:
a.position.left-g.left;if(b)a.size.height=a.size.width/c.aspectRatio;a.position.left=c.helper?d.left:0}if(f.top<(a._helper?d.top:0)){a.size.height+=a._helper?a.position.top-d.top:a.position.top;if(b)a.size.width=a.size.height*c.aspectRatio;a.position.top=a._helper?d.top:0}a.offset.left=a.parentData.left+a.position.left;a.offset.top=a.parentData.top+a.position.top;c=Math.abs((a._helper?a.offset.left-g.left:a.offset.left-g.left)+a.sizeDiff.width);d=Math.abs((a._helper?a.offset.top-g.top:a.offset.top-
d.top)+a.sizeDiff.height);f=a.containerElement.get(0)==a.element.parent().get(0);g=/relative|absolute/.test(a.containerElement.css("position"));if(f&&g)c-=a.parentData.left;if(c+a.size.width>=a.parentData.width){a.size.width=a.parentData.width-c;if(b)a.size.height=a.size.width/a.aspectRatio}if(d+a.size.height>=a.parentData.height){a.size.height=a.parentData.height-d;if(b)a.size.width=a.size.height*a.aspectRatio}},stop:function(){var b=e(this).data("resizable"),a=b.options,c=b.containerOffset,d=b.containerPosition,
f=b.containerElement,g=e(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width;g=g.outerHeight()-b.sizeDiff.height;b._helper&&!a.animate&&/relative/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g});b._helper&&!a.animate&&/static/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g})}});e.ui.plugin.add("resizable","ghost",{start:function(){var b=e(this).data("resizable"),a=b.options,c=b.size;b.ghost=b.originalElement.clone();b.ghost.css({opacity:0.25,
display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost=="string"?a.ghost:"");b.ghost.appendTo(b.helper)},resize:function(){var b=e(this).data("resizable");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=e(this).data("resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}});e.ui.plugin.add("resizable","grid",{resize:function(){var b=
e(this).data("resizable"),a=b.options,c=b.size,d=b.originalSize,f=b.originalPosition,g=b.axis;a.grid=typeof a.grid=="number"?[a.grid,a.grid]:a.grid;var h=Math.round((c.width-d.width)/(a.grid[0]||1))*(a.grid[0]||1);a=Math.round((c.height-d.height)/(a.grid[1]||1))*(a.grid[1]||1);if(/^(se|s|e)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else if(/^(ne)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}else{if(/^(sw)$/.test(g)){b.size.width=d.width+h;b.size.height=
d.height+a}else{b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}b.position.left=f.left-h}}});var m=function(b){return parseInt(b,10)||0},k=function(b){return!isNaN(parseInt(b,10))}})(jQuery);
;/*
 * jQuery UI Selectable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.selectable",e.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;this.element.addClass("ui-selectable");this.dragged=false;var f;this.refresh=function(){f=e(c.options.filter,c.element[0]);f.each(function(){var d=e(this),b=d.offset();e.data(this,"selectable-item",{element:this,$element:d,left:b.left,top:b.top,right:b.left+d.outerWidth(),bottom:b.top+d.outerHeight(),startselected:false,selected:d.hasClass("ui-selected"),
selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")})})};this.refresh();this.selectees=f.addClass("ui-selectee");this._mouseInit();this.helper=e("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(c){var f=this;this.opos=[c.pageX,
c.pageY];if(!this.options.disabled){var d=this.options;this.selectees=e(d.filter,this.element[0]);this._trigger("start",c);e(d.appendTo).append(this.helper);this.helper.css({left:c.clientX,top:c.clientY,width:0,height:0});d.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var b=e.data(this,"selectable-item");b.startselected=true;if(!c.metaKey){b.$element.removeClass("ui-selected");b.selected=false;b.$element.addClass("ui-unselecting");b.unselecting=true;f._trigger("unselecting",
c,{unselecting:b.element})}});e(c.target).parents().andSelf().each(function(){var b=e.data(this,"selectable-item");if(b){var g=!c.metaKey||!b.$element.hasClass("ui-selected");b.$element.removeClass(g?"ui-unselecting":"ui-selected").addClass(g?"ui-selecting":"ui-unselecting");b.unselecting=!g;b.selecting=g;(b.selected=g)?f._trigger("selecting",c,{selecting:b.element}):f._trigger("unselecting",c,{unselecting:b.element});return false}})}},_mouseDrag:function(c){var f=this;this.dragged=true;if(!this.options.disabled){var d=
this.options,b=this.opos[0],g=this.opos[1],h=c.pageX,i=c.pageY;if(b>h){var j=h;h=b;b=j}if(g>i){j=i;i=g;g=j}this.helper.css({left:b,top:g,width:h-b,height:i-g});this.selectees.each(function(){var a=e.data(this,"selectable-item");if(!(!a||a.element==f.element[0])){var k=false;if(d.tolerance=="touch")k=!(a.left>h||a.right<b||a.top>i||a.bottom<g);else if(d.tolerance=="fit")k=a.left>b&&a.right<h&&a.top>g&&a.bottom<i;if(k){if(a.selected){a.$element.removeClass("ui-selected");a.selected=false}if(a.unselecting){a.$element.removeClass("ui-unselecting");
a.unselecting=false}if(!a.selecting){a.$element.addClass("ui-selecting");a.selecting=true;f._trigger("selecting",c,{selecting:a.element})}}else{if(a.selecting)if(c.metaKey&&a.startselected){a.$element.removeClass("ui-selecting");a.selecting=false;a.$element.addClass("ui-selected");a.selected=true}else{a.$element.removeClass("ui-selecting");a.selecting=false;if(a.startselected){a.$element.addClass("ui-unselecting");a.unselecting=true}f._trigger("unselecting",c,{unselecting:a.element})}if(a.selected)if(!c.metaKey&&
!a.startselected){a.$element.removeClass("ui-selected");a.selected=false;a.$element.addClass("ui-unselecting");a.unselecting=true;f._trigger("unselecting",c,{unselecting:a.element})}}}});return false}},_mouseStop:function(c){var f=this;this.dragged=false;e(".ui-unselecting",this.element[0]).each(function(){var d=e.data(this,"selectable-item");d.$element.removeClass("ui-unselecting");d.unselecting=false;d.startselected=false;f._trigger("unselected",c,{unselected:d.element})});e(".ui-selecting",this.element[0]).each(function(){var d=
e.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected");d.selecting=false;d.selected=true;d.startselected=true;f._trigger("selected",c,{selected:d.element})});this._trigger("stop",c);this.helper.remove();return false}});e.extend(e.ui.selectable,{version:"1.8.16"})})(jQuery);
;/*
 * jQuery UI Sortable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.sortable",d.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){var a=this.options;this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData("sortable-item");return this},_setOption:function(a,b){if(a===
"disabled"){this.options[a]=b;this.widget()[b?"addClass":"removeClass"]("ui-sortable-disabled")}else d.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(a,b){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(a);var c=null,e=this;d(a.target).parents().each(function(){if(d.data(this,"sortable-item")==e){c=d(this);return false}});if(d.data(a.target,"sortable-item")==e)c=d(a.target);if(!c)return false;if(this.options.handle&&
!b){var f=false;d(this.options.handle,c).find("*").andSelf().each(function(){if(this==a.target)f=true});if(!f)return false}this.currentItem=c;this._removeCurrentsFromItems();return true},_mouseStart:function(a,b,c){b=this.options;var e=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(a);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();b.containment&&this._setContainment();if(b.cursor){if(d("body").css("cursor"))this._storedCursor=d("body").css("cursor");d("body").css("cursor",b.cursor)}if(b.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",b.opacity)}if(b.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",b.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",a,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!c)for(c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("activate",a,e._uiHash(this));if(d.ui.ddmanager)d.ui.ddmanager.current=this;d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(a);
return true},_mouseDrag:function(a){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var b=this.options,c=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+b.scrollSpeed;else if(a.pageY-this.overflowOffset.top<
b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-b.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+b.scrollSpeed;else if(a.pageX-this.overflowOffset.left<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-b.scrollSpeed}else{if(a.pageY-d(document).scrollTop()<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()-
b.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()+b.scrollSpeed);if(a.pageX-d(document).scrollLeft()<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()-b.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()+b.scrollSpeed)}c!==false&&d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,
a)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(b=this.items.length-1;b>=0;b--){c=this.items[b];var e=c.item[0],f=this._intersectsWithPointer(c);if(f)if(e!=this.currentItem[0]&&this.placeholder[f==1?"next":"prev"]()[0]!=e&&!d.ui.contains(this.placeholder[0],e)&&(this.options.type=="semi-dynamic"?!d.ui.contains(this.element[0],
e):true)){this.direction=f==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(c))this._rearrange(a,c);else break;this._trigger("change",a,this._uiHash());break}}this._contactContainers(a);d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);this._trigger("sort",a,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(a,b){if(a){d.ui.ddmanager&&!this.options.dropBehaviour&&d.ui.ddmanager.drop(this,a);if(this.options.revert){var c=this;b=c.placeholder.offset();
c.reverting=true;d(this.helper).animate({left:b.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:b.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(a)})}else this._clear(a,b);return false}},cancel:function(){var a=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--){this.containers[b]._trigger("deactivate",null,a._uiHash(this));if(this.containers[b].containerCache.over){this.containers[b]._trigger("out",null,a._uiHash(this));this.containers[b].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();d.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};d(b).each(function(){var e=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);if(e)c.push((a.key||e[1]+"[]")+"="+(a.key&&a.expression?e[1]:e[2]))});!c.length&&a.key&&c.push(a.key+"=");return c.join("&")},
toArray:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};b.each(function(){c.push(d(a.item||this).attr(a.attribute||"id")||"")});return c},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,e=this.positionAbs.top,f=e+this.helperProportions.height,g=a.left,h=g+a.width,i=a.top,k=i+a.height,j=this.offset.click.top,l=this.offset.click.left;j=e+j>i&&e+j<k&&b+l>g&&b+l<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?j:g<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<h&&i<e+this.helperProportions.height/2&&f-this.helperProportions.height/2<k},_intersectsWithPointer:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);b=b&&a;a=this._getDragVerticalDirection();
var c=this._getDragHorizontalDirection();if(!b)return false;return this.floating?c&&c=="right"||a=="down"?2:1:a&&(a=="down"?2:1)},_intersectsWithSides:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width);var c=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?e=="right"&&a||e=="left"&&!a:c&&(c=="down"&&b||c=="up"&&!b)},
_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){this._refreshItems(a);this.refreshPositions();return this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(a){var b=[],c=[],e=this._connectWith();
if(e&&a)for(a=e.length-1;a>=0;a--)for(var f=d(e[a]),g=f.length-1;g>=0;g--){var h=d.data(f[g],"sortable");if(h&&h!=this&&!h.options.disabled)c.push([d.isFunction(h.options.items)?h.options.items.call(h.element):d(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}c.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(a=c.length-1;a>=0;a--)c[a][0].each(function(){b.push(this)});return d(b)},_removeCurrentsFromItems:function(){for(var a=this.currentItem.find(":data(sortable-item)"),b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(a){this.items=[];this.containers=[this];var b=this.items,c=[[d.isFunction(this.options.items)?this.options.items.call(this.element[0],a,{item:this.currentItem}):d(this.options.items,this.element),
this]],e=this._connectWith();if(e)for(var f=e.length-1;f>=0;f--)for(var g=d(e[f]),h=g.length-1;h>=0;h--){var i=d.data(g[h],"sortable");if(i&&i!=this&&!i.options.disabled){c.push([d.isFunction(i.options.items)?i.options.items.call(i.element[0],a,{item:this.currentItem}):d(i.options.items,i.element),i]);this.containers.push(i)}}for(f=c.length-1;f>=0;f--){a=c[f][1];e=c[f][0];h=0;for(g=e.length;h<g;h++){i=d(e[h]);i.data("sortable-item",a);b.push({item:i,instance:a,width:0,height:0,left:0,top:0})}}},refreshPositions:function(a){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var b=this.items.length-1;b>=0;b--){var c=this.items[b];if(!(c.instance!=this.currentContainer&&this.currentContainer&&c.item[0]!=this.currentItem[0])){var e=this.options.toleranceElement?d(this.options.toleranceElement,c.item):c.item;if(!a){c.width=e.outerWidth();c.height=e.outerHeight()}e=e.offset();c.left=e.left;c.top=e.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(b=
this.containers.length-1;b>=0;b--){e=this.containers[b].element.offset();this.containers[b].containerCache.left=e.left;this.containers[b].containerCache.top=e.top;this.containers[b].containerCache.width=this.containers[b].element.outerWidth();this.containers[b].containerCache.height=this.containers[b].element.outerHeight()}return this},_createPlaceholder:function(a){var b=a||this,c=b.options;if(!c.placeholder||c.placeholder.constructor==String){var e=c.placeholder;c.placeholder={element:function(){var f=
d(document.createElement(b.currentItem[0].nodeName)).addClass(e||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!e)f.style.visibility="hidden";return f},update:function(f,g){if(!(e&&!c.forcePlaceholderSize)){g.height()||g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));g.width()||g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||
0,10))}}}}b.placeholder=d(c.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);c.placeholder.update(b,b.placeholder)},_contactContainers:function(a){for(var b=null,c=null,e=this.containers.length-1;e>=0;e--)if(!d.ui.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(!(b&&d.ui.contains(this.containers[e].element[0],b.element[0]))){b=this.containers[e];c=e}}else if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",
a,this._uiHash(this));this.containers[e].containerCache.over=0}if(b)if(this.containers.length===1){this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}else if(this.currentContainer!=this.containers[c]){b=1E4;e=null;for(var f=this.positionAbs[this.containers[c].floating?"left":"top"],g=this.items.length-1;g>=0;g--)if(d.ui.contains(this.containers[c].element[0],this.items[g].item[0])){var h=this.items[g][this.containers[c].floating?"left":"top"];if(Math.abs(h-
f)<b){b=Math.abs(h-f);e=this.items[g]}}if(e||this.options.dropOnEmpty){this.currentContainer=this.containers[c];e?this._rearrange(a,e,null,true):this._rearrange(a,null,this.containers[c].element,true);this._trigger("change",a,this._uiHash());this.containers[c]._trigger("change",a,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}}},_createHelper:function(a){var b=
this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a,this.currentItem])):b.helper=="clone"?this.currentItem.clone():this.currentItem;a.parents("body").length||d(b.appendTo!="parent"?b.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]);if(a[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(a[0].style.width==
""||b.forceHelperSize)a.width(this.currentItem.width());if(a[0].style.height==""||b.forceHelperSize)a.height(this.currentItem.height());return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=
this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a=
{top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),
10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)){var b=d(a.containment)[0];a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),
10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(a,b){if(!b)b=
this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&
this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();
var f=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])f=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])f=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-
this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;f=this.originalPageX+Math.round((f-this.originalPageX)/b.grid[0])*b.grid[0];f=this.containment?!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:!(f-this.offset.click.left<this.containment[0])?f-b.grid[0]:f+b.grid[0]:f}}return{top:g-
this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())}},_rearrange:function(a,b,c,e){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],
this.direction=="down"?b.item[0]:b.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var f=this,g=this.counter;window.setTimeout(function(){g==f.counter&&f.refreshPositions(!e)},0)},_clear:function(a,b){this.reverting=false;var c=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS)if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static")this._storedCSS[e]=
"";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!b&&c.push(function(f){this._trigger("receive",f,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!b)c.push(function(f){this._trigger("update",f,this._uiHash())});if(!d.ui.contains(this.element[0],this.currentItem[0])){b||c.push(function(f){this._trigger("remove",
f,this._uiHash())});for(e=this.containers.length-1;e>=0;e--)if(d.ui.contains(this.containers[e].element[0],this.currentItem[0])&&!b){c.push(function(f){return function(g){f._trigger("receive",g,this._uiHash(this))}}.call(this,this.containers[e]));c.push(function(f){return function(g){f._trigger("update",g,this._uiHash(this))}}.call(this,this.containers[e]))}}for(e=this.containers.length-1;e>=0;e--){b||c.push(function(f){return function(g){f._trigger("deactivate",g,this._uiHash(this))}}.call(this,
this.containers[e]));if(this.containers[e].containerCache.over){c.push(function(f){return function(g){f._trigger("out",g,this._uiHash(this))}}.call(this,this.containers[e]));this.containers[e].containerCache.over=0}}this._storedCursor&&d("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",
a,this._uiHash());for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}return false}b||this._trigger("beforeStop",a,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!b){for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){d.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},
_uiHash:function(a){var b=a||this;return{helper:b.helper,placeholder:b.placeholder||d([]),position:b.position,originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:a?a.element:null}}});d.extend(d.ui.sortable,{version:"1.8.16"})})(jQuery);
;/*
 * jQuery UI Accordion 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(c){c.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var a=this,b=a.options;a.running=0;a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
a.headers=a.element.find(b.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){b.disabled||c(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){b.disabled||c(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){b.disabled||c(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){b.disabled||c(this).removeClass("ui-state-focus")});a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(b.navigation){var d=a.element.find("a").filter(b.navigationFilter).eq(0);if(d.length){var h=d.closest(".ui-accordion-header");a.active=h.length?h:d.closest(".ui-accordion-content").prev()}}a.active=a._findActive(a.active||b.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");a.active.next().addClass("ui-accordion-content-active");a._createIcons();a.resize();a.element.attr("role","tablist");a.headers.attr("role","tab").bind("keydown.accordion",
function(f){return a._keydown(f)}).next().attr("role","tabpanel");a.headers.not(a.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();a.active.length?a.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):a.headers.eq(0).attr("tabIndex",0);c.browser.safari||a.headers.find("a").attr("tabIndex",-1);b.event&&a.headers.bind(b.event.split(" ").join(".accordion ")+".accordion",function(f){a._clickHandler.call(a,f,this);f.preventDefault()})},_createIcons:function(){var a=
this.options;if(a.icons){c("<span></span>").addClass("ui-icon "+a.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var a=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(a.autoHeight||a.fillHeight)b.css("height","");return c.Widget.prototype.destroy.call(this)},_setOption:function(a,b){c.Widget.prototype._setOption.apply(this,arguments);a=="active"&&this.activate(b);if(a=="icons"){this._destroyIcons();
b&&this._createIcons()}if(a=="disabled")this.headers.add(this.headers.next())[b?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(a){if(!(this.options.disabled||a.altKey||a.ctrlKey)){var b=c.ui.keyCode,d=this.headers.length,h=this.headers.index(a.target),f=false;switch(a.keyCode){case b.RIGHT:case b.DOWN:f=this.headers[(h+1)%d];break;case b.LEFT:case b.UP:f=this.headers[(h-1+d)%d];break;case b.SPACE:case b.ENTER:this._clickHandler({target:a.target},a.target);
a.preventDefault()}if(f){c(a.target).attr("tabIndex",-1);c(f).attr("tabIndex",0);f.focus();return false}return true}},resize:function(){var a=this.options,b;if(a.fillSpace){if(c.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}b=this.element.parent().height();c.browser.msie&&this.element.parent().css("overflow",d);this.headers.each(function(){b-=c(this).outerHeight(true)});this.headers.next().each(function(){c(this).height(Math.max(0,b-c(this).innerHeight()+
c(this).height()))}).css("overflow","auto")}else if(a.autoHeight){b=0;this.headers.next().each(function(){b=Math.max(b,c(this).height("").height())}).height(b)}return this},activate:function(a){this.options.active=a;a=this._findActive(a)[0];this._clickHandler({target:a},a);return this},_findActive:function(a){return a?typeof a==="number"?this.headers.filter(":eq("+a+")"):this.headers.not(this.headers.not(a)):a===false?c([]):this.headers.filter(":eq(0)")},_clickHandler:function(a,b){var d=this.options;
if(!d.disabled)if(a.target){a=c(a.currentTarget||b);b=a[0]===this.active[0];d.active=d.collapsible&&b?false:this.headers.index(a);if(!(this.running||!d.collapsible&&b)){var h=this.active;j=a.next();g=this.active.next();e={options:d,newHeader:b&&d.collapsible?c([]):a,oldHeader:this.active,newContent:b&&d.collapsible?c([]):j,oldContent:g};var f=this.headers.index(this.active[0])>this.headers.index(a[0]);this.active=b?c([]):a;this._toggle(j,g,e,b,f);h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
if(!b){a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);a.next().addClass("ui-accordion-content-active")}}}else if(d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var g=this.active.next(),
e={options:d,newHeader:c([]),oldHeader:d.active,newContent:c([]),oldContent:g},j=this.active=c([]);this._toggle(j,g,e)}},_toggle:function(a,b,d,h,f){var g=this,e=g.options;g.toShow=a;g.toHide=b;g.data=d;var j=function(){if(g)return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data);g.running=b.size()===0?a.size():b.size();if(e.animated){d={};d=e.collapsible&&h?{toShow:c([]),toHide:b,complete:j,down:f,autoHeight:e.autoHeight||e.fillSpace}:{toShow:a,toHide:b,complete:j,down:f,autoHeight:e.autoHeight||
e.fillSpace};if(!e.proxied)e.proxied=e.animated;if(!e.proxiedDuration)e.proxiedDuration=e.duration;e.animated=c.isFunction(e.proxied)?e.proxied(d):e.proxied;e.duration=c.isFunction(e.proxiedDuration)?e.proxiedDuration(d):e.proxiedDuration;h=c.ui.accordion.animations;var i=e.duration,k=e.animated;if(k&&!h[k]&&!c.easing[k])k="slide";h[k]||(h[k]=function(l){this.slide(l,{easing:k,duration:i||700})});h[k](d)}else{if(e.collapsible&&h)a.toggle();else{b.hide();a.show()}j(true)}b.prev().attr({"aria-expanded":"false",
"aria-selected":"false",tabIndex:-1}).blur();a.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});c.extend(c.ui.accordion,{version:"1.8.16",
animations:{slide:function(a,b){a=c.extend({easing:"swing",duration:300},a,b);if(a.toHide.size())if(a.toShow.size()){var d=a.toShow.css("overflow"),h=0,f={},g={},e;b=a.toShow;e=b[0].style.width;b.width(parseInt(b.parent().width(),10)-parseInt(b.css("paddingLeft"),10)-parseInt(b.css("paddingRight"),10)-(parseInt(b.css("borderLeftWidth"),10)||0)-(parseInt(b.css("borderRightWidth"),10)||0));c.each(["height","paddingTop","paddingBottom"],function(j,i){g[i]="hide";j=(""+c.css(a.toShow[0],i)).match(/^([\d+-.]+)(.*)$/);
f[i]={value:j[1],unit:j[2]||"px"}});a.toShow.css({height:0,overflow:"hidden"}).show();a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(g,{step:function(j,i){if(i.prop=="height")h=i.end-i.start===0?0:(i.now-i.start)/(i.end-i.start);a.toShow[0].style[i.prop]=h*f[i.prop].value+f[i.prop].unit},duration:a.duration,easing:a.easing,complete:function(){a.autoHeight||a.toShow.css("height","");a.toShow.css({width:e,overflow:d});a.complete()}})}else a.toHide.animate({height:"hide",
paddingTop:"hide",paddingBottom:"hide"},a);else a.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},a)},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1E3:200})}}})})(jQuery);
;/*
 * jQuery UI Autocomplete 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(d){var e=0;d.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var a=this,b=this.element[0].ownerDocument,g;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(!(a.options.disabled||a.element.propAttr("readOnly"))){g=
false;var f=d.ui.keyCode;switch(c.keyCode){case f.PAGE_UP:a._move("previousPage",c);break;case f.PAGE_DOWN:a._move("nextPage",c);break;case f.UP:a._move("previous",c);c.preventDefault();break;case f.DOWN:a._move("next",c);c.preventDefault();break;case f.ENTER:case f.NUMPAD_ENTER:if(a.menu.active){g=true;c.preventDefault()}case f.TAB:if(!a.menu.active)return;a.menu.select(c);break;case f.ESCAPE:a.element.val(a.term);a.close(c);break;default:clearTimeout(a.searching);a.searching=setTimeout(function(){if(a.term!=
a.element.val()){a.selectedItem=null;a.search(null,c)}},a.options.delay);break}}}).bind("keypress.autocomplete",function(c){if(g){g=false;c.preventDefault()}}).bind("focus.autocomplete",function(){if(!a.options.disabled){a.selectedItem=null;a.previous=a.element.val()}}).bind("blur.autocomplete",function(c){if(!a.options.disabled){clearTimeout(a.searching);a.closing=setTimeout(function(){a.close(c);a._change(c)},150)}});this._initSource();this.response=function(){return a._response.apply(a,arguments)};
this.menu=d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo||"body",b)[0]).mousedown(function(c){var f=a.menu.element[0];d(c.target).closest(".ui-menu-item").length||setTimeout(function(){d(document).one("mousedown",function(h){h.target!==a.element[0]&&h.target!==f&&!d.ui.contains(f,h.target)&&a.close()})},1);setTimeout(function(){clearTimeout(a.closing)},13)}).menu({focus:function(c,f){f=f.item.data("item.autocomplete");false!==a._trigger("focus",c,{item:f})&&/^key/.test(c.originalEvent.type)&&
a.element.val(f.value)},selected:function(c,f){var h=f.item.data("item.autocomplete"),i=a.previous;if(a.element[0]!==b.activeElement){a.element.focus();a.previous=i;setTimeout(function(){a.previous=i;a.selectedItem=h},1)}false!==a._trigger("select",c,{item:h})&&a.element.val(h.value);a.term=a.element.val();a.close(c);a.selectedItem=h},blur:function(){a.menu.element.is(":visible")&&a.element.val()!==a.term&&a.element.val(a.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
d.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();d.Widget.prototype.destroy.call(this)},_setOption:function(a,b){d.Widget.prototype._setOption.apply(this,arguments);a==="source"&&this._initSource();if(a==="appendTo")this.menu.element.appendTo(d(b||"body",this.element[0].ownerDocument)[0]);a==="disabled"&&
b&&this.xhr&&this.xhr.abort()},_initSource:function(){var a=this,b,g;if(d.isArray(this.options.source)){b=this.options.source;this.source=function(c,f){f(d.ui.autocomplete.filter(b,c.term))}}else if(typeof this.options.source==="string"){g=this.options.source;this.source=function(c,f){a.xhr&&a.xhr.abort();a.xhr=d.ajax({url:g,data:c,dataType:"json",autocompleteRequest:++e,success:function(h){this.autocompleteRequest===e&&f(h)},error:function(){this.autocompleteRequest===e&&f([])}})}}else this.source=
this.options.source},search:function(a,b){a=a!=null?a:this.element.val();this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)!==false)return this._search(a)},_search:function(a){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:a},this.response)},_response:function(a){if(!this.options.disabled&&a&&a.length){a=this._normalize(a);this._suggest(a);this._trigger("open")}else this.close();
this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(a){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",a)}},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(a){if(a.length&&a[0].label&&a[0].value)return a;return d.map(a,function(b){if(typeof b==="string")return{label:b,value:b};return d.extend({label:b.label||
b.value,value:b.value||b.label},b)})},_suggest:function(a){var b=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(b,a);this.menu.deactivate();this.menu.refresh();b.show();this._resizeMenu();b.position(d.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next(new d.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(a,b){var g=this;
d.each(b,function(c,f){g._renderItem(a,f)})},_renderItem:function(a,b){return d("<li></li>").data("item.autocomplete",b).append(d("<a></a>").text(b.label)).appendTo(a)},_move:function(a,b){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term);this.menu.deactivate()}else this.menu[a](b);else this.search(null,b)},widget:function(){return this.menu.element}});d.extend(d.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(a,b){var g=new RegExp(d.ui.autocomplete.escapeRegex(b),"i");return d.grep(a,function(c){return g.test(c.label||c.value||c)})}})})(jQuery);
(function(d){d.widget("ui.menu",{_create:function(){var e=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(a){if(d(a.target).closest(".ui-menu-item a").length){a.preventDefault();e.select(a)}});this.refresh()},refresh:function(){var e=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(a){e.activate(a,d(this).parent())}).mouseleave(function(){e.deactivate()})},activate:function(e,a){this.deactivate();if(this.hasScroll()){var b=a.offset().top-this.element.offset().top,g=this.element.scrollTop(),c=this.element.height();if(b<0)this.element.scrollTop(g+b);else b>=c&&this.element.scrollTop(g+b-c+a.height())}this.active=a.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",e,{item:a})},deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
this._trigger("blur");this.active=null}},next:function(e){this.move("next",".ui-menu-item:first",e)},previous:function(e){this.move("prev",".ui-menu-item:last",e)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(e,a,b){if(this.active){e=this.active[e+"All"](".ui-menu-item").eq(0);e.length?this.activate(b,e):this.activate(b,this.element.children(a))}else this.activate(b,
this.element.children(a))},nextPage:function(e){if(this.hasScroll())if(!this.active||this.last())this.activate(e,this.element.children(".ui-menu-item:first"));else{var a=this.active.offset().top,b=this.element.height(),g=this.element.children(".ui-menu-item").filter(function(){var c=d(this).offset().top-a-b+d(this).height();return c<10&&c>-10});g.length||(g=this.element.children(".ui-menu-item:last"));this.activate(e,g)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||
this.last()?":first":":last"))},previousPage:function(e){if(this.hasScroll())if(!this.active||this.first())this.activate(e,this.element.children(".ui-menu-item:last"));else{var a=this.active.offset().top,b=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var g=d(this).offset().top-a+b-d(this).height();return g<10&&g>-10});result.length||(result=this.element.children(".ui-menu-item:first"));this.activate(e,result)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||
this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[d.fn.prop?"prop":"attr"]("scrollHeight")},select:function(e){this._trigger("selected",e,{item:this.active})}})})(jQuery);
;/*
 * jQuery UI Button 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(b){var h,i,j,g,l=function(){var a=b(this).find(":ui-button");setTimeout(function(){a.button("refresh")},1)},k=function(a){var c=a.name,e=a.form,f=b([]);if(c)f=e?b(e).find("[name='"+c+"']"):b("[name='"+c+"']",a.ownerDocument).filter(function(){return!this.form});return f};b.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",l);if(typeof this.options.disabled!==
"boolean")this.options.disabled=this.element.propAttr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var a=this,c=this.options,e=this.type==="checkbox"||this.type==="radio",f="ui-state-hover"+(!e?" ui-state-active":"");if(c.label===null)c.label=this.buttonElement.html();if(this.element.is(":disabled"))c.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",function(){if(!c.disabled){b(this).addClass("ui-state-hover");
this===h&&b(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){c.disabled||b(this).removeClass(f)}).bind("click.button",function(d){if(c.disabled){d.preventDefault();d.stopImmediatePropagation()}});this.element.bind("focus.button",function(){a.buttonElement.addClass("ui-state-focus")}).bind("blur.button",function(){a.buttonElement.removeClass("ui-state-focus")});if(e){this.element.bind("change.button",function(){g||a.refresh()});this.buttonElement.bind("mousedown.button",function(d){if(!c.disabled){g=
false;i=d.pageX;j=d.pageY}}).bind("mouseup.button",function(d){if(!c.disabled)if(i!==d.pageX||j!==d.pageY)g=true})}if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(c.disabled||g)return false;b(this).toggleClass("ui-state-active");a.buttonElement.attr("aria-pressed",a.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(c.disabled||g)return false;b(this).addClass("ui-state-active");a.buttonElement.attr("aria-pressed","true");
var d=a.element[0];k(d).not(d).map(function(){return b(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")});else{this.buttonElement.bind("mousedown.button",function(){if(c.disabled)return false;b(this).addClass("ui-state-active");h=this;b(document).one("mouseup",function(){h=null})}).bind("mouseup.button",function(){if(c.disabled)return false;b(this).removeClass("ui-state-active")}).bind("keydown.button",function(d){if(c.disabled)return false;if(d.keyCode==b.ui.keyCode.SPACE||
d.keyCode==b.ui.keyCode.ENTER)b(this).addClass("ui-state-active")}).bind("keyup.button",function(){b(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(d){d.keyCode===b.ui.keyCode.SPACE&&b(this).click()})}this._setOption("disabled",c.disabled);this._resetButton()},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type===
"radio"){var a=this.element.parents().filter(":last"),c="label[for='"+this.element.attr("id")+"']";this.buttonElement=a.find(c);if(!this.buttonElement.length){a=a.length?a.siblings():this.element.siblings();this.buttonElement=a.filter(c);if(!this.buttonElement.length)this.buttonElement=a.find(c)}this.element.addClass("ui-helper-hidden-accessible");(a=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",a)}else this.buttonElement=this.element},
widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());this.hasTitle||this.buttonElement.removeAttr("title");
b.Widget.prototype.destroy.call(this)},_setOption:function(a,c){b.Widget.prototype._setOption.apply(this,arguments);if(a==="disabled")c?this.element.propAttr("disabled",true):this.element.propAttr("disabled",false);else this._resetButton()},refresh:function(){var a=this.element.is(":disabled");a!==this.options.disabled&&this._setOption("disabled",a);if(this.type==="radio")k(this.element[0]).each(function(){b(this).is(":checked")?b(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
"true"):b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var a=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
c=b("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),e=this.options.icons,f=e.primary&&e.secondary,d=[];if(e.primary||e.secondary){if(this.options.text)d.push("ui-button-text-icon"+(f?"s":e.primary?"-primary":"-secondary"));e.primary&&a.prepend("<span class='ui-button-icon-primary ui-icon "+e.primary+"'></span>");e.secondary&&a.append("<span class='ui-button-icon-secondary ui-icon "+e.secondary+"'></span>");if(!this.options.text){d.push(f?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||a.attr("title",c)}}else d.push("ui-button-text-only");a.addClass(d.join(" "))}}});b.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(a,c){a==="disabled"&&this.buttons.button("option",a,c);b.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var a=this.element.css("direction")===
"ltr";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-left":"ui-corner-right").end().filter(":last").addClass(a?"ui-corner-right":"ui-corner-left").end().end()},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
b.Widget.prototype.destroy.call(this)}})})(jQuery);
;/*
 * jQuery UI Dialog 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function(c,l){var m={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},n={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},o=c.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};c.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,
position:{my:"center",at:"center",collision:"fit",using:function(a){var b=c(this).css(a).offset().top;b<0&&c(this).css("top",a.top-b)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var a=this,b=a.options,d=b.title||"&#160;",e=c.ui.dialog.getTitleId(a.element),g=(a.uiDialog=c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+
b.dialogClass).css({zIndex:b.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(i){if(b.closeOnEscape&&!i.isDefaultPrevented()&&i.keyCode&&i.keyCode===c.ui.keyCode.ESCAPE){a.close(i);i.preventDefault()}}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(i){a.moveToTop(false,i)});a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);var f=(a.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),
h=c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){h.addClass("ui-state-hover")},function(){h.removeClass("ui-state-hover")}).focus(function(){h.addClass("ui-state-focus")}).blur(function(){h.removeClass("ui-state-focus")}).click(function(i){a.close(i);return false}).appendTo(f);(a.uiDialogTitlebarCloseText=c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);c("<span></span>").addClass("ui-dialog-title").attr("id",
e).html(d).prependTo(f);if(c.isFunction(b.beforeclose)&&!c.isFunction(b.beforeClose))b.beforeClose=b.beforeclose;f.find("*").add(f).disableSelection();b.draggable&&c.fn.draggable&&a._makeDraggable();b.resizable&&c.fn.resizable&&a._makeResizable();a._createButtons(b.buttons);a._isOpen=false;c.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;a.overlay&&a.overlay.destroy();a.uiDialog.hide();a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
a.uiDialog.remove();a.originalTitle&&a.element.attr("title",a.originalTitle);return a},widget:function(){return this.uiDialog},close:function(a){var b=this,d,e;if(false!==b._trigger("beforeClose",a)){b.overlay&&b.overlay.destroy();b.uiDialog.unbind("keypress.ui-dialog");b._isOpen=false;if(b.options.hide)b.uiDialog.hide(b.options.hide,function(){b._trigger("close",a)});else{b.uiDialog.hide();b._trigger("close",a)}c.ui.dialog.overlay.resize();if(b.options.modal){d=0;c(".ui-dialog").each(function(){if(this!==
b.uiDialog[0]){e=c(this).css("z-index");isNaN(e)||(d=Math.max(d,e))}});c.ui.dialog.maxZ=d}return b}},isOpen:function(){return this._isOpen},moveToTop:function(a,b){var d=this,e=d.options;if(e.modal&&!a||!e.stack&&!e.modal)return d._trigger("focus",b);if(e.zIndex>c.ui.dialog.maxZ)c.ui.dialog.maxZ=e.zIndex;if(d.overlay){c.ui.dialog.maxZ+=1;d.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=c.ui.dialog.maxZ)}a={scrollTop:d.element.scrollTop(),scrollLeft:d.element.scrollLeft()};c.ui.dialog.maxZ+=1;
d.uiDialog.css("z-index",c.ui.dialog.maxZ);d.element.attr(a);d._trigger("focus",b);return d},open:function(){if(!this._isOpen){var a=this,b=a.options,d=a.uiDialog;a.overlay=b.modal?new c.ui.dialog.overlay(a):null;a._size();a._position(b.position);d.show(b.show);a.moveToTop(true);b.modal&&d.bind("keypress.ui-dialog",function(e){if(e.keyCode===c.ui.keyCode.TAB){var g=c(":tabbable",this),f=g.filter(":first");g=g.filter(":last");if(e.target===g[0]&&!e.shiftKey){f.focus(1);return false}else if(e.target===
f[0]&&e.shiftKey){g.focus(1);return false}}});c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();a._isOpen=true;a._trigger("open");return a}},_createButtons:function(a){var b=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);b.uiDialog.find(".ui-dialog-buttonpane").remove();typeof a==="object"&&a!==null&&c.each(a,
function(){return!(d=true)});if(d){c.each(a,function(f,h){h=c.isFunction(h)?{click:h,text:f}:h;var i=c('<button type="button"></button>').click(function(){h.click.apply(b.element[0],arguments)}).appendTo(g);c.each(h,function(j,k){if(j!=="click")j in o?i[j](k):i.attr(j,k)});c.fn.button&&i.button()});e.appendTo(b.uiDialog)}},_makeDraggable:function(){function a(f){return{position:f.position,offset:f.offset}}var b=this,d=b.options,e=c(document),g;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",
handle:".ui-dialog-titlebar",containment:"document",start:function(f,h){g=d.height==="auto"?"auto":c(this).height();c(this).height(c(this).height()).addClass("ui-dialog-dragging");b._trigger("dragStart",f,a(h))},drag:function(f,h){b._trigger("drag",f,a(h))},stop:function(f,h){d.position=[h.position.left-e.scrollLeft(),h.position.top-e.scrollTop()];c(this).removeClass("ui-dialog-dragging").height(g);b._trigger("dragStop",f,a(h));c.ui.dialog.overlay.resize()}})},_makeResizable:function(a){function b(f){return{originalPosition:f.originalPosition,
originalSize:f.originalSize,position:f.position,size:f.size}}a=a===l?this.options.resizable:a;var d=this,e=d.options,g=d.uiDialog.css("position");a=typeof a==="string"?a:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:a,start:function(f,h){c(this).addClass("ui-dialog-resizing");d._trigger("resizeStart",f,b(h))},resize:function(f,h){d._trigger("resize",
f,b(h))},stop:function(f,h){c(this).removeClass("ui-dialog-resizing");e.height=c(this).height();e.width=c(this).width();d._trigger("resizeStop",f,b(h));c.ui.dialog.overlay.resize()}}).css("position",g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(a){var b=[],d=[0,0],e;if(a){if(typeof a==="string"||typeof a==="object"&&"0"in a){b=a.split?a.split(" "):
[a[0],a[1]];if(b.length===1)b[1]=b[0];c.each(["left","top"],function(g,f){if(+b[g]===b[g]){d[g]=b[g];b[g]=f}});a={my:b.join(" "),at:b.join(" "),offset:d.join(" ")}}a=c.extend({},c.ui.dialog.prototype.options.position,a)}else a=c.ui.dialog.prototype.options.position;(e=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(c.extend({of:window},a));e||this.uiDialog.hide()},_setOptions:function(a){var b=this,d={},e=false;c.each(a,function(g,f){b._setOption(g,f);
if(g in m)e=true;if(g in n)d[g]=f});e&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",d)},_setOption:function(a,b){var d=this,e=d.uiDialog;switch(a){case "beforeclose":a="beforeClose";break;case "buttons":d._createButtons(b);break;case "closeText":d.uiDialogTitlebarCloseText.text(""+b);break;case "dialogClass":e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b);break;case "disabled":b?e.addClass("ui-dialog-disabled"):
e.removeClass("ui-dialog-disabled");break;case "draggable":var g=e.is(":data(draggable)");g&&!b&&e.draggable("destroy");!g&&b&&d._makeDraggable();break;case "position":d._position(b);break;case "resizable":(g=e.is(":data(resizable)"))&&!b&&e.resizable("destroy");g&&typeof b==="string"&&e.resizable("option","handles",b);!g&&b!==false&&d._makeResizable(b);break;case "title":c(".ui-dialog-title",d.uiDialogTitlebar).html(""+(b||"&#160;"));break}c.Widget.prototype._setOption.apply(d,arguments)},_size:function(){var a=
this.options,b,d,e=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(a.minWidth>a.width)a.width=a.minWidth;b=this.uiDialog.css({height:"auto",width:a.width}).height();d=Math.max(0,a.minHeight-b);if(a.height==="auto")if(c.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();a=this.element.css("height","auto").height();e||this.uiDialog.hide();this.element.height(Math.max(a,d))}else this.element.height(Math.max(a.height-
b,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}});c.extend(c.ui.dialog,{version:"1.8.16",uuid:0,maxZ:0,getTitleId:function(a){a=a.attr("id");if(!a){this.uuid+=1;a=this.uuid}return"ui-dialog-title-"+a},overlay:function(a){this.$el=c.ui.dialog.overlay.create(a)}});c.extend(c.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),
create:function(a){if(this.instances.length===0){setTimeout(function(){c.ui.dialog.overlay.instances.length&&c(document).bind(c.ui.dialog.overlay.events,function(d){if(c(d.target).zIndex()<c.ui.dialog.overlay.maxZ)return false})},1);c(document).bind("keydown.dialog-overlay",function(d){if(a.options.closeOnEscape&&!d.isDefaultPrevented()&&d.keyCode&&d.keyCode===c.ui.keyCode.ESCAPE){a.close(d);d.preventDefault()}});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var b=(this.oldInstances.pop()||
c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});c.fn.bgiframe&&b.bgiframe();this.instances.push(b);return b},destroy:function(a){var b=c.inArray(a,this.instances);b!=-1&&this.oldInstances.push(this.instances.splice(b,1)[0]);this.instances.length===0&&c([document,window]).unbind(".dialog-overlay");a.remove();var d=0;c.each(this.instances,function(){d=Math.max(d,this.css("z-index"))});this.maxZ=d},height:function(){var a,b;if(c.browser.msie&&
c.browser.version<7){a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);b=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return a<b?c(window).height()+"px":a+"px"}else return c(document).height()+"px"},width:function(){var a,b;if(c.browser.msie){a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);b=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return a<b?c(window).width()+"px":a+"px"}else return c(document).width()+
"px"},resize:function(){var a=c([]);c.each(c.ui.dialog.overlay.instances,function(){a=a.add(this)});a.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
;/*
 * jQuery UI Slider 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.slider",d.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var a=this,b=this.options,c=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f=b.values&&b.values.length||1,e=[];this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+
this.orientation+" ui-widget ui-widget-content ui-corner-all"+(b.disabled?" ui-slider-disabled ui-disabled":""));this.range=d([]);if(b.range){if(b.range===true){if(!b.values)b.values=[this._valueMin(),this._valueMin()];if(b.values.length&&b.values.length!==2)b.values=[b.values[0],b.values[0]]}this.range=d("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(b.range==="min"||b.range==="max"?" ui-slider-range-"+b.range:""))}for(var j=c.length;j<f;j+=1)e.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
this.handles=c.add(d(e.join("")).appendTo(a.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(g){g.preventDefault()}).hover(function(){b.disabled||d(this).addClass("ui-state-hover")},function(){d(this).removeClass("ui-state-hover")}).focus(function(){if(b.disabled)d(this).blur();else{d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");d(this).addClass("ui-state-focus")}}).blur(function(){d(this).removeClass("ui-state-focus")});this.handles.each(function(g){d(this).data("index.ui-slider-handle",
g)});this.handles.keydown(function(g){var k=true,l=d(this).data("index.ui-slider-handle"),i,h,m;if(!a.options.disabled){switch(g.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:k=false;if(!a._keySliding){a._keySliding=true;d(this).addClass("ui-state-active");i=a._start(g,l);if(i===false)return}break}m=a.options.step;i=a.options.values&&a.options.values.length?
(h=a.values(l)):(h=a.value());switch(g.keyCode){case d.ui.keyCode.HOME:h=a._valueMin();break;case d.ui.keyCode.END:h=a._valueMax();break;case d.ui.keyCode.PAGE_UP:h=a._trimAlignValue(i+(a._valueMax()-a._valueMin())/5);break;case d.ui.keyCode.PAGE_DOWN:h=a._trimAlignValue(i-(a._valueMax()-a._valueMin())/5);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(i===a._valueMax())return;h=a._trimAlignValue(i+m);break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(i===a._valueMin())return;h=a._trimAlignValue(i-
m);break}a._slide(g,l,h);return k}}).keyup(function(g){var k=d(this).data("index.ui-slider-handle");if(a._keySliding){a._keySliding=false;a._stop(g,k);a._change(g,k);d(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();
return this},_mouseCapture:function(a){var b=this.options,c,f,e,j,g;if(b.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c=this._normValueFromMouse({x:a.pageX,y:a.pageY});f=this._valueMax()-this._valueMin()+1;j=this;this.handles.each(function(k){var l=Math.abs(c-j.values(k));if(f>l){f=l;e=d(this);g=k}});if(b.range===true&&this.values(1)===b.min){g+=1;e=d(this.handles[g])}if(this._start(a,g)===false)return false;
this._mouseSliding=true;j._handleIndex=g;e.addClass("ui-state-active").focus();b=e.offset();this._clickOffset=!d(a.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:a.pageX-b.left-e.width()/2,top:a.pageY-b.top-e.height()/2-(parseInt(e.css("borderTopWidth"),10)||0)-(parseInt(e.css("borderBottomWidth"),10)||0)+(parseInt(e.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(a,g,c);return this._animateOff=true},_mouseStart:function(){return true},_mouseDrag:function(a){var b=
this._normValueFromMouse({x:a.pageX,y:a.pageY});this._slide(a,this._handleIndex,b);return false},_mouseStop:function(a){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(a,this._handleIndex);this._change(a,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b;if(this.orientation==="horizontal"){b=
this.elementSize.width;a=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{b=this.elementSize.height;a=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}b=a/b;if(b>1)b=1;if(b<0)b=0;if(this.orientation==="vertical")b=1-b;a=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+b*a)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(b);
c.values=this.values()}return this._trigger("start",a,c)},_slide:function(a,b,c){var f;if(this.options.values&&this.options.values.length){f=this.values(b?0:1);if(this.options.values.length===2&&this.options.range===true&&(b===0&&c>f||b===1&&c<f))c=f;if(c!==this.values(b)){f=this.values();f[b]=c;a=this._trigger("slide",a,{handle:this.handles[b],value:c,values:f});this.values(b?0:1);a!==false&&this.values(b,c,true)}}else if(c!==this.value()){a=this._trigger("slide",a,{handle:this.handles[b],value:c});
a!==false&&this.value(c)}},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(b);c.values=this.values()}this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(b);c.values=this.values()}this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=
this._trimAlignValue(a);this._refreshValue();this._change(null,0)}else return this._value()},values:function(a,b){var c,f,e;if(arguments.length>1){this.options.values[a]=this._trimAlignValue(b);this._refreshValue();this._change(null,a)}else if(arguments.length)if(d.isArray(arguments[0])){c=this.options.values;f=arguments[0];for(e=0;e<c.length;e+=1){c[e]=this._trimAlignValue(f[e]);this._change(null,e)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(a):
this.value();else return this._values()},_setOption:function(a,b){var c,f=0;if(d.isArray(this.options.values))f=this.options.values.length;d.Widget.prototype._setOption.apply(this,arguments);switch(a){case "disabled":if(b){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.propAttr("disabled",true);this.element.addClass("ui-disabled")}else{this.handles.propAttr("disabled",false);this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(c=0;c<f;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},_values:function(a){var b,c;if(arguments.length){b=this.options.values[a];
return b=this._trimAlignValue(b)}else{b=this.options.values.slice();for(c=0;c<b.length;c+=1)b[c]=this._trimAlignValue(b[c]);return b}},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b;a=a-c;if(Math.abs(c)*2>=b)a+=c>0?b:-b;return parseFloat(a.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var a=
this.options.range,b=this.options,c=this,f=!this._animateOff?b.animate:false,e,j={},g,k,l,i;if(this.options.values&&this.options.values.length)this.handles.each(function(h){e=(c.values(h)-c._valueMin())/(c._valueMax()-c._valueMin())*100;j[c.orientation==="horizontal"?"left":"bottom"]=e+"%";d(this).stop(1,1)[f?"animate":"css"](j,b.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(h===0)c.range.stop(1,1)[f?"animate":"css"]({left:e+"%"},b.animate);if(h===1)c.range[f?"animate":"css"]({width:e-
g+"%"},{queue:false,duration:b.animate})}else{if(h===0)c.range.stop(1,1)[f?"animate":"css"]({bottom:e+"%"},b.animate);if(h===1)c.range[f?"animate":"css"]({height:e-g+"%"},{queue:false,duration:b.animate})}g=e});else{k=this.value();l=this._valueMin();i=this._valueMax();e=i!==l?(k-l)/(i-l)*100:0;j[c.orientation==="horizontal"?"left":"bottom"]=e+"%";this.handle.stop(1,1)[f?"animate":"css"](j,b.animate);if(a==="min"&&this.orientation==="horizontal")this.range.stop(1,1)[f?"animate":"css"]({width:e+"%"},
b.animate);if(a==="max"&&this.orientation==="horizontal")this.range[f?"animate":"css"]({width:100-e+"%"},{queue:false,duration:b.animate});if(a==="min"&&this.orientation==="vertical")this.range.stop(1,1)[f?"animate":"css"]({height:e+"%"},b.animate);if(a==="max"&&this.orientation==="vertical")this.range[f?"animate":"css"]({height:100-e+"%"},{queue:false,duration:b.animate})}}});d.extend(d.ui.slider,{version:"1.8.16"})})(jQuery);
;/*
 * jQuery UI Tabs 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(d,p){function u(){return++v}function w(){return++x}var v=0,x=0;d.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(b,e){if(b=="selected")this.options.collapsible&&
e==this.options.selected||this.select(e);else{this.options[b]=e;this._tabify()}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+u()},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+w());return d.cookie.apply(null,[b].concat(d.makeArray(arguments)))},_ui:function(b,e){return{tab:b,panel:e,index:this.anchors.index(b)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=
d(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(b){function e(g,f){g.css("display","");!d.support.opacity&&f.opacity&&g[0].style.removeAttribute("filter")}var a=this,c=this.options,h=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=d(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return d("a",this)[0]});this.panels=d([]);this.anchors.each(function(g,f){var i=d(f).attr("href"),l=i.split("#")[0],q;if(l&&(l===location.toString().split("#")[0]||
(q=d("base")[0])&&l===q.href)){i=f.hash;f.href=i}if(h.test(i))a.panels=a.panels.add(a.element.find(a._sanitizeSelector(i)));else if(i&&i!=="#"){d.data(f,"href.tabs",i);d.data(f,"load.tabs",i.replace(/#.*$/,""));i=a._tabId(f);f.href="#"+i;f=a.element.find("#"+i);if(!f.length){f=d(c.panelTemplate).attr("id",i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g-1]||a.list);f.data("destroy.tabs",true)}a.panels=a.panels.add(f)}else c.disabled.push(g)});if(b){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(c.selected===p){location.hash&&this.anchors.each(function(g,f){if(f.hash==location.hash){c.selected=g;return false}});if(typeof c.selected!=="number"&&c.cookie)c.selected=parseInt(a._cookie(),10);if(typeof c.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)c.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));c.selected=c.selected||(this.lis.length?0:-1)}else if(c.selected===null)c.selected=-1;c.selected=c.selected>=0&&this.anchors[c.selected]||c.selected<0?c.selected:0;c.disabled=d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"),function(g){return a.lis.index(g)}))).sort();d.inArray(c.selected,c.disabled)!=-1&&c.disabled.splice(d.inArray(c.selected,c.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(c.selected>=0&&this.anchors.length){a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active");a.element.queue("tabs",function(){a._trigger("show",null,a._ui(a.anchors[c.selected],a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash))[0]))});this.load(c.selected)}d(window).bind("unload",function(){a.lis.add(a.anchors).unbind(".tabs");a.lis=a.anchors=a.panels=null})}else c.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[c.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");c.cookie&&this._cookie(c.selected,c.cookie);b=0;for(var j;j=this.lis[b];b++)d(j)[d.inArray(b,c.disabled)!=-1&&!d(j).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");c.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(c.event!=="mouseover"){var k=function(g,f){f.is(":not(.ui-state-disabled)")&&f.addClass("ui-state-"+g)},n=function(g,f){f.removeClass("ui-state-"+
g)};this.lis.bind("mouseover.tabs",function(){k("hover",d(this))});this.lis.bind("mouseout.tabs",function(){n("hover",d(this))});this.anchors.bind("focus.tabs",function(){k("focus",d(this).closest("li"))});this.anchors.bind("blur.tabs",function(){n("focus",d(this).closest("li"))})}var m,o;if(c.fx)if(d.isArray(c.fx)){m=c.fx[0];o=c.fx[1]}else m=o=c.fx;var r=o?function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",
function(){e(f,o);a._trigger("show",null,a._ui(g,f[0]))})}:function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");a._trigger("show",null,a._ui(g,f[0]))},s=m?function(g,f){f.animate(m,m.duration||"normal",function(){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");e(f,m);a.element.dequeue("tabs")})}:function(g,f){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");a.element.dequeue("tabs")};
this.anchors.bind(c.event+".tabs",function(){var g=this,f=d(g).closest("li"),i=a.panels.filter(":not(.ui-tabs-hide)"),l=a.element.find(a._sanitizeSelector(g.hash));if(f.hasClass("ui-tabs-selected")&&!c.collapsible||f.hasClass("ui-state-disabled")||f.hasClass("ui-state-processing")||a.panels.filter(":animated").length||a._trigger("select",null,a._ui(this,l[0]))===false){this.blur();return false}c.selected=a.anchors.index(this);a.abort();if(c.collapsible)if(f.hasClass("ui-tabs-selected")){c.selected=
-1;c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){s(g,i)}).dequeue("tabs");this.blur();return false}else if(!i.length){c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this));this.blur();return false}c.cookie&&a._cookie(c.selected,c.cookie);if(l.length){i.length&&a.element.queue("tabs",function(){s(g,i)});a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
d.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(b){if(typeof b=="string")b=this.anchors.index(this.anchors.filter("[href$="+b+"]"));return b},destroy:function(){var b=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var e=
d.data(this,"href.tabs");if(e)this.href=e;var a=d(this).unbind(".tabs");d.each(["href","load","cache"],function(c,h){a.removeData(h+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){d.data(this,"destroy.tabs")?d(this).remove():d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});b.cookie&&this._cookie(null,b.cookie);return this},add:function(b,
e,a){if(a===p)a=this.anchors.length;var c=this,h=this.options;e=d(h.tabTemplate.replace(/#\{href\}/g,b).replace(/#\{label\}/g,e));b=!b.indexOf("#")?b.replace("#",""):this._tabId(d("a",e)[0]);e.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var j=c.element.find("#"+b);j.length||(j=d(h.panelTemplate).attr("id",b).data("destroy.tabs",true));j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(a>=this.lis.length){e.appendTo(this.list);j.appendTo(this.list[0].parentNode)}else{e.insertBefore(this.lis[a]);
j.insertBefore(this.panels[a])}h.disabled=d.map(h.disabled,function(k){return k>=a?++k:k});this._tabify();if(this.anchors.length==1){h.selected=0;e.addClass("ui-tabs-selected ui-state-active");j.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){c._trigger("show",null,c._ui(c.anchors[0],c.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[a],this.panels[a]));return this},remove:function(b){b=this._getIndex(b);var e=this.options,a=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();
if(a.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(b+(b+1<this.anchors.length?1:-1));e.disabled=d.map(d.grep(e.disabled,function(h){return h!=b}),function(h){return h>=b?--h:h});this._tabify();this._trigger("remove",null,this._ui(a.find("a")[0],c[0]));return this},enable:function(b){b=this._getIndex(b);var e=this.options;if(d.inArray(b,e.disabled)!=-1){this.lis.eq(b).removeClass("ui-state-disabled");e.disabled=d.grep(e.disabled,function(a){return a!=b});this._trigger("enable",null,
this._ui(this.anchors[b],this.panels[b]));return this}},disable:function(b){b=this._getIndex(b);var e=this.options;if(b!=e.selected){this.lis.eq(b).addClass("ui-state-disabled");e.disabled.push(b);e.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[b],this.panels[b]))}return this},select:function(b){b=this._getIndex(b);if(b==-1)if(this.options.collapsible&&this.options.selected!=-1)b=this.options.selected;else return this;this.anchors.eq(b).trigger(this.options.event+".tabs");return this},
load:function(b){b=this._getIndex(b);var e=this,a=this.options,c=this.anchors.eq(b)[0],h=d.data(c,"load.tabs");this.abort();if(!h||this.element.queue("tabs").length!==0&&d.data(c,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(b).addClass("ui-state-processing");if(a.spinner){var j=d("span",c);j.data("label.tabs",j.html()).html(a.spinner)}this.xhr=d.ajax(d.extend({},a.ajaxOptions,{url:h,success:function(k,n){e.element.find(e._sanitizeSelector(c.hash)).html(k);e._cleanup();a.cache&&d.data(c,
"cache.tabs",true);e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.success(k,n)}catch(m){}},error:function(k,n){e._cleanup();e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.error(k,n,b,c)}catch(m){}}}));e.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(b,e){this.anchors.eq(b).removeData("cache.tabs").data("load.tabs",e);return this},length:function(){return this.anchors.length}});d.extend(d.ui.tabs,{version:"1.8.16"});d.extend(d.ui.tabs.prototype,{rotation:null,rotate:function(b,e){var a=this,c=this.options,h=a._rotate||(a._rotate=function(j){clearTimeout(a.rotation);a.rotation=setTimeout(function(){var k=c.selected;a.select(++k<a.anchors.length?k:0)},b);j&&j.stopPropagation()});e=a._unrotate||(a._unrotate=!e?function(j){j.clientX&&
a.rotate(null)}:function(){t=c.selected;h()});if(b){this.element.bind("tabsshow",h);this.anchors.bind(c.event+".tabs",e);h()}else{clearTimeout(a.rotation);this.element.unbind("tabsshow",h);this.anchors.unbind(c.event+".tabs",e);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
;/*
 * jQuery UI Datepicker 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function(d,C){function M(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};d.extend(this._defaults,this.regional[""]);this.dpDiv=N(d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function N(a){return a.bind("mouseout",
function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");b.length&&b.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");if(!(d.datepicker._isDisabledDatepicker(J.inline?a.parent()[0]:J.input[0])||!b.length)){b.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
b.addClass("ui-state-hover");b.hasClass("ui-datepicker-prev")&&b.addClass("ui-datepicker-prev-hover");b.hasClass("ui-datepicker-next")&&b.addClass("ui-datepicker-next-hover")}})}function H(a,b){d.extend(a,b);for(var c in b)if(b[c]==null||b[c]==C)a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:"1.8.16"}});var B=(new Date).getTime(),J;d.extend(M.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},
setDefaults:function(a){H(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null;for(var e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=f}}}e=a.nodeName.toLowerCase();f=e=="div"||e=="span";if(!a.id){this.uuid+=1;a.id="dp"+this.uuid}var i=this._newInst(d(a),f);i.settings=d.extend({},b||{},c||{});if(e=="input")this._connectDatepicker(a,i);else f&&this._inlineDatepicker(a,i)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,
"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:N(d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);if(!c.hasClass(this.markerClassName)){this._attachments(c,b);c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",
function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});this._autoSize(b);d.data(a,"datepicker",b);b.settings.disabled&&this._disableDatepicker(a)}},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&b.append.remove();if(c){b.append=d('<span class="'+this._appendClass+'">'+c+"</span>");a[e?"before":"after"](b.append)}a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");if(c==
"focus"||c=="both")a.focus(this._showDatepicker);if(c=="button"||c=="both"){c=this._get(b,"buttonText");var f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(f==""?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0]?d.datepicker._hideDatepicker():
d.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var e=function(f){for(var h=0,i=0,g=0;g<f.length;g++)if(f[g].length>h){h=f[g].length;i=g}return i};b.setMonth(e(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(e(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,
b){var c=d(a);if(!c.hasClass(this.markerClassName)){c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});d.data(a,"datepicker",b);this._setDate(b,this._getDefaultDate(b),true);this._updateDatepicker(b);this._updateAlternate(b);b.settings.disabled&&this._disableDatepicker(a);b.dpDiv.css("display","block")}},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;if(!a){this.uuid+=
1;this._dialogInput=d('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);d("body").append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};d.data(this._dialogInput[0],"datepicker",a)}H(a.settings,e||{});b=b&&b.constructor==Date?this._formatDate(a,b):b;this._dialogInput.val(b);this._pos=f?f.length?f:[f.pageX,f.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/
2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);d.blockUI&&d.blockUI(this.dpDiv);d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=
d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");if(e=="input"){c.append.remove();c.trigger.remove();b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else if(e=="div"||e=="span")b.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=
a.nodeName.toLowerCase();if(e=="input"){a.disabled=false;c.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(e=="div"||e=="span"){b=b.children("."+this._inlineClass);b.children().removeClass("ui-state-disabled");b.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f})}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,
"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=true;c.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(e=="div"||e=="span"){b=b.children("."+this._inlineClass);b.children().addClass("ui-state-disabled");b.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=d.map(this._disabledInputs,function(f){return f==
a?null:f});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return true;return false},_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?d.extend({},d.datepicker._defaults):e?b=="all"?
d.extend({},e.settings):this._get(e,b):null;var f=b||{};if(typeof b=="string"){f={};f[b]=c}if(e){this._curInst==e&&this._hideDatepicker();var h=this._getDateDatepicker(a,true),i=this._getMinMaxDate(e,"min"),g=this._getMinMaxDate(e,"max");H(e.settings,f);if(i!==null&&f.dateFormat!==C&&f.minDate===C)e.settings.minDate=this._formatDate(e,i);if(g!==null&&f.dateFormat!==C&&f.maxDate===C)e.settings.maxDate=this._formatDate(e,g);this._attachments(d(a),e);this._autoSize(e);this._setDate(e,h);this._updateAlternate(e);
this._updateDatepicker(e)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){if(a=this._getInst(a)){this._setDate(a,b);this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,b){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,b);return a?this._getDate(a):null},_doKeyDown:function(a){var b=d.datepicker._getInst(a.target),c=true,e=b.dpDiv.is(".ui-datepicker-rtl");
b._keyEvent=true;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=false;break;case 13:c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv);c[0]&&d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]);if(a=d.datepicker._get(b,"onSelect")){c=d.datepicker._formatDate(b);a.apply(b.input?b.input[0]:null,[c,b])}else d.datepicker._hideDatepicker();return false;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,
a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)d.datepicker._clearDate(a.target);c=a.ctrlKey||a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)d.datepicker._gotoToday(a.target);c=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?+1:-1,"D");c=
a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?-1:+1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,
"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,+7,"D");c=a.ctrlKey||a.metaKey;break;default:c=false}else if(a.keyCode==36&&a.ctrlKey)d.datepicker._showDatepicker(this);else c=false;if(c){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,"constrainInput")){b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat"));var c=String.fromCharCode(a.charCode==C?a.keyCode:a.charCode);
return a.ctrlKey||a.metaKey||c<" "||!b||b.indexOf(c)>-1}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a))){d.datepicker._setDateFromField(a);d.datepicker._updateAlternate(a);d.datepicker._updateDatepicker(a)}}catch(b){d.datepicker.log(b)}return true},_showDatepicker:function(a){a=a.target||a;if(a.nodeName.toLowerCase()!="input")a=d("input",
a.parentNode)[0];if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);if(d.datepicker._curInst&&d.datepicker._curInst!=b){d.datepicker._datepickerShowing&&d.datepicker._triggerOnClose(d.datepicker._curInst);d.datepicker._curInst.dpDiv.stop(true,true)}var c=d.datepicker._get(b,"beforeShow");c=c?c.apply(a,[a,b]):{};if(c!==false){H(b.settings,c);b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);if(d.datepicker._inDialog)a.value=
"";if(!d.datepicker._pos){d.datepicker._pos=d.datepicker._findPos(a);d.datepicker._pos[1]+=a.offsetHeight}var e=false;d(a).parents().each(function(){e|=d(this).css("position")=="fixed";return!e});if(e&&d.browser.opera){d.datepicker._pos[0]-=document.documentElement.scrollLeft;d.datepicker._pos[1]-=document.documentElement.scrollTop}c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.empty();b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);
c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){c=d.datepicker._get(b,"showAnim");var f=d.datepicker._get(b,"duration"),h=function(){var i=b.dpDiv.find("iframe.ui-datepicker-cover");if(i.length){var g=d.datepicker._getBorders(b.dpDiv);i.css({left:-g[0],top:-g[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex(d(a).zIndex()+1);d.datepicker._datepickerShowing=
true;d.effects&&d.effects[c]?b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h):b.dpDiv[c||"show"](c?f:null,h);if(!c||!f)h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=b}}}},_updateDatepicker:function(a){this.maxRows=4;var b=d.datepicker._getBorders(a.dpDiv);J=a;a.dpDiv.empty().append(this._generateHTML(a));var c=a.dpDiv.find("iframe.ui-datepicker-cover");c.length&&c.css({left:-b[0],top:-b[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()});
a.dpDiv.find("."+this._dayOverClass+" a").mouseover();b=this._getNumberOfMonths(a);c=b[1];a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");c>1&&a.dpDiv.addClass("ui-datepicker-multi-"+c).css("width",17*c+"em");a.dpDiv[(b[0]!=1||b[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==d.datepicker._curInst&&d.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&
!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var e=a.yearshtml;setTimeout(function(){e===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);e=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(c){return{thin:1,medium:2,thick:3}[c]||c};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var e=a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),
h=a.input?a.input.outerWidth():0,i=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+d(document).scrollLeft(),j=document.documentElement.clientHeight+d(document).scrollTop();b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+i?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,b.top+f>j&&j>f?Math.abs(f+i):0);return b},_findPos:function(a){for(var b=
this._get(this._getInst(a),"isRTL");a&&(a.type=="hidden"||a.nodeType!=1||d.expr.filters.hidden(a));)a=a[b?"previousSibling":"nextSibling"];a=d(a).offset();return[a.left,a.top]},_triggerOnClose:function(a){var b=this._get(a,"onClose");if(b)b.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a])},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&&b!=d.data(a,"datepicker")))if(this._datepickerShowing){a=this._get(b,"showAnim");var c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b);
this._curInst=null};d.effects&&d.effects[a]?b.dpDiv.hide(a,d.datepicker._get(b,"showOptions"),c,e):b.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?"fadeOut":"hide"](a?c:null,e);a||e();d.datepicker._triggerOnClose(b);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(d.blockUI){d.unblockUI();d("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},
_checkExternalClick:function(a){if(d.datepicker._curInst){a=d(a.target);a[0].id!=d.datepicker._mainDivId&&a.parents("#"+d.datepicker._mainDivId).length==0&&!a.hasClass(d.datepicker.markerClassName)&&!a.hasClass(d.datepicker._triggerClass)&&d.datepicker._datepickerShowing&&!(d.datepicker._inDialog&&d.blockUI)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){a=d(a);var e=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):
0),c);this._updateDatepicker(e)}},_gotoToday:function(a){a=d(a);var b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay){b.selectedDay=b.currentDay;b.drawMonth=b.selectedMonth=b.currentMonth;b.drawYear=b.selectedYear=b.currentYear}else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},_selectMonthYear:function(a,b,c){a=d(a);var e=this._getInst(a[0]);e["selected"+(c=="M"?
"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_selectDay:function(a,b,c,e){var f=d(a);if(!(d(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0]))){f=this._getInst(f[0]);f.selectedDay=f.currentDay=d("a",e).html();f.selectedMonth=f.currentMonth=b;f.selectedYear=f.currentYear=c;this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){a=d(a);
this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){a=this._getInst(d(a)[0]);b=b!=null?b:this._formatDate(a);a.input&&a.input.val(b);this._updateAlternate(a);var c=this._get(a,"onSelect");if(c)c.apply(a.input?a.input[0]:null,[b,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);else{this._hideDatepicker();this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var b=this._get(a,"altField");
if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[a>0&&a<6,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?
b.toString():b+"";if(b=="")return null;var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;e=typeof e!="string"?e:(new Date).getFullYear()%100+parseInt(e,10);for(var f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,i=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,j=c=-1,l=-1,u=-1,k=false,o=function(p){(p=A+1<a.length&&a.charAt(A+1)==p)&&A++;return p},m=function(p){var D=
o(p);p=new RegExp("^\\d{1,"+(p=="@"?14:p=="!"?20:p=="y"&&D?4:p=="o"?3:2)+"}");p=b.substring(q).match(p);if(!p)throw"Missing number at position "+q;q+=p[0].length;return parseInt(p[0],10)},n=function(p,D,K){p=d.map(o(p)?K:D,function(w,x){return[[x,w]]}).sort(function(w,x){return-(w[1].length-x[1].length)});var E=-1;d.each(p,function(w,x){w=x[1];if(b.substr(q,w.length).toLowerCase()==w.toLowerCase()){E=x[0];q+=w.length;return false}});if(E!=-1)return E+1;else throw"Unknown name at position "+q;},s=
function(){if(b.charAt(q)!=a.charAt(A))throw"Unexpected literal at position "+q;q++},q=0,A=0;A<a.length;A++)if(k)if(a.charAt(A)=="'"&&!o("'"))k=false;else s();else switch(a.charAt(A)){case "d":l=m("d");break;case "D":n("D",f,h);break;case "o":u=m("o");break;case "m":j=m("m");break;case "M":j=n("M",i,g);break;case "y":c=m("y");break;case "@":var v=new Date(m("@"));c=v.getFullYear();j=v.getMonth()+1;l=v.getDate();break;case "!":v=new Date((m("!")-this._ticksTo1970)/1E4);c=v.getFullYear();j=v.getMonth()+
1;l=v.getDate();break;case "'":if(o("'"))s();else k=true;break;default:s()}if(q<b.length)throw"Extra/unparsed characters found in date: "+b.substring(q);if(c==-1)c=(new Date).getFullYear();else if(c<100)c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100);if(u>-1){j=1;l=u;do{e=this._getDaysInMonth(c,j-1);if(l<=e)break;j++;l-=e}while(1)}v=this._daylightSavingAdjust(new Date(c,j-1,l));if(v.getFullYear()!=c||v.getMonth()+1!=j||v.getDate()!=l)throw"Invalid date";return v},ATOM:"yy-mm-dd",
COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(a,b,c){if(!b)return"";var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort;c=(c?c.monthNames:
null)||this._defaults.monthNames;var i=function(o){(o=k+1<a.length&&a.charAt(k+1)==o)&&k++;return o},g=function(o,m,n){m=""+m;if(i(o))for(;m.length<n;)m="0"+m;return m},j=function(o,m,n,s){return i(o)?s[m]:n[m]},l="",u=false;if(b)for(var k=0;k<a.length;k++)if(u)if(a.charAt(k)=="'"&&!i("'"))u=false;else l+=a.charAt(k);else switch(a.charAt(k)){case "d":l+=g("d",b.getDate(),2);break;case "D":l+=j("D",b.getDay(),e,f);break;case "o":l+=g("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-
(new Date(b.getFullYear(),0,0)).getTime())/864E5),3);break;case "m":l+=g("m",b.getMonth()+1,2);break;case "M":l+=j("M",b.getMonth(),h,c);break;case "y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case "@":l+=b.getTime();break;case "!":l+=b.getTime()*1E4+this._ticksTo1970;break;case "'":if(i("'"))l+="'";else u=true;break;default:l+=a.charAt(k)}return l},_possibleChars:function(a){for(var b="",c=false,e=function(h){(h=f+1<a.length&&a.charAt(f+1)==h)&&f++;return h},f=
0;f<a.length;f++)if(c)if(a.charAt(f)=="'"&&!e("'"))c=false;else b+=a.charAt(f);else switch(a.charAt(f)){case "d":case "m":case "y":case "@":b+="0123456789";break;case "D":case "M":return null;case "'":if(e("'"))b+="'";else c=true;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return a.settings[b]!==C?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),e=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);
var i=this._getFormatConfig(a);try{f=this.parseDate(c,e,i)||h}catch(g){this.log(g);e=b?"":e}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=e?f.getDate():0;a.currentMonth=e?f.getMonth():0;a.currentYear=e?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var e=function(h){var i=new Date;
i.setDate(i.getDate()+h);return i},f=function(h){try{return d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),h,d.datepicker._getFormatConfig(a))}catch(i){}var g=(h.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,j=g.getFullYear(),l=g.getMonth();g=g.getDate();for(var u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,k=u.exec(h);k;){switch(k[2]||"d"){case "d":case "D":g+=parseInt(k[1],10);break;case "w":case "W":g+=parseInt(k[1],10)*7;break;case "m":case "M":l+=parseInt(k[1],10);g=
Math.min(g,d.datepicker._getDaysInMonth(j,l));break;case "y":case "Y":j+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break}k=u.exec(h)}return new Date(j,l,g)};if(b=(b=b==null||b===""?c:typeof b=="string"?f(b):typeof b=="number"?isNaN(b)?c:e(b):new Date(b.getTime()))&&b.toString()=="Invalid Date"?c:b){b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0)}return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>
12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var e=!b,f=a.selectedMonth,h=a.selectedYear;b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();if((f!=a.selectedMonth||h!=a.selectedYear)&&!c)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(e?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&
a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),i=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),j=this._get(a,"stepMonths"),l=i[0]!=1||i[1]!=1,u=this._daylightSavingAdjust(!a.currentDay?
new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");g=a.drawMonth-g;var m=a.drawYear;if(g<0){g+=12;m--}if(o){var n=this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth()-i[0]*i[1]+1,o.getDate()));for(n=k&&n<k?k:n;this._daylightSavingAdjust(new Date(m,g,1))>n;){g--;if(g<0){g=11;m--}}}a.drawMonth=g;a.drawYear=m;n=this._get(a,"prevText");n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(m,g-j,1)),this._getFormatConfig(a));
n=this._canAdjustMonth(a,-1,m,g)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+B+".datepicker._adjustDate('#"+a.id+"', -"+j+", 'M');\" title=\""+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>";var s=this._get(a,"nextText");s=!h?s:this.formatDate(s,this._daylightSavingAdjust(new Date(m,
g+j,1)),this._getFormatConfig(a));f=this._canAdjustMonth(a,+1,m,g)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+B+".datepicker._adjustDate('#"+a.id+"', +"+j+", 'M');\" title=\""+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>";j=this._get(a,"currentText");s=this._get(a,"gotoCurrent")&&
a.currentDay?u:b;j=!h?j:this.formatDate(j,s,this._getFormatConfig(a));h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+B+'.datepicker._hideDatepicker();">'+this._get(a,"closeText")+"</button>":"";e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,s)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+
B+".datepicker._gotoToday('#"+a.id+"');\">"+j+"</button>":"")+(c?"":h)+"</div>":"";h=parseInt(this._get(a,"firstDay"),10);h=isNaN(h)?0:h;j=this._get(a,"showWeek");s=this._get(a,"dayNames");this._get(a,"dayNamesShort");var q=this._get(a,"dayNamesMin"),A=this._get(a,"monthNames"),v=this._get(a,"monthNamesShort"),p=this._get(a,"beforeShowDay"),D=this._get(a,"showOtherMonths"),K=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var E=this._getDefaultDate(a),w="",x=0;x<i[0];x++){var O=
"";this.maxRows=4;for(var G=0;G<i[1];G++){var P=this._daylightSavingAdjust(new Date(m,g,a.selectedDay)),t=" ui-corner-all",y="";if(l){y+='<div class="ui-datepicker-group';if(i[1]>1)switch(G){case 0:y+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":"left");break;case i[1]-1:y+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:y+=" ui-datepicker-group-middle";t="";break}y+='">'}y+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&
x==0?c?f:n:"")+(/all|right/.test(t)&&x==0?c?n:f:"")+this._generateMonthYearHeader(a,g,m,k,o,x>0||G>0,A,v)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var z=j?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(t=0;t<7;t++){var r=(t+h)%7;z+="<th"+((t+h+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+s[r]+'">'+q[r]+"</span></th>"}y+=z+"</tr></thead><tbody>";z=this._getDaysInMonth(m,g);if(m==a.selectedYear&&g==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,
z);t=(this._getFirstDayOfMonth(m,g)-h+7)%7;z=Math.ceil((t+z)/7);this.maxRows=z=l?this.maxRows>z?this.maxRows:z:z;r=this._daylightSavingAdjust(new Date(m,g,1-t));for(var Q=0;Q<z;Q++){y+="<tr>";var R=!j?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(r)+"</td>";for(t=0;t<7;t++){var I=p?p.apply(a.input?a.input[0]:null,[r]):[true,""],F=r.getMonth()!=g,L=F&&!K||!I[0]||k&&r<k||o&&r>o;R+='<td class="'+((t+h+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(r.getTime()==
P.getTime()&&g==a.selectedMonth&&a._keyEvent||E.getTime()==r.getTime()&&E.getTime()==P.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!D?"":" "+I[1]+(r.getTime()==u.getTime()?" "+this._currentClass:"")+(r.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!F||D)&&I[2]?' title="'+I[2]+'"':"")+(L?"":' onclick="DP_jQuery_'+B+".datepicker._selectDay('#"+a.id+"',"+r.getMonth()+","+r.getFullYear()+', this);return false;"')+">"+(F&&!D?"&#xa0;":L?'<span class="ui-state-default">'+
r.getDate()+"</span>":'<a class="ui-state-default'+(r.getTime()==b.getTime()?" ui-state-highlight":"")+(r.getTime()==u.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+'" href="#">'+r.getDate()+"</a>")+"</td>";r.setDate(r.getDate()+1);r=this._daylightSavingAdjust(r)}y+=R+"</tr>"}g++;if(g>11){g=0;m++}y+="</tbody></table>"+(l?"</div>"+(i[0]>0&&G==i[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");O+=y}w+=O}w+=e+(d.browser.msie&&parseInt(d.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':
"");a._keyEvent=false;return w},_generateMonthYearHeader:function(a,b,c,e,f,h,i,g){var j=this._get(a,"changeMonth"),l=this._get(a,"changeYear"),u=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',o="";if(h||!j)o+='<span class="ui-datepicker-month">'+i[b]+"</span>";else{i=e&&e.getFullYear()==c;var m=f&&f.getFullYear()==c;o+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+B+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" >";for(var n=0;n<12;n++)if((!i||n>=e.getMonth())&&
(!m||n<=f.getMonth()))o+='<option value="'+n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";o+="</select>"}u||(k+=o+(h||!(j&&l)?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(h||!l)k+='<span class="ui-datepicker-year">'+c+"</span>";else{g=this._get(a,"yearRange").split(":");var s=(new Date).getFullYear();i=function(q){q=q.match(/c[+-].*/)?c+parseInt(q.substring(1),10):q.match(/[+-].*/)?s+parseInt(q,10):parseInt(q,10);return isNaN(q)?s:q};b=i(g[0]);g=Math.max(b,i(g[1]||""));b=e?Math.max(b,
e.getFullYear()):b;g=f?Math.min(g,f.getFullYear()):g;for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+B+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" >";b<=g;b++)a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";a.yearshtml+="</select>";k+=a.yearshtml;a.yearshtml=null}}k+=this._get(a,"yearSuffix");if(u)k+=(h||!(j&&l)?"&#xa0;":"")+o;k+="</div>";return k},_adjustInstDate:function(a,b,c){var e=a.drawYear+(c=="Y"?b:0),f=a.drawMonth+
(c=="M"?b:0);b=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+(c=="D"?b:0);e=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,b)));a.selectedDay=e.getDate();a.drawMonth=a.selectedMonth=e.getMonth();a.drawYear=a.selectedYear=e.getFullYear();if(c=="M"||c=="Y")this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");b=c&&b<c?c:b;return b=a&&b>a?a:b},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");if(b)b.apply(a.input?
a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,e){var f=this._getNumberOfMonths(a);c=this._daylightSavingAdjust(new Date(c,
e+(b<0?b:f[0]*f[1]),1));b<0&&c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!a||b.getTime()<=a.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,
"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,e){if(!b){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}b=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(e,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=function(a){if(!this.length)return this;
if(!d.datepicker.initialized){d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);d.datepicker.initialized=true}var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));return this.each(function(){typeof a==
"string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new M;d.datepicker.initialized=false;d.datepicker.uuid=(new Date).getTime();d.datepicker.version="1.8.16";window["DP_jQuery_"+B]=d})(jQuery);
;/*
 * jQuery UI Progressbar 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function(b,d){b.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)},value:function(a){if(a===d)return this._value();this._setOption("value",a);return this},_setOption:function(a,c){if(a==="value"){this.options.value=c;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}b.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;if(typeof a!=="number")a=0;return Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var a=this.value(),c=this._percentage();if(this.oldValue!==a){this.oldValue=a;this._trigger("change")}this.valueDiv.toggle(a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(c.toFixed(0)+"%");this.element.attr("aria-valuenow",a)}});b.extend(b.ui.progressbar,{version:"1.8.16"})})(jQuery);
;/*
 * jQuery UI Effects 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(f,j){function m(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return n.transparent;return n[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return m(b)}function o(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function p(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function l(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=m(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var n={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},q=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
d){if(f.isFunction(b)){d=b;b=null}return this.queue(function(){var e=f(this),g=e.attr("style")||" ",h=p(o.call(this)),r,v=e.attr("class");f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});r=p(o.call(this));e.attr("class",v);e.animate(u(h,r),{queue:false,duration:a,easing:b,complete:function(){f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments);f.dequeue(this)}})})};
f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,a):f.effects.animateClass.apply(this,
[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.16",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,a){var b;switch(c[0]){case "top":b=
0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),
d=document.activeElement;c.wrap(b);if(c[0]===d||f.contains(c[0],d))f(d).focus();b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(e,g){a[g]=c.css(g);if(isNaN(parseInt(a[g],10)))a[g]="auto"});c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return b.css(a).show()},removeWrapper:function(c){var a,b=document.activeElement;
if(c.parent().is(".ui-effects-wrapper")){a=c.parent().replaceWith(c);if(c[0]===b||f.contains(c[0],b))f(b).focus();return a}return c},setTransition:function(c,a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});
return d.call(this,b)},_show:f.fn.show,show:function(c){if(l(c))return this._show.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(l(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(l(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,
arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),b=[];f.each(["em","px","%","pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/
2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,a,b,d,e){return d*((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,
d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,
a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==e)return b+d;if((a/=e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,
d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=
0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);if(a<1)return-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;
if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,a,b,d,e){return d-f.easing.easeOutBounce(c,e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,
a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;/*
 * jQuery UI Effects Blind 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.blind=function(c){return this.queue(function(){var a=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(a,c.options.mode||"hide"),d=c.options.direction||"vertical";b.effects.save(a,g);a.show();var e=b.effects.createWrapper(a).css({overflow:"hidden"}),h=d=="vertical"?"height":"width";d=d=="vertical"?e.height():e.width();f=="show"&&e.css(h,0);var i={};i[h]=f=="show"?d:0;e.animate(i,c.duration,c.options.easing,function(){f=="hide"&&a.hide();b.effects.restore(a,
g);b.effects.removeWrapper(a);c.callback&&c.callback.apply(a[0],arguments);a.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Bounce 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.bounce=function(b){return this.queue(function(){var a=e(this),l=["position","top","bottom","left","right"],h=e.effects.setMode(a,b.options.mode||"effect"),d=b.options.direction||"up",c=b.options.distance||20,m=b.options.times||5,i=b.duration||250;/show|hide/.test(h)&&l.push("opacity");e.effects.save(a,l);a.show();e.effects.createWrapper(a);var f=d=="up"||d=="down"?"top":"left";d=d=="up"||d=="left"?"pos":"neg";c=b.options.distance||(f=="top"?a.outerHeight({margin:true})/3:a.outerWidth({margin:true})/
3);if(h=="show")a.css("opacity",0).css(f,d=="pos"?-c:c);if(h=="hide")c/=m*2;h!="hide"&&m--;if(h=="show"){var g={opacity:1};g[f]=(d=="pos"?"+=":"-=")+c;a.animate(g,i/2,b.options.easing);c/=2;m--}for(g=0;g<m;g++){var j={},k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing);c=h=="hide"?c*2:c/2}if(h=="hide"){g={opacity:0};g[f]=(d=="pos"?"-=":"+=")+c;a.animate(g,i/2,b.options.easing,function(){a.hide();e.effects.restore(a,l);e.effects.removeWrapper(a);
b.callback&&b.callback.apply(this,arguments)})}else{j={};k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing,function(){e.effects.restore(a,l);e.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments)})}a.queue("fx",function(){a.dequeue()});a.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Clip 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.clip=function(e){return this.queue(function(){var a=b(this),i=["position","top","bottom","left","right","height","width"],f=b.effects.setMode(a,e.options.mode||"hide"),c=e.options.direction||"vertical";b.effects.save(a,i);a.show();var d=b.effects.createWrapper(a).css({overflow:"hidden"});d=a[0].tagName=="IMG"?d:a;var g={size:c=="vertical"?"height":"width",position:c=="vertical"?"top":"left"};c=c=="vertical"?d.height():d.width();if(f=="show"){d.css(g.size,0);d.css(g.position,
c/2)}var h={};h[g.size]=f=="show"?c:0;h[g.position]=f=="show"?0:c/2;d.animate(h,{queue:false,duration:e.duration,easing:e.options.easing,complete:function(){f=="hide"&&a.hide();b.effects.restore(a,i);b.effects.removeWrapper(a);e.callback&&e.callback.apply(a[0],arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Drop 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.drop=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right","opacity"],e=c.effects.setMode(a,d.options.mode||"hide"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a);var f=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var g=d.options.distance||(f=="top"?a.outerHeight({margin:true})/2:a.outerWidth({margin:true})/2);if(e=="show")a.css("opacity",0).css(f,b=="pos"?-g:g);var i={opacity:e==
"show"?1:0};i[f]=(e=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+g;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){e=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Explode 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(j){j.effects.explode=function(a){return this.queue(function(){var c=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3,d=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3;a.options.mode=a.options.mode=="toggle"?j(this).is(":visible")?"hide":"show":a.options.mode;var b=j(this).show().css("visibility","hidden"),g=b.offset();g.top-=parseInt(b.css("marginTop"),10)||0;g.left-=parseInt(b.css("marginLeft"),10)||0;for(var h=b.outerWidth(true),i=b.outerHeight(true),e=0;e<c;e++)for(var f=
0;f<d;f++)b.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-f*(h/d),top:-e*(i/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:h/d,height:i/c,left:g.left+f*(h/d)+(a.options.mode=="show"?(f-Math.floor(d/2))*(h/d):0),top:g.top+e*(i/c)+(a.options.mode=="show"?(e-Math.floor(c/2))*(i/c):0),opacity:a.options.mode=="show"?0:1}).animate({left:g.left+f*(h/d)+(a.options.mode=="show"?0:(f-Math.floor(d/2))*(h/d)),top:g.top+
e*(i/c)+(a.options.mode=="show"?0:(e-Math.floor(c/2))*(i/c)),opacity:a.options.mode=="show"?1:0},a.duration||500);setTimeout(function(){a.options.mode=="show"?b.css({visibility:"visible"}):b.css({visibility:"visible"}).hide();a.callback&&a.callback.apply(b[0]);b.dequeue();j("div.ui-effects-explode").remove()},a.duration||500)})}})(jQuery);
;/*
 * jQuery UI Effects Fade 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.fade=function(a){return this.queue(function(){var c=b(this),d=b.effects.setMode(c,a.options.mode||"hide");c.animate({opacity:d},{queue:false,duration:a.duration,easing:a.options.easing,complete:function(){a.callback&&a.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Fold 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.fold=function(a){return this.queue(function(){var b=c(this),j=["position","top","bottom","left","right"],d=c.effects.setMode(b,a.options.mode||"hide"),g=a.options.size||15,h=!!a.options.horizFirst,k=a.duration?a.duration/2:c.fx.speeds._default/2;c.effects.save(b,j);b.show();var e=c.effects.createWrapper(b).css({overflow:"hidden"}),f=d=="show"!=h,l=f?["width","height"]:["height","width"];f=f?[e.width(),e.height()]:[e.height(),e.width()];var i=/([0-9]+)%/.exec(g);if(i)g=parseInt(i[1],
10)/100*f[d=="hide"?0:1];if(d=="show")e.css(h?{height:0,width:g}:{height:g,width:0});h={};i={};h[l[0]]=d=="show"?f[0]:g;i[l[1]]=d=="show"?f[1]:0;e.animate(h,k,a.options.easing).animate(i,k,a.options.easing,function(){d=="hide"&&b.hide();c.effects.restore(b,j);c.effects.removeWrapper(b);a.callback&&a.callback.apply(b[0],arguments);b.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Highlight 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.highlight=function(c){return this.queue(function(){var a=b(this),e=["backgroundImage","backgroundColor","opacity"],d=b.effects.setMode(a,c.options.mode||"show"),f={backgroundColor:a.css("backgroundColor")};if(d=="hide")f.opacity=0;b.effects.save(a,e);a.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(f,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){d=="hide"&&a.hide();b.effects.restore(a,e);d=="show"&&!b.support.opacity&&
this.style.removeAttribute("filter");c.callback&&c.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Pulsate 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.pulsate=function(a){return this.queue(function(){var b=d(this),c=d.effects.setMode(b,a.options.mode||"show");times=(a.options.times||5)*2-1;duration=a.duration?a.duration/2:d.fx.speeds._default/2;isVisible=b.is(":visible");animateTo=0;if(!isVisible){b.css("opacity",0).show();animateTo=1}if(c=="hide"&&isVisible||c=="show"&&!isVisible)times--;for(c=0;c<times;c++){b.animate({opacity:animateTo},duration,a.options.easing);animateTo=(animateTo+1)%2}b.animate({opacity:animateTo},duration,
a.options.easing,function(){animateTo==0&&b.hide();a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()}).dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Scale 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.puff=function(b){return this.queue(function(){var a=c(this),e=c.effects.setMode(a,b.options.mode||"hide"),g=parseInt(b.options.percent,10)||150,h=g/100,i={height:a.height(),width:a.width()};c.extend(b.options,{fade:true,mode:e,percent:e=="hide"?g:100,from:e=="hide"?i:{height:i.height*h,width:i.width*h}});a.effect("scale",b.options,b.duration,b.callback);a.dequeue()})};c.effects.scale=function(b){return this.queue(function(){var a=c(this),e=c.extend(true,{},b.options),g=c.effects.setMode(a,
b.options.mode||"effect"),h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:g=="hide"?0:100),i=b.options.direction||"both",f=b.options.origin;if(g!="effect"){e.origin=f||["middle","center"];e.restore=true}f={height:a.height(),width:a.width()};a.from=b.options.from||(g=="show"?{height:0,width:0}:f);h={y:i!="horizontal"?h/100:1,x:i!="vertical"?h/100:1};a.to={height:f.height*h.y,width:f.width*h.x};if(b.options.fade){if(g=="show"){a.from.opacity=0;a.to.opacity=1}if(g=="hide"){a.from.opacity=
1;a.to.opacity=0}}e.from=a.from;e.to=a.to;e.mode=g;a.effect("size",e,b.duration,b.callback);a.dequeue()})};c.effects.size=function(b){return this.queue(function(){var a=c(this),e=["position","top","bottom","left","right","width","height","overflow","opacity"],g=["position","top","bottom","left","right","overflow","opacity"],h=["width","height","overflow"],i=["fontSize"],f=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],k=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
p=c.effects.setMode(a,b.options.mode||"effect"),n=b.options.restore||false,m=b.options.scale||"both",l=b.options.origin,j={height:a.height(),width:a.width()};a.from=b.options.from||j;a.to=b.options.to||j;if(l){l=c.effects.getBaseline(l,j);a.from.top=(j.height-a.from.height)*l.y;a.from.left=(j.width-a.from.width)*l.x;a.to.top=(j.height-a.to.height)*l.y;a.to.left=(j.width-a.to.width)*l.x}var d={from:{y:a.from.height/j.height,x:a.from.width/j.width},to:{y:a.to.height/j.height,x:a.to.width/j.width}};
if(m=="box"||m=="both"){if(d.from.y!=d.to.y){e=e.concat(f);a.from=c.effects.setTransition(a,f,d.from.y,a.from);a.to=c.effects.setTransition(a,f,d.to.y,a.to)}if(d.from.x!=d.to.x){e=e.concat(k);a.from=c.effects.setTransition(a,k,d.from.x,a.from);a.to=c.effects.setTransition(a,k,d.to.x,a.to)}}if(m=="content"||m=="both")if(d.from.y!=d.to.y){e=e.concat(i);a.from=c.effects.setTransition(a,i,d.from.y,a.from);a.to=c.effects.setTransition(a,i,d.to.y,a.to)}c.effects.save(a,n?e:g);a.show();c.effects.createWrapper(a);
a.css("overflow","hidden").css(a.from);if(m=="content"||m=="both"){f=f.concat(["marginTop","marginBottom"]).concat(i);k=k.concat(["marginLeft","marginRight"]);h=e.concat(f).concat(k);a.find("*[width]").each(function(){child=c(this);n&&c.effects.save(child,h);var o={height:child.height(),width:child.width()};child.from={height:o.height*d.from.y,width:o.width*d.from.x};child.to={height:o.height*d.to.y,width:o.width*d.to.x};if(d.from.y!=d.to.y){child.from=c.effects.setTransition(child,f,d.from.y,child.from);
child.to=c.effects.setTransition(child,f,d.to.y,child.to)}if(d.from.x!=d.to.x){child.from=c.effects.setTransition(child,k,d.from.x,child.from);child.to=c.effects.setTransition(child,k,d.to.x,child.to)}child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){n&&c.effects.restore(child,h)})})}a.animate(a.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){a.to.opacity===0&&a.css("opacity",a.from.opacity);p=="hide"&&a.hide();c.effects.restore(a,
n?e:g);c.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Shake 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.shake=function(a){return this.queue(function(){var b=d(this),j=["position","top","bottom","left","right"];d.effects.setMode(b,a.options.mode||"effect");var c=a.options.direction||"left",e=a.options.distance||20,l=a.options.times||3,f=a.duration||a.options.duration||140;d.effects.save(b,j);b.show();d.effects.createWrapper(b);var g=c=="up"||c=="down"?"top":"left",h=c=="up"||c=="left"?"pos":"neg";c={};var i={},k={};c[g]=(h=="pos"?"-=":"+=")+e;i[g]=(h=="pos"?"+=":"-=")+e*2;k[g]=
(h=="pos"?"-=":"+=")+e*2;b.animate(c,f,a.options.easing);for(e=1;e<l;e++)b.animate(i,f,a.options.easing).animate(k,f,a.options.easing);b.animate(i,f,a.options.easing).animate(c,f/2,a.options.easing,function(){d.effects.restore(b,j);d.effects.removeWrapper(b);a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()});b.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Slide 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.slide=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right"],f=c.effects.setMode(a,d.options.mode||"show"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a).css({overflow:"hidden"});var g=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var e=d.options.distance||(g=="top"?a.outerHeight({margin:true}):a.outerWidth({margin:true}));if(f=="show")a.css(g,b=="pos"?isNaN(e)?"-"+e:-e:e);
var i={};i[g]=(f=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+e;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){f=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Transfer 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.transfer=function(a){return this.queue(function(){var b=e(this),c=e(a.options.to),d=c.offset();c={top:d.top,left:d.left,height:c.innerHeight(),width:c.innerWidth()};d=b.offset();var f=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({top:d.top,left:d.left,height:b.innerHeight(),width:b.innerWidth(),position:"absolute"}).animate(c,a.duration,a.options.easing,function(){f.remove();a.callback&&a.callback.apply(b[0],arguments);
b.dequeue()})})}})(jQuery);
;
/* filename: /common/ChatClass/jquery.mCustomScrollbar.js weight: 1*/
/*
== malihu jquery custom scrollbars plugin == 
version: 2.8.2 
author: malihu (http://manos.malihu.gr) 
plugin home: http://manos.malihu.gr/jquery-custom-content-scroller 
*/

/*
Copyright 2010-2013 Manos Malihutsakis 

This program is free software: you can redistribute it and/or modify 
it under the terms of the GNU Lesser General Public License as published by 
the Free Software Foundation, either version 3 of the License, or 
any later version. 

This program is distributed in the hope that it will be useful, 
but WITHOUT ANY WARRANTY; without even the implied warranty of 
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
GNU Lesser General Public License for more details. 

You should have received a copy of the GNU Lesser General Public License 
along with this program.  If not, see http://www.gnu.org/licenses/lgpl.html. 
*/
(function($){
	/*plugin script*/
	var methods={
		init:function(options){
			var defaults={ 
				set_width:false, /*optional element width: boolean, pixels, percentage*/
				set_height:false, /*optional element height: boolean, pixels, percentage*/
				horizontalScroll:false, /*scroll horizontally: boolean*/
				scrollInertia:950, /*scrolling inertia: integer (milliseconds)*/
				mouseWheel:true, /*mousewheel support: boolean*/
				mouseWheelPixels:"auto", /*mousewheel pixels amount: integer, "auto"*/
				autoDraggerLength:true, /*auto-adjust scrollbar dragger length: boolean*/
				autoHideScrollbar:false, /*auto-hide scrollbar when idle*/
				snapAmount:null, /* optional element always snaps to a multiple of this number in pixels */
				snapOffset:0, /* when snapping, snap with this number in pixels as an offset */
				scrollButtons:{ /*scroll buttons*/
					enable:false, /*scroll buttons support: boolean*/
					scrollType:"continuous", /*scroll buttons scrolling type: "continuous", "pixels"*/
					scrollSpeed:"auto", /*scroll buttons continuous scrolling speed: integer, "auto"*/
					scrollAmount:40 /*scroll buttons pixels scroll amount: integer (pixels)*/
				},
				advanced:{
					updateOnBrowserResize:true, /*update scrollbars on browser resize (for layouts based on percentages): boolean*/
					updateOnContentResize:false, /*auto-update scrollbars on content resize (for dynamic content): boolean*/
					autoExpandHorizontalScroll:false, /*auto-expand width for horizontal scrolling: boolean*/
					autoScrollOnFocus:true, /*auto-scroll on focused elements: boolean*/
					normalizeMouseWheelDelta:false /*normalize mouse-wheel delta (-1/1)*/
				},
				contentTouchScroll:true, /*scrolling by touch-swipe content: boolean*/
				callbacks:{
					onScrollStart:function(){}, /*user custom callback function on scroll start event*/
					onScroll:function(){}, /*user custom callback function on scroll event*/
					onTotalScroll:function(){}, /*user custom callback function on scroll end reached event*/
					onTotalScrollBack:function(){}, /*user custom callback function on scroll begin reached event*/
					onTotalScrollOffset:0, /*scroll end reached offset: integer (pixels)*/
					onTotalScrollBackOffset:0, /*scroll begin reached offset: integer (pixels)*/
					whileScrolling:function(){} /*user custom callback function on scrolling event*/
				},
				theme:"light" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
			},
			options=$.extend(true,defaults,options);
			return this.each(function(){
				var $this=$(this);
				/*set element width/height, create markup for custom scrollbars, add classes*/
				if(options.set_width){
					$this.css("width",options.set_width);
				}
				if(options.set_height){
					$this.css("height",options.set_height);
				}
				if(!$(document).data("mCustomScrollbar-index")){
					$(document).data("mCustomScrollbar-index","1");
				}else{
					var mCustomScrollbarIndex=parseInt($(document).data("mCustomScrollbar-index"));
					$(document).data("mCustomScrollbar-index",mCustomScrollbarIndex+1);
				}
				$this.wrapInner("<div class='mCustomScrollBox"+" mCS-"+options.theme+"' id='mCSB_"+$(document).data("mCustomScrollbar-index")+"' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_"+$(document).data("mCustomScrollbar-index"));
				var mCustomScrollBox=$this.children(".mCustomScrollBox");
				if(options.horizontalScroll){
					mCustomScrollBox.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
					var mCSB_h_wrapper=mCustomScrollBox.children(".mCSB_h_wrapper");
					mCSB_h_wrapper.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({"width":mCSB_h_wrapper.children().outerWidth(),"position":"relative"}).unwrap();
				}else{
					mCustomScrollBox.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />");
				}
				var mCSB_container=mCustomScrollBox.children(".mCSB_container");
				if($.support.touch){
					mCSB_container.addClass("mCS_touch");
				}
				mCSB_container.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
				var mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),
					mCSB_draggerContainer=mCSB_scrollTools.children(".mCSB_draggerContainer"),
					mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger");
				if(options.horizontalScroll){
					mCSB_dragger.data("minDraggerWidth",mCSB_dragger.width());
				}else{
					mCSB_dragger.data("minDraggerHeight",mCSB_dragger.height());
				}
				if(options.scrollButtons.enable){
					if(options.horizontalScroll){
						mCSB_scrollTools.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>");
					}else{
						mCSB_scrollTools.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>");
					}
				}
				/*mCustomScrollBox scrollTop and scrollLeft is always 0 to prevent browser focus scrolling*/
				mCustomScrollBox.bind("scroll",function(){
					if(!$this.is(".mCS_disabled")){ /*native focus scrolling for disabled scrollbars*/
						mCustomScrollBox.scrollTop(0).scrollLeft(0);
					}
				});
				/*store options, global vars/states, intervals*/
				$this.data({
					/*init state*/
					"mCS_Init":true,
					/*instance index*/
					"mCustomScrollbarIndex":$(document).data("mCustomScrollbar-index"),
					/*option parameters*/
					"horizontalScroll":options.horizontalScroll,
					"scrollInertia":options.scrollInertia,
					"scrollEasing":"mcsEaseOut",
					"mouseWheel":options.mouseWheel,
					"mouseWheelPixels":options.mouseWheelPixels,
					"autoDraggerLength":options.autoDraggerLength,
					"autoHideScrollbar":options.autoHideScrollbar,
					"snapAmount":options.snapAmount,
					"snapOffset":options.snapOffset,
					"scrollButtons_enable":options.scrollButtons.enable,
					"scrollButtons_scrollType":options.scrollButtons.scrollType,
					"scrollButtons_scrollSpeed":options.scrollButtons.scrollSpeed,
					"scrollButtons_scrollAmount":options.scrollButtons.scrollAmount,
					"autoExpandHorizontalScroll":options.advanced.autoExpandHorizontalScroll,
					"autoScrollOnFocus":options.advanced.autoScrollOnFocus,
					"normalizeMouseWheelDelta":options.advanced.normalizeMouseWheelDelta,
					"contentTouchScroll":options.contentTouchScroll,
					"onScrollStart_Callback":options.callbacks.onScrollStart,
					"onScroll_Callback":options.callbacks.onScroll,
					"onTotalScroll_Callback":options.callbacks.onTotalScroll,
					"onTotalScrollBack_Callback":options.callbacks.onTotalScrollBack,
					"onTotalScroll_Offset":options.callbacks.onTotalScrollOffset,
					"onTotalScrollBack_Offset":options.callbacks.onTotalScrollBackOffset,
					"whileScrolling_Callback":options.callbacks.whileScrolling,
					/*events binding state*/
					"bindEvent_scrollbar_drag":false,
					"bindEvent_content_touch":false,
					"bindEvent_scrollbar_click":false,
					"bindEvent_mousewheel":false,
					"bindEvent_buttonsContinuous_y":false,
					"bindEvent_buttonsContinuous_x":false,
					"bindEvent_buttonsPixels_y":false,
					"bindEvent_buttonsPixels_x":false,
					"bindEvent_focusin":false,
					"bindEvent_autoHideScrollbar":false,
					/*buttons intervals*/
					"mCSB_buttonScrollRight":false,
					"mCSB_buttonScrollLeft":false,
					"mCSB_buttonScrollDown":false,
					"mCSB_buttonScrollUp":false
				});
				/*max-width/max-height*/
				if(options.horizontalScroll){
					if($this.css("max-width")!=="none"){
						if(!options.advanced.updateOnContentResize){ /*needs updateOnContentResize*/
							options.advanced.updateOnContentResize=true;
						}
					}
				}else{
					if($this.css("max-height")!=="none"){
						var percentage=false,maxHeight=parseInt($this.css("max-height"));
						if($this.css("max-height").indexOf("%")>=0){
							percentage=maxHeight,
							maxHeight=$this.parent().height()*percentage/100;
						}
						$this.css("overflow","hidden");
						mCustomScrollBox.css("max-height",maxHeight);
					}
				}
				$this.mCustomScrollbar("update");
				/*window resize fn (for layouts based on percentages)*/
				if(options.advanced.updateOnBrowserResize){
					var mCSB_resizeTimeout,currWinWidth=$(window).width(),currWinHeight=$(window).height();
					$(window).bind("resize."+$this.data("mCustomScrollbarIndex"),function(){
						if(mCSB_resizeTimeout){
							clearTimeout(mCSB_resizeTimeout);
						}
						mCSB_resizeTimeout=setTimeout(function(){
							if(!$this.is(".mCS_disabled") && !$this.is(".mCS_destroyed")){
								var winWidth=$(window).width(),winHeight=$(window).height();
								if(currWinWidth!==winWidth || currWinHeight!==winHeight){ /*ie8 fix*/
									if($this.css("max-height")!=="none" && percentage){
										mCustomScrollBox.css("max-height",$this.parent().height()*percentage/100);
									}
									$this.mCustomScrollbar("update");
									currWinWidth=winWidth; currWinHeight=winHeight;
								}
							}
						},150);
					});
				}
				/*content resize fn (for dynamically generated content)*/
				if(options.advanced.updateOnContentResize){
					var mCSB_onContentResize;
					if(options.horizontalScroll){
						var mCSB_containerOldSize=mCSB_container.outerWidth();
					}else{
						var mCSB_containerOldSize=mCSB_container.outerHeight();
					}
					mCSB_onContentResize=setInterval(function(){
						if(options.horizontalScroll){
							if(options.advanced.autoExpandHorizontalScroll){
								mCSB_container.css({"position":"absolute","width":"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({"width":mCSB_container.outerWidth(),"position":"relative"}).unwrap();
							}
							var mCSB_containerNewSize=mCSB_container.outerWidth();
						}else{
							var mCSB_containerNewSize=mCSB_container.outerHeight();
						}
						if(mCSB_containerNewSize!=mCSB_containerOldSize){
							$this.mCustomScrollbar("update");
							mCSB_containerOldSize=mCSB_containerNewSize;
						}
					},300);
				}
			});
		},
		update:function(){
			var $this=$(this),
				mCustomScrollBox=$this.children(".mCustomScrollBox"),
				mCSB_container=mCustomScrollBox.children(".mCSB_container");
			mCSB_container.removeClass("mCS_no_scrollbar");
			$this.removeClass("mCS_disabled mCS_destroyed");
			mCustomScrollBox.scrollTop(0).scrollLeft(0); /*reset scrollTop/scrollLeft to prevent browser focus scrolling*/
			var mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),
				mCSB_draggerContainer=mCSB_scrollTools.children(".mCSB_draggerContainer"),
				mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger");
			if($this.data("horizontalScroll")){
				var mCSB_buttonLeft=mCSB_scrollTools.children(".mCSB_buttonLeft"),
					mCSB_buttonRight=mCSB_scrollTools.children(".mCSB_buttonRight"),
					mCustomScrollBoxW=mCustomScrollBox.width();
				if($this.data("autoExpandHorizontalScroll")){
					mCSB_container.css({"position":"absolute","width":"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({"width":mCSB_container.outerWidth(),"position":"relative"}).unwrap();
				}
				var mCSB_containerW=mCSB_container.outerWidth();
			}else{
				var mCSB_buttonUp=mCSB_scrollTools.children(".mCSB_buttonUp"),
					mCSB_buttonDown=mCSB_scrollTools.children(".mCSB_buttonDown"),
					mCustomScrollBoxH=mCustomScrollBox.height(),
					mCSB_containerH=mCSB_container.outerHeight();
			}
			if(mCSB_containerH>mCustomScrollBoxH && !$this.data("horizontalScroll")){ /*content needs vertical scrolling*/
				mCSB_scrollTools.css("display","block");
				var mCSB_draggerContainerH=mCSB_draggerContainer.height();
				/*auto adjust scrollbar dragger length analogous to content*/
				if($this.data("autoDraggerLength")){
					var draggerH=Math.round(mCustomScrollBoxH/mCSB_containerH*mCSB_draggerContainerH),
						minDraggerH=mCSB_dragger.data("minDraggerHeight");
					if(draggerH<=minDraggerH){ /*min dragger height*/
						mCSB_dragger.css({"height":minDraggerH});
					}else if(draggerH>=mCSB_draggerContainerH-10){ /*max dragger height*/
						var mCSB_draggerContainerMaxH=mCSB_draggerContainerH-10;
						mCSB_dragger.css({"height":mCSB_draggerContainerMaxH});
					}else{
						mCSB_dragger.css({"height":draggerH});
					}
					mCSB_dragger.children(".mCSB_dragger_bar").css({"line-height":mCSB_dragger.height()+"px"});
				}
				var mCSB_draggerH=mCSB_dragger.height(),
				/*calculate and store scroll amount, add scrolling*/
					scrollAmount=(mCSB_containerH-mCustomScrollBoxH)/(mCSB_draggerContainerH-mCSB_draggerH);
				$this.data("scrollAmount",scrollAmount).mCustomScrollbar("scrolling",mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight);
				/*scroll*/
				var mCSB_containerP=Math.abs(mCSB_container.position().top);
				$this.mCustomScrollbar("scrollTo",mCSB_containerP,{scrollInertia:0,trigger:"internal"});
			}else if(mCSB_containerW>mCustomScrollBoxW && $this.data("horizontalScroll")){ /*content needs horizontal scrolling*/
				mCSB_scrollTools.css("display","block");
				var mCSB_draggerContainerW=mCSB_draggerContainer.width();
				/*auto adjust scrollbar dragger length analogous to content*/
				if($this.data("autoDraggerLength")){
					var draggerW=Math.round(mCustomScrollBoxW/mCSB_containerW*mCSB_draggerContainerW),
						minDraggerW=mCSB_dragger.data("minDraggerWidth");
					if(draggerW<=minDraggerW){ /*min dragger height*/
						mCSB_dragger.css({"width":minDraggerW});
					}else if(draggerW>=mCSB_draggerContainerW-10){ /*max dragger height*/
						var mCSB_draggerContainerMaxW=mCSB_draggerContainerW-10;
						mCSB_dragger.css({"width":mCSB_draggerContainerMaxW});
					}else{
						mCSB_dragger.css({"width":draggerW});
					}
				}
				var mCSB_draggerW=mCSB_dragger.width(),
				/*calculate and store scroll amount, add scrolling*/
					scrollAmount=(mCSB_containerW-mCustomScrollBoxW)/(mCSB_draggerContainerW-mCSB_draggerW);
				$this.data("scrollAmount",scrollAmount).mCustomScrollbar("scrolling",mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight);
				/*scroll*/
				var mCSB_containerP=Math.abs(mCSB_container.position().left);
				$this.mCustomScrollbar("scrollTo",mCSB_containerP,{scrollInertia:0,trigger:"internal"});
			}else{ /*content does not need scrolling*/
				/*unbind events, reset content position, hide scrollbars, remove classes*/
				mCustomScrollBox.unbind("mousewheel focusin");
				if($this.data("horizontalScroll")){
					mCSB_dragger.add(mCSB_container).css("left",0);
				}else{
					mCSB_dragger.add(mCSB_container).css("top",0);
				}
				mCSB_scrollTools.css("display","none");
				mCSB_container.addClass("mCS_no_scrollbar");
				$this.data({"bindEvent_mousewheel":false,"bindEvent_focusin":false});
			}
		},
		scrolling:function(mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight){
			var $this=$(this);
			/*scrollbar drag scrolling*/
			if(!$this.data("bindEvent_scrollbar_drag")){
				var mCSB_draggerDragY,mCSB_draggerDragX;
				if($.support.msPointer){ /*MSPointer*/
					mCSB_dragger.bind("MSPointerDown",function(e){
						e.preventDefault();
						$this.data({"on_drag":true}); mCSB_dragger.addClass("mCSB_dragger_onDrag");
						var elem=$(this),
							elemOffset=elem.offset(),
							x=e.originalEvent.pageX-elemOffset.left,
							y=e.originalEvent.pageY-elemOffset.top;
						if(x<elem.width() && x>0 && y<elem.height() && y>0){
							mCSB_draggerDragY=y;
							mCSB_draggerDragX=x;
						}
					});
					$(document).bind("MSPointerMove."+$this.data("mCustomScrollbarIndex"),function(e){
						e.preventDefault();
						if($this.data("on_drag")){
							var elem=mCSB_dragger,
								elemOffset=elem.offset(),
								x=e.originalEvent.pageX-elemOffset.left,
								y=e.originalEvent.pageY-elemOffset.top;
							scrollbarDrag(mCSB_draggerDragY,mCSB_draggerDragX,y,x);
						}
					}).bind("MSPointerUp."+$this.data("mCustomScrollbarIndex"),function(e){
						$this.data({"on_drag":false}); mCSB_dragger.removeClass("mCSB_dragger_onDrag");
					});
				}else{ /*mouse/touch*/
					mCSB_dragger.bind("mousedown touchstart",function(e){
						e.preventDefault(); e.stopImmediatePropagation();
						var	elem=$(this),elemOffset=elem.offset(),x,y;
						if(e.type==="touchstart"){
							var touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
							x=touch.pageX-elemOffset.left; y=touch.pageY-elemOffset.top;
						}else{
							$this.data({"on_drag":true}); mCSB_dragger.addClass("mCSB_dragger_onDrag");
							x=e.pageX-elemOffset.left; y=e.pageY-elemOffset.top;
						}
						if(x<elem.width() && x>0 && y<elem.height() && y>0){
							mCSB_draggerDragY=y; mCSB_draggerDragX=x;
						}
					}).bind("touchmove",function(e){
						e.preventDefault(); e.stopImmediatePropagation();
						var touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
							elem=$(this),
							elemOffset=elem.offset(),
							x=touch.pageX-elemOffset.left,
							y=touch.pageY-elemOffset.top;
						scrollbarDrag(mCSB_draggerDragY,mCSB_draggerDragX,y,x);
					});
					$(document).bind("mousemove."+$this.data("mCustomScrollbarIndex"),function(e){
						if($this.data("on_drag")){
							var elem=mCSB_dragger,
								elemOffset=elem.offset(),
								x=e.pageX-elemOffset.left,
								y=e.pageY-elemOffset.top;
							scrollbarDrag(mCSB_draggerDragY,mCSB_draggerDragX,y,x);
						}
					}).bind("mouseup."+$this.data("mCustomScrollbarIndex"),function(e){
						$this.data({"on_drag":false}); mCSB_dragger.removeClass("mCSB_dragger_onDrag");
					});
				}
				$this.data({"bindEvent_scrollbar_drag":true});
			}
			function scrollbarDrag(mCSB_draggerDragY,mCSB_draggerDragX,y,x){
				if($this.data("horizontalScroll")){
					$this.mCustomScrollbar("scrollTo",(mCSB_dragger.position().left-(mCSB_draggerDragX))+x,{moveDragger:true,trigger:"internal"});
				}else{
					$this.mCustomScrollbar("scrollTo",(mCSB_dragger.position().top-(mCSB_draggerDragY))+y,{moveDragger:true,trigger:"internal"});
				}
			}
			/*content touch-drag*/
			if($.support.touch && $this.data("contentTouchScroll")){
				if(!$this.data("bindEvent_content_touch")){
					var touch,
						elem,elemOffset,y,x,mCSB_containerTouchY,mCSB_containerTouchX;
					mCSB_container.bind("touchstart",function(e){
						e.stopImmediatePropagation();
						touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
						elem=$(this);
						elemOffset=elem.offset();
						x=touch.pageX-elemOffset.left;
						y=touch.pageY-elemOffset.top;
						mCSB_containerTouchY=y;
						mCSB_containerTouchX=x;
					});
					mCSB_container.bind("touchmove",function(e){
						e.preventDefault(); e.stopImmediatePropagation();
						touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
						elem=$(this).parent();
						elemOffset=elem.offset();
						x=touch.pageX-elemOffset.left;
						y=touch.pageY-elemOffset.top;
						if($this.data("horizontalScroll")){
							$this.mCustomScrollbar("scrollTo",mCSB_containerTouchX-x,{trigger:"internal"});
						}else{
							$this.mCustomScrollbar("scrollTo",mCSB_containerTouchY-y,{trigger:"internal"});
						}
					});
				}
			}
			/*dragger rail click scrolling*/
			if(!$this.data("bindEvent_scrollbar_click")){
				mCSB_draggerContainer.bind("click",function(e){
					var scrollToPos=(e.pageY-mCSB_draggerContainer.offset().top)*$this.data("scrollAmount"),target=$(e.target);
					if($this.data("horizontalScroll")){
						scrollToPos=(e.pageX-mCSB_draggerContainer.offset().left)*$this.data("scrollAmount");
					}
					if(target.hasClass("mCSB_draggerContainer") || target.hasClass("mCSB_draggerRail")){
						$this.mCustomScrollbar("scrollTo",scrollToPos,{trigger:"internal",scrollEasing:"draggerRailEase"});
					}
				});
				$this.data({"bindEvent_scrollbar_click":true});
			}
			/*mousewheel scrolling*/
			if($this.data("mouseWheel")){
				if(!$this.data("bindEvent_mousewheel")){
					mCustomScrollBox.bind("mousewheel",function(e,delta){
						var scrollTo,mouseWheelPixels=$this.data("mouseWheelPixels"),absPos=Math.abs(mCSB_container.position().top),
							draggerPos=mCSB_dragger.position().top,limit=mCSB_draggerContainer.height()-mCSB_dragger.height();
						if($this.data("normalizeMouseWheelDelta")){
							if(delta<0){delta=-1;}else{delta=1;}
						}
						if(mouseWheelPixels==="auto"){
							mouseWheelPixels=100+Math.round($this.data("scrollAmount")/2);
						}
						if($this.data("horizontalScroll")){
							draggerPos=mCSB_dragger.position().left; 
							limit=mCSB_draggerContainer.width()-mCSB_dragger.width();
							absPos=Math.abs(mCSB_container.position().left);
						}
						if((delta>0 && draggerPos!==0) || (delta<0 && draggerPos!==limit)){e.preventDefault(); e.stopImmediatePropagation();}
						scrollTo=absPos-(delta*mouseWheelPixels);
						$this.mCustomScrollbar("scrollTo",scrollTo,{trigger:"internal"});
					});
					$this.data({"bindEvent_mousewheel":true});
				}
			}
			/*buttons scrolling*/
			if($this.data("scrollButtons_enable")){
				if($this.data("scrollButtons_scrollType")==="pixels"){ /*scroll by pixels*/
					if($this.data("horizontalScroll")){
						mCSB_buttonRight.add(mCSB_buttonLeft).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend",mCSB_buttonRight_stop,mCSB_buttonLeft_stop);
						$this.data({"bindEvent_buttonsContinuous_x":false});
						if(!$this.data("bindEvent_buttonsPixels_x")){
							/*scroll right*/
							mCSB_buttonRight.bind("click",function(e){
								e.preventDefault();
								PixelsScrollTo(Math.abs(mCSB_container.position().left)+$this.data("scrollButtons_scrollAmount"));
							});
							/*scroll left*/
							mCSB_buttonLeft.bind("click",function(e){
								e.preventDefault();
								PixelsScrollTo(Math.abs(mCSB_container.position().left)-$this.data("scrollButtons_scrollAmount"));
							});
							$this.data({"bindEvent_buttonsPixels_x":true});
						}
					}else{
						mCSB_buttonDown.add(mCSB_buttonUp).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend",mCSB_buttonRight_stop,mCSB_buttonLeft_stop);
						$this.data({"bindEvent_buttonsContinuous_y":false});
						if(!$this.data("bindEvent_buttonsPixels_y")){
							/*scroll down*/
							mCSB_buttonDown.bind("click",function(e){
								e.preventDefault();
								PixelsScrollTo(Math.abs(mCSB_container.position().top)+$this.data("scrollButtons_scrollAmount"));
							});
							/*scroll up*/
							mCSB_buttonUp.bind("click",function(e){
								e.preventDefault();
								PixelsScrollTo(Math.abs(mCSB_container.position().top)-$this.data("scrollButtons_scrollAmount"));
							});
							$this.data({"bindEvent_buttonsPixels_y":true});
						}
					}
					function PixelsScrollTo(to){
						if(!mCSB_dragger.data("preventAction")){
							mCSB_dragger.data("preventAction",true);
							$this.mCustomScrollbar("scrollTo",to,{trigger:"internal"});
						}
					}
				}else{ /*continuous scrolling*/
					if($this.data("horizontalScroll")){
						mCSB_buttonRight.add(mCSB_buttonLeft).unbind("click");
						$this.data({"bindEvent_buttonsPixels_x":false});
						if(!$this.data("bindEvent_buttonsContinuous_x")){
							/*scroll right*/
							mCSB_buttonRight.bind("mousedown touchstart MSPointerDown",function(e){
								e.preventDefault();
								var scrollButtonsSpeed=ScrollButtonsSpeed();
								$this.data({"mCSB_buttonScrollRight":setInterval(function(){
									$this.mCustomScrollbar("scrollTo",Math.abs(mCSB_container.position().left)+scrollButtonsSpeed,{trigger:"internal",scrollEasing:"easeOutCirc"});
								},17)});
							});
							var mCSB_buttonRight_stop=function(e){
								e.preventDefault(); clearInterval($this.data("mCSB_buttonScrollRight"));
							}
							mCSB_buttonRight.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",mCSB_buttonRight_stop);
							/*scroll left*/
							mCSB_buttonLeft.bind("mousedown touchstart MSPointerDown",function(e){
								e.preventDefault();
								var scrollButtonsSpeed=ScrollButtonsSpeed();
								$this.data({"mCSB_buttonScrollLeft":setInterval(function(){
									$this.mCustomScrollbar("scrollTo",Math.abs(mCSB_container.position().left)-scrollButtonsSpeed,{trigger:"internal",scrollEasing:"easeOutCirc"});
								},17)});
							});	
							var mCSB_buttonLeft_stop=function(e){
								e.preventDefault(); clearInterval($this.data("mCSB_buttonScrollLeft"));
							}
							mCSB_buttonLeft.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",mCSB_buttonLeft_stop);
							$this.data({"bindEvent_buttonsContinuous_x":true});
						}
					}else{
						mCSB_buttonDown.add(mCSB_buttonUp).unbind("click");
						$this.data({"bindEvent_buttonsPixels_y":false});
						if(!$this.data("bindEvent_buttonsContinuous_y")){
							/*scroll down*/
							mCSB_buttonDown.bind("mousedown touchstart MSPointerDown",function(e){
								e.preventDefault();
								var scrollButtonsSpeed=ScrollButtonsSpeed();
								$this.data({"mCSB_buttonScrollDown":setInterval(function(){
									$this.mCustomScrollbar("scrollTo",Math.abs(mCSB_container.position().top)+scrollButtonsSpeed,{trigger:"internal",scrollEasing:"easeOutCirc"});
								},17)});
							});
							var mCSB_buttonDown_stop=function(e){
								e.preventDefault(); clearInterval($this.data("mCSB_buttonScrollDown"));
							}
							mCSB_buttonDown.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",mCSB_buttonDown_stop);
							/*scroll up*/
							mCSB_buttonUp.bind("mousedown touchstart MSPointerDown",function(e){
								e.preventDefault();
								var scrollButtonsSpeed=ScrollButtonsSpeed();
								$this.data({"mCSB_buttonScrollUp":setInterval(function(){
									$this.mCustomScrollbar("scrollTo",Math.abs(mCSB_container.position().top)-scrollButtonsSpeed,{trigger:"internal",scrollEasing:"easeOutCirc"});
								},17)});
							});	
							var mCSB_buttonUp_stop=function(e){
								e.preventDefault(); clearInterval($this.data("mCSB_buttonScrollUp"));
							}
							mCSB_buttonUp.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",mCSB_buttonUp_stop);
							$this.data({"bindEvent_buttonsContinuous_y":true});
						}
					}
					function ScrollButtonsSpeed(){
						var speed=$this.data("scrollButtons_scrollSpeed");
						if($this.data("scrollButtons_scrollSpeed")==="auto"){
							speed=Math.round(($this.data("scrollInertia")+100)/40);
						}
						return speed;
					}
				}
			}
			/*scrolling on element focus (e.g. via TAB key)*/
			if($this.data("autoScrollOnFocus")){
				if(!$this.data("bindEvent_focusin")){
					mCustomScrollBox.bind("focusin",function(){
						mCustomScrollBox.scrollTop(0).scrollLeft(0);
						var focusedElem=$(document.activeElement);
						if(focusedElem.is("input,textarea,select,button,a[tabindex],area,object")){
							var mCSB_containerPos=mCSB_container.position().top,
								focusedElemPos=focusedElem.position().top,
								visibleLimit=mCustomScrollBox.height()-focusedElem.outerHeight();
							if($this.data("horizontalScroll")){
								mCSB_containerPos=mCSB_container.position().left;
								focusedElemPos=focusedElem.position().left;
								visibleLimit=mCustomScrollBox.width()-focusedElem.outerWidth();
							}
							if(mCSB_containerPos+focusedElemPos<0 || mCSB_containerPos+focusedElemPos>visibleLimit){
								$this.mCustomScrollbar("scrollTo",focusedElemPos,{trigger:"internal"});
							}
						}
					});
					$this.data({"bindEvent_focusin":true});
				}
			}
			/*auto-hide scrollbar*/
			if($this.data("autoHideScrollbar")){
				if(!$this.data("bindEvent_autoHideScrollbar")){
					mCustomScrollBox.bind("mouseenter",function(e){
						mCustomScrollBox.addClass("mCS-mouse-over");
						functions.showScrollbar.call(mCustomScrollBox.children(".mCSB_scrollTools"));
					}).bind("mouseleave touchend",function(e){
						mCustomScrollBox.removeClass("mCS-mouse-over");
						if(e.type==="mouseleave"){functions.hideScrollbar.call(mCustomScrollBox.children(".mCSB_scrollTools"));}
					});
					$this.data({"bindEvent_autoHideScrollbar":true});
				}
			}
		},
		scrollTo:function(scrollTo,options){
			var $this=$(this),
				defaults={
					moveDragger:false,
					trigger:"external",
					callbacks:true,
					scrollInertia:$this.data("scrollInertia"),
					scrollEasing:$this.data("scrollEasing")
				},
				options=$.extend(defaults,options),
				draggerScrollTo,
				mCustomScrollBox=$this.children(".mCustomScrollBox"),
				mCSB_container=mCustomScrollBox.children(".mCSB_container"),
				mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),
				mCSB_draggerContainer=mCSB_scrollTools.children(".mCSB_draggerContainer"),
				mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger"),
				contentSpeed=draggerSpeed=options.scrollInertia,
				scrollBeginning,scrollBeginningOffset,totalScroll,totalScrollOffset;
			if(!mCSB_container.hasClass("mCS_no_scrollbar")){
				$this.data({"mCS_trigger":options.trigger});
				if($this.data("mCS_Init")){options.callbacks=false;}
				if(scrollTo || scrollTo===0){
					if(typeof(scrollTo)==="number"){ /*if integer, scroll by number of pixels*/
						if(options.moveDragger){ /*scroll dragger*/
							draggerScrollTo=scrollTo;
							if($this.data("horizontalScroll")){
								scrollTo=mCSB_dragger.position().left*$this.data("scrollAmount");
							}else{
								scrollTo=mCSB_dragger.position().top*$this.data("scrollAmount");
							}
							draggerSpeed=0;
						}else{ /*scroll content by default*/
							draggerScrollTo=scrollTo/$this.data("scrollAmount");
						}
					}else if(typeof(scrollTo)==="string"){ /*if string, scroll by element position*/
						var target;
						if(scrollTo==="top"){ /*scroll to top*/
							target=0;
						}else if(scrollTo==="bottom" && !$this.data("horizontalScroll")){ /*scroll to bottom*/
							target=mCSB_container.outerHeight()-mCustomScrollBox.height();
						}else if(scrollTo==="left"){ /*scroll to left*/
							target=0;
						}else if(scrollTo==="right" && $this.data("horizontalScroll")){ /*scroll to right*/
							target=mCSB_container.outerWidth()-mCustomScrollBox.width();
						}else if(scrollTo==="first"){ /*scroll to first element position*/
							target=$this.find(".mCSB_container").find(":first");
						}else if(scrollTo==="last"){ /*scroll to last element position*/
							target=$this.find(".mCSB_container").find(":last");
						}else{ /*scroll to element position*/
							target=$this.find(scrollTo);
						}
						if(target.length===1){ /*if such unique element exists, scroll to it*/
							if($this.data("horizontalScroll")){
								scrollTo=target.position().left;
							}else{
								scrollTo=target.position().top;
							}
							draggerScrollTo=scrollTo/$this.data("scrollAmount");
						}else{
							draggerScrollTo=scrollTo=target;
						}
					}
					/*scroll to*/
					if($this.data("horizontalScroll")){
						if($this.data("onTotalScrollBack_Offset")){ /*scroll beginning offset*/
							scrollBeginningOffset=-$this.data("onTotalScrollBack_Offset");
						}
						if($this.data("onTotalScroll_Offset")){ /*total scroll offset*/
							totalScrollOffset=mCustomScrollBox.width()-mCSB_container.outerWidth()+$this.data("onTotalScroll_Offset");
						}
						if(draggerScrollTo<0){ /*scroll start position*/
							draggerScrollTo=scrollTo=0; clearInterval($this.data("mCSB_buttonScrollLeft"));
							if(!scrollBeginningOffset){scrollBeginning=true;}
						}else if(draggerScrollTo>=mCSB_draggerContainer.width()-mCSB_dragger.width()){ /*scroll end position*/
							draggerScrollTo=mCSB_draggerContainer.width()-mCSB_dragger.width();
							scrollTo=mCustomScrollBox.width()-mCSB_container.outerWidth(); clearInterval($this.data("mCSB_buttonScrollRight"));
							if(!totalScrollOffset){totalScroll=true;}
						}else{scrollTo=-scrollTo;}
						var snapAmount = $this.data("snapAmount");
						if (snapAmount) {
							scrollTo = Math.round(scrollTo / snapAmount) * snapAmount - $this.data("snapOffset");
						}
						/*scrolling animation*/
						functions.mTweenAxis.call(this,mCSB_dragger[0],"left",Math.round(draggerScrollTo),draggerSpeed,options.scrollEasing);
						functions.mTweenAxis.call(this,mCSB_container[0],"left",Math.round(scrollTo),contentSpeed,options.scrollEasing,{
							onStart:function(){
								if(options.callbacks && !$this.data("mCS_tweenRunning")){callbacks("onScrollStart");}
								if($this.data("autoHideScrollbar")){functions.showScrollbar.call(mCSB_scrollTools);}
							},
							onUpdate:function(){
								if(options.callbacks){callbacks("whileScrolling");}
							},
							onComplete:function(){
								if(options.callbacks){
									callbacks("onScroll");
									if(scrollBeginning || (scrollBeginningOffset && mCSB_container.position().left>=scrollBeginningOffset)){callbacks("onTotalScrollBack");}
									if(totalScroll || (totalScrollOffset && mCSB_container.position().left<=totalScrollOffset)){callbacks("onTotalScroll");}
								}
								mCSB_dragger.data("preventAction",false); $this.data("mCS_tweenRunning",false);
								if($this.data("autoHideScrollbar")){if(!mCustomScrollBox.hasClass("mCS-mouse-over")){functions.hideScrollbar.call(mCSB_scrollTools);}}
							}
						});
					}else{
						if($this.data("onTotalScrollBack_Offset")){ /*scroll beginning offset*/
							scrollBeginningOffset=-$this.data("onTotalScrollBack_Offset");
						}
						if($this.data("onTotalScroll_Offset")){ /*total scroll offset*/
							totalScrollOffset=mCustomScrollBox.height()-mCSB_container.outerHeight()+$this.data("onTotalScroll_Offset");
						}
						if(draggerScrollTo<0){ /*scroll start position*/
							draggerScrollTo=scrollTo=0; clearInterval($this.data("mCSB_buttonScrollUp"));
							if(!scrollBeginningOffset){scrollBeginning=true;}
						}else if(draggerScrollTo>=mCSB_draggerContainer.height()-mCSB_dragger.height()){ /*scroll end position*/
							draggerScrollTo=mCSB_draggerContainer.height()-mCSB_dragger.height();
							scrollTo=mCustomScrollBox.height()-mCSB_container.outerHeight(); clearInterval($this.data("mCSB_buttonScrollDown"));
							if(!totalScrollOffset){totalScroll=true;}
						}else{scrollTo=-scrollTo;}
						var snapAmount = $this.data("snapAmount");
						if (snapAmount) {
							scrollTo = Math.round(scrollTo / snapAmount) * snapAmount - $this.data("snapOffset");
						}
						/*scrolling animation*/
						functions.mTweenAxis.call(this,mCSB_dragger[0],"top",Math.round(draggerScrollTo),draggerSpeed,options.scrollEasing);
						functions.mTweenAxis.call(this,mCSB_container[0],"top",Math.round(scrollTo),contentSpeed,options.scrollEasing,{
							onStart:function(){
								if(options.callbacks && !$this.data("mCS_tweenRunning")){callbacks("onScrollStart");}
								if($this.data("autoHideScrollbar")){functions.showScrollbar.call(mCSB_scrollTools);}
							},
							onUpdate:function(){
								if(options.callbacks){callbacks("whileScrolling");}
							},
							onComplete:function(){
								if(options.callbacks){
									callbacks("onScroll");
									if(scrollBeginning || (scrollBeginningOffset && mCSB_container.position().top>=scrollBeginningOffset)){callbacks("onTotalScrollBack");}
									if(totalScroll || (totalScrollOffset && mCSB_container.position().top<=totalScrollOffset)){callbacks("onTotalScroll");}
								}
								mCSB_dragger.data("preventAction",false); $this.data("mCS_tweenRunning",false);
								if($this.data("autoHideScrollbar")){if(!mCustomScrollBox.hasClass("mCS-mouse-over")){functions.hideScrollbar.call(mCSB_scrollTools);}}
							}
						});
					}
					if($this.data("mCS_Init")){$this.data({"mCS_Init":false});}
				}
			}
			/*callbacks*/
			function callbacks(cb){
				this.mcs={
					top:mCSB_container.position().top,left:mCSB_container.position().left,
					draggerTop:mCSB_dragger.position().top,draggerLeft:mCSB_dragger.position().left,
					topPct:Math.round((100*Math.abs(mCSB_container.position().top))/Math.abs(mCSB_container.outerHeight()-mCustomScrollBox.height())),
					leftPct:Math.round((100*Math.abs(mCSB_container.position().left))/Math.abs(mCSB_container.outerWidth()-mCustomScrollBox.width()))
				};
				switch(cb){
					/*start scrolling callback*/
					case "onScrollStart":
						$this.data("mCS_tweenRunning",true).data("onScrollStart_Callback").call($this,this.mcs);
						break;
					case "whileScrolling":
						$this.data("whileScrolling_Callback").call($this,this.mcs);
						break;
					case "onScroll":
						$this.data("onScroll_Callback").call($this,this.mcs);
						break;
					case "onTotalScrollBack":
						$this.data("onTotalScrollBack_Callback").call($this,this.mcs);
						break;
					case "onTotalScroll":
						$this.data("onTotalScroll_Callback").call($this,this.mcs);
						break;
				}
			}
		},
		stop:function(){
			var $this=$(this),
				mCSB_container=$this.children().children(".mCSB_container"),
				mCSB_dragger=$this.children().children().children().children(".mCSB_dragger");
			functions.mTweenAxisStop.call(this,mCSB_container[0]);
			functions.mTweenAxisStop.call(this,mCSB_dragger[0]);
		},
		disable:function(resetScroll){
			var $this=$(this),
				mCustomScrollBox=$this.children(".mCustomScrollBox"),
				mCSB_container=mCustomScrollBox.children(".mCSB_container"),
				mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),
				mCSB_dragger=mCSB_scrollTools.children().children(".mCSB_dragger");
			mCustomScrollBox.unbind("mousewheel focusin mouseenter mouseleave touchend");
			mCSB_container.unbind("touchstart touchmove")
			if(resetScroll){
				if($this.data("horizontalScroll")){
					mCSB_dragger.add(mCSB_container).css("left",0);
				}else{
					mCSB_dragger.add(mCSB_container).css("top",0);
				}
			}
			mCSB_scrollTools.css("display","none");
			mCSB_container.addClass("mCS_no_scrollbar");
			$this.data({"bindEvent_mousewheel":false,"bindEvent_focusin":false,"bindEvent_content_touch":false,"bindEvent_autoHideScrollbar":false}).addClass("mCS_disabled");
		},
		destroy:function(){
			var $this=$(this);
			$this.removeClass("mCustomScrollbar _mCS_"+$this.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();
			$(document).unbind("mousemove."+$this.data("mCustomScrollbarIndex")+" mouseup."+$this.data("mCustomScrollbarIndex")+" MSPointerMove."+$this.data("mCustomScrollbarIndex")+" MSPointerUp."+$this.data("mCustomScrollbarIndex"));
			$(window).unbind("resize."+$this.data("mCustomScrollbarIndex"));
		}
	},
	functions={
		/*hide/show scrollbar*/
		showScrollbar:function(){
			this.stop().animate({opacity:1},"fast");
		},
		hideScrollbar:function(){
			this.stop().animate({opacity:0},"fast");
		},
		/*js animation tween*/
		mTweenAxis:function(el,prop,to,duration,easing,callbacks){
			var callbacks=callbacks || {},
				onStart=callbacks.onStart || function(){},onUpdate=callbacks.onUpdate || function(){},onComplete=callbacks.onComplete || function(){};
			var startTime=_getTime(),_delay,progress=0,from=el.offsetTop,elStyle=el.style;
			if(prop==="left"){from=el.offsetLeft;}
			var diff=to-from;
			_cancelTween();
			_startTween();
			function _getTime(){
				if(window.performance && window.performance.now){
					return window.performance.now();
				}else{
					if(window.performance && window.performance.webkitNow){
						return window.performance.webkitNow();
					}else{
						if(Date.now){return Date.now();}else{return new Date().getTime();}
					}
				}
			}
			function _step(){
				if(!progress){onStart.call();}
				progress=_getTime()-startTime;
				_tween();
				if(progress>=el._time){
					el._time=(progress>el._time) ? progress+_delay-(progress- el._time) : progress+_delay-1;
					if(el._time<progress+1){el._time=progress+1;}
				}
				if(el._time<duration){el._id=_request(_step);}else{onComplete.call();}
			}
			function _tween(){
				if(duration>0){
					el.currVal=_ease(el._time,from,diff,duration,easing);
					elStyle[prop]=Math.round(el.currVal)+"px";
				}else{
					elStyle[prop]=to+"px";
				}
				onUpdate.call();
			}
			function _startTween(){
				_delay=1000/60;
				el._time=progress+_delay;
				_request=(!window.requestAnimationFrame) ? function(f){_tween(); return setTimeout(f,0.01);} : window.requestAnimationFrame;
				el._id=_request(_step);
			}
			function _cancelTween(){
				if(el._id==null){return;}
				if(!window.requestAnimationFrame){clearTimeout(el._id);
				}else{window.cancelAnimationFrame(el._id);}
				el._id=null;
			}
			function _ease(t,b,c,d,type){
				switch(type){
					case "linear":
						return c*t/d + b;
						break;
					case "easeOutQuad":
						t /= d; return -c * t*(t-2) + b;
						break;
					case "easeInOutQuad":
						t /= d/2;
						if (t < 1) return c/2*t*t + b;
						t--;
						return -c/2 * (t*(t-2) - 1) + b;
						break;
					case "easeOutCubic":
						t /= d; t--; return c*(t*t*t + 1) + b;
						break;
					case "easeOutQuart":
						t /= d; t--; return -c * (t*t*t*t - 1) + b;
						break;
					case "easeOutQuint":
						t /= d; t--; return c*(t*t*t*t*t + 1) + b;
						break;
					case "easeOutCirc":
						t /= d; t--; return c * Math.sqrt(1 - t*t) + b;
						break;
					case "easeOutSine":
						return c * Math.sin(t/d * (Math.PI/2)) + b;
						break;
					case "easeOutExpo":
						return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
						break;
					case "mcsEaseOut":
						var ts=(t/=d)*t,tc=ts*t;
						return b+c*(0.499999999999997*tc*ts + -2.5*ts*ts + 5.5*tc + -6.5*ts + 4*t);
						break;
					case "draggerRailEase":
						t /= d/2;
						if (t < 1) return c/2*t*t*t + b;
						t -= 2;
						return c/2*(t*t*t + 2) + b;
						break;
				}
			}
		},
		/*stop js animation tweens*/
		mTweenAxisStop:function(el){
			if(el._id==null){return;}
			if(!window.requestAnimationFrame){clearTimeout(el._id);
			}else{window.cancelAnimationFrame(el._id);}
			el._id=null;
		},
		/*detect requestAnimationFrame and polyfill*/
		rafPolyfill:function(){
			var pfx=["ms","moz","webkit","o"],i=pfx.length;
			while(--i > -1 && !window.requestAnimationFrame){
				window.requestAnimationFrame=window[pfx[i]+"RequestAnimationFrame"];
				window.cancelAnimationFrame=window[pfx[i]+"CancelAnimationFrame"] || window[pfx[i]+"CancelRequestAnimationFrame"];
			}
		}
	}
	/*detect features*/
	functions.rafPolyfill.call(); /*requestAnimationFrame*/
	$.support.touch=!!('ontouchstart' in window); /*touch*/
	$.support.msPointer=window.navigator.msPointerEnabled; /*MSPointer support*/
	/*plugin dependencies*/
	var _dlp=("https:"==document.location.protocol) ? "https:" : "http:";
	//$.event.special.mousewheel || document.write('<script src="'+_dlp+'//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');
	/*plugin fn*/
	$.fn.mCustomScrollbar=function(method){
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
})(jQuery);
/* filename: /common/ChatClass/TWChatForms.js weight: 1*/
﻿// JavaScript Document

function TWorkChatForm(name, mode) {
	this.title			= name;
	this.name			= name.replace(/ /g, "_").replace(/\./g, '-'); 
	this.mode			= (mode == undefined) ? "Point" : mode;
    this.loadHistory    = false;

	this.talkInput		= null; 				//document.getElementById("chatForm-talkText");	
	this.btnSend		= null;  				//document.getElementById("chatForm-sendbutton-id");
	this.is_closed		= true;	
	this.timer			= null;
	this.messages		= new Array();
	var cF				= this;
	this.avatar			= null;
}

TWorkChatForm.prototype = {
	/* ==== show chat form ==== */
	show : function() {
		var cForm = this;
		this.is_closed = false;
		this.timer_start(this);
		$("#chatForm_" + this.name).dialog({
			title		: this.title,
			position	: 'center',
			modal		: false,
			width		: 650,
			height		: 500,
			resizable	: false,
			close : function() {
				clearInterval(cForm.timer);
				cForm.is_closed = true;	
			}
		});
		
		//$("#chatForm_" + this.name + " .chatForm-talkhistory").mCustomScrollbar("update");
		//$("#chatForm_" + this.name + " .radioset").buttonset();
		cForm.getFriendAvatar(this);
	},

	create : function() {
		var text = "";
		text += "<div class=\"chatForm\" id=\"chatForm_" + this.name + "\" style=\"overflow:hidden;\">";
		text += "	<div class=\"chatForm-main\">";
		text += "		<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">";
		text += "			<tr>";		
		text += "				<td valign=\"top\" style=\"width:250px;\">";
		text += "					<div class=\"chatForm-userbar\">";
		text += "						<div class=\"chatForm-userlist\">"; 
		
									text += "<div style=\"display: block; opacity: 1; margin-bottom:8px; height:120px;\" class=\"statusList\">";
									text += "	<div class=\"photo\" style=\"float: left;padding-top: 4px;width: 50px;\">";
									text += "		<a href=\"javascript:;\" style=\"color:#3399ff;\">";
									text += "			<div style=\"width:52px; height:52px !important;border:1px solid #ccc;\" id=\"chatFriendAvatar_" + this.name + "\"></div>";
									text += "		</a>";
									text += "	</div>";
									text += "	<div class=\"detail\" style=\"padding-left:60px;\">";
									text += "		<div class=\"title\" style=\"color:#333; padding-top:5px;font-weight:bold; margin-bottom:6px;\">";
									text += "			<a href=\"/User:" + this.title + "\" style=\"color:#3399ff;\">" + this.title + "</a>";
									text += "		</div>";
									
									text += "		<div class=\"summary\">";
									text += "			<div id=\"flash_div_33961363\">"; 
									text += "			</div>";
									text += "		</div>";
									text += "	</div>";
									text += "<div style=\"clear:both; margin-bottom:20px;\"></div>";
									text += "<div class=\"user-point-box\>";
									text += "	<div class=\"inside-user-point-bx\">";
									text += "		<div class=\"user-points\">";
									//text += "			<img src=\"bronz_icon.png\" width=\"22\" height=\"23\">(Bronze)&nbsp;15 <span>点</span>";
									text += "		</div>";
									text += "	</div>";
									text += "</div>";
									
									text += "</div>";
																		
									
									text += "<div style=\"clear:both; border-bottom:2px solid #d4d4d4 !important;\"></div>";
									text += "<div style=\"padding-top:5px;\">"; 
									
			text += "<div class=\"radioset\">";
			//text += "	<input type=\"radio\" id=\"radio1\" name=\"radio\" checked=\"checked\" /><label for=\"radio1\" style=\"width:100%\">" + twGetL10nString("chat_tab_chat_label") + "</label><br /><br />";
			//text += "	<input type=\"radio\" id=\"radio2\" name=\"radio\" /><label for=\"radio2\" style=\"width:100%\">" + twGetL10nString("chat_tab_fans_label") + "</label><br /><br />";
			//text += "	<input type=\"radio\" id=\"radio3\" name=\"radio\" /><label for=\"radio3\" style=\"width:100%\">" + twGetL10nString("chat_tab_terms_label") + "</label><br /><br />";
			text += "</div>";
									
									text += "</div>";

		text += "						</div>";
		text += "					</div>";
		text += "				</td>";

		text += "				<td>";
		text += "					<div class=\"chatForm-leftinner\">";
		text += "						<div class=\"chatForm-talkhistory\" style=\"overflow-y:scroll; overflow-x:hidden\">";
		text += "						</div>";
		text += "						<div class=\"chatForm-foot\">";
		text += "							<div class=\"chatForm-talkbar\">";
		text += "								<span></span>";
		text += "							</div>";
		text += "							<div class=\"chatForm-input\">";
		text += "								<textarea cols=\"3\" class=\"chatForm-talkText\" style=\"border:none; width:99%;color:#525252;\"></textarea>";
		text += "							</div>";
		text += "							<div class=\"chatForm-sendbar\">";
		text += "								<span class=\"chatForm-sendbutton\">";
		text += "									<button class=\"chatForm-sendlabel button\">" + twGetL10nString("chat_send_button_text") + "</button>";
		text += "								</span>";
		text += "							</div>";
		text += "						</div>";
		text += "					</div>";
		text += "				</td>";			
		text += "			</tr>";
		text += "		</table>";
		text += "	</div>";
		text += "</div>";
		
		$("body").append(text);		
		
		var inputName = "#chatForm_" + this.name + " .chatForm-talkText";
		var bName = "#chatForm_" + this.name + " .chatForm-sendlabel";
		var cForm = this;

		this.talkInput = $(inputName);
		this.btnSend = $(bName);
		
		this.talkInput.bind("keydown", function(event){							
			var event = (event) ? event : window.event;
			if(event.ctrlKey && event.keyCode == 13) {
				cForm.send(cForm);
			}							
		});
		
		this.btnSend.bind("click", function(){
			cForm.send(cForm);									
		});
		
		$("#chatForm_" + this.name + " .radioset").buttonset();
		$("#chatForm_" + this.name + " .button").button();
		
		//$("#chatForm_" + this.name + " .chatForm-talkhistory").mCustomScrollbar({ theme:"dark-thick" });
		this.create_textArea();

	},
		
		
	create_textArea : function() {
		var textArea=$(".chatForm-input textarea");
		textArea.wrap("<div class='textarea-wrapper' />");
		var textAreaWrapper=textArea.parent(".textarea-wrapper");
		textAreaWrapper.mCustomScrollbar({
			scrollInertia:0,
			advanced:{autoScrollOnFocus:false},
			theme:"dark-thick"
		});
		var hiddenDiv = $(document.createElement("div"));
		var	content = null;
		
		hiddenDiv.addClass("hiddenDiv");
		$("body").prepend(hiddenDiv);
		textArea.bind("keyup", function(e) {
			content = $(this).val();
			var clength = content.length;
			var cursorPosition = textArea.getCursorPosition();
			content = "<span>"+content.substr(0,cursorPosition)+"</span>"+content.substr(cursorPosition,content.length);
			content = content.replace(/\n/g, "<br />");
			hiddenDiv.html(content + "<br />");
			$(this).css("height", hiddenDiv.height());
			textAreaWrapper.mCustomScrollbar("update");
			var hiddenDivSpan = hiddenDiv.children("span");
			var hiddenDivSpanOffset = 0;
			var viewLimitBottom = (parseInt(hiddenDiv.css("min-height")))-hiddenDivSpanOffset;
			var viewLimitTop = hiddenDivSpanOffset;
			var viewRatio = Math.round(hiddenDivSpan.height() + textAreaWrapper.find(".mCSB_container").position().top);
			if(viewRatio > viewLimitBottom || viewRatio < viewLimitTop) {
				if((hiddenDivSpan.height() - hiddenDivSpanOffset) > 0) {
					textAreaWrapper.mCustomScrollbar("scrollTo", hiddenDivSpan.height()-hiddenDivSpanOffset);
				}
				else{
					textAreaWrapper.mCustomScrollbar("scrollTo", "top");
				}
			}
		});
		
		$.fn.getCursorPosition=function(){
			var el = $(this).get(0);
			var pos = 0;
			if("selectionStart" in el) {
    			pos = el.selectionStart;
			}
			else if("selection" in document){
    			el.focus();
    			var sel = document.selection.createRange();
				var selLength = document.selection.createRange().text.length;
    			sel.moveStart("character", -el.value.length);
    			pos = sel.text.length-selLength;
			}
			return pos;
		}	
	},
	
	
	/* ==== From server return data is json format ==== */
	parse_json : function(oC) {
		if(oC == null || oC.command  == null) return;
		var requestCommand = oC.command; 
		switch(requestCommand) {
			case "user":
				this.updateU(oC.users);
				break;
			case "send":
				this.updateTalk(oC);
				break;
			case "update":
				this.updateTalks(oC);
				break
		}
	},
	
	/* ==== get content text ==== */
	getText : function() {
		var text = this.talkInput.val().replace(/\n/g, '<br />');
		this.talkInput.val("");
		return text;
	},
	

	/* ==== send talk ==== */
	send : function(cForm) {
		var content = cForm.getText();
		if(content == "") {
			alert(twGetL10nString("chat_input_text_label"));
			return false;
		}
		else {
			var p = {mode : cForm.mode, command : 'send', to : cForm.title, text : content};
			pchat.client.send(p);
		}
	},
	
	/* ==== function  ==== */
	timer_start : function(cForm) {
        if(cForm.loadHistory) {
            cForm.get_history_talk(cForm);
        }
        else {
		    cForm.get_talk(cForm);
		    this.timer = setInterval(function() {
			    cForm.get_talk(cForm);
		    }, 300000);
        }
	},
	
	get_talk : function(cF) {
		var p = {mode : cF.mode, command : 'get_Message', from : cF.title};
		pchat.client.send(p);
	},
    
    get_history_talk : function(cF) {
        var p = {mode : cF.mode, command : 'get_All_Message', from : cF.title};
        pchat.client.send(p);
        var history = "#chatForm_" + this.name + " .chatForm-talkhistory";     
        $(history).empty();
    },
	
	updateTalks : function(oMess) {
		var cF = this;
		$.each(oMess.messages , function(mIndex, oM) {
			if(oM.userName != "" && oM.userName != undefined) {
				cF.appendTalk(oM.userName, oM.time, oM.message, oM.avatar);
			}
		});
	},
	
	/* ==== update history of contents ==== */
	updateTalk : function(oM) {
		this.appendTalk(oM.userName, oM.time, oM.message, oM.avatar);
	},
	
	appendTalk : function(sender, stime, message, avatar) {
		//var tString = this.talk_content(message);
		//var oTitle	= this.talk_title(sender, stime);
		var history = "#chatForm_" + this.name + " .chatForm-talkhistory";
		var message_string = this.format_message(sender, stime, message, avatar);
		//$(history).append(oTitle);
		console.log(message_string);
		$(history).append(message_string);
		$(history).scrollTop($(history)[0].scrollHeight);
	},
	
	talk_title : function(sender, stime) {
		var titleBar 	= $("<p class='chatForm-talk-others'></p>");
		var oU 			= $("<span class='chatForm-talk-user'>" + sender + "</span>");
		var oT 			= $("<span class='chatForm-talk-time'>&nbsp;(" + stime + ")</span>");
		
		titleBar.append(oU);
		titleBar.append(oT);
		return titleBar;
	},

	talk_content : function(str) {
		var oTalk = $("<div class='chatForm-talk-content'></div>");
		oTalk.html(str);
		return oTalk;
	},
	
	format_message : function(sender, stime, message, avatar) {
		var text = "";
		text += "<div style=\"display: block; opacity: 1; margin-bottom:8px;\" class=\"statusList\">";
		text += "	<div class=\"photo\" style=\"float: left;padding-top: 4px;width: 50px;\">";
		//Wait API
		text += "		<a href=\"javascript:;\" style=\"color:#3399ff;\">";
		text += "			<img border=\"0\" height=\"38\" width=\"38\" src=\"" + avatar + "&width=34\">";
		text += "		</a>";
		text += "	</div>";
		text += "	<div class=\"detail\" style=\"padding-left:50px;\">";
		text += "		<div class=\"title\" style=\"color:#333; padding-top:5px;font-weight:bold; margin-bottom:6px;\">";
		text += "			<a href=\"/User:" + sender + "\" style=\"color:#3399ff;\">@" + sender + "</a><span class='chatForm-talk-time'>&nbsp;(" + stime + ")</span>";
		text += "		</div>";

		text += "		<div class=\"summary\">";
		text += "			<div id=\"flash_div_33961363\">" + message + "</div>";
		text += "		</div>";
		text += "		<div style=\"margin-top:8px; border-bottom:1px solid #eee;\" ></div>";
		text += "	</div>";
		text += "</div>";
		
		return text;
	},
		
	getFriendAvatar : function(uF) {
		var Commands = {mode : uF.mode, to : uF.title, command : "getFriendAvatar"};
		pchat.client.send(Commands);
	},
		
	updateFriendAvatar : function(result) {
		var _this = this;
		_this.avatar = result.result[0].avatar;
		$("#chatFriendAvatar_" + _this.name).html("<img border=\"0\" src=\"" + _this.avatar + "\" height=\"48\" width=\"48\" style=\"margin-left:2px;margin-top:2px;\" />");
	}
}

/* filename: /common/ChatClass/TWMessageForms.js weight: 1*/
﻿// JavaScript Document

function TWorkMessageForm(name, from, to, mode, others) {
	this.name			= name; 
	this.mode			= (mode == undefined) ? "Point" : mode;
	
	this.from_user		= from;
	this.to_user		= to;
	this.cOptions       = (typeof others == 'undefined' || !others) ? {} : others;

	this.talkInput		= null; 				//document.getElementById("chatForm-talkText");	
	this.btnSend		= null;  				//document.getElementById("chatForm-sendbutton-id");
	this.is_closed		= true;	
	this.timer			= null;
	this.messages		= new Array();	

	var cF				= this;
}

TWorkMessageForm.prototype = {
	/* ==== show chat form ==== */
	show : function() {
		var cForm = this;
		this.is_closed = false;
		this.timer_start(this);
		
		$("#chatForm_Leave_Message").dialog({
			title		: "<img src=\"" + stylepath + "/common/ChatClass/chat.png\" />&nbsp;Leave a message for " + this.to_user,
			position	: 'center',
			modal		: false,
			width		: 640,
			height		: 500,
			resizable	: false,
			close : function() {
				clearInterval(cForm.timer);
				cForm.is_closed = true;	
			}
		});
		
		//$("#chatForm_Leave_Message .chatForm-talkhistory").mCustomScrollbar("update");
		$("#chatForm_Leave_Message .radioset").buttonset();
				
	},

	create : function() {
		var text = "";
		text += "<div class=\"chatForm\" id=\"chatForm_Leave_Message\" style=\"overflow:hidden;\">";
		text += "	<div class=\"chatForm-main\">";
		text += "		<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">";
		text += "			<tr>";		
		text += "				<td valign=\"top\" style=\"width:250px;\">";
		text += "					<div class=\"chatForm-userbar\">";
		text += "						<div class=\"chatForm-userlist\">"; 
		
									text += "<div style=\"display: block; opacity: 1; margin-bottom:8px; height:120px;\" class=\"statusList\">";
									text += "	<div class=\"photo\" style=\"float: left;padding-top: 4px;width: 50px;\">";
									////暂时不提供API
									text += "		<a href=\"javascript:;\" style=\"color:#3399ff;\">";
									text += "			<div style=\"width:52px; height:52px !important;border:1px solid #ccc;\">";
									text += "			<img border=\"0\" height=\"48\" width=\"48\" src=\"/images/3/3b/avatar_52.gif\" style=\"margin-left:2px;margin-top:2px;\">";
									text += "			</div>";
									text += "		</a>";
									text += "	</div>";
									text += "	<div class=\"detail\" style=\"padding-left:60px;\">";
									text += "		<div class=\"title\" style=\"color:#333; padding-top:5px;font-weight:bold; margin-bottom:6px;\">";
									text += "			<a href=\"/User:" + this.to_user + "\" style=\"color:#3399ff;\">" + this.to_user + "</a>";
									text += "		</div>";
									
									text += "		<div class=\"summary\">";
									text += "			<div id=\"flash_div_33961363\">"; 
									text += "			</div>";
									text += "		</div>";
									text += "	</div>";
									text += "	<div style=\"clear:both; margin-bottom:20px;\"></div>";
									text += "	<div class=\"user-point-box\>";
									text += "		<div class=\"inside-user-point-bx\">";
									text += "			<div class=\"user-points\">";
									text += "				<!--<img src=\"bronz_icon.png\" width=\"22\" height=\"23\">(Bronze)&nbsp;15 <span>点</span>-->";
									text += "			</div>";
									text += "		</div>";
									text += "	</div>";
								
									text += "</div>";
																		
									
									text += "<div style=\"clear:both; border-bottom:2px solid #d4d4d4 !important;\"></div>";
									text += "<div style=\"padding-top:5px;\">"; 
									
			text += "<div class=\"radioset\">";
			text += "	<input type=\"radio\" id=\"radio1\" name=\"radio\" checked=\"checked\" /><label for=\"radio1\" style=\"width:100%\">" + twGetL10nString("chat_tab_chat_label") + "</label><br /><br />";
			//text += "	<input type=\"radio\" id=\"radio2\" name=\"radio\" /><label for=\"radio2\" style=\"width:100%\">" + twGetL10nString("chat_tab_fans_label") + "</label><br /><br />";
			//text += "	<input type=\"radio\" id=\"radio3\" name=\"radio\" /><label for=\"radio3\" style=\"width:100%\">" + twGetL10nString("chat_tab_terms_label") + "</label><br /><br />";
			text += "</div>";
									
									text += "</div>";

		text += "						</div>";
		text += "					</div>";
		text += "				</td>";

		text += "				<td>";
		text += "					<div class=\"chatForm-leftinner\">";
		text += "						<div class=\"chatForm-talkhistory\">";
		
		text += "						</div>";
		text += "						<div class=\"chatForm-foot\">";
		text += "							<div class=\"chatForm-talkbar\">";
		text += "								<span></span>";
		text += "							</div>";
		text += "							<div class=\"chatForm-input\">";
		text += "								<textarea cols=\"3\" class=\"chatForm-talkText\" style=\"border:none; width:99%;\"></textarea>";
		text += "							</div>";
		text += "							<div class=\"chatForm-sendbar\">";
		text += "								<span class=\"chatForm-sendbutton\">";
		text += "									<button class=\"chatForm-sendlabel button\">" + twGetL10nString("chat_send_button_text") + "</button>";
		text += "								</span>";
		text += "							</div>";
		text += "						</div>";
		text += "					</div>";
		text += "				</td>";			
		text += "			</tr>";
		text += "		</table>";
		text += "	</div>";
		text += "</div>";

		$("body").append(text);		
		
		var inputName = "#chatForm_Leave_Message .chatForm-talkText";
		var bName = "#chatForm_Leave_Message .chatForm-sendlabel";
		var cForm = this;
		
		$(".button").button();
		
		this.talkInput = $(inputName);
		this.btnSend = $(bName);
		
		this.talkInput.bind("keydown", function(event){							
			var event = (event) ? event : window.event;
			if(event.ctrlKey && event.keyCode == 13) {
				cForm.send(cForm);
			}							
		});
		
		this.btnSend.bind("click", function(){
			cForm.send(cForm);									
		});
		
		//$("#chatForm_Leave_Message .chatForm-talkhistory").mCustomScrollbar({ theme:"dark-thick" });
		
		this.create_textArea();
	},
		
	create_textArea : function() {
		var textArea=$(".chatForm-input textarea");
		textArea.wrap("<div class='textarea-wrapper' />");
		var textAreaWrapper=textArea.parent(".textarea-wrapper");
		textAreaWrapper.mCustomScrollbar({
			scrollInertia:0,
			advanced:{autoScrollOnFocus:false},
			theme:"dark-thick"
		});
		var hiddenDiv = $(document.createElement("div"));
		var	content = null;
		
		hiddenDiv.addClass("hiddenDiv");
		$("body").prepend(hiddenDiv);
		textArea.bind("keyup", function(e) {
			content = $(this).val();
			var clength = content.length;
			var cursorPosition = textArea.getCursorPosition();
			content = "<span>"+content.substr(0,cursorPosition)+"</span>"+content.substr(cursorPosition,content.length);
			content = content.replace(/\n/g, "<br />");
			hiddenDiv.html(content + "<br />");
			$(this).css("height", hiddenDiv.height());
			textAreaWrapper.mCustomScrollbar("update");
			var hiddenDivSpan = hiddenDiv.children("span");
			var hiddenDivSpanOffset = 0;
			var viewLimitBottom = (parseInt(hiddenDiv.css("min-height")))-hiddenDivSpanOffset;
			var viewLimitTop = hiddenDivSpanOffset;
			var viewRatio = Math.round(hiddenDivSpan.height() + textAreaWrapper.find(".mCSB_container").position().top);
			if(viewRatio > viewLimitBottom || viewRatio < viewLimitTop) {
				if((hiddenDivSpan.height() - hiddenDivSpanOffset) > 0) {
					textAreaWrapper.mCustomScrollbar("scrollTo", hiddenDivSpan.height()-hiddenDivSpanOffset);
				}
				else{
					textAreaWrapper.mCustomScrollbar("scrollTo", "top");
				}
			}
		});
		
		$.fn.getCursorPosition=function(){
			var el = $(this).get(0);
			var pos = 0;
			if("selectionStart" in el) {
    			pos = el.selectionStart;
			}
			else if("selection" in document){
    			el.focus();
    			var sel = document.selection.createRange();
				var selLength = document.selection.createRange().text.length;
    			sel.moveStart("character", -el.value.length);
    			pos = sel.text.length-selLength;
			}
			return pos;
		}	
	},
	
	/* ==== From server return data is json format ==== */
	parse_json : function(oC) {
		if(oC == null || oC.command  == null) return;
		var requestCommand = oC.command; 
		switch(requestCommand) {
			case "user":
				this.updateU(oC.users);
				break;
			case "send":
				this.updateTalk(oC);
				break;
			case "update":
				this.updateTalks(oC);
				break
		}
	},
	
	/* ==== get content text ==== */
	getText : function() {
		var text = this.talkInput.val().replace(/\n/g, '<br />');
		//this.talkInput.val("");
		return text;
	},
	

	/* ==== send talk ==== */
	send : function(cForm) {
		var content = cForm.getText();
		if(content == "") {
			alert(twGetL10nString('twc_please_input_text'));
			return false;
		}
		else {
            //cForm.cOptions = { pro_id :1 };
			var p = {mode : cForm.mode, command : 'send_Leave_Message', from: cForm.from_user, to : cForm.to_user, text : content, 'cOptions' : cForm.cOptions};
			pchat.client.send(p);
		}
	},
	
	/* ==== function  ==== */
	timer_start : function(cForm) {
		cForm.get_talk(cForm);
		this.timer = setInterval(function() {
			cForm.get_talk(cForm);
		}, 20000);
	},
	
	get_talk : function(cF) {
		var p = {mode : cF.mode, command : 'get_Leave_Message', from : cF.from_user, to: cF.to_user};
		pchat.client.send(p);
	},
	
	updateTalks : function(oMess) {
		var cF = this;
		$.each(oMess.messages , function(mIndex, oM) {
			if(oM.userName != "" && oM.userName != undefined) {
				cF.appendTalk(oM.userName, oM.time, oM.message);
			}
		});
	},
	
	/* ==== update history of contents ==== */
	updateTalk : function(oM) {
		this.talkInput.val("");
		this.appendTalk(oM.userName, oM.time, oM.message);
	},
	
	appendTalk : function(sender, stime, message) {
		//var tString = this.talk(message);
		//var oTitle	= this.title(sender, stime);
		var history = "#chatForm_Leave_Message .chatForm-talkhistory";
		var message_string = this.format_message(sender, stime, message);
		//$(history).append(oTitle);
		$(history).append(message_string);
		$(history).scrollTop($(history)[0].scrollHeight);
	},
	
	format_message : function(sender, stime, message) {
		var text = "";
		text += "<div style=\"display: block; opacity: 1; margin-bottom:8px;\" class=\"statusList\">";
		text += "	<div class=\"photo\" style=\"float: left;padding-top: 4px;width: 50px;\">";
		//Wait API
		//text += "		<a href=\"/User:Abe_Wang\" style=\"color:#3399ff;\">";
		//text += "			<img border=\"0\" height=\"38\" width=\"38\" src=\"http://cn.termwiki.net/thumb.php?f=Abe_Wang52038959.jpg&width=38\">";
		//text += "		</a>";
		text += "	</div>";
		text += "	<div class=\"detail\" style=\"padding-left:50px;\">";
		text += "		<div class=\"title\" style=\"color:#333; padding-top:5px;font-weight:bold; margin-bottom:6px;\">";
		text += "			<a href=\"/User:" + sender + "\" style=\"color:#3399ff;\">@" + sender + "</a><span class='chatForm-talk-time'>&nbsp;(" + stime + ")</span>";
		text += "		</div>";

		text += "		<div class=\"summary\">";
		text += "			<div id=\"flash_div_33961363\">" + message + "</div>";
		text += "		</div>";
		text += "		<div style=\"margin-top:8px; border-bottom:1px solid #eee;\" ></div>";
		text += "	</div>";
		text += "</div>";
		
		return text;
	},
	
	title : function(sender, stime) {
		//var titleBar 	= $("<p class='chatForm-talk-others'></p>");
		//var oU 			= $("<span class='chatForm-talk-user'>" + sender + "</span>");
		//var oT 			= $("<span class='chatForm-talk-time'>&nbsp;(" + stime + ")</span>");
		
		//titleBar.append(oU);
		//titleBar.append(oT);
		//return titleBar;
		var text = "";
		text += "<div style=\"display: block; opacity: 1; margin-bottom:8px;\" class=\"statusList\">";
		text += "	<div class=\"photo\" style=\"float: left;padding-top: 4px;width: 50px;\">";
		text += "		<a href=\"javascript:;\" style=\"color:#3399ff;\">";
		text += "			<img border=\"0\" height=\"38\" width=\"38\" src=\"./images/3/3b/avatar_52.gif\">";
		text += "		</a>";
		text += "	</div>";
		text += "	<div class=\"detail\" style=\"padding-left:50px;\">";
		text += "		<div class=\"title\" style=\"color:#333; padding-top:5px;font-weight:bold; margin-bottom:6px;\">";
		text += "			<a href=\"/User:Abe_Wang\" style=\"color:#3399ff;\">@Abe Wang</a>";
		text += "		</div>";

		text += "		<div class=\"summary\">Share a term with millions of users around the world and increase your online visibility. Share a term with millions of users...Share a term with millions of users around the world and increase your online visibility. Share a term with millions of users...Share a term with millions of users around the world and increase your online visibility. Share a term with millions of users...";
		text += "			<div id=\"flash_div_33961363\"></div>";
		text += "		</div>";
		text += "		<div style=\"margin-top:8px; border-bottom:1px solid #eee;\" ></div>";
		text += "	</div>";
		text += "</div>";
	},

	talk : function(str) {
		var oTalk = $("<div class='chatForm-talk-content'></div>");
		oTalk.html(str);
		return oTalk;
	}
}

///////Message Template////////
/*
<div style="display: block; opacity: 1; margin-bottom:8px;" class="statusList">
	<div class="photo" style="float: left;padding-top: 4px;width: 50px;">
		<a href="/User:Abe_Wang" style="color:#3399ff;">
			<img border="0" height="38" width="38" src="http://cn.termwiki.net/thumb.php?f=Abe_Wang52038959.jpg&width=38">
		</a>
	</div>
	<div class="detail" style="padding-left:50px;">
		<div class="title" style="color:#333; padding-top:5px;font-weight:bold; margin-bottom:6px;">
			<a href="/User:Abe_Wang" style="color:#3399ff;">@Abe Wang</a>
		</div>
							
		<div class="summary">Share a term with millions of users around the world and increase your online visibility. Share a term with millions of users...Share a term with millions of users around the world and increase your online visibility. Share a term with millions of users...Share a term with millions of users around the world and increase your online visibility. Share a term with millions of users...
			<div id="flash_div_33961363"></div>
		</div>
		<div style="margin-top:8px; border-bottom:1px solid #eee;"></div>
	</div>
</div>
*/
/* filename: /common/ChatClass/TWUserForms.js weight: 1*/
﻿// JavaScript Document

function TWorkUserForm(id, name, mode) {
	this.id			= id; 
	this.timer		= null;
	this.onlineTimer = null;
	
	this.mode		= (mode == undefined) ? "Point" : mode;
	this.control	= null;
	this.shown		= false;
   
    this.inbox_link = wgServer + "/Special:TermWiki_ChatMessage/Inbox";
    this.sent_link = wgServer + "/Special:TermWiki_ChatMessage/Sent";
    
    this.tabs		= null;
    this.select_tab = 0;
    
    this.name		= name;
    this.avatar		= null;
    
    this.online_status = false;
    this.friend_status = false;
    this.dynamic_status = false;
    
    this.leave_message_timed = false;
    this.online_timed = false;
}

TWorkUserForm.prototype = {
	
	/* ==== create form ==== */
	create : function() {
		var text = "";
		text += "<div id=\"userForm\" class=\"\" style=\"padding:3px 3px; display:none; overflow:hidden;\">";
		text += "	<div class=\"userForm-main\">";
		text += "		<div class=\"userForm-userbar\">";
		
		text += "			<div style=\"margin:10px 10px 10px 3px; float:left;\" id=\"chatUserAvatar\"></div>";
		text += "			<div style=\"float:left; margin-top:12px;\"><b style=\"color:#3399ff\"><a href=\"http://www.termwiki.com/User:" + this.name + "\">" + this.name + "</a></b></div>";
		text +="			<div style=\"clear:both;\"></div>";

		text += "<div class=\"userForm-user-title\" id=\"control-tabs\" style=\"font-size:12px; color:red;\">";
		text += "	<ul>";
		text += "		<li><a href=\"#userForm-userlist\">" + twGetL10nString("chat_userForm_userlist_text") + "</a></li>";
		text += "		<li><a href=\"#userForm-dynamics\">" + twGetL10nString("chat_userForm_dynamics_text") + "</a></li>";
		text += "	</ul>";
		text += "	<div id=\"userForm-userlist\" class=\"userForm-userlist\" id=\"userForm-userlist\" style=\"height:358px; padding:3px; overflow:hidden\">";
		text += "		<div id=\"accordion\">";
		text += "			<div>";
		text += "				<h3 style=\"border:none;height:28px;\"><a href=\"#\">" + twGetL10nString("chat_friends_online_text") + " <span id=\"online-count\"></span></a></h3>";
		text += "				<div id=\"online-userlist\" style=\"border-width:0px !important; padding:0px 10px 5px 35px;\"></div>";
		text += "			</div>";
		text += "			<div>";
		text += "				<h3 style=\"border:none;height:28px;\"><a href=\"#\">" + twGetL10nString("chat_my_friends_text") + " (<span id=\"friend-count\">0</span>)</a></h3>";
		text += "				<div id=\"friend-list\" style=\"border-width:0px !important; padding:0px 10px 5px 35px; height:300px;\"></div>";
		text += "			</div>";
		text += "		</div>";
		
		text += "	</div>";
		text += "	<div id=\"userForm-dynamics\" class=\"userForm-dynamics\" style=\"width:220px; height:340px; overflow:auto; padding:14px 0px 10px 10px;\">";
		text +="			<div style=\"clear:both;\"></div>";
		text += "	</div>";
		text += "			</div>";	

		text += "		</div>";
		text += "	</div>";
		text += "<div style='padding-top:3px; padding-left:5px; font-size:12px;'><span><b><a href='" + this.inbox_link + "'>" + twGetL10nString("chat_inbox_text") + "</a></b></span>";
		text += "<span style='margin-left:10px;'><b><a href='" + this.sent_link + "'>" + twGetL10nString("chat_history_log_text") + "</a></b></span></div>";
		text += "</div>";
	
		$("body").append(text);	
        var uForm = this; 

		this.tabs = $('#control-tabs').tabs({
			selected : 0,
			select: function(event, ui) {
				uForm.tab_click(ui.index);
    		}
		});
		
		$("#accordion").accordion({ header: "h3", 
			heightStyle: "fill",
			change : function(event, ui) { 
				$("#online-userlist").css({"height":"", "overflow-y":"scroll", "max-height" : "280px"});
				$("#friend-list").css({"height":"300px", "overflow-y":"scroll"});
			} 
		});

		console.log("UserForm.create");
	},
	
	/* ==== show chat form ==== */
	show : function() {
		this.shown = true;
		var uForm = this;
		this.start(this);
		$("#" + this.id).dialog({
			title		: "<img src=\"" + stylepath + "/common/ChatClass/chat.png\" />&nbsp;Messages",
			position	: 'center',
			modal		: false,
			width		: 240,
			height		: 540,
			resizable	: false,
			close : function() {
				uForm.shown = false;
				clearInterval(uForm.timer);
				clearInterval(uForm.onlineTimer);
			}
		});
		
		//$("#userForm-dynamics").mCustomScrollbar("update");
		uForm.getUserAvatar(this);
	},
	
	/* ==== start ==== */
	start : function(uF) {
		this.timer = setInterval(function() {
			if(!uF.leave_message_timed) {
				uF.total_leave_message(uF);
				uF.leave_message_timed = true;
			}
		}, 10000);
		
		uF.getOnlineFriends(uF);
		this.onlineTimer = setInterval(function() {
			if(!uF.online_timed) {
				uF.getOnlineFriends(uF);
				uF.online_timed = true;
			}
		}, 10000);
		//setTimeout(function() {uF.get_latest_contact();}, 20000);
		setTimeout(function() {uF.getFirends();}, 15000);
	},
				
	getUserAvatar : function(uF) {
		if(uF.avatar == null) {
			var Commands = {mode : uF.mode, from : uF.name, command : "getUserAvatar"};
			pchat.client.send(Commands);
		}
	},

	total_leave_message : function(uF) {
		var Commands = {mode : uF.mode, command : "Total_Message"};
		pchat.client.send(Commands);
	},

	/* ==== get lastest contact ==== */
	get_latest_contact : function() {
		var Commands = {mode : pchat.client.userForm.mode, command : "Lastest_Contact"};
		pchat.client.send(Commands);
	},
		
	get_recent_dynamic : function() {
    	console.log("dynamic status: " + pchat.client.userForm.dynamic_status);
    	if(!pchat.client.userForm.dynamic_status) {
			$("#userForm-dynamics").html(pchat.client.userForm.show_loading());
		}
		var Commands = {mode : pchat.client.userForm.mode, command : "Recently_Dynamic"};
		pchat.client.send(Commands);
	},
		
	getFirends : function() {
    	console.log("frientd status: " + pchat.client.userForm.friend_status);
    	if(!pchat.client.userForm.friend_status) {
			$("#userForm #friend-list").html(pchat.client.userForm.show_loading());
		}
		var Commands = {mode : pchat.client.userForm.mode, command : "getMyFirend"};
		pchat.client.send(Commands);
	},
		
	getOnlineFriends : function(uF) {
    	console.log("online status: " + pchat.client.userForm.online_status);
    	if(!pchat.client.userForm.online_status) {
    		$('#userForm #online-userlist').css({"height":"", "overflow-y":"scroll", "max-height":"280px"});
			$("#userForm #online-userlist").html(pchat.client.userForm.show_loading());
		}
		var Commands = {mode : uF.mode, command : "getOnlineFriend"};
		pchat.client.send(Commands);
	},
	
	/* ==== show loading image ==== */
	show_loading : function() {
		return $("<img src='../skins/common/termimg/loading.gif' />&nbsp;" + twGetL10nString("lb_loading"));
	},
	
	tab_click : function(id) {
		this.select_tab = id;
		if(id == 0) {
			pchat.client.userForm.update_user_list();
		}
		else {
			pchat.client.userForm.get_recent_dynamic();
		}
	},
	
	/* ==== show recent dynamic === */
	updateDynamic : function(result) {
		var _this = this;
    	this.dynamic_status = true;
		_this.append_dynamic_item(result.result[0].content);
	},
		
	updateUserAvatar : function(result) {
		var _this = this;
		_this.avatar = result.result[0].avatar;
		$("#chatUserAvatar").html("<img src=\"" + _this.avatar + "\" height=\"32\" />");
	},
			
	/* ==== show lastest contact ==== */
	update_contact : function(oMess) {
		var userlist = "";
		$.each(oMess.result , function(uIndex, c) {
			if(c.userName != "" && c.userName != undefined) {
				pchat.client.users.update(c.userName, c.count);
				pchat.client.users.get(c.userName).avatar = c.avatar;
			}
		});
        
        this.update_contact_list();
	},
		
	updateFirends : function(oMess) {
		var userlist = "";
    	this.friend_status = true;
		$.each(oMess.result , function(uIndex, c) {
			if(c.userName != "" && c.userName != undefined) {
				pchat.client.users.update(c.userName, c.count);
				pchat.client.users.get(c.userName).avatar = c.avatar;
				pchat.client.users.get(c.userName).is_active = false;
			}
		});
        
        this.update_contact_list();
	},
		
	updateOnlineFriends : function(oMess) {
		var userlist = "";
    	this.online_status = true;
		this.online_timed = false;
		console.debug("updateOnlineFriends: " + this.online_timed);
		$.each(oMess.result , function(uIndex, c) {
			if(c.userName != "" && c.userName != undefined) {
				pchat.client.users.update(c.userName, 0);
				pchat.client.users.get(c.userName).avatar = c.avatar;
				pchat.client.users.get(c.userName).is_active = true;
			}
		});
        
		this.update_user_list();
	},
    
    update_contact_list : function() {
		var userlist ="";
		for(var i = 0; i < pchat.client.users.length(); i++) {
			var user = pchat.client.users.get_index(i);			
			text = "";
			text += "					<div style=\"margin:2px 10px 2px 2px; float:left;\"><img src=\"" + user.avatar + "&width=20\" width=\"20\" height=\"20\" /></div>";
			text += "					<div style=\"float:left; margin-top:4px;\"><b style=\"color:#3399ff\"><a href=\"javascript:;\" onclick='pchat.client.createHistory(\"" + user.name + "\")'>";
			text += "						<span class='userForm-username'>" + user.name + "</span></a></b>";
			text += "					</div>";
			text += "					<div style=\"clear:both;\"></div>";
			
			userlist += text;
		}
		$('#userForm #friend-list').html(userlist);
		$('#userForm #friend-list').css({"height":"300px", "overflow-y":"scroll"});
    },

	/* ==== update status of online users ==== */
	updateUserMessages : function(oUser) {
		var userlist = "";
		this.leave_message_timed = false;
		$.each(oUser.result , function(uIndex, c) {
			if(c.userName != "" && c.userName != undefined) {
				pchat.client.users.update(c.userName, c.count);
				pchat.client.users.get(c.userName).avatar = c.avatar;
				pchat.client.users.get(c.userName).is_active = true;
			}
		});

		this.update_user_list();
		this.update_user_status();
	},
	
	/* ==== redirect user message ==== */
	update_user_list : function() {
		var userlist ="";
		for(var i = 0; i < pchat.client.users.length(); i++) {
			var user = pchat.client.users.get_index(i);
            if(!user.is_active) continue;
			
			text = "";
			text += "					<div style=\"margin:2px 10px 2px 2px; float:left;\"><img src=\"" + user.avatar + "&width=20\" width=\"20\" height=\"20\" /></div>";
			text += "					<div style=\"float:left; margin-top:4px;\"><b style=\"color:#3399ff\"><a href=\"javascript:;\" onclick='pchat.client.create(\"" + user.name + "\")'>";
			text += "						<span class='userForm-username'>" + user.name;
			if(user.count != 0 && user.count != undefined) {
				text += " [<span class='userForm-user-message'>" + user.count + "</span>]";
			}
			
			text += "</span></a></b>";
			text += "					</div>";
			text += "					<div style=\"clear:both;\"></div>";
			
			userlist += text;
		}
		
		$('#userForm #online-userlist').css({"height":"", "overflow-y":"scroll", "max-height":"280px"});
		$('#userForm #online-userlist').html(userlist);
	},
		
	update_user_status : function() {
		var count = pchat.client.users.length();
		$("#friend-count").html(count);
	},
		
	append_dynamic_item : function(item) {
		var text = "";
		text += "<div style=\"display: block; opacity: 1; margin-bottom:8px;\" class=\"statusList\">";
		text += "	<div class=\"photo\" style=\"float: left;padding-top: 4px;width: 50px;\">";
		text += "		<a href=\"/User:Abe_Wang\" style=\"color:#3399ff;\">";
		text += "			<img border=\"0\" height=\"38\" width=\"38\" src=\"http://cn.termwiki.net/thumb.php?f=Abe_Wang52038959.jpg&width=38\">";
		text += "		</a>";
		text += "	</div>";
		text += "	<div class=\"detail\">";
		text += "		<div class=\"title\" style=\"color:#333;\">";
		text += "			<a href=\"/User:Abe_Wang\" style=\"color:#3399ff;\">@Abe Wang</a> 编辑了词条 <a href=\"/EN:chinese_nelson_₀₁\" style=\"color:#3399ff;\">chinese nelson111</a><br><span class=\"tone\" style=\"color:#999;\">(英语 (EN), 体育, 篮球)</span>";
					
		text += "		</div>";
		text += "		<div class=\"summary\">Share a term with millions of users around the world and increase your online visibility. Share a term with millions of users...";
		text += "			<div id=\"flash_div_33961363\"></div>";
		text += "		</div>";
		text += "	</div>";
		text += "</div>";
		
		console.debug("Content: " + item);
		text = item;
		$("#userForm-dynamics").html(text);
	}
}
/* filename: /common/ChatClass/TWUser.js weight: 1*/
// JavaScript Document

function TWorkUsers() {
	this.uGroup 		= new Array();
	this.class_name 	= "TWorkUsers";
}

TWorkUsers.prototype = {
	update : function(name, count) {
		if(this.exists(name)) {
			if(this.get(name).chatForm == null) {
				this.get(name).count = count;
			}
			else {
				if(this.get(name).chatForm.is_closed) {
					this.get(name).count = count;
				}
				else {
					this.get(name).count = 0;
				}
			}
		}
		else {
			this.add(name, count, true);
		}
	},
		
	add : function(name, count, active) {
		this.uGroup[this.uGroup.length] = new TWorkUser(name, count, active);	
	},
	
	get	: function(userName) {
		for(var i = 0; i < this.uGroup.length; i++) {
			if(userName == this.uGroup[i].name) return this.uGroup[i];	
		}
		return null;
	},
	
	get_index : function(index) {
		return this.uGroup[index];
	},
		
	exists : function(userName) {
		for(var i = 0; i < this.uGroup.length; i++) {
			if(userName == this.uGroup[i].name) return true;
		}
		return false;
	},
	
	length : function() {
		return this.uGroup.length;
	}
}

function TWorkUser(name, count, active) {
	this.name			= name;
	this.count			= count == undefined ? 0 : count;
	this.class_name		= "TWorkUser";
	this.chatForm		= null;
    this.is_active      = active;
    
    this.avatar			= null;
}

TWorkUser.prototype = {
	/* == == */
}
/* filename: /common/ChatClass/TWClient.js weight: 1*/
﻿// JavaScript Document

var pchat = function() { 
	var ajaxRequestUrl = wgServer + "/Special:TermWiki_Ajax?action=TWAjax&ClassName=TermWiki_Chat";	
	
	function ajaxRequest(params) {
		$.ajax({
			type 	: "POST",
			url  	: ajaxRequestUrl,
			data	: params,
			success	: pchat.client.AjaxCompleted
		});
	}

	function getKeyCode(e) {
		return e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
	}
	
	function htmlEncode(str) {   
		if(str == null || str.length == 0) return ""; 
		var s = str.toString();	
		s = s.replace(/&/g, "&amp;");   
		s = s.replace(/</g, "&lt;");   
		s = s.replace(/>/g, "&gt;");   
		s = s.replace(/\'/g, "&apos;");   
		s = s.replace(/\"/g, "&quot;");   
		return s;   
	}
	
	function htmlDecode(str) { 
		if(str == null || str.length == 0) return ""; 
		var s = str.toString();		
		s = s.replace(/&amp;/g, "&");   
		s = s.replace(/&lt;/g, "<");   
		s = s.replace(/&gt;/g, ">");   
		s = s.replace(/&apos;/g, "\'");   
		s = s.replace(/&quot;/g, "\"");   
		return s;   
	}
	
	function TWorkClient(id, name, timer, user) {
		this.id			= id;
		this.name		= name;
		this.interval 	= timer;
		this.timerU		= null;
		this.timerH		= null;
		this.userForm 	= new TWorkUserForm("userForm", user);
		this.users		= new TWorkUsers();
		this.leaveForm	= null;
		
		this.__init__	= false;
		this.__show__	= false;
		this.userName	= user;
	}
	
	TWorkClient.prototype = {
		
		/* ==== all ajax request completed process function ==== */
		AjaxCompleted : function(result) {
			var json = pchat.client.object_from_json(result);
			//pchat.client.debug(result);
			pchat.client.parse_json(json);
		},
		
		AjaxCompletedNo : function() {
			this.leaveForm.appendTalk('System Message', '', '<b style=\'color:#F00;\'>An error has occurred. Please try sending your message again.</b>');
		},
		
		object_from_json : function (str){
			var r = null;	
			var _text = str.replace(/\r/ig, "").replace(/\n/ig, "<br />"); 
			try {
				eval("r = " + _text + ";");
			}
			catch(e) {
				return null;
			}
			return r;
		},
		
	
		/* ==== From server return data is json format ==== */
		parse_json : function(oC) {
			console.debug("Command: " + oC);
			if(oC == null || oC.command  == null){
				pchat.client.AjaxCompletedNo;
				return ;
			}
			var requestCommand = oC.command; 
			
			switch(requestCommand) {
				case "send":
 					if(this.users.get(oC.to) != undefined){
						var oU = this.users.get(oC.to);
						oU.chatForm.updateTalk(oC);
					}
					break;
				case "get_Message":
					if(this.users.get(oC.user) != undefined){
						var oU = this.users.get(oC.user);
						oU.count = 0;
						pchat.client.userForm.update_user_list();
						oU.chatForm.updateTalks(oC);
					}
					break;
				case "getFriendAvatar":
                    if(this.users.get(oC.user) != undefined){
                        var oU = this.users.get(oC.user);
                        oU.chatForm.updateFriendAvatar(oC);
                    }
                    break;
                case "get_All_Message":
                    if(this.users.get(oC.user) != undefined){
                        var oU = this.users.get(oC.user);
                        oU.count = 0;
                        pchat.client.userForm.update_user_list();
                        oU.chatForm.updateTalks(oC);
                    }
                    break;
				case "getMyFirend":
					this.userForm.updateFirends(oC);
					break;
				case "Recently_Dynamic":
					console.debug("Command: Recently_Dynamic");
					this.userForm.updateDynamic(oC);
					break;
				case "getOnlineFriend":
					this.userForm.updateOnlineFriends(oC);
					break;
				case "Total_Message":
					this.userForm.updateUserMessages(oC);
					break;
				case "Lastest_Contact":
					this.userForm.update_contact(oC);
					break;
				case "getUserAvatar":
					this.userForm.updateUserAvatar(oC);
					break;
				case "send_Leave_Message":
					this.leaveForm.updateTalk(oC);
					break;
				case "get_Leave_Message":
					this.leaveForm.updateTalks(oC);
					break;
			}
		},
		
		debug : function(message) {
			$("#debugMessage").append(message + "<br />");
		},
		
		
		/* ==== send talk content ==== */
		send : function(command) {
			ajaxRequest(command); 
		},
		
		show : function(stype) {
			if(stype == "chatForm") {
				pchat.client.chatForm.show();
			}
			else {
				pchat.client.userForm.show();
			}
		},
		
		start : function() {
			this.userForm.start(this.userForm);
		},
		
		create : function(userName) {
			if(this.users.get(userName) != undefined) {
				var oU = this.users.get(userName);
				if(oU.chatForm == null) {
					oU.chatForm = new TWorkChatForm(userName, "Point"); 
					oU.chatForm.create();
				}
				oU.chatForm.show();
			}
		},
        
        createHistory : function(userName) {
            if(this.users.get(userName) != undefined){
                var oU = this.users.get(userName);
                if(oU.chatForm == null) {
                    oU.chatForm = new TWorkChatForm(userName, "Point");
                    oU.chatForm.loadHistory = true; 
                    oU.chatForm.create();
                }
                oU.chatForm.show();
            }
        },
		
		show_leave_message : function(from_UserName, to_UserName, cOptions) {
			if (typeof cOptions == 'undefined' || !cOptions) {
				var cOptions = {};
            }			

			if(from_UserName == null) {
				alert(twGetL10nString("chat_login_label"));
			}
			else {
				if(from_UserName == to_UserName) {
					alert(twGetL10nString("chat_no_yourself_label"));
					return;	
				}

				if(this.leaveForm == null) {
				   this.leaveForm = new TWorkMessageForm("MessageForm", from_UserName, to_UserName, "Point", cOptions);
				   this.leaveForm.create();
				}
				this.leaveForm.show();
			}
		},
		
		setup : function() {
			if(this.__init__) return;
			console.log(this.__init__);
			console.log("client.create");
			this.userForm.create();
			this.start();
			this.__init__ = true;
		}
	}

	return {
		init : function() {
			this.initChat();
			this.initLeaveMessage();
		},
		
		//Chat
		initChat : function() {
			var loginUser = $("#pt-userpage b").html();
			console.debug("Login User:" + loginUser);
			this.client = new TWorkClient(0, "userForm", 4000, loginUser);
			$("#pt-message a").attr("href", "javascript:;");

			var chat = this;
			$("#pt-message").bind("click", function() { 
				chat.client.setup();
				chat.client.show(''); 
			});
		},
		
		//Leave Message
		initLeaveMessage : function() {
            var argName = "to";
            var toUserName = null;
            var tUser = null;
            var args = $("#leave-message-id a").attr("href");

			if(args == undefined) return;
			
            $("#leave-message-id a").attr("href", "javascript:;");
            var reg = new RegExp('[\?&]?' + argName + '=([^&]*)[&$]?', 'gi');
            var chk = args.match(reg);

            if(chk){
                tUser = RegExp.$1;
            }
            else return;
            
            tUser = tUser.toString();
            toUserName = tUser.replace(/\+/g, " ");

            if(toUserName != null || toUserName != undefined) {
            	if(document.getElementById("leave-message-id") != undefined || document.getElementById("leave-message-id") != null) {
					document.getElementById("leave-message-id").onclick = function() {
						pchat.client.show_leave_message(wgUserName, toUserName);
					}
				}
			}
		},
		
		//User Actitivity
		initFirendActitivity : function() {
			//
		}
	}
}();


/* === $(document).ready(function(){}); 简写=== */
$(function() {
	pchat.init();
});
/* filename: /common/floatbox/floatbox2.js weight: 1*/
/***********************************************************
* Floatbox v3.54.csoft
* February 23, 2010
*
* Copyright (c) 2008-2010 Byron McGregor
* Website: http://cd.com/floatbox
* This release is licensed for deployment and use only with
*   the CSoft International TermWiki application.
* All other distribution and use is forbidden.
* This comment block must be retained in all deployments.
***********************************************************/
function Floatbox(){this.defaultOptions={licenseKey:"rrxIfJFvrrhDv5A@f5JLu6xvrqZ4qJJBspBxvK5BqJITrZNvT",padding:24,panelPadding:8,overlayOpacity:55,shadowType:"drop",shadowSize:12,roundCorners:"all",cornerRadius:12,roundBorder:1,outerBorder:4,innerBorder:1,autoFitImages:true,resizeImages:true,autoFitOther:false,resizeOther:false,resizeTool:"cursor",captionPos:"bl",caption2Pos:"tc",infoLinkPos:"bl",printLinkPos:"bl",newWindowLinkPos:"tr",itemNumberPos:"bl",indexLinksPos:"br",controlsPos:"br",centerNav:false,colorImages:"black",colorHTML:"white",colorVideo:"blue",boxLeft:"auto",boxTop:"auto",enableDragMove:false,stickyDragMove:true,enableDragResize:false,stickyDragResize:true,draggerLocation:"frame",minContentWidth:140,minContentHeight:100,centerOnResize:true,titleAsCaption:true,showItemNumber:true,showClose:true,showNewWindowIcon:true,closeOnNewWindow:false,cacheAjaxContent:false,hideObjects:true,hideJava:true,disableScroll:false,randomOrder:false,printCSS:"",preloadAll:true,autoGallery:false,autoTitle:"",language:"auto",graphicsType:"auto",doAnimations:true,resizeDuration:3.5,imageFadeDuration:3,overlayFadeDuration:4,startAtClick:true,zoomImageStart:true,liveImageResize:true,splitResize:"no",cycleInterval:5,cycleFadeDuration:4.5,navType:"both",navOverlayWidth:35,navOverlayPos:30,showNavOverlay:"never",showHints:"once",enableWrap:true,enableKeyboardNav:true,outsideClickCloses:true,imageClickCloses:false,numIndexLinks:0,showIndexThumbs:true,maxIndexThumbSize:0,doSlideshow:false,slideInterval:4.5,endTask:"exit",showPlayPause:true,startPaused:false,pauseOnPrev:true,pauseOnNext:false,pauseOnResize:true};this.childOptions={padding:16,overlayOpacity:45,resizeDuration:3,imageFadeDuration:3,overlayFadeDuration:0};this.customPaths={installBase:stylepath+"/common/floatbox/",jsModules:"",cssModules:"",languages:"",graphics:""};this.aJ()}
//
Floatbox.prototype={version:"sb.3.54.4",bj:"floatbox",bR:20,aI:16,W:12,y:60,cz:1600,cZ:1,z:8,bt:50,F:5,cE:750,f:5,bp:120,bu:70,S:"85%",R:"82%",aJ:function(){var e=this;e.U=document;e.V=e.U.documentElement;e.aB=e.U.getElementsByTagName("head")[0];e.j=e.U.getElementsByTagName("body")[0];e.getGlobalOptions();e.I=[];e.bK=[];e.aD=[];e.cN={};e.bW={};var c=navigator.userAgent,a=navigator.appVersion;e.db=a.indexOf("Macintosh")!==-1;e.cG=1;if(window.opera){e.opera=true;e.dc=parseFloat(a)<9.5;if(e.dc){e.cG=1.5}}else{if(document.all){e.ie=true;var g=e.U.createElement("div");g.innerHTML='<!--[if gte IE 8]><div id="fb_ieNew"></div><![endif]--><!--[if lt IE 7]><div id="fb_ieOld"></div><![endif]-->';e.dd=!!g.firstChild&&g.firstChild.id==="fb_ieNew";e.de=!!g.firstChild&&g.firstChild.id==="fb_ieOld";e.df=parseInt(a.substring(a.indexOf("Windows NT")+11),10)<6;e.cG=e.dd?1.9:1.2}else{if(c.indexOf("Firefox")!==-1){e.ff=true;e.dg=parseInt(c.substring(c.indexOf("Firefox")+8),10)<3;e.dh=!e.dg;e.di=e.db}else{if(a.indexOf("WebKit")!==-1){e.dj=true;e.dk=e.db}else{if(c.indexOf("SeaMonkey")!==-1){e.dm=true}}}}}e.m=(navigator.language||navigator.userLanguage||navigator.systemLanguage||navigator.m||"en").substring(0,2);e.aQ=!!self.fb;if(!e.aQ){e.parent=e.lastChild=e;e.anchors=[];e.children=[];e.bV=[];e.cycleDivs=[];e.bX={};e.h=(location.protocol+"//"+location.host).toLowerCase();var f=function(i){return i},d=function(i){return i&&e.doAnimations&&e.resizeDuration};e.modules={enableKeyboardNav:{files:["keydownHandler.js"],test:f},enableDragMove:{files:["mousedownHandler.js"],test:f},enableDragResize:{files:["mousedownHandler.js"],test:f},centerOnResize:{files:["resizeHandler.js"],test:f},zoomImageStart:{files:["zoomInOut.js"],test:d},loaded:{}};e.aO=e.customPaths.installBase||e.bQ.installBase||e.as("script","src",/(.*)floatbox.js(?:\?|$)/i)||e.as("link","href",/(.*)floatbox.css(?:\?|$)/i)||"/floatbox/";e.jsModulesFolder=e.customPaths.jsModules||e.bQ.jsModules||e.aO+"modules/";e.cssModulesFolder=e.customPaths.cssModules||e.bQ.cssModules||e.aO+"modules/";e.be=e.customPaths.languages||e.bQ.languages||e.aO+"languages/";e.at=e.customPaths.graphics;if(!e.at){var b,g=e.U.createElement("div");g.id="fbPathChecker";e.j.appendChild(g);if((b=/(?:url\()?["']?(.*)blank.gif["']?\)?$/i.exec(e.getStyle(g,"background-image")))){e.at=b[1]}e.j.removeChild(g);delete g;if(!e.at){e.at=(e.as("link","href",/(.*)floatbox.css(?:\?|$)/i)||"/floatbox/")+"graphics/"}}e.co=e.getStyle(e.j,"direction")==="rtl"||e.getStyle(e.V,"direction")==="rtl"}else{e.parent=fb.lastChild;fb.lastChild=e;fb.children.push(e);e.anchors=fb.anchors;e.bV=fb.bV;e.cycleDivs=fb.cycleDivs;e.bX=fb.bX;e.modules=fb.modules;e.jsModulesFolder=fb.jsModulesFolder;e.cssModulesFolder=fb.cssModulesFolder;e.be=fb.be;e.at=fb.at;e.strings=fb.strings;e.co=fb.co;if(e.parent.aS){e.parent.pause(true)}}var h=e.at;e.cl=h+"magnify_plus.cur";e.ch=h+"magnify_minus.cur";e.bL=h+"404.jpg";e.blank=h+"blank.gif";e.zIndex={h:90000+(e.aQ?12*fb.children.length:0),fbOverlay:1,fbBox:2,fbCanvas:3,fbContent:4,fbMainLoader:5,fbLeftNav:6,fbRightNav:6,fbOverlayPrev:7,fbOverlayNext:7,fbResizer:8,fbtlPanel:9,fbtrPanel:9,fbblPanel:9,fbbrPanel:9,fbDragger:10,fbZoomDiv:11};var b=/\bautoStart=(.+?)(?:&|$)/i.exec(location.search);e.g=b?b[1]:false},tagAnchors:function(c){var b=this;c=fb$(c)||document;function a(e){var g=c.getElementsByTagName(e);for(var f=0,d=g.length;f<d;f++){b.cM(g[f],false)}}a("a");a("area");b.ap("core.js");b.aq(b.defaultOptions,true);b.aq(b.bQ,false);if(b.de){b.ap("ieOld.js")}},cM:function(k,n){var p=this,b=!!k.getAttribute,m;if(b){var o={href:k.getAttribute("href")||"",rev:k.getAttribute("data-fb-options")||k.getAttribute("rev")||"",rel:k.getAttribute("rel")||"",title:k.getAttribute("title")||"",className:k.className||"",ownerDoc:k.ownerDocument,anchor:k,thumb:(k.getElementsByTagName("img")||[])[0]}}else{var o=k;o.anchor=o.thumb=o.ownerDoc=false}if((m=new RegExp("(?:^|\\s)"+p.bj+"(\\S*)","i").exec(o.className))){o.tagged=true;if(m[1]){o.group=m[1]}}if(p.autoGallery&&!o.tagged&&o.rel!=="nofloatbox"&&(!o.className||o.className.indexOf("nofloatbox")===-1)&&p.ag(o.href)==="img"){o.tagged=true;o.group=".autoGallery";if(p.autoTitle&&!o.title){o.title=p.autoTitle}}if(!o.tagged){if((m=/^(?:floatbox|gallery|iframe|slideshow|lytebox|lyteshow|lyteframe|lightbox)(.*)/i.exec(o.rel))){o.tagged=true;o.group=m[1];if(/^(slide|lyte)show/i.test(o.rel)){o.rev+=" doSlideshow:true"}else{if(/^(i|lyte)frame/i.test(o.rel)){o.rev+=" type:iframe"}}}}if(n!==false){o.tagged=true}if(o.tagged){o.options={};if(window.fbClassOptions){var h=/(?:^|\s)(\S+)(?:\s|$)/g,m;h.lastIndex=0;while((m=h.exec(o.className))){if(fbClassOptions[m[1]]){p.bS(fbClassOptions[m[1]],o.options)}h.lastIndex--}}p.bS(o.rev,o.options);o.href=p.decodeHTML(o.options.href||o.href||"");o.group=o.options.group||o.group||"";if(!(o.href||o.html)&&o.options.showThis!==false){return}o.level=fb.children.length+(fb.lastChild.fbBox&&!o.options.sameBox?1:0);var j=p.anchors.length;while(j--){var l=p.anchors[j];if(l.href===o.href&&l.rev===o.rev&&l.rel===o.rel&&l.title===o.title&&l.html===o.html&&l.level===o.level&&(o.level||l.anchor===o.anchor||(o.ownerDoc&&o.ownerDoc!==p.U))){l.anchor=o.anchor;l.thumb=o.thumb;o=l;break}}if(j===-1){if(o.options.type){o.options.type=o.options.type.replace(/^(flash|quicktime|wmp|silverlight)$/i,"media:$1");if(o.options.type==="image"){o.options.type="img"}}if(o.html){o.type="direct"}else{o.type=o.options.type||p.ag(o.href)}if(o.type==="html"){o.type="iframe";if((m=/#([A-Za-z]\S*)/.exec(o.href))){var d=m[1];if(o.ownerDoc){o.cF=o.ownerDoc.getElementById(d)}var j=fb.children.length;while(j--&&!o.cF){var e=fb.children[j];if(e.fbContent&&e.fbContent.nodeName==="IFRAME"&&!p.aU(e.fbContent.src)){var g=p.getIframeDocument(e.fbContent);if(g){o.cF=g.getElementById(d)}}}if(fb.fbContent&&fb.fbContent.nodeName==="IFRAME"&&!p.aU(fb.fbContent.src)){var g=p.getIframeDocument(fb.fbContent);if(g){o.cF=g.getElementById(d)}}if(!o.cF){o.cF=p.U.getElementById(d)||fb$(d)}if(o.cF){o.type="inline"}}}p.anchors.push(o);p.aq(o.options,false);if(o.type.indexOf("media")===0){p.ap("mediaHTML.js")}if(p.g){if(o.options.showThis!==false&&p.g===o.href.substring(o.href.length-p.g.length)){p.autoStart=o}}else{if(o.options.autoStart===true){p.autoStart=o}else{if(o.options.autoStart==="once"){var m=/fbAutoShown=(.+?)(?:;|$)/.exec(document.cookie),f=m?m[1]:"",c=escape(o.href);if(f.indexOf(c)===-1){p.autoStart=o;document.cookie="fbAutoShown="+f+c+"; path=/"}}}}if(p.de&&o.anchor){o.anchor.hideFocus="true"}}if(b){k.onclick=function(i){if(!i){var a=this.ownerDocument;i=a&&a.parentWindow&&a.parentWindow.event}if(!(i&&(i.ctrlKey||i.metaKey||i.shiftKey||i.altKey))||o.options.showThis===false||!/img|iframe/.test(o.type)){p.start(this);return p.stopEvent(i)}}}}if(n===true){return o}},ag:function(b){if(!b){return"html"}var f=b,e=f.indexOf("?"),a="",d,g={youtube:/\.com\/(watch\?v=|watch\?(.+)&v=|v\/[\w\-]+)/,"video.yahoo":/\.com\/watch\/\w+\/\w+/,dailymotion:/\.com\/swf\/\w+/,vimeo:/\.com\/\w+/};if(e!==-1){f=f.substring(0,e)}a=f.substring(f.lastIndexOf(".")+1).toLowerCase();if(/^(jpe?g|png|gif|bmp)$/.test(a)){return"img"}if(/^(html?|php[1-9]?|aspx?)$/.test(a)){return"html"}if(a==="swf"){return"media:flash"}if(a==="xap"){return"media:silverlight"}if(/^(mov|mpe?g|movie|3gp|3g2|m4v|mp4|qt)$/.test(a)){return"media:quicktime"}if(/^(wmv?|avi|asf)$/.test(a)){return"media:wmp"}if((d=/^(?:http:)?\/\/(?:www.)?([a-z\.]+)\.com\//i.exec(f))&&d[1]){var c=d[1].toLowerCase();if(g[c]&&g[c].test(b)){return"media:flash"}}return"html"},getGlobalOptions:function(){var c=this;if(!c.aQ){c.ct(c.defaultOptions);if(typeof setFloatboxOptions==="function"){setFloatboxOptions()}c.bQ=c.typeOf(self.fbPageOptions)==="object"?fbPageOptions:{}}else{for(var b in c.defaultOptions){if(c.defaultOptions.hasOwnProperty(b)){c[b]=c.parent[b]}}c.ct(c.childOptions);c.bQ={};for(var b in c.parent.bQ){if(c.parent.bQ.hasOwnProperty(b)){c.bQ[b]=c.parent.bQ[b]}}if(c.typeOf(self.fbChildOptions)==="object"){for(var b in fbChildOptions){if(fbChildOptions.hasOwnProperty(b)){c.bQ[b]=fbChildOptions[b]}}}}c.ct(c.bQ);if(c.bQ.enableCookies){var a=/fbOptions=(.+?)(;|$)/.exec(document.cookie);if(a){c.ct(c.bS(a[1]))}}if(c.bQ.enableQueryStringOptions||(location.search&&location.search.indexOf("enableQueryStringOptions=true")!==-1)){c.ct(c.bS(location.search.substring(1)))}},bS:function(h,b){var l=this;if(!h){return{}}var g=[],e,c=/`([^`]*?)`/g;c.lastIndex=0;while((e=c.exec(h))){g.push(e[1])}if(g.length){h=h.replace(c,"``")}h=h.replace(/\s*[:=]\s*/g,":");h=h.replace(/\s*[;&]\s*/g," ");h=h.replace(/^\s+|\s+$/g,"");h=h.replace(/(:\d+)px\b/gi,function(i,m){return m});b=b||{};var f=h.split(" "),d=f.length;while(d--){var k=f[d].split(":"),a=k[0],j=k[1];if(typeof j==="string"){if(!isNaN(j)){j=+j}else{if(j==="true"){j=true}else{if(j==="false"){j=false}}}}if(j==="``"){j=g.pop()||""}b[a]=j}return b},ct:function(d){var b=this;for(var a in d){if(b.defaultOptions.hasOwnProperty(a)){if(a==="licenseKey"){var c=window.fb||b;c.licenseKey=c.licenseKey||d[a]}else{b[a]=d[a]}}}},ap:function(e){var d=this;if(d.modules.loaded[e]){return}if(e.slice(-3)===".js"){var b="script",a={type:"text/javascript",src:(e.indexOf("licenseKey")===-1?d.jsModulesFolder:d.aO)+e}}else{var b="link",a={rel:"stylesheet",type:"text/css",href:d.cssModulesFolder+e}}var f=d.U.createElement(b);for(var c in a){if(a.hasOwnProperty(c)){f.setAttribute(c,a[c])}}d.aB.appendChild(f);d.modules.loaded[e]=true},aq:function(c,g){var f=this;for(var b in c){if(f.modules.hasOwnProperty(b)){var e=f.modules[b],h=g?f[b]:c[b],a=0,d=e.files.length;while(d--){if(e.test(h)){f.ap(e.files[d]);a++}}if(a===e.files.length){delete f.modules[b]}}}},getStyle:function(c,f){if(!((c=fb$(c))&&f)){return}if(window.getComputedStyle){f=f.replace(/([A-Z])/g,"-$1").toLowerCase();var a=c.ownerDocument&&(c.ownerDocument.defaultView||c.ownerDocument.parentWindow);return(a&&a.getComputedStyle&&a.getComputedStyle(c,"").getPropertyValue(f))||""}f=f.replace(/-(\w)/g,function(g,h){return h.toUpperCase()});if(c.currentStyle){var e=c.currentStyle[f]||"";if(/^[\.\d]+[^\.\d]/.test(e)&&!/^\d+px/i.test(e)){var b=c.ownerDocument,d=b.createElement("div");b.body.appendChild(d);d.style.left=e;e=d.style.pixelLeft+"px";b.body.removeChild(d)}return e}return c.style&&c.style[f]},as:function(b,a,g){var c,e=document.getElementsByTagName(b),d=e.length;while(d--){if((c=g.exec(e[d][a]))){var f=c[1].replace("compressed/","");return f||"./"}}return""},addEvent:function(b,c,a){if(!(b=fb$(b))){return}if(b.addEventListener){b.addEventListener(c,a,false)}else{if(b.attachEvent){b.attachEvent("on"+c,a)}else{b["prior"+c]=b["on"+c];b["on"+c]=a}}},removeEvent:function(b,c,a){if(!(b=fb$(b))){return}if(b.removeEventListener){b.removeEventListener(c,a,false)}else{if(b.detachEvent){b.detachEvent("on"+c,a)}else{b["on"+c]=b["prior"+c];delete b["prior"+c]}}},stopEvent:function(b){b=b||window.event;if(b){if(b.stopPropagation){b.stopPropagation()}if(b.preventDefault){b.preventDefault()}try{b.cancelBubble=true}catch(a){}try{b.returnValue=false}catch(a){}}return false},getElementsByClassName:function(f,e){e=fb$(e)||document.getElementsByTagName("body")[0];var c=[];if(e.getElementsByClassName){var h=e.getElementsByClassName(f),b=h.length;while(b--){c[b]=h[b]}}else{var g=new RegExp("(^|\\s)"+f+"(\\s|$)"),d=e.getElementsByTagName("*");for(var b=0,a=d.length;b<a;b++){if(g.test(d[b].className)){c.push(d[b])}}}return c},typeOf:function(a){var b=typeof a;if(b==="object"){if(a===null){b="null"}else{if(typeof a.length==="number"&&typeof a.splice==="function"&&!a.propertyIsEnumerable("length")){b="array"}}}return b},encodeHTML:function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},decodeHTML:function(b){var a=b.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&");return a.replace(/&#(\d+);/g,function(c,d){return String.fromCharCode(+d)})},setInnerHTML:function(a,f){if(!(a=fb$(a))){return false}try{a.innerHTML=f;return true}catch(j){}try{var c=a.ownerDocument,g=c.createRange();g.selectNodeContents(a);g.deleteContents();if(f){var b=new DOMParser().parseFromString('<div xmlns="http://www.w3.org/1999/xhtml">'+f+"</div>","application/xhtml+xml;charset=utf-8"),k=b.documentElement.childNodes;for(var d=0,h=k.length;d<h;d++){a.appendChild(c.importNode(k[d],true))}}return true}catch(j){}return false},getOuterHTML:function(a){if(!(a=fb$(a))){return""}if(a.outerHTML){return a.outerHTML}var b=(a.ownerDocument||a.document).createElement("div");b.appendChild(a.cloneNode(true));return b.innerHTML},getIframeDocument:function(b){var a=fb.lastChild;if(!b&&a.G&&a.G.type==="iframe"){b=a.fbContent}if(b&&b.getAttribute){try{return b.contentDocument||(b.contentWindow&&b.contentWindow.document)}catch(c){}}return false},getIframeWindow:function(b){var a=fb.lastChild;if(!b&&a.G&&a.G.type==="iframe"){b=a.fbContent}if(b&&b.getAttribute){try{return b.contentWindow||(b.contentDocument&&b.contentDocument.defaultView)}catch(c){}}return false},aU:function(a){if(a&&a.indexOf("//")===0){a=location.protocol+a}return/https?:\/\/\w/i.test(a)&&a.toLowerCase().indexOf(fb.h)!==0},start:function(a){var b=this;setTimeout(function(){b.start(a)},100)},preload:function(a,c){var b=this;setTimeout(function(){b.preload(a,c)},250)},K:function(b){var a=this;setTimeout(function(){a.K(b)},250)},bs:function(b,e,d,a,f){var c=this;setTimeout(function(){c.bs(b,e,d,a,f)},100)},ajax:function(b){var a=this;setTimeout(function(){a.ajax(b)},100)}};
var fb$=function(a){return(typeof a==="string"?(document.getElementById(a)||null):a)};
var fb;function initfb(){if(arguments.callee.done){return}var a="self";if(true){if(self!==parent){try{if(self.location.host===parent.location.host&&self.location.protocol===parent.location.protocol){a="parent"}}catch(c){}if(a==="parent"&&!parent.fb){return setTimeout(arguments.callee,50)}}}arguments.callee.done=true;if(document.compatMode==="BackCompat"){alert("Floatbox does not support quirks mode.\nPage needs to have a valid doctype declaration.");return}fb=(a==="self"?new Floatbox():parent.fb);var b=self.document.getElementsByTagName("body")[0];fb.anchorCount=b.getElementsByTagName("a").length;fb.tagAnchors(b)}

(function(){function b(){initfb();if(!(self.fb&&self.fb.strings)){return setTimeout(arguments.callee,100)}var d=self.document.getElementsByTagName("body")[0],c=d.getElementsByTagName("a").length;if(c>fb.anchorCount){fb.tagAnchors(d)}if(fb.autoStart){if(fb.autoStart.ownerDoc===self.document){fb.setTimeout("start",function(){fb.start(fb.autoStart)},100)}}else{setTimeout(function(){if(fb.bX.count===fb.undefined){fb.preload("",true)}},200)}}if(window.addEventListener){window.addEventListener("load",b,false)}else{if(window.attachEvent){window.attachEvent("onload",b)}else{var a=window.onload;window.onload=function(){if(typeof a==="function"){a()}b()}}}})();

if(document.addEventListener){document.addEventListener("DOMContentLoaded",initfb,false)};

(function(){/*@cc_on try{document.body.doScroll('left');return initfb();}catch(e){}/*@if (false) @*/if(/loaded|complete/.test(document.readyState))return initfb();/*@end @*/if(!initfb.done)setTimeout(arguments.callee,30);})();

/* filename: /common/tmspublic.js weight: 1*/
/**
 * Some public functions
 *
 * @author Louis Liu <wllouis@gmail.com>
 * @copyright CSOFT INTERNATIONAL, LTD.
 */

function allOrNull(o,str)
{
	//alert(str);
	if (o.checked)
	{
		//$("#newid").val('checked');
		$(":checkbox[name^='" + str + "']").each(function(){
			//alert($(this));
	   		if (!$(this).attr('checked'))
	   		{
	   			$(this).attr('checked',true);
	   		}
	   		
	 	});
	}
	else
	{
		//$("#newid").val('false');
		$(":checkbox[name^='" + str + "']").each(function(){
			//alert($(this));
	   		if ($(this).attr('checked'))
	   		{
	   			$(this).attr('checked',false);
	   		}
	   		
	 	});
	} 	
}

function lwPreloadImg(image) {
    var img = new Image();
    img.src = image;
}
  
function lwMaskScreen(){
    var content = '<div style="background:white;text-align:center;padding:50px 0;"><img src="' + stylepath + '/common/images/runing.gif" alt="Loading..." /></div>';
    $.nyroModalManual({
      //bgColor: '#3333cc',
      modal:true,
      minWidth: 300, // Minimum width
  	  //minHeight: 220, // Minimum height
      content: content
    });
    return false;
}

function lwGoToUrl(url)
{
	window.location.href = url;
}

function lwHideBlock(el){
	el.hide();
}
/* filename: /common/ext_project/twproject.js weight: 1*/
/**
 * For project module 
 *
 * @author Louis Liu <wllouis@gmail.com>
 * @copyright CSOFT INTERNATIONAL, LTD.
 */

var TWProject = {
	fullPageName: '',
	url: '',
	loadingImg: '',
	holder: '',
	dialog_holder: '',
	setUrl: function(value){
		this.url = value;
	},
	setLoadingImg: function(src){
		this.loadingImg = "<img src=\"" + src +"\" alt=\"Loading...\" />";
	},
	setFullPageName: function(value){
		this.fullPageName = value;
	},
	doAction: function(act){
		$("#ctact").val(act);
		var f = $("#opform")[0];
		//var fpname = $("#fullpagename").val();
		var fpname = this.fullPageName;
		
		var data = {ctact:act, fullpagename:fpname};
		this.doAjax(this.url, data);
		
	},
	doAjax: function(url,data){
		$.ajax({
		   type: "POST",
		   url: url,
		   data: data,
		   beforeSend: function(){
		   	    TWProject.holder.html(TWProject.loadingImg);
			   	
		   },
		   success: function(response){
		       //alert( "Data Saved: " + msg );
		       if ('successfully' == response)
		       {
		       	   self.location.href = wgArticlePath.replace("$1",wgPageName);
		       }
		       else
		       {
		       	   TWProject.holder.html(response);
		       }
		   }
		});
	},
	showDialog: function(html,set)
	{
		var dialog_holder = $("#dialogwindow");
		if(html && dialog_holder){
			this.dialog_holder = dialog_holder;
			dialog_holder.html(html);
			dialog_holder.dialog(set);
		}
	},
	getAjaxUrl: function(func_name){
		var uri;
		uri = wgServer +
			((wgScript == null) ? (wgScriptPath + "/index.php") : wgScript) +
			"?action=ajax";
		if (uri.indexOf("?") == -1)
			uri = uri + "?rs=" + encodeURIComponent(func_name);
		else
			uri = uri + "&rs=" + encodeURIComponent(func_name);
		return uri;
	},
	makeUserInfo: function(func_name,dom){
		if (!dom) return;
		if (!func_name) return;
		var data = {fullpagename:this.fullPageName};
		$.ajax({
		   type: "POST",
		   url: this.getAjaxUrl(func_name),
		   data: data,
		   beforeSend: function(){
		   	    dom.html(TWProject.loadingImg);
		   },
		   success: function(response){
		       dom.html(response);
			 $("a.starlink").each(function(){
					$(this).cluetip({
						local:true,
						hideLocal: true,
						width: 360,
						sticky: true,
						activation: "click",
						dropShadow: true, 
						//cluetipClass: "rounded", 
						closeText: '<img src="' + stylepath + '/common/imgs/cross.gif" alt="close" title="close" />', 
						showTitle: false
					});
					return true;
			});
		   }
		});
	},
	makeForm: function(dom){
		if (!dom) return;
		//return;
		this.holder = dom;
		var data = {fullpagename:this.fullPageName};
		this.doAjax(this.url, data);
	},
	refreshField: function(Id, sProperty){
	    var oId = $(Id);
	    if(oId){
	        oId.attr('disabled', true);
	        var randomId = randomString('abcdefghijklmnopqrstuvwxyz');
	        $(Id).after('<img id="' + randomId + '" src="/skins/common/termimg/loading.gif" />');
	
	        $.get("/Special:TermWiki_Ajax",{ action: "getAllInProperty", Property:sProperty, anticache:Math.floor(Math.random()*1000)},
	            function(data){
	                TWProject.createOption(Id, data, $(Id).val());
	                //oId.disabled = false;
	                oId.attr('disabled', false);
	                $("#" + randomId).remove();
	  
	              },'json');
	   }
	},
	refreshSubField: function(Parent, Id, sProperty, sSubProperty, callback){
	    var oParent= $(Parent);
	    var oId    = $(Id);
	    var subVal = $(Id).val();			
	    var s      = [];
	    if(oId){
	        if(oParent){
	            s = $(Parent).val();
	            if(s){
	               oId.attr('disabled', true);
	        	   var randomId = randomString('abcdefghijklmnopqrstuvwxyz');
	               $(Id).after('<img id="' + randomId + '" src="/skins/common/termimg/loading.gif" />')
	            if(sSubProperty == "State")
                {
                                   $.get("/Special:TermWiki_Ajax",{action: "getSubProperty",SubProperty:sSubProperty, Property:sProperty, PropertyValue:s, anticache:Math.floor(Math.random()*1000)},
            function(data){
                if(sSubProperty == "Product_Category"){
                    TWProject.createOption(Id, data, subVal);
                    oId.attr('disabled', false);
                    $("#" + randomId).remove();
    
                }else if(sSubProperty == "Product"){
    
                    TWProject.createOption(Id, data);
                    oId.attr('disabled', false);
                    $("#" + randomId).remove();
                }
                else if(sSubProperty == "State")
                {
                    TWProject.createOption(Id, data, subVal);
                    oId.attr('disabled', false);
                    $("#" + randomId).remove();
                }  
				if(callback && typeof(callback) == 'function')
					callback();
             },'json');
                }
                else
                {  
                    var s_value = null;
                    if($.isArray(s))
                    {
                      s_value = s.join(";");
                    }
                    else
                    {
                      s_value = s;
                    }
                                   $.get("/Special:TermWiki_Ajax",{action: "getSubProperty",SubProperty:sSubProperty, Property:sProperty, PropertyValue:s_value, anticache:Math.floor(Math.random()*1000)},
            function(data){
                if(sSubProperty == "Product_Category"){
                    TWProject.createOption(Id, data, subVal);
                    oId.attr('disabled', false);
                    $("#" + randomId).remove();
    
                }else if(sSubProperty == "Product"){
    
                    TWProject.createOption(Id, data);
                    oId.attr('disabled', false);
                    $("#" + randomId).remove();
                }
                else if(sSubProperty == "State")
                {
                    TWProject.createOption(Id, data, subVal);
                    oId.attr('disabled', false);
                    $("#" + randomId).remove();
                }  
				callback();
             },'json');
                }
	            }
	
	        }
	    }
	    
	},
        refreshSubField1: function(Parent, Id, sProperty, sSubProperty, callback){
        var oParent= $(Parent);
        var oId    = $(Id);
        var subVal = $(Id).val();            
        var s      = [];
        if(oId){
            if(oParent){
                s = $(Parent).val();
                if(s){
                   oId.attr('disabled', true);
                   var randomId = randomString('abcdefghijklmnopqrstuvwxyz');
                   $(Id).after('<img id="' + randomId + '" src="/skins/common/termimg/loading.gif" />')
                if(sSubProperty == "State")
                {
                                   $.get("/Special:TermWiki_Ajax",{action: "getSubProperty",SubProperty:sSubProperty, Property:sProperty, PropertyValue:s, anticache:Math.floor(Math.random()*1000)},
            function(data){
                if(sSubProperty == "Product_Category"){
                    TWProject.createOption1(Id, data, subVal);
                    oId.attr('disabled', false);
                    $("#" + randomId).remove();
    
                }else if(sSubProperty == "Product"){
    
                    TWProject.createOption1(Id, data);
                    oId.attr('disabled', false);
                    $("#" + randomId).remove();
                }
                else if(sSubProperty == "State")
                {
                    TWProject.createOption1(Id, data, subVal);
                    oId.attr('disabled', false);
                    $("#" + randomId).remove();
                }  
                if(callback && typeof(callback) == 'function')
                    callback();
             },'json');
                }
                else
                {  
                    var s_value = null;
                    if($.isArray(s))
                    {
                      s_value = s.join(";");
                    }
                    else
                    {
                      s_value = s;
                    }
                                   $.get("/Special:TermWiki_Ajax",{action: "getSubProperty",SubProperty:sSubProperty, Property:sProperty, PropertyValue:s_value, anticache:Math.floor(Math.random()*1000)},
            function(data){
                if(sSubProperty == "Product_Category"){
                    TWProject.createOption1(Id, data, subVal);
                    oId.attr('disabled', false);
                    $("#" + randomId).remove();
    
                }else if(sSubProperty == "Product"){
    
                    TWProject.createOption1(Id, data);
                    oId.attr('disabled', false);
                    $("#" + randomId).remove();
                }
                else if(sSubProperty == "State")
                {
                    TWProject.createOption1(Id, data, subVal);
                    oId.attr('disabled', false);
                    $("#" + randomId).remove();
                }  
                callback();
             },'json');
                }
                }
    
            }
        }
        
    },
	createOption: function(sId, data,sInitialProductCategory){ 
	    var sOption = "" ;
	    /*
	    for(var i=0;i<data.length;i++){
	        var textLength = data[i].length - 1;
	        var noSub ="";
	        if(data[i].charCodeAt(textLength) > 8320)
	        {
	              if(data[i].charCodeAt(textLength) < 8330)
	              {
	                   noSub = data[i].substr(0,textLength-1);
	              }
	        }
	        else
	        {
	              noSub = data[i];
	        }
	        var selected = false;
	        if (sInitialProductCategory)
	        {
	        	var to = typeof(sInitialProductCategory);
	        	to = to.toLowerCase();
	        	//alert(to);
	        	if ('array' == to || 'object' == to){
	        		for(var j=0; j< sInitialProductCategory.length; j++){
		        		if (sInitialProductCategory[j] == data[i]){
		        			selected = true;
		        		}
		        	}
        			
	        	}else{
	        		if (sInitialProductCategory == data[i]){
	        			selected = true;
	        		}
	        	}
	        	
	        }
	        if(selected) 
	        	sOption += '<option value="' + data[i] + '" selected="selected">' + noSub + '</option>'; 
	        else
	        	sOption += '<option value="' + data[i] + '">' + noSub + '</option>';           
	    }
	    */
	    for(var key in data){
	             var option_value = data[key];
	        var textLength = option_value.length - 1;
	        var noSub ="";
	        if(option_value.charCodeAt(textLength) > 8320)
	        {
	              if(option_value.charCodeAt(textLength) < 8330)
	              {
	                   noSub = option_value.substr(0,textLength-1);
	              }
	              else
	              {
	              	      noSub = option_value;
	              }
	        }
	        else
	        {
	              noSub = option_value;
	        }
	        var selected = false;
	        if (sInitialProductCategory)
	        {
	        	var to = typeof(sInitialProductCategory);
	        	to = to.toLowerCase();
	        	//alert(to);
	        	if ('array' == to || 'object' == to){
	        		for(var j=0; j< sInitialProductCategory.length; j++){
		        		if (sInitialProductCategory[j] == key){
		        			selected = true;
		        		}
		        	}
        			
	        	}else{
	        		if (sInitialProductCategory == key){
	        			selected = true;
	        		}
	        	}
	        	
	        }
	        //noSub  = decodeURI(noSub);
	        if(selected) 
	        	sOption += '<option value="' + key + '" selected="selected">' + noSub  + '</option>'; 
	        else
	        	sOption += '<option value="' + key + '">' + noSub + '</option>';           
	    }

	    if($(sId)){
	        $(sId).html(sOption);
	    }  
	},
    createOption1: function(sId, data,sInitialProductCategory){ 
        var sOption = '<option value="all" selected="selected">Select all product categories</option>' ;
        for(var key in data){
                 var option_value = data[key];
            var textLength = option_value.length - 1;
            var noSub ="";
            if(option_value.charCodeAt(textLength) > 8320)
            {
                  if(option_value.charCodeAt(textLength) < 8330)
                  {
                       noSub = option_value.substr(0,textLength-1);
                  }
                  else
                  {
                            noSub = option_value;
                  }
            }
            else
            {
                  noSub = option_value;
            }
            var selected = false;
            if (sInitialProductCategory)
            {
                var to = typeof(sInitialProductCategory);
                to = to.toLowerCase();
                //alert(to);
                if ('array' == to || 'object' == to){
                    for(var j=0; j< sInitialProductCategory.length; j++){
                        if (sInitialProductCategory[j] == key){
                            selected = true;
                        }
                    }
                    
                }else{
                    if (sInitialProductCategory == key){
                        selected = true;
                    }
                }
                
            }
            if(selected) 
                sOption += '<option value="' + key + '" selected="selected">' + noSub  + '</option>'; 
            else
                sOption += '<option value="' + key + '">' + noSub + '</option>';           
        }

        if($(sId)){
            $(sId).html(sOption);
        }  
    }
};
/* filename: /common/tw_l10n.js weight: 1*/
/**
 * Javascript L10N.
 * 
 * @author: Louis Liu
 * @Copyright: CSOFT
 */


/**
 * Redirect Localization version
 * 
 * @param: string langcode
 * @param: string page
 *
 *
 * Example:
 * twLocalize('zh');
 * twLocalize('zh','/User:Who');
 */
function twLocalize(langcode,page){
	//document.cookie = 'twuserlang='+langcode+';path=/;';
	setCookie('twuserlang',langcode,1000)
	document.location=document.location.href;
}


/**
 * Get L10N message
 * 
 * @param: string s
 * @param: array arr
 *
 *
 * Example:
 * alert(twGetL10nString("helloworld"));
 * alert(twGetL10nString("sample",[5, "TermWiki"]));
 * alert(twGetL10nString("sample2",[5, "TermWiki"]));
 */

function twGetLanguages(lang) {
	try {
		tw_lang_geter = eval('twi18n_'+lang);
		return tw_lang_geter;
	}
	catch(e){
		return null;	
	}
}
	

function twGetL10nString(s,arr) {
	var lang = wgUserLanguage;
	
	if(lang == 'zh-hans' || lang == 'zh-cn' || lang == 'zh'){
		lang = 'zs';
	}
	var tw_lang_geter_en =  eval('twi18n_en'); 
	var tw_lang_geter =  tw_lang_geter_en;
	var tw_other_lang = twGetLanguages(lang);
	if(tw_other_lang) {
		tw_lang_geter = tw_other_lang;
	}
	
	if (tw_lang_geter[s]) {
		var str = tw_lang_geter[s];
		if (typeof(arr)!='undefined'){
			for(var i=0; i < arr.length; i++){
				var index = i+1;
				var search = '\\{' + index + '\\}';
				var value = arr[i];
				var patt=new RegExp(search,'g');
				str = str.replace(patt, value);
			};
			if (0 <= str.indexOf('{') ){
				var patt=new RegExp('\\\\{','g');
				str = str.replace(patt, '{');
			}
			if (0 <= str.indexOf('}') ){
				var patt=new RegExp('\\\\}','g');
				str = str.replace(patt, '}');
			}
		}
		return str;
	}else{
		var str = tw_lang_geter_en[s];
		if (typeof(arr)!='undefined'){
			for(var i=0; i < arr.length; i++){
				var index = i+1;
				var search = '\\{' + index + '\\}';
				var value = arr[i];
				var patt=new RegExp(search,'g');
				str = str.replace(patt, value);
			};
			if (0 <= str.indexOf('{') ){
				var patt=new RegExp('\\\\{','g');
				str = str.replace(patt, '{');
			}
			if (0 <= str.indexOf('}') ){
				var patt=new RegExp('\\\\}','g');
				str = str.replace(patt, '}');
			}
		}
		return str;
	}
	return s;
}

/**
 * Messages
 * 
 * Note: if there are "{" in the value, use "\\{" instead of it.
 *       if there are "}" in the value, use "\\}" instead of it. 
 */
var twi18n_en = {
	helloword:  "Hello World!",
	sample:     "there are {1} \\{cpu\\} in {2}",
	sample2:    "there are {1} terms in {2}",
	
	ufPrivilege:	"Sorry, you do not have enough privileges to save the page.",	//added by Alim [ut->User Form]
		
	twRateLogin: "You have to log in to vote.",
	twfRated: "You have already rated this comment.",
	twfThankForVoted: "Thanks for your vote.",
    twaSaving: "Saving...",
    twaCancel: "Cancel",
    twaJoinMyBeaCulb: "Join My Bea Culb",
    twaThankYou: "Thank You!",
    twaReplysubmited: "Your reply has been submitted.",
    twaPostOtherReply: "Post Another Reply",
		
	talk_submit_reply : "submitting reply comment...",
		
	form_validate_comment : "Please enter a comment.",
	form_validate_length : "Enter at least {0} characters.",
	
	//sign up - login  Added by Alim  2011-04-26
	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'>Searching availability...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   Can't be blank</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> Can't be less than 3 characters</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> Can't be less than 6 characters</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> Can't be more than 30 characters</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>Illegal Username</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>Username already exists</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  Username and password cannot be the same.</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  Passwords do not match!</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> Illegal email address</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  This email is already in use!</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  Invalid email address!</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  Validation Code is incorrect!</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  You must accept Terms of Use</span>",
	su_invalid_pwd				:	"<span style='COLOR:#ff0000'>  Passwords must contain both letters and numbers.</span>",
	
	submit_comment_label		: "submit comment...",
	report_been_submit_button	: "Your report has been submitted.",
	report_other_button 		: "Post Another Report",
		
	/* === Added by Abe Wang 2011-12-16 === */
	share_been_submit_button    : "Thank You! Your email was sent to",
	share_other_button 			: "Email to Another Friend",	
	
	lb_loading					:	"Loading...",
	lb_add_remove_links         :    "Add or Remove Language Links",
	lb_btn_apply                :    "Apply",    
	lb_btn_cancel               :    "Cancel",
		
	/* ==== Added by Abe Wang 2011-08-25 ==== */
	/* ==== --file-- TWClient.js ==== */
	chat_login_label			: "You must log in to leave a message",
	chat_no_yourself_label		: "Sorry, but TermWiki doesn't encourage talking to yourself.",
	/* ==== --file-- TWUserForms.js ==== */
	chat_unread_label			: "Unread",
	chat_recent_label			: "Recent",
	chat_userForm_userlist_text : "Friends",
	chat_userForm_dynamics_text : "Recent Activities",
	chat_friends_online_text	: "Friends Online",
	chat_my_friends_text		: "My Friends",
	chat_inbox_text				: "Inbox",
	chat_history_log_text		: "History Log",
		
	/* ==== --file-- TWChatForms.js  ==== */
	chat_tab_chat_label			: "Chat",
	chat_tab_fans_label			: "Fans",
	chat_tab_terms_label		: "Term",
	chat_input_text_label		: "Please input text",
	chat_send_button_text		: 'Send',
		
		
	proreg_username_tip         : 'As Pro accounts may be shared by multiple individuals, it is necessary that each user has his or her own username. You can also benefit from many of the TermWiki community features by becoming a registered user of TermWiki.com.',
    proreg_proname_invalid      : 'Account name is illegal, only support characters, numbers and space.',
    proreg_proname_exist        : 'This account name is already in use',
    proreg_tried_too_much       : 'Sorry, you have tried too much, please try again after {1} seconds',
    proreg_password_wrong       : 'Your password is wrong, please try again!',
    proreg_username_not_exist   : 'The TermWiki username you entered does not exist.',
    proreg_accept_tns           : 'You must accept the TermWiki Terms of Service in order to register with the site.',
    
	twus_terms_num				:	'terms',
	twus_fans_num				:	'fans',
	twus_buzz_num				:	'buzes',
	twus_pictures_num			:	'pictures',
	twus_answers_num			:	'answers',
	twus_questions_num			:	'questions',
	twc_please_input_text		:	'Please input text',
	
	/* ==== Added by Abe Wang 2012-05-12 ==== */	
	/* ==== EditClass.js ==== */
	edit_class_save_button_text : 'Save',
	edit_class_cancel_button_text : 'Cancel',
	edit_class_view_button_text	: 'View Source',
	edit_class_saving_label : 'Saving...',
	edit_class_redirect_label : 'Redirect...',
		
	end_of_file: ""
};
var twi18n_de = {
	helloword	:  "Hallo Welt!",
	sample	:     "Es gibt {1} \\{cpu\\} in {2}",
	sample2	:    "Es gibt {1} Begriffe in {2}",
	ufPrivilege:	"Es tut uns leid, aber du hast nicht die erforderlichen Berechtigungen zum Speichern der Seite.",
		
	twRateLogin: "Du muss dich anmelden, um abzustimmen.",
	twfRated: "Du hast diesen Kommentar bereits bewertet.",
	twfThankForVoted: "Danke für deine Bewertung.",
    twaSaving: "Speichert...",
    twaCancel: "Abbrechen",
    twaJoinMyBeaCulb: "Tritt dem Mein Bea-Club bei",
    twaThankYou: "Danke!",
    twaReplysubmited: "Deine Antwort wurde eingereicht.",
    twaPostOtherReply: "Weitere Antwort senden",
		
	talk_submit_reply : "Antwortkommentar wird eingereicht...",
		
	form_validate_comment : "Bitte gib einen Kommentar ein.",
	form_validate_length : "Gib mindestens {0} Zeichen ein.",
	

	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'>Verfügbarkeit wird gesucht...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   Darf nicht frei bleiben</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> Darf nicht weniger als 3 Zeichen enthalten</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> Darf nicht weniger als 6 Zeichen enthalten</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> Darf nicht mehr als 30 Zeichen enthalten</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>Unerlaubter Benutzername</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>Der Benutzername existiert bereits</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  Passwort darf nicht dasselbe wie der Benutzername sein</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  Passwörter stimmen nicht überein!</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> Unerlaubte E-Mail-Adresse</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  Diese E-Mail-Adresse wird bereits verwendet!</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  Ungültige E-Mail-Adresse!</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  Validierungscode ist falsch!</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  Du musst die Nutzungsbedingungen akzeptieren</span>",
	
	submit_comment_label		:	"Kommentar wird eingereicht...",
	report_been_submit_button	: "Deine Meldung wurde eingereicht.",
	report_other_button 		:	"Weiteren Bericht senden",

	share_been_submit_button    : "Vielen Dank! Deine E-Mail wurde gesendet an",
	share_other_button 			: "E-Mail an einen weiteren Freund senden",

	
	lb_loading					:	"Lädt...",
	lb_add_remove_links         :	"Sprachlinks hinzufügen oder entfernen",
	lb_btn_apply                :	"Übernehmen",
	lb_btn_cancel               :	"Abbrechen",
	proreg_username_tip         : 'Da Pro-Konten vielen Einzelpersonen freigegeben werden können ist es notwendig, dass jeder Benutzer seinen eigenen Benutzernamen hat. Indem du registrierter Benutzer von TermWiki.com wirst, kannst du auch von den vielen Community-Features von TermWiki profitieren.',
    proreg_proname_invalid      : 'Der Kontoname ist ungültig, es werden nur Buchstaben, Ziffern und Leerzeichen unterstützt.',
    proreg_proname_exist        : 'Diese E-Mail-Adresse wird bereits verwendet.',
    proreg_tried_too_much       : 'Es tut uns leid, du hast es zu häufig versucht. Versuch es erneut in {1} Sekunden.',
    proreg_password_wrong       : 'Dein Passwort ist falsch, versuch es erneut!',
    proreg_username_not_exist   : 'Der eingegebene TermWiki-Benutzername existiert nicht.',
    proreg_accept_tns           : 'Du musst die TermWiki-Servicebedingungen akzeptieren, um dich bei der Seite zu registrieren.',
    
	twus_terms_num				:	'Begriffe',
	twus_fans_num				:	'Fans',
	twus_buzz_num				:	'Buzz-Einträge',
	twus_pictures_num			:	'Bilder',
	twus_answers_num			:	'Antworten',
	twus_questions_num			:	'Fragen',
	twc_please_input_text		:	'Bitte gib einen Text ein',
	edit_class_save_button_text : 'Speichern',
	edit_class_cancel_button_text : 'Abbrechen',
	edit_class_view_button_text	: 'Quelle anzeigen',
	edit_class_saving_label : 'Speichert...',
	edit_class_redirect_label : 'Umleitung...',
	end_of_file					: 	""

};

var twi18n_es = {
	helloword	:  "¡Hola mundo!",
	sample	:     "hay {1} \\{cpu\\} in {2}",
	sample2	:    "hay {1} terms in {2}",
	ufPrivilege:	"No tiene suficientes privilegios para guardar la página.",
		
	twRateLogin: "Para votar debe iniciar sesión.",
	twfRated: "Ya ha calificado este comentario.",
	twfThankForVoted: "Gracias por su votación.",
    twaSaving: "Guardando...",
    twaCancel: "Cancelar",
    twaJoinMyBeaCulb: "Registrarse en My Bea Culb",
    twaThankYou: "¡Gracias!!",
    twaReplysubmited: "Tu respuesta ha sido enviada.",
    twaPostOtherReply: "Publicar otra respuesta",
		
	talk_submit_reply : "enviando comentario de respuesta...",
		
	form_validate_comment : "Escriba un comentario.",
	form_validate_length : "Introduzca un mínimo de {0} caracteres. ",
	

	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'>Buscando disponibilidad...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   No puede estar en blanco</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> No puede tener menos de 3 caracteres</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> No puede tener menos de 6 caracteres</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> No puede tener más de 30 caracteres</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>Nombre de usuario ilegal</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>El nombre de usuario ya existe.</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  La contraseña no puede ser igual que el nombre de usuario</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  ¡Las contraseñas no coinciden!</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> La dirección de correo electrónico es ilegal</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  ¡Este correo electrónico ya está en uso!</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  ¡la dirección de correo electrónica es inválida!</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  ¡El código de validación es incorrecto!</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  Debe aceptar las Condiciones de uso</span>",
	
	submit_comment_label		:	"enviar comentario...",
	report_been_submit_button	: "Tu informe ha sido enviado.",
	report_other_button 		:	"Publicar otro reporte",

	share_been_submit_button    : "¡Gracias! Su correo ha sido enviado a",
	share_other_button 			: "Enviar un correo electrónico a otro amigo",

	
	lb_loading					:	"Cargando...",
	lb_add_remove_links         :	"Agregar o quitar enlaces de idiomas",
	lb_btn_apply                :	"Aplicar",
	lb_btn_cancel               :	"Cancelar",
	proreg_username_tip         : 'En vista que las cuentas Pro pueden ser compartidas por múltiples individuos, es necesario que cada usuario tenga su propio nombre de usuario. También se puede beneficiar de cualquiera de las funciones de la comunidad de TermWiki al convertirse en un usuario registrado de TermWiki.com.',
    proreg_proname_invalid      : 'Nombre de cuenta es ilegal, solo soporta caracteres, números y espacios.',
    proreg_proname_exist        : 'Este nombre de cuenta ya está en uso.',
    proreg_tried_too_much       : 'Disculpe, ha intentado muchas veces, vuelva a intentarlo en {1} segundos',
    proreg_password_wrong       : 'Su contraseña es incorrecta, vuelva a intentarlo.',
    proreg_username_not_exist   : 'No existe el nombre de usuario de TermWiki que escribió.',
    proreg_accept_tns           : 'Debe aceptar los Términos de servicio de TermWiki para registrarse con el sitio.',
    
	twus_terms_num				:	'términos',
	twus_fans_num				:	'admiradores',
	twus_buzz_num				:	'zumbidos',
	twus_pictures_num			:	'imágenes',
	twus_answers_num			:	'respuestas',
	twus_questions_num			:	'preguntas',
	twc_please_input_text		:	'Escriba un texto',
	edit_class_save_button_text : 'Guardar',
	edit_class_cancel_button_text : 'Cancelar',
	edit_class_view_button_text	: 'Ver texto de origen',
	edit_class_saving_label : 'Guardando...',
	edit_class_redirect_label : 'Redireccionando...',
	end_of_file					: 	""
};

var twi18n_fr = {
	helloword	:  "Bonjour le Monde!",
	sample	:     "il y a {1} \\{cpu\\} dans {2}",
	sample2	:    "il y a {1} \\{cpu\\} termes dans {2}",
	ufPrivilege:	"Désolé, vous n'avez pas les droits suffisants pour enregistrer la page.",
		
	twRateLogin: "Vous devez vous connecter pour voter.",
	twfRated: "Vous avez déjà évalué ce commentaire.",
	twfThankForVoted: "Merci pour votre vote.",
    twaSaving: "Enregistrement...",
    twaCancel: "Annuler",
    twaJoinMyBeaCulb: "Jondre Mon Bea Club",
    twaThankYou: "Merci !",
    twaReplysubmited: "Votre réponse a été soumise.",
    twaPostOtherReply: "Poster Une Autre Réponse",
		
	talk_submit_reply : "envoyer le commentaire de réponse...",
		
	form_validate_comment : "Entrez un commentaire.",
	form_validate_length : "Entrez au moins {0} caractères.",
	

	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'>Recherche de disponibilité...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   Ne peut pas être vierge</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> Ne peut pas contenir moins de 3 caractères</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> Ne peut pas contenir moins de 6 caractères</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> Ne peut pas contenir plus de 30 caractères</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>Nom d'utilisateur illégal</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>Nom d'utilisateur déjà existant</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  Le mot de passe ne peut pas être le nom d'utilisateur</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  Les mots de passe ne correspondent pas !</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> Adresse email illégale</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  Cet email est déjà utilisé !</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  Adresse email invalide !</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  Le code de validation est incorrect !</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  Vous devez accepter les termes d'utilisation</span>",
	
	submit_comment_label		:	"envoi du commentaire...",
	report_been_submit_button	: "Votre rapport a été soumis.",
	report_other_button 		:	"Poster un autre rapport",

	share_been_submit_button    : "Merci ! Votre email a été envoyé à",
	share_other_button 			: "Envoyer un email à un ami",

	
	lb_loading					:	"Chargement...",
	lb_add_remove_links         :	"Ajouter ou Retirer des Liens vers les Langues",
	lb_btn_apply                :	"Appliquer",
	lb_btn_cancel               :	"Annuler",
	proreg_username_tip         : "Les comptes Pro pouvant être partagés entre plusieurs personnes, il est indispensable que chacun possède son propre nom d'utilisateur. En devenant utilisateur inscrit sur TermWiki, vous pourrez bénéficier de nombreuses fonctionnalités réservées à la communauté TermWiki.com.",
    proreg_proname_invalid      : "Le nom du compte n'est pas autorisé, saisissez uniquement des caractères, des numéros et des espaces.",
    proreg_proname_exist        : 'Cet nom de compte est déjà utilisé ',
    proreg_tried_too_much       : "Désolé, vous avez dépassé le nombre d'essais, merci de réessayer dans {1} secondes",
    proreg_password_wrong       : 'Votre mot de passe est incorrect, veuillez essayer à nouveau !',
    proreg_username_not_exist   : "Le nom d'utilisateur TermWiki que vous avez saisi n'existe pas.",
    proreg_accept_tns           : "Vous devez accepter les conditions d'utilisation de TermWiki pour vous enregistrer sur le site.",
    
	twus_terms_num				:	'termes',
	twus_fans_num				:	'fans',
	twus_buzz_num				:	'buzs',
	twus_pictures_num			:	'photos',
	twus_answers_num			:	'réponses',
	twus_questions_num			:	'questions',
	twc_please_input_text		:	'Veuillez saisir votre texte',
	edit_class_save_button_text : 'Enregistrer',
	edit_class_cancel_button_text : 'Annuler',
	edit_class_view_button_text	: 'Voir la source',
	edit_class_saving_label : 'Enregistrement en cours...',
	edit_class_redirect_label : 'Redirection...',
	end_of_file					: 	""
};
var twi18n_it = {
	helloword	:  "Ciao Mondo!",
	sample	:     "ci sono {1} \\{cpu\\} in {2}",
	sample2	:    "ci sono {1} termini in {2}",
	ufPrivilege:	"Non si possiedono privilegi sufficienti per salvare la pagina.",
		
	twRateLogin: "Per poter votare è necessario effettuare l'accesso.",
	twfRated: "Hai già valutato questo commento.",
	twfThankForVoted: "Grazie per aver votato.",
    twaSaving: "Salvataggio in corso",
    twaCancel: "Annulla",
    twaJoinMyBeaCulb: "Unisciti a My Bea Club",
    twaThankYou: "Grazie!",
    twaReplysubmited: "La tua risposta è stata inviata.",
    twaPostOtherReply: "Pubblica un'altra risposta",
		
	talk_submit_reply : "invio commento di risposta in corso",
		
	form_validate_comment : "Inserisci un commento.",
	form_validate_length : "Inserisci almeno {0} caratteri.",
	

	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'>Ricerca disponibilità in corso",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   Non può rimanere vuoto</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> Non deve essere inferiore a 3 caratteri</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> Non deve essere inferiore a 6 caratteri</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> Non deve superare i 30 caratteri</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>Nome utente non valido</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>Nome utente già esistente</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  La password non può essere uguale al nome utente</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  Le password non corrispondono!</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> Indirizzo e-mail non valido</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  Indirizzo e-mail già in uso!</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  Indirizzo e-mail errato!</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  Codice di convalida errato!</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  È necessario accettare le Condizioni di utilizzo</span>",
	
	submit_comment_label		:	"invio commento in corso",
	report_been_submit_button	: "Il report è stato inviato.",
	report_other_button 		:	"Pubblica un altro report",

	share_been_submit_button    : "Grazie! La tua e-mail è stata inviata a",
	share_other_button 			: "Invia e-mail ad un altro amico",

	
	lb_loading					:	"Caricamento in corso",
	lb_add_remove_links         :	"Aggiungi o rimuovi link lingue",
	lb_btn_apply                :	"Applica",
	lb_btn_cancel               :	"Annulla",
	proreg_username_tip         : "Dal momento che l'account Pro può essere condiviso da più persone, è necessario che ogni utente abbia il suo proprio nome utente. Inoltre puoi trarre vantaggio dalle numerose funzionalità della comunità di TermWiki diventando un membro registrato di TermWiki.com",
    proreg_proname_invalid      : 'Il nome utente è illegale, supporta solamente da caratteri, numeri e spazio.',
    proreg_proname_exist        : 'Il nome utente è già in uso!',
    proreg_tried_too_much       : 'Spiacenti, tentativi esauriti, riprovare tra {1} secondi',
    proreg_password_wrong       : 'La password è sbagliata, riprovare!',
    proreg_username_not_exist   : 'Il nome utente di TermWiki che hai inserito non esiste.',
    proreg_accept_tns           : 'Per registrarsi al sito, è necessario accettare le Condizioni di servizio di TermWiki.',
    
	twus_terms_num				:	'termini',
	twus_fans_num				:	'fan',
	twus_buzz_num				:	'buz',
	twus_pictures_num			:	'immagini',
	twus_answers_num			:	'risposte',
	twus_questions_num			:	'domande',
	twc_please_input_text		:	'Immettere testo',
	edit_class_save_button_text : 'Salva',
	edit_class_cancel_button_text : 'Annulla',
	edit_class_view_button_text	: 'Visualizza origine',
	edit_class_saving_label : 'Salvataggio in corso...',
	edit_class_redirect_label : 'Reindirizzamento in corso...',
	end_of_file					: 	""

};
var twi18n_ja = {
	helloword	:  "世界のみなさん、こんにちは！",
	sample	:     "{2} には {1} \\{cpu\\} があります",
	sample2	:    "{2} には {1} 用語があります",
	ufPrivilege:	"残念ですが、ページを保存する十分な権限がありません。",
		
	twRateLogin: "投票するにはログインする必要があります。",
	twfRated: "このコメントは既に評価されています。",
	twfThankForVoted: "投票していただき、ありがとうございます。",
    twaSaving: "保存しています...",
    twaCancel: "キャンセル",
    twaJoinMyBeaCulb: "My Bea Culb に加入する",
    twaThankYou: "ありがとうございました！",
    twaReplysubmited: "返信を送信しました。",
    twaPostOtherReply: "別の返信を投稿",
		
	talk_submit_reply : "返信コメントを送信しています...",
		
	form_validate_comment : "コメントを入力してください。",
	form_validate_length : "{0} 文字以上入力してください。",
	

	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'>検索可用性...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   空白にできません</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> 3 文字未満にできません</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> 6 文字未満にできません</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> 30 文字を超えることができません</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>不正なユーザー名</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>ユーザー名はすでに存在します</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  パスワードをユーザー名と同じにすることはできません</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  パスワードが一致しません！</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> 不正な電子メールアドレス</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  この電子メールは既に使用されています！</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  無効な電子メールアドレス！</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  バリデーションコードが間違っています！</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  使用条件への同意が必要です</span>",
	
	submit_comment_label		:	"コメントを提出します ...",
	report_been_submit_button	: "レポートは送信されました。",
	report_other_button 		:	"別のレポートを投稿",

	share_been_submit_button    : "ありがとうございました！メールは以下の宛先に送信されました",
	share_other_button 			: "別の友人にメールを送信する",

	
	lb_loading					:	"ロード中 ...",
	lb_add_remove_links         :	"言語リンクを追加または削除",
	lb_btn_apply                :	"適用",
	lb_btn_cancel               :	"キャンセル",
	proreg_username_tip         : 'Proアカウントは複数のユーザーによって共有される可能性がありますので、各ユーザーが自分のユーザー名をつける必要があります。また、TermWiki.comのユーザーとして登録することによって、TermWikiコミュニティ機能のメリットを活用することができます。',
    proreg_proname_invalid      : 'アカウント名が正しくありません。使用できるのは、文字、数字、スペースのみです。',
    proreg_proname_exist        : 'このアカウント名はすでに使用中です。',
    proreg_tried_too_much       : '規定の実行回数を超えています。{1}秒後にもう一度やり直してください。',
    proreg_password_wrong       : 'パスワードが間違っています。もう一度やり直してください！',
    proreg_username_not_exist   : '入力された TermWiki ユーザー名は存在しません。',
    proreg_accept_tns           : 'サイトに登録するには、TermWikiのサービス条件に同意してください。',
    
	twus_terms_num				:	'用語',
	twus_fans_num				:	'ファン',
	twus_buzz_num				:	'Buz',
	twus_pictures_num			:	'写真',
	twus_answers_num			:	'回答',
	twus_questions_num			:	'質問',
	twc_please_input_text		:	'テキストを入力してください',
	edit_class_save_button_text : '保存',
	edit_class_cancel_button_text : 'キャンセル',
	edit_class_view_button_text	: 'ソースを表示',
	edit_class_saving_label : '保存しています...',
	edit_class_redirect_label : 'リダイレクトしています...',
	end_of_file					: 	""

};
var twi18n_zs = {
	helloword	:  "世界你好！",
	sample	:     "在 {2} 中有 {1} 条 \\{cpu\\}",
	sample2	:    "在 {2} 中有 {1} 条词条",
	ufPrivilege:	"报歉，您没有足够的权限来保存此页面。",
		
	twRateLogin: "必须先登录，然后才能投票。",
	twfRated: "您已对此评论进行了评价。",
	twfThankForVoted: "谢谢您投票。",
    twaSaving: "正在保存...",
    twaCancel: "取消",
    twaJoinMyBeaCulb: "加入 My Bea Culb",
    twaThankYou: "非常感谢！",
    twaReplysubmited: "您的回复已提交。",
    twaPostOtherReply: "发布另一个回复",
		
	talk_submit_reply : "提交回复评论...",
		
	form_validate_comment : "请输入评论。",
	form_validate_length : "请输入至少 {0} 个字符。",
	

	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'>正在搜索可用性...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   不能为空</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> 不能少于 3 个字符</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> 不能少于 6 个字符</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> 不能多于 30 个字符</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>非法用户名</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>用户名已存在。</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  密码不能与用户名相同</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  密码不匹配！</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> 非法电子邮件地址</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  此电子邮件已被使用！</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  无效的电子邮件地址！</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  验证码不正确。</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  您必须接受使用条款</span>",
	
	submit_comment_label		:	"提交评论...",
	report_been_submit_button	: "您的报告已提交。",
	report_other_button 		:	"发布另一个报告",

	share_been_submit_button    : "非常感谢！您的电子邮件已发送至",
	share_other_button 			: "发送电子邮件给另一位好友",

	
	lb_loading					:	"正在加载...",
	lb_add_remove_links         :	"添加或删除语言链接",
	lb_btn_apply                :	"应用",
	lb_btn_cancel               :	"取消",
	proreg_username_tip         : '由于可能与多个用户共享 Pro 帐户，所以每个用户必须有自己的用户名。通过成为 TermWiki.com 的注册用户，您还可以从许多 TermWiki 社区功能获益。',
    proreg_proname_invalid      : '帐户名非法，只支持字符、数字和空格。',
    proreg_proname_exist        : '此帐户名已被使用',
    proreg_tried_too_much       : '对不起，您已经尝试多次，请在 {1} 秒后重试',
    proreg_password_wrong       : '您的密码错误，请再试一次！',
    proreg_username_not_exist   : '您输入的 TermWiki 用户名不存在。',
    proreg_accept_tns           : '必须先接受 TermWiki 服务条款，然后才能注册。',
    
	twus_terms_num				:	'词条',
	twus_fans_num				:	'粉丝',
	twus_buzz_num				:	'评论',
	twus_pictures_num			:	'图片',
	twus_answers_num			:	'解答',
	twus_questions_num			:	'问题',
	twc_please_input_text		:	'请输入文本',
	edit_class_save_button_text : '保存',
	edit_class_cancel_button_text : '取消',
	edit_class_view_button_text	: '查看原文',
	edit_class_saving_label : '正在保存...',
	edit_class_redirect_label : '正在重定向...',
	end_of_file					: 	"",
	
	/* ==== Added by Abe Wang 2011-08-25 ==== */
	/* ==== --file-- TWClient.js ==== */
	chat_login_label			: "你必须登录后才能留言",
	chat_no_yourself_label		: "对不起，在TermWiki中不能跟自己聊天",
	/* ==== --file-- TWUserForms.js ==== */
	chat_unread_label			: "未读",
	chat_recent_label			: "更新",
	chat_userForm_userlist_text : "好友",
	chat_userForm_dynamics_text : "最新动态",
	chat_friends_online_text	: "在线好友",
	chat_my_friends_text		: "我的好友",
	chat_inbox_text				: "收件箱",
	chat_history_log_text		: "历史记录",
		
	/* ==== --file-- TWChatForms.js  ==== */
	chat_input_text_label		: "请输入文字",
	chat_tab_chat_label			: "聊天",
	chat_tab_fans_label			: "粉丝",
	chat_tab_terms_label		: "词条",
	chat_send_button_text		: "发送"
};


var twi18n_ar = {
	helloword:  "مرحبًا بالعالم!",
	sample:     "يوجد {1} \\{cpu\\} في {2}",
	sample2:    "يوجد {1} مصطلح في {2}",
	
	ufPrivilege:	"عذرًا، ليس لديك امتيازات كافية لحفظ الصفحة.",
		
	twRateLogin: "يجب عليك تسجيل الدخول للتصويت.",
	twfRated: "لقد قمت بتقييم هذا التعليق من قبل.",
	twfThankForVoted: "شكرًا للتصويت.",
    twaSaving: "حفظ...",
    twaCancel: "إلغاء",
    twaJoinMyBeaCulb: "الانضمام إلى My Bea Culb",
    twaThankYou: "شكرًا!",
    twaReplysubmited: "لقد تم إرسال ردك.",
    twaPostOtherReply: "نشر رد آخر",
		
	talk_submit_reply : "إرسال تعليق الرد...",
		
	form_validate_comment : "الرجاء إدخال تعليق.",
	form_validate_length : "أدخل {0} حرف على الأقل.",
	
	//sign up - login  Added by Alim  2011-04-26
	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'>بحث عن التوفر...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   لا يجوز تركها فارغة</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> لا يجوز أن تقل عن 3 أحرف</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> لا يجوز أن تقل عن 6 أحرف</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> لا يجوز أن تزيد عن 30 حرفًا</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>اسم مستخدم غير قانوني</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>اسم المستخدم موجود مسبقًا</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  لا يجوز استخدام كلمة المرور نفسها مع اسم المستخدم</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  كلمات المرور غير متطابقة!</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> عنوان بريد إلكتروني غير قانوني</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  هذا البريد الإلكتروني قيد الاستخدام بالفعل!</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  عنوان بريد إلكتروني غير صالح!</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  رمز التحقق غير صحيح!</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  يجب عليك قبول شروط الاستخدام</span>",
	
	submit_comment_label		: "إرسال تعليق...",
	report_been_submit_button	: "لقد تم إرسال تقريرك.",
	report_other_button 		: "نشر تقرير آخر",
		
	/* === Added by Abe Wang 2011-12-16 === */
	share_been_submit_button    : "شكرًا! لقد تم إرسال بريدك الإلكتروني إلى",
	share_other_button 			: "بريد إلكتروني إلى صديق آخر",
	
	lb_loading					:	"تحميل...",
	lb_add_remove_links         :    "إضافة أو إزالة روابط لغات",
	lb_btn_apply                :    "تطبيق",
	lb_btn_cancel               :    "إلغاء",
		
	/* ==== Added by Abe Wang 2011-08-25 ==== */
	/* ==== --file-- TWClient.js ==== */
	chat_login_label			: "يجب عليك تسجيل الدخول لترك رسالة",
	chat_no_yourself_label		: "عذرًا، ولكن TermWiki لا تشجع على التحدث إلى نفسك.",
	/* ==== --file-- TWUserForms.js ==== */
	chat_unread_label			: "غير مقروءة",
	chat_recent_label			: "حديثة",
	/* ==== --file-- TWChatForms.js  ==== */
	chat_input_text_label		: "الرجاء إدخال نص",
	/* ==== --file-- TWMessageForm.js ==== */
	chat_send_button_text		: 'إرسال',
	proreg_username_tip         : 'لأنه من الممكن لأشخاص عديدين مشاركة حسابات Pro، من الضروري أن يكون لكل مستخدم اسم المستخدم الخاص به. يمكنك أيضًا الاستفادة من العديد من مزايا مجتمع TermWiki من خلال أن تصبح مستخدمًا مسجلاً في TermWiki.com.',
    proreg_proname_invalid      : 'اسم الحساب غير قانوني، يدعم فقط الأحرف والأرقام والمسافات.',
    proreg_proname_exist        : 'اسم الحساب هذا قيد الاستخدام بالفعل',
    proreg_tried_too_much       : 'عذرًا، لقد حاولت كثيرًا للغاية، يُرجى إعادة المحاولة بعد {1} ثانية',
    proreg_password_wrong       : 'كلمة المرور الخاصة بك خاطئة، يُرجى إعادة المحاولة!',
    proreg_username_not_exist   : 'اسم المستخدم في TermWiki الذي أدخلته غير موجود.',
    proreg_accept_tns           : 'يجب عليك قبول شروط الخدمة الخاصة بـ TermWiki من أجل التسجيل في هذا الموقع.',
    
	twus_terms_num				:	'المصطلحات',
	twus_fans_num				:	'المشجعون',
	twus_buzz_num				:	'المشاركات',
	twus_pictures_num			:	'الصور',
	twus_answers_num			:	'الأجوبة',
	twus_questions_num			:	'الأسئلة',
	twc_please_input_text		:	'الرجاء إدخال نص',
	edit_class_save_button_text : 'حفظ',
	edit_class_cancel_button_text : 'إلغاء',
	edit_class_view_button_text	: 'عرض المصدر',
	edit_class_saving_label : 'حفظ...',
	edit_class_redirect_label : 'إعادة توجيه ...',
	end_of_file: ""
};



var twi18n_id = {
	helloword:  "Halo Dunia!",
	sample:     "ada {1} \\{cpu\\} di {2}",
	sample2:    "ada {1} istilah di {2}",
	
	ufPrivilege:	"Maaf, Anda tidak memiliki akses yang cukup untuk menyimpan laman.",
		
	twRateLogin: "Anda harus log masuk untuk memberikan suara.",
	twfRated: "Anda telah memeringkat komentar ini.",
	twfThankForVoted: "Terima kasih atas suara Anda.",
    twaSaving: "Menyimpan...",
    twaCancel: "Batal",
    twaJoinMyBeaCulb: "Bergabung dengan Klub MyBea",
    twaThankYou: "Terima Kasih!",
    twaReplysubmited: "Balasan Anda sudah diserahkan.",
    twaPostOtherReply: "Posting Balasan Lain",
		
	talk_submit_reply : "menyerahkan komentar balasan...",
		
	form_validate_comment : "Silakan ketik komentar.",
	form_validate_length : "Ketikkan setidaknya {0} karakter.",
	
	//sign up - login  Added by Alim  2011-04-26
	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'>Mencari ketersediaan...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   Tidak boleh dikosongkan</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> Tidak boleh kurang dari 3 karakter</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> Tidak boleh kurang dari 6 karakter</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> Tidak boleh lebih dari 30 karakter</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>Nama Pengguna Tidak Sah</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>Nama pengguna sudah ada</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  Kata sandi tidak boleh sama dengan nama pengguna</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  Kata sandi tidak sesuai!</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> Alamat email tidak sah</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  Email ini sudah digunakan!</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  Alamat email tidak sah!</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  Kode Validasi salah!</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  Anda harus menyetujui Persyaratan Penggunaan</span>",
	
	submit_comment_label		: "serahkan komentar...",
	report_been_submit_button	: "Laporan Anda sudah diserahkan.",
	report_other_button 		: "Posting Laporan Lain",
		
	/* === Added by Abe Wang 2011-12-16 === */
	share_been_submit_button    : "Terima Kasih! Email Anda dikirim ke",
	share_other_button 			: "Email Teman Lain",
	
	lb_loading					:	"Memuat ...",
	lb_add_remove_links         :    "Tambahkan atau Buang Tautan Bahasa",
	lb_btn_apply                :    "Terapkan",
	lb_btn_cancel               :    "Batal",
		
	/* ==== Added by Abe Wang 2011-08-25 ==== */
	/* ==== --file-- TWClient.js ==== */
	chat_login_label			: "Anda harus log masuk untuk meninggalkan pesan",
	chat_no_yourself_label		: "Maaf, namun Anda tidak bisa berdiskusi dengan diri Anda sendiri di TermWiki.",
	/* ==== --file-- TWUserForms.js ==== */
	chat_unread_label			: "Belum dibaca",
	chat_recent_label			: "Baru",
	/* ==== --file-- TWChatForms.js  ==== */
	chat_input_text_label		: "Ketikkan teks",
	/* ==== --file-- TWMessageForm.js ==== */
	chat_send_button_text		: 'Kirim',
	proreg_username_tip         : 'Karena akun Pro bisa digunakan bersama oleh banyak orang, setiap pengguna harus memiliki nama penggunanya masing-masing. Anda juga akan memperoleh keuntungan dari banyaknya fitur komunitas TermWiki dengan cara menjadi pengguna terdaftar di TermWiki.com.',
    proreg_proname_invalid      : 'Nama akun tidak sah, hanya bisa menggunakan karakter, angka, dan spasi.',
    proreg_proname_exist        : 'Nama akun sudah digunakan',
    proreg_tried_too_much       : 'Maaf, Anda mencoba terlalu sering, cobalah lagi setelah {1} detik',
    proreg_password_wrong       : 'Kata sandi Anda salah, silakan coba lagi!',
    proreg_username_not_exist   : 'Nama Pengguna TermWiki yang Anda ketikkan tidak ada.',
    proreg_accept_tns           : 'Anda harus menyetujui Persyaratan Layanan TermWiki agar Anda bisa mendaftar di situs ini.',
    
	twus_terms_num				:	'istilah',
	twus_fans_num				:	'fans',
	twus_buzz_num				:	'buzes',
	twus_pictures_num			:	'gambar',
	twus_answers_num			:	'jawaban',
	twus_questions_num			:	'pertanyaan',
	twc_please_input_text		:	'Ketikkan teks',
	edit_class_save_button_text : 'Simpan',
	edit_class_cancel_button_text : 'Batal',
	edit_class_view_button_text	: 'Lihat Sumber',
	edit_class_saving_label : 'Menyimpan...',
	edit_class_redirect_label : 'Mengalihkan...',
	end_of_file: ""
};



var twi18n_ko = {
	helloword:  "Hello World!",
	sample:     "{2}에 {1} \\{cpu\\}가 있습니다.",
	sample2:    "{2}에 {1}개 용어가 있습니다.",
	
	ufPrivilege:	"죄송합니다. 귀하는 이 페이지를 저장할 수 있는 권한이 없습니다.",
		
	twRateLogin: "투표하려면 로그인해야 합니다.",
	twfRated: "이미 이 댓글에 등급을 매겼습니다.",
	twfThankForVoted: "투표해 주셔서 감사합니다.",
    twaSaving: "저장 중…",
    twaCancel: "취소",
    twaJoinMyBeaCulb: "마이비(My Bea) 클럽 가입",
    twaThankYou: "감사합니다!",
    twaReplysubmited: "답글이 제출되었습니다.",
    twaPostOtherReply: "다른 답글 게시",
		
	talk_submit_reply : "답글 제출 중...",
		
	form_validate_comment : "댓글을 입력하십시오.",
	form_validate_length : "최소 {0}자 이상으로 입력하십시오.",
	
	//sign up - login  Added by Alim  2011-04-26
	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'>검색 가능성...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   비워둘 수 없습니다.</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> 3자 미만이어야 합니다.</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> 6자 미만이어야 합니다.</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> 30자 미만이어야 합니다.</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>잘못된 사용자 이름</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>사용자 이름이 이미 있습니다.</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  암호는 사용자 이름과 같을 수 없습니다.</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  암호가 일치하지 않습니다.</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> 잘못된 이메일 주소</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  이 이메일은 이미 사용 중입니다.</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  이메일 주소가 올바르지 않습니다.</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  확인 코드가 틀립니다.</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  이용 약관을 동의해야 합니다.</span>",
	
	submit_comment_label		: "댓글 제출 중...",
	report_been_submit_button	: "보고서가 제출되었습니다.",
	report_other_button 		: "다른 보고서 게시",
		
	/* === Added by Abe Wang 2011-12-16 === */
	share_been_submit_button    : "감사합니다! 이메일 전송 대상:",
	share_other_button 			: "다른 친구에게 이메일 보내기",
	
	lb_loading					:	"로드 중...",
	lb_add_remove_links         :    "언어 링크 추가 또는 제거",
	lb_btn_apply                :    "적용",
	lb_btn_cancel               :    "취소",
		
	/* ==== Added by Abe Wang 2011-08-25 ==== */
	/* ==== --file-- TWClient.js ==== */
	chat_login_label			: "메시지를 남기려면 로그인해야 합니다.",
	chat_no_yourself_label		: "죄송합니다. TermWiki에서는 본인에게 말하기 기능이 지원되지 않습니다.",
	/* ==== --file-- TWUserForms.js ==== */
	chat_unread_label			: "읽지 않은 메시지",
	chat_recent_label			: "최근 항목",
	/* ==== --file-- TWChatForms.js  ==== */
	chat_input_text_label		: "텍스트를 입력하십시오.",
	/* ==== --file-- TWMessageForm.js ==== */
	chat_send_button_text		: '보내기',
	proreg_username_tip         : 'Pro 계정은 여러 명의 개인에 의해 공유될 수 있으므로 각 사용자는 본인의 사용자 이름을 설정해야 합니다. 또한 TermWiki.com의 등록된 사용자가 되면 다양한 TermWiki 커뮤니티 기능을 활요할 수 있습니다.',
    proreg_proname_invalid      : '계정 이름이 잘못되었습니다. 문자, 숫자, 공백만 사용할 수 있습니다.',
    proreg_proname_exist        : '이 계정 이름은 이미 사용 중입니다.',
    proreg_tried_too_much       : '죄송합니다. 시도 횟수를 초과하였으니 {1}초 후 다시 시도하십시오.',
    proreg_password_wrong       : '암호가 틀렸습니다. 다시 시도하십시오!',
    proreg_username_not_exist   : '입력한 TermWiki 사용자 이름이 존재하지 않습니다.',
    proreg_accept_tns           : '사이트에 등록하려면 TermWiki 서비스 약관을 동의해야 합니다.',
    
	twus_terms_num				:	'용어',
	twus_fans_num				:	'팬',
	twus_buzz_num				:	'버즈',
	twus_pictures_num			:	'사진',
	twus_answers_num			:	'답변',
	twus_questions_num			:	'질문',
	twc_please_input_text		:	'텍스트를 입력하십시오.',
	edit_class_save_button_text : '저장',
	edit_class_cancel_button_text : '취소',
	edit_class_view_button_text	: '소스 보기',
	edit_class_saving_label : '저장 중…',
	edit_class_redirect_label : '리디렉팅 중...',
	end_of_file: ""
};



var twi18n_pl= {
	helloword:  "Witaj Świecie!",
	sample:     "jest {1} \\{cpu\\} w {2}",
	sample2:    "jest {1} terminów w {2}",
	
	ufPrivilege:	"Przepraszamy, nie masz wystarczających uprawnień, by zapisać tę stronę.",
		
	twRateLogin: "Musisz się zalogować, aby oddać głos.",
	twfRated: "Oceniłeś już ten komentarz.",
	twfThankForVoted: "Dziękujemy za Twój głos.",
    twaSaving: "Zapisywanie...",
    twaCancel: "Anuluj",
    twaJoinMyBeaCulb: "Dołącz do mojego Bea Culb",
    twaThankYou: "Dziękujemy!",
    twaReplysubmited: "Twoja odpowiedź została przesłana.",
    twaPostOtherReply: "Umieść kolejną odpowiedź",
		
	talk_submit_reply : "przesyłanie komentarza z odpowiedzią...",
		
	form_validate_comment : "Proszę wprowadzić komentarz.",
	form_validate_length : "Wprowadź przynajmniej {0} znaków.",
	
	//sign up - login  Added by Alim  2011-04-26
	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'>Sprawdzanie dostępności...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   Nie może być puste</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> Nie może zawierać mniej niż 3 znaki</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> Nie może zawierać mniej niż 6 znaków</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> Nie może składać się z więcej niż 30 znaków</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>Niedozwolona nazwa użytkownika</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>Nazwa użytkownika już istnieje</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  Hasło nie może być takie samo jak nazwa użytkownika</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  Hasła nie pasują do siebie!</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> Niedozwolony adres e-mail</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  Ten e-mail jest już wykorzystywany!</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  Nieprawidłowy adres e-mail!</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  Kod weryfikujący jest nieprawidłowy!</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  Musisz zaakceptować Warunki użytkowania</span>",
	
	submit_comment_label		: "prześlij komentarz...",
	report_been_submit_button	: "Twój raport został przesłany.",
	report_other_button 		: "Umieść kolejny raport",
		
	/* === Added by Abe Wang 2011-12-16 === */
	share_been_submit_button    : "Dziękujemy! Twój e-mail został wysłany do",
	share_other_button 			: "Wyślij e-mail do innego znajomego",
	
	lb_loading					:	"Ładowanie...",
	lb_add_remove_links         :    "Dodaj lub usuń linki do języka",
	lb_btn_apply                :    "Zastosuj",
	lb_btn_cancel               :    "Anuluj",
		
	/* ==== Added by Abe Wang 2011-08-25 ==== */
	/* ==== --file-- TWClient.js ==== */
	chat_login_label			: "Musisz się zalogować, aby pozostawić wiadomość",
	chat_no_yourself_label		: "Przepraszamy, ale TermWiki nie zachęca do mówienia do siebie.",
	/* ==== --file-- TWUserForms.js ==== */
	chat_unread_label			: "Nieprzeczytane",
	chat_recent_label			: "Ostatnie",
	/* ==== --file-- TWChatForms.js  ==== */
	chat_input_text_label		: "Wprowadź tekst",
	/* ==== --file-- TWMessageForm.js ==== */
	chat_send_button_text		: 'Wyślij',
	proreg_username_tip         : 'Ponieważ konta Pro mogą być współdzielone przez kilka osób, niezbędne jest, by każdy z użytkowników posiadał swoją własną nazwę użytkownika. Możesz także skorzystać z wielu funkcji społeczności TermWiki, stając się zarejestrowanym użytkownikiem TermWiki.com.',
    proreg_proname_invalid      : 'Nazwa konta jest niedozwolona, dozwolone są tylko znaki, liczby i spacje.',
    proreg_proname_exist        : 'Ta nazwa konta jest już wykorzystywana',
    proreg_tried_too_much       : 'Przykro nam, dokonałeś zbyt wielu prób, spróbuj ponownie za {1} sekund',
    proreg_password_wrong       : 'Twoje hasło jest błędne, spróbuj jeszcze raz!',
    proreg_username_not_exist   : 'Wprowadzona nazwa użytkownika TermWiki nie istnieje.',
    proreg_accept_tns           : 'Musisz zaakceptować Warunki użytkowania TermWiki, aby zarejestrować się na stronie.',
    
	twus_terms_num				:	'terminy',
	twus_fans_num				:	'fani',
	twus_buzz_num				:	'buzy',
	twus_pictures_num			:	'zdjęcia',
	twus_answers_num			:	'odpowiedzi',
	twus_questions_num			:	'pytania',
	twc_please_input_text		:	'Wprowadź tekst',
	edit_class_save_button_text : 'Zapisz',
	edit_class_cancel_button_text : 'Anuluj',
	edit_class_view_button_text	: 'Zobacz źródło',
	edit_class_saving_label : 'Zapisywanie...',
	edit_class_redirect_label : 'Przekierowanie...',
	end_of_file: ""

};



var twi18n_ro = {
	helloword:  "Bună, lume!",
	sample:     "există {1} \\{cpu\\} în {2}",
	sample2:    "există {1} termeni în {2}",
	
	ufPrivilege:	"Ne pare rău, nu aveţi privilegii suficiente pentru a salva pagina.",
		
	twRateLogin: "Trebuie să vă conectaţi pentru a vota.",
	twfRated: "Aţi evaluat deja acest comentariu.",
	twfThankForVoted: "Vă mulţumim pentru vot.",
    twaSaving: "Se salvează...",
    twaCancel: "Revocare",
    twaJoinMyBeaCulb: "Veniţi alături de mine la Bea Culb",
    twaThankYou: "Vă mulţumim!",
    twaReplysubmited: "S-a trimis răspunsul dvs.",
    twaPostOtherReply: "Publicaţi alt răspuns",
		
	talk_submit_reply : "se trimite comentariul de răspuns...",
		
	form_validate_comment : "Introduceţi un comentariu.",
	form_validate_length : "Introduceţi cel puţin {0} caractere.",
	
	//sign up - login  Added by Alim  2011-04-26
	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'>Se caută disponibilitatea...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   Nu poate fi necompletat</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> Nu poate avea mai puţin de 3 caractere</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> Nu poate avea mai puţin de 6 caractere</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> Nu poate avea mai mult de 30 de caractere</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>Nume de utilizator incorect</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>Numele de utilizator există deja</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  Parola nu poate fi aceeaşi cu numele de utilizator</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  Parola nu se potriveşte!</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> Adresă de e-mail incorectă</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  Această adresă de e-mail este deja utilizată!</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  Adresă de e-mail incorectă!</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  Codul de validare este incorect!</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  Trebuie să acceptaţi termenii de utilizare</span>",
	
	submit_comment_label		: "se trimite comentariul...",
	report_been_submit_button	: "S-a trimis raportul dvs.",
	report_other_button 		: "Publicaţi alt raport",
		
	/* === Added by Abe Wang 2011-12-16 === */
	share_been_submit_button    : "Vă mulţumim! Mesajul dvs. de e-mail s-a trimis la",
	share_other_button 			: "Mesaj de e-mail către alt prieten",
	
	lb_loading					:	"Se încarcă...",
	lb_add_remove_links         :    "Adăugaţi sau eliminaţi linkuri pentru limbă",
	lb_btn_apply                :    "Aplicare",
	lb_btn_cancel               :    "Revocare",
		
	/* ==== Added by Abe Wang 2011-08-25 ==== */
	/* ==== --file-- TWClient.js ==== */
	chat_login_label			: "Trebuie să vă conectaţi pentru a lăsa un mesaj",
	chat_no_yourself_label		: "Ne pare rău, dar TermWiki nu încurajează discuţiile de unul singur.",
	/* ==== --file-- TWUserForms.js ==== */
	chat_unread_label			: "Necitite",
	chat_recent_label			: "Recente",
	/* ==== --file-- TWChatForms.js  ==== */
	chat_input_text_label		: "Introduceţi textul",
	/* ==== --file-- TWMessageForm.js ==== */
	chat_send_button_text		: 'Trimitere',
	proreg_username_tip         : 'Deoarece conturile Pro pot fi partajate de mai multe persoane, trebuie ca fiecare utilizator să aibă un nume de utilizator propriu. De asemenea, puteţi beneficia de multe dintre caracteristicile comunităţii TermWiki devenind utilizator înregistrat pe TermWiki.com.',
    proreg_proname_invalid      : 'Numele contului este incorect, se acceptă numai caractere, numere şi spaţii.',
    proreg_proname_exist        : 'Acest nume de cont este deja utilizat!',
    proreg_tried_too_much       : 'Ne pare rău, aţi încercat de prea multe ori, încercaţi din nou peste {1} de secunde',
    proreg_password_wrong       : 'Parola este greşită, încercaţi din nou!',
    proreg_username_not_exist   : 'Numele de utilizator TermWiki introdus nu există.',
    proreg_accept_tns           : 'Trebuie să acceptaţi termenii de utilizare TermWiki pentru a vă înregistra pe acest site.',
    
	twus_terms_num				:	'termeni',
	twus_fans_num				:	'fani',
	twus_buzz_num				:	'mesaje buz',
	twus_pictures_num			:	'imagini',
	twus_answers_num			:	'răspunsuri',
	twus_questions_num			:	'întrebări',
	twc_please_input_text		:	'Introduceţi textul',
	edit_class_save_button_text : 'Salvare',
	edit_class_cancel_button_text : 'Revocare',
	edit_class_view_button_text	: 'Vizualizare sursă',
	edit_class_saving_label : 'Se salvează...',
	edit_class_redirect_label : 'Se redirecţionează...',
	end_of_file: ""

};



var twi18n_ru = {
	helloword:  "Привет, мир!",
	sample:     "{1} \\{cpu\\} в {2}",
	sample2:    "{1} терминов в {2}",
	
	ufPrivilege:	"Извините, у Вас недостаточно прав для сохранения этой страницы.",
		
	twRateLogin: "Войдите, чтобы проголосовать.",
	twfRated: "Вы уже оценили этот комментарий.",
	twfThankForVoted: "Спасибо за оценку.",
    twaSaving: "Сохранение...",
    twaCancel: "Отменить",
    twaJoinMyBeaCulb: "Присоединиться к моему Bea клубу",
    twaThankYou: "Спасибо!",
    twaReplysubmited: "Ваш ответ отправлен.",
    twaPostOtherReply: "Добавить еще один ответ",
		
	talk_submit_reply : "отправка комментария к ответу...",
		
	form_validate_comment : "Напишите комментарий.",
	form_validate_length : "Введите не менее {0} символов.",
	
	//sign up - login  Added by Alim  2011-04-26
	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'>Поиск наличия...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   Поле не может быть пустым</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> Должно быть более 3 символов</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> Должно быть более 6 символов</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> Должно быть не более 30 символов</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>Недопустимое имя пользователя</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>Имя пользователя уже существует</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  Пароль не должен совпадать с именем пользователя</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  Пароли не совпадают!</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> Недействительный адрес электронной почты</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  Этот адрес электронной почты уже используется!</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  Неправильный адрес электронной почты!</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  Неправильный код проверки!</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  Вы должны принять Условия использования</span>",
	
	submit_comment_label		: "отправить комментарий...",
	report_been_submit_button	: "Ваше сообщение отправлено.",
	report_other_button 		: "Отправить еще одно сообщение",
		
	/* === Added by Abe Wang 2011-12-16 === */
	share_been_submit_button    : "Спасибо! Ваше письмо было отправлено",
	share_other_button 			: "Отправить сообщение еще одному другу",
	
	lb_loading					:	"Загрузка...",
	lb_add_remove_links         :    "Добавить или удалить ссылки на языки",
	lb_btn_apply                :    "Применить",
	lb_btn_cancel               :    "Отменить",
		
	/* ==== Added by Abe Wang 2011-08-25 ==== */
	/* ==== --file-- TWClient.js ==== */
	chat_login_label			: "Войдите, чтобы оставить сообщение",
	chat_no_yourself_label		: "Извините, в социальной сети TermWiki не приветствуется диалог с самим собой.",
	/* ==== --file-- TWUserForms.js ==== */
	chat_unread_label			: "Непрочитанные сообщения",
	chat_recent_label			: "Недавние сообщения",
	/* ==== --file-- TWChatForms.js  ==== */
	chat_input_text_label		: "Введите текст сообщения",
	/* ==== --file-- TWMessageForm.js ==== */
	chat_send_button_text		: 'Отправить',
	proreg_username_tip         : 'Несколько участников могут иметь один аккаунт Pro, поэтому каждый пользователь должен иметь свое имя пользователя. После регистрации в социальной сети TermWiki, Вам станут доступны многие возможности сообщества TermWiki.',
    proreg_proname_invalid      : 'Недопустимое имя аккаунта, поддерживаются только символы, цифры и пробелы.',
    proreg_proname_exist        : 'Это имя аккаунта уже используется!',
    proreg_tried_too_much       : 'Извините, превышено количество попыток введения пароля, попробуйте через {1} секунд(-ы)',
    proreg_password_wrong       : 'Неправильный пароль, повторите попытку!',
    proreg_username_not_exist   : 'Введенное имя пользователя TermWiki не существует.',
    proreg_accept_tns           : 'Чтобы зарегистрироваться на этом сайте, Вы должны принять Условия использования.',
    
	twus_terms_num				:	'термины',
	twus_fans_num				:	'фаны',
	twus_buzz_num				:	'buzes',
	twus_pictures_num			:	'изображения',
	twus_answers_num			:	'ответы',
	twus_questions_num			:	'вопросы',
	twc_please_input_text		:	'Введите текст сообщения',
	edit_class_save_button_text : 'Сохранить',
	edit_class_cancel_button_text : 'Отменить',
	edit_class_view_button_text	: 'Обзор источника',
	edit_class_saving_label : 'Сохранение...',
	edit_class_redirect_label : 'Перенаправить...',
	end_of_file: ""

};



var twi18n_tr = {
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'>Kullanılabilirlik aranıyor...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   Boş bırakılamaz</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> 3 karakterden az olamaz</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> 6 karakterden az olamaz</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> 30 karakterden fazla olamaz</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>Geçersiz Kullanıcı Adı</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>Kullanıcı adı zaten var</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  Parola kullanıcı adıyla aynı olamaz</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  Parolalar eşleşmiyor!</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> Geçersiz e-posta adresi</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  Bu e-posta adresi zaten kullanılıyor!</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  Geçersiz e-posta adresi!</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  Doğrulama Kodu hatalı!</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  Kullanım Koşullarını kabul etmelisiniz</span>",
	
	submit_comment_label		: "yorum gönder...",
	report_been_submit_button	: "Raporunuz gönderildi.",
	report_other_button 		: "Başka Bir Rapor Gönderin",
		
	/* === Added by Abe Wang 2011-12-16 === */
	share_been_submit_button    : "Teşekkürler! E-postanız gönderildi:",
	share_other_button 			: "Başka Bir Arkadaşa E-posta Gönderin",
	
	lb_loading					:	"Yükleniyor...",
	lb_add_remove_links         :    "Dil Bağlantıları Ekle veya Kaldır",
	lb_btn_apply                :    "Uygula",
	lb_btn_cancel               :    "İptal",
		
	/* ==== Added by Abe Wang 2011-08-25 ==== */
	/* ==== --file-- TWClient.js ==== */
	chat_login_label			: "Mesaj bırakmak için oturum açmalısınız",
	chat_no_yourself_label		: "Üzgünüz fakat TermWiki kendinizle konuşmanızı desteklemiyor.",
	/* ==== --file-- TWUserForms.js ==== */
	chat_unread_label			: "Okunmamış",
	chat_recent_label			: "Son",
	/* ==== --file-- TWChatForms.js  ==== */
	chat_input_text_label		: "Lütfen metin girin",
	/* ==== --file-- TWMessageForm.js ==== */
	chat_send_button_text		: 'Gönder',
	proreg_username_tip         : 'Pro hesaplar birden fazla kullanıcıyla paylaşılabileceğinden, her kullanıcının kendi kullanıcı adı olması gerekmektedir. TermWiki.com\'un kayıtlı kullanıcısı olarak TermWiki topluluğunun pek çok özelliğinden de faydalanabilirsiniz.',
    proreg_proname_invalid      : 'Hesap adı geçersiz; yalnız karakterler, rakamlar ve boşluk desteklenmektedir.',
    proreg_proname_exist        : 'Bu hesap adı zaten kullanımda',
    proreg_tried_too_much       : 'Üzgünüz, fazla sayıda deneme yaptınız; lütfen {1} saniye sonra tekrar deneyin',
    proreg_password_wrong       : 'Parolanız hatalı; lütfen tekrar deneyin!',
    proreg_username_not_exist   : 'Girdiğiniz TermWiki kullanıcı adı mevcut değil.',
    proreg_accept_tns           : 'Siteye kayıt olmak için TermWiki Hizmet Şartlarını kabul etmelisiniz.',
    
	twus_terms_num				:	'terimler',
	twus_fans_num				:	'hayranlar',
	twus_buzz_num				:	'buzlar',
	twus_pictures_num			:	'resimler',
	twus_answers_num			:	'yanıtlar',
	twus_questions_num			:	'sorular',
	twc_please_input_text		:	'Lütfen metin girin',
	edit_class_save_button_text : 'Kaydet',
	edit_class_cancel_button_text : 'İptal',
	edit_class_view_button_text	: 'Kaynağa Bakın',
	edit_class_saving_label : 'Kaydediliyor...',
	edit_class_redirect_label : 'Yönlendiriliyor...',
	end_of_file: ""

};



var twi18n_bg = {
	ufPrivilege:	"Съжаляваме, но не разполагат с достатъчно права, за да спаси страница.",
		
	twRateLogin: "Трябва да влезете в системата за гласуване.",
	twfRated: "Вече сте оценили този коментар.",
	twfThankForVoted: "Благодаря за вашия глас.",
    twaSaving: "Запазва се ...",
    twaCancel: "Отказ",
    twaJoinMyBeaCulb: "Присъединете се към моята Culb Беа",
    twaThankYou: "Благодаря ви за вниманието!",
    twaReplysubmited: "Вашият отговор е била представена.",
    twaPostOtherReply: "Мнение друг отговор",
		
	talk_submit_reply : "подаване на отговор коментар ...",
		
	form_validate_comment : "Моля, въведете коментар.",
	form_validate_length : "Въведете поне {0} знака.",
	
	//sign up - login  Added by Alim  2011-04-26
	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'> Търсене за наличност ...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   Не може да е празно</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> Не може да бъде по-малко от три знака</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> Не може да бъде по-малко от 6 символа</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> Не може да бъде повече от 30 символа</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>Незаконен име</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>Потребителското име вече съществува</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  Паролата не може да бъде същото с потребителско име</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  Паролите не съвпадат!</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> Незаконен имейл адрес</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  Този имейл вече е в употреба!</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  Невалиден имейл адрес!</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  Потвърждаване код е грешен!</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  Вие трябва да приемете Условия за ползване</span>",
	
	submit_comment_label		: "представя коментар ...",
	report_been_submit_button	: "Вашият отчет е бил предаден.",
	report_other_button 		: "Мнение друг доклад",
		
	/* === Added by Abe Wang 2011-12-16 === */
	share_been_submit_button    : "Благодаря ви за вниманието! Вашият имейл е изпратен",
	share_other_button 			: "Имейл до друг приятел",
	
	lb_loading					:	"Loading...",
	lb_add_remove_links         :    "Добавяне или премахване на езиковите връзки",
	lb_btn_apply                :    "Нанесете",
	lb_btn_cancel               :    "Отказ",
		
	/* ==== Added by Abe Wang 2011-08-25 ==== */
	/* ==== --file-- TWClient.js ==== */
	chat_login_label			: "Трябва да влезете, за да оставите съобщение",
	chat_no_yourself_label		: "Съжаляваме, но TermWiki не насърчават да говори за себе си.",
	/* ==== --file-- TWUserForms.js ==== */
	chat_unread_label			: "непрочетен",
	chat_recent_label			: "скорошен",
	/* ==== --file-- TWChatForms.js  ==== */
	chat_input_text_label		: "Моля, въвеждане на текст",
	/* ==== --file-- TWMessageForm.js ==== */
	chat_send_button_text		: 'изпращам',
	proreg_username_tip         : 'Pro сметки могат да бъдат споделяни от няколко лица, е необходимо, че всеки потребител има свое собствено потребителско име.. Можете също така да се възползват от много от характеристиките на Общността TermWiki като станете регистриран потребител на TermWiki.com..',
    proreg_proname_invalid      : 'Име на акаунт незаконни, а само символи подкрепа, номера и пространство.',
    proreg_proname_exist        : 'Тази сметка име вече се използва',
    proreg_tried_too_much       : 'За съжаление, твърде много са се опитвали, моля опитайте отново след {1} секунди',
    proreg_password_wrong       : 'Вашата парола не е наред, моля опитайте отново!',
    proreg_username_not_exist   : 'TermWiki сте въвели потребителско име не съществува.',
    proreg_accept_tns           : 'Вие трябва да приемете TermWiki Условия за ползване, за да се регистрират в сайта.',
    
	twus_terms_num				:	'условия',
	twus_fans_num				:	'фенове',
	twus_buzz_num				:	'buzes',
	twus_pictures_num			:	'снимки',
	twus_answers_num			:	'отговори',
	twus_questions_num			:	'въпроси',
	twc_please_input_text		:	'Моля, въвеждане на текст',
	
	/* ==== Added by Abe Wang 2012-05-12 ==== */	
	/* ==== EditClass.js ==== */
	edit_class_save_button_text : 'спасяване',
	edit_class_cancel_button_text : 'Отказ',
	edit_class_view_button_text	: 'Преглед на изходния код',
	edit_class_saving_label : 'Запазва се ...',
	edit_class_redirect_label : 'Пренасочване ...',
		
	end_of_file: "" };


var twi18n_cs = {
	ufPrivilege:	"Je nám líto, nemáte dostatečná oprávnění k uložení stránky..",
		
	twRateLogin: "Musíte se přihlásit, abyste mohli hlasovat.",
	twfRated: "Už jste hodnotili tento komentář.",
	twfThankForVoted: "Díky za váš hlas.",
    twaSaving: "Ukládání ...",
    twaCancel: "Zrušit",
    twaJoinMyBeaCulb: "Připojit My Bea Culb",
    twaThankYou: "Děkujeme!",
    twaReplysubmited: "Vaše odpověď byla odeslána.",
    twaPostOtherReply: "Příspěvek jinou odpověď",
		
	talk_submit_reply : "předložením odpovědi komentář ...",
		
	form_validate_comment : "Zadejte prosím komentář.",
	form_validate_length : "Zadejte alespoň {0} znaků",
	
	//sign up - login  Added by Alim  2011-04-26
	
	su_process_request			:	"<img src='images/loading.gif' width='16' height='16' border='0' align='absmiddle'> Hledám k dispozici...",
	su_process_right			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/04.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_process_failed			:	"<span style='COLOR:#006600'> <img class='img_margin' src='images/signup/01.gif' width='16' height='16' border='0' align='absmiddle'> </span>",
	su_empty					:	"<span  style='COLOR:#ff0000'>   Nemůže být prázdný</span>",
	su_shorter_3				:	"<span style='COLOR:#ff0000'> Může to být menší než 3 znaky</span>",
	su_shorter_6				:	"<span style='COLOR:#ff0000'> Může to být menší než 6 znaků</span>",
	su_longer_30				:	"<span style='COLOR:#ff0000'> Nemůže být větší než 30 znaků</span>",
	su_username_invalid			:	"<span style='COLOR:#ff0000'>Nelegální jméno</span>",
	su_username_exist			:	"<span style='COLOR:#ff0000'>Uživatelské jméno již existuje</span>",
	su_password_username		:	"<span style='COLOR:#ff0000'>  Heslo nesmí být stejné s uživatelským jménem</span>",
	su_confirm_password_invalid	:	"<span style='COLOR:#ff0000'>  Hesla se neshodují!</span>",
	su_email_invalid			:	"<span style='COLOR:#ff0000'> Nelegální e-mailová adresa</span>",
	su_email_exist				:	"<span style='COLOR:#ff0000'>  Tento e-mail je již v provozu!</span>",
	su_email_format				:	"<span style='COLOR:#ff0000'>  Neplatná e-mailová adresa!</span>",
	su_vcode					:	"<span style='COLOR:#ff0000'>  Validation Code je nesprávné!</span>",
	su_agreement				:	"<span style='COLOR:#ff0000'>  Musíte přijmout podmínky užívání</span>",
	
	submit_comment_label		: "odeslat komentář ...",
	report_been_submit_button	: "Vaše zpráva byla odeslána.",
	report_other_button 		: "Příspěvek jiné zprávy",
		
	/* === Added by Abe Wang 2011-12-16 === */
	share_been_submit_button    : "Děkujeme! Váš e-mail byl odeslán",
	share_other_button 			: "E-mail na jiný Friend",
	
	lb_loading					:	"Loading ...",
	lb_add_remove_links         :    "Přidat nebo odebrat Jazyková odkazy",
	lb_btn_apply                :    "Platit",
	lb_btn_cancel               :    "Zrušit",
		
	/* ==== Added by Abe Wang 2011-08-25 ==== */
	/* ==== --file-- TWClient.js ==== */
	chat_login_label			: "Musíte se přihlásit, abyste mohli nechat zprávu",
	chat_no_yourself_label		: "Je nám líto, ale TermWiki nepodporuje mluvit k sobě.",
	/* ==== --file-- TWUserForms.js ==== */
	chat_unread_label			: "Nepřečtený",
	chat_recent_label			: "Nedávný",
	/* ==== --file-- TWChatForms.js  ==== */
	chat_input_text_label		: "Prosím vložte text,",
	/* ==== --file-- TWMessageForm.js ==== */
	chat_send_button_text		: 'Odeslat',
	proreg_username_tip         : 'Jako Pro účty mohou být sdíleny více osob, je nezbytné, aby každý uživatel má svůj vlastní uživatelské jméno.. Můžete také těžit z mnoha funkcím komunity TermWiki tím, že se registrovaný uživatel TermWiki.com.',
    proreg_proname_invalid      : 'Název účtu je ilegální, podporují pouze znaky, čísla a prostor.',
    proreg_proname_exist        : 'To je název účtu již v provozu',
    proreg_tried_too_much       : 'Je nám líto, že jste se snažil příliš mnoho, zkuste to prosím znovu po {1} sekund ',
    proreg_password_wrong       : 'Vaše heslo je špatně, prosím zkuste to znovu!',
    proreg_username_not_exist   : 'Uživatelské jméno TermWiki jste zadali neexistuje.',
    proreg_accept_tns           : 'Musíte přijmout TermWiki Smluvní podmínky tak, aby se zaregistrovat na webu.',
    
	twus_terms_num				:	'podmínky',
	twus_fans_num				:	'ventilátory',
	twus_buzz_num				:	'buzes',
	twus_pictures_num			:	'Fotografie',
	twus_answers_num			:	'odpovědi',
	twus_questions_num			:	'otázky',
	twc_please_input_text		:	'Prosím vložte text,',
	
	/* ==== Added by Abe Wang 2012-05-12 ==== */	
	/* ==== EditClass.js ==== */
	edit_class_save_button_text : 'Uložit',
	edit_class_cancel_button_text : 'Zrušit',
	edit_class_view_button_text	: 'Zobrazit zdroj',
	edit_class_saving_label : 'Ukládání ...',
	edit_class_redirect_label : 'Přesměrování ...',
		
	end_of_file: "" };


/* filename: /common/executeMT.js weight: 1*/
// JavaScript Document

var twMTExt = function(){ 

    var isLoading = false;
    function ajax_request(params, action, callback, object) {
    	if(typeof params == "undefined" || typeof params != "object") return false;
    	if(typeof action == "undefined") action = "POST";

        $.ajax({
            type    : action,
            url     : TWProject.getAjaxUrl("MTAjax::translate"),
            data    : params,
            success : function(response) {
            	if(typeof callback != "function") 
            		ajax_response(response);
            	else {
            		callback.call(object, response);
            	}
            }
        });
    }
    
    function ajax_response(response) {
        var result_object = object_from_json(response);
    }
    
    function object_from_json(str){
        var r = null;    
        try {
            eval("r = " + str + ";");
        }
        catch(e) {
            return null;
        }
        return r;
    }
    
	function twExecuteMT() {
		this.callback = null;
	}
	
	twExecuteMT.prototype = {
		translate : function(slang, tlang, text, fn) {
			this.callback = fn;
			this.send_request(slang, tlang, text);
		},
			
		processResponse : function(response) {
			isLoading = false;
			var result = {error : false, translation : response};
			this.callback.call(this, result);
		},
		
		send_request : function(s, t, text) {
			isLoading = true;
			ajax_request({"slang" : s, "tlang" : t, "text" : text}, "POST", this.processResponse, this);
		}
	}

	return {
		translate : function(slang, tlang, text, fn) {
			var mt = new twExecuteMT();
			mt.translate(slang, tlang, text, fn);
		}
	}
}();

/*
//example code:
function testMT(result) {
	alert(result.translation);
}

$(function() {
	twMTExt.translate("EN", "ZS", "test", testMT);
});
*/
/* filename: /Suntask/user_profile/jquery.confirm.js weight: 1*/
$(function(){
	
	$.confirm = function(params){
		
		if($('#confirmOverlay').length){
			// A confirm is already shown on the page:
			return false;
		}
		
		var buttonHTML = '';
		$.each(params.buttons,function(name,obj){
			
			// Generating the markup for the buttons:
			
			buttonHTML += '<a href="#" class="button '+obj['class']+'">'+name+'<span></span></a>';
			
			if(!obj.action){
				obj.action = function(){};
			}
		});
		
		var markup = [
			'<div id="confirmOverlay">',
			'<div id="confirmBox">',
			'<h1>',params.title,'</h1>',
			'<p>',params.message,'</p>',
			'<div id="confirmButtons">',
			buttonHTML,
			'</div></div></div>'
		].join('');
		$(markup).hide().appendTo('body').fadeIn();
		
		var buttons = $('#confirmBox .button'),
			i = 0;

		$.each(params.buttons,function(name,obj){
			buttons.eq(i++).click(function(){
				
				// Calling the action attribute when a
				// click occurs, and hiding the confirm.
				
				obj.action();
				$.confirm.hide();
				return false;
			});
		});
	}

	$.confirm.hide = function(){
		$('#confirmOverlay').fadeOut(function(){
			$(this).remove();
		});
	}
	
});
/* filename: /common/twPersonalExtension/twPersonalTopMenu.js weight: 1*/
// JavaScript Document

var twPersonalExtensions = function(){ 

	function twTopMenu() {
		this.menuPanelIsShow = false;
	}
	
	twTopMenu.prototype = {		
		show : function() {
			$("#twPersonalMenuPanel").slideDown("slow");
			this.menuPanelIsShow = true;
		},
			
		close : function(e) {
			if(this.menuPanelIsShow) {
				this.menuPanelIsShow = false;
				$("#twPersonalMenuPanel").fadeOut("slow");
			}
		},
			
		setup : function() {
			var self = this;

			$("body").bind("click", function() {
				self.close();
			});
			
			$("#closeMenuPanel").click(function(event){
				if(event && event.stopPropagation){
					event.stopPropagation();
				}
				else{
					window.event.cancelBubble = true;
				}
				self.close();
			});
			
            if(document.getElementById("pt-morelanguages") != undefined || document.getElementById("pt-morelanguages") != null) {
				document.getElementById("pt-morelanguages").onclick = function(event) {
					if(event && event.stopPropagation){
						event.stopPropagation();
					}
					else{
						window.event.cancelBubble = true;
					}
					self.show();
				}
			}
			
		}
	}

	return {
		init : function() {
			this.topMenu = new twTopMenu();	
			this.topMenu.setup();
		}
	}
}();

$(function() {
	twPersonalExtensions.init();
});

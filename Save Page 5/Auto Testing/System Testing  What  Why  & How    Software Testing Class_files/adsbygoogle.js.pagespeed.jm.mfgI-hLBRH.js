(function(){var m=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},n=function(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return n.apply(null,arguments)},da=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};var u=(new Date).getTime();var ea=function(){},v=function(a,b,c){switch(typeof b){case"string":fa(b,c);break;case"number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case"boolean":c.push(b);break;case"undefined":c.push("null");break;case"object":if(null==b){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var f="",g=0;g<d;g++)c.push(f),v(a,b[g],c),f=",";c.push("]");break}c.push("{");d="";for(f in b)b.hasOwnProperty(f)&&(g=b[f],"function"!=typeof g&&(c.push(d),fa(f,c),c.push(":"),v(a,g,c),d=","));c.push("}");break;case"function":break;default:throw Error("Unknown type: "+typeof b);}},w={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ga=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,fa=function(a,b){b.push('"');b.push(a.replace(ga,function(a){if(a in w)return w[a];var b=a.charCodeAt(0),f="\\u";16>b?f+="000":256>b?f+="00":4096>b&&(f+="0");return w[a]=f+b.toString(16)}));b.push('"')};var ha=/&/g,ia=/</g,ja=/>/g,ka=/"/g,la=/'/g,y={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},A={"'":"\\'"};var B=function(a){B[" "](a);return a};B[" "]=function(){};var ma=document,C=window;var D=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},E=function(a){return!!a&&"function"==typeof a&&!!a.call},na=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},G=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var d=new Uint16Array(1);window.crypto.getRandomValues(d);c=d[0]/65536}catch(f){c=Math.random()}return a[Math.floor(c*a.length)]}}return null},oa=function(a){a.google_unique_id?++a.google_unique_id:a.google_unique_id=1},H=function(a){a=a.google_unique_id;return"number"==typeof a?a:0},I=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},pa=function(a){for(var b=[],c=0;a&&25>c;++c){var d=9!=a.nodeType&&a.id,d=d?"/"+d:"",f;t:{var g=a.parentElement;f=a.nodeName.toLowerCase();if(g)for(var g=g.childNodes,e=0,h=0;h<g.length;++h){var k=g[h];if(k.nodeName&&k.nodeName.toLowerCase()==f){if(a==k){f="."+e;break t}++e}}f=""}b.push((a.nodeName&&a.nodeName.toLowerCase())+d+f);a=a.parentElement}return b.join()},qa=function(a){var b=[];if(a)try{for(var c=a.parent,d=0;c&&c!=a&&25>d;++d){for(var f=c.frames,g=0;g<f.length;++g)if(a==f[g]){b.push(g);break}a=c;c=a.parent}}catch(e){}return b.join()},ra=function(a,b,c,d){c=[c.google_ad_slot,c.google_ad_format,c.google_ad_type,c.google_ad_width,c.google_ad_height];if(d){a=[];for(d=0;b&&25>d;b=b.parentNode,++d)a.push(9!=b.nodeType&&b.id||"");(b=a.join())&&c.push(b)}else c.push(pa(b)),c.push(qa(a));return I(c.join(":")).toString()},J=function(a){try{return!!a.location.href||""===a.location.href}catch(b){return!1}};var sa={google_analytics_domain_name:!0,google_analytics_uacct:!0},ta=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];D(a,function(a,d){if(null!=a){var f;try{var g=[];v(new ea,a,g);f=g.join("")}catch(e){}f&&na(b,d,"=",f,";")}});return b.join("")};var K=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ua=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,va=function(a,b){if(!a)return b;var c=a.match(ua);return c?c[0]:b};var wa=K("0.15"),xa=K(""),ya=K("0.001"),za=K("0.2"),Aa=K("0.001");var Ba=/^true$/.test("false")?!0:!1;var L=!0,Ca={},Ea=function(a,b,c,d){var f,g=L;try{f=c()}catch(e){try{var h,k=e.toString();e.name&&-1==k.indexOf(e.name)&&(k+=": "+e.name);e.message&&-1==k.indexOf(e.message)&&(k+=": "+e.message);if(e.stack){var l=e.stack;c=k;try{-1==l.indexOf(c)&&(l=c+"\n"+l);for(var q;l!=q;)q=l,l=l.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");k=l.replace(/\n */g,"\n")}catch(p){k=c}}h=k;k="";e.fileName&&(k=e.fileName);l=-1;e.lineNumber&&(l=e.lineNumber);var r;t:{try{r=d?d():"";break t}catch(U){}r=""}g=b(a,h,k,l,r)}catch(x){Da({context:"protectAndRun",msg:x.toString()+"\n"+(x.stack||"")})}if(!g)throw e;}return f},Ga=function(a,b,c,d,f,g){a={context:a,msg:b.substring(0,512),eid:f&&f.substring(0,40),file:c,line:d.toString(),url:ma.URL.substring(0,512),ref:ma.referrer.substring(0,512)};Fa(a);Da(a,g);return L},Da=function(a,b){if(Math.random()<(b||0.01)){var c="/pagead/gen_204?id=jserror"+Ha(a),c="http"+("https:"==C.location.protocol?"s":"")+"://pagead2.googlesyndication.com"+c,c=c.substring(0,2E3);C.google_image_requests||(C.google_image_requests=[]);var d=C.document.createElement("img");d.src=c;C.google_image_requests.push(d)}},Fa=function(a){var b=a||{};D(Ca,function(a,d){b[d]=C[a]})},M=function(a,b){return da(Ea,a,Ga,b,void 0)},Ha=function(a){var b="";D(a,function(a,d){if(0===a||a)b+="&"+d+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};L=!/^true$/.test("false");Ca={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",zrtm:"google_ad_handling_mode",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment"};var N=/^([0-9.]+)px$/,Ia=/^([0-9.]+)$/,O=[{width:120,height:240,format:"vertical"},{width:120,height:600,format:"vertical"},{width:125,height:125,format:"rectangle"},{width:160,height:600,format:"vertical"},{width:180,height:150,format:"rectangle"},{width:200,height:200,format:"rectangle"},{width:234,height:60,format:"horizontal"},{width:250,height:250,format:"rectangle"},{width:300,height:250,format:"rectangle"},{width:300,height:600,format:"vertical"},{width:320,height:50,format:"horizontal"},{width:336,height:280,format:"rectangle"},{width:468,height:60,format:"horizontal"},{width:728,height:90,format:"horizontal"},{width:970,height:90,format:"horizontal"}],Ja=function(a,b){for(var c=["width","height"],d=0;d<c.length;d++){var f="google_ad_"+c[d];if(!b.hasOwnProperty(f)){var g=N.exec(a[c[d]]);g&&(b[f]=Math.round(g[1]))}}},La=function(a,b,c){O.sort(function(a,b){return a.width-b.width||a.height-b.height});"auto"==b&&(b=Ka(c),b=Math.min(1200,b),b=0.25>=a/b?"vertical":"horizontal,rectangle");for(c=O.length;c--;)if(O[c].width<=a&&-1!=b.indexOf(O[c].format))return O[c];return null},Ka=function(a){a=a.document;return a.documentElement.clientWidth||a.body.clientWidth};var Ma=!!window.google_async_iframe_id,Na=function(a,b,c){var d=["<iframe"],f;for(f in a)a.hasOwnProperty(f)&&na(d,f+"="+a[f]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins style="display:inline-table;',b,'"><ins id="',a.id+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var P=null,Oa=function(){if(!P){for(var a=window,b=a,c=0;a!=a.parent;)if(a=a.parent,c++,J(a))b=a;else break;P=b}return P};var Q=function(a,b,c){c||(c=Ba?"https":"http");return[c,"://",a,b].join("")};var R=null;var S=function(a){this.b=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:n(this.m,this)});this.j=a.google_iframe_oncopy},Pa;var T="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";/[&<>"']/.test(T)&&(-1!=T.indexOf("&")&&(T=T.replace(ha,"&amp;")),-1!=T.indexOf("<")&&(T=T.replace(ia,"&lt;")),-1!=T.indexOf(">")&&(T=T.replace(ja,"&gt;")),-1!=T.indexOf('"')&&(T=T.replace(ka,"&quot;")),-1!=T.indexOf("'")&&(T=T.replace(la,"&#39;")));Pa=T;S.prototype.set=function(a,b){this.j.handlers[a]=b;this.b.addEventListener&&this.b.addEventListener("load",n(this.k,this,a),!1)};S.prototype.k=function(a){a=this.b.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};S.prototype.m=function(a,b){var c=Qa("rx",a),d;t:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break t}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var Qa=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var V;t:{var Ra=m.navigator;if(Ra){var Sa=Ra.userAgent;if(Sa){V=Sa;break t}}V=""}var W=function(a){return-1!=V.indexOf(a)};var Ta=W("Opera")||W("OPR"),Ua=W("Trident")||W("MSIE"),Va=W("Gecko")&&-1==V.toLowerCase().indexOf("webkit")&&!(W("Trident")||W("MSIE")),Wa=-1!=V.toLowerCase().indexOf("webkit");(function(){var a="",b;if(Ta&&m.opera)return a=m.opera.version,"function"==aa(a)?a():a;Va?b=/rv\:([^\);]+)(\)|;)/:Ua?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Wa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(V))?a[1]:"");return Ua&&(b=(b=m.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var X,Y=function(a){this.c=[];this.b=a||window;this.a=0;this.d=null;this.e=0},Xa=function(a,b){this.l=a;this.i=b};Y.prototype.o=function(a,b){0!=this.a||0!=this.c.length||b&&b!=window?this.h(a,b):(this.a=2,this.g(new Xa(a,window)))};Y.prototype.h=function(a,b){this.c.push(new Xa(a,b||this.b));Z(this)};Y.prototype.p=function(a){this.a=1;if(a){var b=M("sjr::timeout",n(this.f,this,!0));this.d=this.b.setTimeout(b,a)}};Y.prototype.f=function(a){a&&++this.e;1==this.a&&(null!=this.d&&(this.b.clearTimeout(this.d),this.d=null),this.a=0);Z(this)};Y.prototype.q=function(){return!(!window||!Array)};Y.prototype.r=function(){return this.e};Y.prototype.nq=Y.prototype.o;Y.prototype.nqa=Y.prototype.h;Y.prototype.al=Y.prototype.p;Y.prototype.rl=Y.prototype.f;Y.prototype.sz=Y.prototype.q;Y.prototype.tc=Y.prototype.r;var Z=function(a){var b=M("sjr::tryrun",n(a.n,a));a.b.setTimeout(b,0)};Y.prototype.n=function(){if(0==this.a&&this.c.length){var a=this.c.shift();this.a=2;var b=M("sjr::run",n(this.g,this,a));a.i.setTimeout(b,0);Z(this)}};Y.prototype.g=function(a){this.a=0;a.l()};var Ya=function(a){try{return a.sz()}catch(b){return!1}},Za=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&Ya(a)&&E(a.nq)&&E(a.nqa)&&E(a.al)&&E(a.rl)},$=function(){if(X&&Ya(X))return X;var a=Oa(),b=a.google_jobrunner;return Za(b)?X=b:a.google_jobrunner=X=new Y(a)},$a=function(a,b){$().nq(a,b)},ab=function(a,b){$().nqa(a,b)};var bb={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0},cb=function(){var a=B("script");return["<",a,' src="',Q(va("","pagead2.googlesyndication.com"),"/pagead/js/r20140429/r20140417/show_ads_impl.js",""),'"></',a,">"].join("")},db=function(a,b,c,d){return function(){var f=!1;d&&$().al(3E4);var g=a.document.getElementById(b);g&&!J(g.contentWindow)&&3==a.google_top_js_status&&(a.google_top_js_status=6);try{if(J(a.document.getElementById(b).contentWindow)){var e=a.document.getElementById(b).contentWindow,h=e.document;h.body&&h.body.firstChild||(h.open(),e.google_async_iframe_close=!0,h.write(c))}else{var k=a.document.getElementById(b).contentWindow,l;g=c;g=String(g);if(g.quote)l=g.quote();else{e=['"'];for(h=0;h<g.length;h++){var q=g.charAt(h),p=q.charCodeAt(0),r=e,U=h+1,x;if(!(x=y[q])){var F;if(31<p&&127>p)F=q;else{var t=q;if(t in A)F=A[t];else if(t in y)F=A[t]=y[t];else{var s=t,z=t.charCodeAt(0);if(31<z&&127>z)s=t;else{if(256>z){if(s="\\x",16>z||256<z)s+="0"}else s="\\u",4096>z&&(s+="0");s+=z.toString(16).toUpperCase()}F=A[t]=s}}x=F}r[U]=x}e.push('"');l=e.join("")}k.location.replace("javascript:"+l)}f=!0}catch(rb){k=Oa().google_jobrunner,Za(k)&&k.rl()}f&&(f=Qa("google_async_rrc",c),(new S(a)).set(b,db(a,b,f,!1)))}},eb=function(a){var b=["<iframe"];D(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},fb=function(a,b,c,d){d=d?'"':"";var f=d+"0"+d;a.width=d+b+d;a.height=d+c+d;a.frameborder=f;a.marginwidth=f;a.marginheight=f;a.vspace=f;a.hspace=f;a.allowtransparency=d+"true"+d;a.scrolling=d+"no"+d},hb=function(a,b,c){gb(a,b,c,function(a,b,g){a=a.document;for(var e=b.id,h=0;!e||a.getElementById(e);)e="aswift_"+h++;b.id=e;b.name=e;e=Number(g.google_ad_width);h=Number(g.google_ad_height);16==g.google_reactive_ad_format?(g=a.createElement("div"),g.innerHTML=Na(b,e,h),c.appendChild(g.firstChild)):c.innerHTML=Na(b,e,h);return b.id})},gb=function(a,b,c,d){var f=B("script"),g={};fb(g,b.google_ad_width,b.google_ad_height,!0);g.onload='"'+Pa+'"';d=d(a,g,b);g=b.google_override_format||!bb[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used?G(["c","e"],za):null;var e=b.google_ad_output,h=b.google_ad_format;h||"html"!=e&&null!=e||(h=b.google_ad_width+"x"+b.google_ad_height,"e"==g&&(h+="_as"));e=!b.google_ad_slot||b.google_override_format||!bb[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;h=h&&e?h.toLowerCase():"";b.google_ad_format=h;h=ra(null,c,b,!0);b.google_ad_unit_key=h;h=a.google_adk2_experiment=a.google_adk2_experiment||G(["C","E"],ya)||"N";if("E"==h){b.google_ad_unit_key_2=ra(a,c,b);h=[b.google_ad_slot,b.google_ad_type];b.google_ad_unit_key_var=I(h.join());e=qa(a);h.push(e);b.google_ad_unit_key_win=I(e);e=pa(c);h.push(e);b.google_ad_unit_key_dom=I(e);e=[b.google_ad_width,b.google_ad_height];if(c&&a&&(c=a.getComputedStyle?a.getComputedStyle(c,null):c.currentStyle)){var k=(c.display||"inline").replace("none","inline"),l=c.position||"static",q=c.cssFloat||c.styleFloat||"none";e.push(l);"static"==l||"relative"==l?(e.push("none"==q?k:""),e.push(q)):(e.push(""),e.push(""));if("static"!=l)for(k=["top","bottom","left","right"],l=0;l<k.length;l++)q=c[k[l]],e.push(q&&"auto"!=q?q:"")}b.google_ad_unit_key_css=I(e.join());b.google_ad_unit_key_3=I(h.join(":"))}else"C"==h&&(b.google_ad_unit_key_2="ctrl");b=ta(b);var p;if(c=Ma?1==H(a):!H(a)){if(!R)n:{h=[C.top];c=[];for(e=0;k=h[e++];){c.push(k);try{if(k.frames)for(var r=k.frames.length,l=0;l<r&&1024>h.length;++l)h.push(k.frames[l])}catch(U){}}for(r=0;r<c.length;r++)try{if(p=c[r].frames.google_esf){R=p;break n}}catch(x){}R=null}c=!R}c?(p={},fb(p,0,0,!1),p.style="display:none",p.id="google_esf",p.name="google_esf",p.src=Q(va("","googleads.g.doubleclick.net"),"/pagead/html/r20140429/r20140417/zrt_lookup.html"),p=eb(p)):p="";r=(new Date).getTime();c=a.google_top_experiment;h=a.google_async_for_oa_experiment;e=a.google_always_use_delayed_impressions_experiment;k=a.google_available_width_experiment;g=["<!doctype html><html><body>",p,"<",f,">",b,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',d,'";google_start_time=',u,";",c?'google_top_experiment="'+c+'";':"",h?'google_async_for_oa_experiment="'+h+'";':"",e?'google_always_use_delayed_impressions_experiment="'+e+'";':"",g?'google_append_as_for_format_override="'+g+'";':"",k?'google_available_width_experiment="'+k+'";':"","google_bpp=",r>u?r-u:1,";google_async_rrc=0;</",f,">",cb(),"</body></html>"].join("");(a.document.getElementById(d)?$a:ab)(db(a,d,g,!0))},ib=Math.floor(1E6*Math.random()),jb=function(a){for(var b=a.data.split("\n"),c={},d=0;d<b.length;d++){var f=b[d].indexOf("=");-1!=f&&(c[b[d].substr(0,f)]=b[d].substr(f+1))}b=c[3];if(c[1]==ib&&(window.google_top_js_status=4,a.source==top&&0==b.indexOf(a.origin)&&(window.google_top_values=c,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}},kb=function(a,b){var c=navigator;if(a&&b&&c){try{var d=I([b,c.plugins&&c.plugins.length,a.screen&&a.screen.height,(new Date).getTimezoneOffset(),c.userAgent].join())}catch(f){return}if(d/4294967296<Aa){var d=a.document,c=d.createElement("script"),g;(g=b)?(g=g.toLowerCase())&&"ca-"!=g.substring(0,3)&&(g="ca-"+g):g="";c.src=Q("www.gstatic.com","/pub-config/"+g+".js");d=d.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d);a.google_per_pub_attempted=!0}}};var lb=function(a){return/(^| )adsbygoogle($| )/.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},nb=function(a,b,c){oa(c);mb(a,b,c);var d=c.getComputedStyle?c.getComputedStyle(a,null):a.currentStyle;if(!d||"none"!=d.display||"on"==b.google_adtest||0<b.google_reactive_ad_format){1==H(c)&&kb(c,b.google_ad_client);D(sa,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";if((d=b.google_ad_output)&&"html"!=d)throw Error("No support for google_ad_output="+d);Ea("aa::main",Ga,function(){hb(c,b,a)})}else c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag"))},mb=function(a,b,c){for(var d=a.attributes,f=d.length,g=0;g<f;g++){var e=d[g];if(/data-/.test(e.nodeName)){var h=e.nodeName.replace("data","google").replace(/-/g,"_");b.hasOwnProperty(h)||(e=e.nodeValue,"google_reactive_ad_format"==h&&(e=+e,e=isNaN(e)?null:e),null===e||(b[h]=e))}}if(1==b.google_reactive_ad_format)b.google_ad_width=320,b.google_ad_height=50,a.style.display="none";else if(d=b.google_ad_format,"auto"==d||/^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d)){d=a.offsetWidth;f=b.google_ad_format;c=La(d,f,c);if(!c)throw Error("Cannot find a responsive size for a container of width="+d+"px and data-ad-format="+f);b.google_ad_height=c.height;b.google_ad_width=300<d&&300<c.height?c.width:1200<d?1200:Math.round(d);a.style.height=b.google_ad_height+"px";b.google_ad_resizable=!0;delete b.google_ad_format;b.google_loader_features_used=128}else!Ia.test(b.google_ad_width)&&!N.test(a.style.width)||!Ia.test(b.google_ad_height)&&!N.test(a.style.height)?(c=c.getComputedStyle?c.getComputedStyle(a,null):a.currentStyle,a.style.width=c.width,a.style.height=c.height,Ja(c,b),b.google_loader_features_used=256):(void 0===window.google_available_width_experiment&&(window.google_available_width_experiment=G(["C","E"],xa)),"E"==window.google_available_width_experiment&&(c=a.style.width,a.style.width="100%",b.google_available_width=a.offsetWidth,a.style.width=c),Ja(a.style,b))},ob=function(a){for(var b=document.getElementsByTagName("ins"),c=0,d=b[c];c<b.length;d=b[++c])if(lb(d)&&(!a||d.id==a))return d;return null},pb=function(a){var b=a.element;a=a.params||{};if(b){if(!lb(b)&&(b=b.id&&ob(b.id),!b))throw Error("adsbygoogle: 'element' has already been filled.");if(!("innerHTML"in b))throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");}else if(b=ob(),!b)throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");var c=window;b.setAttribute("data-adsbygoogle-status","done");nb(b,a,c)},qb=function(){if(!window.google_top_experiment&&!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:J(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=C.top.frames.google_top_static_frame?!0:!1}catch(c){b=!1}if(b){if(window.google_top_experiment=G(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],wa),"jp_c"!==window.google_top_experiment){a=window;a.addEventListener?a.addEventListener("message",jb,!1):a.attachEvent&&a.attachEvent("onmessage",jb);window.google_top_js_status=3;a={0:"google_loc_request",1:ib};b=[];for(var d in a)b.push(d+"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}if((d=window.adsbygoogle)&&d.shift)for(b=20;(a=d.shift())&&0<b--;)try{pb(a)}catch(f){throw window.setTimeout(qb,0),f;}window.adsbygoogle={push:pb}};qb();})();
﻿function contentAdInit(e, t, n, r) { if (typeof this["contentAd" + e] == "undefined") { if (!contentAdWidgetCodeLoaded) { contentAdWidgetCodeLoaded = true; if (r) { (function () { function e() { var e = document.createElement("script"); e.type = "text/javascript"; e.async = true; e.src = t; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(e, n) } if (window.attachEvent) window.attachEvent("onload", e); else window.addEventListener("load", e, false) })() } else { (function () { var e = document.createElement("script"); e.type = "text/javascript"; e.async = true; e.src = t; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(e, n) })() } } setTimeout(function () { contentAdInit(e, t, n, r) }, 50) } else { var i = this["contentAd" + e](); var s = document.createElement("div"); s.innerHTML = i; n.parentNode.insertBefore(s, n); if (typeof this["initJQuery" + e] != "undefined") { this["initJQuery" + e]() } } } var contentAdScripts = []; var contentAdUrlRegEx = new RegExp("^(?:http[s]?:)?//(?:test\\.)?api.content.ad/Scripts/widget2.js\\?.*?", "i"); var scripts = document.getElementsByTagName("script"); for (var index = 0; index < scripts.length; ++index) { if (contentAdUrlRegEx.test(scripts[index].src)) { contentAdScripts.push(scripts[index]) } } var contentAdScript = contentAdScripts[contentAdScripts.length - 1]; var contentAdParams = function () { var e = {}, t = contentAdScript.src.substring(contentAdScript.src.indexOf("id=")), n = /([^&=]+)=([^&]*)/g, r; while (r = n.exec(t)) { e[decodeURIComponent(r[1])] = decodeURIComponent(r[2]) } e["lazyLoad"] = e["lazyLoad"] == true ? true : false; e["server"] = e["test"] == true ? "test.api.content.ad" : "api.content.ad"; e["title"] = e["title"] ? e["title"] : encodeURI(escape(document.title)); e["url"] = e["url"] ? e["url"] : encodeURIComponent(window.location); return e } (); var contentAdParamArray = []; for (var key in contentAdParams) { contentAdParamArray.push(key + "=" + contentAdParams[key]) } var contentAdWidgetUrl = (location.protocol === 'https:' ? 'https:' : 'http:') + "//" + contentAdParams.server + "/GetWidget.aspx?" + contentAdParamArray.join("&"); var contentAdWidgetCodeLoaded = false; contentAdInit(contentAdParams.wid, contentAdWidgetUrl, contentAdScript, contentAdParams.lazyLoad)
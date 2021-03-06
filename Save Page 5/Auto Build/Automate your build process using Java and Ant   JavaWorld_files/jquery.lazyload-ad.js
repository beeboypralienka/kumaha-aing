/*https://s3.amazonaws.com/web2ajax/assets/js/jquery.lazyload-ad-last.js*/
var LazyLoader = {};
LazyLoader.timer = {};
LazyLoader.scripts = [];
LazyLoader.load = function (b, d, i) {
    var g = null,
        c = null;
    try {
        LazyLoader.scripts.push(b);
        var a = document.createElement("script");
        a.src = b;
        a.type = "text/javascript";
        d.get(0).appendChild(a);
        if (i) {
            a.onreadystatechange = function () {
                if (a.readyState === "loaded" || a.readyState === "complete") {
                    i();
                    jQuery(a).remove()
                }
            };
            a.onload = function () {
                i();
                jQuery(a).remove();
                return
            };
            try {
                if (($.browser.webkit && !navigator.userAgent.match(/Version\/3/)) || $.browser.opera) {
                    LazyLoader.timer[b] = setInterval(function () {
                        if (/loaded|complete/.test(document.readyState)) {
                            clearInterval(LazyLoader.timer[b]);
                            i()
                        }
                    }, 10)
                }
            } catch (f) {}
        }
    } catch (h) {
        alert(h)
    }
};
var xrayAd = {
    div: null,
    viewport: null,
    thresold: 200,
    elements: [],
    adBlockCount: 0,
    w: 160,
    h: 200,
    init: function () {
        this.div = jQuery("#xrayAd");
        if (!this.div) {
            this.div = jQuery("<div>", {
                id: "xrayAd",
                css: {
                    position: "fixed",
                    top: 10,
                    left: 10,
                    width: this.w,
                    height: this.h,
                    zIndex: 10000,
                    background: "rgba(0,0,0, 0.5)"
                }
            });
            this.div.appendTo(jQuery("body"))
        }
    },
    viewportUpdate: function () {
        if (!this.viewport) {
            this.viewport = jQuery("<div>", {
                id: "xrayAdViewport",
                css: {
                    position: "absolute",
                    width: this.w,
                    height: 10,
                    zIndex: 10001,
                    background: "rgba(255,255,255, 0.3)"
                }
            });
            this.viewport.appendTo(this.div)
        }
        if (!this.viewThresoldTop) {
            this.viewThresoldTop = jQuery("<div>", {
                id: "xrayAdThresold",
                css: {
                    position: "absolute",
                    width: this.w,
                    height: 1,
                    zIndex: 10002,
                    background: "rgba(255,0,0, 0.5)"
                }
            });
            this.viewThresoldTop.appendTo(this.div);
            this.viewThresoldBottom = this.viewThresoldTop.clone().appendTo(this.div)
        }
        this.bodyHeight = jQuery(document).height();
        this.bodyWidth = jQuery(window).width();
        var c = (jQuery(window).height() / this.bodyHeight) * xrayAd.h,
            a = (jQuery(window).scrollTop() / this.bodyHeight) * xrayAd.h;
        this.viewport.css({
            height: c,
            top: a
        });
        this.viewThresoldTop.css({
            top: ((jQuery(window).scrollTop() - xrayAd.thresold) / this.bodyHeight) * xrayAd.h
        });
        this.viewThresoldBottom.css({
            top: ((jQuery(window).scrollTop() + xrayAd.thresold) / this.bodyHeight) * xrayAd.h + c - 1
        });
        if (this.div && this.div.length) {
            var b = this.div.find(".xrayAdBlock");
            $.each(b, function (g, i) {
                var d = jQuery(this);
                var f = jQuery(xrayAd.elements[g]);
                if (d.length && f.length) {
                    var e = {};
                    e.off = f.offset();
                    if (e.off) {
                        e.top = (e.off.top / xrayAd.bodyHeight) * xrayAd.h;
                        e.left = (e.off.left / xrayAd.bodyWidth) * xrayAd.w;
                        e.w = (Math.max(f.width(), 10) / xrayAd.bodyWidth) * xrayAd.w;
                        e.h = (Math.max(f.height(), 10) / xrayAd.bodyHeight) * xrayAd.h;
                        var h = "#FF0071";
                        h = (f.data("loading") === "true" ? "orange" : h);
                        h = (f.data("loaded") === "true" ? "#00FF00" : h);
                        d.css({
                            top: e.top,
                            left: e.left,
                            width: e.w,
                            height: e.h,
                            borderColor: h
                        })
                    }
                }
            })
        }
    },
    load: function (c, b) {
        this.thresold = b || 0;
        this.init();
        var a = jQuery("<div>", {
            "class": "xrayAdBlock",
            css: {
                position: "absolute",
                background: "#ffffff",
                border: "1px solid #FF0071",
                top: 0,
                left: 0,
                width: 0,
                height: 0,
                zIndex: 10003
            }
        });
        $.each(c, function () {
            a.clone().attr("xrayblock", "xrayAdBlock_" + (xrayAd.adBlockCount++)).appendTo(xrayAd.div);
            jQuery(this).bind("onCompleteXray", function () {
                xrayAd.viewportUpdate()
            });
            jQuery(this).bind("onLoadXray", function () {
                xrayAd.viewportUpdate()
            });
            xrayAd.elements.push(this)
        });
        xrayAd.viewportUpdate();
        jQuery(window).bind("scroll", function (d) {
            xrayAd.viewportUpdate()
        })
    }
};
(function ($) {
    $.lazyLoadAdRunning = false;
    $.lazyLoadAdTimers = [];
    $.fn.lazyLoadAd = function (options) {
        var settings = {
            threshold: 0,
            failurelimit: 1,
            forceLoad: false,
            event: "scroll",
            viewport: window,
            placeholder: false,
            onLoad: false,
            onComplete: false,
            timeout: 1500,
            debug: false,
            xray: false
        };
        if (options) {
            $.extend(settings, options)
        }
        function _debug() {
            if (typeof console !== "undefined" && settings.debug) {
                var args = [];
                for (var i = 0; i < arguments.length; i++) {
                    args.push(arguments[i])
                }
                try {
                    console.log("LazyLoadAD |", args)
                } catch (e) {}
            }
        }
        if (settings.xray && (typeof xrayAd === "object")) {
            xrayAd.load(this, settings.threshold)
        }
        var elements = this;
        jQuery(settings.viewport).bind("checkLazyLoadAd", function () {
            var counter = 0;
            elements.each(function () {
                if ($.lazyLoadAdRunning) {
                    if ($.lazyLoadAdTimers.runTimeOut) {
                        clearTimeout($.lazyLoadAdTimers.runTimeOut)
                    }
                    $.lazyLoadAdTimers.runTimeOut = setTimeout(function () {
                        jQuery(settings.viewport).trigger("checkLazyLoadAd")
                    }, 300);
                    return false
                } else {
                    if (settings.forceLoad === true) {
                        jQuery(this).trigger("load")
                    } else {
                        if (!$.belowthefold(this, settings) && !$.abovethetop(this, settings)) {
                            jQuery(this).trigger("load")
                        } else {
                            if (counter++ > settings.failurelimit) {
                                return false
                            }
                        }
                    }
                }
            });
            var temp = $.grep(elements, function (element) {
                return !((jQuery(element).data("loaded") === "true") ? true : false)
            });
            elements = jQuery(temp)
        });
        if ("scroll" === settings.event) {
            jQuery(settings.viewport).bind("scroll", function (event) {
                if (elements.length === 0) {
                    return false
                }
                jQuery(settings.viewport).trigger("checkLazyLoadAd")
            })
        }
        this.each(function (_index, _value) {
            var self = jQuery(this);
            if (undefined === self.attr("original")) {
                self.attr("original", self.attr("src"))
            }
            self.isLoaded = function () {
                return ((self.data("loaded") === "true") ? true : false)
            };
            self.bind("debug", function (e, status) {
                status = status || "start";
                if (settings.xray) {
                    if (status === "start") {
                        self.trigger("onLoadXray")
                    } else {
                        if (status === "error") {
                            self.trigger("onErrorXray")
                        } else {
                            if (status === "complete") {
                                self.trigger("onCompleteXray")
                            }
                        }
                    }
                }
                if (settings.debug) {
                    if (status === "start") {
                        self.css({
                            border: "3px solid orange"
                        })
                    } else {
                        if (status === "error") {
                            self.css({
                                border: "3px solid red"
                            })
                        } else {
                            if (status === "complete") {
                                self.css({
                                    border: "3px solid green"
                                })
                            }
                        }
                    }
                }
            });
            self.one("onComplete", function () {
                _debug("---> lazyLoadComplete");
                jQuery(self).removeAttr("original");
                $.lazyLoadAdRunning = false;
                self.data("loaded", "true");
                self.trigger("debug", "complete");
                if (typeof settings.onComplete === "function") {
                    try {
                        settings.onComplete()
                    } catch (e) {}
                }
            });
            self.stack = [];
            self.makinaBlock = false;
            self.bind("makina_go", function () {
                if (self.makinaBlock) {
                    return false
                }
                if (self.stack.length > 0) {
                    var el = self.stack.shift();
                    var wrapAd = self.find(".wrapAd");
                    if (!wrapAd.length) {
                        wrapAd = jQuery('<div class="wrapAd"></div>').clone();
                        wrapAd.appendTo(self)
                    }
                    var wrap = jQuery("<div>").clone().appendTo(wrapAd);
                    if (typeof el === "string") {
                        wrap.replaceWith(el)
                    } else {
                        if (typeof el === "object") {
                            if (el.is("script")) {
                                if (el.attr("src")) {
                                    _debug("JS to load !! --> " + el.attr("src"));
                                    LazyLoader.load(el.attr("src"), self, function () {
                                        self.makinaBlock = false;
                                        _debug("JS to load !! ++> " + el.attr("src"));
                                        self.trigger("makina_go")
                                    })
                                } else {
                                    wrap.replaceWith(el)
                                }
                            } else {
                                wrap.replaceWith(el)
                            }
                        }
                    }
                    self.trigger("makina_go")
                } else {
                    if ($.lazyLoadAdTimers.loadJS) {
                        clearTimeout($.lazyLoadAdTimers.loadJS)
                    }
                    $.lazyLoadAdTimers.loadJS = setTimeout(function () {
                        self.trigger("onComplete")
                    }, settings.timeout)
                }
            });
            self.bind("docWrite_direct", function (e, html) {
                var el = jQuery(html);
                _debug("Fragment Direct Write : ", el, el.length);
                $.each(el, function () {
                    self.stack.push(jQuery(this))
                });
                self.trigger("makina_go")
            });
            self.bind("docWrite_delayed", function (e, html) {
                _debug("Fragment Delayed Write : ", html);
                self.numWrappers--;
                _debug("Fragment append : ", self.numWrappers, html);
                self.docHtmlCurrent += html;
                if (self.numWrappers === 0) {
                    html = self.docHtmlCurrent;
                    self.docHtmlCurrent = "";
                    setTimeout(function () {
                        self.stack.push(html);
                        self.docHtmlCurrent = "";
                        self.trigger("makina_go")
                    }, 0)
                }
            });
            self.numWrappers = 0;
            self.docHtmlCurrent = "";
            self.bind("docWrite_overload", function () {
                document._writeOriginal = document.write;
                document.write = document.writeln = function () {
                    var args = arguments,
                        id = null;
                    var html = "";
                    for (var i = 0; i < args.length; i++) {
                        html += args[i]
                    }
                    var testHTML = "",
                        directWrite = false;
                    try {
                        testHTML = jQuery(html);
                        directWrite = ((testHTML.is("div") || testHTML.is("script")) ? true : false)
                    } catch (e) {}
                    self.history[self.fragmentId] = self.history[self.fragmentId] || {};
                    if (self.history[self.fragmentId][html] === undefined) {
                        self.history[self.fragmentId][html] = true;
                        if (directWrite) {
                            self.trigger("docWrite_direct", html)
                        } else {
                            self.numWrappers++;
                            setTimeout(function () {
                                self.trigger("docWrite_delayed", html)
                            }, 0)
                        }
                    }
                }
            });
            self.bind("evalCode", function () {
                var scripts = [],
                    script, regexp = /<code[^>]*>([\s\S]*?)<\/code>/gi;
                while ((script = regexp.exec(self.html()))) {
                    var _s = script[1];
                    _s = _s.replace("<!--//<![CDATA[", "").replace("//]]>-->", "").replace("<!--", "").replace("//-->", "");
                    _s = _s.replace(/\&gt\;/g, ">").replace(/\&lt\;/g, "<");
                    scripts.push($.trim(_s))
                }
                try {
                    scripts = (scripts.length ? scripts.join("\n") : "");
                    _debug("Script to eval : ", scripts);
                    if (scripts !== "") {
                        eval(scripts)
                    }
                } catch (e) {}
            });
            self.bind("loadJS", function (e, js2load) {
                var callback = null,
                    script = null;
                if (js2load.src) {
                    callback = js2load.callback || null;
                    js2load = js2load.src
                }
                if (js2load.indexOf("?") === -1) {
                    js2load += "?_=" + (new Date().getTime())
                } else {
                    js2load += "&_=" + (new Date().getTime())
                }
                _debug("loadJS :: ", js2load);
				if ( LazyLoader.timer.loadJS ) clearTimeout(LazyLoader.timer.loadJS) ;
                LazyLoader.load(js2load, self, function () {
                    _debug("loadJS COMPLETE :: " + js2load);
                    if (callback) {
                        callback()
                    } else {
						if ( LazyLoader.timer.loadJS ) clearTimeout(LazyLoader.timer.loadJS) ;
                        LazyLoader.timer.loadJS = $.lazyLoadAdTimers.loadJS = setTimeout(function () {
                            self.trigger("onComplete")
                        }, settings.timeout)
                    }
                })
            });
            self.one("load", function () {
                if (!self.isLoaded()) {
                    $.lazyLoadAdRunning = true;
                    self.data("loading", "true");
                    self.trigger("debug", "start");
                    var srcOriginal = jQuery(self).attr("original");
                    self.history = {};
                    _debug("------------------------------  Lazy Load Ad CALL ----");
                    _debug("Context : ", self);
                    self.trigger("docWrite_overload");
                    self.trigger("evalCode");
                    if (srcOriginal) {
                        self.trigger("loadJS", srcOriginal)
                    }
                }
            });
            if ("scroll" !== settings.event) {
                self.bind(settings.event, function (event) {
                    if (!self.isLoaded()) {
                        self.trigger("load")
                    }
                })
            }
        });
        jQuery(settings.viewport).trigger("checkLazyLoadAd");
        return this
    };
    $.belowthefold = function (element, settings) {
        var fold = 0;
        if (settings.viewport === undefined || settings.viewport === window) {
            fold = jQuery(window).height() + jQuery(window).scrollTop()
        } else {
            fold = jQuery(settings.viewport).offset().top + jQuery(settings.viewport).height()
        }
        return fold <= jQuery(element).offset().top - settings.threshold
    };
    $.abovethetop = function (element, settings) {
        var fold = 0;
        if (settings.viewport === undefined || settings.viewport === window) {
            fold = jQuery(window).scrollTop()
        } else {
            fold = jQuery(settings.viewport).offset().top
        }
        return fold >= jQuery(element).offset().top + settings.threshold + jQuery(element).height()
    }
})(jQuery);
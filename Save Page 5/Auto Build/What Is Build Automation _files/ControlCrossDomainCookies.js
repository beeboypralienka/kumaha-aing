var ControlCrossDomainCookies = Class.create( {}, {

	load:function()
	{
		for(var i in this._serverData.domains)
		{
			var elem = this.getIFrame(i);
			elem.attr("src", "http://" + this._serverData.domains[i] + "/cross-cookies.php?t=" + this._serverData.t + "&timing=" + this._serverData.timing);
		}
	},
	
	getIFrame: function(index)
	{
		var collection = $("#" + this._serverData.ids + "_" + index);
		if(collection.size() == 0)
		{
			var elemCode = "<div style=\"display:none;visibility:hidden;position:absolute;left:-500px;top:0px;\"><iframe id=\"" + (this._serverData.ids + "_" + index) + "\" width=\"0\" height=\"0\" frameborder=\"0\" src=\"/blank.txt\"></iframe></div>";			
			$("body").append(elemCode);
			collection = $("#" + this._serverData.ids + "_" + index);
		}
		return collection;
	}
}, [Control]);
var ControlLogin = Class.create({}, {

	load: function()
	{
		this.crossDomainLoadStates = {};
		$("#" + this._serverData._ids.loginButton).prop({disabled: false});
		$("#" + this._serverData._ids.loginButton).click(this.getHandler("loginButtonClickHandler"));
		
		$("#" + this._serverData._ids.logoutButton).prop({disabled: false});
		$("#" + this._serverData._ids.logoutButton).click(this.getHandler("logoutButtonClickHandler"));
		
		$("#" + this._serverData._ids.login).keydown(this.getHandler("keydownHandler"));
		$("#" + this._serverData._ids.password).keydown(this.getHandler("keydownHandler"));
	},

	loginButtonClickHandler: function()
	{
		if($("#" + this._serverData._ids.loginButton).prop('disabled'))
			return;

		$("#" + this._serverData._ids.loginButton).prop({disabled: true});
		var data = {};
		data[this._serverData._actions.getLoginToken] = true;
		data[this._serverData._fields.login] = $("#" + this._serverData._ids.login).val();
		data[this._serverData._fields.password] = $("#" + this._serverData._ids.password).val();
		$.post(location.href, data, this.getHandler("getLoginTokenHandler"), "json");
	},

	keydownHandler: function(event)
	{
		if (event.which == 13)
		{
			event.preventDefault();
			this.loginButtonClickHandler();
		}
	},

	logoutButtonClickHandler: function()
	{
		if($("#" + this._serverData._ids.logoutButton).prop('disabled'))
			return;

		$("#" + this._serverData._ids.logoutButton).prop({disabled: true});
		var data = {};
		data[this._serverData._actions.getLogoutToken] = true;
		$.post(location.href, data, this.getHandler("getLogoutTokenHandler"), "json");
	},

	getLoginTokenHandler: function(data)	
	{
		$("#" + this._serverData._ids.errorsBlock).html("");
		if(data.errorNum)
		{
			$("#" + this._serverData._ids.loginButton).prop({disabled: false});
			if (this._serverData.redirectOnError)
			{
				var url = this._serverData.defaultDomain + "/login.htm?redir=" + encodeURIComponent(location.href);
				for(var i in data.errors) url += "&err[]=" + encodeURIComponent(i);
				location.path = url;
			}
			else
			{
				var errorMessage = "";
				for(var i in data.errors) errorMessage += data.errors[i];
				$("#" + this._serverData._ids.errorsBlock).html(errorMessage);
			}			
		}
		else
		{
			for(var i in this._serverData.crossDomains)
				this.crossDomainLoadStates[i] = false;

			for(var i in this._serverData.crossDomains)
			{
				var frameElem = $("#" + i);
				frameElem.load(this.getHandler("iframeLoadHandler", [i, "login", data.url]));
				frameElem.attr("src", "http://" + this._serverData.crossDomains[i] + "/cross-login.htm?token=" + data.token + "&t=" + data.t);
			}
		}
	},

	getLogoutTokenHandler: function(data)
	{
		if(data.token.length)
		{
			for(var i in this._serverData.crossDomains)
				this.crossDomainLoadStates[i] = false;

			for(var i in this._serverData.crossDomains)
			{
				var frameElem = $("#" + i);
				frameElem.load(this.getHandler("iframeLoadHandler", [i, "logout", ""]));
				frameElem.attr("src", "http://" + this._serverData.crossDomains[i] + "/cross-login.htm?token=" + data.token + "&t=" + data.t);
			}
		}
		else
			$("#" + this._serverData._ids.logoutButton).prop({disabled: false});
	},

	iframeLoadHandler: function(crossDomainId, action, redirectURL)
	{
		this.crossDomainLoadStates[crossDomainId] = true;
		var allFramesLoaded = true;
		for(var i in this.crossDomainLoadStates)
			allFramesLoaded = allFramesLoaded && this.crossDomainLoadStates[i];

		if(allFramesLoaded)
		{
			if((action == "login") && this._serverData.redirectOnSuccessURL)
				return (location.href = this._serverData.redirectOnSuccessURL);
			
			if((action == "login") && redirectURL)
				return (location.href = redirectURL);
			
			location.reload();
		}
	}
}, [Control]);
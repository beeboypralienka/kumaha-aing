(function()
{
  this.ControlDiscussionPostsList = Class.create({},
  {
    init: function()
    {
      this.initPartSize = 50;
      this.initPartStart = 0;

      this.discussions = $(this._serverData._selectors.parent + ' ' + this._serverData._selectors.discuss);
      this.discussions = this.discussions.filter(this.getHandler(this, function(num, obj)
      {
        return $(this._serverData._selectors.content + '> div', obj).height() > this._serverData.discMaxHeight;
      }));

      this.initIntervalId = setInterval(this.getHandler('initDiscussion'), 300);
      this.initDiscussion();
    },

    initDiscussion: function()
    {
      var initDiscussions = this.discussions.slice(this.initPartStart, this.initPartStart + this.initPartSize);
      
      if(initDiscussions.length === 0)
      {
        clearInterval(this.initIntervalId);
        delete(this.discussions);
        return false;
      }

      this.initPartStart += this.initPartSize;
      initDiscussions.children(this._serverData._selectors.content).css({maxHeight: this._serverData.discViewHeight});
      initDiscussions.children(this._serverData._selectors.bkg).show();

      var control = initDiscussions.children(this._serverData._selectors.control);
      control.click(this.getHandler('open'));
      control.children('a').click(this.getHandler('open'));
      control.show();
    },

    open: function(event, obj)
    {
      var parent = $(obj).closest(this._serverData._selectors.discuss);
      var content = parent.children(this._serverData._selectors.content);

      content.css({height: content.height(), maxHeight: 'none'});
      content.animate({height: content.children('div').height()}, 'normal', function()
      {
        $(this).css({height: 'auto'});
      });

      parent.children(this._serverData._selectors.control).fadeOut('fast');
      parent.children(this._serverData._selectors.bkg).fadeOut('fast');

      return false;
    }
  }, [Control]);
})();
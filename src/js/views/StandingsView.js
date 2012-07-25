define([
  "handlebars",
  "text!templates/StandingsView.handlebars",
  "text!templates/ResultsListView.handlebars",
  "./ViewBase"
], 

function(handlebars, template, listTemplate, ViewBase) {
  return ViewBase.extend({

    template : Handlebars.compile(template),

    listTemplate : Handlebars.compile(listTemplate),

    events : {
      'click .select-list .selected-item' : 'toggleItems',
      'click .select-list .items a' : 'itemSelected'
    },

    itemSelected : function(e) {
      this.$('.select-list .items').addClass('invisible');
    },

    toggleItems : function(e) {
      var $list = this.$('.select-list .items');

      if ($list.hasClass('invisible')) {
        $list.removeClass('invisible');
      } else {
        $list.addClass('invisible');
      }

      e.preventDefault();
    },

    onFeedLoaded : function(feed) {
      if (feed == this._feed) {
        var html = this.listTemplate(feed.toJSON());
        this.$(".results").html(html);
      }      
    },

    setFeed : function(feed) {
      this._feed = feed;
    },

    initialize : function(options) {
      options = options || {};

      if (this.model) {
        this.model.bind("feed:loaded", this.onFeedLoaded, this);
      }
    },

    templateContext: function() {
      var context = ViewBase.prototype.templateContext.apply(this, arguments);

      if (this._feed) {
        context.selectedFeed = this._feed.toJSON();
      }

      return context;
    }
  });
});
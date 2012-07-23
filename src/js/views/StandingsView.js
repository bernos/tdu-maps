define([
  "handlebars",
  "text!templates/StandingsView.handlebars",
  "./ViewBase"
], 

function(handlebars, template, ViewBase) {
  return ViewBase.extend({

    template : Handlebars.compile(template),

    onFeedLoaded : function(feed) {
      if (feed == this._feed) {
        this.render();
      }      
    },

    setFeed : function(feed) {
      this._feed = feed;
      this.render();
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
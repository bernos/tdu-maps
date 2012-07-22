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
        this._loading = false;
        this.render();
      }      
    },

    setJerseyId : function(jerseyId) {
      if (this.model) {
        this._feed = this.model.getFeedByJerseyId(jerseyId);

        if (this._feed) {
          this._feed.load();
          this._loading = true;
        } else {
          // todo: clear out loader etc...
          this._loading = false;
        }
      }      

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
      context.feeds = context.feeds.toJSON();
      context.loading = this._loading;

      if (this._feed) {
        context.selectedFeed = this._feed.toJSON();
      }

      console.log("context", context)

      return context;
    }
  });
});
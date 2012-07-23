define([
  "handlebars",
  "text!templates/StageResultsView.handlebars",
  "./ViewBase"
], 

function(handlebars, template, ViewBase) {
  return ViewBase.extend({

    template : Handlebars.compile(template),

    initialize : function(options) {
      options = options || {};
    },

    onFeedLoaded: function(feed) {
      console.log("view heard feed load");
      this.render();
    },

    setResultFeed : function(resultFeed) {
      if (this._resultFeed) {
        this._resultFeed.unbind("feed:loaded", this.onFeedLoaded, this);
      }
      this._resultFeed = resultFeed;
      this._resultFeed.bind("feed:loaded", this.onFeedLoaded, this);
      this.render();
    },

    setStage : function(stage) {
      this._stage = stage;
      this.render();
    },

    templateContext: function() {
      var context = {};

      if (this._resultFeed) {
        context.resultFeed = this._resultFeed.toJSON();
      }

      if (this._stage) {
        context.stage = this._stage.toJSON();
      }

      console.log("context is ", context);
      return context;
    }
  });
});
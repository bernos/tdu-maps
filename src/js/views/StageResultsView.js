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

    onResultFeedLoaded: function(feed) {
      if (feed == this._resultFeed) {
        this.render();
      }
    },

    setStage : function(stage) {
      if (this._stage) {
        this._stage.get("results").unbind("feed:loaded", this.onResultFeedLoaded, this);
      }

      this._stage = stage;
      this._stage.get("results").bind("feed:loaded", this.onResultFeedLoaded, this);

      this.render();
    },

    setResultFeed : function(resultFeed) {
      this._resultFeed = resultFeed;
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

      return context;
    }
  });
});
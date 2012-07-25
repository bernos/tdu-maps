define([
  "handlebars",
  "text!templates/StageResultsView.handlebars",
  "text!templates/ResultsListView.handlebars",
  "./ViewBase"
], 

function(handlebars, template, listTemplate, ViewBase) {
  return ViewBase.extend({

    template : Handlebars.compile(template),

    listTemplate : Handlebars.compile(listTemplate),

    initialize : function(options) {
      options = options || {};
    },

    onResultFeedLoaded: function(feed) {
      if (feed == this._resultFeed) {

        var html = this.listTemplate(feed.toJSON());
        this.$(".results").html(html);

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
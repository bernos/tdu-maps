define([
  "handlebars",
  "text!templates/StageLiveFeedView.handlebars",
  "./ViewBase"
], 

function(handlebars, template, ViewBase) {
  return ViewBase.extend({

    template : Handlebars.compile(template),

    initialize : function(options) {
      options = options || {};
    },

    onFeedLoaded: function(feed) {
      this.render();
    },

    setStage : function(stage) {
      if (this.model) {
        this.model.get("liveFeed").unbind("feed:loaded", this.onFeedLoaded, this);
      }

      this.model = stage;
      this.model.get("liveFeed").bind("feed:loaded", this.onFeedLoaded, this);
      this.render();
    },

    templateContext: function() {
      var context = ViewBase.prototype.templateContext.apply(this, arguments);
      console.log("the context is ", context);
      return context;
    }
  });
});
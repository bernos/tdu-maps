define([
  "underscore",
  "handlebars",
  "text!templates/StageLiveFeedView.handlebars",
  "./ViewBase"
], 

function(_, handlebars, template, ViewBase) {
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

      context.liveFeed.items = _.filter(context.liveFeed.items, function(post) {
        return (post.LinkImage === null && post.LinkVideo === null && post.LinkWeb === null);
      });

      return context;
    }
  });
});
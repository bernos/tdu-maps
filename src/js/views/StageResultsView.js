define([
  "handlebars",
  "text!templates/StageResultsView.handlebars",
  "text!templates/ResultsListView.handlebars",
  "./ViewBase",
  "./ResultFeedSelectList"
], 

function(handlebars, template, listTemplate, ViewBase, ResultFeedSelectList) {
  return ViewBase.extend({

    template : Handlebars.compile(template),

    listTemplate : Handlebars.compile(listTemplate),

    initialize : function(options) {
      options = options || {};

      var view = this;
      var getStageId = function() {
        return view._stage.get('id');
      };

      this.selectList = new ResultFeedSelectList({
        formatTemplateItem : function(itemModel) {
          return {
            id : itemModel.get('jerseyId'),
            label : itemModel.get('name'),
            value : "#/stages/" + getStageId() + "/results/" + itemModel.get('jerseyId')
          };
        }
      });
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
      this.selectList.model = this._stage.get("results").get("feeds");
      this.render();
    },

    setResultFeed : function(resultFeed) {
      this._resultFeed = resultFeed;
      this.selectList.setSelectedItem(resultFeed);
    },

    render : function() {
      ViewBase.prototype.render.apply(this, arguments);
      this.$(".jersies").append(this.selectList.render().el);
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
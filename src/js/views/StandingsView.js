define([
  "handlebars",
  "text!templates/StandingsView.handlebars",
  "text!templates/ResultsListView.handlebars",
  "./ViewBase",
  "./ResultFeedSelectList"
], 

function(handlebars, template, listTemplate, ViewBase, ResultFeedSelectList) {
  return ViewBase.extend({

    template : Handlebars.compile(template),

    listTemplate : Handlebars.compile(listTemplate),

    onFeedLoaded : function(feed) {
      if (feed == this._feed) {
        var html = this.listTemplate(feed.toJSON());
        this.$(".results").html(html);
      }
    },

    setFeed : function(feed) {
      this._feed = feed;
      this.selectList.setSelectedItem(feed);
    },

    initialize : function(options) {
      options = options || {};

      if (this.model) {
        this.model.bind("feed:loaded", this.onFeedLoaded, this);
      }

      this.selectList = new ResultFeedSelectList({
        model : this.model.get("feeds"),

        formatTemplateItem : function(itemModel) {
          return {
            id : itemModel.get('jerseyId'),
            label : itemModel.get('name'),
            value : "#/standings/" + itemModel.get('jerseyId')
          };
        }
      });
    },

    render : function() {
      ViewBase.prototype.render.apply(this, arguments);
      this.$(".jersies").append(this.selectList.render().el);
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
define([
  "handlebars",
  "text!templates/StagesMenuView.handlebars",
  "./ViewBase",
  "underscore"
], 

function(handlebars, template, ViewBase, _) {
  return ViewBase.extend({

    template : Handlebars.compile(template),

    initialize : function(options) {
      options = options || {};

      this.stages = options.stages;
    },

    templateContext: function() {
      var context = ViewBase.prototype.templateContext.apply(this, arguments);

      context.stageItemList = _.map(this.stages.models, function(stage) {
        return {
          url : "#/stages/" + stage.get('id'),
          label : stage.get('name'),
          icon : stage.get('icon')
        };
      });

      return context;
    }
  });
});
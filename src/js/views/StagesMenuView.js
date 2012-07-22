define([
  "handlebars",
  "text!templates/StagesMenuView.handlebars",
  "./ViewBase"
], 

function(handlebars, template, ViewBase) {
  return ViewBase.extend({

    template : Handlebars.compile(template),

    initialize : function(options) {
      options = options || {};

      this.stages = options.stages;
    },

    templateContext: function() {
      var context = ViewBase.prototype.templateContext.apply(this, arguments);

      context.stages = this.stages.toJSON();

      console.log(context)

      return context;
    }
  });
});
define([
  "handlebars",
  "text!templates/StageProfileView.handlebars",
  "./ViewBase"
], 

function(handlebars, template, ViewBase) {
  return ViewBase.extend({

    template : Handlebars.compile(template),

    initialize : function(options) {
      options = options || {};
    },

    setStage : function(stage) {
      this.model = stage;
      this.render();
    },

    templateContext: function() {
      var context = ViewBase.prototype.templateContext.apply(this, arguments);
      console.log("context is", context)
      return context;
    }
  });
});
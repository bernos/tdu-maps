define([
  "handlebars",
  "text!templates/StageMapView.handlebars",
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
    },

    templateContext: function() {
      var context = ViewBase.prototype.templateContext.apply(this, arguments);
      return context;
    }
  });
});
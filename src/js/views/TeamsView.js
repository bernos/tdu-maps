define([
  "handlebars",
  "text!templates/TeamsView.handlebars",
  "./ViewBase"
], 

function(handlebars, template, ViewBase) {
  return ViewBase.extend({

    template : Handlebars.compile(template),

    initialize : function(options) {
      options = options || {};
    },

    templateContext: function() {
      var context = ViewBase.prototype.templateContext.apply(this, arguments);
      return context;
    }
  });
});
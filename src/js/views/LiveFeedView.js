/*!
 * views/ResultFeedView.js
 * View for a single result feed
 */
define([
  "handlebars",
  "text!templates/LiveFeedView.handlebars",
  "./ViewBase"
],

function(Handlebars, template, ViewBase) {
  
  return ViewBase.extend({

    template : Handlebars.compile(template),

    initialize : function() {
      this.model.get('items').bind("reset", this.render, this);
    },

    templateContext: function() {
      var context = ViewBase.prototype.templateContext.apply(this, arguments);
      context.items = this.model.get('items').toJSON();
      console.log(context);
      return context;
    }
  });
});
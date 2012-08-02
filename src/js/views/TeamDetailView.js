define([
  "jquery",
  "handlebars",
  "text!templates/TeamDetailView.handlebars",
  "./ViewBase"
], 

function($, handlebars, template, ViewBase) {
  return ViewBase.extend({

    template : Handlebars.compile(template),

    initialize : function(options) {
      options = options || {};
    },

    setTeam : function(team) {
      this.model = team;
      this.render();

      // Now load team content
      var url = team.url.replace("#/", "") + ".html";
      var container = this.$(".page-content");

      container.load(url);
    },

    templateContext: function() {
      return this.model || {};
    }
  });
});
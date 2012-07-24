define([
  "handlebars",
  "text!templates/StageDetailView.handlebars",
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
      var stageId = this.model.get('id');

      context.links = [
        { url: "#/stages/" + stageId + "/live-feed", label: "Live feed" },
        { url: "#/stages/" + stageId + "/map", label: "Map" },
        { url: "#/stages/" + stageId + "/profile", label: "Profile" },
        { url: "#/stages/" + stageId + "/results", label: "Results" }
      ];

      return context;
    }
  });
});


  
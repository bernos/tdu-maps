define(["underscore", "backbone", "models/StageModel"], function(_, Backbone, StageModel) {
	return Backbone.Collection.extend({

		initialize: function(options) {
			_.extend(this, options);
		},

		parse: function(results) {
			return results.Items;
		},

		url : function() {
			var s = this.stage;
			var j = this.jersey;
			console.log("loaded results ", this);
			return "/api/results/" + s + "/" + j + ".json";  
		}
	});
});
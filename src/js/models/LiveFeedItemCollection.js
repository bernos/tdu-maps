define(["config", "underscore", "backbone"], function(config, _, Backbone) {
	return Backbone.Collection.extend({
		initialize: function(options) {
			_.extend(this, options);
		},

		parse: function(results) {
			return results.Postings;
		},

		url : function() {
			return config.liveFeeds.baseUrl + String(this.id) + ".json";
		}
	});
});
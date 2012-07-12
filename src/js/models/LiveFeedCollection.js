define(["config", "underscore", "backbone", "./LiveFeed"], function(config, _, Backbone, LiveFeed) {
	return Backbone.Collection.extend({
		model : LiveFeed
	});
});
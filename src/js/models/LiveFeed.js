define(["config", "underscore", "backbone", "./LiveFeedItemCollection"], function(config, _, Backbone, LiveFeedItemCollection) {
	return Backbone.Model.extend({
		initialize: function() {
			this.items = new LiveFeedItemCollection({
				id : this.id
			});
		}		
	});
});
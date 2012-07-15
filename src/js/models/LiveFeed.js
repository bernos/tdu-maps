/*! 
 * models/LiveFeed.js 
 * A model for a live feed
 */
define(["config/config", "underscore", "backbone", "./LiveFeedItemCollection"], 

function(config, _, Backbone, LiveFeedItemCollection) {
	return Backbone.Model.extend({
		initialize: function() {
			var items = new LiveFeedItemCollection([], {
				id : this.id
			});

			this.set('items', items);
		}
	});
});
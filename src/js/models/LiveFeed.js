/*! 
 * models/LiveFeed.js 
 * A model for a live feed
 */
define(["config", "underscore", "backbone", "./LiveFeedItemCollection"], 

function(config, _, Backbone, LiveFeedItemCollection) {
	return Backbone.Model.extend({
		initialize: function() {
			this.items = new LiveFeedItemCollection({
				id : this.id
			});
		}		
	});
});
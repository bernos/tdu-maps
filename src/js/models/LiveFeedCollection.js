/*! 
 * models/LiveFeedCollection.js 
 * A collection of live feeds
 */

define(["config/config", "underscore", "backbone", "./LiveFeed"], 

function(config, _, Backbone, LiveFeed) {
	return Backbone.Collection.extend({
		model : LiveFeed
	});
});
/*!
 * models/LiveFeedItemCollection.js
 * A collection class representing a live feed
 */
define(["config/config", "underscore", "backbone"], 

function(config, _, Backbone) {
	return Backbone.Collection.extend({
		initialize: function(models, options) {
			options = options || {};

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
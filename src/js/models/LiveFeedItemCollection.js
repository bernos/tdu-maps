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
			console.log("results", results.Postings);
			return _.map(results.Postings, function(post) {
				post.Text = post.Text.replace(/\r\n/g, "<br/>");
				post.Date = new Date(parseFloat(/Date\(([^)]+)\)/.exec(post.Date)[1]));
				return post;
			});
		},

		url : function() {
			return config.liveFeeds.baseUrl + String(this.id) + ".json";
		}
	});
});
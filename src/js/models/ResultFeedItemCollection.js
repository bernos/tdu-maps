/*!
 * models/ResultFeedItemCollection.js
 * Collection class representing a list of result feed items
 */
define(["config/config", "underscore", "backbone", "./ResultFeedItem"], 

function(config, _, Backbone, ResultFeedItem) {
	return Backbone.Collection.extend({

		type: "ResultFeedItemCollection",
		
		model: ResultFeedItem,

		initialize: function(models, options) {
			options = options || {};

			_.extend(this, options);
		},

		url: function() {
			return _.template(config.resultFeeds.url, {
				stageId: this.stageId,
				jerseyId : this.jerseyId
			});
		},

		parse : function(results) {
			_.each(results.Items, function(item, index) {
				if (!item.Position) {
					item.Position = index + 1;
				}
			});
			return results.Items;
		}
	});
});
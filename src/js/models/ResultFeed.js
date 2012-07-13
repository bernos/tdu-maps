/*!
 * models/ResultFeed.js
 * Model representing a result feed for a single jersey in a single stage
 */
define(["backbone", "./ResultFeedItemCollection"], 

function(Backbone, ResultFeedItemCollection) {

	return Backbone.Model.extend({

		type: "ResultFeed",
		
		initialize: function() {			

			var items = new ResultFeedItemCollection([], {
				stageId  : this.get('stageId'),
				jerseyId : this.get('jerseyId')
			});

			// Ensure that the stageId property propogates down to each
			// result feed model when changed
			this.bind('change:stageId', function(model, stageId) {
				items.setStageId(stageId);
			});

			this.bind('change:jerseyId', function(model, jerseyId) {
				items.setStageId(jerseyId);
			});

			this.set('items', items);
		}
	});
});
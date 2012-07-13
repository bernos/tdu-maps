/*!
 * models/StageResults.js
 * Results for a single stage. Contains ResultFeedCollection for all of the
 * jerseys in the stage
 */
define(["underscore", "backbone", "./ResultFeedCollection"], 

function(_, Backbone, ResultFeedCollection) {
	return Backbone.Model.extend({
		type: "StageResult",

		initialize : function() {			
			var feeds = new ResultFeedCollection(this.get('feeds'), {
				stageId : this.get('stageId')
			});
			
			// Ensure that the stageId property propogates down to each
			// result feed model when changed
			this.bind('change:stageId', function(model, stageId) {
				feeds.setStageId(stageId);
			});

			this.set('feeds', feeds);
		}
	});
});
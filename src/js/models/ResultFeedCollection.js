/*! 
 * models/ResultFeedCollection.js
 * Represents the collection of result feeds for a single stage
 */
define(['underscore', 'backbone', './ResultFeed'], function(_, Backbone, ResultFeed) {
	return Backbone.Collection.extend({

		type : "ResultFeedCollection",
		
		model : ResultFeed,

		initialize: function(models, options) {
			options = options || {};

			_.extend(this, options);

			// Set stageId on each model before adding em
			_.each(models, function(resultFeed) {
				resultFeed.stageId = options.stageId
			});

			this.setStageId(options.stageId);
		},

		setStageId: function(stageId) {
			this.stageId = stageId;

			_.each(this.models, function(resultFeed) {
				resultFeed.set('stageId', stageId);
			});
		}
	});	
});
/*!
 * models/StageCollection.js
 * A collection class for managing Stage instances
 */
define(["config/config", "underscore", "backbone", "models/StageModel"], 

function(config, _, Backbone, StageModel) {
	return Backbone.Collection.extend({
		
		model: StageModel,
		
		url : "/api/stages.json",
		
		parse : function(results) {
			// Run any text fields through template processor, passing our global
			// config object as context
			_.each(results, function(stage) {
				_.each(stage, function(value, key) {
					if (typeof value == 'string') {
						stage[key] = _.template(value, { config : config });
					}
				});
			});

			return results;
		}
	});
});
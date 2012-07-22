/*!
 * models/StageCollection.js
 * A collection class for managing Stage instances
 */
define(["config/config", "underscore", "backbone", "models/StageModel"], 

function(config, _, Backbone, StageModel) {

	/**
	 * Updates stage names in model attribute hashes to match the stage
	 * names defined in the main config
	 */
	function parseStageNames(stages) {
		_.each(stages, function(stage) {
			_.each(stage, function(value, key) {
				if (typeof value == 'string') {
					stage[key] = _.template(value, { config : config });
				}
			});
		});

		return stages;
	}


	return Backbone.Collection.extend({
		
		model: StageModel,
		
		url : "/api/stages.json",

		initialize: function(models, options) {
			parseStageNames(models);
		},
		
		parse : function(results) {
			return parseStageNames(results);
		}
	});
});
define(["backbone", "models/StageModel"], function(Backbone, StageModel) {
	return Backbone.Collection.extend({
		model: StageModel,
		url : "/api/stages.json"

	});
});
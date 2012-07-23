/*!
 * models/ResultFeed.js
 * Model representing a result feed for a single jersey in a single stage
 */
define(["backbone", "./ResultFeedItemCollection"],

function(Backbone, ResultFeedItemCollection) {
	return Backbone.Model.extend({
		load: function() {
			this.trigger("feed:loading", this);
			this.get('items').fetch();
		},

		toJSON: function() {
			var o = Backbone.Model.prototype.toJSON.apply(this, arguments);
			o.items = o.items.toJSON();
			return o;
		},

		initialize: function() {
			var model = this;

			var items = new ResultFeedItemCollection([], {
				stageId  : this.get('stageId'),
				jerseyId : this.get('jerseyId')
			});

			items.bind("reset", function(collection) {
				model.trigger("feed:loaded", model);
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
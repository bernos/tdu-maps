/*! 
 * models/LiveFeed.js 
 * A model for a live feed
 */
define(["config/config", "underscore", "backbone", "./LiveFeedItemCollection"], 

function(config, _, Backbone, LiveFeedItemCollection) {
	return Backbone.Model.extend({
		load : function() {
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

			var items = new LiveFeedItemCollection([], {
				id : this.id
			});

			items.bind("reset", function(collection) {
				model.trigger("feed:loaded", model);
			});

			this.set('items', items);
		}
	});
});
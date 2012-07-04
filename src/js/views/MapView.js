define(["gmaps", "backbone"], function(gmaps, Backbone) {
	return Backbone.View.extend({
		render: function() {
			this.googleMap = new gmaps.Map(this.el, this.options.googleMapsOptions);
			return this;
		}
	});
})
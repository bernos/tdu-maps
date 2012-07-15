/*!
 * views/MapView.js
 * The main view for presenting our google map to users
 */

define(["gmaps", "backbone", "underscore"],

function(gmaps, Backbone, _) {
	return Backbone.View.extend({

		/**
		 * Initialize the view with options provided to the constructor
		 */
		initialize: function(options) {
			if (options.stageCollection) {
				options.stageCollection.bind("reset", this.onStagesLoaded, this);

				this.onStagesLoaded(options.stageCollection);
			}
		},

		/**
		 * Adds a stage to the MapView
		 *
		 * @param {StageModel} stage - The stage that is being added
		 */
		addStage: function(stage) {
			stage.bind("route:loaded", this.onStageRouteLoaded, this);
			return this;
		},

		/**
		 * Callback for when StageCollection completes loading
		 */
		onStagesLoaded: function(collection) {
			var mapView = this;

			_.each(collection.models, function(stage) {
				mapView.addStage(stage);
				stage.loadRoute();
			});
		},

		/**
		 * Callback for when when a StageModel completes loading its
		 * KML data
		 *
		 * @param {StageModel} stage - The StageModel whos KML loaded
		 */
		onStageRouteLoaded: function(stage) {
			var polyLine = stage.get('routePolyLine');
			var points   = polyLine.getPath().getArray();

			var start = new gmaps.Marker({
				map : this.googleMap,
				position : points[0]
			});

			var finish = new gmaps.Marker({
				map : this.googleMap,
				position : points[points.length - 1]
			});

			polyLine.setMap(this.googleMap);
		},

		/**
		 * Renders the MapView
		 */
		render: function() {
			this.googleMap = new gmaps.Map(this.el, this.options.googleMapsOptions);
			return this;
		}
	});
});
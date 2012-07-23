define([
  "gmaps", 
  "underscore", 
  "handlebars",
  "text!templates/StageMapView.handlebars",
  "./ViewBase"
],

function(gmaps, _, handlebars, template, ViewBase) {
  return ViewBase.extend({

    template : Handlebars.compile(template),

    /**
     * Initialize the view with options provided to the constructor
     */
    initialize: function(options) {
      if (options.stageCollection) {
        options.stageCollection.bind("reset", this.onStagesLoaded, this);

        this.onStagesLoaded(options.stageCollection);
      }
    },

    setStage: function(stage) {
      if (this._stage) {
        this._stage.unbind("route:loaded", this.onStageRouteLoaded, this);
      }

      this._stage = stage;
      this._stage.bind("route:loaded", this.onStageRouteLoaded, this);
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
      var html = this.template(this.templateContext());
      this.$el.html(html);      
      return this;
    },

    /**
     * Set up the google map. We do this after render, as the view will 
     * be in the dom now
     */
    afterRender: function() {
      this.googleMap = new gmaps.Map(document.getElementById('map_canvas'), this.options.googleMapsOptions);
      return this;
    }
  });
});
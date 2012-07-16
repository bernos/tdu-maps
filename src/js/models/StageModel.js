/*!
 * models/StageModel.js
 * Model representing a single stage in the tour down under
 */
define(["config/config", "gmaps", "backbone", "jquery", "helpers/KmlHelper", "underscore"],

function(config, gmaps, Backbone, $, KmlHelper, _) {

  return Backbone.Model.extend({

    loadRoute: function() {
      if (config.useStageKml) {
        this.loadKml();
      } else {
        this.loadJson();
      }
    },

    /**
     * Loads json data for the stage route path. This is preferred over
     * loadKml, as the json format is much more compact. Use the grunt
     * compileKml task to compile the kml files to json during the build
     * process
     */
    loadJson: function() {
      var model = this;

      if (this.get('json')) {
        $.getJSON('/js/config/' + this.get('json'), function(data) {
          var path = [];
          var polylineOptions = model.get("polylineOptions");

          _.each(data, function(p) {
            path.push(new gmaps.LatLng(p[0], p[1]));
          });

          model.set("routePolyLine", new gmaps.Polyline({
            path: path,
            strokeColor: polylineOptions.strokeColor,
            strokeOpacity: polylineOptions.strokeOpacity,
            strokeWeight: polylineOptions.strokeWeight
          }));

          model.trigger("route:loaded", model);
        });
      }
    },

    loadKml: function() {
      var model = this;

      if (this.get('kml')) {

        $.get(config.kmlPath + "/" + this.get('kml'), function(data) {
          var coords = $(data).find("LineString coordinates");
          var path = KmlHelper.coordinateStringToGMapsLatLngArray(coords.text());
          var polylineOptions = model.get("polylineOptions");

          model.set("routePolyLine", new gmaps.Polyline({
            path: path,
            strokeColor: polylineOptions.strokeColor,
            strokeOpacity: polylineOptions.strokeOpacity,
            strokeWeight: polylineOptions.strokeWeight
          }));

          model.trigger("route:loaded", model);
        });
      }
    }
  });
});

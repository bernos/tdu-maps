/*!
 * models/StageModel.js
 * Model representing a single stage in the tour down under
 */
define(["gmaps", "backbone", "jquery", "helpers/KmlHelper"],

function(gmaps, Backbone, $, KmlHelper) {

  return Backbone.Model.extend({
    loadKml: function() {
      var model = this;

      if (this.get('kml')) {

        $.get(this.get('kml'), function(data) {
          var coords = $(data).find("LineString coordinates");
          var path = KmlHelper.coordinateStringToGMapsLatLngArray(coords.text());
          var polylineOptions = model.get("polylineOptions");

          model.set("routePolyLine", new gmaps.Polyline({
            path: path,
            strokeColor: polylineOptions.strokeColor,
            strokeOpacity: polylineOptions.strokeOpacity,
            strokeWeight: polylineOptions.strokeWeight
          }));

          model.trigger("kml:loaded", model);
        });
      }
    }
  });
});

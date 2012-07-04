require.config({
  paths: {
    jquery : "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    underscore: "lib/underscore.min",
    backbone: "lib/backbone.min",
    async: "lib/requirejs-plugins/async",
    domready: "lib/requirejs-plugins/domready"
  },

  shim: {
    backbone: {
      deps: ["underscore"],
      exports: function()  {
        return Backbone.noConflict();
      }
    },
    underscore: {
      exports : function() {
        return _.noConflict();
      }
    }
  }
});

require(["domready", "gmaps", "jquery", "underscore", "config", "backbone", "models/StageModel", "views/MapView"], function(domready, gmaps, $, _, config, Backbone, StageModel, MapView) {

  domready(function() {

    config.mapView.el = '#map_canvas';

    var mapView = new MapView(config.mapView).render();

    _.each(config.stages, function(stageConfig, id) {
      var stage = new StageModel(stageConfig);

      stage.bind("kml:loaded", function(s) {
        s.get('routePolyLine').setMap(mapView.googleMap);

        var points = s.get('routePolyLine').getPath().getArray();

        var start = new gmaps.Marker({
          map : mapView.googleMap,
          position : points[0],
          icon: 'beachflag.png'

        });

        var finish = new gmaps.Marker({
          map : mapView.googleMap,
          position : points[points.length - 1]
        });
        //{position:}

      });

      stage.loadKml();
    });
  });
}); 


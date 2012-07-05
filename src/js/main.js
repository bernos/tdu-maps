require.config({
  paths: {
    jquery : "lib/jquery-1.7.2",
    underscore: "lib/underscore",
    backbone: "lib/backbone",
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

require([
  "domready", 
  "gmaps", 
  "jquery", 
  "underscore", 
  "config", 
  "backbone", 
  "models/StageModel", 
  "views/MapView", 
  "models/StageCollection"
], 

function(domready, gmaps, $, _, config, Backbone, StageModel, MapView, StageCollection) {

  domready(function() {

    var collection = new StageCollection();

    collection.bind("all", function() {
      console.log("collection changed ", arguments);
    });

    window.stages = collection;

    collection.fetch();



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


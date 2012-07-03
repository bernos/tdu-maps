require.config({
  paths: {
    jquery : "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    underscore: "underscore.min"
  },
  shim: {
    underscore: {
      exports : function() {
        return _.noConflict();
      }
    }
  }
});

require(["jquery", "underscore", "config"], function($, _, config) {
  $(function() {

    
    var map = new google.maps.Map(document.getElementById("map_canvas"), config.mapOptions);


    function parseCoordinates(strCoords) {
      var arr = strCoords.split("\n");
      var ret = [];

      _.each(arr, function(value) {
        value = value.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        var coords = value.split(",");

        if (coords.length > 1) {
          ret.push(new google.maps.LatLng(coords[1], coords[0]));
        }
      });

      return ret;
    }

    _.each(config.stages, function(stage, id) {

      // Load the kml using jquery and parse it manually
      $.get(stage.kml, function(data) {
        console.log("got", data);
        var coords = $(data).find("LineString coordinates");

        path = parseCoordinates(coords.text());

        var line = new google.maps.Polyline({
          path: path,
          strokeColor: stage.polylineOptions.strokeColor,
          strokeOpacity: stage.polylineOptions.strokeOpacity,
          strokeWeight: stage.polylineOptions.strokeWeight
        });

        line.setMap(map);

        console.log(path);
      });
      
      
        //stage.mapLayer = new google.maps.KmlLayer(stage.kml);

      //stage.mapLayer.setMap(map);
      //console.log(stage.mapLayer);
      
    });
  });
}); 


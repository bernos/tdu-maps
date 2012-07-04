define(["jquery", "underscore"], function($, _) {
	return {
		coordinateStringToGMapsLatLngArray : function(coordinateString) {
			var arr = coordinateString.split("\n");
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
	};
});
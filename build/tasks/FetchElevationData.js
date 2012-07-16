/**
 * A grunt task that uses the google elevation api to fetch elevation data for all the tour
 * down under routes.
 *
 * This script is designed to take the output of the compileKml grunt task as input, so 
 * make sure that is done first.
 * 
 * This task will output elevation data into a single json file per input file. Output files
 * are saved in the configured output directory, and are named "elevation-<input_filename>.json"
 */
module.exports = function(grunt) {

	var p = require('path'),
			http = require('http');


	/**
	 * Serialize an array of lat lon pairs to a string compatible with the
	 * google elevation api
	 */
	function serializePath(path) {
		var points = [];
		
		path.forEach(function(pair) {
			points.push(pair.join(","));
		});

		return points.join("|");
	}

	/**
	 * Gets the length of a path in km
	 */
	function pathLength(path) {
		var d = 0;

		for (var i = 1, m = path.length; i < m; i++) {
			var ds = distance(path[i], path[i-1]);
			d += ds;
		}

		return d;
	}

	/**
	 * Gets the distance between 2 points, in km
	 */
	function distance(p1, p2) {
		var lat1 = p1[0],
				lon1 = p1[1],
				lat2 = p2[0],
				lon2 = p2[1];

		var R = 6371; // Radius of the earth in km
		var dLat = (lat2-lat1) * Math.PI / 180;  // Javascript functions in radians
		var dLon = (lon2-lon1) * Math.PI / 180; 
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
		        Math.sin(dLon/2) * Math.sin(dLon/2); 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c; // Distance in km

		return d;
	}

	/**
	 * Splits a path into smaller chunks so that we don't exceed the maximum request url length
	 * when retrieving data from google.
	 */
	function splitPath(path, pointsPerSubPath) {
		var subPaths = [];
		var point = null;

		while(path.length > 0) {
			var subPath = [];

			if (point != null) {
				subPath.push(point);
			}

			while(subPath.length <= pointsPerSubPath) {
				if (path.length == 0) {
					break;
				}

				point = path.shift();
				subPath.push(point);
			}

			subPaths.push(subPath);
		}

		return subPaths;
	}

	function processRequestQueue(requestQueue, callback) {
		processRequestQueueItem(requestQueue.shift(), function() {
			if (requestQueue.length) {
				processRequestQueue(requestQueue, callback);
			} else {
				callback();
			}
		});
	}

	function processRequestQueueItem(requestQueueItem, callback) {
		processRequests(requestQueueItem.requests, function(responses) {
			// write results to file
			// we just want to concatenate all the "results" arrays from each
			// response into one big array
			var arr = [];

			responses.forEach(function(response) {
				response.results.forEach(function(result) {
					arr.push(result);
				});
			});

			grunt.file.write(requestQueueItem.filename, JSON.stringify(arr));

			callback();
		});
	}


	function processRequests(requests, callback, buf) {
		var r = requests.shift();
		
		if (buf == null) {
			buf = [];
		}
		
		doRequest(r, function(response) {
			buf.push(response);
			
			if (requests.length) {
				processRequests(requests, callback, buf);
			} else {
				callback(buf);
			}
		});

	}

	function doRequest(options, callback) {
		grunt.log.writeln("requesting http://" + options.host + options.path);
		http.request(options, function(response) {
			var str = '';

			response.on('data', function(chunk) {
				str += chunk;
			});

			response.on('end', function() {
				var data = JSON.parse(str);

				if (data.status == "OK") {
					grunt.log.writeln("...OK");
					callback(data);
				} else {
					grunt.log.error("Something went wrong when requesting data from google. Response code was " + data.status)
				}
			});
		}).end();
	}
	

	grunt.registerMultiTask('fetchElevationData', 'Fetches elevation data from google for routes', function() {
		var done = this.async();
		var files = grunt.file.expandFiles(this.file.src);
		var dest = this.file.dest;
		var totalRequests = 0;
		var sampleDistance = this.data.sampleDistance || 0.25;
		var data = this.data;
		var requestQueue = [];
		var maxSamples = this.data.maxSamples;

		var options = {
			host: "maps.googleapis.com",
			path: "/maps/api/elevation/json?sensor=false"
		};

		files.forEach(function(file) {
			var path = grunt.file.readJSON(file);
			var totalPoints = path.length;
			var totalDistance = pathLength(path);
			var subPaths = splitPath(path, data.pointsPerRequest || 100);
			var sumOfSubPathDistances = 0;
			var requests = [];

			if (maxSamples) {
				sampleDistance = totalDistance / maxSamples;
			}

			grunt.log.writeln("================================================================================");
			grunt.log.writeln("Building request queue for " + file);
			grunt.log.writeln("This stage has " + totalPoints + " points.");
			grunt.log.writeln("This stage is " + totalDistance + "km long");
			grunt.log.writeln("path has " + subPaths.length + " sub paths");

			// set up the request object for each subpath
			subPaths.forEach(function(subPath, i) {
				var distance = pathLength(subPath);
				var samples = Math.round(distance / sampleDistance);
				var pathString = serializePath(subPath);
				var request = {
					host : options.host,
					path : options.path + "&path=" + pathString + "&samples=" + samples
				}
				var rawUrl = "http://" + request.host + request.path;

				sumOfSubPathDistances += distance;

				grunt.log.writeln("--------------------------------------------------------------------------------");
				grunt.log.writeln("Subpath " + i + " is " + distance + "km long");
				grunt.log.writeln("Sampling every "+sampleDistance+"km gives " + samples + " total samples");

				// Only go ahead if the subpath is longer than the sample distance
				if (samples > 1) {
					// Bail now, if URL exceeds maximum allowed length
					if (rawUrl.length > 2048) {
						grunt.log.error("The url to retrive elevation for this data exceeds the 2048 character limit by " + (rawUrl.length - 2048) + " characters.");
						done(false);
						return;
					}
					//grunt.log.writeln(rawUrl);
					grunt.log.writeln("URL is " + (("http://" + request.host + request.path).length) + " chars long");

					requests.push(request);
				} else {
					grunt.log.writeln("Subpath is shorter than the minimum sample distance, ignoring");
				}				
			});
			
			requestQueue.push({
				filename : p.join(dest, "elevation-" + p.basename(file)),
				requests : requests
			});
		});

		grunt.log.writeln("================================================================================");
		var l = 0;
		requestQueue.forEach(function(r) {
			l += r.requests.length;
		});
		grunt.log.writeln("About to make " + l + " requests");

		processRequestQueue(requestQueue, function() {
			done(true);
		});
	});
}
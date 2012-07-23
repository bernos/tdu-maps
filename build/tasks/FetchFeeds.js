/**
 * A grunt task that downloads all feed data and saves the json locally. Useful during development
 */
module.exports = function(grunt) {

	var p = require('path'),
			http = require('http');

	function processFeedMap(host, feedmap, dest, callback) {
		for (var source in feedmap) {
			if (feedmap[source] != "done") {
				var options = {
					host : host,
					path : source
				}

				doRequest(options, function(data) {
					grunt.file.write([dest, feedmap[source]].join("/"), data);
					feedmap[source] = "done";
					processFeedMap(host, feedmap, dest, callback);
				});

				return;
			}
		}

		callback();
	}

	function doRequest(options, callback) {
		grunt.log.writeln("requesting http://" + options.host + "/" + options.path);

		http.request(options, function(response) {
			var str = '';

			response.on('data', function(chunk) {
				str += chunk;
			});

			response.on('end', function() {
				grunt.log.writeln("Done");
				callback(str);
			});
		}).end();
	}

	grunt.registerMultiTask('fetchFeeds', 'Fetches elevation data from google for routes', function() {
		var done = this.async();
		var dest = this.file.dest;
		var feedmap = this.data.feeds;

		processFeedMap(this.data.host, this.data.feeds, dest, function() {
			done(true);
		});
	});
}
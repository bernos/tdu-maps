module.exports = function(grunt) {

	var http = require('http');
	var fs = require('fs');

	var url = ["/chart",
					   "?chxs=0,676767,11,0,l,676767",
					   "&chxt=y",
					   "&chs=380x220",
					   "&cht=lxy",
					   "&chco=FF0000",
					   "&chds=-5,100,0,528.24",
					   "&chd=t:-1|{data}",
					   "&chdlp=b",
					   "&chls=1",
					   "&chma=5,5,5,25",
					   "&chtt=Elevation+in+meters",
					   "&chts=676767,12.5"].join("");

	function fetchImages(requestQueue, callback) {
		if (requestQueue.length) {
			var r = requestQueue.shift();
			fetchImage(r.requestOptions, r.file, function(success) {
				if (success) {
					fetchImages(requestQueue, callback);
				} else {
					callback(false);
				}
			});
		} else {
			callback(true);
		}
	}

	function fetchImage(requestOptions, file, callback) {
		var request = http.get(requestOptions, function(response) {
			var imageData = '';
			response.setEncoding('binary');

			response.on('data', function(chunk) {
				imageData += chunk;
			});

			response.on('end', function() {
				fs.writeFile(file, imageData, 'binary', function(err) {
					if (!err) {
						callback(true);
					} else {
						callback(false);
					}
				});
			});

		}).end();
	}

	grunt.registerMultiTask('elevationImages', 'Builds elevation images from elevation data', function() {
		var done = this.async();
		var files = grunt.file.expandFiles(this.file.src);
		var dest = this.file.dest;
		var http = require('http');
		var p = require('path');
		var chartOptions = this.data.chartOptions || {};
		var requestQueue = [];

		files.forEach(function(file) {
			
			var points = [];
			var data = grunt.file.readJSON(file);
			var imageFile = p.basename(file).split(".")[0] + ".png";

			data.forEach(function(point) {
				points.push(Math.round(point.elevation * 100) / 100);
			});


			requestQueue.push({
				file : p.join(dest, imageFile),
				requestOptions : {
					host : "chart.apis.google.com",
					path : url.replace("{data}", points.join(","))
				}
			});
		});

		fetchImages(requestQueue, function(success) {
			done(success);
		});
	});
}

/*

http://chart.apis.google.com/chart?chxs=0,676767,11,0,l,676767&chxt=y&chs=440x220&cht=lxy&chco=FF0000&chds=-5,100,0,100&chd=t:-1|{data}&chdlp=b&chls=1&chma=5,5,5,25&chtt=Elevation+in+meters

*/
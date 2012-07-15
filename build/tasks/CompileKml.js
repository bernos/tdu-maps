module.exports = function(grunt) {

  grunt.registerMultiTask('compileKml', 'Compiles all the geo data from the stage kml files into json files.', function() {

    function coordinateStringToArray(coordinateString) {
      var arr = coordinateString.split("\n");
      var ret = [];

      arr.forEach(function(value) {
        value = value.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        var coords = value.split(",");

        if (coords.length > 1) {
          ret.push([coords[1], coords[0]]);
        }
      });

      return ret;
    }

    grunt.log.writeln("Compiling kml files using " + this.file.src);

    // load up the stages from the stages config.
    function define(fn) {
      return fn();
    }

    var stages = eval(grunt.file.read(this.file.src));
    var kmlPath = this.data.kmlPath;
    var dest = this.file.dest;

    stages.forEach(function(stage) {
      var contents = grunt.file.read(kmlPath + "/" + stage.kml);
      var matches = contents.match(/<coordinates>([\s\S]*)<\/coordinates>/);
      stage.route = coordinateStringToArray(matches[1]);

      grunt.file.write(dest + "/" + stage.json, JSON.stringify(stage.route));
    });
  });
};
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    lint: {
      all: ['grunt.js', 'src/js/models/*.js']
    },
    
    requirejs: {
      baseUrl: "src/js",
      paths: {
        //jquery : "lib/jquery-1.7.2",
        jquery : "lib/zepto",
        underscore: "lib/underscore",
        backbone: "lib/backbone",
        async: "lib/requirejs-plugins/async",
        domready: "lib/requirejs-plugins/domready",
        text: "lib/requirejs-plugins/text",
        handlebars: "lib/Handlebars"
      },
      shim: {
        jquery : {
          exports: function() {
            return $;
          }
        },
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
        },
        handlebars : {
          exports : function() {
            return Handlebars;
          }
        }
      },
      name: "main",
      out: "src/js/main-built-grunt.js"
    }
  });

  grunt.loadNpmTasks('grunt-requirejs');
  // Default task.
  grunt.registerTask('default', 'requirejs');
};
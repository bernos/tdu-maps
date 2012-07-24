module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    lint: {
      all: ['grunt.js', 'src/js/models/*.js']
    },

    less: {
      all: {
        options : {
          paths : ['src/less']
        },

        files: {
          "src/css/all.css" : "src/less/all.less"
        }
      }
    },

    compileKml: {
      all: {
        src : 'src/js/config/stages.js',
        dest : 'src/js/config',
        kmlPath : 'src/kml'
      }
    },

    fetchElevationData : {
      all: {
        src : 'src/js/config/stage-*.json',
        dest : 'src/js/config',
        pointsPerRequest : 50, // number of path points to include in each request to google
        sampleDistance : 0.25, // distance between elevation samples in km
        maxSamples : 200 // if this is set it will override the sample distance
      }
    },

    elevationImages : {
      all : {
        src : 'src/js/config/elevation-stage-*.json',
        dest : 'src/js/config',
        chartOptions : {

        }
      }
    },

    fetchFeeds : {
      all: {
        dest : 'src/api',
        host : 'tourdownunder.com.au',
        feeds : {
          '/tdu-media/helpers/results.ashx?stage=O&jersey=SPR' : 'results/0/SPR.json',
          '/tdu-media/helpers/results.ashx?stage=O&jersey=YNG' : 'results/0/YNG.json',
          '/tdu-media/helpers/results.ashx?stage=O&jersey=LDT' : 'results/0/LDT.json',
          '/tdu-media/helpers/results.ashx?stage=O&jersey=SAN' : 'results/0/SAN.json',
          '/tdu-media/helpers/results.ashx?stage=O&jersey=KOM' : 'results/0/KOM.json',
          '/tdu-media/helpers/results.ashx?stage=O&jersey=MAR' : 'results/0/MAR.json',

          '/tdu-media/helpers/results.ashx?stage=C&jersey=CLA' : 'results/C/CLA.json',
          '/tdu-media/helpers/results.ashx?stage=C&jersey=PR1' : 'results/C/PR1.json',
          '/tdu-media/helpers/results.ashx?stage=C&jersey=PR2' : 'results/C/PR2.json',
          '/tdu-media/helpers/results.ashx?stage=C&jersey=PR3' : 'results/C/PR3.json',
          '/tdu-media/helpers/results.ashx?stage=C&jersey=PR4' : 'results/C/PR4.json',

          '/tdu-media/helpers/results.ashx?stage=1&jersey=SAN' : 'results/1/SAN.json',
          '/tdu-media/helpers/results.ashx?stage=1&jersey=KOM' : 'results/1/KOM.json',
          '/tdu-media/helpers/results.ashx?stage=1&jersey=SPR' : 'results/1/SPR.json',
          '/tdu-media/helpers/results.ashx?stage=1&jersey=YNG' : 'results/1/YNG.json',
          '/tdu-media/helpers/results.ashx?stage=1&jersey=MAR' : 'results/1/MAR.json',
          '/tdu-media/helpers/results.ashx?stage=1&jersey=LDT' : 'results/1/LDT.json',
          '/tdu-media/helpers/results.ashx?stage=1&jersey=STG' : 'results/1/STG.json',

          '/tdu-media/helpers/results.ashx?stage=2&jersey=SAN' : 'results/2/SAN.json',
          '/tdu-media/helpers/results.ashx?stage=2&jersey=KOM' : 'results/2/KOM.json',
          '/tdu-media/helpers/results.ashx?stage=2&jersey=SPR' : 'results/2/SPR.json',
          '/tdu-media/helpers/results.ashx?stage=2&jersey=YNG' : 'results/2/YNG.json',
          '/tdu-media/helpers/results.ashx?stage=2&jersey=MAR' : 'results/2/MAR.json',
          '/tdu-media/helpers/results.ashx?stage=2&jersey=LDT' : 'results/2/LDT.json',
          '/tdu-media/helpers/results.ashx?stage=2&jersey=STG' : 'results/2/STG.json',

          '/tdu-media/helpers/results.ashx?stage=3&jersey=SAN' : 'results/3/SAN.json',
          '/tdu-media/helpers/results.ashx?stage=3&jersey=KOM' : 'results/3/KOM.json',
          '/tdu-media/helpers/results.ashx?stage=3&jersey=SPR' : 'results/3/SPR.json',
          '/tdu-media/helpers/results.ashx?stage=3&jersey=YNG' : 'results/3/YNG.json',
          '/tdu-media/helpers/results.ashx?stage=3&jersey=MAR' : 'results/3/MAR.json',
          '/tdu-media/helpers/results.ashx?stage=3&jersey=LDT' : 'results/3/LDT.json',
          '/tdu-media/helpers/results.ashx?stage=3&jersey=STG' : 'results/3/STG.json',

          '/tdu-media/helpers/results.ashx?stage=4&jersey=SAN' : 'results/4/SAN.json',
          '/tdu-media/helpers/results.ashx?stage=4&jersey=KOM' : 'results/4/KOM.json',
          '/tdu-media/helpers/results.ashx?stage=4&jersey=SPR' : 'results/4/SPR.json',
          '/tdu-media/helpers/results.ashx?stage=4&jersey=YNG' : 'results/4/YNG.json',
          '/tdu-media/helpers/results.ashx?stage=4&jersey=MAR' : 'results/4/MAR.json',
          '/tdu-media/helpers/results.ashx?stage=4&jersey=LDT' : 'results/4/LDT.json',
          '/tdu-media/helpers/results.ashx?stage=4&jersey=STG' : 'results/4/STG.json',

          '/tdu-media/helpers/results.ashx?stage=5&jersey=SAN' : 'results/5/SAN.json',
          '/tdu-media/helpers/results.ashx?stage=5&jersey=KOM' : 'results/5/KOM.json',
          '/tdu-media/helpers/results.ashx?stage=5&jersey=SPR' : 'results/5/SPR.json',
          '/tdu-media/helpers/results.ashx?stage=5&jersey=YNG' : 'results/5/YNG.json',
          '/tdu-media/helpers/results.ashx?stage=5&jersey=MAR' : 'results/5/MAR.json',
          '/tdu-media/helpers/results.ashx?stage=5&jersey=LDT' : 'results/5/LDT.json',
          '/tdu-media/helpers/results.ashx?stage=5&jersey=STG' : 'results/5/STG.json',

          '/tdu-media/helpers/results.ashx?stage=6&jersey=SAN' : 'results/6/SAN.json',
          '/tdu-media/helpers/results.ashx?stage=6&jersey=KOM' : 'results/6/KOM.json',
          '/tdu-media/helpers/results.ashx?stage=6&jersey=SPR' : 'results/6/SPR.json',
          '/tdu-media/helpers/results.ashx?stage=6&jersey=YNG' : 'results/6/YNG.json',
          '/tdu-media/helpers/results.ashx?stage=6&jersey=MAR' : 'results/6/MAR.json',
          '/tdu-media/helpers/results.ashx?stage=6&jersey=LDT' : 'results/6/LDT.json',
          '/tdu-media/helpers/results.ashx?stage=6&jersey=STG' : 'results/6/STG.json',
          '/tdu-media/helpers/results.ashx?stage=6&jersey=TDA' : 'results/6/TDA.json',

          '/tdu-media/helpers/racefeed.ashx?maxItems=30&feedID=1' : 'livefeeds/1.json', 
          '/tdu-media/helpers/racefeed.ashx?maxItems=30&feedID=3' : 'livefeeds/3.json',
          '/tdu-media/helpers/racefeed.ashx?maxItems=30&feedID=4' : 'livefeeds/4.json',
          '/tdu-media/helpers/racefeed.ashx?maxItems=30&feedID=5' : 'livefeeds/5.json',
          '/tdu-media/helpers/racefeed.ashx?maxItems=30&feedID=6' : 'livefeeds/6.json',
          '/tdu-media/helpers/racefeed.ashx?maxItems=30&feedID=7' : 'livefeeds/7.json',
          '/tdu-media/helpers/racefeed.ashx?maxItems=30&feedID=8' : 'livefeeds/8.json',
          '/tdu-media/helpers/racefeed.ashx?maxItems=30&feedID=9' : 'livefeeds/9.json'

        }
      }
    },
    
    requirejs: {
      baseUrl: "src/js",
      paths: {
        config: "config",
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
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadTasks('build/tasks');

  // Default task.
  grunt.registerTask('default', 'requirejs');

};
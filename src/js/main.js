/*!
 * main.js
 * Our application entry point
 */

/**
 * Configuration options for requirejs AMD loader
 */
require.config({
  paths: {
    jquery : "lib/jquery-1.7.2",
    underscore: "lib/underscore",
    backbone: "lib/backbone",
    async: "lib/requirejs-plugins/async",
    domready: "lib/requirejs-plugins/domready",
    text: "lib/requirejs-plugins/text",
    handlebars: "lib/Handlebars"
  },

  shim: {
    backbone: {
      deps: ["jquery", "underscore"],
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
  }
});

/**
 * Our application entry point
 */
require([
  "jquery",
  "domready",
  "underscore", 
  "config", 
  "models/models", 
  "views/views"
], 

function($, domready, _, config, models, views) {

  var stageCollection;
  var liveFeedCollection;
  var mapView;

  /**
   * Initialize the app. This is the main entry point. Gets called once the dom has
   * loaded
   */
  function init() {
    initModel();
  //  initView(); 

    stageCollection.fetch();
  }

  /**
   * Initialize the model tier
   */
  function initModel() {
    stageCollection = new models.StageCollection();

    liveFeedCollection = new models.LiveFeedCollection(config.liveFeeds.feeds);


    var resultFeedModel = new models.ResultFeed({
      stageId : 0,
      jerseyId : 'SPR',
      name : "Jersey name here",
      jerseyIcon : "http://tourdownunder.com.au/images/results/jersey-images-29Px/santos-ochre-leaders-jersey.jpg"
    });


    // TEMP
    var resultFeedView = new views.ResultFeedView({
      el : "#map_canvas",
      model : resultFeedModel
    });

    resultFeedModel.get('items').fetch();
    // */




    // TEMP    
    /*
    _.each(liveFeedCollection.models, function(model) {

      model.get('items').bind("reset", function() {
        console.log("loaded feed", arguments);
      })

      model.get('items').fetch();
    });
    // */
    // END TEMP

    // TEMP
    /*
    var resultFeed = new models.ResultFeed({
      name : "Some jersey name",
      jerseyId : "SPR",
      jerseyIcon : "aasdfababa"
    });

    resultFeed.set("stageId", 0);

    resultFeed.get('items').bind("reset", function() {
      console.log("got result feed", arguments)
    });

    resultFeed.get('items').fetch();
    // */
    // END TEMP

    /*
    // TEMP
    var stageResults = new models.StageResults({
      stageId : 0,
      name : "General classification",
      feeds : [
        {
          name : "Some jersey name",
          jerseyId : "SPR",
          jerseyIcon : "aasdfababa"
        },
        {
          name : "Some jersey name",
          jerseyId : "ABC",
          jerseyIcon : "aasdfababa"
        }
      ]
    });

    _.each(stageResults.get('feeds').models, function(resultFeed) {

      console.log("resultFeed", resultFeed)

      resultFeed.get('items').bind('reset', function() {
        console.log("loaded results", arguments);
      });
      resultFeed.get('items').fetch();
    });

    // */
    // END TEMP
  }

  /**
   * Initialize the view
   */
  function initView() {
    var mapOptions = {
      stageCollection : stageCollection
    }

    mapView = new views.MapView(_.extend(mapOptions, config.mapView));

    mapView.render();
  }

  domready(init);
}); 


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
    domready: "lib/requirejs-plugins/domready"
  },

  shim: {
    backbone: {
      deps: ["underscore", "jquery"],
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

/**
 * Our application entry point
 */
require([
  "domready",
  "underscore", 
  "config", 
  "models/models", 
  "views/views"
], 

function(domready, _, config, models, views) {

  var stageCollection;
  var liveFeedCollection;
  var mapView;

  /**
   * Initialize the app. This is the main entry point. Gets called once the dom has
   * loaded
   */
  function init() {
    initModel();
    initView(); 

    stageCollection.fetch();
  }

  /**
   * Initialize the model tier
   */
  function initModel() {
    stageCollection = new models.StageCollection();

    liveFeedCollection = new models.LiveFeedCollection(config.liveFeeds.feeds);

    _.each(liveFeedCollection.models, function(model) {

      model.items.bind("reset", function() {
        console.log("loaded feed", arguments);
      })

      model.items.fetch();
    });

    console.log(liveFeedCollection)
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


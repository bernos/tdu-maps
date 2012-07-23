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
    //jquery : "lib/zepto",
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
  "backbone",
  "config/config",
  "models/models",
  "views/views",
  "config/stages"
],

function($, domready, _, Backbone, config, models, views, stages) {
  
  var stageCollection;
  var liveFeedCollection;
  var standingsModel;


 
  var viewStack;

  
  var router;

  

  /**
   * Initialize the app. This is the main entry point. Gets called once the dom has
   * loaded
   */
  function init() {
    initModel();
    initView();
    initRouter();

    Backbone.history.start();
  }

  /**
   * Initialize the model tier
   */
  function initModel() {
    stageCollection = new models.StageCollection(stages);
    standingsModel  = new models.StageResults(config.resultFeeds.standings);

    console.log("stages are ", stageCollection);

    //liveFeedCollection = new models.LiveFeedCollection(config.liveFeeds.feeds);


    // TEMP
    /*
    var liveFeedModel = new models.LiveFeed({
      id : 3
    });

    var liveFeedView = new views.LiveFeedView({
      el : "#map_canvas",
      model : liveFeedModel
    });

    liveFeedModel.get('items').fetch();
    // */
    // END TEMP

    // TEMP
    /*
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
    viewStack = new views.ViewStack({
      el : "#page",
      views : {
        "home"         : new views.HomeView(),
        "stageDetail"  : new views.StageDetailView(),
        "stageFeed"    : new views.StageLiveFeedView(),
        "stageMap"     : new views.StageMapView(),
        "stageProfile" : new views.StageProfileView(),
        "stageResults" : new views.StageResultsView(),
        "teams"        : new views.TeamsView(),
        "stagesMenu"   : new views.StagesMenuView({
          stages : stageCollection
        }),
        "standings"   : new views.StandingsView({
          model : standingsModel
        })
      }
    });

    viewStack.render();


    /*
    var mapOptions = {
      stageCollection : stageCollection
    }

    mapView = new views.MapView(_.extend(mapOptions, config.mapView));

    mapView.render();
    */
  }

  /**
   * Initializes the application router
   */
  function initRouter() {
    router = new Backbone.Router({
      routes : config.routes
    });

    router.on("route:home", function() {
      console.log("GO HOME");
      viewStack.setCurrentView("home");
    });

    router.on("route:stages", function() {
      console.log("GO TO STAGES");
      viewStack.setCurrentView("stagesMenu");
    });

    router.on("route:stage", function(stageId) {
      console.log("GO TO STAGE ", stageId);
      var stage = stageCollection.get(stageId);
      console.log(stage);
      viewStack.get("stageDetail").setStage(stage);
      viewStack.setCurrentView("stageDetail");
    });

    router.on("route:standings", function(jerseyId) {
      if (!jerseyId) {
        jerseyId = "SAN";
      }

      viewStack.get("standings").setJerseyId(jerseyId);
      viewStack.setCurrentView("standings");

      // Tell the stadingsview which jersey feed to display
      // 
      
    });

    router.on("route:live-feed", function(stageId) {
      var stage = stageCollection.get(stageId);

      console.log("the stage is ", stage);
      viewStack.get("stageFeed").setStage(stage);
      viewStack.setCurrentView("stageFeed");

      stage.get('liveFeed').load();
    });

    router.on("route:map", function(stageId) {
      viewStack.setCurrentView("stageMap");
    });

    router.on("route:profile", function(stageId) {
      viewStack.setCurrentView("stageProfile");
    });

    router.on("route:results", function(stageId) {
      viewStack.setCurrentView("stageResults");
    });

    router.on("route:teams", function() {
      console.log("GOTO TEAMS");
      viewStack.setCurrentView("teams");
    });

    router.bind("all", function() {
      console.log("route", arguments);
    });
  }

  domready(init);
}); 


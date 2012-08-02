
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
  var standingsModel;

  var mainMenuView;
  var viewStack;
  
  var router;

  /**
   * Initialize the app. This is the main entry point. Gets called once the dom has
   * loaded
   */
  function init() {
    setTimeout(function() {
      initRouter();
      initModel();
      initView();    

      Backbone.history.start();

      $("body").removeClass("preloading");
    }, 2500);
    
  }

  /**
   * Initialize the model tier
   */
  function initModel() {
    stageCollection = new models.StageCollection(stages);
    standingsModel  = new models.StageResults(config.resultFeeds.standings);
  }

  /**
   * Initialize the view
   */
  function initView() {
    mainMenuView = new views.MainMenuView({
      el : "#main-menu",
      router: router
    });

    viewStack = new views.ViewStack({
      el : "#page",
      views : {
        "home"         : new views.HomeView(),
        "stageDetail"  : new views.StageDetailView(),
        "stageFeed"    : new views.StageLiveFeedView(),
        "stageMap"     : new views.StageMapView(config.mapView),
        "stageProfile" : new views.StageProfileView(),
        "stageResults" : new views.StageResultsView(),
        "teams"        : new views.TeamsView(),
        "team"         : new views.TeamDetailView(),
        "stagesMenu"   : new views.StagesMenuView({
          stages : stageCollection
        }),
        "standings"   : new views.StandingsView({
          model : standingsModel
        })
      }
    });

    $('#menu-btn').click(function(e) {
      mainMenuView.toggle();
      e.preventDefault();
    });
  }

  /**
   * Initializes the application router
   */
  function initRouter() {
    router = new Backbone.Router({
      routes : config.routes
    });

    router.on("route:home", function() {
      viewStack.setCurrentView("home");
    });

    router.on("route:stages", function() {
      viewStack.setCurrentView("stagesMenu");
    });

    router.on("route:stage", function(stageId) {
      var stage = stageCollection.get(stageId);

      viewStack.get("stageDetail").setStage(stage);
      viewStack.setCurrentView("stageDetail");
    });

    router.on("route:standings", function(jerseyId) {
      if (!jerseyId) {
        jerseyId = "SAN";
      }

      var feed = standingsModel.getFeedByJerseyId(jerseyId);

      viewStack.get("standings").setFeed(feed);
      viewStack.setCurrentView("standings");

      feed.load();
    });

    router.on("route:live-feed", function(stageId) {
      var stage = stageCollection.get(stageId);

      viewStack.get("stageFeed").setStage(stage);
      viewStack.setCurrentView("stageFeed");

      stage.get('liveFeed').load();
    });

    router.on("route:map", function(stageId) {
      var stage = stageCollection.get(stageId);
      var view = viewStack.get("stageMap");

      view.setStage(stage);
      viewStack.setCurrentView("stageMap");

      stage.loadRoute();
    });

    router.on("route:profile", function(stageId) {
      var stage = stageCollection.get(stageId);
      var view = viewStack.get("stageProfile");

      view.setStage(stage);

      viewStack.setCurrentView("stageProfile");
    });

    router.on("route:results", function(stageId, jerseyId) {
      console.log("show results")
      var view  = viewStack.get("stageResults");
      var stage = stageCollection.get(stageId);

      if (!jerseyId) {
        jerseyId = stage.get('results').get('defaultJerseyId');
      }

      view.setStage(stage);

      var resultFeed = stage.get('results').getFeedByJerseyId(jerseyId);
         
      view.setResultFeed(resultFeed);

      viewStack.setCurrentView("stageResults");

      resultFeed.load();
    });

    router.on("route:teams", function() {
      viewStack.setCurrentView("teams");
    });

    router.on("route:team", function(teamId) {
      var team = _.find(config.teams, function(team) {
        return team.url == "#/teams/" + teamId;
      });

      console.log("GOT TEAM", team);
      var view = viewStack.get("team");

      

      viewStack.setCurrentView("team");

      view.setTeam(team);
    });
  }

  domready(init);
}); 


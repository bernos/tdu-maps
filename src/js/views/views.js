/*!
 * views.js
 * Module for aggregating all our views
 */
define([
	'views/HandlebarsHelpers',
	'views/ViewBase',
	'views/HomeView',
	'views/MapView',
	'views/ResultFeedView',
  'views/LiveFeedView',
  'views/MainMenuView',
  'views/StageDetailView',
  'views/StagesMenuView',
  'views/StageLiveFeedView',
  'views/StageMapView',
  'views/StageProfileView',
  'views/StageResultsView',
  'views/StandingsView',
  'views/TeamsView',
  'views/TeamDetailView',
  'views/ViewStack',
  'views/ResultFeedSelectList'
],

function(
	HandlebarsHelpers,
	ViewBase,
	HomeView,
	MapView,
	ResultFeedView,
	LiveFeedView,
  MainMenuView,
	StageDetailView,
	StagesMenuView,
	StageLiveFeedView,
	StageMapView,
	StageProfileView,
	StageResultsView,
	StandingsView,
	TeamsView,
  TeamDetailView,
	ViewStack,
  ResultFeedSelectList
) {
	return {
		ViewBase       	 	: ViewBase,
		HomeView        	: HomeView,
		MapView         	: MapView,
		ResultFeedView  	: ResultFeedView,
    LiveFeedView    	: LiveFeedView,
    MainMenuView      : MainMenuView,
    StageDetailView 	: StageDetailView,
    StagesMenuView  	: StagesMenuView,
    StageLiveFeedView : StageLiveFeedView,
    StageMapView 			: StageMapView,
    StageProfileView 	: StageProfileView,
    StageResultsView 	: StageResultsView,
    StandingsView   	: StandingsView,
    TeamsView 				: TeamsView,
    TeamDetailView    : TeamDetailView,
    ViewStack       	: ViewStack,
    ResultFeedSelectList        : ResultFeedSelectList
	};
});
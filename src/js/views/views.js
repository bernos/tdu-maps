/*!
 * views.js
 * Module for aggregating all our views
 */
define([
	'views/ViewBase',
	'views/HomeView',
	'views/MapView',
	'views/ResultFeedView',
  'views/LiveFeedView',
  'views/StageDetailView',
  'views/StagesMenuView',
  'views/StageLiveFeedView',
  'views/StageMapView',
  'views/StageProfileView',
  'views/StageResultsView',
  'views/StandingsView',
  'views/TeamsView',
  'views/ViewStack'
],

function(
	ViewBase,
	HomeView,
	MapView,
	ResultFeedView,
	LiveFeedView,
	StageDetailView,
	StagesMenuView,
	StageLiveFeedView,
	StageMapView,
	StageProfileView,
	StageResultsView,
	StandingsView,
	TeamsView,
	ViewStack
) {
	return {
		ViewBase       	 	: ViewBase,
		HomeView        	: HomeView,
		MapView         	: MapView,
		ResultFeedView  	: ResultFeedView,
    LiveFeedView    	: LiveFeedView,
    StageDetailView 	: StageDetailView,
    StagesMenuView  	: StagesMenuView,
    StageLiveFeedView : StageLiveFeedView,
    StageMapView 			: StageMapView,
    StageProfileView 	: StageProfileView,
    StageResultsView 	: StageResultsView,
    StandingsView   	: StandingsView,
    TeamsView 				: TeamsView,
    ViewStack       	: ViewStack
	};
});
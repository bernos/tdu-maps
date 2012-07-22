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
  'views/StandingsView',
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
	StandingsView,
	ViewStack
) {
	return {
		ViewBase        : ViewBase,
		HomeView        : HomeView,
		MapView         : MapView,
		ResultFeedView  : ResultFeedView,
    LiveFeedView    : LiveFeedView,
    StageDetailView : StageDetailView,
    StagesMenuView  : StagesMenuView,
    StandingsView   : StandingsView,
    ViewStack       : ViewStack
	};
});
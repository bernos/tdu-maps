/*!
 * views.js
 * Module for aggregating all our views
 */
define([
	'views/ViewBase',
	'views/MapView',
	'views/ResultFeedView',
  'views/LiveFeedView'
],

function(ViewBase, MapView, ResultFeedView, LiveFeedView) {
	return {
		ViewBase        : ViewBase,
		MapView         : MapView,
		ResultFeedView  : ResultFeedView,
    LiveFeedView    : LiveFeedView
	};
});
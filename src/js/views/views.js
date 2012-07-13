/*!
 * views.js
 * Module for aggregating all our views
 */
define([
	'views/ViewBase',
	'views/MapView',
	'views/ResultFeedView'
], 

function(ViewBase, MapView, ResultFeedView) {
	return {
		ViewBase : ViewBase,
		MapView : MapView,
		ResultFeedView : ResultFeedView
	}
});
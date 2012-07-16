/*!
 * models.js
 * Agregates and exposes all of our model classes
 */
define([
	'models/StageCollection', 
	'models/StageModel',
	'models/LiveFeed',
	'models/LiveFeedCollection',
	'models/LiveFeedItem',
	'models/LiveFeedItemCollection',
	'models/ResultFeedItem',
	'models/ResultFeedItemCollection',
	'models/ResultFeed',
	'models/StageResults'
], 

function(
	StageCollection, 
	StageModel, 
	LiveFeed, 
	LiveFeedCollection, 
	LiveFeedItem, 
	LiveFeedItemCollection,
	ResultFeedItem,
	ResultFeedItemCollection,
	ResultFeed,
	StageResults
) {
	return {
		StageCollection 					: StageCollection,
		StageModel 								: StageModel,
		LiveFeed 									: LiveFeed,
		LiveFeedCollection 				: LiveFeedCollection,
		LiveFeedItem 							: LiveFeedItem,
		LiveFeedItemCollection 		: LiveFeedItemCollection,
		ResultFeedItem 						: ResultFeedItem,
		ResultFeedItemCollection 	: ResultFeedItemCollection,
		ResultFeed 								: ResultFeed,
		StageResults							: StageResults
	}
});
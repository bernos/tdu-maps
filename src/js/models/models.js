define([
	'models/StageCollection', 
	'models/StageModel',
	'models/ResultCollection',
	'models/LiveFeed',
	'models/LiveFeedCollection',
	'models/LiveFeedItem',
	'models/LiveFeedItemCollection'
], 

function(StageCollection, StageModel, ResultCollection, LiveFeed, LiveFeedCollection, LiveFeedItem, LiveFeedItemCollection) {
	return {
		StageCollection : StageCollection,
		StageModel : StageModel,
		ResultCollection : ResultCollection,
		LiveFeed: LiveFeed,
		LiveFeedCollection : LiveFeedCollection,
		LiveFeedItem : LiveFeedItem,
		LiveFeedItemCollection : LiveFeedItemCollection
	}
});
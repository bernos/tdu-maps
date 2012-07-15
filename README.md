tdu-maps
========

You will need node.js installed to build the project.

Run "npm build" after initally downloading the project to pull down all dependencies.

Run `node_modules/.bin/grunt` from the project root folder to build the project. 
Better yet, install grunt globally using `npm install grunt -g`, and build by simply 
running `grunt` from the project root folder.

Optimising stage route data
===========================

Route data for each stage has been supplied in kml files. KML is pretty verbose, and we are really
only intereted in the geo data for each of the points on the stages route path. We have a custom
grunt task which will compile co-ordinate data from each of the stage kml files into a more compact
json format. To run this task use

`grunt compileKml:all`

You'll only need to run this if the kml files ever change, which is unlikely. See /js/config/stages.js
for configuration of which json/kml file associates with which stage.

URLS
====

Live commentary
---------------

Live News
http://tourdownunder.com.au/tdu-media/helpers/racefeed.ashx?maxItems=10&feedID=1&rnd=9979977821931243

Down under classic
http://tourdownunder.com.au/tdu-media/helpers/racefeed.ashx?maxItems=10&feedID=3&rnd=9058662224560976

Stage 1
http://tourdownunder.com.au/tdu-media/helpers/racefeed.ashx?maxItems=10&feedID=4&rnd=0601259870454669

Coleman's Group Stage 2
http://tourdownunder.com.au/tdu-media/helpers/racefeed.ashx?maxItems=10&feedID=5&rnd=4003555125091225

Stage 3
http://tourdownunder.com.au/tdu-media/helpers/racefeed.ashx?maxItems=10&feedID=6&rnd=7802701971959323

BUPA Stage 4
http://tourdownunder.com.au/tdu-media/helpers/racefeed.ashx?maxItems=10&feedID=7&rnd=5314085886348039

Jayco Stage 5
http://tourdownunder.com.au/tdu-media/helpers/racefeed.ashx?maxItems=10&feedID=8&rnd=33998516178689897

Stage 6
http://tourdownunder.com.au/tdu-media/helpers/racefeed.ashx?maxItems=10&feedID=9&rnd=16332797869108617

Results feeds
-------------
Base url: http://tourdownunder.com.au/tdu-media/helpers/results.ashx

Params:
	stage
		Identifier for the course stage you want the results of. See the table below
		for relevant IDs to use

		Stage name 					Stage param value
		General classification 		0
		Stage One					1

	jersey
		Indicates which jersey you want results for. Each stage has a different set of
		jerseys. See below

		stage General Classification




General classification

Jayco Sprint
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=O&jersey=SPR&rnd=3003696359228343

Cycle Instead Young Rider
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=O&jersey=YNG&rnd=5758582192938775

SA Brilliant Blend Winning Team
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=O&jersey=LDT&rnd=5355673164594918

Santos Ochre Leader's Jersey (General Classification)
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=O&jersey=SAN&rnd=7855042754672468

Skoda King of the Mountain
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=O&jersey=KOM&rnd=7801202649716288

Hindmarsh Most Aggressive Rider
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=O&jersey=MAR&rnd=9720898016821593

-------
Classic

Classic Overall
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=C&jersey=CLA&rnd=26200400525704026

Classic Prime 1
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=C&jersey=PR1&rnd=9543797902297229

Classic Prime 2
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=C&jersey=PR2&rnd=4306221182923764

Classic Prime 3
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=C&jersey=PR3&rnd=2858462780714035

Classic Prime 4
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=C&jersey=PR4&rnd=3105854340828955

-------
Stage 1

Santos Ochre Leader's Jersey
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=1&jersey=SAN&rnd=11066021141596138

Skoda King of the Mountain
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=1&jersey=KOM&rnd=17962848558090627

Jayco Sprint
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=1&jersey=SPR&rnd=705792888533324

Cycle Instead Young Rider
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=1&jersey=YNG&rnd=1626876078080386

Hindmarsh Most Aggressive Rider
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=1&jersey=MAR&rnd=10328929335810244

SA Brilliant Blend Winning Team
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=1&jersey=LDT&rnd=3584438320249319

Stage Winner
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=1&jersey=STG&rnd=14199279458262026

-------
Stage 2

Santos Ochre Leader's Jersey
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=2&jersey=SAN&rnd=06794203142635524

Skoda King of the Mountain
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=2&jersey=KOM&rnd=9043144299648702

Jayco Sprint
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=2&jersey=SPR&rnd=5028367366176099

Cycle Instead Young Rider
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=2&jersey=YNG&rnd=4676232298370451

Hindmarsh Most Aggressive Rider
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=2&jersey=MAR&rnd=7226433013565838

SA Brilliant Blend Winning Team
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=2&jersey=LDT&rnd=1006889462005347

Stage Winner
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=2&jersey=STG&rnd=6024872530251741

-------
Stage 3

Santos Ochre Leader's Jersey
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=SAN&rnd=06794203142635524

Skoda King of the Mountain
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=KOM&rnd=9043144299648702

Jayco Sprint
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=SPR&rnd=5028367366176099

Cycle Instead Young Rider
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=YNG&rnd=4676232298370451

Hindmarsh Most Aggressive Rider
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=MAR&rnd=7226433013565838

SA Brilliant Blend Winning Team
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=LDT&rnd=1006889462005347

Stage Winner
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=STG&rnd=6024872530251741

-------
Stage 4

Santos Ochre Leader's Jersey
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=4&jersey=SAN&rnd=06794203142635524

Skoda King of the Mountain
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=4&jersey=KOM&rnd=9043144299648702

Jayco Sprint
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=4&jersey=SPR&rnd=5028367366176099

Cycle Instead Young Rider
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=4&jersey=YNG&rnd=4676232298370451

Hindmarsh Most Aggressive Rider
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=4&jersey=MAR&rnd=7226433013565838

SA Brilliant Blend Winning Team
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=4&jersey=LDT&rnd=1006889462005347

Stage Winner
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=4&jersey=STG&rnd=6024872530251741

-------
Stage 5

Santos Ochre Leader's Jersey
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=5&jersey=SAN&rnd=06794203142635524

Skoda King of the Mountain
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=5&jersey=KOM&rnd=9043144299648702

Jayco Sprint
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=5&jersey=SPR&rnd=5028367366176099

Cycle Instead Young Rider
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=5&jersey=YNG&rnd=4676232298370451

Hindmarsh Most Aggressive Rider
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=5&jersey=MAR&rnd=7226433013565838

SA Brilliant Blend Winning Team
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=5&jersey=LDT&rnd=1006889462005347

Stage Winner
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=5&jersey=STG&rnd=6024872530251741

-------
Stage 6

Santos Ochre Leader's Jersey
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=SAN&rnd=06794203142635524

Skoda King of the Mountain
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=KOM&rnd=9043144299648702

Jayco Sprint
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=SPR&rnd=5028367366176099

Cycle Instead Young Rider
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=YNG&rnd=4676232298370451

Hindmarsh Most Aggressive Rider
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=MAR&rnd=7226433013565838

SA Brilliant Blend Winning Team
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=LDT&rnd=1006889462005347

Stage Winner
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=STG&rnd=6024872530251741

Tanya Dever Award
http://tourdownunder.com.au/tdu-media/helpers/results.ashx?stage=6&jersey=TDA&rnd=5053755659610033


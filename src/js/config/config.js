/*!
 * config.js 
 * All our main app configuration data
 */

define(["gmaps"], function(gmaps) {

  /**
   * Stage names. Retrieve stage names from here ALWAYS. Names can change and we
   * don't want to have to make a hundred copy updates every time they do.
   */
  var stageNames = [
    "Down Under Classic",
    "Stage 1",
    "Coleman's Group Stage 2",
    "Stage 3",
    "BUPA Stage 4",
    "Jayco Stage 5",
    "Stage 6"
  ];

  /**
   * Options for the main mapview. Any google maps configurations should
   * be added to the googleMapsOptions object here.
   */
  var mapView = {
    el : '#map_canvas',
    googleMapsOptions : {
      center: new gmaps.LatLng(-34.78928170189535, 138.74443334960938),
      zoom: 9,
      mapTypeId: gmaps.MapTypeId.HYBRID
    }
  };

  /**
   * Our live feed configurations
   */
  var liveFeeds = {
    baseUrl : "/api/livefeeds/",
    pageSize : 10,
    feeds : [
      {
        name : "Live news",
        id : 1
      },
      {
        name : stageNames[0],
        id : 3
      },
      {
        name : stageNames[1],
        id : 4
      },
      {
        name : stageNames[2],
        id : 5
      },
      {
        name : stageNames[3],
        id : 6
      },
      {
        name : stageNames[4],
        id : 7
      },
      {
        name : stageNames[5],
        id : 8
      },
      {
        name : stageNames[6],
        id : 9
      }
    ]
  }

  /**
   * Our main config object
   */
  return {
    stageNames  : stageNames,
    mapView     : mapView,
    liveFeeds   : liveFeeds,
    kmlPath     : '/kml',
    useStageKml : false,

    resultFeeds : {
      url : "/api/results/<%= stageId %>/<%= jerseyId %>.json",

      stages : [
        {
          name : "General classification",
          stageId : 0,
          feeds : [
            {
              name : "Jayco sprint",
              jerseyCode : "SPR",
              jerseyImage : "asdf"
            },
            {
              name : "Cycle Instead Young Rider",
              jerseyCode : "YNG",
              jerseyImage : "asdf"
            },
            {
              name : "SA Brilliant Blend Winning Team",
              jerseyCode : "LDT",
              jerseyImage : "asdf"
            },
            {
              name : "Santos Ochre Leader's Jersey (General Classification)",
              jerseyCode : "SAN",
              jerseyImage : "asdf"
            },
            {
              name : "Skoda King of the Mountain",
              jerseyCode : "KOM",
              jerseyImage : "asdf"
            },
            {
              name : "Hindmarsh Most Aggressive Rider",
              jerseyCode : "MAR",
              jerseyImage : "asdf"
            }
          ]
        }
      ]
    },

    /* result feeds */
    results : [
      {
        groupName : "General classification",
        id : 0,
        feeds : [
          {
            name : "Jayco sprint",
            jerseyCode : "SPR",
            jerseyImage : "asdf"
          },
          {
            name : "Cycle Instead Young Rider",
            jerseyCode : "YNG",
            jerseyImage : "asdf"
          },
          {
            name : "SA Brilliant Blend Winning Team",
            jerseyCode : "LDT",
            jerseyImage : "asdf"
          },
          {
            name : "Santos Ochre Leader's Jersey (General Classification)",
            jerseyCode : "SAN",
            jerseyImage : "asdf"
          },
          {
            name : "Skoda King of the Mountain",
            jerseyCode : "KOM",
            jerseyImage : "asdf"
          },
          {
            name : "Hindmarsh Most Aggressive Rider",
            jerseyCode : "MAR",
            jerseyImage : "asdf"
          }
        ]
      },
      {
        groupName : stageNames[0],
        id : 'C',
        feeds : [
          {
            name : "Classic Overall",
            jerseyCode : "CLA",
            jerseyImage : "asdf"
          },
          {
            name : "Classic Prime 1",
            jerseyCode : "PR1",
            jerseyImage : "asdf"
          },
          {
            name : "Classic Prime 2",
            jerseyCode : "PR2",
            jerseyImage : "asdf"
          },
          {
            name : "Classic Prime 3",
            jerseyCode : "PR3",
            jerseyImage : "asdf"
          },
          {
            name : "Classic Prime 4",
            jerseyCode : "PR4",
            jerseyImage : "asdf"
          }
        ]
      },
      {
        groupName : stageNames[1],
        id : 1,
        feeds : [
          {
            name : "Santos Ochre Leader's Jersey",
            jerseyCode : "SAN",
            jerseyImage : "asdf"
          },
          {
            name : "Skoda King of the Mountain",
            jerseyCode : "KOM",
            jerseyImage : "asdf"
          },
          {
            name : "Jayco Sprint",
            jerseyCode : "SPR",
            jerseyImage : "asdf"
          },
          {
            name : "Cycle Instead Young Rider",
            jerseyCode : "YNG",
            jerseyImage : "asdf"
          },
          {
            name : "Hindmarsh Most Aggressive Rider",
            jerseyCode : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "SA Brilliant Blend Winning Team",
            jerseyCode : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "Stage Winner",
            jerseyCode : "STG",
            jerseyImage : "asdf"
          }
        ]
      },
      {
        groupName : stageNames[2],
        id : 2,
        feeds : [
          {
            name : "Santos Ochre Leader's Jersey",
            jerseyCode : "SAN",
            jerseyImage : "asdf"
          },
          {
            name : "Skoda King of the Mountain",
            jerseyCode : "KOM",
            jerseyImage : "asdf"
          },
          {
            name : "Jayco Sprint",
            jerseyCode : "SPR",
            jerseyImage : "asdf"
          },
          {
            name : "Cycle Instead Young Rider",
            jerseyCode : "YNG",
            jerseyImage : "asdf"
          },
          {
            name : "Hindmarsh Most Aggressive Rider",
            jerseyCode : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "SA Brilliant Blend Winning Team",
            jerseyCode : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "Stage Winner",
            jerseyCode : "STG",
            jerseyImage : "asdf"
          }
        ]
      },
      {
        groupName : stageNames[3],
        id : 3,
        feeds : [
          {
            name : "Santos Ochre Leader's Jersey",
            jerseyCode : "SAN",
            jerseyImage : "asdf"
          },
          {
            name : "Skoda King of the Mountain",
            jerseyCode : "KOM",
            jerseyImage : "asdf"
          },
          {
            name : "Jayco Sprint",
            jerseyCode : "SPR",
            jerseyImage : "asdf"
          },
          {
            name : "Cycle Instead Young Rider",
            jerseyCode : "YNG",
            jerseyImage : "asdf"
          },
          {
            name : "Hindmarsh Most Aggressive Rider",
            jerseyCode : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "SA Brilliant Blend Winning Team",
            jerseyCode : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "Stage Winner",
            jerseyCode : "STG",
            jerseyImage : "asdf"
          }
        ]
      },
      {
        groupName : stageNames[4],
        id : 4,
        feeds : [
          {
            name : "Santos Ochre Leader's Jersey",
            jerseyCode : "SAN",
            jerseyImage : "asdf"
          },
          {
            name : "Skoda King of the Mountain",
            jerseyCode : "KOM",
            jerseyImage : "asdf"
          },
          {
            name : "Jayco Sprint",
            jerseyCode : "SPR",
            jerseyImage : "asdf"
          },
          {
            name : "Cycle Instead Young Rider",
            jerseyCode : "YNG",
            jerseyImage : "asdf"
          },
          {
            name : "Hindmarsh Most Aggressive Rider",
            jerseyCode : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "SA Brilliant Blend Winning Team",
            jerseyCode : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "Stage Winner",
            jerseyCode : "STG",
            jerseyImage : "asdf"
          }
        ]
      },
      {
        groupName : stageNames[5],
        id : 5,
        feeds : [
          {
            name : "Santos Ochre Leader's Jersey",
            jerseyCode : "SAN",
            jerseyImage : "asdf"
          },
          {
            name : "Skoda King of the Mountain",
            jerseyCode : "KOM",
            jerseyImage : "asdf"
          },
          {
            name : "Jayco Sprint",
            jerseyCode : "SPR",
            jerseyImage : "asdf"
          },
          {
            name : "Cycle Instead Young Rider",
            jerseyCode : "YNG",
            jerseyImage : "asdf"
          },
          {
            name : "Hindmarsh Most Aggressive Rider",
            jerseyCode : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "SA Brilliant Blend Winning Team",
            jerseyCode : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "Stage Winner",
            jerseyCode : "STG",
            jerseyImage : "asdf"
          }
        ]
      },
      {
        groupName : stageNames[6],
        id : 6,
        feeds : [
          {
            name : "Santos Ochre Leader's Jersey",
            jerseyCode : "SAN",
            jerseyImage : "asdf"
          },
          {
            name : "Skoda King of the Mountain",
            jerseyCode : "KOM",
            jerseyImage : "asdf"
          },
          {
            name : "Jayco Sprint",
            jerseyCode : "SPR",
            jerseyImage : "asdf"
          },
          {
            name : "Cycle Instead Young Rider",
            jerseyCode : "YNG",
            jerseyImage : "asdf"
          },
          {
            name : "Hindmarsh Most Aggressive Rider",
            jerseyCode : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "SA Brilliant Blend Winning Team",
            jerseyCode : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "Stage Winner",
            jerseyCode : "STG",
            jerseyImage : "asdf"
          },
          {
            name : "Tanya Dever Award",
            jerseyCode : "TDA",
            jerseyImage : "asdf"
          }
        ]
      }
    ]
  };
});
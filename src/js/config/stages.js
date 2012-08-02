define(function() { 
  return [
    {
      "id" : "stage-classic",
      "date" : "Sunday 15 January 2012",
      "time" : "7:00pm - 8:00pm approx",
      "circuit" : "Adelaide East End",
      "distance" : "51km",
      "description" : "See the UCI ProTeams presented to the public for the first time, prior to the start of the Down Under Classic. Phil Liggett and Paul Sherwen will interview riders onstage, where they will also sign on for the Classic. Entry is free!",
      "name" : "<%= config.stageNames[0] %>",
      "kml" : "stage-classic.kml",
      "json" : "stage-classic.json",
      "polylineOptions": {
        "strokeColor": "#0193cf",
        "strokeOpacity": 1,
        "strokeWeight": 4
      },
      "mapzoom" : 14,
      "liveFeed" : {
        "id" : 3
      },
      results : {
        stageId : 'C',
        defaultJerseyId : 'CLA',
        feeds : [
          {
            name : "Classic Overall",
            jerseyId : "CLA",
            jerseyImage : "asdf"
          },
          {
            name : "Classic Prime 1",
            jerseyId : "PR1",
            jerseyImage : "asdf"
          },
          {
            name : "Classic Prime 2",
            jerseyId : "PR2",
            jerseyImage : "asdf"
          },
          {
            name : "Classic Prime 3",
            jerseyId : "PR3",
            jerseyImage : "asdf"
          },
          {
            name : "Classic Prime 4",
            jerseyId : "PR4",
            jerseyImage : "asdf"
          }
        ]
      }
    },
    {
      "id" : "stage-1",
      "date" : "Tuesday 17 January 2012",
      "time" : "11:00am - 2.54pm approx",
      "start" : "Prospect",
      "finish" : "Clare",
      "distance" : "149km",
      "description" : "Starting in Prospect, for the first time in race history, follow the peloton north to see the finish in Clare. Discover the Riesling and Rattler trails that showcase some of the best attractions and towns in the Clare and Gilbert Valleys.",
      "name" : "<%= config.stageNames[1] %>",
      "kml" : "stage-1.kml",
      "json" : "stage-1.json",
      "polylineOptions": {
        "strokeColor": "#0193cf",
        "strokeOpacity": 1,
        "strokeWeight": 4
      },
      "mapzoom" : 10,
      "liveFeed" : {
        "id" : 4
      },
      results : {
        defaultJerseyId : 'STG',
        stageId : 1,
        feeds : [
          {
            name : "Santos Ochre Leader's Jersey",
            jerseyId : "SAN",
            jerseyImage : "asdf"
          },
          {
            name : "Skoda King of the Mountain",
            jerseyId : "KOM",
            jerseyImage : "asdf"
          },
          {
            name : "Jayco Sprint",
            jerseyId : "SPR",
            jerseyImage : "asdf"
          },
          {
            name : "Cycle Instead Young Rider",
            jerseyId : "YNG",
            jerseyImage : "asdf"
          },
          {
            name : "Hindmarsh Most Aggressive Rider",
            jerseyId : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "SA Brilliant Blend Winning Team",
            jerseyId : "LDT",
            jerseyImage : "asdf"
          },
          {
            name : "Stage Winner",
            jerseyId : "STG",
            jerseyImage : "asdf"
          }
        ]
      }
    },
    {
      "id" : "stage-2",
      "date" : "Wednesday 18 January 2012",
      "time" : "11:00am - 2.45pm approx",
      "start" : "Lobethal",
      "finish" : "Stirling",
      "distance" : "148km",
      "description" : "Under one hour from the CBD the day commences in Lobethal, established around the thriving mills in the area and well known today for its seasonal Christmas festivities. An uphill finish in leafy green Stirling will place you only 20 mins from Adelaide and with a collection of cafes, restaurants and shops to explore.",
      "name" : "<%= config.stageNames[2] %>",
      "kml" : "stage-2.kml",
      "json" : "stage-2.json",
      "polylineOptions": {
        "strokeColor": "#0193cf",
        "strokeOpacity": 1,
        "strokeWeight": 4
      },
      "mapzoom" : 11,
      "liveFeed" : {
        "id" : 5
      },
      results : {
        defaultJerseyId : 'STG',
        stageId : 2,
        feeds : [
          {
            name : "Santos Ochre Leader's Jersey",
            jerseyId : "SAN",
            jerseyImage : "asdf"
          },
          {
            name : "Skoda King of the Mountain",
            jerseyId : "KOM",
            jerseyImage : "asdf"
          },
          {
            name : "Jayco Sprint",
            jerseyId : "SPR",
            jerseyImage : "asdf"
          },
          {
            name : "Cycle Instead Young Rider",
            jerseyId : "YNG",
            jerseyImage : "asdf"
          },
          {
            name : "Hindmarsh Most Aggressive Rider",
            jerseyId : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "SA Brilliant Blend Winning Team",
            jerseyId : "LDT",
            jerseyImage : "asdf"
          },
          {
            name : "Stage Winner",
            jerseyId : "STG",
            jerseyImage : "asdf"
          }
        ]
      }
    },
    {
      "id" : "stage-3",
      "date" : "Thursday 19 January 2012",
      "time" : "11:00am - 2.43pm approx",
      "start" : "Unley",
      "finish" : "Victor Harbor",
      "distance" : "134.5km",
      "description" : "With coffee in hand browse the shops along trendy King William Road, Unley before heading into the heart of the Fleurieu Peninsula to watch the days racing conclude in Victor Harbor with the surf, sand and stunning views.",
      "name" : "<%= config.stageNames[3] %>",
      "kml" : "stage-3.kml",
      "json" : "stage-3.json",
      "polylineOptions": {
        "strokeColor": "#0193cf",
        "strokeOpacity": 1,
        "strokeWeight": 4
      },
      "mapzoom" : 11,
      "liveFeed" : {
        "id" : 6
      },
      results : {
        defaultJerseyId : 'STG',
        stageId : 3,
        feeds : [
          {
            name : "Santos Ochre Leader's Jersey",
            jerseyId : "SAN",
            jerseyImage : "asdf"
          },
          {
            name : "Skoda King of the Mountain",
            jerseyId : "KOM",
            jerseyImage : "asdf"
          },
          {
            name : "Jayco Sprint",
            jerseyId : "SPR",
            jerseyImage : "asdf"
          },
          {
            name : "Cycle Instead Young Rider",
            jerseyId : "YNG",
            jerseyImage : "asdf"
          },
          {
            name : "Hindmarsh Most Aggressive Rider",
            jerseyId : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "SA Brilliant Blend Winning Team",
            jerseyId : "LDT",
            jerseyImage : "asdf"
          },
          {
            name : "Stage Winner",
            jerseyId : "STG",
            jerseyImage : "asdf"
          }
        ]
      }
    },
    {
      "id" : "stage-4",
      "date" : "Friday 20 January 2012",
      "time" : "11:00am - 2.31pm approx",
      "start" : "Norwood",
      "finish" : "Tanunda",
      "distance" : "130km",
      "description" : "The Parade, Norwood will be a buzz from early morning farewelling thousands of amateur riders just hours before the ProTeams. If you are not riding from one of the 4 start locations of the Bupa Challenge Tour then head into the Barossa Valley to see the race finish in Tanunda and then explore the historic Jacob's Creek winery and other favourites of the area.",
      "name" : "<%= config.stageNames[4] %>",
      "icon" : "img/sponsors/bupa.png",
      "kml" : "stage-4.kml",
      "json" : "stage-4.json",
      "polylineOptions": {
        "strokeColor": "#0193cf",
        "strokeOpacity": 1,
        "strokeWeight": 4
      },
      "mapzoom" : 10,
      "liveFeed" : {
        "id" : 7
      },
      results : {
        defaultJerseyId : 'STG',
        stageId : 4,
        feeds : [
          {
            name : "Santos Ochre Leader's Jersey",
            jerseyId : "SAN",
            jerseyImage : "asdf"
          },
          {
            name : "Skoda King of the Mountain",
            jerseyId : "KOM",
            jerseyImage : "asdf"
          },
          {
            name : "Jayco Sprint",
            jerseyId : "SPR",
            jerseyImage : "asdf"
          },
          {
            name : "Cycle Instead Young Rider",
            jerseyId : "YNG",
            jerseyImage : "asdf"
          },
          {
            name : "Hindmarsh Most Aggressive Rider",
            jerseyId : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "SA Brilliant Blend Winning Team",
            jerseyId : "LDT",
            jerseyImage : "asdf"
          },
          {
            name : "Stage Winner",
            jerseyId : "STG",
            jerseyImage : "asdf"
          }
        ]
      }
    },
    {
      "id" : "stage-5",
      "icon" : "img/sponsors/jayco.png",
      "date" : "Saturday 21 January 2012",
      "time" : "11.10am - 3.02pm approx",
      "start" : "McLaren Vale",
      "finish" : "Old Willunga Hill",
      "distance" : "151.5km",
      "description" : "Starting in McLaren Vale, explore the Fleurieu Peninsula, including the sprint point at Snapper Point, famed for its costal thrills and unspoilt wildlife. Visit Willunga a town boasting open air markets, local growers and seasonal produce and arrive early to experience the races' first ever hilltop finish atop Old Willunga Hill.",
      "name" : "<%= config.stageNames[5] %>",
      "kml" : "stage-5.kml",
      "json" : "stage-5.json",
      "polylineOptions": {
        "strokeColor": "#0193cf",
        "strokeOpacity": 1,
        "strokeWeight": 4
      },
      "mapzoom" : 11,
      "liveFeed" : {
        "id" : 8
      },
      results : {
        defaultJerseyId : 'STG',
        stageId : 5,
        feeds : [
          {
            name : "Santos Ochre Leader's Jersey",
            jerseyId : "SAN",
            jerseyImage : "asdf"
          },
          {
            name : "Skoda King of the Mountain",
            jerseyId : "KOM",
            jerseyImage : "asdf"
          },
          {
            name : "Jayco Sprint",
            jerseyId : "SPR",
            jerseyImage : "asdf"
          },
          {
            name : "Cycle Instead Young Rider",
            jerseyId : "YNG",
            jerseyImage : "asdf"
          },
          {
            name : "Hindmarsh Most Aggressive Rider",
            jerseyId : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "SA Brilliant Blend Winning Team",
            jerseyId : "LDT",
            jerseyImage : "asdf"
          },
          {
            name : "Stage Winner",
            jerseyId : "STG",
            jerseyImage : "asdf"
          }
        ]
      }
    },
    {
      "id" : "stage-6",
      "date" : "Sunday 22 January 2012",
      "time" : "1.15pm - 3.15pm approx",
      "circuit" : "Adelaide Street Circuit",
      "distance" : "90km",
      "description" : "Sample Adelaide's heritage, culture and shopping on offer in the heart of the city before the excitement begins for the final day of racing.",
      "name" : "<%= config.stageNames[6] %>",
      "kml" : "stage-6.kml",
      "json" : "stage-6.json",
      "polylineOptions": {
        "strokeColor": "#0193cf",
        "strokeOpacity": 1,
        "strokeWeight": 4
      },
      "mapzoom" : 15,
      "liveFeed" : {
        "id" : 9
      },
      results : {
        defaultJerseyId : 'STG',
        stageId : 6,
        feeds : [
          {
            name : "Santos Ochre Leader's Jersey",
            jerseyId : "SAN",
            jerseyImage : "asdf"
          },
          {
            name : "Skoda King of the Mountain",
            jerseyId : "KOM",
            jerseyImage : "asdf"
          },
          {
            name : "Jayco Sprint",
            jerseyId : "SPR",
            jerseyImage : "asdf"
          },
          {
            name : "Cycle Instead Young Rider",
            jerseyId : "YNG",
            jerseyImage : "asdf"
          },
          {
            name : "Hindmarsh Most Aggressive Rider",
            jerseyId : "MAR",
            jerseyImage : "asdf"
          },
          {
            name : "SA Brilliant Blend Winning Team",
            jerseyId : "LDT",
            jerseyImage : "asdf"
          },
          {
            name : "Stage Winner",
            jerseyId : "STG",
            jerseyImage : "asdf"
          },
          {
            name : "Tanya Dever Award",
            jerseyId : "TDA",
            jerseyImage : "asdf"
          }
        ]
      }
    }
  ];
});
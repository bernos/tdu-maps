define(["gmaps"], function(gmaps) {
  return {
    stages : {
      classic : {
        name : "Classic",
        kml : "/kml/classic.kml",
        polylineOptions: {
          strokeColor: "#FF0000",
          strokeOpacity: 0.7,
          strokeWeight: 4
        }
        //kml : "http://www.bikemap.net/route/1290698/export.kml"
      },
      stage1 : {
        name : "Classic",
        kml : "/kml/1.kml",
        polylineOptions: {
          strokeColor: "#FFCC00",
          strokeOpacity: 0.7,
          strokeWeight: 4
        }
        //kml : "http://www.bikemap.net/route/1657601/export.kml"
      },
      stage2 : {
        name : "Classic",
        kml : "/kml/2.kml",
        polylineOptions: {
          strokeColor: "#00AA00",
          strokeOpacity: 0.7,
          strokeWeight: 4
        }
        //kml : "http://www.bikemap.net/route/1657655/export.kml"
      },
      stage3 : {
        name : "Classic",
        kml : "/kml/3.kml",
        polylineOptions: {
          strokeColor: "#0000FF",
          strokeOpacity: 0.7,
          strokeWeight: 4
        }
        //kml : "http://www.bikemap.net/route/1657668/export.kml"
      },
      stage4 : {
        name : "Classic",
        kml : "/kml/4.kml",
        polylineOptions: {
          strokeColor: "#00CCFF",
          strokeOpacity: 0.7,
          strokeWeight: 4
        }
        //kml : "http://www.bikemap.net/route/1657680/export.kml"
      },
      stage5 : {
        name : "Classic",
        kml : "/kml/5.kml",
        polylineOptions: {
          strokeColor: "#FF0000",
          strokeOpacity: 0.7,
          strokeWeight: 4
        }
        //kml : "http://www.bikemap.net/route/1657684/export.kml"
      },
      stage6 : {
        name : "Classic",
        kml : "/kml/6.kml",
        polylineOptions: {
          strokeColor: "#FF0000",
          strokeOpacity: 0.7,
          strokeWeight: 4
        }
        //kml : "http://www.bikemap.net/route/1290702/export.kml"
      }
    },

    mapView : {
      googleMapsOptions : {
        center: new gmaps.LatLng(-34.78928170189535, 138.74443334960938),
        zoom: 9,
        mapTypeId: gmaps.MapTypeId.HYBRID
      }
    }    
  };
});


/*ca: ne
b: -35.36134096840164
j: -34.47798181876193
__proto__: ne
ea: je
b: 138.4210233154297
j: 139.2449979248047*/
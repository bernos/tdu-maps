define(function() {
  return {
    stages : {
      classic : {
        name : "Classic",
        kml : "/kml/classic.kml",
        polylineOptions: {
          strokeColor: "#FF0000",
          strokeOpacity: 0.7,
          strokeWeight: 2
        }
        //kml : "http://www.bikemap.net/route/1290698/export.kml"
      },
      stage1 : {
        name : "Classic",
        kml : "/kml/1.kml",
        polylineOptions: {
          strokeColor: "#FFCC00",
          strokeOpacity: 0.7,
          strokeWeight: 2
        }
        //kml : "http://www.bikemap.net/route/1657601/export.kml"
      },
      stage2 : {
        name : "Classic",
        kml : "/kml/2.kml",
        polylineOptions: {
          strokeColor: "#00AA00",
          strokeOpacity: 0.7,
          strokeWeight: 2
        }
        //kml : "http://www.bikemap.net/route/1657655/export.kml"
      },
      stage3 : {
        name : "Classic",
        kml : "/kml/3.kml",
        polylineOptions: {
          strokeColor: "#0000FF",
          strokeOpacity: 0.7,
          strokeWeight: 2
        }
        //kml : "http://www.bikemap.net/route/1657668/export.kml"
      },
      stage4 : {
        name : "Classic",
        kml : "/kml/4.kml",
        polylineOptions: {
          strokeColor: "#00CCFF",
          strokeOpacity: 0.7,
          strokeWeight: 2
        }
        //kml : "http://www.bikemap.net/route/1657680/export.kml"
      },
      stage5 : {
        name : "Classic",
        kml : "/kml/5.kml",
        polylineOptions: {
          strokeColor: "#FF0000",
          strokeOpacity: 0.7,
          strokeWeight: 2
        }
        //kml : "http://www.bikemap.net/route/1657684/export.kml"
      },
      stage6 : {
        name : "Classic",
        kml : "/kml/6.kml",
        polylineOptions: {
          strokeColor: "#FF0000",
          strokeOpacity: 0.7,
          strokeWeight: 2
        }
        //kml : "http://www.bikemap.net/route/1290702/export.kml"
      }
    },

    mapOptions : {
      center: new google.maps.LatLng(-34.397, 150.644),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  };
});
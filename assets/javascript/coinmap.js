  function coinMapinfo(position) {

    console.log(position);

    var longitudeMax = Math.round(position.coords.longitude) + 1;
    var longitudeMin = Math.round(position.coords.longitude) - 1;
    var latitudeMax = Math.floor(position.coords.latitude) + 1;
    var latitudeMin = Math.floor(position.coords.latitude) - 1;

    var queryURL = "https://cors-anywhere.herokuapp.com/coinmap.org/api/v1/venues/?lat1=" + latitudeMin + "&lat2=" + latitudeMax + "&lon1=" + longitudeMin + "&lon2=" + longitudeMax;
    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function (reponse) {

      var results = reponse.venues;
      console.log(results);

      for (var i = 0; i < results.length; i++) {
        console.log(results[i]);
        var lat = results[i].lat;
        var lng = results[i].lon;        

        addMarkers(lat, lng, results[i].name);

      }


    });

  }
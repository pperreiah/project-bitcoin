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
    }).done(function (response) {

      var results = response.venues;
      console.log(results);

      for (var i = 0; i < results.length; i++) {
        console.log(results[i].category);
        var lat = results[i].lat;
        var lng = results[i].lon;
        var name = results[i].name;
        var category = results[i].category;        

        addMarkers(lat, lng, name, category);

      }


    });

  }
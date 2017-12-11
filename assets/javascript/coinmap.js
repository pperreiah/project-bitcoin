  function coinMapinfo(position) {

    // console.log(position);

    var longitudeMax = Math.round(position.coords.longitude) + 1;
    var longitudeMin = Math.round(position.coords.longitude) - 1;
    var latitudeMax = Math.floor(position.coords.latitude) + 1;
    var latitudeMin = Math.floor(position.coords.latitude) - 1;

    var queryURL = "https://cors-anywhere.herokuapp.com/coinmap.org/api/v1/venues/?lat1=" + latitudeMin + "&lat2=" + latitudeMax + "&lon1=" + longitudeMin + "&lon2=" + longitudeMax;
    // console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function (response) {

      var results = response.venues;
      // console.log(results);
      var markers = [];
      var categories = [];

      for (var i = 0; i < results.length; i++) {
        console.log(results[i]);
        var lat = results[i].lat;
        var lng = results[i].lon;
        var name = results[i].name;
        var category = results[i].category; 
    
        var merchantInfo = results[i].category + " - " + results[i].name + "<br />";

        if (!categories.includes(results[i].category)) {
           categories.push(results[i].category)};

        $("#merchants-appear-here").append(merchantInfo);        
        addMarkers(lat, lng, name, category);
       }
      for (var i = 0; i < categories.length; i++) {
      console.log(categories[i]);
    }
      for (var i = 0; i < categories.length; i++) {
          for (var i = 0; i < results.length; i++) {
            var name = results[i].name;
            var category = results[i].category;    
            var merchantInfo = results[i].category + " - " + results[i].name + "<br />";       
            if (results[i].category === categories[i]) {
              $("#merchants-appear-here").append(merchantInfo);       
            }
          } //for merchant info
       } //for categories     

    });

  }
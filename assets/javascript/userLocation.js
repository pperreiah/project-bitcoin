function success(position) {
  
  // variable to store the coordinates
  var location = position.coords.latitude + ',' + position.coords.longitude;

coinMapinfo(position);
  
  // setup the map using user location
  var mapOptions = {
    center: new google.maps.LatLng( position.coords.latitude, position.coords.longitude ),
    zoom: 16,
    zoomControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  // add map to the html
  map = new google.maps.Map( document.getElementById("map-canvas"), mapOptions );
  
  // setup the marker
  var markers = new google.maps.Marker( {
    position:mapOptions.center,
    animation: google.maps.Animation.DROP,
    title: "This is your location"
  });
  
  // add marker to the map
  markers.setMap(map);
  
  // select the span with id status
  var s = $('#status');
   
  // update the status message
  s.html('found you!');
}
 
function error(msg) {
  // select the span with id status
  var s = $('#status');
  
  // set the error message
  s.html(typeof msg == 'string' ? msg : "failed");
}
 
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  error('not supported');
}


  function coinMapinfo(position){
    
console.log(position);

  var longitudeMax = Math.round(position.coords.longitude)+1;
  var longitudeMin = Math.round(position.coords.longitude)-1;
  var latitudeMax = Math.floor(position.coords.latitude)+1;
  var latitudeMin = Math.floor(position.coords.latitude)-1;

  var queryURL = "https://cors-anywhere.herokuapp.com/coinmap.org/api/v1/venues/?lat1=" + latitudeMin + "&lat2=" + latitudeMax + "&lon1=" + longitudeMin + "&lon2=" +longitudeMax;
  console.log(queryURL);

  $.ajax({
    url:queryURL,
    method:"GET"
  }).done(function(reponse) {

var results = reponse.venues;
console.log(results);

for (var i = 0; i < results.length; i++) {
  console.log(results[i]);
  // var longitude = results[i].lon;
  // var latitude = results[i].lat;

}


  });

}

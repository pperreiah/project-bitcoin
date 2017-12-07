function success(position) {
  
  // variable to store the coordinates
  var location = position.coords.latitude + ',' + position.coords.longitude;

coinMapinfo(position);
  
  // setup the map using user location
  var mapOptions = {
    center: new google.maps.LatLng( position.coords.latitude, position.coords.longitude ),
    zoom: 10,
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

  // //add markers
  // addMarkers();
  
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




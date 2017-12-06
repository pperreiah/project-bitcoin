// Adds a marker to the map.
function addMarkers() {
  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var marker = new google.maps.Marker({
    position: {
      lat: 33.7634,
      lng: -84.3951
    },
    map: map,
    icon: image,
    title: "This is the Georgia Aquarium!"
  });

  //make maker info box
  var contentString = $('<div id="content">');
  var p = $('<p>').text('You clicked a marker');
  contentString.append(p);

  //put marker info box on the map
  var infoWindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200
  });

  //listen for click on marker
  marker.addListener('click', function(){
    infoWindow.open(map, marker);
    marker.append(contentString);
    console.log('marker clicked');
  }); 
};

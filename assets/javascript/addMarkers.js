// Adds a marker to the map.
function addMarkers(lat, lng, name, category) {

  // check location category
  var imageURL;
  if (category === 'atm') {
    imageURL = './assets/images/icons/atm.svg';
  } else if (category === 'food') {
    imageURL = './assets/images/icons/restaurant.svg';
  } else if (category === 'sports') {
    if (name.toLowerCase().search('gym') > -1 || name.toLowerCase().search('fitness') > -1) {
      imageURL = './assets/images/icons/gym.svg';
    } else {
      imageURL = './assets/images/icons/stadium.svg'
    }
  } else if (category === 'nightlife') {
    imageURL = './assets/images/icons/night-club.svg'
  } else if (category === 'shopping') {
    imageURL = './assets/images/icons/shopping-mall.svg'
  } else if(category === 'lodging'){
    imageURL = './assets/images/icons/lodging.svg';
  }else {
    imageURL = './assets/images/icons/map-pin.svg';
  }


  //make image
  var image = {
    url: imageURL,
    scaledSize: new google.maps.Size(25, 25), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  //make marker
  var marker = new google.maps.Marker({
    position: {
      lat: lat,
      lng: lng
    },
    map: map,
    icon: image,
    title: name
  });
    marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
 

  //make maker info box
  var contentString = '<div class="marker-content">' + '<h5>'+name+'</h5>' + '<button class="bookmarks">&#x2606</button>' + '</div>';
  //put marker info box on the map
  var infoWindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200
  });

 
};
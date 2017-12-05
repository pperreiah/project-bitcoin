//Determine the location of the user with long and lat co-ordinates

function geoPosition(){
	var output = $("#userLocationMap");

	if(!navigator.geolocation){
		output.html("<p> Geolocation is not supported by your browser</p>");
	}

	function success(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;

		output.html("<p>Latitude is " + latitude);
		output.append("<p>Longitude is " + longitude);

		var img = $("<img>");
		img.attr("src", "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false");

		output.append(img);
	}

	function error(){
		output.html("Unable to retrieve your location");
	}

	navigator.geolocation.getCurrentPosition(success, error);
}



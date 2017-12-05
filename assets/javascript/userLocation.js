//Determine the location of the user with long and lat co-ordinates

function geoPosition(){
	var output = $("userLocationMap");

	if(!navigator.geolocation){
		output.html("<p> Geolocation is not supported by your browser</p>");
	}


}
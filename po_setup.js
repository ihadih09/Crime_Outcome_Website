var map; // The map object
var myCentreLat = 53.8;
var myCentreLng = -1.55;
var initialZoom = 10;

// Calling the infowindow 
function infoCallback(infowindow, marker) {
	return function() {
		infowindow.open(map, marker, this);
	};
}

// Add a marker to the map
function addMarker(myPos, myTitle, myInfo) {
	var marker = new google.maps.Marker({
	  position: myPos, 
	  map: map, 
	  title: myTitle,
	});
	var infowindow = new google.maps.InfoWindow({content: myInfo});
	google.maps.event.addListener(marker, 'click', infoCallback(infowindow, marker));
}

// Initialize the map
function initialize() {
	var latlng = new google.maps.LatLng(myCentreLat,myCentreLng);
	var myOptions = {
		 zoom: initialZoom,
		 center: latlng,
		 mapTypeId: google.maps.MapTypeId.HYBRID
	};
	
	map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
}	

// Define the markers
function plotnosuspect() {
    for (var i = 0; i < os_markers.length; i++) {
        var marker = os_markers[i];
        if (marker.outcome === 'Investigation complete; no suspect identified') {
            var markerLocation = new google.maps.LatLng(marker.Latitude, marker.Longitude);
            var info = "<h>" + marker.id + "<h4><p>Location: " + marker.Location + "<p>Outcome:" + marker.outcome;
            addMarker(markerLocation, marker.title, info);
        }
    }
}
// Calling the plot functions for the outcomes
function plotcaution() {
    for (var i = 0; i < os_markers.length; i++) {
        var marker = os_markers[i];
        if (marker.outcome === 'Offender given a caution') {
            var markerLocation = new google.maps.LatLng(marker.Latitude, marker.Longitude);
            var info = "<h>" + marker.id + "<h4><p>Location: " + marker.Location + "<p>Outcome:" + marker.outcome;
            addMarker(markerLocation, marker.title, info);
        }
    }
}

function plotcharged() {
    for (var i = 0; i < os_markers.length; i++) {
        var marker = os_markers[i];
        if (marker.outcome === 'Suspect charged') {
            var markerLocation = new google.maps.LatLng(marker.Latitude, marker.Longitude);
            var info = "<h>" + marker.id + "<h4><p>Location: " + marker.Location + "<p>Outcome:" + marker.outcome;
            addMarker(markerLocation, marker.title, info);
        }
    }
}

function plotresolution() {
    for (var i = 0; i < os_markers.length; i++) {
        var marker = os_markers[i];
        if (marker.outcome === 'Local resolution') {
            var markerLocation = new google.maps.LatLng(marker.Latitude, marker.Longitude);
            var info = "<h>" + marker.id + "<h4><p>Location: " + marker.Location + "<p>Outcome:" + marker.outcome;
            addMarker(markerLocation, marker.title, info);
        }
    }
}

function plotorg() {
    for (var i = 0; i < os_markers.length; i++) {
        var marker = os_markers[i];
        if (marker.outcome === 'Action to be taken by another organisation') {
            var markerLocation = new google.maps.LatLng(marker.Latitude, marker.Longitude);
            var info = "<h>" + marker.id + "<h4><p>Location: " + marker.Location + "<p>Outcome:" + marker.outcome;
            addMarker(markerLocation, marker.title, info);
        }
    }
}

function plotfunpi() {
    for (var i = 0; i < os_markers.length; i++) {
        var marker = os_markers[i];
        if (marker.outcome === 'Further investigation is not in the public interest') {
            var markerLocation = new google.maps.LatLng(marker.Latitude, marker.Longitude);
            var info = "<h>" + marker.id + "<h4><p>Location: " + marker.Location + "<p>Outcome:" + marker.outcome;
            addMarker(markerLocation, marker.title, info);
        }
    }
}



function plotfanpi() {
    for (var i = 0; i < os_markers.length; i++) {
        var marker = os_markers[i];
        if (marker.outcome === 'Further action is not in the public interest') {
            var markerLocation = new google.maps.LatLng(marker.Latitude, marker.Longitude);
            var info = "<h>" + marker.id + "<h4><p>Location: " + marker.Location + "<p>Outcome:" + marker.outcome;
            addMarker(markerLocation, marker.title, info);
        }
    }
}

function plotfonpi() {
    for (var i = 0; i < os_markers.length; i++) {
        var marker = os_markers[i];
        if (marker.outcome === 'Formal action is not in the public interest') {
            var markerLocation = new google.maps.LatLng(marker.Latitude, marker.Longitude);
            var info = "<h>" + marker.id + "<h4><p>Location: " + marker.Location + "<p>Outcome:" + marker.outcome;
            addMarker(markerLocation, marker.title, info);
        }
    }
}



// Call the initialize function when the page loads
google.maps.event.addDomListener(window, 'load', initialize);

function initMap() {
    const position = { lat: 52.4862, lng: -1.889927 };
    const map = new google.maps.Map(document.getElementById("map"),  {
        zoom: 12,
        center: position,
        mapId: "resume", // Map ID is required for advanced markers.
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.marker.AdvancedMarkerElement({
            position: location,
            label: labels[i % labels.length]
        });
    });

}
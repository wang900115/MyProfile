const x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this fucking thing.";
    }
}

function showPosition(position) {
    x.innerHTML = "I always know where you are ! " +
                  "Latitude:" + position.coords.latitude + " Longitude: " + position.coords.longitude;
}
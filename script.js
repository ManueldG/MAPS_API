let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.9, lng: 11.644 },
    zoom: 9,
  });
}

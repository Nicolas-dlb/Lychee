
let $map = document.querySelector('#map');
console.log("l");

class GoogleMap {
 
 /* charge la carte sur un element
    @param {HTMLElement} element */
    load(element) {
    $script('https://maps.googleapis.com/maps/api/js?key=AIzaSyAN0cjNyhKWMFxzqiQr8NgX2kIift6aBRE', function() {
    let map = new google.maps.Map(element, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
    })
 }
}

if ($map !== null) {
 let map = new GoogleMap();
 map.load($map);
}
console.log("location");
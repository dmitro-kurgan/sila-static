GoogleMapsLoader.KEY = 'AIzaSyDP13T048ji9u8_di9Gdpmh6bkBhPoC3bs';
GoogleMapsLoader.LANGUAGE = 'ua';

if(document.getElementById('map')) {
  GoogleMapsLoader.load(function(google) {
  	var myLatLng = {lat: 50.004472, lng: 36.236309};
    var map = new google.maps.Map(document.getElementById('map'), {
      	center: myLatLng,
	    scrollwheel:false,
	    zoom: 17,
        styles: [
        {
          "stylers": [
            { "saturation": 0 }
          ] 
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            { "visibility": "off" }
          ]
        }
      ]
    });
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      animation: google.maps.Animation.DROP,
      title: 'DISASTER SWAT RESTORATION',
      icon: {
        url: require("../images/marker.png"),
        scaledSize: new google.maps.Size(101, 101)
      }
    });
  });
};
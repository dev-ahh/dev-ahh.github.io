	$(document).ready(function(){

		// google map
		window.marker = null;
		function initialize() {
			var map;
			var dataCenterLat = $('#map').attr('data-center-lat');
			var dataCenterLng = $('#map').attr('data-center-lng');
			var dataPositionLat = $('#map').attr('data-position-lat');
			var dataPositionLng = $('#map').attr('data-position-lng');
			var center = new google.maps.LatLng(dataCenterLat, dataCenterLng);
			var pinPosition = new google.maps.LatLng(dataPositionLat, dataPositionLng);
			
			var style = [
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
			];

			var mapOptions = {
				// SET THE CENTER
				center: center,
				// SET THE MAP STYLE & ZOOM LEVEL
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				// SET THE BACKGROUND COLOUR
				backgroundColor: "#000",
				// REMOVE ALL THE CONTROLS EXCEPT ZOOM
				zoom: 15,
				panControl: false,
				zoomControl: false,
				mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				overviewMapControl: false,
				// gestureHandling: 'greedy',
				disableDefaultUI: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE
				}
			}
			map = new google.maps.Map(document.getElementById('map'), mapOptions);
			// SET THE MAP TYPE
			var mapType = new google.maps.StyledMapType(style, { name: "Grayscale" });
			map.mapTypes.set('grey', mapType);
			map.setMapTypeId('grey');

			//CREATE A CUSTOM PIN ICON
			var marker_image = $('#map').attr('data-marker');
			var marker_name = $('#map').attr('data-name');
			var pinIcon = new google.maps.MarkerImage(marker_image, new google.maps.Size(64, 64), null, null);
			marker = new google.maps.Marker({
				position: pinPosition,
				map: map,
				icon: pinIcon,
				title: marker_name
			});
		}

		var google_map_canvas = $('#map');
		if (google_map_canvas.length) {
			google.maps.event.addDomListener(window, 'load', initialize);
			console.log("Mapa Inicializado");
		}
	});
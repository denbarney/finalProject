
$('.js-main-menu').click(function() {
	$('.ui.sidebar')
		// .sidebar('setting', 'transition', 'overlay')
		.sidebar('setting', 'dimPage', false)
		.sidebar('toggle');
})
	const myLatLng = {
		lat: 40.8200471, 
		lng: -73.9514611
	};

function initMap() {

	const height = $('body').height();
	$('#map').css({
		height: height + 'px',
	});

	

	const map = new google.maps.Map(document.getElementById('map'), {
	  center: myLatLng,
	  zoom: 16
	});

	const marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Hello World!'
	});
}
/* get all places by type */
getPlacesByType("restaurant", 500)
function getPlacesByType(type, radius=500) {
	const rooturl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"
	const location = "location="+ myLatLng.lat+","+myLatLng.lng +"&";
	const radiusparameter = "radius="+radius +"&";
	const typeparameter = "type="+type +"&";
	const key = "key=AIzaSyCd-hQBzbOUihAVIpPzyKWYnbPagdj4jmE"
	let link = rooturl + location + radiusparameter + typeparameter + key
	//get data
	return data
}

$('.typebtn').click(function(e) {
	console.log($(this)[0].id);
	const type=($(this)[0].id)
	console.log(data);

	/*var places = getPlacesByType(type)*/
	let places = data.results


	places.forEach(function(place) {
		let el = makeCard(place)
	    console.log(el, place.name);
		$('#places').append(el)
	})
})

function makeCard(place){
	return '<div><p><strong>'+place.name+'</strong><em>'+place.rating+'</em><image width=30 src="data:image/png;base64,'+place.photos[0].photo_reference+'"/></div>'
}



// draw places

// search places 

// load retrieved content in container 


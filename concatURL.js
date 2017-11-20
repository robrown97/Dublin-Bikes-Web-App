//GET LATITUDE
	function map(){
	    var xhr = new XMLHttpRequest(); 
			xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
		    		var items = JSON.parse(xhr.responseText);
		    		var lat = items[0].position.lat //select correct lat
					var lng = items[0].position.lng //select correct lng
		    		document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+ lat +",%20"+ lng +"&zoom=15&size=600x600&y=roadmap&markers=color:red%7Clabel:%7C%20"+ lat +",%20"+ lng +"&key=%20AIzaSyDFYsfHIt5LS7BP94P_zABHNMls0dm6ObY";
		    	}
			}
			xhr.send();
	}
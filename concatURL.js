
//GET GOOGLE MAP IMAGE OF THAT STATION
	function map(){
	    var xhr = new XMLHttpRequest(); 
			xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
		    		var items = JSON.parse(xhr.responseText);
		    		var lat = items[4].position.lat //select correct lat
					var lng = items[4].position.lng //select correct lng
		    		document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+ lat +",%20"+ lng +"&zoom=15&size=450x300&y=roadmap&markers=color:red%7Clabel:%7C%20"+ lat +",%20"+ lng +"&key=%20AIzaSyDFYsfHIt5LS7BP94P_zABHNMls0dm6ObY";
				}
			}
		xhr.send();	
	}
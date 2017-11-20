//GET STATION NAMES AND PUT THEM INTO SELECT ELEMENT IN FORM
	var station = document.getElementById("stationBtn");
	station.addEventListener("click", function(){
	    var xhr = new XMLHttpRequest(); 		// all browsers except IE
			xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
		    		var items = JSON.parse(xhr.responseText);
		    		var output = '<select>'
					for (var i in items) {
						output += '<option>' + items[i].available_bike_stands + '</option>'
						}
					output += '</select>'
					document.getElementByTagName('option').innerHTML = output
				}									
			}
			xhr.send();
	});
					
				
			

//GET NUMBER OF BIKES AVAILABLE
	var availBikes = document.getElementById("availBikesBtn");
	availBikes.addEventListener("click", function(){
	    var xhr = new XMLHttpRequest(); 		// all browsers except IE
			xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
		    		var items = JSON.parse(xhr.responseText);
		    		var output = '<ul>'
					for (var i in items) {
						output +='<li>' + items[i].available_bikes + '</li>'
						}
					output += '</ul>'
		    		document.getElementById('availBikesHere').innerHTML = output
				}
			}
			xhr.send();
	});
	
//GET NUMBER OF BIKES AVAILABLE
	var availStands = document.getElementById("availStandsBtn");
	availStands.addEventListener("click", function(){
	    var xhr = new XMLHttpRequest(); 		// all browsers except IE
			xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
		    		var items = JSON.parse(xhr.responseText);
		    		var output = '<ul>'
					for (var i in items) {
						output += '<li>' + items[i].available_bike_stands + '</li>'
						}
					output += '</ul>'
		    		document.getElementById('availStandsHere').innerHTML = output
				}
			}
			xhr.send();
	});
	
//GET LATITUDE
	var   = document.getElementById(" ");
	 .addEventListener("click", function(){
	    var xhr = new XMLHttpRequest(); 		// all browsers except IE
			xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
		    		var items = JSON.parse(xhr.responseText);
		    		var output = '<ul>'
					for (var i in items) {
						output += '<li>' + items[i].position.lat + '</li>'
						}
					output += '</ul>'
		    		document.getElementById(' ').innerHTML = output
				}
			}
			xhr.send();
	});
	
	
//GET LONGITUDE
	var   = document.getElementById(" ");
	 .addEventListener("click", function(){
	    var xhr = new XMLHttpRequest(); 		// all browsers except IE
			xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
		    		var items = JSON.parse(xhr.responseText);
		    		var output = '<ul>'
					for (var i in items) {
						output += '<li>' + items[i].position.lng + '</li>'
						}
					output += '</ul>'
		    		document.getElementById(' ').innerHTML = output
				}
			}
			xhr.send();
	});


//LOOPING THE ADDRESS INTO A DROP DOWN LIST
	var availStands = document.getElementById("availStandsBtn");
	availStands.addEventListener("click", function(){
	    var xhr = new XMLHttpRequest(); 		// all browsers except IE
			xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
		    		var items = JSON.parse(xhr.responseText);
		    		var output
					<?php 
					for($i=0; $i<=items.length; $i++){
						echo "<option value=".$i.address"</option>";
					}
						?> 
		    		document.getElementById('availStandsHere').innerHTML = output
				}
			}
			xhr.send();
	});
	

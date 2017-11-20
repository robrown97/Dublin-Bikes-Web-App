//GETTING USER STATION INPUT ie. STATION NAME
	function userInput(){
        var userInput = document.getElementById("mainForm").elements[0].value;
        console.log(userInput);
	}
  
//GET BIKES, STANDS, STATUS & BANKING
function stationInfo(){
    var xhr = new XMLHttpRequest(); 
		xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
	    		var items = JSON.parse(xhr.responseText);
	    		var bikes = items[0].available_bikes;
				//color determined by number
	    		document.getElementById("availBikes").innerHTML = bikes;
	    	}
		}
		xhr.send();
//GET NUMBER OF BIKES AVAILABLE
function availBikes(){
    var xhr = new XMLHttpRequest(); 
		xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
	    		var items = JSON.parse(xhr.responseText);
	    		var bikes = items[0].available_bikes;
				//color determined by number
	    		document.getElementById("availBikes").innerHTML = bikes;
	    	}
		}
		xhr.send();
}

//GET NUMBER OF BIKE STANDS AVAILABLE
function availStands(){
    var xhr = new XMLHttpRequest(); 
		xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
	    		var items = JSON.parse(xhr.responseText);
	    		var stands = items[0].available_bike_stands;
				//color determined by number
	    		document.getElementById("availStands").innerHTML = stands;
	    	}
		}
		xhr.send();
}

//GET BANKING STATUS
function bank(){
    var xhr = new XMLHttpRequest(); 
		xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
	    		var items = JSON.parse(xhr.responseText);
	    		var bank = items[0].banking;
				if(bank=="true"){
					bank = "Available"
				}else{
					bank = "Unavailable"
				}
	    		document.getElementById("banking").innerHTML = bank;
	    	}
		}
		xhr.send();
}

//GET OPEN/CLOSE STATUS
function status(){
    var xhr = new XMLHttpRequest(); 
		xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
	    		var items = JSON.parse(xhr.responseText);
	    		var stat = items[0].status;
				
	    		document.getElementById("status").innerHTML = stat;
	    	}
		}
		xhr.send();
}
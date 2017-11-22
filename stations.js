//PUTTING STATION NAMES INTO DROPDOWN LIST
function addressList(){
    var xhr = new XMLHttpRequest(); 		
		xhr.open('GET','https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
	    		var items = JSON.parse(xhr.responseText);
				for (var i in items) {
					document.getElementById("mySelect").innerHTML += '<option>' + items[i].address + '</option>';
				}	
			}					
		}
	xhr.send();
};

/*
//global variable
var stationName;

//GETTING USER STATION INPUT
function userInput(){
	stationName = document.getElementById("mainForm").elements[0].value;
    console.log(stationName);
	
}


//GETTING SELECTED STATION INFO
function stationInfo(){
	stationName = document.getElementById("mainForm").elements[0].value;
	//click event to trigger request
		document.getElementById("stationButton").addEventListener("click", function(){
	//request	
		var xhr = new XMLHttpRequest(); 		
		xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
	    		var items = JSON.parse(xhr.responseText);
	//getting stationName (used global variable above)
	
	//getting info based on that station  		
	    		for (var i in items){
					if(stationName == items[i].address){
						var bikes = items[i].available_bikes;
						var stands = items[i].available_bike_stands;
						var bank = items[i].banking;
							if(bank=="true"){
								bank = "Payments Available"
							}else{
								bank = "Payments Unavailable"
							}
						var stat = items[i].stat;
						//lng and lat for CONCAT function
						var lng = items[i].position.lng;
						var lat = items[i].position.lat;
						
						console.log(stat);
						console.log(lng);
						console.log(lat);
						
					//console.log(bikes+stands+bank+stat);
					document.getElementById("stationName").innerHTML = stationName;
					document.getElementById("availBikes").innerHTML = bikes;
					document.getElementById("availStands").innerHTML = stands;
					document.getElementById("banking").innerHTML = bank;
					document.getElementById("status").innerHTML = stat;
					}//if loop
					else{
						alert("Opps, Looks like something went wrong!"+"\n"+"Please try again.");
					}//else loop
	    		}//for loop		
	    	}//readystate function
		}//API granted function
	});//eventListener function
}


function testing(){
	stationName = document.getElementById("mainForm").elements[0].value;
    console.log(stationName);
    
	for (var i in items){
		if(stationName == items[i].address){
			var bikes = items[i].available_bikes;
			var stands = items[i].available_bike_stands;
			var bank = items[i].banking;
				if(bank=="true"){
					bank = "Payments Available"
				}else{
					bank = "Payments Unavailable"
				}
			var stat = items[i].stat;
			
			var lng = items[i].position.lng;
			var lat = items[i].position.lat;
		}
	console.log(bikes+stands+bank+stat);
}
*/
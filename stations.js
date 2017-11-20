//PUTTING STATION NAMES INTO DROPDOWN LIST
function addressList(){
    var xhr = new XMLHttpRequest(); 		
		xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
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

var stationName;


//GETTING USER STATION INPUT
function userInput(){
	var stationName = document.getElementById("mainForm").elements[0].value;
    console.log(stationName);
}


//GETTING SELECTED STATION INFO
	//sending request
	function stationInfo(){
		//click event to trigger request
			var station = document.getElementById("sumbit");
			station.addEventListener("click", function(){
		//request	
			var xhr = new XMLHttpRequest(); 		
			xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=fc485179156e7d3c19085b499c05dd7bf9191cb4');
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
		    		var items = JSON.parse(xhr.responseText);
		//getting stationName (used global variable)		
		    		
		//getting info based on that station  		
		    		for (var i in items) {
						if(stationName == items[i].address){
							var bikes = items[i].available_bikes;
							var stands = items[i].available_bike_stands;
							var bank = items[i].banking;
								if(bank=="true"){
									bank = "Available"
								}else{
									bank = "Unavailable"
								}
							var stat = items[i].stat;
							
						console.log(bikes+stands+bank+stat);
						/*
						document.getElementById("availBikes").innerHTML = bikes;
						document.getElementById("availStands").innerHTML = stands;
						document.getElementById("banking").innerHTML = bank;
						document.getElementById("status").innerHTML = stat;
						*/
						}else{
							alert("Opps, Looks like something went wrong!"+'<br>'+"Please try again.");
						}
		    		}		
		    	}
			}
		});
	}	


/*
innerHTML output

'<p>'+bikes+'</p>'+'<br>'+
'<p>'+stands+'</p>'+'<br>'+
'<p>'+bank+'</p>'+'<br>'+
'<p>'+stat+'</p>'+'<br>'
*/
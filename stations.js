

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

//GETTING STATION INFO

	

				
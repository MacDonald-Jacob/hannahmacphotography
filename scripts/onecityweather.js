//my openweathermap.org API key
const appKey = "4fdb2d8339feaef5789bedc8a5c9b43d";

//ID variables 
let searchButton = document.getElementById("search-btn-2");
let searchInput = document.getElementById("search-txt");
//ID variables for returned (onscreen) data values
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");

//executes findWeatherDetails() when the user clicks into the search box
//gets API data for search input values (string) when search icon is clicked, else nothing if no string is entered when clicked
searchButton.addEventListener("click", findWeatherDetails);

//executes enterPressed() when the user releases key (search box) on the keyboard
searchInput.addEventListener("keyup", enterPressed);

//triggered by eventListener 'searchInput = keyup' (keyboard release)
function enterPressed(event) {
	if (event.key === "Enter") {
		findWeatherDetails();
	}
}

//triggered by eventListener 'searchButton = click'
function findWeatherDetails() {
	if (searchInput.value === "") {

	} else {
		//API responds with a list of data-value results that match search string after validiated by my key
		let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid=" + appKey;
		httpRequestAsync(searchLink, theResponse);
	}
}
//response variables that are displayed onscreen
function theResponse(response) {
	//JSON object (response data) in parsed format
	let jsonObject = JSON.parse(response);
	cityName.innerHTML = jsonObject.name;

	//pulls the corresponding weather-type icon from weather site
	icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";

	//stringified celsius temperature data is parsed into "Fahrenheit degree value"
	//displayed in the temperature div
	temperature.innerHTML = 'The current temperature is ' + Math.round((parseFloat(jsonObject.main.temp - 273.15) * 1.8) + 32) + "°" + "F";

	//stringified humidity data is parsed into a "value %"
	//displayed in the hunidity div
	humidity.innerHTML = 'The current relative humidity is ' + jsonObject.main.humidity + "%";


	// API data in raw (stringified) format
	//document.getElementById('stringified').innerHTML = JSON.stringify(response);
}


//my AJAX XMLHttpRequest object
function httpRequestAsync(url, callback) {
	console.log("How is your weather today?");
	//XMLHttpRequest object to request data from a web server
	var httpRequest = new XMLHttpRequest();
	//executes on XMLHttpRequest object changes i.e. new search string
	httpRequest.onreadystatechange = () => {
		//When readyState = 4 and  status property = 200, the (API data) response is ready
		if (httpRequest.readyState == 4 && httpRequest.status == 200)
			//returns the server response as a text string (that we parse into readable values using "theResponse(response) function
			callback(httpRequest.responseText);
	}
	//uses GET method, opens API URL, true for asynchronous 
	httpRequest.open("GET", url, true); 
	//Sends the request to the server Used for GET requests
	httpRequest.send();
}


//NOTES
	//celsius temp (original code):
	//temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";

	//Fahrenheit temp (added code)
	//temperature.innerHTML = Math.round((parseFloat(jsonObject.main.temp - 273.15) * 1.8) + 32) + "°";
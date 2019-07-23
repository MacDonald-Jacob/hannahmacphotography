let weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET','//api.openweathermap.org/data/2.5/weather?id=5583739&appid=44ae659aedc9547e507e6cd8e21c0f5a&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function(){
    let weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);

    document.getElementById('sky').innerHTML = weatherInfo.weather["0"].description;
    document.getElementById('temp').innerHTML = weatherInfo.main.temp;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

    // Wind Chill
    var temp = parseFloat(document.getElementById('temp').innerHTML = weatherInfo.main.temp);
    var wind = parseFloat(document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed);
    var speed = Math.pow(wind,.16)
    var answer = (35.74 + (0.6215*temp)) - (35.75*speed) + (0.4275*temp*speed)

    document.getElementById("windChill").innerHTML = Math.round(answer);

}//end of the function


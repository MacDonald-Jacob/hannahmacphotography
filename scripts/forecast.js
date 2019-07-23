let forecastRequest = new XMLHttpRequest();

forecastRequest.open('GET','//api.openweathermap.org/data/2.5/forecast?id=5583739&appid=44ae659aedc9547e507e6cd8e21c0f5a&units=imperial', true);

forecastRequest.send();

forecastRequest.onload = function(){
    let forecastInfo = JSON.parse(forecastRequest.responseText);
    console.log(forecastInfo);

    document.getElementById('description1').innerHTML = forecastInfo.list[6].weather["0"].description;
    document.getElementById('description2').innerHTML = forecastInfo.list[14].weather["0"].description;
    document.getElementById('description3').innerHTML = forecastInfo.list[22].weather["0"].description;
    document.getElementById('description4').innerHTML = forecastInfo.list[30].weather["0"].description;
    document.getElementById('description5').innerHTML = forecastInfo.list[38].weather["0"].description;

    document.getElementById('high1').innerHTML = Math.round(forecastInfo.list[6].main.temp_max);
    document.getElementById('high2').innerHTML = Math.round(forecastInfo.list[14].main.temp_max);
    document.getElementById('high3').innerHTML = Math.round(forecastInfo.list[22].main.temp_max);
    document.getElementById('high4').innerHTML = Math.round(forecastInfo.list[30].main.temp_max);
    document.getElementById('high5').innerHTML = Math.round(forecastInfo.list[38].main.temp_max);

    document.getElementById('low1').innerHTML = Math.round(forecastInfo.list[6].main.temp_min);
    document.getElementById('low2').innerHTML = Math.round(forecastInfo.list[14].main.temp_min);
    document.getElementById('low3').innerHTML = Math.round(forecastInfo.list[22].main.temp_min);
    document.getElementById('low4').innerHTML = Math.round(forecastInfo.list[30].main.temp_min);
    document.getElementById('low5').innerHTML = Math.round(forecastInfo.list[38].main.temp_min);

    document.getElementById('wind1').innerHTML = Math.round(forecastInfo.list[6].wind.speed);
    document.getElementById('wind2').innerHTML = Math.round(forecastInfo.list[14].wind.speed);
    document.getElementById('wind3').innerHTML = Math.round(forecastInfo.list[22].wind.speed);
    document.getElementById('wind4').innerHTML = Math.round(forecastInfo.list[30].wind.speed);
    document.getElementById('wind5').innerHTML = Math.round(forecastInfo.list[38].wind.speed);

    var iconcode1 = forecastInfo.list[6].weather[0].icon;
    var icon_path1 = "//openweathermap.org/img/w/" + iconcode1 + ".png";
    document.getElementById('weather_icon1').src = icon_path1;

    var iconcode2 = forecastInfo.list[14].weather[0].icon;
    var icon_path2 = "//openweathermap.org/img/w/" + iconcode2 + ".png";
    document.getElementById('weather_icon2').src = icon_path2;

    var iconcode3 = forecastInfo.list[22].weather[0].icon;
    var icon_path3 = "//openweathermap.org/img/w/" + iconcode3 + ".png";
    document.getElementById('weather_icon3').src = icon_path3;

    var iconcode4 = forecastInfo.list[30].weather[0].icon;
    var icon_path4 = "//openweathermap.org/img/w/" + iconcode4 + ".png";
    document.getElementById('weather_icon4').src = icon_path4;

    var iconcode5 = forecastInfo.list[38].weather[0].icon;
    var icon_path5 = "//openweathermap.org/img/w/" + iconcode5 + ".png";
    document.getElementById('weather_icon5').src = icon_path5;

}
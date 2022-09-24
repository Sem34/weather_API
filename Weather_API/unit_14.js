const param = {
    "url" : "https://api.openweathermap.org/data/2.5/",
    "appid" : "df3d3418ad2e2adb14507e744f6ded46"
}

function getWeather() {
    let myСities = document.createElement("parent");

    const cities = {
        "2643743": "London",
        "625144": "Minsk",
        "756135": "Warsaw",
        "703448": "Kyiv"
    }

    let selectList = document.createElement("select");
    selectList.id = "mySelect";
    myСities.appendChild(selectList);

    for (let id in cities){
        let option = document.createElement("option");
        option.value = id;
        option.text = cities[id];
        selectList.appendChild(option);
    }

    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather(data) {
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg';
    document.querySelector('.feels_temperature').innerHTML = Math.round(data.main.feels_like) + '&deg';
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' &#x25;';
    document.querySelector('.clouds').innerHTML = data.clouds.all;
    document.querySelector('.cloudiness').innerHTML = data.weather[0]['description'];
    document.querySelector('.wind').innerHTML = data.wind.speed + ' kp/h';
    console.log(data);
}

getWeather();
document.querySelector('#city').onchange = getWeather;

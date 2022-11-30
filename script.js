// This is the code that defines most of the variables that will be used in the html

const searchButton = document.getElementById('btn')
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('weatherInfo');
const timeZoneEl = document.getElementById('timeZone');
const countryEl = document.getElementById('country');
const weatherForcastEl = document.getElementById('futureForcast');
const currentTempEl = document.getElementById('currentTemp');
const furture1El = document.getElementById('futureForcast1')
const furture2El = document.getElementById('futureForcast2')
const furture3El = document.getElementById('futureForcast3')
const furture4El = document.getElementById('futureForcast4')
const furture5El = document.getElementById('futureForcast5')

const days = ['Sunday', 'Monday', 'Tuesday', 'WednesDay', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// The very important API key that gets the weather information

const Api_Key = "c793e03b4a35a394972ca0120e97b1da";

// The code that makes the search button work

searchButton.addEventListener('click', getWeatherData)

// The function that retrive the weather data using the API

function getWeatherData (){
    const city_name = document.getElementById('cityName').value
    console.log(city_name)
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${Api_Key}`).then(res => res.json()).then(data => {
        console.log(data);
        showWeatherData(data);
     })
}

// The function that shoes the weather data retrived from the API

function showWeatherData(data){
    let {temp, humidity} = data.main;
    let {speed} = data.wind;
    let {lat, lon} = data.coord
    currentWeatherItemsEl.innerHTML = 
    `<div class="weatherItem">
        <div>Temperature</div>
        <div>${temp}f</div>
    </div>
    <div class="weatherItem">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weatherItem">
        <div>Wind Speed</div>
        <div>${speed}mph</div>
    </div>`;

// The console logs just to make sure the latitude and longitude are recorded

    console.log(lat);
    console.log(lon);

// The part of the code that actually interprets the weather data

    fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${Api_Key}`).then(res => res.json()).then(data => {
        console.log(data);
        let date7 = data.list[7].dt_txt
        let temp7 = data.list[7].main.temp
        let humidity7 = data.list[7].main.humidity
        let wind7 = data.list[7].wind.speed

// This part of the code is what changes the vaulse on page to match the data

        furture1El.innerHTML =
        `<div class="furture-forcast-item">
            <div class="day">${date7}</div>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="weather-icon">
            <div class="temp">Temperature - ${temp7}°f</div>
            <div class="temp">Humidity - ${humidity7}%</div>
            <div class="temp">Wind - ${wind7}mph</div>
        </div>`
        let date15 = data.list[15].dt_txt
        let temp15 = data.list[15].main.temp
        let humidity15 = data.list[15].main.humidity
        let wind15 = data.list[15].wind.speed
        furture2El.innerHTML =
        `<div class="furture-forcast-item">
            <div class="day">${date15}</div>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="weather-icon">
            <div class="temp">Temperature - ${temp15}°f</div>
            <div class="temp">Humidity - ${humidity15}%</div>
            <div class="temp">Wind - ${wind15}mph</div>
        </div>`
        let date23 = data.list[23].dt_txt
        let temp23 = data.list[23].main.temp
        let humidity23 = data.list[23].main.humidity
        let wind23 = data.list[23].wind.speed
        furture3El.innerHTML =
        `<div class="furture-forcast-item">
            <div class="day">${date23}</div>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="weather-icon">
            <div class="temp">Temperature - ${temp23}°f</div>
            <div class="temp">Humidity - ${humidity23}%</div>
            <div class="temp">Wind - ${wind23}mph</div>
        </div>`
        let date31 = data.list[31].dt_txt
        let temp31 = data.list[31].main.temp
        let humidity31 = data.list[31].main.humidity
        let wind31 = data.list[31].wind.speed
        furture4El.innerHTML =
        `<div class="furture-forcast-item">
            <div class="day">${date31}</div>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="weather-icon">
            <div class="temp">Temperature - ${temp31}°f</div>
            <div class="temp">Humidity - ${humidity31}%</div>
            <div class="temp">Wind - ${wind31}mph</div>
        </div>`
        let date39 = data.list[39].dt_txt
        let temp39 = data.list[39].main.temp
        let humidity39 = data.list[39].main.humidity
        let wind39 = data.list[39].wind.speed
        furture5El.innerHTML =
        `<div class="furture-forcast-item">
            <div class="day">${date39}</div>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="weather-icon">
            <div class="temp">Temperature - ${temp39}°f</div>
            <div class="temp">Humidity - ${humidity39}%</div>
            <div class="temp">Wind - ${wind39}mph</div>
        </div>`
    })  
}

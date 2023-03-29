var cityInputEl = document.querySelector('#searchBox');
var cityHistoryEl = document.querySelector('#previous-searchers');
var weatherInfoEl = document.querySelector('#weather-data');
var searchButtonEl = document.querySelector('button');

//create function storing user city in local storage

//create function adding city saved in local storage as a button that can be selected later


  var citySubmitHandler = function (event) {
    event.preventDefault();
  
    var cityName = cityInputEl.value.trim();
    console.log(cityName);
    if (cityName) {
      
      saveCity(cityName);
      getUserRepos(cityName);
  
      cityHistoryEl.textContent = '';
      cityInputEl.value = '';

   
    } else {
      alert('Please enter a city');
    }
  };


//create function calling weather api to get 5 day forcast




















searchButtonEl.addEventListener('click', citySubmitHandler);


var apiUrl = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={d94fcd0a3f247519e9f2462c13c0bc86}';
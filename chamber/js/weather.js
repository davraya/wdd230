const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=629be02c255e1568aa39b5e8b98cf5c7";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(1);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const windspeed = jsObject.wind.speed
    console.log(windspeed)
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#figcaption').textContent = desc;
    document.querySelector('#windspeed').textContent += windspeed;
  });
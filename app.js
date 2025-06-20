const apiKey = "8912139b05204e0b46c2c6ec1c098704";
const Url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let city = 'bangalore';

async function checkWeather(city){
    const response = await fetch(Url+ `${city}&appid=${apiKey}`);
    if(response.status == 404 || response.status == 400){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';

    }else{
    var data = await response.json();

    document.querySelector('.temp').innerText = Math.round(data.main.temp)+"°C";
    document.querySelector('.city').innerText = data.name;
    document.querySelector('.humidity').innerText = Math.round(data.main.humidity)+"%";
    document.querySelector('.wind').innerText = Math.round(data.wind.speed) + "km/h"; 

     let weatherIcon = document.querySelector('.cloud-icons');

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png";

    }else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "images/mist.png";

    }else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png";
        
    }else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = "images/snow.png";

    }else{
        weatherIcon.src = "images/clear.png";

    }
    document.querySelector('.error').style.display = 'none';
    document.querySelector('.weather').style.display = 'block';
}
  
}

document.querySelector('.search button').addEventListener("click", function(){
    city = document.querySelector('input').value;
    checkWeather(city);
});
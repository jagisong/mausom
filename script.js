const apiKey = "f93181f6ce6f896aa1fb68f868ca9e93"

const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function getWeather(city){
    const res = await fetch(api + city + `&appid=${apiKey}`);
    
    if(res.status == 404){
        document.querySelector(".invalid").style.display = "block";
        document.querySelector(".weather").style.display = 'none';
    }
    
    let data = await res.json();
    document.querySelector(".wind").textContent = data.wind.speed + " km/h";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").textContent = data.name;

    if(data.weather[0].main == 'Clouds'){
        document.querySelector(".weather-icon").src = "images/clouds.png";
        document.querySelector(".weather-type").textContent = data.weather[0].main;
    }
    else if(data.weather[0].main == 'Clear'){
        document.querySelector(".weather-icon").src = "images/clear.png";
        document.querySelector(".weather-type").textContent = data.weather[0].main;
    }
    else if(data.weather[0].main == 'Drizzle'){
        document.querySelector(".weather-icon").src = "images/drizzle.png";
        document.querySelector(".weather-type").textContent = data.weather[0].main;
    }
    else if(data.weather[0].main == 'Mist'){
        document.querySelector(".weather-icon").src = "images/mist.png";
        document.querySelector(".weather-type").textContent = data.weather[0].main;
    }
    else if(data.weather[0].main == 'Rain'){
        document.querySelector(".weather-icon").src = "images/rain.png";
        document.querySelector(".weather-type").textContent = data.weather[0].main;
    }
    else if(data.weather[0].main == 'Snow'){
        document.querySelector(".weather-icon").src = "images/snow.png";
        document.querySelector(".weather-type").textContent = data.weather[0].main;
    }
    else if(data.weather[0].main == 'Haze'){
        document.querySelector(".weather-icon").src = "images/haze.png";
        document.querySelector(".weather-type").textContent = data.weather[0].main;
    }

    // console.log(document.querySelector(".weather-icon").src);
    document.querySelector(".weather").style.display = 'block';
    document.querySelector(".invalid").style.display = "none";
}

document.getElementById("btn").addEventListener("click", function(){
    getWeather(document.getElementById("inp").value);
})

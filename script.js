const apikey = "8e945b7563b9092ad31978e75f714f0e"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
let waethericon = document.querySelector(".weather-icon")
async function checkweather(city) {
    const repsonse = await fetch(apiurl + city + `&appid=${apikey}`);


    if (repsonse.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await repsonse.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";
        if (data.weather[0].main == "Clouds") {
            waethericon.src = "clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            waethericon.src = "clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            waethericon.src = "rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            waethericon.src = "drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            waethericon.src = "mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})

const form = document.querySelector("form");
const todayDay = document.querySelector(".today-left :first-child");
const todayDate = document.querySelector(".today-left :nth-child(2)");
const todayLocation = document.querySelector(".today-left > div > span");
const todayIcon = document.querySelector(".today-right :first-child");
const todayTemperature = document.querySelector(".today-right :nth-child(2)");
const todayDescription = document.querySelector(".today-right :nth-child(3)");
const todayPrecipitation = document.querySelector(".today-detail :first-child");
const todayHumidity = document.querySelector(".today-detail :nth-child(2)");
const todayWindSpeed = document.querySelector(".today-detail :nth-child(3)");


const futureDays = document.querySelector(".future");


const weatherIcons = {
    "01d": "bi bi-sun-fill",          
    "01n": "bi bi-moon-fill",            
    "02d": "bi bi-cloud-sun-fill",     
    "02n": "bi bi-cloud-moon-fill",      
    "03d": "bi bi-cloud-fill",         
    "03n": "bi bi-cloud-fill",           
    "04d": "bi bi-clouds-fill",          
    "04n": "bi bi-clouds-fill",          
    "09d": "bi bi-cloud-rain-fill",        
    "09n": "bi bi-cloud-rain-fill",      
    "10d": "bi bi-cloud-rain-fill",     
    "10n": "bi bi-cloud-rain-fill",       
    "11d": "bi bi-cloud-lightning-fill",   
    "11n": "bi bi-cloud-lightning-fill",   
    "13d": "bi bi-cloud-snow-fill",      
    "13n": "bi bi-cloud-snow-fill",         
    "50d": "bi bi-cloud-haze-fill",        
    "50n": "bi bi-cloud-haze-fill"          
};

const fetchData = (city) => {
    
    const apiKey = "4c2eb002be78662ef7f4a923f945f4ce";


    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl).then(response => {
        if (!response.ok) {
            throw new Error("Weather data could not be retrieved.");
        }
        return response.json();
    })
        .then(data => {


            todayDay.textContent = new Date().toLocaleDateString("en", { weekday: "long" });
            todayDate.textContent = new Date().toLocaleDateString("en", { day: "numeric", month: "long", year: "numeric" });
            todayLocation.textContent = `${data.city.name}, ${data.city.country}`;

            todayIcon.className = weatherIcons[data.list[0].weather[0].icon];
            todayTemperature.innerHTML = `${Math.round(data.list[0].main.temp)}&#8451;`;
            todayDescription.textContent = data.list[0].weather[0].description;

            todayPrecipitation.textContent = `Precipitation : ${data.list[0].pop}%`;
            todayHumidity.textContent = `Humidity : ${data.list[0].main.humidity}%`;
            todayWindSpeed.textContent = `Wind Speed : ${data.list[0].wind.speed} m/s`;

            
            const futureWeather = data.list.slice(8, 40); 
            futureDays.innerHTML = "";


            futureWeather.forEach((forecast, index) => {
                if (index % 8 === 0) {

                    const date = new Date(forecast.dt * 1000);
                    const day = date.toLocaleDateString("en", { weekday: "long" });
                    const temperature = Math.round(forecast.main.temp);
                    const description = forecast.weather[0].description;
                    const icon = forecast.weather[0].icon;

                    const futureDayElement = document.createElement("div");
                    futureDayElement.classList.add("future-day");
                    futureDayElement.innerHTML = `

                        <p class="day">${day}</p>
                        <i class="${weatherIcons[icon]}"></i>
                        <p class="temperature">${temperature}°C</p>
                        <p class="description">${description}</p>

                    `;
                    futureDays.appendChild(futureDayElement);
                }
            });
        })
        .catch((error) => {
            console.error(error);
            
            alert("Weather data could not be retrieved.");
        });
}


document.addEventListener("DOMContentLoaded", function () {
    const defaultLocation = "istanbul";
    fetchData(defaultLocation);
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("input");


    const city = input.value;
    if (city.trim() === "") {
        alert("Please enter a city name.");
        return;
    } else {
        fetchData(city);
        input.value = "";
    }
});
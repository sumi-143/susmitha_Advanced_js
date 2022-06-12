let weather = {
    //to access the weather
    "apiKey": "c4c0c0f19ba715c9b2f96d16b4181b0e",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apiKey
            )
            .then((response) =>
                response.json()
            )
            .then((data) => this.displayWeather(data))
    },
    //display weather
    displayWeather: function(data) {
        console.log(data)
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;


        document.querySelector(".city").innerText = "Weather In " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".tempvariations").innerText = data.main.temp_max + '/' + data.main.temp_min
        document.querySelector(".weather").classList.remove("loading");
    },
    //get content of search bar
    // search: function() {
    //     this.fetchWeather(document.querySelector(".search-bar").value);
    // },
};

//making the search bar and search icon work

document.querySelector(".search-button").addEventListener("click", function() {
    weather.search();
});

// activating the enter button to fetch results
document.querySelector(".search-bar").addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        weather.search();
    } else {
        weather.fetchWeather(event.value)
    }
});

// week 9 lab 
// const searchBox = document.querySelector('.search-bar')
// searchBox.addEventListener('keypress', getWeartherDetails);

// function getWeartherDetails() {
//     weather.fetchWeather(searchBox.value)
// }

weather.fetchWeather("kadapa");
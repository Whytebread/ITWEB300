// Global variables
const submitButton = document.getElementById("submit");
const weatherDisplay = document.getElementById("weatherDisplay");

// Functions
// creates a URL to access the API, finds the weather information using the city submitted by the user and returns the data in JSON format
function getForecast(city) {
    const endpoint = "https://api.openweathermap.org/data/2.5/forecast";
    const apiKey = "ccc635c428fb10e3076f68110fc38736";
    const queryString = "q=" + encodeURI(city) + "&units=imperial&appid=" + apiKey;
    const url = endpoint + "?" + queryString;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Unable to load city "${city}".`);
            }
            return response.json();
        })
        .then(data => {
            displayForecast(city, data);
        })
        .catch(error => {
            alert(error.message);
        });
}

  // Display forecast received from JSON  
function displayForecast(city, data) {

// takes the required data from the current day forecast, removes the hidden div and populates the webpage with the categorized information
const forecast = data.list[0];
const temperature = forecast.main.temp;
const minTemperature = forecast.main.temp_min;
const maxTemperature = forecast.main.temp_max;
const pressure = forecast.main.pressure
const cityName = data.city.name

weatherDisplay.classList.remove("hidden");

weatherDisplay.innerHTML = `
<ul>
<li>City: ${cityName}</li>
<li>Temperature: ${temperature} °F</li>
<li>Minimum Tempurature: ${minTemperature} °F</li>
<li>Maximum Temperature: ${maxTemperature} °F</li>
<li>Pressure: ${pressure} hPa</li>
</ul>
`;


}

submitButton.addEventListener("click", () => {
    const city = document.getElementById("city").value.trim();
    if (city !== "") {
        getForecast(city);
    }
});

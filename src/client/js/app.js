const {
    calculateDaysUntilTrip
} = require("./handleDate");
const {
    chooseForecastForTravelDate
} = require("./handleDate");

const {
    validateInput
} = require("./validateInput");

// Listening for click and then running handleInput-Function
document.getElementById("generate").addEventListener('click', handleInput);

// Function that is triggered after user clicks the button
async function handleInput() {

    // object that stores the parameters for api-calls
    let trip = {};

    // get user input into the object
    trip.location = document.getElementById("location").value;
    trip.date = document.getElementById("date").value;
    if (validateInput(trip)) {
        // Call Geodates-Api with trip-data provided
        const coordinates = await callApi("http://localhost:8080/geodata", trip);
        trip.lat = coordinates.lat;
        trip.lng = coordinates.lng;
        trip.country = coordinates.country;

        // Call Pixabay-Api with trip-data provided
        trip.noDestinationPics = false;
        //change picture format to vertical for smaller screens
        if (document.body.clientWidth < document.body.clientHeight) {
            trip.pixabayPictureOrientation = "orientation=vertical";
        } else {
            trip.pixabayPictureOrientation = "orientation=horizontal";
        }
        let pixabayResponse = await callApi("http://localhost:8080/pixabaydata", trip);
        // If there is no picture for the destination, call the api a second time to get a country-pic
        if (pixabayResponse.noDestinationPics) {
            trip.noDestinationPics = true;
            pixabayResponse = await callApi("http://localhost:8080/pixabaydata", trip);
        }
        trip.image = pixabayResponse.url;

        // Get data ready for WeatherBit-Api: calculate Days until trip. 
        let countdown = await calculateDaysUntilTrip(trip);
        trip.daysUntilTrip = countdown;


        // Call weatherbit-api 
        const weatherResponse = await callApi("http://localhost:8080/weatherdata", trip);
        trip.weatherResponse = weatherResponse;
        const dateResponse = await chooseForecastForTravelDate(weatherResponse, trip);
        trip.weather = dateResponse;
        const response = await updateUI(trip);
    }
}

//Function to call all three apis
async function callApi(queryURL, queryObject) {
    const response = await fetch(queryURL, {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            queryObject
        }),

    })
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
}


//Get the data to be displayed in the travel-app
async function updateUI(trip) {
    document.querySelector('.title').style.display = "block";
    document.querySelector('#entryHolder').style.display = "block";
    document.body.style.backgroundImage = "url(" + trip.image + ")";
    //Show a different message depending on which forecast is displayed
    if (trip.daysUntilTrip.countdown <= 16) {
        document.querySelector('#result').innerHTML = "The weather on " + trip.date + " in " + trip.location;
    } else {
        document.querySelector('#result').innerHTML = "No forecast available:<br> The current weather in " + trip.location + " is";
    }
    document.querySelector('#weathericon').innerHTML = '<img src="https://www.weatherbit.io/static/img/icons/' + trip.weatherResponse.data[0].weather.icon + '.png" >';
    document.querySelector('#weather').innerHTML = trip.weatherResponse.data[0].weather.description;
    document.querySelector('#temp').innerHTML = "The temperature is " + trip.weatherResponse.data[0].temp + " &#8451";
    document.querySelector('#countdown').innerHTML = "It is " + trip.daysUntilTrip.countdown + " days until your trip starts!";
};

export {
    handleInput
}
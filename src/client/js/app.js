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
    console.log(trip.location);
    trip.date = document.getElementById("date").value;
if (validateInput(trip)){
    // Call Geodates-Api with trip-data provided
    const coordinates = await callApi("http://localhost:8080/geodata", trip);
    trip.lat = coordinates.lat;
    trip.lng = coordinates.lng;
    trip.country = coordinates.country;

    // Call Pixabay-Api with trip-data provided
    trip.noDestinationPics = false;
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
    console.log(countdown);

    // Call weatherBit-api 
    const weatherResponse = await callApi("http://localhost:8080/weatherdata", trip);
    trip.weather = weatherResponse;
    console.log(trip);
    const dateResponse = await chooseForecastForTravelDate(weatherResponse, date);
    console.log(dateResponse);
    const response = await updateUI(trip);

}}

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
    // Get the gathered data and get it to be displayed in the travel-app
    document.querySelector('#image').innerHTML = "<img src=" + trip.image + ">";
    document.querySelector('#result').innerHTML = "The weather on " + trip.date + " is ";
    //document.querySelector('#weather').innerHTML = latestData.weather + " &#8451";
    //document.querySelector('#countdown').innerHTML = "It is " + latestData.date + " until your trip starts";
};

export {
    handleInput
}
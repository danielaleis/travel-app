const { calculateDaysUntilTrip } = require("./handleDate");
const { dateChecker } = require("./handleDate");


// Listening for click and then running handleInput-Function
document.getElementById("generate").addEventListener('click', handleInput);

// Function that is triggered after user clicks the button
async function handleInput() {
    console.log("input!");
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    console.log(date);
    const coordinates = await callGeodatesApi(location);
    let countdown = await calculateDaysUntilTrip(date);
    let trip = {
        lat: coordinates.lat,
        lng: coordinates.lng,
        date: date,
        daysUntilTrip: countdown.countdown
    };
    console.log(coordinates);
    const weatherResponse = await callWeatherApi(trip);
    console.log(weatherResponse);
    const dateResponse = await dateChecker(weatherResponse, date)
    console.log(dateResponse);
    const response = await updateUI(trip);
}

async function callGeodatesApi(location) {
    const response = await fetch("http://localhost:8080/geodata", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                location
            }),
            
        })
        try {
            const data = await response.json();
            return data;
        } catch(error) {
            console.log("error", error);
        }
}

async function callWeatherApi(trip) {
    console.log("trip");
    console.log(trip);
    const response = await fetch("http://localhost:8080/weatherdata", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                trip
            }),
        })
        try {
            const data = await response.json();
            return data;
        } catch(error) {
            console.log("error", error);
        }
}

async function updateUI(trip) {
    // Get the gathered data and get it to be displayed in the travel-app
    document.querySelector('#result').innerHTML = "The weather on " + trip.date + " is ";
    //document.querySelector('#weather').innerHTML = latestData.weather + " &#8451";
    //document.querySelector('#countdown').innerHTML = "It is " + latestData.date + " until your trip starts";
};

export {
    handleInput
}

// Für pixabay: Asynchronous code (such as loading an image) 
//runs outside of this event-loop and sends an event when it is done.
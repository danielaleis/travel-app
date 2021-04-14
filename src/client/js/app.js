const {
    calculateDaysUntilTrip
} = require("./handleDate");
const {
    dateChecker
} = require("./handleDate");


// Listening for click and then running handleInput-Function
document.getElementById("generate").addEventListener('click', handleInput);

// Function that is triggered after user clicks the button
async function handleInput() {
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    console.log(date);
    const coordinates = await callGeodatesApi(location);
    let trip = ""
    trip = {
        lat: coordinates.lat,
        lng: coordinates.lng,
        country: coordinates.country,
        location: coordinates.location,
        noDestinationPics: false
    };
    let pixabayResponse = await callPixabayApi(trip);
    if (pixabayResponse.noDestinationPics) {
        trip.noDestinationPics = true;
        pixabayResponse = await callPixabayApi(trip);
    }
    let countdown = await calculateDaysUntilTrip(date);
    trip.image = pixabayResponse.url
    trip.date = date;
    trip.daysUntilTrip = countdown.countdown;
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
    } catch (error) {
        console.log("error", error);
    }
}

async function callWeatherApi(trip) {
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
    } catch (error) {
        console.log("error", error);
    }
}

async function callPixabayApi(trip) {
    const response = await fetch("http://localhost:8080/pixabaydata", {
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
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
}


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
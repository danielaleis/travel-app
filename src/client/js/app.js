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
    const pixabayResponse = await callPixabayApi(location);
    let countdown = await calculateDaysUntilTrip(date);
    let trip = {
        lat: coordinates.lat,
        lng: coordinates.lng,
        date: date,
        daysUntilTrip: countdown.countdown,
        image: pixabayResponse.url
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

async function callPixabayApi(location) {
    console.log(location);
    // return (location);
    const response = await fetch("http://localhost:8080/pixabaydata", {
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
            console.log(data);
            return data;
        } catch(error) {
            console.log("error", error);
        }
}

// Für pixabay: Asynchronous code (such as loading an image) 
//runs outside of this event-loop and sends an event when it is done.


//JS EXample Pixabay
// var API_KEY = '21125110-814a4600f5e0102f5a6b4bc53';
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });



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


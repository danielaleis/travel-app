// Listening for click and then running handleInput-Function
document.getElementById("generate").addEventListener('click', handleInput);

// Function that is triggered after user clicks the button
async function handleInput() {
    console.log("input!");
    const location = document.getElementById("location").value;
    // const date = document.getElementById("date").value;
    const coordinates = await callGeodatesApi(location);
    console.log(coordinates);
    const weatherResponse = await callWeatherApi(coordinates);
    console.log(weatherResponse);
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

async function callWeatherApi(coordinates) {
    console.log(coordinates);
    console.log("coordinates");
    const response = await fetch("http://localhost:8080/weatherdata", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                coordinates
            }),
        })
        try {
            const data = await response.json();
            return data;
        } catch(error) {
            console.log("error", error);
        }
}

//Code from weather-journal-project to be changed

//         getWeather(baseURL, zip, apiKey)
//             .then(function (weather) {
//                 const city = weather.name;
//                 const temp = weather.main.temp;
//                 const tempFeels = weather.main.feels_like;

//posting weather data
//             postData('/add', {
//                 city,
//                 temp,
//                 tempFeels,
//                 feelings,

//             }).then(() => {
//                 // function to be called as soon as the weather data is ready
//                 updateUI();
//             });

//         })
// }
// async function updateUI() {
//     // Get the gathered data and get it to be displayed in the weather-journal-app
//     const response = await fetch('/all');
//     const latestData = await response.json();
//     document.querySelector('#city').innerHTML = "The temperature in " + latestData.city + " is ";
//     document.querySelector('#temp').innerHTML = Math.floor(latestData.temp) + " &#8451";
//     document.querySelector('#tempFeels').innerHTML = "... but it feels like " + Math.floor(latestData.tempFeels) + " &#8451";
//     document.querySelector('#date').innerHTML = "Todays date: " + newDate;
//     document.querySelector('#content').innerHTML = "My feelings: " + latestData.feelings;
// }
// };
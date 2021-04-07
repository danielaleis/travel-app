// Listening for click and then running getInput-Function
document.getElementById("generate").addEventListener('click', handleInput);

// Function that is triggered after user clicks the button
function handleInput() {
    console.log("input!");
    const location = document.getElementById("location").value;
    // const date = document.getElementById("date").value;
    fetch("http://localhost:8080/geodata", {
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
        .then(res => res.json())
        .then(function (res) {
            console.log(res);
            //updateUI(res);
        })
}



//Code from weather-journal-project to be changed

//         getWeather(baseURL, zip, apiKey)
//             .then(function (weather) {
//                 const city = weather.name;
//                 const temp = weather.main.temp;
//                 const tempFeels = weather.main.feels_like;

/* Get data from Geonames */
// const coordinates = await Client.getData('/geodata', {
//     location: city
// })

/* Get weatherdata for destination */
// const weather = await Client.getData('/getWeather', {
//     lat: coordinates.lat,
//     lng: coordinates.lng
// });


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

// };

//call API with this function 
// const getWeather = async (baseURL, zip, apiKey) => {
//     const fetchURL = baseURL + zip + apiKey
//     const res = await fetch(fetchURL)
//     try {
//         const newData = await res.json();
//         return newData;
//     } catch (error) {
//         console.log("An error has occured", error);
//     }
// };

// Make a POST request to our route:

// const postData = async (url = '', data = {}) => {
//     const response = await fetch(url, {
//         // the method is set to POST because we are accessing the POST route we setup in server.js.
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         // Body data type must match "Content-Type" header        
//         body: JSON.stringify(data),
//     });
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
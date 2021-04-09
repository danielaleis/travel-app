// Setup empty JS object to act as endpoint for all routes
projectData = {};

const dotenv = require('dotenv');
dotenv.config();
// for using environmental variables and hiding the api key

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch');

const app = express();

app.use(express.static('dist'));
app.use(cors());

/* Middleware*/
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());;

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

// Set up the variables to call the API 
const geonamesApiKey = `username=${process.env.Geonames_API_key}`;
const geonamesURL = 'http://api.geonames.org/searchJSON'
const geonamesRows = "maxRows=1";

const weatherbitApiKey = `key=${process.env.Weatherbit_API_key}`;
const weatherbitForecast = 'https://api.weatherbit.io/v2.0/forecast/daily';
const weatherbitCurrent = 'https://api.weatherbit.io/v2.0/current';
// days=[integer] (optional: return a specific number of forecast days)
// 16 - [DEFAULT] 16 days
// Example_Current: https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely

//add GET request 
app.get('/', function (req, res) {
    res.send('dist/index.html');
});

//add post request 
app.post("/geodata", async (req, res) => {
    let queryInput = "";
    queryInput = "q=" + encodeURI(req.body.location);
    console.log(req.body);
    //  queryInput = "q=Berlin"
    const fetchURL = (`${geonamesURL}?${geonamesApiKey}&${geonamesRows}&${queryInput}`)
    console.log(fetchURL);
    const apiData = await fetch(fetchURL, {
        method: 'POST'
    });

    try {
        const data = await apiData.json();
        let coordinates = {
            lat: data.geonames[0].lat,
            lng: data.geonames[0].lng
        };
        //create object to later pass geodate to weatherAPI
        console.log(coordinates)
        res.send(coordinates)
    } catch (err) {
        console.log("error", err);
    }
});

app.post("/weatherdata", async (req, res) => {
    let queryInput = "";
    let fetchURL = "";
    if (req.body.trip.daysUntilTrip <= 16) {
        queryInput = (`lat=${req.body.trip.lat}&lon=${req.body.trip.lng}`)
        console.log(queryInput);
        //  queryInput = "lat=52.5243&lon=-13.41053"
        fetchURL = (`${weatherbitForecast}?${weatherbitApiKey}&${queryInput}`)
    } else {
        queryInput = (`lat=${req.body.trip.lat}&lon=${req.body.trip.lng}`)
        fetchURL = (`${weatherbitCurrent}?${weatherbitApiKey}&${queryInput}`)
    }
    console.log(fetchURL);
    const apiData = await fetch(fetchURL, {
        method: 'POST'
    });

    try {
        const data = await apiData.json();
        console.log(data)
        res.send(data)
    } catch (err) {
        console.log("error", err);
    }

});
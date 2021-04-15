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

const pixabayApiKey = `key=${process.env.Pixabay_API_key}`;
const pixabayURL = 'https://pixabay.com/api/';
const pixabayParameters = "image_type=photo&orientation=horizontal&safesearch=true&category=places";
// &order=popular&category=places
// &per_page=3
// https://pixabay.com/api/?
// key=21125110-814a4600f5e0102f5a6b4bc53&
// q=yellow+flowers&image_type=photo

//add GET request 
app.get('/', function (req, res) {
    res.send('dist/index.html');
});

//add post request 
app.post("/geodata", async (req, res) => {
    let queryInput = "";
    queryInput = "q=" + encodeURI(req.body.queryObject.location);
    const fetchURL = (`${geonamesURL}?${geonamesApiKey}&${geonamesRows}&${queryInput}`)
    const apiData = await fetch(fetchURL, {
        method: 'POST'
    });

    try {
        const data = await apiData.json();
        let result = {
            lat: data.geonames[0].lat,
            lng: data.geonames[0].lng,
            country: data.geonames[0].countryName
        };
        //create object to later pass geodate to weatherAPI
        res.send(result)
    } catch (err) {
        console.log("error", err);
    }
});

app.post("/weatherdata", async (req, res) => {
    let queryInput = "";
    let fetchURL = "";
    if (req.body.queryObject.daysUntilTrip <= 16) {
        queryInput = (`lat=${req.body.queryObject.lat}&lon=${req.body.queryObject.lng}`)
        fetchURL = (`${weatherbitForecast}?${weatherbitApiKey}&${queryInput}`)
    } else {
        queryInput = (`lat=${req.body.queryObject.lat}&lon=${req.body.queryObject.lng}`)
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

app.post("/pixabaydata", async (req, res) => {
    let queryInput = "";
    let fetchURL = "";
    let noDestinationPics = "";
    if (req.body.queryObject.noDestinationPics == false) {
        console.log("Destination returned")
        queryInput = "q=" + encodeURI(req.body.queryObject.location);
        fetchURL = (`${pixabayURL}?${pixabayApiKey}&${pixabayParameters}&${queryInput}`)
    } else if (req.body.queryObject.noDestinationPics == true) {
        console.log("Country returned")
        queryInput = "q=" + encodeURI(req.body.queryObject.country);
        fetchURL = (`${pixabayURL}?${pixabayApiKey}&${pixabayParameters}&${queryInput}`)
        //Get a photo for the country, if no picture is found for the users destination
    }
    console.log(fetchURL);

    const apiData = await fetch(fetchURL, {
        method: 'POST'
    })
    try {
        const data = await apiData.json();
        console.log(data);
        let imageData = ""
        if (data.total > 0) {
            imageData = data.hits[0].webformatURL
            noDestinationPics = false;
        } else {
            noDestinationPics = true;
        }
        let image = {
            url: imageData,
            noDestinationPics: noDestinationPics
        };
        res.send(image)
    } catch (err) {
        console.log("error", err);
    }

});

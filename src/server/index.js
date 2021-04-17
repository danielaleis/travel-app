// for using environmental variables and hiding the api key
const dotenv = require('dotenv');
dotenv.config();

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

const pixabayApiKey = `key=${process.env.Pixabay_API_key}`;
const pixabayURL = 'https://pixabay.com/api/';
const pixabayParameters = "image_type=photo&safesearch=true&category=places";

// Add route for start page 
app.get('/', function (req, res) {
    res.send('dist/index.html');
});

// Add Endpoint for Geonames-Api 
app.post("/geodata", async (req, res) => {
    let queryInput = "";
    queryInput = "q=" + encodeURI(req.body.queryObject.location);
    const fetchURL = (`${geonamesURL}?${geonamesApiKey}&${geonamesRows}&${queryInput}`)
    const apiData = await fetch(fetchURL, {
        method: 'POST'
    });

    try {
        const data = await apiData.json();
        //create object to later pass geodate to weatherAPI
        let result = {
            lat: data.geonames[0].lat,
            lng: data.geonames[0].lng,
            country: data.geonames[0].countryName
        };
        res.send(result)
    } catch (err) {
        console.log("error", err);
    }
});

// Add endpoint for weatherbit-API 
app.post("/weatherdata", async (req, res) => {
    let queryInput = "";
    let fetchURL = "";
    // Fetch the right URL depending on the travel date  
    if (req.body.queryObject.daysUntilTrip.countdown <= 16) {
        queryInput = (`lat=${req.body.queryObject.lat}&lon=${req.body.queryObject.lng}`)
        fetchURL = (`${weatherbitForecast}?${weatherbitApiKey}&${queryInput}`)
    } else {
        queryInput = (`lat=${req.body.queryObject.lat}&lon=${req.body.queryObject.lng}`)
        fetchURL = (`${weatherbitCurrent}?${weatherbitApiKey}&${queryInput}`)
    }
    const apiData = await fetch(fetchURL, {
        method: 'POST'
    });

    try {
        const data = await apiData.json();
        res.send(data)
    } catch (err) {
        console.log("error", err);
    }

});

// Add endpoint for Pixabay-Api 
app.post("/pixabaydata", async (req, res) => {
    let queryInput = "";
    let fetchURL = "";
    let noDestinationPics = "";
    let pixabayPictureOrientation = req.body.queryObject.pixabayPictureOrientation;
    //Get a photo for the country, if no picture is found for the users destination
    if (req.body.queryObject.noDestinationPics == false) {
        queryInput = "q=" + encodeURI(req.body.queryObject.location);
        fetchURL = (`${pixabayURL}?${pixabayApiKey}&${pixabayParameters}&${pixabayPictureOrientation}&${queryInput}`)
    } else if (req.body.queryObject.noDestinationPics == true) {
        queryInput = "q=" + encodeURI(req.body.queryObject.country);
        fetchURL = (`${pixabayURL}?${pixabayApiKey}&${pixabayParameters}&${pixabayPictureOrientation}&${queryInput}`)
    }

    const apiData = await fetch(fetchURL, {
        method: 'POST'
    })
    try {
        const data = await apiData.json();
        let imageData = ""
        if (data.total > 0) {
            imageData = data.hits[0].largeImageURL
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
// Setup empty JS object to act as endpoint for all routes
projectData = {};

const dotenv = require('dotenv');
dotenv.config();
// for using environmental variables and hide the api key

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

// Set up the three variables to call the API 
// BEISPIEL aus Project 4:
// const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
// const apiKey = process.env.API_KEY
// const lang = 'en';

const geonamesApiKey = `username=${process.env.Geonames_API_key}`;
const geonamesURL = 'http://api.geonames.org/searchJSON'
const geonamesRows = "maxRows=1";


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
        //create object to pass geodate to weatherAPI
        console.log(coordinates)
        res.send(coordinates)
    } catch (err) {
        console.log("error", err);
    }
});

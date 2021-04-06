//Code from project4, needs to be changed
const dotenv = require('dotenv');
dotenv.config();
// for using environmental variables and hide the api key

var path = require('path')
const express = require('express')
//const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch');

// Set up the variables to call the API 
// const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
// const apiKey = process.env.API_KEY
// const lang = 'en';

// const app = express();

// app.use(express.static('dist'));
// app.use(cors());

/* Middleware*/
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());;

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

//add post request 
// app.post("/add", async (req, res) => {
//     console.log(req.body.inputObject);
//     let queryInput = "";
//     if (req.body.inputObject.type == "text") {
//         queryInput = "txt=" + encodeURI(req.body.inputObject.input);

//     } else {
//         queryInput = "url=" + req.body.inputObject.input;
//     }

//     const fetchURL = (`${baseURL}?key=${apiKey}&lang=${lang}&${queryInput}`)
//     console.log(fetchURL);
//     const apiData = await fetch(fetchURL, {
//         method: 'POST'
//     });

//     try {
//         const data = await apiData.json();
//         res.send(data)
//     } catch (err) {
//         console.log("error", err);
//     }
// });

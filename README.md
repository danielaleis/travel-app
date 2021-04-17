# travel-app
## Udacity Front End Web Developer Nanodegree - Project 5: Travel App (final project to graduate)

This project is part of the Udacity Front End Developer Nanodegree Program: Its the fifth and final project to earn the aforementioned degree. Its a travel app that gives the user a little preview of his vacation. It provides a weather forecast, counts down the days until the trip and shows a picture of the destination. 

The user will get the weather forecast if their trip is within the next 16 days. If not they will see the current weather at their destination, because there is no weatherforecast yet. The app also tells them in how many days their trip will start. A picture of their destination is displayed as the background to the app. 

UDACITY-REVIEWER: This is the task I picked to make my project stand out:
If there is no picture for the users specific destination, the app will show a picture of the country of that destination instead. The foto will be either vertical or horizontal, depending on the ratio of the users screen. This way the user has the best experience on both large screens and smaller screens - like smartphones and tablets.

Udacity required the student to use the following APIs to make all this work:
- [Geonames](http://www.geonames.org/export/web-services.html) 
- [Weatherbit](https://www.weatherbit.io/api) 
- [Pixabay](https://pixabay.com/api/docs/) 

My project has unit tests with [jest](https://jestjs.io/docs/getting-started) for the functions handleDate and validateInput. The latter function determines if the user entered a destination. If no input is given, the user receives feedback in a red infobox. 

Udacity created this project so students can show if they mastered the following skills:
- Set up Webpack
- Install Webpack Loaders and Plugins
- Use APIs and make them work together
- Create layouts and page design
- Apply Sass styles
- Responsive design
- Use Service workers

## How to use
1. Rename the file .env-default to .env and enter your keys for the APIs mentioned above. 
2. Run "npm run test" for unit-tests
3. Run "npm run build-dev" for the dev-mode. You can access the project in your browser with localhost:8080
4. Run "npm run build-prod" and "npm run start" for production-mode. You can access the project in your browser with localhost:8080

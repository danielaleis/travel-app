function calculateDaysUntilTrip(trip) {
    const today = new Date();
    const start = new Date(trip.date);
    //calculating how many days until trip starts
    const countdown = Math.round((start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    console.log("::: Running calculateDaysUntilTrip :::", trip.date);
    return {
        countdown
    };
    //returning how many days until trip
}

async function chooseForecastForTravelDate(weatherResponse, trip) {
        //Choosing the appropriate day out of the 16 day forecast
    let result = {};
    console.log("::: Running chooseForecastForTravelDate :::", trip.date);
    console.log(weatherResponse.data);
    for (const item in weatherResponse.data) {
        if (trip.date == weatherResponse.data[item].datetime) {
            result = weatherResponse.data[item];
        };
        console.log(`${weatherResponse.data[item].datetime}`);
    }
    return {
        result
    };
}

export {
    calculateDaysUntilTrip,
    chooseForecastForTravelDate
}
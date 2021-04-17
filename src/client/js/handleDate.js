function calculateDaysUntilTrip(trip) {
    const today = new Date();
    const start = new Date(trip.date);
    //calculating how many days until trip starts
    const countdown = Math.round((start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    //returning how many days until trip
    return {
        countdown
    };
}

async function chooseForecastForTravelDate(weatherResponse, trip) {
        //Choosing the appropriate day out of the 16 day forecast
    let result = {};
    for (const item in weatherResponse.data) {
        if (trip.date == weatherResponse.data[item].datetime.slice(0,10)) {
            result = weatherResponse.data[item];
        };    }
    return {
        result
    };
}

export {
    calculateDaysUntilTrip,
    chooseForecastForTravelDate
}
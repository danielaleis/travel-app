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

async function dateChecker(weatherResponse, trip) {
    let result = {};
    console.log("::: Running dateChecker :::", trip.date);
    console.log(weatherResponse.data);
    for (const item in weatherResponse.data) {
        if (trip.date == weatherResponse.data[item].datetime) {
            console.log("funzt!")
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
    dateChecker
}
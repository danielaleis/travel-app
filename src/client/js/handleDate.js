
function calculateDaysUntilTrip(tripStartDate) {
    const today = new Date();
    const start = new Date(tripStartDate);
    //calculating how many days until trip starts
    const countdown = Math.round((start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))+1; 

    console.log("::: Running calculateDaysUntilTrip :::", tripStartDate);
    return { countdown: countdown};
    //returning how many days until trip
}


function dateChecker(weatherResponse, date) {

    console.log("::: Running dateChecker :::", date);
    console.log(weatherResponse.data);
    for (const item in weatherResponse.data) {
        if (date == weatherResponse.data[item].datetime){
            console.log("funzt!")
        };
        console.log(`${weatherResponse.data[item].datetime}`);
      }
    let weatherDate = "";
    return { weatherDate};
 }

export {
    calculateDaysUntilTrip,
    dateChecker
}

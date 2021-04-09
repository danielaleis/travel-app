
function calculateDaysUntilTrip(tripStartDate) {
    const today = new Date();
    const start = new Date(tripStartDate);
    //calculating how many days until trip starts
    const countdown = Math.round((start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))+1; 

    console.log("::: Running calculateDaysUntilTrip :::", tripStartDate);
    return { countdown: countdown};
    //returning how many days until trip
}

export { calculateDaysUntilTrip };


function dateChecker() {
    // switch zwischen current / forecast so wie bei URL / text in NPL?
    // const date = document.getElementById("date").value;
    console.log("::: Running dateChecker :::", date);
    //If no input is given, the user is told
    // if (date == "") {
    //     document.querySelector('#date').innerHTML = "Please enter a date";
    // };
    //Using regex to determine if the input is text or a URL
//     const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
//     const regex = new RegExp(expression);
//     let dateType = "";
//     if (date.match(forecast)) {
//         dateType = "forecast";
//     } else {
//         dateType = "current";
//     }
//     return dateType;
 }

export {
    dateChecker
}

// für die tages-bestimmung diese Methode
// https://www.w3schools.com/jsref/jsref_gettime.asp


// The displayed date format will differ from the actual value 
// the displayed date is formatted based on the locale 
// of the user's browser, but the parsed value is always 
// formatted yyyy-mm-dd.

// You can get and set the date value in JavaScript with the 
//input element's value and valueAsNumber properties. For example:
// var dateControl = document.querySelector('input[type="date"]');
// dateControl.value = '2017-06-01';
// console.log(dateControl.value); // prints "2017-06-01"
// console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)

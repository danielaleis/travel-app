function validateInput(trip) {
    console.log ("::: Running validateInput :::")
    if (trip.location == "") {
           //If no input is given, the user is shown an infobox
           document.querySelector('#infobox').style.display = "block";
           document.querySelector('#infobox').innerHTML = "The input was empty - please enter your destination!";
        return false;
    } else if (document.querySelector('#infobox') !== null){
        document.querySelector('#infobox').style.display = "none";

    }
    return true;
}

export { validateInput };
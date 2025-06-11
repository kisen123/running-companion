// Function written from an earlier project, adapted for this project
// utils/calculations.js
export function calculatePace(inputValue) {

    let speed = Number(inputValue);
    let rawConvertedMinutes;

    // Example: 10 km/t -> (10/60)**(-1)

    // Defining minutes and seconds
    if (speed === 0) {
        rawConvertedMinutes = 0;
    } else {
    rawConvertedMinutes = (speed/60)**(-1);
    }

    let hours = Math.floor(rawConvertedMinutes / 60);
    let minutes;

    if (hours <= 0) {
        minutes = Math.floor(rawConvertedMinutes);
    } else {
        minutes = Math.floor(((rawConvertedMinutes / 60) % 1) * 60, 2);
    };
    let seconds = Math.floor(((((rawConvertedMinutes / 60) % 1) * 60) % 1) * 60);
    let milliseconds = Math.round(((((rawConvertedMinutes / 60) % 1 * 60) % 1 * 60) % 1 ) * 1000);

    
    // Handles situations where the rounding
    // protocol gives f.ex 04:59:1000 instead of 05:00:000
    if (milliseconds === 1000) {
        seconds = seconds + 1;
        milliseconds = 0;
    }


    // Handles situations where the rounding
    // protocol gives f.ex 04:60 instead of 05:00
    if (seconds === 60) {
        minutes = minutes + 1;
        seconds = 0;
    }
    
    // Handles situations where the rounding
    // protocol gives f.ex. 00:60:00 instead of 01:00:00
    if (minutes === 60) {
        hours = hours + 1;
        minutes = 0;
        console.log("Possible bug");
    }


    return {hours, minutes, seconds, milliseconds}
};
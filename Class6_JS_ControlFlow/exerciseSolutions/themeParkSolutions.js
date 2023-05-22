// IF STATEMENT
function whatToDo(time){
    if(time <= 10){
        console.log("Visit the water ride");
    } else if(time <= 12 && time > 10){
        console.log("Visit the haunted house");
    } else {
        console.log("Visit the roller coaster");
    }
}
// EXAMPLE USAGE
whatToDo(8); // output: "Ride the roller coaster"
whatToDo(12); // output: "Eat lunch"

// SWITCH STATEMENT
function dayByDay(day){
    switch(day){
        case 'Monday':
            console.log("Visit the water ride");
            break;
        case 'Tuesday':
            console.log("Visit the haunted house");
            break;
        case 'Sunday':
            console.log("Visit the roller coaster");
            break;
        default:
            console.log("Free exploration");
    }
}
// EXAMPLE USAGE
console.log(dayByDay('Monday')); // output: "Ride the water ride"
console.log(dayByDay('Wednesday')); // output: "Go to the haunted house"
console.log(dayByDay('Friday')); // output: "Free exploration day"

// WHILE LOOP
function rideTillDizzy(maxDizziness){
    let dizziness = 0;
    while(dizziness < maxDizziness){
        console.log("Riding the roller coaster");
        dizziness += 3;
    }
}
// EXAMPLE USAGE
rideTillDizzy(15); // output: prints out "Riding the roller coaster" 5 times
rideTillDizzy(16); // output: prints out "Riding the roller coaster" 6 times
rideTillDizzy(1); // output: prints out "Riding the roller coaster" 1 time
rideTillDizzy(0); // output: prints out "Riding the roller coaster" 0 times

// DO WHILE LOOP
function rideAttraction(maxWaitTime){
    let waitTime = 15;
    do {
        console.log("Riding the attraction");
        waitTime += 5;
    } while (waitTime <= maxWaitTime)
}
// EXAMPLE USAGE
rideAttraction(15); // output: "Riding the attraction" once
rideAttraction(0); // output: "Riding the attraction" once
rideAttraction(30); // output: "Riding the attraction" 3 times

// FOR LOOP
function listAttractions(attractions){
    for(let i = 0; i < attractions.length; i++){
        console.log("Attraction number", i + 1, "is", attractions[i]);
    }
}
// EXAMPLE USAGE
let arr1 = ["roller coaster", "water ride", "haunted house"];
let arr2 = ["ferris wheel", "video game arcade", "teacup ride"];
listAttractions(arr1); // output: "Attraction number n is [attraction]" for each string in the array
listAttractions(arr2); // output: "Attraction number n is [attraction]" for each string in the array

//FOR IN LOOP
function listAttractionRatings(attractionRatings){
    for(let attraction in attractionRatings){
        console.log("The attraction", attraction, "has a rating of", attractionRatings[attraction])
    }
}
// EXAMPLE USAGE
let ratings1 = {
    "Roller Coaster": 5,
    "Ferris Wheel": 4,
    "Haunted House": 3
};
let ratings2 = {
    "Water Ride": 3,
    "Video Game Arcade": 2,
    "Teacup Ride": 1
};
listAttractionRatings(ratings1); // output: "The attraction [attraction] has a rating of [rating number]" for each attraction in the object
listAttractionRatings(ratings2); // output: "The attraction [attraction] has a rating of [rating number]" for each attraction in the object

// FOR OF LOOP
function listAllAttractions(attractions){
    let str = "Attractions for the day: ";
    for(let attraction of attractions){
        str = str + attraction + ", "
    }
}
// EXAMPLE USAGE
listAllAttractions(arr1); // output: "Attractions for the day: roller coaster, water ride, haunted house, "
lsitAllAttractions(arr2); // output: "Attractions for the day: ferris wheel, video game arcade, teacup ride, " 
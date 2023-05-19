function whatToDo(time){
    // YOUR CODE HERE
}
// EXAMPLE USAGE
whatToDo(8); // output: "Ride the roller coaster"
whatToDo(12); // output: "Eat lunch"

function dayByDay(day){
    // YOUR CODE HERE
}
// EXAMPLE USAGE
dayByDay('Monday'); // output: "Ride the water ride"
dayByDay('Wednesday'); // output: "Go to the haunted house"
dayByDay('Friday'); // output: "Free exploration day"

function rideTillDizzy(maxDizziness){
    // YOUR CODE HERE
}
// EXAMPLE USAGE
rideTillDizzy(15); // output: prints out "Riding the roller coaster" 5 times
rideTillDizzy(16); // output: prints out "Riding the roller coaster" 6 times
rideTillDizzy(1); // output: prints out "Riding the roller coaster" 1 time
rideTillDizzy(0); // output: prints out "Riding the roller coaster" 0 times

function rideAttraction(maxWaitTime){
    // YOUR CODE HERE
}
// EXAMPLE USAGE
rideAttraction(15); // output: "Riding the attraction" once
rideAttraction(0); // output: "Riding the attraction" once
rideAttraction(30); // output: "Riding the attraction" 3 times

function listAttractions(attractions){
    // YOUR CODE HERE
}
// EXAMPLE USAGE
let arr1 = ["roller coaster", "water ride", "haunted house"];
let arr2 = ["ferris wheel", "video game arcade", "teacup ride"];
listAttractions(arr1); // output: "Attraction number n is [attraction]" for each string in the array
listAttractions(arr2); // output: "Attraction number n is [attraction]" for each string in the array

function listAttractionRatings(attractionRatings){
    // YOUR CODE HERE
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
 
function listNextAttraction(attractions){
    // YOUR CODE HERE
}
// EXAMPLE USAGE
let attractions1 = [];
let attractions2 = [];
listNextAttraction(arr1); // output: Prints out "The next attraction is [attraction]" for all 3 attractions
lsitNextAttraction(arr2); // output: Prints out "The next attraction is [attraction]" for all 3 attractions
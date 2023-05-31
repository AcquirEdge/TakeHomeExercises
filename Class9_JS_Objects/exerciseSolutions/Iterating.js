/* Iterating.js */

/* Exercise 1:
Given the object `book1` below, write three separate functions:
*/

let book1 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    yearPublished: 1960
};

let book2 = {
    title: '1984',
    author: 'George Orwell',
    yearPublished: 1949,
    genre: 'Dystopian',
    pages: 328
};

/* 1.1:
Create a function named `logBookPropertiesWithForIn` that uses a `for...in` loop to log all property values of `book1`.
*/

function logBookPropertiesWithForIn(book) {
    for(let key in book){
        console.log(book[key]);
    }
}

logBookPropertiesWithForIn(book1);
/* 
Expected Output: 
'To Kill a Mockingbird'
'Harper Lee'
1960
*/

logBookPropertiesWithForIn(book2);
/* 
Expected Output: 
'1984'
'George Orwell'
1949
'Dystopian'
328
*/

/* 1.2:
Create a function named `logBookPropertyNamesWithKeys` that uses `Object.keys()` to log all property names of `book1`.
*/

function logBookPropertyNamesWithKeys(book) {
    let keys = Object.keys(book);
    for(let i = 0; i < keys.length; i++){
        console.log(keys[i]);
    }
}

logBookPropertyNamesWithKeys(book1);
/*
Expected Output:
'title'
'author'
'yearPublished'
*/

logBookPropertyNamesWithKeys(book2);
/*
Expected Output:
'title'
'author'
'yearPublished'
'genre'
'pages'
*/

/* 1.3:
Create a function named `logBookPropertyValuesWithValues` that uses `Object.values()` to log all property values of `book1`.
*/

function logBookPropertyValuesWithValues(book) {
    let values = Object.values(book);
    for(let i = 0; i < values.length; i++){
        console.log(values[i]);
    }
}

logBookPropertyValuesWithValues(book1);
/* 
Expected Output: 
'To Kill a Mockingbird'
'Harper Lee'
1960
*/

logBookPropertyValuesWithValues(book2);
/* 
Expected Output: 
'1984'
'George Orwell'
1949
'Dystopian'
328
*/

/* Exercise 2:
Given the objects `person1` and `person2` below, write three separate functions:
*/
let person1 = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'sports', 'music'],
    address: {
        street: '123 Main St',
        city: 'Los Angeles',
        state: 'CA',
    }
};

let person2 = {
    name: 'Lisa',
    age: 35,
    hobbies: ['painting', 'traveling', 'dancing'],
    address: {
        street: '456 High St',
        city: 'New York',
        state: 'NY',
    },
    job: {
        title: 'Software Developer',
        company: 'Tech Inc',
        yearsExperience: 7
    }
};

/* For function 2.1, 2.2 and 2.3, note that some properties contain nested values such as arrays and objects. 
You should write your functions to handle these nested values.
For example, when you log property VALUES of `person1`, the output for `hobbies` should be 'reading', 'sports', 'music'
and the output for `address` should be '123 Main St', 'Los Angeles', 'CA'. 
Similarly, when you log property NAMES of `person1`, the output for `hobbies` should be 'hobbies[0]', 'hobbies[1]', 'hobbies[2]'
and the output for `address` should be 'address.street', 'address.city', 'address.state'.
When you log property names AND property values, separate them 
*/

/* 2.1:
Create a function named `logPersonPropertiesWithForIn` that uses a `for...in` loop to log all property values of `person1`.
*/

function logPersonPropertiesWithForIn(person) {
    for(let key in person){
        if(Array.isArray(person[key])){
            for(value of person[key]){
                console.log(value);
            }
        } else if(typeof person[key] === 'object'){
            for(value of Object.values(person[key])){
                console.log(value);
            }
        } else {
            console.log(person[key])
        }
    }
}
logPersonPropertiesWithForIn(person1); 
// Expected output: "John", 30, "reading", "sports", "music", "123 Main St", "Los Angeles", "CA"
logPersonPropertiesWithForIn(person2); 
// Expected output: "Lisa", 35, "painting", "traveling", "dancing", "456 High St", "New York", "NY", "Software Developer", "Tech Inc", 7

/* 2.2:
Create a function named `logPersonPropertyNamesWithKeys` that uses `Object.keys()` to log all property names of `person1`.
*/

function logPersonPropertyNamesWithKeys(person) {
    let keys = Object.keys(person);
    for(let key of keys){
        if(Array.isArray(person[key])){
            // if person[key] is an array, handle it here
            for(let i = 0; i < person[key].length; i++){
                let str = "" + key + "[" + i + "]";
                console.log(str);
            }
        } else if(typeof person[key] === 'object'){
            // if person[key] is an object, handle it here
            for(let subKey in person[key]){
                let str = "" + key + "." + subKey;
                console.log(str);
            }
        } else {
            console.log(key);
        }
    }
}

logPersonPropertyNamesWithKeys(person1);
// Expected output: "name", "age", "hobbies[0]", "hobbies[1]", "hobbies[2]", "address.street", "address.city", "address.state"
logPersonPropertyNamesWithKeys(person2);
// Expected output: "name", "age", "hobbies[0]", "hobbies[1]", "hobbies[2]", "address.street", "address.city", "address.state", "job.title", "job.company", "job.yearsExperience"

/* 2.3:
Create a function named `logPersonPropertyEntries` to log all property keys with their associated values.
*/

function logPersonPropertyEntries(person) {
    for(let key in person){
        if(Array.isArray(person[key])){
            for(index in person[key]){
                console.log(key + "[" + index + "]: " + person[key][index]);
            }
        } else if(typeof person[key] === 'object'){
            for(subKey in person[key]){
                console.log(key + "." + subKey + ": " + person[key][subKey]);
            }
        } else {
            console.log(key + ": " + person[key])
        }
    }
}

logPersonPropertyEntries(person1);
// Expected output: "name: John", "age: 30", "hobbies[0]: reading", "hobbies[1]: sports", "hobbies[2]: music", "address.street: 123 Main St", "address.city: Los Angeles", "address.state: CA"
logPersonPropertyEntries(person2);
// Expected output: "name: Lisa", "age: 35", "hobbies[0]: painting", "hobbies[1]: traveling", "hobbies[2]: dancing", "address.street: 456 High St", "address.city: New York", "address.state: NY", "job.title: Software Developer", "job.company: Tech Inc", "job.yearsExperience: 7"

/* Exercise 3:
Imagine you have an object representing a directory of files. Each key is a filename and each value is the file's size in kilobytes. 
However, some files are actually subdirectories, represented by another similar object. 

Your task is to write a function named `calculateTotalSize` that will take this directory object and return 
the total size of all files in this directory and any subdirectories. Note that subdirectories will not contain further subdirectories.

Use the `directory` and `directory2` objects below to complete this task.
*/

let directory = {
    'file1.txt': 10,
    'file2.txt': 20,
    'subdir1': {
        'file1.txt': 5,
        'file2.txt': 15
    },
    'subdir2': {
        'file1.txt': 10,
        'file2.txt': 20
    },
    'file3.txt': 30
};

let directory2 = {
    'file1.txt': 50,
    'subdir1': {
        'file1.txt': 25,
        'file2.txt': 30,
        'file3.txt': 35,
    },
    'subdir2': {
        'file1.txt': 45,
        'file2.txt': 50,
    },
    'file2.txt': 55,
    'file3.txt': 60,
};

function calculateTotalSize(dir) {
    let total = 0; 

    for(key in dir){
        if(typeof dir[key] === 'number'){
            total += dir[key];
        } else {
            for(subKey in dir[key]){
                total += dir[key][subKey];
            }
        }
    }

    return total;
}

// Example usage: 
// console.log(calculateTotalSize(directory)); // Expected output: 110
// console.log(calculateTotalSize(directory2)); // Expected output: 350
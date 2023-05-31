// function from our last exercises
function deepEquality(obj1, obj2) {
    if(Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
    }
    for(let key in obj1){
        if(Array.isArray(obj1[key])){
            for(index in obj1[key]){
               if(obj1[key][index] !== obj2[key][index]){
                return false;
               } 
            }
        } else if(typeof obj1[key] === 'object'){
            if(Object.keys(obj1[key]).length != Object.keys(obj1[key]).length){
                return false
            }
            for(let subKey in obj1){
                if(obj1[key][subKey] !== obj2[key][subKey]){
                    return false;
                }
            }
        } else if(obj1[key] != obj2[key]){
            return false;
        }
    }
    return true;
}

/**
 * Exercise 1:
 * Clone the provided object using the spread operator. 
 * The object will have no nested objects. 
 * Verify your clone is a new object and the properties are equal to the original.
 * You can import/copy and paste your objectEquality functions here to use
 */

let object1 = { name: 'Object 1', color: 'red', shape: 'circle' };
let object1b = { name: 'Object 1b', color: 'purple', shape: 'square', size: ['large', 'medium'], details: { weight: '2kg', material: 'steel'} };

function cloneWithSpread(object) {
    return {...object};
}

// Example usage:
// let object1Clone = cloneWithSpread(object1);
// console.log(object1 === object1Clone);  // false
// console.log(deepEquality(object1, object1Clone));  // true
// let object1bClone = cloneWithSpread(object1b);
// console.log(object1b === object1bClone);  // false
// console.log(deepEquality(object1b, object1bClone));  // true


/**
 * Exercise 2:
 * Clone the provided object using the Object.assign() method. 
 * The object will have no nested objects. 
 * Verify your clone is a new object and the properties are equal to the original.
 * You can import/copy and paste your objectEquality functions here to use
 */

let object2 = { name: 'Object 2', color: 'blue', shape: 'square' };
let object2b = { name: 'Object 2b', color: 'green', shape: 'rectangle', size: ['small', 'tiny'], details: { weight: '1kg', material: 'wood'} };

function cloneWithAssign(object) {
    return Object.assign({}, object);
}

// Example usage:
// let object2Clone = cloneWithAssign(object2);
// console.log(object2 === object2Clone);  // false
// console.log(deepEquality(object2, object2Clone));  // true
// let object2bClone = cloneWithAssign(object2b);
// console.log(object2b === object2bClone);  // false
// console.log(deepEquality(object2b, object2bClone));  // true

/**
 * Exercise 3:
 * Clone the provided object using the JSON.parse() and JSON.stringify() methods. 
 * The object will have nested objects. 
 * Verify your clone is a new object and the properties are equal to the original.
 * You can import/copy and paste your objectEquality functions here to use
 */

let object3 = { name: 'Object 3', color: 'green', properties: { weight: '1kg', size: '10cm' } };
let object3b = { name: 'Object 3b', color: 'orange', properties: { weight: '3kg', size: '30cm' }, sizes: ['medium', 'large'], description: { material: 'plastic', origin: 'USA'} };

function cloneWithJSON(object) {
    return JSON.parse(JSON.stringify(object));
}

// Example usage:
// let object3Clone = cloneWithJSON(object3);
// console.log(object3 === object3Clone);  // false
// console.log(object3.properties === object3Clone.properties);  // false
// console.log(deepEquality(object3, object3Clone)) // true
// let object3bClone = cloneWithJSON(object3b);
// console.log(object3b === object3bClone);  // false
// console.log(object3b.sizes === object3bClone.sizes);  // false
// console.log(deepEquality(object3b, object3bClone)); // true

/**
 * Exercise 4:
 * Clone the provided object by writing a function for deep cloning that doesn't use the JSON methods. 
 * The object will have nested objects. 
 * Verify your clone is a new object and the properties are equal to the original.
 * You can import/copy and paste your objectEquality functions here to use
 */

let object4 = { name: 'Object 4', color: 'yellow', properties: { weight: '2kg', size: '20cm' } };
let object4b = { name: 'Object 4b', color: 'black', properties: { weight: '4kg', size: '40cm' }, sizes: ['tiny', 'small'], description: { material: 'metal', origin: 'China'} };

function deepClone(object) {
    // create our clone object we will be adding to 
    let clone = {};
    for(let key in object){
        // if object[key] is an object but isn't an array (so it's an object literal)
        if(Array.isArray(object[key])){
            // take care of array here
            clone[key] = [];
            for(value of object[key]){
                clone[key].push(value);
            }
        } else if(typeof object[key] === 'object'){
            // take care of nested object literal here
            clone[key] = {};
            for(subKey in object[key]){
                clone[key][subKey] = object[key][subKey];
            }
        } else {
            // non-nested properties here
            clone[key] = object[key];
        }
    }
    return clone;
}

// Example usage:
let object4Clone = deepClone(object4);
// console.log(object4 === object4Clone);  // false
// console.log(object4.properties === object4Clone.properties);  // false
// console.log(deepEquality(object4, object4Clone)); // true;
// let object4bClone = deepClone(object4b);
// console.log(object4b === object4bClone);  // false
// console.log(object4b.sizes === object4bClone.sizes);  // false
// console.log(deepEquality(object4b, object4bClone)); // true;

/**
 * Exercise 5 (Part 1):
 * Clone the provided school object.
 */

let school = {
    name: 'High School',
    address: '123 Main St',
    classes: [
        { 
            name: 'Math 101',
            students: [
                { name: 'John', grade: 85 },
                { name: 'Sara', grade: 92 }
            ],
            teacher: 'Mrs. Jones'
        },
        { 
            name: 'English 101',
            students: [
                { name: 'Amy', grade: 88 },
                { name: 'David', grade: 90 }
            ],
            teacher: 'Mr. Smith'
        }
    ]
};

function cloneSchool(school) {
    // Since the school object does not contain functions, we can use the JSON library to help us
    return JSON.parse(JSON.stringify(school));
}

// Example usage:
// let clonedSchool = cloneSchool(school);
// console.log(school === clonedSchool);  // Expected output: false

/**
 * Exercise 5 (Part 2):
 * Write a function to modify a student's grade in the cloned school object, based on the student's name and class name. 
 * The function should not modify the original school object.
 */

function updateStudentGrade(clonedSchool, className, studentName, newGrade) {
    // Find the correct class that we're looking for
    for(let classItem of clonedSchool.classes){
        if(classItem.name === className){
            // find the correct student we're looking for in that class
            for(let student of classItem.students){
                if(student.name === studentName){
                    // after we change the student's grade, we simply end the function
                    student.grade = newGrade;
                    return;
                }
            }
        }
    }
}

// Example usage:
// updateStudentGrade(clonedSchool, 'Math 101', 'John', 90);
// console.log(school.classes[0].students[0].grade);  // Expected output: 85
// console.log(clonedSchool.classes[0].students[0].grade);  // Expected output: 90

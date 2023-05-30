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
    // Your code here
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
   // Your code here
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
    // Your code here
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
    // Your code here
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
    // Your code here
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
    // Your code here
}

// Example usage:
// updateStudentGrade(clonedSchool, 'Math 101', 'John', 90);
// console.log(school.classes[0].students[0].grade);  // Expected output: 85
// console.log(clonedSchool.classes[0].students[0].grade);  // Expected output: 90

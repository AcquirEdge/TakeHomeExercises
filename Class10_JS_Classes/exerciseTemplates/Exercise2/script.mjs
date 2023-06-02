/**
 * EXERCISE 2
 * This exercise involves creating a DataManager class that allows complex manipulation of structured data.
 * The DataManager class leverages lodash, a popular JavaScript utility library, to offer advanced
 * data manipulation techniques including deep cloning, deep equality checking, 
 * finding elements in nested structures, and reshuffling of arrays.
 */

// TODO: Import the DataManager class here

// Instantiate DataManager with sample data
const dataManager1 = new DataManager({
    a: [{ b: { c: 3 } }],
    d: { e: 'hello world' },
    f: [1, 2, 3, 4, 5],
});

const dataManager2 = new DataManager({
    a: [{ b: { c: 4 } }],
    d: { e: 'goodbye world' },
    f: [5, 4, 3, 2, 1],
});

// Use DataManager methods

// Use cloneData
const clonedData1 = dataManager1.cloneData();
console.log(clonedData1); // should print the original data of dataManager1

const clonedData2 = dataManager2.cloneData();
console.log(clonedData2); // should print the original data of dataManager2

// Use setValue and getValue
dataManager1.setValue('d.e', 'goodbye world');
console.log(dataManager1.getValue('d.e')); // should print: 'goodbye world'

dataManager2.setValue('a[0].b.c', 5);
console.log(dataManager2.getValue('a[0].b.c')); // should print: 5

// Use isEqual
const isEqual1 = dataManager1.isEqual(clonedData1);
console.log(isEqual1); // should print: false, because 'd.e' was changed in dataManager1

const isEqual2 = dataManager2.isEqual(clonedData2);
console.log(isEqual2); // should print: false, because 'a[0].b.c' was changed in dataManager2

// Instantiate DataManager with sample data
const dataManager3 = new DataManager([1, 2, 3, 4, 5]);

const dataManager4 = new DataManager([5, 4, 3, 2, 1]);

// Use find
const findElement3 = dataManager3.find(el => el > 3);
console.log(findElement3); // should print: 4

const findElement4 = dataManager4.find(el => el < 3);
console.log(findElement4); // should print: 2

// Use shuffleData
const shuffledData3 = dataManager3.shuffleData();
console.log(shuffledData3); // should print the data of dataManager3 in a different order

const shuffledData4 = dataManager4.shuffleData();
console.log(shuffledData4); // should print the data of dataManager4 in a different order
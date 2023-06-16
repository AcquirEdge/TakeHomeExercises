/**
 * Recursively queries a nested object.
 * The query is a path in the object, represented by a string of dot separated fields
 *
 * @param {Object} obj - The object to query.
 * @param {string} query - The query string, with each field separated by a dot.
 * @returns {*} - The value found at the end of the query, or null if the query resulted in an "undefined" value.
 */
function queryNestedObject(obj, query) {
    // Base Case: If the query is empty, then we return the object
    if(query === ""){
        return obj;
    }
    // Recursive case: If the query is not empty, find a field represented by the first(current) field in the query string
    let splitQuery = query.split(".");
    let currentField = splitQuery[0];
    let otherFields = splitQuery.slice(1);
    // If our current object is actually an object, and if that object contains the current field, then continue the query one level deeper
    if(typeof(obj) === 'object' && currentField in obj){
        let nextQuery = otherFields.join(".");
        let nextObject = obj[currentField];
        return queryNestedObject(nextObject, nextQuery);
    }
    // If the current value is a non-object, then it can not contain a nested value, so we return null
    // If the object doesn't contain the current field, then that means the query value is undefined, so we return null 
    else {
        return null;
    }
}

const obj1 = {
    a: {
        b: {
            c: 42
        }
    }
};

console.log(queryNestedObject(obj1, "a.b.c")); // should return 42
console.log(queryNestedObject(obj1, "a.b")); // should return {c: 42}
console.log(queryNestedObject(obj1, "a")); // should return {b: {c: 42}}
console.log(queryNestedObject(obj1, "")); // should return the entire object
console.log(queryNestedObject(obj1, "a.b.c.d")); // should return null
console.log(queryNestedObject(obj1, "x.y.z")); // should return null


const obj2 = {
    a: {
        b: {
            c: 42,
            d: {
                e: 100,
                f: {
                    g: 200
                }
            }
        },
        h: 35
    },
    i: {
        j: 90
    }
};

console.log(queryNestedObject(obj2, "a.b.c")); // Output: 42
console.log(queryNestedObject(obj2, "a.b.d.e")); // Output: 100
console.log(queryNestedObject(obj2, "a.b.x")); // Output: null
console.log(queryNestedObject(obj2, "x.y.z")); // Output: null
console.log(queryNestedObject(obj2, "a.b.d.f")); // Output: {g: 200}, returning an object
console.log(queryNestedObject(obj2, "a.b")); // Output: {c: 42, d: {e: 100, f: {g: 200}}}, returning an object
console.log(queryNestedObject(obj2, "i")); // Output: {j: 90}, returning an object
console.log(queryNestedObject(obj2, "")); // Output: entire object, as no specific query is given
console.log(queryNestedObject(obj2, "a.b.d.f.g.h")); // Output: null, as there's no "h" in "g"
console.log(queryNestedObject(obj2, "a.x.y")); // Output: null, as there's no "x" in "a"
console.log(queryNestedObject(obj2, "z")); // Output: null, as there's no "z" in the root level of the object
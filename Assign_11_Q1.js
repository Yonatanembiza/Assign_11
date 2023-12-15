// Question1: Array Prototype Methods

Array.prototype.even = function() {
    return this.filter(num => num % 2 === 0);
};

Array.prototype.odd = function() {
    return this.filter(num => num % 2 !== 0);
};

// Test the code in Node.js CLI
const testArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testArray.even()); // Output: [2, 4, 6, 8]
console.log(testArray.odd());  // Output: [1, 3, 5, 7]
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 11, 13, 14, 15, 16, 17, 18, 19, 20].even()); // Output: [2, 4, 6, 8]
// testArray.even()
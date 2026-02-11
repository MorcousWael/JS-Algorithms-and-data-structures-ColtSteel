// How to Solve a problem:
// 1. Understand the problem( restate the problem in your own words? 
// inputs? outputs? can outputs be determined form inputs? labels for important pieces?)
// 2. write concrete examples(simple-advanced-empty-invalid-edge)
// 3. Break down the problem into smaller sub-problems
// 4. Solve or simplify
// 5. Look back and refactor

// Example 1: Write a function that takes a string and returns the number of charchter in the string

const fs = require('fs');
const LOG_FILE_PATH = 'd:\\Personal\\JS Algorithms and data structures\\.cursor\\debug.log';

function countCharPlan(str){
    //  make an object to store the count of each character
    //loop through string
        // if charchter is is a big letter make it smallcase
        // if char not in object and is letter/no add and set to 1
        // if charchter present and is letter/no increment by 1
    
    //return object with count
}
function countCharExecution(str){
    // #region agent log
    fs.appendFileSync(LOG_FILE_PATH, JSON.stringify({location:'theory.js:21',message:'Function entry',data:{str:str},timestamp:Date.now(),hypothesisId:'C'}) + '\n');
    // #endregion
    //  make an object to store the count of each character
    let charCount = {};
    //loop through string
    for (let char of str){
        // if charchter is is a big letter make it smallcase
        char = char.toLowerCase();
        // #region agent log
        fs.appendFileSync(LOG_FILE_PATH, JSON.stringify({location:'theory.js:26',message:'Char after toLowerCase',data:{char:char},timestamp:Date.now(),hypothesisId:'C'}) + '\n');
        // #endregion
        // if char not in object and is letter/no add and set to 1
        // if charchter present and is letter/no increment by 1
        const isAlphanumeric = char.match(/[a-z]/) || char.match(/[0-9]/); // Fix: Use logical OR instead of bitwise OR with a regex literal
        // #region agent log
        fs.appendFileSync(LOG_FILE_PATH, JSON.stringify({location:'theory.js:29',message:'isAlphanumeric check',data:{char:char,isAlphanumeric:isAlphanumeric},timestamp:Date.now(),hypothesisId:'C'}) + '\n');
        // #endregion
        if (isAlphanumeric){
            // if (charCount[char]){
            //     charCount[char]++;
            // } else {
            //     charCount[char] = 1;
            // }
            charCount[char] = ++charCount[char] || 1;
        }
    }
    // #region agent log
    fs.appendFileSync(LOG_FILE_PATH, JSON.stringify({location:'theory.js:36',message:'charCount before return',data:{charCount:charCount},timestamp:Date.now(),hypothesisId:'C'}) + '\n');
    // #endregion
    //return object with count
    return charCount;
    
}
console.log(countCharExecution("Hello World 12311312"));
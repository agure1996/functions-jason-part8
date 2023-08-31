'use strict'

/*Function that returns string of words all lower case with no spaces removed */
// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }


/*Function that makes first word of a string of words into uppercase */
// const upperFirstWord = function (str) {
//     const [first, ...otherWords] = str.split(' ')
//     return [first.toUpperCase(),...otherWords].join(' ');
// }


/*Higher order function */
// const transformer = (str,fn) =>{
//     console.log(`Original String: ${str}` );
//     console.log(`Transformed String: ${fn(str)} `);
//     console.log(`Transformed By: ${fn.name} `);
// }

// transformer('JavaScript is a weird Language!', upperFirstWord);
// transformer('JavaScript is the best language',oneWord);




const greet = function (greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }

}    

const greeter = greet('Hey there');
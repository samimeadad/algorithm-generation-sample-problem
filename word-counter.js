//define the string to check
const sampleString = "Bangladesh is a small country, but its population is very high. We love this country very much. We are proud of this country.";

//remove comma and dot from the string
const pureString = sampleString.replace( /[.,]/g, "" );

// Function for Word Frequency Calculator
function findWordFrequency ( sentence ) {
    //split the words with the separator blank space " " and store the words in an array
    const words = sentence.split( " " );

    //create an empty object for each word and its frequency
    let wordCount = {};

    //loop through the words array
    for ( let i = 0; i < words.length; i++ ) {
        //declare a variable to store each word for further object checking
        const word = words[ i ];

        //if the word is already in the object, increase its frequency by 1
        if ( wordCount[ word ] ) {
            wordCount[ word ]++;
        }
        //if the word is not in the object, add it to the object with its frequency set to 1
        else {
            wordCount[ word ] = 1;
        }
    }

    //return the object containing all the words with their frequency to the function caller
    return wordCount;
}

//store the object to print the final result 
const wordFrequencyCounter = findWordFrequency( pureString );

//print the final result in the console/terminal
console.log( wordFrequencyCounter );
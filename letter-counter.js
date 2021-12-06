//define the string to check
const sampleString = "Message can only be seen by people in the call and are deleted when the call ends.";

//remove comma, dot, and whitespaces from the string
const pureString = sampleString.replace( /[.,\s]/g, "" );

//function for letter frequency calculator
function findLetterFrequency ( sentence ) {
    //split the letters with the separator "" and store the letters in an array
    const letters = sentence.split( "" );

    //create an empty object for each letter and its frequency
    let letterCount = {};

    //loop through the letters and count the frequency of each letter
    for ( let i = 0; i < letters.length; i++ ) {
        //declare a variable to store each letter for further object checking
        const letter = letters[ i ];

        //if the letter is already in the object, increase its frequency by 1
        if ( letterCount[ letter ] ) {
            letterCount[ letter ]++;
        }

        //if the word is not in the object, add it to the object with its frequency set to 1
        else {
            letterCount[ letter ] = 1;
        }
    }

    //return the object containing all the letters with their frequency to the function caller
    return letterCount;
}

//store the object to print the final result
const letterFrequencyCounter = findLetterFrequency( pureString );

//print the final result in the console/terminal
console.log( letterFrequencyCounter );
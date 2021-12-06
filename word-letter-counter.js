const sampleString = "Bangladesh is a small country, but its population is very high. We love this country very much. We are proud of this country.";

//function for letter frequency calculator
function findLetterFrequency ( stringParameter ) {
    const pureString = stringParameter.replace( /[.,\s]/g, "" );

    //split the letters with the separator "" and store the letters in an array
    const letters = pureString.split( "" );

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

// Function for Word Frequency Calculator
function findWordFrequency ( sentence ) {
    //remove comma and dot from the string
    const pureString = sentence.replace( /[.,]/g, "" );

    //split the words with the separator blank space " " and store the words in an array
    const words = pureString.split( " " );

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

//store the Word Frequency Counter object to print the final result 
const wordFrequencyCounter = findWordFrequency( sampleString );

//print the final result in the console/terminal to display the word counter object
console.log( 'Word Frequency: ', wordFrequencyCounter );

//store the letter frequency counter object to print the final result
const letterFrequencyCounter = findLetterFrequency( sampleString );

//print the final result in the console/terminal to display the letter counter object
console.log( 'Letter Frequency: ', letterFrequencyCounter );
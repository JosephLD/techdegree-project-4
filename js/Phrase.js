//Handles the createion of the phrases
class Phrase {
    /**Creating the phrase to be guessed
     * @param {string} phrase The phrase to be guessed
     */
    constructor(phrase){
        //the phrase is stored, in lowercase, in the phrase property
        this.phrase = phrase.toLowerCase();
    }
    
    /**Displays the phrase in the game
     * @param {string} phrase The phrase that is going to be displayed in game
     */
    // addPhraseToDisplay(phrase) {
    //     //Split the phrase into an array of letters
    //     const phraseArr = phrase.split('');
    //     //Create a new li element for each letter with class a unique class for that letter
    //     phraseArr.forEach((letter) => {
    //         //Here I create the list element
    //         const phraseLi = document.createElement('li');
    //         //Here I add a hide class to letters and space class to spaces
    //         if (letter === ' ') {
    //             //If the current letter is just an empty space the classname will be 'space'
    //             phraseLi.className = 'space'
    //         } else {
    //             //if the letter is an actual letter, the class name will be 'hide letter ${}'
    //             phraseLi.className = `hide letter ${letter}`;
    //         }
    //     }
    
    
}
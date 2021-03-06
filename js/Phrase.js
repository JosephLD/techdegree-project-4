/**The class for the phrase object
 * Handles the creation and manipulation of phrase objects
 */
class Phrase {
    /**Creating the phrase to be guessed
     * @param {string} phrase The phrase to be guessed
     */
    constructor(phrase){
        //the phrase is stored, in lowercase, in the phrase property
        this.phrase = phrase.toLowerCase();
    }
    
   /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        //Create an array of phrase letters and spaces using the spread operator
        const phraseArr = [...this.phrase]
        //Here I create new li elements and classes for the characters and spaces
        phraseArr.forEach(char => {
            //The li element is created
           const phraseLi = document.createElement('li');
            //Here I add the class to the element
            if(char === ' ') {
                //If the current character is a space it is given a space class
                phraseLi.className = 'space';
            } else {
                //If the character is not a space, it is given a custom class to hide it
                phraseLi.className = `hide letter ${char}`;
                phraseLi.innerText = `${char}`;
            }
            //Append the new li element to the ul element under the 'phrase' ID
            document.querySelector('#phrase ul').appendChild(phraseLi)
        });
    };
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    * @returns (boolean) True if the input letter is in the phrase, false if it isn't
    */
    checkLetter(letter) {
        //break the phrase into an array again
        const phraseArr = [...this.phrase];
        //Using includes to check each letter against the input letter and return true or false
        return phraseArr.includes(letter)
    };
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        //Here I convert the collection of li elements with the proper hidden letter into an array
        const hideArray = [...document.getElementsByClassName(`hide letter ${letter}`)]
        //I then iterate over the array and change the class name of each element to 'show'
        hideArray.forEach(element => element.className = 'show')
    };
}
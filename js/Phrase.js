//Handles the createion of the phrases
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
    * @returns (string) The letter in the phrase that matches the input
    */
    checkLetter(letter) {
        //break the phrase into an array again
        const phraseArr = [...this.phrase];
        //Using find to check each letter against the input letter
        return phraseArr.find(char => char === letter)
    };
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        //iterate over the collection of elements with the class name of hiding the input letter
        for (const char of document.getElementsByClassName(`.hide letter ${letter}`)) {
            //changes the classname from hide to show
            char.className = 'show';
        }
    };
}
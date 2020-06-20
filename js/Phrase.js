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
            }
            //Append the new li element to the ul element under the 'phrase' ID
            document.querySelector('#phrase ul').appendChild(phraseLi)
        });
    };
}
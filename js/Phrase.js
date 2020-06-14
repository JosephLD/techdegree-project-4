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
    addPhraseToDisplay(phrase) {
        const phraseArr = phrase.split('');
        phraseArr.forEach(letter => {
            document.getElementById('phrase').firstElementChild.innerHTML = `<li class="hide letter ${letter}">${letter}</li>`;
        })
    }
 }
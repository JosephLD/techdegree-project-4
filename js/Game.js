/**The class for the game object
 * Tracks missed letters and handles what phrase is being guessed
 */
class Game {
    constructor() {
        //The number of incorrect guesses
        this.missed = 0;
        //An array of phrases to be used in the game
        this.phrase = [
            new Phrase('Shimmer and Shine'), 
            new Phrase('Good news everyone'),
            new Phrase('The Mighty Narwhal'),
            new Phrase('Fear the Deer'),
            new Phrase('Blind in the Ears')
        ];
        //The phrase being guessed in the current game
        this.activePhrase = null;
    }
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        //A random number between 0 and 4
        let randomIndex = Math.floor(Math.random()*5);
        //Here The randomly chosen phrase is made the active phrase
        this.activePhrase = this.phrase[randomIndex];
        return this.phrase[randomIndex];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
            //Choosing a random phrase and adding it the display
            this.getRandomPhrase().addPhraseToDisplay();
            //Setting the visibility of the #overlay div to hidden (because hidden = true wasn't working)
            //To reveal the phrase display
            document.getElementById('overlay').style.visibility = 'hidden';
    };
}
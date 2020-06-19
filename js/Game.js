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
        return this.phrase[randomIndex];
    }
}
/**The class for the game object
 * Tracks missed letters and handles what phrase is being guessed
 */
class Game {
    constructor() {
        //The number of incorrect guesses
        this.missed = 0;
        //An array of phrases to be used in the game
        this.phrase = [];
        //The phrase being guessed in the current game
        this.activePhrase = null;
    }
 }
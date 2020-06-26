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
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        
    };
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {

    };
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {

    };
    //handles player actions
    handleInteraction() {
        //Handles player input by clicks on the onscreen keyboard
        document.getElementById('qwerty').addEventListener('click', (e) => {
            //testing the event
            console.log(e.target.innerText);
            //When a letter is clicked, it is run through the checkLetter method and checked against itself
           if(this.activePhrase.checkLetter(e.target.innerText) === e.target.innerText) {
                //If it is correct, the matched letter is shown
                this.activePhrase.showMatchedLetter(e.target.innerText)
           }
        });
        //Handles player input from computer keyboard
        document.addEventListener('keyup', (e) => {
            //testing the event
            console.log(e.key);
            //When a key is pressed, it is run through the checkLetter method and checked against itself
            if(this.activePhrase.checkLetter(e.key) === e.key) {
                //If it is correct, the matched letter is shown
                this.activePhrase.showMatchedLetter(e.key)
           }
        })
    };
}
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
        //Here I store the li elements with a class of hide in a variable as a collection
        const hiddenLi = document.getElementsByClassName('hide');
        //If the collection is greater than zero, return false because the game has not been won
        if (hiddenLi.length > 0) {
            return false;
        } else if (hiddenLi.length === 0) {
            //If the collection equals 0, return true as the entire phrase has been revealed
            return true;
        }
    };
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        //Here I store the lives from the scoreboard in a variable as a collection
        const tries = document.getElementsByClassName('tries')
        //Increase the missed counter by 1
        this.missed += 1;
        //The first li element is hidden from view, increasing the index with the number of misses
        tries[this.missed - 1].firstElementChild.src = "images/lostHeart.png";
    };
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        //Storing the game over header in a varaible for future use
        const gameOverMessage = document.getElementById("game-over-message");
        //Show the overlay/Main menue once more
        document.getElementById('overlay').style.visibility = 'visible';
        /*Reset th game */
        //Missed is set back to 0
        this.missed = 0;
        //Here the phrase is removed from the board
        //A fo loop is used to remove every element individually, both hidden letters and spaces
        for(let i = 0; i < this.activePhrase.phrase.length; i++) {
            //The ul element the phrase is under is stored for easier use
            const phraseUl = document.getElementById('phrase').firstElementChild;
            //The first child of the ul element (the phrase letters and spaces) is removed each loop
            phraseUl.removeChild(phraseUl.firstElementChild)
        }
        //Active phrase is set back to null
        this.activePhrase = null
        //A conditional gameover message is shown based on if the game was won
        if(gameWon) {
            //If true, shows a winning message
            gameOverMessage.innerText = 'Congratulations!  Play again?'
        } else {
            //If false, shows a losing message
            gameOverMessage.innerText = 'You lost.  Want to try again?'
        }
    };
    //handles player actions
    handleInteraction() {
        //Handles player input by clicks on the onscreen keyboard
        /**
         * First I get a collection of key class elements
         * I then loop over them, adding an event listener to each one
         */
        document.querySelectorAll('.key').forEach(key => {
            key.addEventListener('click', (e) => {
                /**
                 * TEST FOR EVENT!!!!  REMOVE BEFORE SUBMISION!!!
                 */
                console.log(e.target.innerText)
                //When a letter is clicked, it is run through the checkLetter method and checked against itself
                if(this.activePhrase.checkLetter(e.target.innerText) === e.target.innerText) {
                        //If it is correct, the matched letter is shown
                        this.activePhrase.showMatchedLetter(e.target.innerText)
                        
                    }
            })
        })
        //Handles player input from computer keyboard
        document.addEventListener('keyup', (e) => {
            /**
             * TEST FOR EVENT!!!!  REMOVE BEFORE SUBMISION!!!
             */
            console.log(e.key)
            //When a key is pressed, it is run through the checkLetter method and checked against itself
            if(this.activePhrase.checkLetter(e.key) === e.key) {
                //If it is correct, the matched letter is shown
                this.activePhrase.showMatchedLetter(e.key)
           }
        })
    };
}

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
     * Resets the game to its beginning state
     */
    resetGame() {
        //Show the overlay/Main menue once more
        document.getElementById('overlay').style.visibility = 'visible';
        /*Reset th game */
        //Missed is set back to 0
        this.missed = 0;
        const tries = document.getElementsByClassName('tries');
        //All hearts are made into live hearts
        [...tries].forEach(life => life.firstElementChild.src = "images/liveHeart.png")
        //Here the phrase is removed from the board
        //A for loop is used to remove every element individually, both hidden letters and spaces
        for(let i = 0; i < this.activePhrase.phrase.length; i++) {
            //The ul element the phrase is under is stored for easier use
            const phraseUl = document.getElementById('phrase').firstElementChild;
            //The first child of the ul element (the phrase letters and spaces) is removed each loop
            phraseUl.removeChild(phraseUl.firstElementChild)
        }
        //Active phrase is set back to null
        this.activePhrase = null
    }
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
        //if You lose 5 lives, the game is lost and reset
        if(this.missed === 5) {
            //Reset the game to it's default state
            this.resetGame()
            //The lose class is applied to the game container
            document.getElementById('overlay').className = 'lose'
            const gameOverMessage = document.getElementById("game-over-message");
            gameOverMessage.innerHTML = `You lost... <br> Try again?`
        }
    };
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        //Storing the game over header in a varaible for future use
        const gameOverMessage = document.getElementById("game-over-message");
        
        //A conditional gameover message is shown based on if the game was won
        if(gameWon) {
            document.getElementById('overlay').className = 'win';
            //If true, shows a winning message
            gameOverMessage.innerHTML = `Congratulations! <br> Play again?`
            this.resetGame();
        }
    };
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        /**
         * There are two branches for this method: a 'click' branch and a 'keyup' branch
         * The 'click' branch handles clicks made to the onscreen letters
         * The 'keyup' branch handles the pressing of the computer's physical keys
         */
        //'click' branch
        if (button.type === 'click'){
            //!!Test for event, remove before submission!!
            console.log(button.target)
            
            //When a letter is clicked, it is run through the checkLetter method and checked against itself
            if(this.activePhrase.checkLetter(button.target.innerText)) {
                //If it is correct, the matched letter is shown
                this.activePhrase.showMatchedLetter(button.target.innerText)
                //The chosen letter is given the 'chosen' class
                button.target.className = 'chosen'
                //And then disabeled
                button.target.disabeled = true;
                //And the game checks for a winning move
                if(this.checkForWin()) {
                    this.gameOver(this.checkForWin)
                }
                //If the letter is not a match
            } else { 
                //A life is removed
                this.removeLife();
                //The chosen letter is given a class of 'wrong'
                button.target.className = 'wrong'
                //And is disabeled
                button.target.disabeled = true;
            }
        }
        
        //'keyup' branch
        else if (button.type === 'keyup') {
            //!!Test for event, remove before submission!!
            console.log(button.key)
        }
    }
        // /**
        //          * TEST FOR EVENT!!!!  REMOVE BEFORE SUBMISION!!!
        //          */
        //         //For clicks
        //         console.log(e.target.innerText)
        //         //When a letter is clicked, it is run through the checkLetter method and checked against itself
        //         if(this.activePhrase.checkLetter(e.target.innerText) === e.target.innerText) {
        //                 //If it is correct, the matched letter is shown
        //                 this.activePhrase.showMatchedLetter(e.target.innerText)
                        
        //             }
        //              /**
        //      * TEST FOR EVENT!!!!  REMOVE BEFORE SUBMISION!!!
        //      */
        //     //For keyboard
        //     console.log(e.key)
        //     //When a key is pressed, it is run through the checkLetter method and checked against itself
        //     if(this.activePhrase.checkLetter(e.key) === e.key) {
        //         //If it is correct, the matched letter is shown
        //         this.activePhrase.showMatchedLetter(e.key)
        //    }
};

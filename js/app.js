/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//declaring an empty game variable to initialize the game object later
let game;
//Adding an event listener to the start button
document.getElementById('btn__reset').addEventListener('click', (e) => {
    //Here I initiate a new game object so that each time the button is pressed
    //a new game is created
    game = new Game();
    //and then call the start game method on it to start the game, hide the overlay,
    //and pick and display a hidden phrase
    game.startGame();
})

 //Handles player input by clicks on the onscreen keyboard
        /**
         * First I get a collection of key class elements
         * I then loop over them, adding an event listener to each one
         */
        document.querySelectorAll('.key').forEach(key => {
            key.addEventListener('click', e => {
                game.handleInteraction(e)
            })
        })
        //Handles player input from computer keyboard
        document.addEventListener('keyup', e => {
            game.handleInteraction(e)
        })
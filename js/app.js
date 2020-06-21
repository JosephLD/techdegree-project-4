/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
//Adding an event listener to the start button
document.getElementById('btn__reset').addEventListener('click', (e) => {
    //Here I initiate a new game object
    game = new Game();
    //and then call the start game method on it to start the game, hide the overlay,
    //and pick and display a hidden phrase
    game.startGame();
})
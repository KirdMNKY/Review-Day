/*
    Hangman
 - Mike Soto -
*/

var showWord = $("#wordDisplay");
var showWins = $("#wins");
var showLosses = $("#losses");
var alreadyUsed = $("#used");
var winLose = $("#winLose");
var totalGuesses = $("#totalGuesses");
var userChoice = $("#guesses")
var userKey = "";

showWord.text("ChosenWordHere");
showWins.text("0");
showLosses.text("0");
alreadyUsed.text("You already used that letter");
winLose.text("WinLoseMessage");
totalGuesses.text("10 to start");
userChoice.text("a,b,c");


document.onkeyup = function(event) {
    userKey = event.key
    userChoice.text(userKey);
};
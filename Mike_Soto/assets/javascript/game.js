/*
    Hangman
 - Mike Soto -
*/

var showWord = $("#wordDisplay");
var showWins = $("#wins");
var showLosses = $("#losses");
var alreadyUsed = $("#used");
var winLose = $("#winLose");
var totalGuesses = $("#total-guesses");
var userChoice = $("#guesses")
var userKey = "";
var guessesLeft = 10;
var usedUp = [];
var alphabet = ["a", "b", "c", "d", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordList = ["honeypot", "encryption", "cesar cipher", "firewall", "port", "packet", "phishing", "spam", "malware", "trojan", "worm", "ransomware"];

showWord.text("ChosenWordHere");
showWins.text("0");
showLosses.text("0");
alreadyUsed.text("");
winLose.text("WinLoseMessage");
totalGuesses.text(guessesLeft);
userChoice.text("");


document.onkeyup = function(event) {
    
    alreadyUsed.text("");
    userKey = event.key
    if(alphabet.indexOf(userKey) >= 0){
        if (usedUp.indexOf(userKey) < 0){ //not used up
            userChoice.append(userKey + ", ");
            usedUp.push(userKey);
            guessesLeft--;
            totalGuesses.text(guessesLeft);
            switch(guessesLeft) {
                case 9:
                    $("#head").attr("style", "display: show");
                    $("#gallows").attr("style", "display: none");
                    break;
                case 8:
                    $("#body").attr("style", "display: show");
                    $("#head").attr("style", "display: none");
                    break;
                case 7:
                    $("#armL").attr("style", "display: show");
                    $("#body").attr("style", "display: none");
                    break;
                case 6:
                    $("#handL").attr("style", "display: show");
                    $("#armL").attr("style", "display: none");
                    break;
                case 5:
                    $("#armR").attr("style", "display: show");
                    $("#handL").attr("style", "display: none");
                    break;
                case 4:
                    $("#handR").attr("style", "display: show");
                    $("#armR").attr("style", "display: none");
                    break;
                case 3:
                    $("#legL").attr("style", "display: show");
                    $("#handR").attr("style", "display: none");
                    break;
                case 2:
                    $("#footL").attr("style", "display: show");
                    $("#legL").attr("style", "display: none");
                    break;
                case 1:
                    $("#legR").attr("style", "display: show");
                    $("#footL").attr("style", "display: none");
                    break;
                case 0:
                    $("#footR").attr("style", "display: show");
                    $("#legR").attr("style", "display: none");
                    break;
                default:
                    $("#head").attr("display", "hidden");
                    $("#body").attr("display", "hidden");
                    $("#armL").attr("display", "hidden");
                    $("#handL").attr("display", "hidden");
                    $("#armR").attr("display", "hidden");
                    $("#handR").attr("display", "hidden");
                    $("#legL").attr("display", "hidden");
                    $("#footL").attr("display", "hidden");
                    $("#legR").attr("display", "hidden");
                    $("#footR").attr("display", "hidden");
            }
        } else {
            alreadyUsed.text("You have already used that letter.");
        }
    } else {
        alreadyUsed.text("That is not a valid letter.")
    }
};
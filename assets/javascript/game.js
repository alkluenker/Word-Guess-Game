
$("#correct, #wrong").hide();


var possibleGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

"use strict";

var userGuess = [];



var words = ["dog", "cat", "camel", "elephant", "giraffe", "zebra", "wildebeest", "tiger", "lion", "buffalo", "rhinoceros", "warthog", "gorilla", "porcupine", "jackal", "mongoose"];

//choose random word
var computerChoice = [];

//blanks for where letters will go
var spaces = [];


//stores wrong guesses
var wrongGuesses = [];

//create progress variables
var wins = 0;

var losses = 0;

var remainingLetters = computerChoice.length;


var remainingGuesses = 7;

//create variables for text on page and link to html document


var winsText = document.getElementById("wins");

var lossesText = document.getElementById("losses");

var remainingLettersText = document.getElementById("remainingletters");



var remainingGuessesText = document.getElementById("remainingguesses");


//what text on page will say
winsText.innerText = "Wins " + wins;

lossesText.innerText = "Losses " + losses;

remainingGuessesText.innerText = "Remaining Guesses " + remainingGuesses;

remainingLettersText.innerText = "Remaining Letters " + remainingLetters;


//boolean for determining if user guesses are in chosen word
var correctGuess = false;

var previousGuesses = [];



//what happens at beginning of game
function begin() {

    previousGuesses = [];
    wrongGuesses = [];
    document.getElementById("wrongguesses").innerHTML = wrongGuesses.join(" ");
    
    for (var i = 0; i < computerChoice.length; i++) {
        
        var removeLastWord = spaces.pop("__");
        document.getElementById("wordspaces").innerHTML = spaces.join(" ");
    }
    
    computerChoice = words[Math.floor(Math.random() * words.length)];
    console.log(computerChoice);

    for (var a = 0; a < computerChoice.length; a++) {
        spaces.push("__");
        document.getElementById("wordspaces").innerHTML = spaces.join(" ");
    }
    
    remainingLetters = computerChoice.length;
    remainingLettersText.innerText = "Remaining Letters " + remainingLetters;
   
    
    remainingGuesses = 7;
    
    /*if (correctGuess === false) {
        remainingGuesses--;
    }*/
    remainingGuessesText.innerText = "Remaining Guesses " + remainingGuesses;

    $("#background").show();
    $("#correct, #wrong").hide();

    
    
}



//check if user guess in chosen word
function check(userGuess) {
    correctGuess = false;

    
//loop to check for letter in word
    for (var j = 0; j < computerChoice.length; j++) {
        if (computerChoice[j] === userGuess) {
            correctGuess = true;
            remainingLetters--;
           
            
        }
    }


    //what to do if letter found in word
    if (correctGuess) {
        previousGuesses.push(userGuess);
        
        remainingLettersText.innerText = "Remaining Letters " + remainingLetters;
       
        for (var k = 0; k < computerChoice.length; k++) {
            if (computerChoice[k] === userGuess) {
                spaces[k] = userGuess;
                document.getElementById("wordspaces").innerHTML = spaces.join(" ");
                   
            }

        }   
    } 
    
    else {
        remainingGuesses--
        
        remainingGuessesText.innerText = "Remaining Guesses " + remainingGuesses;
        
        previousGuesses.push(userGuess);
       

        wrongGuesses.push(userGuess);
        document.getElementById("wrongguesses").innerHTML = wrongGuesses.join(" ");
        

    }
}

function winAndLose() {

    if (remainingLetters === 0) {
        
        $("#background").hide();
        $("#correct").show();
    }

    if (remainingGuesses === 0) {
        
        $("#background").hide();
        $("#wrong").show();
    }

}

function update() {

    

    if (remainingGuesses === 0) {
    
        losses++;
        lossesText.innerText = "Losses " + losses;
        setTimeout(winAndLose, 1);
        setTimeout(begin, 3000);
        
    }

    

    
    
    if (remainingLetters === 0) {
        wins++;
        winsText.innerText = "Wins " + wins;
        setTimeout(winAndLose, 1);
        setTimeout(begin, 3000);
        
        
    }
    
}




begin();


    
//document.onkeydown = function(userGuess) {
    //var userGuess = event.key.toLowerCase();

    document.onkeydown = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        if (possibleGuesses.indexOf(userGuess) === -1) return;

        if (previousGuesses.indexOf(userGuess) !== -1) return;

    
        while ((remainingLetters > 0) && (remainingGuesses > 0)) {

            check(userGuess);
            break;
            
        }  
        
        update();
        
        
    }
    
   
    

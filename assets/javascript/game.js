

//how to prevent user from guessing same letter more than once

//wins not updating until after reset


//remaining guesses 6 after a loss, but 7 after a win

//better way to get wins to update?? 




//create var letters



var possibleGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

"use strict";

var userGuess = [];



var words = ["dog", "cat", "camel", "elephant", "giraffe", "zebra", "wildebeest", "tiger", "lion", "buffalo", "rhinoceros", "warthog", "gorilla", "porcupine", "jackal", "mongoose"];

//choose random word
var computerChoice = [];

//words[Math.floor(Math.random() * words.length)];

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

    
    
    
   

    console.log(computerChoice);
    

//push underscores for chosen word
    for (var i = 0; i < computerChoice.length; i++) {
        spaces.push("__");
        
        document.getElementById("wordspaces").innerHTML = spaces.join(" ");

    }

    

    

    
}


//check if user guess in chosen word
function check(userGuess) {

    if (userGuess === possibleGuesses) {
        alert("yay");
    }

    correctGuess = false;

    
//loop to check for letter in word
    for (var j = 0; j < computerChoice.length; j++) {
        if (computerChoice[j] === userGuess) {
            correctGuess = true;
            //console.log(correctGuess);
            remainingLetters--
            
        }
    }


    //what to do if letter found in word
    if (correctGuess) {
        previousGuesses.push(userGuess);
        console.log("previous guesses " + previousGuesses);
        
        remainingLettersText.innerText = "Remaining Letters " + remainingLetters;
       
        console.log("remaining letter " + remainingLetters);
        for (var k = 0; k < computerChoice.length; k++) {
            if (computerChoice[k] === userGuess) {
                spaces[k] = userGuess;
                document.getElementById("wordspaces").innerHTML = spaces.join(" ");
                   
            }

        }   
    } 
    
    else {
        remainingGuesses--
        console.log("remaining guesses " + remainingGuesses);
        remainingGuessesText.innerText = "Remaining Guesses " + remainingGuesses;
        console.log("remaining guesses " + remainingGuesses);
        previousGuesses.push(userGuess);
        console.log("previous guesses " + previousGuesses);

        wrongGuesses.push(userGuess);
        document.getElementById("wrongguesses").innerHTML = wrongGuesses.join(" ");
        

    }

    

    if (remainingGuesses === 0) {
       
        losses++;
        console.log("losses " + losses);
        lossesText.innerText = "Losses " + losses;
    }

    

    
    
    if (remainingLetters === 0) {
        winsText.innerText = "Wins " + wins;
        wins++;
        console.log("wins " + wins);
        alert("you win");
        
        
    }

    

    

    
    
    

    

}


function reset() {

    previousGuesses = [];
    console.log("previous guesses " + previousGuesses);
    
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
    console.log(remainingLetters);
    
    remainingGuesses = 7;
    if (correctGuess === false) {
        remainingGuesses--;
    }
    remainingGuessesText.innerText = "Remaining Guesses " + remainingGuesses;

    
    
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


    

   

    if (remainingLetters === 0) {
        
        reset();
    }
    
    if (remainingGuesses === 0) {
        alert("you lose");
        reset();
    }

    
    

}


reset();


    
    




//complete();








    




/*for (var i = 0; i < computerChoice.length; i++) {
    spaces.push("__");
    spaces.toString()
    document.getElementById("wordspaces").innerHTML = spaces.join(" ");
}

var userGuessText = document.getElementById("wrongguesses");

var wins = 0

var losses = 0

var remainingLetters = computerChoice.length;

var remainingGuesses = 5;


var winsText = document.getElementById("wins");

var lossesText = document.getElementById("losses");

var remainingLettersText = document.getElementById("remainingletters");



var remainingGuessesText = document.getElementById("remainingguesses");



winsText.innerText = "Wins " + wins;

lossesText.innerText = "Losses " + losses;

remainingGuessesText.innerText = "Remaining Guesses " + remainingGuesses;

remainingLettersText.innerText = "Remaining Letters " + remainingLetters;




document.onkeydown = function(event) {
    var userGuess = event.key.toLowerCase();
    var correctGuess = false;

    remainingGuesses--;
    

    
    
    for (var j = 0; j < computerChoice.length; j++) {

    if (computerChoice[j] === userGuess) {

        correctGuess = true;
        
       
                
        spaces[j] = userGuess;
        document.getElementById("wordspaces").innerHTML = spaces.join(" ");
        correctGuess = true;
        console.log(correctGuess)
        remainingLetters--
        remainingLettersText.innerText = "Remaining Letters " + remainingLetters;
        console.log("remaining letters " + remainingLetters)
        remainingGuesses = remainingGuesses + 1;
        console.log("remaining guesses " + remainingGuesses)
        
    }

    

    

    

    

    
}

    if (remainingLetters === 0) {
        alert("win");
        wins++
    }

    if (remainingGuesses === 0) {
        alert("lose");
        losses++
    }

    winsText.innerText = "Wins " + wins;

lossesText.innerText = "Losses " + losses;

remainingGuessesText.innerText = "Remaining Guesses " + remainingGuesses;

remainingLettersText.innerText = "Remaining Letters " + remainingLetters;

}


function reset() {
    alert("clicked");
    remainingLettersText.innerText = "Remaining Letters " + remainingLetters;
    
}*/
    

    /*if ((computerChoice === "dog") && (userGuess === "d") || (userGuess === "o") || (userGuess === "g")) {
        alert("correct");
        correctGuess = true;
        console.log(correctGuess)
        
    
}
    else {
        alert("wrong")
        userGuessText.innerText = userGuess
        correctGuess = false
        console.log(correctGuess)

    }

    if (correctGuess === false) {
        userGuessText.innerText = userGuess;
    }
}*/







/*for (var i = 0; i < wordChoice.length; i++) {
    spaces.push("__");
    spaces.toString()
    document.getElementById("wordspaces").innerHTML = spaces.join(" ");
}

for  (var k = 0; k < 5; k++) {
    wrongUserGuesses.push(" ");
    wrongUserGuesses.toString()
    document.getElementById("wrongguesses").innerHTML = wrongUserGuesses.join(" ");
}


document.onkeydown = function(event) {
    var letters = event.key.toLowerCase();



    

    for (var j = 0; j < wordChoice.length; j++) {
        if (wordChoice[j] === letters) {
            spaces[j] = letters;
            document.getElementById("wordspaces").innerHTML = spaces.join(" ");
            correctGuess = true;
            console.log(correctGuess)
            remainingLetters--
            console.log(remainingLetters)
        }

        

        

        

        

        
        

            
            
            
        }
    

        
        

        
    

        

    }*/

    
            
            

        

    
        
      






/*

var remainingLetters = wordChoice.length;

while (remainingLetters > 0) {

    
    
    answerArray.join;
    document.getElementById("userguess").innerHTML = answerArray.join(" ") 

    //alert(answerArray.join(" "));

    var guess = prompt("guess");

    
                
                remainingLetters--;
            }
        }
    }
}

   */ 



/* document.onkeydown = function(event) {
    var letters = event.key.toLowerCase();
    alert("you pressed");

    if ((wordChoice === "cat") && (letters === "t")) {
        alert("correct");
    }
    var compare = [];

    for (i = 0 ; i < wordChoice.length; i++) {
      if (wordChoice[i] === letters)
      compare.push(i);
      compare.toString;
      document.getElementById("guess").innerHTML = compare.join(" ");

    } 

    


}*/

// when computer chooses

// ??/

// display how many letters are in the chosen word*/



  

  

  

  

  


// when user guesses a letter, make it appear in either the word if correct, or in a place for guesses letters


// if correct, choose again

//if wrong, available guesses goes down by one


// continue that until either out of guesses or got the right word


// if out of guesses, display lose and number of losses goes up

// got the word, display win and number of wins goes up

// when user clicks on reset, computer choose another word
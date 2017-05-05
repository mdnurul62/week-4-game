//Crystal Collector game
		//Rules:
		//1. User will be given a randomly selected target number at the starting of the Game.
		//2. There are four different crystals and by clicking on a crystal, User will add a specific amount of points to user's total score.
		//3. User wins the game by matching user's total score to  target number.
		//4. User losses the game if the total score goes above the target number.
		//5. The value of each crystal is hidden from user until user click on it.
		//6. Each time when the game starts, the game will change the values of each crystal.
//===========
//Code:

//To determine variables
//To generate target number between 19 to 120 and display it.
//To generate each crystal's random number between 1 to 12 and store
//To sum up four crystal's number together and display as total score
//To determine wins or losses
//
//
//=============
//Variables
//--------------
//To generate randomly target number



//console.log(crystalValue);
//-------------------
//To generate randomly crystal value
//var crystalValue = Math.floor(Math.random()*13);
//test
//console.log(crystalValue);
//--------------------------
//To store crystal value
//crystalValue = parseInt(crystalValue);
//--------------------
//To assign randomly generated number to each crystal 

//To add crystal value
//var crystalValueCounter = 0;
//crystalValueCounter += crystalValue;
//console.log(crystalValueCounter);
//To display total score
//$("#your-score").text(crystalValueCounter)
//------------------------------


//functions
$(document).ready(function() { 
var targetNumber = 0;
var totalScore = 0;
var crystalValue = [];
var gameOver = false;


function toTargetNumber() {
	var randomTargetNumber = Math.floor(Math.random()*100) + 21;
	if (randomTargetNumber > 18 && randomTargetNumber <= 120) {
		targetNumber = randomTargetNumber;
		$("#target-number").text(targetNumber);
	}
}
toTargetNumber();

function toCrystalValue() {
	
	//console.log(randomNum);
	while (crystalValue.length < 4) {
		var randomNum = Math.floor(Math.random()*12) + 1;
		if(crystalValue.indexOf(randomNum) < 0) {
		crystalValue.push(randomNum);
		}
	}
}

toCrystalValue();




//Main process

	$("#image-1").on("click", function() {
		if (gameOver === false) {
			totalScore = totalScore + crystalValue[0];
			$("#your-score").text(totalScore);
			reset();
		}
	});

	$("#image-2").on("click", function() {
		if (gameOver === false) {
			totalScore = totalScore + crystalValue[1];
			$("#your-score").text(totalScore);
			reset();
		}
	});

	$("#image-3").on("click", function() {
		if (gameOver === false) {
			totalScore = totalScore + crystalValue[2];
			$("#your-score").text(totalScore);
			reset();
		}
	});

	$("#image-4").on("click", function() {
		if (gameOver === false) {
			totalScore = totalScore + crystalValue[3];
			$("#your-score").text(totalScore);
			reset();
		}
	});

	function reset() {
		if (totalScore === targetNumber ) {
			gameOver == true;
			$("#you-win").text("You win!");
			alert("You won the game, play again.");
		}

		else if (totalScore > targetNumber ) {
			gameOver == true;
			$("#you-lose").text("You lose!");
			alert("You lost the game, try again.")
			
		}
	}

	reset();
});




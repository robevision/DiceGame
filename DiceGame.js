function runDiceGame()
{
	tellInitialStory();
	let aggression = buildCharacter();
	let firstAction=chooseActionPanel(aggression);
	testingEvent(firstAction);
}
	

function rollDie(dieSides)
{
	let dieResult=Math.floor(Math.random() * dieSides)+ 1;
	return dieResult;

}
function tellInitialStory()
{
	alert("You use your last coin to your name to board the vessel, 'Keelhauler'.");
	alert("Contrary to what the name suggests, this vessel, Keelhauler, takes you to where you will start your journey as a wanna-be pirate.");
	alert("You have arrived on the island of Melee.")
	alert("Melee Island, tis the land of learned pirates or rather the land of at least three important-looking pirates.")
	alert("Finding these three will be crucial to becoming a pirate.")
}
function buildCharacter()//need to fix. Currently not a function that is applicable
{
	alert("How aggressive will you be at becoming a pirate?")
	let aggressionLevel=prompt("Type how aggressive you will be, type a number from 1 - 4");
	{
		if (aggressionLevel==1)
		{
			console.log("You have chosen a very unmotivated character.");
			alert("Your enthusiasm for this adventure is lower than getting to the bottom of a barrel of rum.");
			aggressionLevel=1
			console.log(aggressionLevel)
			//aggression = discoverAggression(1)
			return aggressionLevel;
		}
		else if (aggressionLevel==2)
		{
			console.log("You have chosen an unmotivated character.");
			alert("My sense is that you find being last place repulsive, however anymore is hard work!");
			console.log(aggressionLevel);
			return aggressionLevel;
			
		}	
		else if (aggressionLevel==3)
		{
			console.log("You have chosen a semi-motivated character.");
			alert("Your parents raised you well, but not quite enough to be the blood thirsty pirate wanna-be you could be.");
			console.log(aggressionLevel);
			return aggressionLevel;
			
		//i want this function to affect the frequency of numbers from the chooseActionPanel function
		}
		else if (aggressionLevel==4)
		{
			console.log("You have chosen a motivated character.");
			alert("With that attitude you'll be on board with Davy Jones in no time!...Erm, that may have been said better.");
			console.log(aggressionLevel);
			return aggressionLevel;
			
		}
		else
		{
			alert("Please enter a value 1 through 4.");
			buildCharacter()
		}
	}
}
//aggressionlevel needs to be a die. Additional die for variance. Add an array pass or push it in. 



function chooseActionPanel(action)
{
	let gamePlayActions;
	let give;
	let use;
	let move;
	let pickup;
	let lookat;
	let talkto;
	let takeActionArray;

	if (action==1)
	{
	let gamePlayActions=["give","give","use","move","pickup","lookat","lookat","lookat","lookat","talkto"];
	let randomAction = takeRandomArray(gamePlayActions);
	return;
	}

	else if (action==2)
	{
	let gamePlayActions=["give","use","move","move","pickup","lookat","lookat","lookat","talkto","talkto"];
	let randomAction = takeRandomArray(gamePlayActions);
	return;
	}
	else if (action==3)
	{
	let gamePlayActions=["give","use","use","move","move","move","move","pickup","pickup","lookat","lookat","talkto","talkto"];
	let randomAction = takeRandomArray(gamePlayActions);
	return;
	}
	else if (action==4)
	{
	let gamePlayActions=["give","use","use","move","move","move","move","move","pickup","pickup","lookat","talkto"];
	let randomAction = takeRandomArray(gamePlayActions);
	return;
	}
	else
	{
	console.log("chooseActionPanel is broken")
	}
}
function selectDialogue()
{


}


// console.log(rollDie("6"));// using the parameter area, you can designate any number side of a die.


function trumpAction()
{
	alert("That didn't seem to do anything, try again.");
	//"That didn't seem to do anything" response when no other command is available.
}
// function chooseMove(move)
// {
// 	if move=("move");
// 	{
// 		rollDie(6)
// 	}
// 	else if move=("Move");
// 	{

// 	}
// }
function chooseGive()
{}
function takeRandomArray(array)
{
	let rand = array[Math.floor(Math.random() * array.length)];
		console.log(rand);
		return;
}

function testingEvent(trigger)
{
	if (trigger="give")
	{
	console.log("true")
	}
	else if (trigger="use")
	{
	console.log("true")
	}
	else if (trigger="move")
	{
	console.log("true")
	}
	else if (trigger="pickup")
	{
	console.log("true")
	}
	else if (trigger="lookat")
	{
	console.log("true")
	}
	else if (trigger="give")
	{
	console.log("true")
	}
	else if (trigger="talkto")
	{
	console.log("true")
	}
	else
	{
		console.log("testingEvent is broken")
	}
}
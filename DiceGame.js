function runDiceGame()
{
tellInitialStory();
buildCharacter();

}
function tellInitialStory()
{
	alert("You use your last coin to your name to board the vessel, 'Keelhauler'.");
	alert("Contrary to what the name suggests, this vessel, Keelhauler, takes you to where you will start your journey as a wanna-be pirate.");
	alert("You have arrived on the island of Melee.")
	alert("Melee Island, tis the land of learned pirates or rather the land of at least three important-looking pirates.")
	alert("Finding these three will be crucial to becoming a pirate.")
}
function buildCharacter()
{
	alert("How aggressive will you be at becoming a pirate?")
	let aggressionLevel=prompt("Type how aggressive you will be, type a number from 1 - 4");
	{
		if (aggressionLevel==1)
		{
			console.log("You have chosen a very unmotivated character.");
			alert("Your enthusiasm for this adventure is lower than getting to the bottom of a barrel of rum.");
		}
		else if (aggressionLevel==2)
		{
			console.log("You have chosen an unmotivated character.");
			alert("My sense is that you find being last place repulsive, however anymore is hard work!");
		}	
		else if (aggressionLevel==3)
		{
			console.log("You have chosen a semi-motivated character.");
			alert("Your parents raised you well, but not quite enough to be the blood thirsty pirate wanna-be you could be.");
		//i want this function to affect the frequency of numbers from the chooseActionPanel function
		}
		else if (aggressionLevel==4)
		{
			console.log("You have chosen a motivated character.");
			alert("With that attitude you'll be on board with Davy Jones in no time!...Erm, that may have been said better.")
		}
		else
		{
			alert("Please enter a value 1 through 4.");
			buildCharacter()
		}
	}
}
function chooseActionPanel()
{
	for(i=0;i < 9;i++)
	{
		//this is for identifying which Action the character will choose.
		/*
		0- give
		1 - pick up  //depending on aggression level give it more or less sides of the dice
		2 - use
		3 - open 
		4 - look at
		5- push
		6- close
		7- talk to
		8-pull
		*/
	}
}
function selectDialogue()
{


}

function rollDie(dieSides)
{
	let dieResult=Math.floor(Math.random() * dieSides)+ 1;
	(console.log(dieResult))
}
console.log(rollDie("6"));// using the parameter area, you can designate any number side of a die.


function trumpAction()
{
	alert("That didn't seem to do anything, try again.");
	//"That didn't seem to do anything" response when no other command is available.
}
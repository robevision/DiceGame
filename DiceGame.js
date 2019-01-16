function runDiceGame()
{
	//INVENTORY
	let splinter=false;

	//
	tellInitialStory();
	let aggression = buildCharacter();
	let firstAction=chooseActionPanel(aggression);
	alert("Now that we've established how enthusiastic you are at being a murdering, self-deprecating, backstabbing, class A certified pirate, let's start exploring the island.");
	let counter=1
	do
	{
	let firstEvent=leaveDock(aggression,firstAction);
	enterTown(aggression,firstEvent);	
	}
	while(firstEvent>1)
	{
	enterTown(aggression,firstEvent);
	}
// 	let activityOne=establishAction(firstAction);
// 	let rollOne=rollDie(6);
// 		{
// 			while (rollOne==1)
// 			{

// 				testingEvent(firstAction);
// 			}
// 		}	
}
	
// 
function pushButton(counter)
{	
	let button = document.getElementById("clickme"),
  count = 0;
	button.onclick = pushButton() 
{
  count += 1;
  button.innerHTML = "Click me: " + count;
}
}

function chooseGive(offer)
{
	alert("You attempt to offer something.")
	let result=rollDie(6);
	return result;
}
function chooseUse()
{
	alert("You attempt to use something.")
	let result=rollDie(6);
	return result;
}

function chooseMove(move)
{
	alert("You attempt to move.")
	if (move=="move")
	{
	let result=rollDie(6);
	return result;
	}
}
function choosePickUp()
{
	alert("You attempt to pickup something.")
	let result=rollDie(6);
	return result;
}

function chooseLookAt()
{
	alert("You attempt to lookat something.")
	let result=rollDie(6);
	return result;
}

function chooseTalkTo()
{
	alert("You attempt to speak.")
	let result=rollDie(6);
	return result;
}
function rollDie(dieSides)
{
	let dieResult=Math.floor(Math.random() * dieSides)+ 1;
	console.log(dieResult);
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
			console.log(aggressionLevel)
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




function selectDialogue()
{


}


// console.log(rollDie("6"));// using the parameter area, you can designate any number side of a die.


function trumpAction()
{
	alert("That didn't seem to do anything, try again.")
	//"That didn't seem to do anything" response when no other command is available.
}

function takeRandomArray(array)
{
	let rand = array[Math.floor(Math.random() * array.length)];
		console.log(rand);
		return rand;
}

function openInventory(item)
{
	if (item=splinter)
	{
		let splinter=true;
		return splinter;
	}	
}

//STORY FUNCTIONS ☄

function leaveDock(action, firstChoice)
{
	let role;
	let newAction;
	let load;
	role="null";

	while(role=="null")
	{
		load=activateAction(firstChoice);
	if (firstChoice=="give" && load >= 3)
	{
		alert("You have nothing to give and no one is around you.")
	}
	else if (firstChoice=="use" && load >= 3)
	{
		alert("You have nothing to use.");
		// role=0;
	}
	else if (firstChoice=="move" && load >= 3)
	{
		alert("You move ahead. Now you stand on the literal edge of the pier. What are you doing?");
		// role=1;
		let secondRoll=load;
		if (secondRoll >= 6) 
		{
		alert("You jump in the water. You can hold your breath for 10 minutes, but cannot swim. Alas as time expires, you expire.")
		endGameByDeath(drown);
		}
		else
		{
		alert("You decide that your life as a dishonorable smelly swashbuckler is worth living and step away from the pier's edge.")
		alert("You move forward towards the dim lights of the town.")
		role=1;
		}
	}
	else if (firstChoice=="pickup" && load >= 3)
	{
		alert("You attempt to pick up whatever is by your feet. Congratulations you have a splinter.");
		let inventoryItem=confirm("would you like to keep the splinter?")
		let choice;
		if (inventoryItem == true) 
		{
  		choice = "You pressed OK!";
		} 
		else 
		{
  		choice = "You pressed Cancel!";
		}
		// role=2
	}
	else if (firstChoice=="lookat" && load >= 3)
	{
		if(load>=3 && load!=6 && load!=5)
		{
		alert("You look. Theres instant regret when your eyes lock on a decaying seagull that has a pocket sized crab living its' life in.")
		}
		else if (load==5 && load!=6) 
		{
		alert("You peer out to sea and wonder what you got yourself into. Maybe you should move on?")
		role=3
		}
		else if(load==6)
		{
		alert("A majestic sight unfolds of two porpoises mating. Although this is a defining moment for you, it results in no advancement to your quest.")
		role=3
		}	
		else
		{

		}
	}
	else if (firstChoice=="talkto" && load >= 3)
	{
		alert("You speak. But no one hears you. Your voice must be heard!");
		// role=4
	}
	else 
	{
		trumpAction()
		firstChoice=chooseActionPanel(action);
	}
	}
	console.log(role);
	console.log("this is the first role for leaveDock");
	return role;
}

function enterTown(action,situation)
{
	let reRoll;

	if (situation==0)
	{
		// alert("I am situation 0")
		// reRoll=chooseActionPanel(action);
		// leaveDock(action,reRoll);
	}
	else if (situation==1) 
	{
		alert("You enter the town.")
		// alert("I am situation 1")
		// reRoll=chooseActionPanel(action);
		// leaveDock(action, reRoll);
	}
	else if (situation==2) 
	{
		// alert("I am situation 2")
		// reRoll=chooseActionPanel(action);
		// leaveDock(action, reRoll);
	}
	else if (situation==3) 
	{
		alert("You notice the dim lights of the town. Should you maybe head off the dock and towards where pirates might be?")
		reRoll=chooseActionPanel(action);
		return leaveDock(action, reRoll);
	}
	else if (situation==4) 
	{
		alert("I am situation 4")
		reRoll=chooseActionPanel(action);
		leaveDock(action, reRoll);
	}
	else if (situation==5) 
	{
		alert("I am situation 5")
		reRoll=chooseActionPanel(action);
		leaveDock(action, reRoll);
	}
}

function enterBar(action)
{

}

function enterBackRoom(action)
{

}

function speakToImportantPirates(action)
{

}


//35 move rolls will get you to win

function endGameByDeath(death)
{

		if (death=="give")
	{
		window.open("C:/Users/theri/OneDrive/Workflow Almanac/Project Files (Misc)/DevCodeCamp/JavaScript/DiceGame/gameover.html");
	}
		else if (death=="drown")
		window.open("C:/Users/theri/OneDrive/Workflow Almanac/Project Files (Misc)/DevCodeCamp/JavaScript/DiceGame/gameover.html");
}

//ACTION FUNCTIONS☆

function activateAction(trigger)
{
	if (trigger=="give")
	{
		let giveAction=chooseGive()
		return giveAction;
	}
	else if (trigger=="use")
	{
		let useAction=chooseUse()
		return useAction;
	}
	else if (trigger=="move")
	{
		let moveAction=chooseMove()
		return moveAction;
	}
	else if (trigger=="pickup")
	{
		let pickUpAction=choosePickUp()
		return pickUpAction;
	}
	else if (trigger=="lookat")
	{
		let lookAtAction=chooseLookAt()
		return lookAtAction;
	}
	else if (trigger=="talkto")
	{
		let talkToAction=chooseTalkTo()
		return talkToAction;
	}
	else
	{
		console.log("activateAction is broken")
	}
}
//function establishAction(action)
// {
// 	let x;
// 	if (action="give")
// 	{
// 		x = chooseGive()
// 	}
// 	else if (action="use")
// 	{
// 		x = chooseUse()
// 	}
// 	else if (action="move")
// 	{
// 		chooseMove()
// 	}
// 	else if (action="pickup")
// 	{
// 		choosePickUp()
// 	}
// 	else if (action="lookat")
// 	{
// 		chooseLookAt()
// 	}
// 	else if (action="talkto")
// 	{
// 		chooseTalkTo()
// 	}
// 	else
// 	{
// 		console.log("establishAction is broken")
// 	}
// 	return x;

// }
function chooseActionPanel(action)
{
	let gamePlayActions;
	let give;
	let use;
	let move;
	let pickup;
	let lookat;
	let talkto;

	if (action==1)
	{
	let gamePlayActions=["give","give","use","move","pickup","lookat","lookat","lookat","lookat","talkto"];
	let randomAction = takeRandomArray(gamePlayActions);
	return randomAction;
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
	return randomAction;
	}
	else if (action==4)
	{
	let gamePlayActions=["give","use","use","move","move","move","move","move","pickup","pickup","lookat","talkto"];
	let randomAction = takeRandomArray(gamePlayActions);
	return randomAction;
	}
	else
	{
	console.log("chooseActionPanel is broken")
	}
}

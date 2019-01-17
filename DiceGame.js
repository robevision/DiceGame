function runDiceGame()
{
	//INVENTORY
	let splinter=false;
	let pebble=false;

	//
	let pushStory;
	let secondEvent;
	tellInitialStory();
	let aggression = buildCharacter();
	let firstAction=chooseActionPanel(aggression);
	alert("Now that we've established how enthusiastic you are at being a murdering, self-deprecating, backstabbing, class-A certified pirate, let's start exploring the island.");
	let counter=1
	let firstEvent;
	let pushEvent;
	firstEvent=leaveDock(aggression,firstAction,pushStory);		
	secondEvent=enterTown(aggression,firstEvent);
	alert("Upon entering the establishment listed simply as SCUMM Bar, you notice a whole slew of vagrants and lots of rum.")
	alert("You attempt to look at something.")
	alert("Staring amongst the crowd, you stick out like a sore thumb. You might want to make friends with at least one character before you're dead.")
	enterBar(aggression,secondEvent,pushEvent);
	// pushEvent=changeKnowledge()
	// enterBar(aggression,secondEvent,pushEvent)


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
	let result=rollDie(8);
	return result;
}
function chooseUse()
{
	alert("You attempt to use something.")
	let result=rollDie(4);
	return result;
}

// function chooseMove(move)
// {
// 	let result;
// 	alert("You attempt to move.")
// 	let chance=rollDie(50)
// 		if(chance%=2)
// 		{
// 			result=rollDie(20)
// 			return result;
// 		}
// 		else if(chance%=4)
// 		{
// 			result=rollDie(30)
// 			return result;
// 		}
// 		else if(chance%10)
// 		{
// 			result=rollDie(40)
// 			return result;
// 		}
// 		else
// 		{
// 		result=rollDie(10);
// 		}
// 	return result;
// }
function chooseMove(move)
{
	alert("You attempt to move.")
	let result=rollDie(20);
	return result;
}

function choosePickUp()
{
	alert("You attempt to pick up something.")
	let result=rollDie(10);
	return result;
}

function chooseLookAt()
{
	alert("You attempt to look at something.")
	let result=rollDie(12);
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
	let aggressionLevel;
	{
		while(aggressionLevel==undefined || aggressionLevel==NaN ||aggressionLevel>4 || aggressionLevel=="")
		{
		alert("How aggressive will you be at becoming a pirate?")
		let aggressionLevel=prompt("Type how aggressive you will be, type a number from 1 - 4");
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
		}
		}
	}
}
//aggressionlevel needs to be a die. Additional die for variance. Add an array pass or push it in. 




function selectDialogue(character)
{
	let known;
	let groggyFellow;
	let important;
	let manCombSeepGood;
	
	if(character=="groggyFellow")
	{
		alert("Me:'Good eve, enjoying the refreshments, sir?'")
		alert("Groggy Fellow: 'Hrrrmmph'")
		alert("Me:'Any chance you could direct me to a certain three pirates?'")
		alert("Groggy Fellow:'Harralaphmmph. Hrrm'")
		alert("It seems the stranger is in no capacity to speak at the moment.")
	}
	else if(character=="manCombSeepGood")
	{
		alert("stranger:'Well hi, son.'")
		alert("stranger:'What brings a traveller like you to Melee Island?'")
		alert("Me:'Good eve, as a matter of fact, I'm out here to become a pirate.'")
		alert("stranger:'A pirate?! Ha! Why how are the likes of you thinkin you'll be a pirate?'")
		alert("Me:'Well, I seek three important-looking pirates. Rumor has it, they have the knowledge that can turn the fanciest of boys into a cutthroat marauder.'")
		alert("stranger:'Well then! Sounds like you have quite a plan thought out! If you seek who I be thinkin they be. I'd look over behind that curtain in the back room.'")
		alert("You peer over to the location that the stranger mentioned.")
		alert("Me:'why thank you!'")
		alert("stranger:'What's your name by the way?")
		alert("Me:'It's Guybrush Threepwood.'")
		alert("stranger:'Bah! Why that's the stupidest name if I ever heard one. Well hope that all works out for you. If you ever need to find me, the names Mancomb Seepgood.'")
		alert("Guybrush moves toward the back, past the curtain...")
		window.open("C:/Users/theri/OneDrive/Workflow Almanac/Project Files (Misc)/DevCodeCamp/JavaScript/DiceGame/successscreen.html");
		// changeKnowledge("known");

	}	
	else if(character==important)
	{
	window.open("C:/Users/theri/OneDrive/Workflow Almanac/Project Files (Misc)/DevCodeCamp/JavaScript/DiceGame/successscreen.html");
	}

}

function changeKnowledge(unknown)
{
	let known;
	if (unknown=="known")
	{
	unknown=true;
	return unknown;
	}
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
	if(item="null")
	{
		//want to do an inquery of items. probably need to make and array and push new items to the array. depending on the length of array would come out as true or false.
	}
	
	else if(item=splinter)
	{
		let splinter=true;
		return splinter;
	}
	else if(item=pebble)
	{
		let pebble=true;
		return pebble;
	}
}

//STORY FUNCTIONS ☄

function leaveDock(action, firstChoice, pushStory)
{
	let giveCounter=0;
	let lookAtCounter=0;
	let inventory=false;
	let moveCounter=0;
	let talkToCounter=0;
	let useCounter=0;
	let role;
	let newAction;
	let load;
	role="null";

	while(role=="null")
	{
		load=activateAction(firstChoice);
	if (firstChoice=="give" && load >= 3)
	{
		if(giveCounter>=0 && giveCounter!=8)
		{
		alert("You have nothing to give and no one is around you.")
		}
		else if(giveCounter>=4)
		{
		alert("You have successfully given away all you have to your name, YOUR LIFE. The End.");
		endGameByDeath("give");
		}
	giveCounter++;
	}
	else if (firstChoice=="use" && load >= 3)
	{
		let useCounter=0;
		if(useCounter==0)
		{
		alert("You have nothing to use.");
		// role=0;
		}
		else if(useCounter>=1)
		alert("There really is nothing to use. You literally have nothing.")
		else if(inventory==true && useCounter==3)
		{
		alert("You attempt to use the splinter, but it once again gets lodged in your finger whilst trying to retrieve it.")
		}
		else
		{
		alert("You have nothing to use.")
		}
		useCounter++;
	}
	else if (firstChoice=="move" && load >= 4)
	{
		if (load>=4 && moveCounter<1) 
		 // 	
		{
		alert("You make your way down the dock from where you exited the ship.")
		firstChoice=chooseActionPanel(action);
		}
		else if (load>=5 && moveCounter<1)
		{
		alert("You make your way to the end of the dock. You see lights in the distance.")
		firstChoice=chooseActionPanel(action);
		}
		else if (load>=6 && moveCounter>1)
		{
		alert("You move ahead. Now you stand on the literal edge of the pier. What are you doing?");
		// role=1;
			let secondRoll=activateAction(action);
			if (secondRoll==8 || moveCounter>7)
			{
			alert("You jump in the water. You can hold your breath for 10 minutes, but cannot swim. Alas as time expires, you expire.")
			endGameByDeath("drown");
			}
			else
			{
			alert("You decide that your life as a dishonorable smelly swashbuckler is worth living and step away from the pier's edge.")
			alert("You move forward towards the dim lights of the town.")
			role=1;
			}
		}

	moveCounter++;
	}
	else if (firstChoice=="pickup" && load >= 4)
	{
		alert("You attempt to pick up whatever is by your feet. Congratulations you have a splinter.");
		let inventoryItem=confirm("would you like to keep the splinter?")
		let choice;
		if (inventoryItem == true) 
		{
			let splinter;
			openInventory(splinter);
  			alert("You've added a splinter into your inventory. Try not to lose it in your pocket.")
  			inventory=true;
		} 
		else 
		{
  			alert("Once you take the splinter out of your hand, you discard it. No regrets. It was a splinter.")
		}
		role=2
	}
	else if (firstChoice=="lookat" && load >= 3)
	{
		
		if(load>=3 && load!=6 && load!=5)
		{
		alert("You look. Theres instant regret when your eyes lock on a decaying seagull that has a pocket sized crab living its' life inside.")
		}
		else if (load==5 && load!=6) 
		{
		alert("You peer out to sea and wonder what you got yourself into. Maybe you should move on?")
		role=3
		}
		else if(load==12)
		{
		alert("A majestic sight unfolds with two porpoises mating. Although this is a defining moment for you, it results in no advancement to your quest.")
		role=3
		}	
		else if (lookAtCounter>4)
		{
		role=3
		}
		lookAtCounter++
	}
	else if (firstChoice=="talkto" && load >= 3)
	{
		if (load<=5) 
		{
		alert("You speak. But no one hears you. Your voice must be heard!");
		// role=4
		}
		else if (load==6 || talkToCounter>1)
		{
		alert("You yell for a sign of life on this island! Your voice echoes off the buildings over yonder. Turns out there is a town literally to your west.")
		role=4;
		}
		talkToCounter++
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
	let talkToCounter=0;
	let pickUpCounter=1;
	let pebble;
	let role;
	let reRoll;
	let secondRoll;
	if (situation==1) 
	{
		alert("You enter the town.")
		alert("As you look around you notice a number of residents wandering about the square.")
		// reRoll=chooseActionPanel(action);
		role="null";
		while(role=="null")
		{
			reRoll=chooseActionPanel(action);
			load=activateAction(reRoll);
			if (reRoll=="give" && load >= 7)
			{
			openInventory("null")
			alert("What are you giving? The pirate way is to loot and pillage. Very unbecoming to give.")
			}
			else if (reRoll=="move" && load >= 3)
			{
				if (load>=3)
				{	
					alert("You move forward. Standing in the middle of the square feels fairly awkward.");
					// role=1;
					secondRoll=activateAction(reRoll);
				}
					if (secondRoll>=17) 
					{
					alert("You head towards a loud parlor on the edge of town. The sounds of smashing plates, foul language, and accordian playing leads you to the assumption there must be pirates there.")
					role=1
					}
				else
				{
				activateAction(reRoll);
				}
			}
			else if (reRoll=="pickup" && load >= 3)
			{
			
				if(pickUpCounter==1)
				{
					alert("You pickup a pebble.");
					openInventory(pebble);
					alert("You've added a pebble into your inventory.")
				}
			
				else if (pickUpCounter>1)
				{
					alert("There is nothing to pick up.")
				}
			pickUpCounter++;	
			}
			else if (reRoll=="lookat" && load >= 3)
	{
		if(load>=3 && load!=6 && load!=5)
		{
			alert("Theres a building outside of the light off in a corner of the town that loud music and degeneracy is taking place.")
		}
		else if (load==5 && load!=6) 
		{
		alert("Various shops seem to be still open, but most commerce has ended by this hour.")
		role=3
		}
		else if(load==17)
		{
		alert(".")
		role=3
		}	
		else
		{

		}
		}
			else if (reRoll=="talkto" && load >= 3)
			{
				
				if(talkToCounter==0)
				{	
				alert("You try to catch someone with a hello, but everyone around you are too busy to care.");
				// role=4
				}
				else if (talkToCounter>3) 
				{
				alert("You successfully got the attention of a real pirate! You ask politely how the pirate got his start. The pirate draws his sword!")
				endGameByDeath("sword");
				}
			talkToCounter++;	
			}
		else 
		{
		trumpAction()
		reRoll=chooseActionPanel(action);
		}
		}
	}
	else if (situation==2) 
	{	let situationTwoCounter=1
		while(situationTwoCounter<2)
		{
		alert("Since your luck has granted you a splinter literally right off your ship on this island, perhaps moving on from the pier would be a good idea.")
		reRoll=chooseActionPanel(action);
		leaveDock(action, reRoll);
		situationTwoCounter++;
		}
		alert("After getting two splinters from the pier you decide to head to something that's not wood.")
		alert("You decide to go into the town to your west. It is at night, but there still seems to be a lot of commotion.")
		enterTown(action,1);
	}
	else if (situation==3) 
	{	let situationThreeCounter=1
		while(situationThreeCounter<2)
		{	
		alert("You notice the dim lights of the town. Should you maybe head off the dock and towards where pirates might be?")
		reRoll=chooseActionPanel(action);
		leaveDock(action, reRoll);
		situationThreeCounter++
		}
		alert("You've really seen enough. You decide to head towards the dim lights you noticed earlier.")
		enterTown(action,1);
	}
	else if (situation==4) 
	{
		alert("After awkwardly discovering the town after exclaiming your frustration, you decide to head to the town.")
		enterTown(action,1);
	}
	
	return role;
}	

function enterBar(action,situation,response)
{
	let giveCounter=0;
	let moveCounter=0;
	let talkToCounter=0;
	let useCounter=0;
	let important;
	let reRoll;
	let load;
	let backroomKnowledge=false
	let groggyFellow;
	let manCombSeepGood;
	if (response==true) 
	{
		backroomKnowledge=true;
	}
 	let role="null";

		while(role=="null")
		{
			console.log("tally", talkToCounter)
			console.log("tally", moveCounter)
			reRoll=chooseActionPanel(action);

			load=activateAction(reRoll);

			if (reRoll=="give" && load >= 7)
			{
					
					if(giveCounter==0)
					{
						alert("A fellow addresses you and seeks financial gain from your pockets. As he realizes you have nothing to offer he begins to leave his chair.")
						alert("An altercation seems iminent.")
						reRoll;
						if (reRoll=="move")
						{
						alert("You prepare for the worst. A fist is hurled at you. The punch is dodged quite easily as the patron is now on the floor passed out from intoxication.")
						}
						else if (reRoll!="move")
						{
						alert("This man stands to his feet and heads toward you. You stutter at what to do. Fortunately standing your ground left him on the floor faster than you.")
						alert("It seems the hard liquor is offering an advantage to some lacking departments you may have.")
						}
					else if(giveCounter>=0 && giveCounter!=8)
					{
					alert("As with the whole time on Melee Island, you have nothing. So there is nothing to give.")
					}
					else if(giveCounter>=3)
					{
					alert("You have successfully given away all you have to your name, YOUR LIFE. The End.");
					endGameByDeath("give");
					} 
					}
			giveCounter++;
			}
			else if (reRoll=="move" && load >= 7)
			{
					
					if(moveCounter==0)
					{
					alert("You wander around the room, but feel threatened if you make too many sudden movements.")
					}
					else if(moveCounter!=0)
					{
					alert("You seek out important looking pirates, but none look especially...special.")
					}
					else if(moveCounter>4)
					{
					alert("You notice a back area of the bar. You decide to investigate.")
					role=1
					}
					else if(moveCounter!=0 && backroomKnowledge==true)
					{
					alert("You move to the back area of the bar to find the important-looking pirates.")
					role=1
					}
			moveCounter++;
			}
			else if (reRoll=="pickup" && load >= 7)
			{
					let pickUpCounter=0;
					if(pickUpCounter==0)
					{

					}
			}
			else if (reRoll=="lookat" && load >= 7)
			{
					let lookAtCounter=0;
					if(lookAtCounter==0)
					{

					}
			}
			else if (reRoll=="talkto" && load >= 3)
			{
					
					if(talkToCounter==0)
					{
					alert("You turn towards the first person you spotted not necessarily wanting to kill you.")
					selectDialogue("groggyFellow");
					}
					else if (talkToCounter>0) 
					{
					alert("A jolly fellow in the corner just finished his story of the high seas. Maybe he could help you find what you are looking for?")
					selectDialogue("manCombSeepGood");
					let accessBackRoom=(backroomKnowledge=true);
					}
			talkToCounter++
			}
			else if (reRoll=="use" && load >= 7)
			{
					
					if(useCounter==0)
					{

					}
			}
			else
			{
			trumpAction()
			reRoll=chooseActionPanel(action);
			}
		}	
}

// function enterBackRoom(action)
// {

// }

function speakToImportantPirates(action)
{
	let important;
	selectDialogue(important)
}


//35 move rolls will get you to win

function endGameByDeath(death)
{
	let give;
	let drown;
	let sword;

		if (death=="give")
		{
		window.open("C:/Users/theri/OneDrive/Workflow Almanac/Project Files (Misc)/DevCodeCamp/JavaScript/DiceGame/gameover-give.html");
		}
		else if (death=="drown")
		{
		window.open("C:/Users/theri/OneDrive/Workflow Almanac/Project Files (Misc)/DevCodeCamp/JavaScript/DiceGame/gameover-drowned.html");
		}
		else if (death=="sword")
		{
		window.open("C:/Users/theri/OneDrive/Workflow Almanac/Project Files (Misc)/DevCodeCamp/JavaScript/DiceGame/gameover-sword.html");
		}
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
	return randomAction;
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


//BROKEN STORY FUNCTION
// function enterTown(action,situation)
// {
// 	let role;
// 	let reRoll;

// 	if (situation==0)
// 	{
// 		// alert("I am situation 0")
// 		// reRoll=chooseActionPanel(action);
// 		// leaveDock(action,reRoll);
// 	}
// 	else if (situation==1) 
// 	{
// 		alert("You enter the town.")
// 		alert("As you look around you notice a number of residents wandering about the square.")
// 		reRoll=chooseActionPanel(action);
// 			while(role=="null")
// 			{
// 			load=activateAction(reRoll);
// 				if (firstChoice=="give" && load >= 3)
// 				{
// 				openInventory("null")
// 				alert("What are you giving? The pirate way is to loot and pillage. Very unbecoming to give.")
// 				}
// 				else if (firstChoice=="use" && load >= 3)
// 				{
// 				alert("You have nothing to use.");
// 				// role=0;
// 				}
// 				else if (firstChoice=="move" && load >= 1)
// 				{
// 					if (load<=3)
// 					{	
// 					alert("You move forward. Standing in the middle of the square feels fairly awkward.");
// 					// role=1;
// 					}
// 				let secondRoll=load;
// 					else if (secondRoll >=4) 
// 					{
// 					alert("You head towards a loud parlor on the edge of town. The sounds of smashing plates, foul language, and accordian playing leads you to the assumption there must be pirates there.")
// 					role=1
// 					}
// 					else
// 					{
// 					alert(".")
// 					alert(".")
// 					role=1;
// 					}
// 				}
// 	}
// 		else if (firstChoice=="pickup" && load >= 3)
// 		{
// 			alert(".");
// 			let inventoryItem=confirm("")
		
// 		}
// 		//lookat scope---->//
// 		else if (firstChoice=="lookat" && load >= 3)
// 		{
// 			if(load>=3 && load!=6 && load!=5)
// 			{
// 			alert("Theres a building outside of the light off in a corner of the town that loud music and degeneracy is taking place.")
// 			}
// 			else if (load==5 && load!=6) 
// 			{
// 			alert(".")
// 			role=3
// 			}
// 			else if(load==6)
// 			{
// 			alert(".")
// 			role=3
// 			}	
// 			else
// 			{

// 			}
// 		}
// 		//<-----lookat scope//
// 		//talkto scope----->//
// 		else if (firstChoice=="talkto" && load >= 3)
// 		{
// 			alert("You try to catch someone with a hello, but everyone around you is too busy to care.");
// 			// role=4
// 		}
// 		else 
// 		{
// 			trumpAction()
// 			firstChoice=chooseActionPanel(action);
// 		}
// 		//<-----talkto scope//
// 		console.log(role);
// 		console.log("this is the first role for leaveDock");
// 		return role;
// 		}
		
// 	}
// 	else if (situation==2) 
// 	{
// 		alert("Since your luck has granted you a splinter literally right off your ship on this island, perhaps moving on from the pier would be a good idea.")
// 		reRoll=chooseActionPanel(action);
// 		leaveDock(action, reRoll);
// 	}
// 	// else if (situation==3) 
// 	// {
// 	// 	alert("You notice the dim lights of the town. Should you maybe head off the dock and towards where pirates might be?")
// 	// 	reRoll=chooseActionPanel(action);
// 	// 	return leaveDock(action, reRoll);
// 	// }
// 	// else if (situation==4) 
// 	// {
// 	// 	alert("I am situation 4")
// 	// 	reRoll=chooseActionPanel(action);
// 	// 	leaveDock(action, reRoll);
// 	// }
// 	// else if (situation==5) 
// 	// {
// 	// 	alert("I am situation 5")
// 	// 	reRoll=chooseActionPanel(action);
// 	// 	leaveDock(action, reRoll);
// 	// }
// }
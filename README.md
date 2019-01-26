# Every Day Kitchen
A vintage recipe game for improving the memory


## Assets: 
### Screens: 
* Kitchen 
* Tablet PC 
* Ingredient Shelf
* Cooking Pot
#### Optional: 
* Score Screen
* Tutorial Screen (Textboxes added to the first pasta level)

### Ingredients
see below

### Graphics
* Hand Cursor
* Cracked screen layer for tablet
* Inkstains
	
### Music
* Background music
### Optional: 
#### Graphical:
* Fire effect for burned hand
* burned hand cursor
* cheering sound for successfully cooked meal
* Disappointed sound for unsuccessful meal
* happy family (part of successful score screen)
* unhappy family / lonely dude (part of losing screen)
		
#### Sound: 
* Gulp sound effect for dropping into the pot
* Rattling sound for starting shelf screen
* Page turning sound for opening up the tablet 
* Boiling background sound for Pot screen
* Pickup sound for Shelf items

			 

## Hardships: 
* Recipe has ink-stains covering part of the ingredients name (old photographed recipe, lvl 2)
* Recipe changed slightly at the end of the recipe (lvl 3)
* Broken tablet screen (lvl 4)
* Burned hand (lvl 5)
		

## Shelf ingredients with in-game names:

* Pasta
* Ground Meat
* ...Bread?
* Tomatoes
* Broccoli
* Bird Parts
* Bell Pepper
* Purple Thing (Eggplant)
* Cheese


### optional:

* Grasshoppers
* Ketchup
* Meat Sticks (sausages)


## Levels
We do a total of 5 Levels (if thats cool)


## Game logic
### Dish name / Recipe / Heat to cook / Threshold to beat the level:

1. Pasta with Ragù alla bolognese / Pasta, Tomato, Ground Meat/ 4 / 3
2. Gratinated Eggplant / Eggplant, Cheese, Cheese,Tomatoes / 3 / 4
3. Royal Grilled Cheese Sandwich n´ Dip / Bread, Cheese, Cheese, Bread, Tomatoes / 4 / 4
4. Stuffed Quail with "mystery" sauce / Bird parts, Bird parts, Bell pepper, Eggplant, Tomatoes / 3 / 4 or 5
5. Stu´s Asian Stew / Ground meat, Bird parts, Onion, Broccoli, Ground Meat, Bell pepper / 5 / 5


### Scoring system:

* per too many, too few, false ingredient: -1
* Correct ingredient: +1
* wrong order item: -0.5
  
  Compared to threshold of the level. If lower -> repeat level
  
  In terms of implementation, maybe do the following: 
1. Create 3 arrays. The first contains the ingredients the player put into the pot. The second and third have the required ingredients in order. 
2. Iterate over the first array, and check if the corresponding indizes are the same item (for checking the correct order. array1[0] == array2[0], array1[1] == array2[2].. etc.). If the items are the same, do nothing. If they are not, lower Score by -0.5. Beware of null entries not being the same as other null entries! I dont know what js is returning there. 
3. Per item of the first array iterated, look if the third array contains the wanted item. If it does, raise score by +1 and remove the item from the third array. If an item from the first array is not found in the third array while iterating, lower score by -1.
4. Compare the final score to the score threshold of the dish of the level


# Running the project

* Install Python interpreter (Make sure it is in $PATH if windows)
* If it is Python 2 open terminal/command prompt and run
   `python -m SimpleHTTPServer`
* Or if interpreter is Python 3, run
   `python3 -m http.server`

Now it should start a server at http://localhost:8000

Run that terminal in background. Whenever you make any changes to code, refresh the browser!

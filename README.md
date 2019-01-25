# Every Day Kitchen
A vintage recipe game for improving the memory


## Assets: 
### Screens: 
Kitchen, Tablet PC, Ingredient Shelf, Cooking Pot, Optional: Score Screen, Tutorial Screen (Textboxes added to the first     pasta level)
### Ingredients
see below
	Hand Cursor
	Cracked screen layer for tablet
	Inkstains
	
### Music
	Background music
### Optional: 
#### Graphical:
			..* Fire effect for burned hand
			..* burned hand cursor
			..* cheering sound for successfully cooked meal
			..* happy family (part of successful score screen)
			..* unhappy family / lonely dude (part of losing screen)
		
		Sound: 
			..* Gulp sound effect for dropping into the pot
			..* Rattling sound for picking up ingredients
			..* page turning sound for opening up the tablet 
			 

Hardships: 
		..* Recipe changed slightly at the end of the recipe (lvl 3)
		..* Broken tablet screen (lvl 4)
		..* Recipe has ink-stains covering part of the ingredients name (old photographed recipe, lvl 2)
		..* Burned hand (lvl 5)
		

Shelf ingredients with in-game names:

..* Pasta
..* Ground Meat
..* ...Bread?
..* Broccoli
..* Butter
..* Mint
..* Bird Parts
..* That ghastly root (ginger)
..* Bell Pepper
..* Purple Thing (Eggplant)
..* Flour
..* Onion
..* Cheese

optional:

..* Grasshoppers
..* Ketchup
..* Meat Sticks (sausages)


### Levels
5 Levels


### Game logic / game mechanics / data
#### Dish name / Recipe / Heat / Threshold:

Pasta with Ragù alla bolognese / Pasta, Tomato, Ground Meat/ 4 / 3
Ratatouille / Squash, Tomato, Zucchini, Eggplant/ 3 / 4
Royal Grilled Cheese Sandwich / Bread, Cheese, Bread, Tomatoes, Mint / 4 / 4
Stuffed Quail with "mystery" sauce / Butter, Flour, Mint, Wine, Bird parts, Bird parts, Bell pepper / 3 / 4 or 5
Stu´s Asian Stew / Ground meat, Bird parts, onion, Broccoli, Ginger, Bell pepper / 5 / 5


#### Scoring system:

	..* per too many, too few, false ingredient: -1
	..* Correct ingredient: +1
	..* wrong order item: -0.5
  
  Compared to threshold of the level. If lower -> repeat level

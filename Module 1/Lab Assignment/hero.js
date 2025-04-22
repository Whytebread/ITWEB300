class SuperHuman {
	constructor(name, powerLevel) {
		this.name = name;
		this.powerLevel = powerLevel;
	}
}

// Define SuperHero and SuperVillain classes here
// Create SuperHero and SuperVillain classes that extend the SuperHuman class. Both classes should have a constructor that has name, alias, and powerLevel parameters, and the constructor should call the parent class' constructor with the given name and powerLevel.

// Add a battle() method to the SuperHero class that has a SuperVillain parameter. battle() should return true if the hero's powerLevel is >= the villain's powerLevel, false otherwise.

// Add an getEvilChuckle() method to the SuperVillain class that returns the string "Ha ha ha!".

class SuperHero extends SuperHuman {
	constructor(name, alias, powerLevel) {
		super(name);
		super(powerLevel);
		alias = this.alias;

	}
		battle(SuperVillain) {
			if (SuperHero.powerLevel >= SuperVillain.powerlevel) {
				return true;
			 } else {
				return false;
			 }
		}
	}



class SuperVillain extends SuperHuman {
	constructor(name, alias, powerLevel) {
		super(name);
		super(powerLevel);
		alias = this.alias;
	}
	getEvilChuckle() {
		return "Ha ha ha!";
	}
}

const heroes = {
	"Super Bacon": new SuperHero("Jack Oinker", "Super Bacon", 2),
	"Flat-Man": new SuperHero("Peter Pranker", "Flat-Man", 5),
	"Mighty Woman": new SuperHero("Diana Dense", "Mighty Woman", 8),
	"Captain Marvelous": new SuperHero("Carol Hangers", "Captain Marvelous", 9)
};

const villains = {
	"The Jokester": new SuperVillain("Jack Nastier", "The Jokester", 3),
	"Magnet Man": new SuperVillain("Max Eisenhardt", "Magnet Man", 6),
	"Lex Loner": new SuperVillain("Lex Loner", "Lex Loner", 2),
	"Thankos": new SuperVillain("Thankos", "Thankos", 9)
};

registerHandlers();

function registerHandlers() {
	// Detect selection of hero and villain
	document.querySelector("#heroSelect").addEventListener("change", selectionChanged);
	document.querySelector("#villainSelect").addEventListener("change", selectionChanged);

	selectionChanged();
}

function selectionChanged() {
	const selectedHeroValue = document.querySelector("#heroSelect").value;
	const selectedVillainValue = document.querySelector("#villainSelect").value;

	// Get hero and villain selected
	const selectedHero = heroes[selectedHeroValue];
	const selectedVillain = villains[selectedVillainValue];

	// Your code goes here


	document.getElementById("winner").innerHTML = "Winner: " + 
}

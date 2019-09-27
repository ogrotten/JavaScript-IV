/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/* function GameObject(attr){
	this.createdAt = attr.createdAt;
	this.name = attr.name;
	this.dimensions = attr.dimensions;
}
	GameObject.prototype.destroy = function() {
		return `${this.name} was removed from the game.`;
	} */

class GameObject {
	constructor(attr) {
		this.createdAt = attr.createdAt;
		this.name = attr.name;
		this.dimensions = attr.dimensions;
	}

	destroy() {
		return `${this.name} was removed from the game.`;
	}
}

/* function CharacterStats(attr) {
	this.healthPoints = attr.healthPoints;
}
	CharacterStats.prototype = Object.create(GameObject.prototype);
	CharacterStats.prototype.takeDamage = function(){
		return `${this.name} took damage.`;
	} */

class CharacterStats extends GameObject {
	constructor(attr) {
		super(attr);
		this.healthPoints = attr.healthPoints;
	}

	takeDamage = function() {
		return `${this.name} took damage.`;
	};
}

/* function Humanoid(attr){
	this.team = attr.team;
	this.weapons = attr.weapons;
	this.language = attr.language;
	GameObject.call(this, attr);
	CharacterStats.call(this, attr);
}
	Humanoid.prototype = Object.create(CharacterStats.prototype)

	Humanoid.prototype.greet = function() {
		return `${this.name} offers a greeting in ${this.language}.`
	} */

class Humanoid extends CharacterStats{
	constructor(attr) {
		super(attr);
		this.team = attr.team;
		this.weapons = attr.weapons;
		this.language = attr.language;
	}
	greet() {
		return `${this.name} offers a greeting in ${this.language}.`
	}
}


const mage = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 1,
		height: 1
	},
	healthPoints: 5,
	name: "Bruce",
	team: "Mage Guild",
	weapons: ["Staff of Shamalama"],
	language: "Common Tongue"
});

const swordsman = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 2,
		height: 2
	},
	healthPoints: 15,
	name: "Sir Mustachio",
	team: "The Round Table",
	weapons: ["Giant Sword", "Shield"],
	language: "Common Tongue"
});

const archer = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4
	},
	healthPoints: 10,
	name: "Lilith",
	team: "Forest Kingdom",
	weapons: ["Bow", "Dagger"],
	language: "Elvish"
});


/*
function Villain(attr){
	this.lair = attr.lair;
	this.victimCount = attr.victimCount;
	this.adjective = attr.adjective;
	Humanoid.call(this, attr);
}
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.evile = function() {
	return `${this.name} the ${this.adjective} murders ${this.victimCount} babies in ${this.lair}.`
}
*/

class Villain extends Humanoid{
	constructor(attr){
		super(attr);
		this.lair = attr.lair;
		this.victimCount = attr.victimCount;
		this.adjective = attr.adjective;
	}
	evile() {
		return `${this.name} the ${this.adjective} murders ${this.victimCount} babies in ${this.lair}.`
	}
}

const baddie = new Villain ({
	createdAt: new Date(),
	healthPoints: 10,
	name: "Milton",
	team: "Der",
	weapons: ["Axe of Hell"],
	language: "Stthmgol",

	adjective: "Mad",
	victimCount: 1741,
	lair: "The Village of the Damned"
})


console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch
console.log(baddie.evile()); 


// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.

/*  */

// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

// CODE here for your Lambda Classes
class LambdaPrime {
	constructor(attr) {
		this.name = attr.name;
		this.age = attr.age;
		this.location = attr.location;
	}
	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}.`;
	}
}

class Instructor extends LambdaPrime {
	constructor(attr) {
		super(attr);
		this.specialty = attr.specialty;
		this.favLang = attr.favLang;
		this.catchPhrase = attr.catchPhrase;
	}
	demo(subj) {
		return `Today we are learning about ${subj}.`;
	}
	grade(student, subj) {
		return `${student.name} receives a perfect score on ${subj}`;
	}
}

class Student extends LambdaPrime {
	constructor(attr) {
		super(attr);
		this.prevBG = attr.prevBG;
		this.className = attr.className;
		this.favSubj = attr.favSubj;
	}
	listsSubjs() {
		let subjList = ""
		this.favSubj.forEach(e => {
			subjList += `${e}, `;
		})
		return `${this.name} faves are ${subjList.slice(0,-2)}.`
	}
	PRAssignment(subj) {
		return `the ${this.name} has submitted a PR for ${subj}`
	}
	sprintChallenge(subj) {
		return `the ${this.name} has begun sprint challenge on ${subj}`
	}
}

class ProjectMgr extends Instructor {
	constructor(attr) {
		super(attr);
		this.gradClassName = attr.gradClassName;
		this.favInstructor = attr.favInstructor;
	}
	standup(chan) {
		return `${this.name} announces to ${chan}, "${this.catchPhrase} so @channel standy times!​​​​​"`
	}
	debugsCode(who) {
		return `${this.name} debugs ${who.name}'s code on ${this.specialty}.`
	}
}

const entity = new LambdaPrime({
	name: "Suriel",
	age: 999,
	location: "the outer planes of Lerotharl."
})

const teacher = new Instructor({
	name: "Bob Loblaw",
	age: 32,
	location: "Uruguay",
	specialty: "punch cards",
	favLang: "Fortran",
	catchPhrase: "let's do some damage"
})

const pupil = new Student({
	name: "Kid Thrid",
	age: 143,
	location: "Vietnam",
	prevBG: "chimneysweep",
	className: "Interior Design 417",
	favSubj: ["table styles", "food design", "table manners"]
})

const mgr = new ProjectMgr({
	name: "Nathan Kitchens",
	age: 52,
	location: "Hill Valley",
	specialty: "frustration",
	favLang: "COBOL",
	catchPhrase: "I hate stairs"
})


function clg(x) {
	console.log(x);
}

clg(entity.speak())
clg(teacher.demo("cubes"))
clg(teacher.grade(pupil,"cubes"))
clg(pupil.listsSubjs())
clg(pupil.PRAssignment("Plating"))
clg(pupil.sprintChallenge("Place Settings"))
clg(mgr.standup("elevators"))
clg(mgr.debugsCode(pupil))
var FRUIT_BEARING_AGE = 5;
var MAX_AGE = 10;
var orange = createOrange()

function createTree(){	
	return {
		age: 0,
		height: 0,
		orangeCount: 0,
		isAlive: 1,
		grow: grow,
		dropOrange: dropOrange
	}
}

function grow(){
	this.age++;
	this.height+=10;
	if (this.age > MAX_AGE) {
		this.isAlive = false;
	} else if (this.age >= FRUIT_BEARING_AGE){
		this.orangeCount += (Math.floor(Math.random() * 10));
	}
	console.log(this);
}

function dropOrange(){
	return orange;
}

function createOrange(){
	return {
		diameter: (Math.ceil(Math.random() * 10)),
	}
}

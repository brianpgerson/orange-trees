FRUIT_BEARING_AGE = 5;
MAX_AGE = 10;



function createTree(){	
	return {
		age: 0,
		height: 0,
		orangeCount: 0,
		oranges: [],
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
		var randomInt = (Math.floor(Math.random() * 10));
		for (i = 0; i < randomInt; i++){
			this.oranges.push(createOrange())
		}
		this.orangeCount = this.oranges.length;
	}
	console.log(this);
}

function dropOrange(){
	return this.oranges.shift();
}

function createOrange(){
	return {
		diameter: (Math.ceil(Math.random() * 10)),
	}
}

FRUIT_BEARING_AGE = 5;
MAX_AGE = 10;



function createTree(){	
	return new Tree;
}

function Tree(){
	this.name = "";
	this.age = 0;
	this.height = 0;
	this.oranges = [];
	this.orangeCount = this.oranges.length;
	this.isAlive = 1;
}

Tree.prototype.set = function(key, newValue){
	this[key] = newValue;
}

Tree.prototype.grow = function(){
	this.age++;
	this.height+=10;
	if (this.age > MAX_AGE) {
		this.isAlive = false;
	} else if (this.age >= FRUIT_BEARING_AGE){
		var randomInt = (Math.ceil(Math.random() * 10));
		for (i = 0; i < randomInt; i++){
			this.oranges.push(this.createOrange())
		}
		this.orangeCount = this.oranges.length;
	}
	console.log(this);
}

function Orange(){
	this.diameter = (Math.ceil(Math.random() * 10));
}

Tree.prototype.createOrange = function(){
	return new Orange;
}

Tree.prototype.dropOrange = function(){
	this.orangeCount--;
	return this.oranges.shift();
}



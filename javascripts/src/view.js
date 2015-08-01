
window.addEventListener('load', init);

function init(){
	var view = new View;
	var tree = new Tree;
	var controller = new Controller(view, tree);
	controller.bindEventListeners();
	console.log(controller);
}

function View(){
}

View.prototype.nameTree = function(tree){
    document.getElementById("treeName").innerHTML = tree;
    this.plantTree();
}

View.prototype.plantTree = function(){
	document.getElementById("hide").setAttribute("id", "show");
	document.getElementById("plant").setAttribute("id", "hide");
}


function Controller(view, tree){
	this.view = view;
	this.tree = tree;
}

Controller.prototype.nameTree = function(){
    var tree = prompt("Please enter your name", "Enter Here");
       if (tree != null) {
       	this.view.nameTree(tree);
    }
}

Controller.prototype.bindEventListeners = function(){
	document.getElementById("plant").addEventListener("click", this.nameTree.bind(this), false);	
}
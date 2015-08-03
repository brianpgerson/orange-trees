
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

View.prototype.addOrangeToTree = function(){
	var randoMargin = Math.floor(Math.random() * (500 - 1) + 1);
	document.getElementById("orange-overlay").innerHTML += "<div class='orange' style='margin: "+ randoMargin+ "px;'> </div>";
}

View.prototype.removeOrangeFromTree = function(){

}


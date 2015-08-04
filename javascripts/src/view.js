
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

View.prototype.addOrangeToTree = function(diameter){
	var randoTop = Math.floor(Math.random() * (550 - 160) + 260);
	var randoLeft = Math.floor(Math.random() * (700 - 50) + 150);
	document.getElementById("orange-overlay").innerHTML += "<img src='images/orange.gif' height = '" + diameter + "px' class='orange' style='top: "+ randoTop+ "px; left: "+ randoLeft+ "px;'> </div>";
}

View.prototype.removeOrangeFromTree = function(){
	var list = document.getElementById("orange-overlay");
	list.removeChild(list.childNodes[0]);
	list.removeChild(list.childNodes[1]);
	console.log(list);

}

